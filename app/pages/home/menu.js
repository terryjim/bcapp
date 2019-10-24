import React, {Component} from 'react';
import {StyleSheet, StatusBar, View, Text,Image,Dimensions,TouchableOpacity} from 'react-native';
import {commonStyle} from '../../res/commonStyle'
import Swiper from 'react-native-swiper';
const {width,height} = Dimensions.get('window');
let butMargin = (width-280)/5
export default class Menu extends Component {
    navigationClick= navigationName =>{
        this.props.navigation.navigate(navigationName)
    }
    render() {
        let {menuList} = this.props
        let pages = Math.ceil(menuList.length/8)
        return (
            <Swiper style={{backgroundColor:'#fff'}} dotStyle={{marginBottom:0}} activeDotStyle={{marginBottom:0}} height={160}>
                {/* {menuList && menuList.map((v,i)=>{
                    
                })} */}
                <View>
                    <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:13,alignItems:'center',}}>
                        <TouchableOpacity onPress={this.navigationClick.bind(this,'Payment')}>
                            <View style={{alignItems:'center',width:70,height:58,marginLeft:butMargin,marginTop:10}}> 
                                <Image style={{width:41,height:41}} source={require('../../res/images/47_13x.png')}/>
                                <Text style={{fontSize:12,color:'#000'}}>生活缴费</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.navigationClick.bind(this,'Login')}>
                            <View style={{alignItems:'center',width:70,height:58,marginLeft:butMargin,marginTop:10}}> 
                                <Image style={{width:41,height:41}} source={require('../../res/images/47_23x.png')}/>
                                <Text style={{fontSize:12,color:'#000'}}>智慧停车</Text>
                            </View>
                        </TouchableOpacity>   
                        <View style={{alignItems:'center',width:70,height:58,marginLeft:butMargin,marginTop:10}}> 
                            <Image style={{width:41,height:41}} source={require('../../res/images/47_33x.png')}/>
                            <Text style={{fontSize:12,color:'#000'}}>物业报修</Text>
                        </View>
                        <View style={{alignItems:'center',width:70,height:58,marginLeft:butMargin,marginTop:10}}> 
                            <Image style={{width:41,height:41}} source={require('../../res/images/47_43x.png')}/>
                            <Text style={{fontSize:12,color:'#000'}}>绿地优品</Text>
                        </View>
                        <TouchableOpacity onPress={this.navigationClick.bind(this,'Hotels')}>
                            <View style={{alignItems:'center',width:70,height:58,marginLeft:butMargin,marginTop:10}}> 
                                <Image style={{width:41,height:41}} source={require('../../res/images/47_53x.png')}/>
                                <Text style={{fontSize:12,color:'#000'}}>绿地酒店</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{alignItems:'center',width:70,height:58,marginLeft:butMargin,marginTop:10}}> 
                            <Image style={{width:41,height:41}} source={require('../../res/images/47_63x.png')}/>
                            <Text style={{fontSize:12,color:'#000'}}>全民经纪人</Text>
                        </View>
                        <View style={{alignItems:'center',width:70,height:58,marginLeft:butMargin,marginTop:10}}> 
                            <Image style={{width:41,height:41}} source={require('../../res/images/47_73x.png')}/>
                            <Text style={{fontSize:12,color:'#000'}}>绿地新闻</Text>
                        </View>
                        <View style={{alignItems:'center',width:70,height:58,marginLeft:butMargin,marginTop:10}}> 
                            <Image style={{width:41,height:41}} source={require('../../res/images/47_83x.png')}/>
                            <Text style={{fontSize:12,color:'#000'}}>到家精选</Text>
                        </View>
                    </View>
                </View>
            </Swiper>
        
      );
    }
}
/*<View style={{backgroundColor:'#fff'}}>
            {menuList && menuList.map((l, i)=>{
                if(i%4==0){
                    return()
                }
            })}
             <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:13,justifyContent:'space-around'}}>
                <View style={{alignItems:'center',width:60,height:58}}> 
                    <Image style={{width:41,height:41}} source={{uri:'https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/29111255838zhmj3x.png'}}/>
                    <Text>智慧门禁</Text>
                </View>
                <View style={{alignItems:'center',width:60,height:58}}> 
                    <Image style={{width:41,height:41}} source={{uri:'https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/29111255838zhmj3x.png'}}/>
                    <Text>智慧门禁</Text>
                </View>
                <View style={{alignItems:'center',width:60,height:58}}> 
                    <Image style={{width:41,height:41}} source={{uri:'https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/29111255838zhmj3x.png'}}/>
                    <Text>智慧门禁</Text>
                </View>
                <View style={{alignItems:'center',width:60,height:58}}> 
                    <Image style={{width:41,height:41}} source={{uri:'https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/29111255838zhmj3x.png'}}/>
                    <Text>智慧门禁</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',flexWrap:'wrap',marginHorizontal:10,marginTop:13,justifyContent:'space-around'}}>
                <View style={{alignItems:'center',width:60,height:58}}> 
                    <Image style={{width:41,height:41}} source={{uri:'https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/29111255838zhmj3x.png'}}/>
                    <Text>智慧门禁</Text>
                </View>
                <View style={{alignItems:'center',width:60,height:58}}> 
                    <Image style={{width:41,height:41}} source={{uri:'https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/29111255838zhmj3x.png'}}/>
                    <Text>智慧门禁</Text>
                </View>
                <View style={{alignItems:'center',width:60,height:58}}> 
                    <Image style={{width:41,height:41}} source={{uri:'https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/29111255838zhmj3x.png'}}/>
                    <Text>智慧门禁</Text>
                </View>
                <View style={{alignItems:'center',width:60,height:58}}> 
                    <Image style={{width:41,height:41}} source={{uri:'https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/29111255838zhmj3x.png'}}/>
                    <Text>智慧门禁</Text>
                </View>
            </View> 
        </View>*/
const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: commonStyle.spinnerTextColor
    }
})
