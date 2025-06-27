import {configureStore} from "@reduxjs/toolkit"
import {persistStore,persistReducer,FLUSH,PERSIST,PAUSE,PURGE,REGISTER,REHYDRATE} from "redux-persist"
import storage from "redux-persist/lib/storage"
import states from "./reducer/States"

const persistConfig = {
    key:"root",
    version:1,
    storage
}

const persistedReducer = persistReducer(persistConfig,states)

export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:{
                ignoreActions : [FLUSH,REGISTER,REGISTER,PAUSE,PERSIST,PURGE]
            }
        })
})

export const persistor = persistStore(store)