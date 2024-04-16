import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import AdminSlice from './AdminSlice';


const persistConfig = {
    key: "root",
    storage,
};

const persistedAdminReducer = persistReducer(persistConfig, AdminSlice);


const Store = configureStore({
    reducer: {
        admin: persistedAdminReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

const persistor = persistStore(Store)

export { Store, persistor };