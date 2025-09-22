// store/modalSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  downloadSoonOpen: boolean;
}

const initialState: ModalState = {
  downloadSoonOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openDownloadSoon(state) {
      state.downloadSoonOpen = true;
    },
    closeDownloadSoon(state) {
      state.downloadSoonOpen = false;
    },
    setDownloadSoon(state, action: PayloadAction<boolean>) {
      state.downloadSoonOpen = action.payload;
    },
  },
});

export const { openDownloadSoon, closeDownloadSoon, setDownloadSoon } =
  modalSlice.actions;
export default modalSlice.reducer;