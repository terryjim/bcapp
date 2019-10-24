import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import News from '../pages/news'
import defaultNavigationOptions from './defaultNavigationOptions'

let TabNews = createStackNavigator({
    tabNews_news: {
        navigationOptions: {
            title: '新闻'
        },
        screen: News
    }
}, {
    initialRouteName: "tabNews_news",
    defaultNavigationOptions
})

export default TabNews
