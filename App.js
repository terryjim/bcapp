import React from 'react';
import { Text, View, StatusBar } from 'react-native';

import reducers from './app/reducers'

import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-native-elements'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' //defaults to localStorage for web and AsyncStorage for react-native
import { PersistGate } from 'redux-persist/integration/react'
import { createAppContainer } from 'react-navigation'

import MainNavigator from './app/navigators'
import rootSaga from './app/sagas'
import Loading from './app/pages/loading'
import {commonStyle} from './app/res/commonStyle'
import SplashScreen from 'react-native-splash-screen'
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['loading','sms'] // reducer 里不持久化的数据
}
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  // 包装createReducer 即 rootReducer
  persistReducer(persistConfig, reducers), compose(
    applyMiddleware(sagaMiddleware),
    // autoRehydrate() 
  )
)
sagaMiddleware.run(rootSaga)
const persistor = persistStore(store)

const PersistorLoading= () => <Text>loading</Text>
const App = createAppContainer(MainNavigator)
//const App = (News)
export default class Container extends React.Component {
  componentDidMount() {
    setTimeout(SplashScreen.hide,2000);
}
  render() {
    return (
      <Provider store={store}>
       {/*  <PersistGate persistor={persistor} loading={<Loading/>} > }*/}
          <ThemeProvider>   
            <View　style={{flex:1}}      >
            <StatusBar
                    barStyle="light-content"
                   /*  barStyle='dark-content' */
                    //backgroundColor={commonStyle.themeColor}
                    backgroundColor='rgba(255, 255, 255, 0)'
                    translucent={true}
                    //hidden={true}
                />           
            <App />
            <Loading/>
            </View>
          </ThemeProvider>
      {/*   </PersistGate> */}
      </Provider>
    )
  }
}

