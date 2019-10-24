import React from 'react';
import {Text, View, Image} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import TabHome from './tabHome'
import TabGate from './tabGate'
import TabMy from './tabMy'
import TabMall from './tabMall'
import Tab58 from './tab58'
/* import NoticePage from '../pages/notice'
import MyPage from '../pages/my'
import SettingPage from '../pages/setting'
import LoginPage from '../pages/login'
import NewsPage from '../pages/news'
import WelcomePage from '../pages/welcome'
import ContentPage from '../pages/components/content' */


const MainTabs = createBottomTabNavigator({
  
    mainTabs_home: {
        screen: TabHome,
        navigationOptions: {
            title: '首页',
            tabBarIcon: ({focused, tintColor}) => (<Image
                source={focused
                ? require('../res/images/home_hover.png')
                : require('../res/images/home.png')}
                style={{
                width: 26,
                height: 26,
              /*   tintColor: tintColor */
            }}/>)
        }
    },
    mainTabs_news: {
        screen: TabGate,
        navigationOptions: {
            title: '门禁',
            tabBarIcon: ({focused, tintColor}) => (<Image
                source={focused
                ? require('../res/images/gate_hover.png')
                : require('../res/images/gate.png')}
                style={{
                width: 26,
                height: 26,
              /*   tintColor: tintColor */
            }}/>)
        }
    },
    mainTabs_mall: {
        screen: TabMall,
        navigationOptions: {
            title: '优品',
            tabBarIcon: ({focused, tintColor}) => (<Image
                source={focused
                ? require('../res/images/mall_hover.png')
                : require('../res/images/mall.png')}
                style={{
                width: 26,
                height: 26,
             /*    tintColor: tintColor */
            }}/>)
        }
    },
    mainTabs_mal2l: {
        screen: Tab58,
        navigationOptions: {
            title: '到家精选',
            tabBarIcon: ({focused, tintColor}) => (<Image
                source={focused
                ? require('../res/images/58_hover.png')
                : require('../res/images/58.png')}
                style={{
                width: 26,
                height: 26,
            /*     tintColor: tintColor */
            }}/>)
        }
    },
    mainTabs_my: {
        screen: TabMy,
        navigationOptions: {
            title: '我的',
            tabBarIcon: ({focused, tintColor}) => (<Image
                source={focused
                ? require('../res/images/my_hover.png')
                : require('../res/images/my.png')}
                style={{
                width: 26,
                height: 26,
              /*   tintColor: tintColor */
            }}/>)
        }
    }
}, {
    tabBarOptions: {
        activeTintColor :'green',
        style: {            
            backgroundColor: '#fff',
            paddingBottom: 0,
            borderTopWidth: 0.5,
            borderTopColor: '#25869A', 
            //height:40
        }
    }
})

export default MainTabs