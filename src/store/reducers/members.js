import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_VALUE = {
  elements: [],
  isLoading: false,
};

const setElements = createAction("@members/setElements");
const setIsLoading = createAction("@members/setIsLoading");

export const membersReducer = createReducer(INITIAL_VALUE, {
  [setElements]: (state, action) => ({ ...state, elements: action.payload }),
  [setIsLoading]: (state, action) => ({ ...state, isLoading: action.payload }),
});

export const membersActions = { setElements, setIsLoading };
