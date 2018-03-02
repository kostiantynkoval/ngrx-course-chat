import { AppState } from '@shared/models/app-state.model';

export function mapStateToUserName(state: AppState): string {
  return state.storeData.participants[state.uiState.userId].name;
}
