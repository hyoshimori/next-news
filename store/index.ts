export {}

import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/articleResultManager"

export default configureStore({
  reducer: {
    counter: reducer,
  }
});
