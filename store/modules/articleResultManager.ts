import { createSlice } from "@reduxjs/toolkit";
import * as NewsType from "@/types/typeFiles/News";

const initialState = {
  source: {
    name: "",
  },
  id: "",
  name: "",
  title: "",
  byline: "",
  abstract: "",
  url: "",
  section: "",
  published_date: "",
  media: [
    {
      length: "",
      "media-metadata": [
        {
          url: "",
          format: "",
          height: "",
          width: "",
        },
      ],
    },
  ],
};

const articleResultManager = createSlice({
  name: "articleResultManager",
  initialState,
  reducers: {
    test(state, { type, payload }) {
      const test = { ...state };
      return test;
    },
  },
});

// This if for dispacth
const { test } = articleResultManager.actions;

export { test };

// This if for reducer
export default articleResultManager.reducer;
