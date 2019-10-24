import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import Home from '../pages/home'
import defaultNavigationOptions from './defaultNavigationOptions'
let TabHome = createSwitchNavigator({
    tabHome_home: {
        /*  navigationOptions: {
            header: null
        },*/
        navigationOptions: {
            title: '首页'
        },
        screen: Home
    }
}, {
    initialRouteName: "tabHome_home",
    defaultNavigationOptions
})

export default TabHome
