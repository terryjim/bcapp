import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import Mall from '../pages/mall'
import defaultNavigationOptions from './defaultNavigationOptions'

let TabMall = createStackNavigator({
    tabMall_mall: {
       navigationOptions: {
            header: null
        },
        screen: Mall
    }
}, {
    initialRouteName: "tabMall_mall",
    defaultNavigationOptions
})

export default TabMall
