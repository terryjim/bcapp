import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Slider,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  ImageBackground,
  TouchableHighlight
} from 'react-native';
import Swiper from 'react-native-swiper';
import defaultStyles from '../../res/commonStyle'
import QRCode from 'react-native-qrcode-svg'
import {NavigationEvents} from 'react-navigation'
const SCREEN_WIDTH = Dimensions
  .get('window')
  .width;
const SCREEN_HEIGHT = Dimensions
  .get('window')
  .height;
const BG_IMAGE = require('../../res/images/top_image_bg3x.png');
const MSG_IMAGE = require('../../res/images/msg3x.png');
const TOP_LOGO_IMAGE = require('../../res/images/top_logo3x.png');

export default class Gate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {    
      /*   num: 1, */
      qrSize: SCREEN_WIDTH - 150
    }
  }
  createQr() {
    let openid = this.props.openid || '190068326953343457'
    this.setState({
      qrcode: createQrCode(openid)})
    this.timerID = setInterval(() => this.setState({
      qrcode: createQrCode(openid),
      /*   num: this.state.num + 1 */
    }), 10000)
  }

  disposeQr() {
    clearInterval(this.timerID)
    /*   this.setState({num: 1}) */
  }
  render() {
    return (
      <View style={defaultStyles.container}>
        <NavigationEvents
          onWillFocus={payload => {
          this.createQr()
        }}
          onWillBlur
          ={payload => {
          this.disposeQr()
        }}/>

        <ImageBackground style={styles.bgImage} source={BG_IMAGE}>
          <View style={styles.head}>
            <Image
              source={TOP_LOGO_IMAGE}
              style={{
              height: 20,
              width: 57,
              marginLeft: 10
            }}/>
            <Image
              source={MSG_IMAGE}
              style={{
              height: 16,
              width: 18,
              marginRight: 13
            }}/>
          </View>

          <View style={{
            height: 140
          }}>
            <Swiper autoplay={true}>
              <Image
                source={{
                uri: 'http://118.31.73.141:8081/Images/RZLC/636930117610577734.jpg'
              }}
                style={defaultStyles.bannerImg}/>
              <Image
                source={{
                uri: 'http://118.31.73.141:8081/Images/RZLC/636754734786456351.jpg'
              }}
                style={defaultStyles.bannerImg}/>
            </Swiper>
          </View>

          <View
            style={{
            borderRadius: 10,
            marginTop: 13,
            marginBottom: 13,
            backgroundColor: 'rgba(255,255,255,1)',
            flex: 1,
            marginHorizontal: 10
          }}>
            <View
              style={{
              flex: 8,
              margin: 10,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <TouchableOpacity
                onPress={() => this.state.qrSize === SCREEN_WIDTH - 150
                ? this.setState({
                  qrSize: SCREEN_WIDTH - 50
                })
                : this.setState({
                  qrSize: SCREEN_WIDTH - 150
                })}>

                <QRCode
                  value={this.state.qrcode}
                  size={this.state.qrSize}
                  bgColor='#FFF'
                  fgColor='#000'/>
              </TouchableOpacity>
            </View>
            <View
              style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}>

              <TouchableOpacity style={styles.imgButton}>
                <Image
                  source={require('../../res/images/remote.png')}
                  style={{
                  width: 30,
                  height: 28
                }}/>
                <Text>远程开门</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imgButton}>
                <Image
                  source={require('../../res/images/gatelist.png')}
                  style={{
                  width: 30,
                  height: 28
                }}/>
                <Text>门禁列表</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imgButton}>
                <Image
                  source={require('../../res/images/auth.png')}
                  style={{
                  width: 30,
                  height: 28
                }}/>
                <Text>授权访客</Text>
              </TouchableOpacity>
            </View>
            {/*  <Text>{this.state.num}</Text> */}
          </View>

        </ImageBackground>
      </View>
    )
  }
}

//二维码生成规则
const createQrCode = (uid, currentStep = (Date.parse(new Date()) / 1000) + 60) => {
  if (uid === undefined) 
    return null
  let cod = ''
  for (let i = 0; i < 6; i++) {
    cod += Math.floor(Math.random() * 10)
  }
  let pm = `&typ=2&exp=${currentStep}&usr=${uid}&cod=${cod}`
  let pmHash = getHash33(pm)
  return `${pm}&chk=${pmHash}`
}

const getHash33 = str => {
  let result = 0xFFFFFFFF
  for (let s of str) {
    // console.log(s) console.log(s.codePointAt(0))
    result += s.codePointAt(0);
    result *= 33;
    result = result & 0xFFFFFFFF;
    if (result < 0) 
      result += 1 + 0xFFFFFFFF
      // console.log(result)
    }
  return result;
}
const styles = StyleSheet.create({
  imgButton: {
    height: 60,
    flexDirection: 'column',
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.02)',
    borderColor: 'rgba(0,0,0,0.03)',
    borderWidth: 5,
    paddingHorizontal: 25,
    justifyContent: 'space-around',
    alignItems: 'center',
    //justifyContent: 'center' marginHorizontal: 10     , height:50, width:100
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 36,
    marginBottom: 10
  },
  bgImage: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: 169
  },
  wrapper: {
    height: 140
  },
  oneRow: {
    flexDirection: "row",
    //height: 180,
    padding: 25,
    width: SCREEN_WIDTH
  }
})