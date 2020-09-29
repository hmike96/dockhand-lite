import {IArtifacts} from './IArtifacts'
import {IEvent, IEventFallback} from './IEvent'
import {ITrigger} from './ITrigger'

export interface IOverrides {
  overrides: IOverride[];
}

type IOverride = IArtifacts & IEvent & IEventFallback & ITrigger
