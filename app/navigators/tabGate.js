import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import Gate from '../pages/gate'
import defaultNavigationOptions from './defaultNavigationOptions'

let TabGate = createStackNavigator({
    tabGate_gate: {
         navigationOptions: {
            header: null
        },
        screen: Gate
    }
}, {
    initialRouteName: "tabGate_gate",
    defaultNavigationOptions
})

export default TabGate
