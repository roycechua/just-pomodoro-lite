import { Dispatch, ReactNode } from 'react';

export type GlobalAppStateProviderType = { children: ReactNode };

export type AppStateType = 'initial' | 'working' | 'break' | string;

export type AppStateReducerActionTypes = 'UPDATE_STATE' | 'RESET_STATE';

export interface InitialGlobalAppStateType {
  appState: AppStateType;
}

export interface InitialGlobalAppStateActionType {
  type: AppStateReducerActionTypes;
  payload?: Partial<InitialGlobalAppStateType>;
}

export type GlobalAppStateContextType = [
  InitialGlobalAppStateType,
  Dispatch<InitialGlobalAppStateActionType>
];

export interface TimerInputType {
  hours?: number;
  minutes?: number;
  seconds?: number;
  onComplete?: () => void;
}

export type ModeType = 'work' | 'break';
