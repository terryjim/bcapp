import React, {Component} from 'react';
import { Text, View, Image,TouchableHighlight } from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator,createMaterialTopTabNavigator} from 'react-navigation';
import { Input, Button, Icon, ListItem, Avatar,Overlay } from 'react-native-elements';
import Login from '../pages/auth/login'
import ChgPwd from '../pages/auth/chgPwd'
import Iforgot from '../pages/auth/iforgot'
import MainTabs from './mainTabs'
import defaultNavigationOptions from './defaultNavigationOptions'
import Announcement from '../pages/message/announcement'
import SystemMsg from '../pages/message/systemMsg'
import Payment from '../pages/payment'
import Hotels from '../pages/hotels'
import Company from '../pages/company'
import CompanyManage from '../pages/company/manage'
import MemberManage from '../pages/company/member'
import Search from '../pages/company/search'
import CompanyForm from '../pages/company/form'
import House from '../pages/house'
import HouseManage from '../pages/house/manage'
import HouseMemberManage from '../pages/house/member'
import NewPwd from '../pages/auth/newPwd'
import Register from '../pages/auth/register'
import Setting from '../pages/setting'
const But = (props) => {
    const {title,func} = props
    return (
        <Button
            title={title}
            titleStyle={{
                fontSize:15,color:'#fff'
            }}
            type="clear"
            onPress={func}
        />
    )
}
const MsgTabs = createMaterialTopTabNavigator({
    Announcement: {
        screen: Announcement,
        navigationOptions: {
            title: '绿地公告'
        }
    },
    SystemMsg: {
        screen: SystemMsg,
        navigationOptions: {
            title: '系统消息'
        }
    },
}, {
        initialRouteName: 'Announcement',
        tabBarOptions:{
            activeTintColor:"#016843",
	        inactiveTintColor:"#9B9B9B",
            style:{
                backgroundColor:'#fff'
            },
            indicatorStyle:{
                borderBottomWidth:3,
                backgroundColor:'#016843'
            },
            labelStyle:{
                fontSize:14
            },
            tabStyle:{
                borderBottomColor:'#016843',
                borderBottomWidth:1
            }
        },
    })
    let auth = createStackNavigator({
        Register: {
            navigationOptions:(props)=> {
                return {
                    title: '注册',
                    headerRight:(
                        <But title="登录" props func={()=>{
                            props.navigation.navigate('Login')
                        }}/>
                    )
                }
            },
            screen: Register
        },
        NewPwd: {
            navigationOptions:(props)=> {
                return {
                    title: '输入新密码',
                    headerRight:(
                        <But title="注册" props func={()=>{
                            props.navigation.replace('Register')
                        }}/>
                    )
                }
            },
            screen: NewPwd
        },
        Iforgot: {
            navigationOptions:(props)=> {
                return {
                    title: '找回密码',
                    headerRight:(
                        <But title="注册" props func={()=>{
                            props.navigation.navigate('Register')
                        }}/>
                    )
                }
            },
            screen: Iforgot
        },
        Login: {
            navigationOptions:(props)=> {
                return {
                    title: '登录',
                    headerRight:(
                        <But title="注册" props func={()=>{
                            props.navigation.navigate('Register')
                        }}/>
                    )
                }
            },
            screen: Login
        },
    } ,{
        initialRouteName: "Login",
        defaultNavigationOptions
    })
let navigator = createStackNavigator({
    Setting:{
        navigationOptions: {
            title: '设置'
        },
        screen: Setting 
    },
    auth: {
        navigationOptions: {
            header: null,
        },
        screen: auth
    },
    HouseMemberManage:{
        navigationOptions: {
            title: '住宅成员管理'
        },
        screen: HouseMemberManage 
    },
    HouseManage:{
        navigationOptions: {
            title: '住宅管理'
        },
        screen: HouseManage 
    },
    House:{
        navigationOptions: {
            title: '我的住宅'
        },
        screen: House 
    },
    CompanyForm:{
        screen: CompanyForm
    },
    Search:{
        navigationOptions: {
            header: null,
        },
        screen: Search
    },
    MemberManage:{
        navigationOptions:(props)=> {
            return {
                title: '企业成员管理',
                headerRight:(
                    <TouchableHighlight underlayColor='transparent' onPress={()=>{
                        props.navigation.navigate('Search')
                    }}>
                        <Image
                            source={ require('../res/images/Search3x.png')}
                            style={{ width: 14, height: 14,marginRight:16 }}
                        />
                    </TouchableHighlight>
                )
            }
        },
        screen: MemberManage
    },
    CompanyManage:{
        navigationOptions: {
            title: '企业管理'
        },
        screen: CompanyManage
    },
    Company:{
        navigationOptions: {
            title: '我的企业'
        },
        screen: Company
    },
    Hotels:{
        navigationOptions: {
            title: '绿地酒店'
        },
        screen: Hotels
    },
    Payment:{
        navigationOptions: {
            title: '生活缴费'
        },
        screen: Payment
    },
    MsgTabs:{
        navigationOptions: {
            title: '消息列表'
        },
        screen: MsgTabs
    },
    MainTabs: {
        navigationOptions: {
            header: null,
        },
        screen: MainTabs
    }
}, {
    initialRouteName: "MainTabs",
    defaultNavigationOptions
})

let MainNavigator = createSwitchNavigator({
    ChgPwd: {

        screen: ChgPwd
    },
    navigator
    // MainTabs: {
    //     navigationOptions: {
    //         header: null
    //     },
    //     screen: MainTabs
    // }
}, {
    initialRouteName: "navigator",
    defaultNavigationOptions
})

export default MainNavigator
/* export default class Main extends Component {
    render(){
        <View style={{ flex: 1 }}>
        <Spinner
            visible={true}
            textContent={'Loading...'}
        // textStyle={styles.spinnerTextStyle}
        />
        MainNavigator
        </View>
    }
} */