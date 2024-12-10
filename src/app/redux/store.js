// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import { authReducer } from "./auth/slice";
// import { contactsReducer } from "./contacts/slice";
// import { filtersReducer } from "./filters/slice";
// import { rulesReducer } from "./rules/slice.js"
// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };
// const contactsPersistConfig = {
//   key: "phonebook",
//   storage,
//   whitelist: ["contacts"],
// };

// export const store = configureStore({
//   reducer: {
//     rules: rulesReducer,
//   },
// middleware: (getDefaultMiddleware) =>
// getDefaultMiddleware({
//   serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// }),
// });

// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import { rulesReducer } from './rules/slice.js';
import { testsReducer } from './tests/slice.js';

export const store = configureStore({
  reducer: {
    rules: rulesReducer,
    tests: testsReducer,
  },
});
