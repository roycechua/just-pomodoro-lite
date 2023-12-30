import { Reducer, createContext, useContext, useReducer } from 'react';
import {
  GlobalAppStateContextType,
  GlobalAppStateProviderType,
  InitialGlobalAppStateActionType,
  InitialGlobalAppStateType,
} from '../types';
import { RESET_STATE, UPDATE_STATE } from './GlobalAppStateReducerActionTypes';

const initialGlobalAppState = {
  appState: 'initial',
};

const globalAppStateReducer: Reducer<
  InitialGlobalAppStateType,
  InitialGlobalAppStateActionType
> = (state, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return { ...state, ...action.payload };
    case RESET_STATE:
      return { ...initialGlobalAppState };
    default:
      return state;
  }
};

const GlobalAppStateContext = createContext<GlobalAppStateContextType>([
  initialGlobalAppState,
  () => {},
]);

const useGlobalAppState = () => useContext(GlobalAppStateContext);

const GlobalAppStateProvider = ({ children }: GlobalAppStateProviderType) => {
  const globalAppState = useReducer(
    globalAppStateReducer,
    initialGlobalAppState
  );

  return (
    <GlobalAppStateContext.Provider value={globalAppState}>
      {children}
    </GlobalAppStateContext.Provider>
  );
};

export { useGlobalAppState, GlobalAppStateProvider };
