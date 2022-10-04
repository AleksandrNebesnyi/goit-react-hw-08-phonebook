import { configureStore } from '@reduxjs/toolkit'; // Импорт функции создания хранилища и прослойки

import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'; // Импорт функции персистеров и фикса консоли
import storageSession from 'redux-persist/lib/storage/session';
import filterReduser from './contact/filter-reducer';
import { contactApi } from './contact/contacts-sliceApi';
import { usersApi } from './users/users-sliceApi';
import { authSlice } from './auht/auth-slice';

// Создание прослоек. Важен порядок!
// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),

//   contactApi.middleware,
//   usersApi.middleware,
// ];

const persistConfig = {
  key: 'auth',
  storage: storageSession,
  whitelist: ['token'],
};
const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

// Создание хранилища (корневой редюсер + прослойки + тулзы только для разработки)
export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [authSlice.name]: persistedAuthReducer,
    filter: filterReduser,
  },

  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(contactApi.middleware, usersApi.middleware),
// otherMiddlewares,
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

// Обёртка хранилища в персистор
export const persistor = persistStore(store);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
