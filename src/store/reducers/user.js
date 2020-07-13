import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_VALUE = {};

const set = createAction("@user/set");

export const userReducer = createReducer(INITIAL_VALUE, {
  [set]: (_, action) => action.payload,
});

export const actions = { set };
