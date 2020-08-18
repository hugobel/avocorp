import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_VALUE = {
  elements: [],
};

const setElements = createAction("@members/setElements");

export const membersReducer = createReducer(INITIAL_VALUE, {
  [setElements]: (state, action) => ({ ...state, elements: action.payload }),
});

export const membersActions = { setElements };
