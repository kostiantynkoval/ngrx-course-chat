import { INITIAL_UI_STATE, UiState} from '@shared/models/ui-state.model';
import { INITIAL_STORE_DATA, StoreData} from '@shared/models/store-data.model';

export interface AppState {
  uiState: UiState;
  storeData: StoreData;
}

export const INITIAL_APP_STATE: AppState = {
  uiState: INITIAL_UI_STATE,
  storeData: INITIAL_STORE_DATA
};
