import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Dimensions,
    LayoutAnimation,
    UIManager,
    KeyboardAvoidingView,AsyncStorage,Image,ScrollView,TouchableHighlight
} from 'react-native';
import {Input, Button, Icon,ListItem} from 'react-native-elements';
import ActionType from '../../config/actionType'
import {connect} from 'react-redux'
import {NavigationEvents} from 'react-navigation'
import Tips from '../../utils/tips'
import defaultStyles from '../../res/commonStyle'

const BG_IMAGE = require('../../res/images/top_image_bg3x.png');
const TOP_LOGO_IMAGE = require('../../res/images/top_logo3x.png');

const SCREEN_WIDTH = Dimensions
    .get('window')
    .width;
const SCREEN_HEIGHT = Dimensions
    .get('window')
    .height;

class My extends Component {
    constructor(props) {
        super(props);
        //this._bootstrapAsync();
        if (!this.props.user || !this.props.user.token) {
            this
                .props
                .navigation
                .navigate('mainTabs_news')
        }
      }
    componentDidUpdate() {
      /*   
        if (!this.props.user || !this.props.user.token) {
            this
                .props
                .navigation
                .navigate('mainTabs_news')
        } */
    }
    skip=navigationName=>{
        this.props.navigation.navigate(navigationName)
    }
    render() {
        const {token} = this.props.user
        return (
            <ScrollView style={defaultStyles.container}>
                <NavigationEvents
                    onDidFocus={payload => !token
                    ? this
                        .props
                        .navigation
                        .navigate('Login')
                    : ''}/>
                <ImageBackground style={styles.bgImage} source={BG_IMAGE}>
                    <View style={styles.head}>
                        <Image source={TOP_LOGO_IMAGE} style={{height:20,width:57,marginLeft:10}}/>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:13}}>
                        <Image source={TOP_LOGO_IMAGE} style={{height:66,width:66,borderRadius:50,borderColor:'#fff',borderWidth:3,marginLeft:36,marginRight:16}}/>
                        <Text style={{fontSize:22,color:'#fff'}}>张三</Text>
                    </View>
                </ImageBackground>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:12}}>
                    <View style={{alignItems:'center',marginLeft:40}}>
                        <Text style={{fontSize:24,color:'#4a4a4a',fontWeight:'bold'}}>500</Text>
                        <Text style={{fontSize:12,color:'#9b9b9b'}}>积分</Text>
                    </View>
                    <View style={{height:44,width:120,backgroundColor:'rgba(1,104,67,0.25)',borderColor:'rgba(1,104,67,0.5)',borderWidth:1,justifyContent:'center',alignItems:'center',marginRight:16,borderRadius:22}}> 
                        <Text style={{fontWeight:'bold',fontSize:17,color:'#016843'}}>兑换物品</Text>
                    </View>
                </View>
                <View style={{marginTop:12}}>
                    <ScrollView horizontal>
                        <TouchableHighlight underlayColor='transparent' onPress={this.skip.bind(this,'House')}>
                            <View style={{width:88,height:88,borderRadius:5,backgroundColor:'#fff',marginLeft:16,justifyContent:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{marginLeft:10,fontSize:14,color:'#000',fontWeight:'400'}}>我的住宅</Text>
                                    <View style={{height:5,width:5,borderRadius:50,backgroundColor:'red',marginLeft:8}}></View>
                                </View>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{marginLeft:10,fontSize:14,color:'#9b9b9b'}}>暂无住宅</Text>
                                <Image source={require('../../res/images/18x18_13x.png')} style={{height:18,width:18,marginLeft:10,marginTop:10}}/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='transparent' onPress={this.skip.bind(this,'Company')}>
                            <View style={{width:88,height:88,borderRadius:5,backgroundColor:'#fff',marginLeft:16,justifyContent:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{marginLeft:10,fontSize:14,color:'#000',fontWeight:'400'}}>我的企业</Text>
                                    <View style={{height:5,width:5,borderRadius:50,backgroundColor:'red',marginLeft:8}}></View>
                                </View>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{marginLeft:10,fontSize:14,color:'#9b9b9b'}}>当代梦工厂asdfasdf</Text>
                                <Image source={require('../../res/images/18x18_13x.png')} style={{height:18,width:18,marginLeft:10,marginTop:10}}/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='transparent' onPress={this.skip.bind(this,'')}>
                            <View style={{width:88,height:88,borderRadius:5,backgroundColor:'#fff',marginLeft:16,justifyContent:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{marginLeft:10,fontSize:14,color:'#000',fontWeight:'400'}}>优惠券</Text>
                                    <View style={{height:5,width:5,borderRadius:50,backgroundColor:'red',marginLeft:8}}></View>
                                </View>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{marginLeft:10,fontSize:14,color:'#9b9b9b'}}>暂无优惠券</Text>
                                <Image source={require('../../res/images/18x18_13x.png')} style={{height:18,width:18,marginLeft:10,marginTop:10}}/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='transparent' onPress={this.skip.bind(this,'')}>
                            <View style={{width:88,height:88,borderRadius:5,backgroundColor:'#fff',marginLeft:16,justifyContent:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{marginLeft:10,fontSize:14,color:'#000',fontWeight:'400'}}>我的车辆</Text>
                                    <View style={{height:5,width:5,borderRadius:50,backgroundColor:'red',marginLeft:8}}></View>
                                </View>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{marginLeft:10,fontSize:14,color:'#9b9b9b'}}>暂无车辆</Text>
                                <Image source={require('../../res/images/18x18_13x.png')} style={{height:18,width:18,marginLeft:10,marginTop:10}}/>
                            </View>
                        </TouchableHighlight>
                    </ScrollView>
                </View>
                <View style={{marginTop:16}}>
                    <ListItem
                        title='我的订单'
                        chevron={
                            <Icon
                                name='right'
                                type='antdesign'
                                color='#9b9b9b'
                                size={17}
                            /> 
                        }
                        titleStyle={{
                            fontSize:14,
                            color:'#4a4a4a'
                        }}
                        containerStyle={{
                            height:44,
                            borderBottomWidth:1,
                            borderBottomColor:'#f2f2f2'
                        }}
                    />
                    <ListItem
                        title='人脸录入'
                        chevron={
                            <Icon
                                name='right'
                                type='antdesign'
                                color='#9b9b9b'
                                size={17}
                            /> 
                        }
                        titleStyle={{
                            fontSize:14,
                            color:'#4a4a4a'
                        }}
                        containerStyle={{
                            height:44,
                            borderBottomWidth:1,
                            borderBottomColor:'#f2f2f2'
                        }}
                    />
                    <ListItem
                        title='我的活动'
                        chevron={
                            <Icon
                                name='right'
                                type='antdesign'
                                color='#9b9b9b'
                                size={17}
                            /> 
                        }
                        titleStyle={{
                            fontSize:14,
                            color:'#4a4a4a'
                        }}
                        containerStyle={{
                            height:44,
                            borderBottomWidth:1,
                            borderBottomColor:'#f2f2f2'
                        }}
                    />
                    <ListItem
                        title='意见反馈'
                        chevron={
                            <Icon
                                name='right'
                                type='antdesign'
                                color='#9b9b9b'
                                size={17}
                            /> 
                        }
                        titleStyle={{
                            fontSize:14,
                            color:'#4a4a4a'
                        }}
                        containerStyle={{
                            height:44,
                            borderBottomWidth:1,
                            borderBottomColor:'#f2f2f2'
                        }}
                    />
                    <ListItem
                        title='关于我们'
                        chevron={
                            <Icon
                                name='right'
                                type='antdesign'
                                color='#9b9b9b'
                                size={17}
                            /> 
                        }
                        titleStyle={{
                            fontSize:14,
                            color:'#4a4a4a'
                        }}
                        containerStyle={{
                            height:44,
                            borderBottomWidth:1,
                            borderBottomColor:'#f2f2f2'
                        }}
                    />
                    <ListItem
                        title='设置'
                        chevron={
                            <Icon
                                name='right'
                                type='antdesign'
                                color='#9b9b9b'
                                size={17}
                            /> 
                        }
                        titleStyle={{
                            fontSize:14,
                            color:'#4a4a4a'
                        }}
                        containerStyle={{
                            height:44,
                            borderBottomWidth:1,
                            borderBottomColor:'#f2f2f2'
                        }}
                        onPress={this.skip.bind(this,'Setting')}
                    />
                </View>
            </ScrollView>
            // <View
            //     style={{
            //     flex: 1,
            //     justifyContent: "center",
            //     alignItems: "center"
            // }}>
            //     <NavigationEvents
            //         onDidFocus={payload => !token
            //         ? this
            //             .props
            //             .navigation
            //             .navigate('Login')
            //         : ''}/>
            //     <Text>我的{token}</Text>
            //     <Text  selectable={true}>{JSON.stringify(this.props.user)}</Text>
            //     <Button
            //         type="clear"
            //         activeOpacity={0.7}
            //         onPress={() => this.props.dispatch({type: ActionType.auth.loginOut})}
            //         containerStyle={{
            //         flex: 1
            //     }}
            //         title={'登出'}/>
            //          <Button
            //         type="clear"
            //         activeOpacity={0.7}
            //         onPress={() =>{
            //             this.props.dispatch({type: 'RESET_STORE'});
            //             Tips.toast('已清除所有缓存数据')
            //            }}
            //         containerStyle={{
            //         flex: 1
            //     }}
            //         title={'清空缓存'}/>
            // </View>
        );
    }
}

const mapStateToProps = (state) => {
    let user = state.user
    return {user}
}
My = connect(mapStateToProps)(My)
export default My;
const styles = StyleSheet.create({
    head:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:36,
      marginBottom:10
    },
    bgImage: {
      //flex: 1,
      width: SCREEN_WIDTH,
      height: 169,
    },
    wrapper: {
      height: 140
    },
    oneRow: {
      flexDirection: "row",
      //height: 180,
      padding: 25,
      width: SCREEN_WIDTH,
    },
  })