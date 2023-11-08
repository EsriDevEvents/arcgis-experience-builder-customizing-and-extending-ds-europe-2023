import { type ImmutableObject, type ClauseLogic } from 'jimu-core'

// create an interface for configuring the filter fields
export interface FilterField {
  name: string
  label: string
  min: number
  max: number
}

// create an interface for the widget config
export interface config {
  logicOp: ClauseLogic
  fields: FilterField[]
}

// export an immutable config type
export type IMConfig = ImmutableObject<config>
