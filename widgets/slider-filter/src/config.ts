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

import { type ImmutableObject, type ClauseLogic } from "jimu-core";

// create an interface for configuring the filter fields
export interface FilterField {
  name: string;
  label: string;
  min: number;
  max: number;
}

// create an interface for the widget config
export interface config {
  logicOp: ClauseLogic;
  fields: FilterField[];
}

// export an immutable config type
export type IMConfig = ImmutableObject<config>;
