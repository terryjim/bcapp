import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Slider,
  TouchableWithoutFeedback,
  Dimensions,Image,ImageBackground,TouchableHighlight
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import Menu from './menu';
import { MarqueeVertical } from 'react-native-marquee-ab'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const BG_IMAGE = require('../../res/images/top_image_bg3x.png');
const MSG_IMAGE = require('../../res/images/msg3x.png');
const TOP_LOGO_IMAGE = require('../../res/images/top_logo3x.png');

const menuData = [
  {
    "Title": "智慧门禁",
    "FileId": "1",
    "Url": "https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/29111255838zhmj3x.png",
    "LinkUrl": null,
    "LoginStatus": "1",
    "ItemType": 0,
    "UrlSelected": null
  },
  {
      "Title": "企业考勤",
      "FileId": "2",
      "Url": "https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/29112754537qykq3x.png",
      "LinkUrl": null,
      "LoginStatus": "1",
      "ItemType": 0,
      "UrlSelected": null
  },
  {
      "Title": "物业管家",
      "FileId": "3",
      "Url": "https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/29112754670wygj3x.png",
      "LinkUrl": null,
      "LoginStatus": "1",
      "ItemType": 0,
      "UrlSelected": null
  },
  {
      "Title": "绿地新闻",
      "FileId": "5",
      "Url": "https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/29112754827ldxw3x.png",
      "LinkUrl": null,
      "LoginStatus": "0",
      "ItemType": 0,
      "UrlSelected": null
  },
  {
      "Title": "楼盘信息",
      "FileId": "9",
      "Url": "https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/29113747090lpgl3x.png",
      "LinkUrl": null,
      "LoginStatus": "0",
      "ItemType": 0,
      "UrlSelected": null
  },
  {
      "Title": "智慧停车",
      "FileId": "7",
      "Url": "https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/29112905339zhtc3x.png",
      "LinkUrl": null,
      "LoginStatus": "1",
      "ItemType": 0,
      "UrlSelected": null
  },
  {
      "Title": "华师在线",
      "FileId": "6",
      "Url": "https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/02112545161hs3x.png",
      "LinkUrl": "http://ld.xuetang365.com/weixin/index.php",
      "LoginStatus": "0",
      "ItemType": 0,
      "UrlSelected": null
  },
  {
      "Title": "华师在线",
      "FileId": "6",
      "Url": "https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/02112545161hs3x.png",
      "LinkUrl": "http://ld.xuetang365.com/weixin/index.php",
      "LoginStatus": "0",
      "ItemType": 0,
      "UrlSelected": null
  },
  {
      "Title": "华师在线",
      "FileId": "6",
      "Url": "https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/02112545161hs3x.png",
      "LinkUrl": "http://ld.xuetang365.com/weixin/index.php",
      "LoginStatus": "0",
      "ItemType": 0,
      "UrlSelected": null
  },
  {
      "Title": "华师在线",
      "FileId": "6",
      "Url": "https://greenlandilife.oss-cn-hangzhou.aliyuncs.com/icon/v2/02112545161hs3x.png",
      "LinkUrl": "http://ld.xuetang365.com/weixin/index.php",
      "LoginStatus": "0",
      "ItemType": 0,
      "UrlSelected": null
  }
]
export default class Home extends React.Component {
  state = {
    
  };
  bannerClick = detailUrl => {
    this.props.navigation.navigate('Content', { detailUrl: detailUrl })
  }
  navigationClick= a =>{
    
  }
  msgClick = () => {
    this.props.navigation.navigate('MsgTabs')
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.bgImage} source={BG_IMAGE}>
          <View style={styles.head}>
            <Image source={TOP_LOGO_IMAGE} style={{height:20,width:57,marginLeft:10}}/>
            <TouchableHighlight underlayColor='transparent' onPress={this.msgClick}>
              <Image source={MSG_IMAGE} style={{height:16,width:18,marginRight:13}}/>
            </TouchableHighlight>
          </View>
          <ScrollView>
            <View style={{height:140}}>
              <Swiper autoplay={true}>
                <Image
                    source={{ uri: 'http://118.31.73.141:8081/Images/RZLC/636930117610577734.jpg' }}
                    style={{marginLeft:10,marginRight:10,height:140,borderRadius:10 }}
                />
                <Image
                    source={{ uri: 'http://118.31.73.141:8081/Images/RZLC/636754734786456351.jpg' }}
                    style={{marginLeft:10,marginRight:10,height:140,borderRadius:10 }}
                />
              </Swiper>
            </View>
            
            <Menu menuList={menuData} navigation={this.props.navigation}/>
            <View style={{borderRadius:10, marginTop:13, height:40, backgroundColor:'#016843', flexDirection: "row", alignItems: 'center', justifyContent: 'space-between',marginHorizontal:10 }}>
              <Text style={{marginLeft:14,height:20,width:80,fontSize:17,color:'#fff',fontWeight :'bold'}}>绿地公告</Text>
              <View style={{ borderColor: '#fff', borderWidth: 0.3, height: '60%', marginHorizontal: 10 }}></View>
              {/* <Text style={{ fontSize: 14, color: '#fff', flex: 1 }}>
                  关于绿地名邸公馆停水通知
              </Text> */}
              <MarqueeVertical
                    textList = {[
                      {label : '1',value : '一闪一闪亮晶晶，满天都是小星星'},
                      {label : '2',value : '两只老虎跑的快'},
                      {label : '3',value : '蓝蓝的天上白云飘，白云下面小肥羊儿跑'},
                    ]}
                    width = {200}
                    height = {40}
                    delay = {2000}
                    direction = {'up'}
                    numberOfLines = {1}
                    bgContainerStyle = {{backgroundColor : 'transparent',flex:1}}
                    textStyle = {{fontSize : 16,color : '#fff'}}
                    onTextClick = {(item) => {
                        alert(''+JSON.stringify(item));
                    }}
                />
              <Image
                  source={require('../../res/images/go3x.png')}
                  style={{ width: 42, height: 40 }}
              />
            </View>
          <View style={{marginTop:10,marginHorizontal:10,height:189,backgroundColor:'#F2F2F2',borderRadius:10}}>
            <View style={{borderLeftColor:'#016843',borderLeftWidth:3,marginTop:10,marginBottom:5}}><Text style={{marginLeft:10,fontSize:14,color:'#000',fontWeight:'bold'}}>热门活动</Text></View>
            <ScrollView horizontal>
              <View style={{marginLeft:10,height:144,width:SCREEN_WIDTH*0.6,borderRadius:10,backgroundColor:'#fff'}}>
                <Image style={{width:SCREEN_WIDTH*0.6,height:96,borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('../../res/images/shop.png')}/>
                <Text numberOfLines={2} ellipsizeMode='tail' style={{fontSize:10,color:'#000',marginHorizontal:10}}>fasdfasdfasd</Text>
                <View style={{marginHorizontal:10,flexDirection:'row',justifyContent:'space-between',marginTop:8}}>
                  <Text style={{fontSize:10,color:'#9B9B9B'}}>6月1日 9:00开始</Text>
                  <Text style={{fontSize:10,color:'#9B9B9B'}}>武昌区</Text>
                </View>
              </View>
              <View style={{marginLeft:10,height:144,width:SCREEN_WIDTH*0.6,borderRadius:10,backgroundColor:'#fff'}}>
                <Image style={{width:SCREEN_WIDTH*0.6,height:96,borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('../../res/images/shop.png')}/>
                <Text numberOfLines={2} ellipsizeMode='tail' style={{fontSize:10,color:'#000',marginHorizontal:10}}>fasdfasdfasd</Text>
                <View style={{marginHorizontal:10,flexDirection:'row',justifyContent:'space-between',marginTop:8}}>
                  <Text style={{fontSize:10,color:'#9B9B9B'}}>6月1日 9:00开始</Text>
                  <Text style={{fontSize:10,color:'#9B9B9B'}}>武昌区</Text>
                </View>
              </View>
              <View style={{marginLeft:10,height:144,width:SCREEN_WIDTH*0.6,borderRadius:10,backgroundColor:'#fff'}}>
                <Image style={{width:SCREEN_WIDTH*0.6,height:96,borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('../../res/images/shop.png')}/>
                <Text numberOfLines={2} ellipsizeMode='tail' style={{fontSize:10,color:'#000',marginHorizontal:10}}>fasdfasdfasd</Text>
                <View style={{marginHorizontal:10,flexDirection:'row',justifyContent:'space-between',marginTop:8}}>
                  <Text style={{fontSize:10,color:'#9B9B9B'}}>6月1日 9:00开始</Text>
                  <Text style={{fontSize:10,color:'#9B9B9B'}}>武昌区</Text>
                </View>
              </View>
              <View style={{marginLeft:10,height:144,width:SCREEN_WIDTH*0.6,borderRadius:10,backgroundColor:'#fff'}}>
                <Image style={{width:SCREEN_WIDTH*0.6,height:96,borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('../../res/images/shop.png')}/>
                <Text numberOfLines={2} ellipsizeMode='tail' style={{fontSize:10,color:'#000',marginHorizontal:10}}>fasdfasdfasd</Text>
                <View style={{marginHorizontal:10,flexDirection:'row',justifyContent:'space-between',marginTop:8}}>
                  <Text style={{fontSize:10,color:'#9B9B9B'}}>6月1日 9:00开始</Text>
                  <Text style={{fontSize:10,color:'#9B9B9B'}}>武昌区</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={{marginTop:10,marginHorizontal:10,backgroundColor:'#F2F2F2',borderRadius:10,flex:1}}>
            <View style={{borderLeftColor:'#016843',borderLeftWidth:3,marginTop:10,marginBottom:5}}><Text style={{marginLeft:10,fontSize:14,color:'#000',fontWeight:'bold'}}>专题活动</Text></View>
            <Image style={{borderRadius:10,marginHorizontal:10,marginTop:10,height:94,width:SCREEN_WIDTH-40}} source={require('../../res/images/top_image_bg3x.png')}/>
            <Image style={{borderRadius:10,marginHorizontal:10,marginTop:10,height:94,width:SCREEN_WIDTH-40}} source={require('../../res/images/top_image_bg3x.png')}/>
            <Image style={{borderRadius:10,marginHorizontal:10,marginTop:10,height:94,width:SCREEN_WIDTH-40}} source={require('../../res/images/top_image_bg3x.png')}/>
            <Image style={{borderRadius:10,marginHorizontal:10,marginTop:10,height:94,width:SCREEN_WIDTH-40}} source={require('../../res/images/top_image_bg3x.png')}/>
            <Image style={{borderRadius:10,marginHorizontal:10,marginTop:10,height:94,width:SCREEN_WIDTH-40}} source={require('../../res/images/top_image_bg3x.png')}/>
            <Image style={{borderRadius:10,marginHorizontal:10,marginTop:10,height:94,width:SCREEN_WIDTH-40}} source={require('../../res/images/top_image_bg3x.png')}/>
          </View>
          </ScrollView>
        </ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  head:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:36,
    marginBottom:10
  },
  bgImage: {
    flex: 1,
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