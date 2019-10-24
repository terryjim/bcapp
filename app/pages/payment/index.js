import React from 'react';
import {
    StyleSheet,
    Text,
    View,ImageBackground,Dimensions,Image
} from 'react-native';
const BG_IMAGE = require('../../res/images/image_banner3x.png');
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class Payment extends React.Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#f2f2f2'}}>
                <ImageBackground style={styles.bgImage} source={BG_IMAGE}>
                    <View style={styles.content}>
                        <View style={{flexDirection: "row",justifyContent: 'space-between',height:(SCREEN_WIDTH-40)/2,borderBottomWidth:1,borderBottomColor:'#f2f2f2'}}>
                            <View style={{width:(SCREEN_WIDTH-40)/2,borderRightColor:'#f2f2f2',borderRightWidth:1,alignItems:'center',justifyContent:'center'}}>
                                <Image style={{width:70,height:70}} source={require('../../res/images/70x70_13x.png')}/>
                                <Text>手机充值</Text>
                            </View>
                            <View style={{width:(SCREEN_WIDTH-40)/2,alignItems:'center',justifyContent:'center'}}>
                                <Image style={{width:70,height:70}} source={require('../../res/images/70x70_23x.png')}/>
                                <Text>物业费</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: "row",justifyContent: 'space-between',height:(SCREEN_WIDTH-40)/2,borderBottomWidth:1,borderBottomColor:'#f2f2f2'}}>
                            <View style={{width:(SCREEN_WIDTH-40)/2,borderRightColor:'#f2f2f2',borderRightWidth:1,alignItems:'center',justifyContent:'center'}}>
                                <Image style={{width:70,height:70}} source={require('../../res/images/70x70_33x.png')}/>
                                <Text>水费</Text>
                            </View>
                            <View style={{width:(SCREEN_WIDTH-40)/2,alignItems:'center',justifyContent:'center'}}>
                                <Image style={{width:70,height:70}} source={require('../../res/images/70x70_43x.png')}/>
                                <Text>电费</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    content:{
        marginTop:100,
        height:SCREEN_WIDTH-40,
        width: SCREEN_WIDTH-40,
        backgroundColor:'#fff',
        borderRadius:15  
    },
    bgImage: {
      flex: 1,
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT*0.36,
      alignItems:'center',
      justifyContent:'center'
    },
  })