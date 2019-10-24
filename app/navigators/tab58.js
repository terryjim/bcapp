import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import Camera from '../pages/camera'
import defaultNavigationOptions from './defaultNavigationOptions'

let Tab58 = createStackNavigator({
    tab58_index: {
       navigationOptions: {
            header: null
        },
        screen: Camera
    }
}, {
    initialRouteName: "tab58_index",
    defaultNavigationOptions
})

export default Tab58
