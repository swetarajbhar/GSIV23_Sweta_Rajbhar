import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../features/topNavBar/searchSlice";

export default configureStore({
  reducer: {
    search: searchSlice
  }
});