export interface UiState {
  userId: number;
  currentThreadId: number;
}

export const INITIAL_UI_STATE: UiState = {
  userId: 1, // fixme: undefined,
  currentThreadId: undefined
};
