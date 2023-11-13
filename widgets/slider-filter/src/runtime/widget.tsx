/** @jsx jsx */

/**
 * Copyright 2023 ESRI (UK) Limited
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the Licence.
 * A copy of the license is available in the repository's license.txt file.
 */

import {
  React,
  jsx,
  DataSourceComponent,
  DataSourceManager,
  type AllWidgetProps,
  type ImmutableObject,
  type FeatureLayerDataSource,
  type SqlQueryParams,
} from "jimu-core";
import { Button, defaultMessages as jimuiDefaultMessage } from "jimu-ui";
import { type IMConfig, type FilterField } from "../config";
import { CalciteSlider } from "calcite-components";

// unpack required hooks from React
const { useState, useEffect, useMemo } = React;

// define the props type for the widget using the config
type WidgetProps = AllWidgetProps<IMConfig>;

/**
 * The Widget component allows the user to filter the visible data by using sliders or text fields
 * to specify the minimum allowed value for the configured numeric fields.
 */
const Widget = (props: WidgetProps) => {
  // unpack props
  const { id, config, useMapWidgetIds, useDataSources } = props;

  // instantiate and memoise Data Sorce Manager
  const dsManager = useMemo<DataSourceManager>(
    () => DataSourceManager.getInstance(),
    []
  );

  // set up state variables to handle the internal state logic of the widget at runtime
  const [dsConfigured, setDsConfigured] = useState(false);
  const [vals, setVals] = useState(
    null as ImmutableObject<{ [key: string]: number }>
  );

  // useEffect hook to determine whether the data source is loaded
  useEffect(
    () => {
      // check whether data source has loaded
      if (
        useDataSources &&
        useDataSources.length === 1 &&
        useDataSources[0].fields &&
        useDataSources[0].fields.length > 0
      ) {
        // modify the state
        setDsConfigured(true);
      }
      // reset the state on disomunt
      return (): void => {
        setDsConfigured(false);
      };
    },
    // sole dependency is the useDataSources prop
    [useDataSources]
  );

  // useEffect hook to get the initial values once the data source has loaded
  useEffect(
    () => {
      // Check whether the data source is configured
      if (dsConfigured) {
        // initialise tha values as the minima stored in the widget config
        const newVals = config.fields.reduce((acc, field) => {
          return { ...acc, [field.name]: field.min };
        }, {}) as ImmutableObject<{ [key: string]: number }>;
        // set the state
        setVals(newVals);
      }
      // reset the state on dismount
      return (): void => {
        setVals(null as ImmutableObject<{ [key: string]: number }>);
      };
    },
    // dependency on the data source configuration status and the config values
    [dsConfigured, config]
  );

  // function to set the values and execute a query when a value is specified for a field
  const setValAndExecuteQuery = (fieldName: string, val: number): void => {
    // get the new values from the exisiting values by only modifying the specified field's value
    const newVals = config.fields.reduce((acc, field) => {
      return {
        ...acc,
        [field.name]: field.name === fieldName ? val : vals[field.name],
      };
    }, {}) as ImmutableObject<{ [key: string]: number }>;
    // get the feature layer data source using the Data Source Manager
    const dataSource = dsManager.getDataSource(
      useDataSources[0].dataSourceId
    ) as FeatureLayerDataSource;
    // construct a SQL expression for the query using the new values
    const sqlExpr = config.fields.reduce(
      (expr: string, field: FilterField, index: number) => {
        if (index === 0) {
          return expr;
        }
        return expr.concat(
          " ",
          config.logicOp,
          " ",
          field.name,
          " >= ",
          newVals[field.name].toString()
        );
      },
      config.fields[0].name.concat(
        " >= ",
        newVals[config.fields[0].name].toString()
      )
    );
    // create a SqlQueryParams object containing the SQL expression
    const sqlQuery = { where: sqlExpr } as SqlQueryParams;
    // execute the query on the feature layer data source
    dataSource.updateQueryParams(sqlQuery, useMapWidgetIds[0]);
    // set the new values in the widget state
    setVals(newVals);
  };

  // function to reset the values and execute a query
  const resetValsandExecuteQuery = () => {
    // get the new values from the minima specified in config
    const newVals = config.fields.reduce((acc, field) => {
      return { ...acc, [field.name]: field.min };
    }, {}) as ImmutableObject<{ [key: string]: number }>;
    // get the feature layer data source using the Data Source Manager
    const dataSource = dsManager.getDataSource(
      useDataSources[0].dataSourceId
    ) as FeatureLayerDataSource;
    // construct an empty SQL expression so all features will be visible
    const sqlExpr = "";
    // create a SqlQueryParams object containing the SQL expression
    const sqlQuery = { where: sqlExpr } as SqlQueryParams;
    // execute the query on the feature layer data source
    dataSource.updateQueryParams(sqlQuery, useMapWidgetIds[0]);
    // set the new values in the widget state
    setVals(newVals);
  };

  // function to handle a change to a field's value
  const handleFieldValChange = (fieldName: string) => {
    // create a callback
    const handleValChange = (e: any): void => {
      // call the setValAndExecuteQuery with the first argument fixed
      setValAndExecuteQuery(fieldName, +e.target.value);
    };
    // return the callback
    return handleValChange;
  };

  // check whether the data source is configured
  if (dsConfigured) {
    // render the runtime component
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          maxHeight: "800px",
          overflow: "auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
        >
          <h3>Slider Filter</h3>
          <div>Set the value for each filter field using the slider.</div>
        </div>
        <div style={{ paddingTop: "10px" }}>
          <DataSourceComponent useDataSource={useDataSources[0]} widgetId={id}>
            {
              // map each field to it's own slider using Calcite Design
              config.fields.map((field) => (
                <div>
                  <div style={{ textAlign: "left", paddingLeft: "5px" }}>
                    <h5>{field.label}</h5>
                  </div>
                  <CalciteSlider
                    value={vals ? vals[field.name] : field.min}
                    // use handleFieldValChange to return the required callback
                    onCalciteSliderChange={handleFieldValChange(field.name)}
                    min={field.min}
                    max={field.max}
                    step={(field.max - field.min) / 100}
                  ></CalciteSlider>
                  <div
                    style={{
                      textAlign: "right",
                      paddingRight: "5px",
                      display: "flex",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <span>
                      <input
                        style={{ flex: "1 0 30px", textAlign: "right" }}
                        value={vals ? vals[field.name] : field.min}
                        onChange={handleFieldValChange(field.name)}
                      />
                    </span>
                    <span>Minimum: </span>
                  </div>
                </div>
              ))
            }
            <Button
              style={{
                width: "100%",
              }}
              title={"reset-button"}
              disabled={!dsConfigured}
              onClick={resetValsandExecuteQuery}
            >
              Reset
            </Button>
          </DataSourceComponent>
        </div>
      </div>
    );
  } else {
    // render a simple message which will display until a data source and fields are selected
    return <h3>Please configure the data source and select fields.</h3>;
  }
};

// export the Widget component
export default Widget;
