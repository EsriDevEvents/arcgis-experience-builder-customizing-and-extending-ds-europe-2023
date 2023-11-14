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
  Immutable,
  JimuFieldType,
  DataSourceManager,
  ClauseLogic,
  type SqlQueryParams,
  type IMFieldSchema,
  type UseDataSource,
  type DataRecord,
  type FeatureLayerDataSource,
} from "jimu-core";
import { type AllWidgetSettingProps } from "jimu-for-builder";
import { Button } from "jimu-ui";
import {
  DataSourceSelector,
  AllDataSourceTypes,
  FieldSelector,
} from "jimu-ui/advanced/data-source-selector";
import {
  SettingSection,
  SettingRow,
  MapWidgetSelector,
} from "jimu-ui/advanced/setting-components";
import { type IMConfig, type FilterField } from "../config";
import defaultMessage from "./translations/default";

// unpack the required hooks from React
const { useState, useEffect } = React;

// define an interface for the extra props
interface ExtraProps {
  id: string;
}

// define the props type using the config and the extra props
type SettingProps = AllWidgetSettingProps<IMConfig> & ExtraProps;

/**
 * The Setting component allows the user to select an associated Map Widget and use a Feature Layer as a Data Source.
 * The user can then select whether to configure the filter with AND or OR mode.
 * Finally, they can select the Filter Fields from the fields from the Data Source.
 */
const Setting = (props: SettingProps) => {
  // unpack the props
  const {
    id,
    intl,
    config,
    useMapWidgetIds,
    useDataSources,
    useDataSourcesEnabled,
    onSettingChange,
  } = props;

  // set up state variables to handle the internal state logic of the widget during setting
  const [records, setRecords] = useState([] as DataRecord[]);

  // useEffect hook to asynchronously set the records when the data source has loaded
  useEffect(
    () => {
      // check whether the data source has loaded
      if (useDataSources) {
        // define an asynchronous function to fetch the data record
        const fetchRecords = async () => {
          const dsManager = DataSourceManager.getInstance();
          const dataSource = dsManager.getDataSource(
            useDataSources[0].dataSourceId
          ) as FeatureLayerDataSource;
          const sqlQuery = { outFields: ["*"] } as SqlQueryParams;
          const queryResult = await dataSource.query(sqlQuery);
          return queryResult.records;
        };
        // call the fetchRecords function and use the response to set the state
        fetchRecords().then((res: DataRecord[]): void => {
          setRecords(res);
        });
      }
      // reset the state on dismount
      return (): void => {
        setRecords([] as DataRecord[]);
      };
    },
    // sole dependency on the data source loading
    [useDataSources]
  );

  // helper function to update properties of the widget config
  const updateConfig = (
    prop: string,
    value: ClauseLogic | FilterField[]
  ): void => {
    onSettingChange({
      id: id,
      config: config.set(prop, value),
    });
  };

  // callback to set useMapWidgetIds when a map widget is selected
  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds,
    });
  };

  // callback to update the fields in the widget config when they are selected
  const onFieldChange = (allSelectedFields: IMFieldSchema[]) => {
    // update the fields in the data source
    onSettingChange({
      id: id,
      useDataSources: [
        {
          ...useDataSources[0],
          fields: allSelectedFields.map((f) => f.jimuName),
        },
      ],
    });
    // map the fields to new FilterField objects in the widget config
    const fields = allSelectedFields.map(
      (field: IMFieldSchema): FilterField => {
        // read the records form the widget state to find all field values in the data
        const vals = records.map((record) =>
          record.getFieldValue(field.jimuName)
        ) as number[];
        // get the minimum field value and round down to the nearest integer multiple of a power of ten
        const minimum = Math.min(...vals);
        const minZeroes =
          minimum === 0 ? 0 : Math.floor(Math.log10(Math.abs(minimum)));
        const sliderMin =
          Math.floor(minimum / Math.pow(10, minZeroes)) *
          Math.pow(10, minZeroes);
        // get the maximum field value and round up to the nearest integer multiple of a power of ten
        const maximum = Math.max(...vals);
        const maxZeroes =
          maximum === 0 ? 0 : Math.floor(Math.log10(Math.abs(maximum)));
        const sliderMax =
          Math.ceil(maximum / Math.pow(10, maxZeroes)) *
          Math.pow(10, maxZeroes);
        return {
          name: field.jimuName,
          label: field.alias ? field.alias : field.jimuName,
          // fix JS precision errors
          min: Number(sliderMin.toPrecision(1)),
          max: Number(sliderMax.toPrecision(1)),
        };
      }
    );
    // update the config
    updateConfig("fields", fields);
  };

  // callback to handle enabling of data source
  const onToggleUseDataEnabled = (useDataSourcesEnabled: boolean) => {
    onSettingChange({
      id: id,
      useDataSourcesEnabled,
    });
  };

  // callback to handle data source change
  const onDataSourceChange = (useDataSources: UseDataSource[]) => {
    onSettingChange({
      id: id,
      useDataSources: useDataSources,
    });
  };

  // callback to update widget config when logical operator is changed
  const onLogicOpChange = (logicOp: ClauseLogic) => {
    updateConfig("logicOp", logicOp);
  };

  // helper function to render the components which facilitate setting the logical operator
  const renderOpSetting = () => {
    return (
      <SettingSection className="map-selector-section">
        <SettingRow flow="wrap" label="Logical Operator">
          <div className="d-flex w-100 select-mode-con">
            <div className="flex-grow-1 text-truncate">
              <Button
                className="w-100"
                active={config.logicOp === ClauseLogic.And}
                onClick={() => {
                  onLogicOpChange(ClauseLogic.And);
                }}
              >
                {ClauseLogic.And}
              </Button>
            </div>
            <div className="flex-grow-1 ml-2 text-truncate">
              <Button
                className="w-100"
                active={config.logicOp === ClauseLogic.Or}
                onClick={() => {
                  onLogicOpChange(ClauseLogic.Or);
                }}
              >
                {ClauseLogic.Or}
              </Button>
            </div>
          </div>
        </SettingRow>
      </SettingSection>
    );
  };

  // render the setting component
  return (
    <div className="use-feature-layer-setting p-2">
      <SettingSection
        className="map-selector-section"
        title={intl.formatMessage({
          id: "mapWidgetLabel",
          defaultMessage: defaultMessage.selectMapWidget,
        })}
      >
        <SettingRow>
          <MapWidgetSelector
            onSelect={onMapWidgetSelected}
            useMapWidgetIds={useMapWidgetIds}
          />
        </SettingRow>
      </SettingSection>
      <DataSourceSelector
        types={Immutable([AllDataSourceTypes.FeatureLayer])}
        useDataSources={useDataSources}
        useDataSourcesEnabled={useDataSourcesEnabled}
        onToggleUseDataEnabled={onToggleUseDataEnabled}
        onChange={onDataSourceChange}
        widgetId={id}
      />
      {useDataSources && useDataSources.length > 0 && renderOpSetting()}
      {useDataSources && useDataSources.length > 0 && (
        <FieldSelector
          types={Immutable([JimuFieldType.Number])}
          useDataSources={useDataSources}
          onChange={onFieldChange}
          selectedFields={useDataSources[0].fields || Immutable([])}
          isMultiple={true}
        />
      )}
    </div>
  );
};

// export the Setting component
export default Setting;
