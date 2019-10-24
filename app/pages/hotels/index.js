import React from 'react';
import {
  Text,
  View,Image,Dimensions
} from 'react-native';
import defaultStyles from '../../res/commonStyle'

const SCREEN_WIDTH = Dimensions.get('window').width;
let left = (SCREEN_WIDTH-158*2)/3
export default class Hotels extends React.Component {
    render() {
        return (
            <View style={defaultStyles.container}>
                <View style={{flexDirection: "row",justifyContent: 'center',alignItems:'center',marginVertical:12}}>
                    <View style={{borderBottomColor:'#979797',borderBottomWidth:1,width:20}}></View>
                    <Text style={{fontSize:18,color:'#9b9b9b',marginHorizontal:10}}>选择酒店</Text>
                    <View style={{borderBottomColor:'#979797',borderBottomWidth:1,width:20}}></View>
                </View>
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    <View style={{width:158,height:159,marginLeft:left,marginBottom:30}}>
                        <Image style={{width:158,height:115,borderTopLeftRadius:5,borderTopRightRadius:5}} source={require('../../res/images/top_image_bg3x.png')}/>
                        <View style={{justifyContent:'center',backgroundColor:'#fff',height:44,borderBottomLeftRadius:5,borderBottomRightRadius:5}}>
                            <Text style={{fontSize:17,color:'#4a4a4a',marginLeft:12}}>绿地博瑞酒店</Text>
                        </View>
                    </View>
                    <View style={{width:158,height:159,marginLeft:left,marginBottom:30}}>
                        <Image style={{width:158,height:115,borderTopLeftRadius:5,borderTopRightRadius:5}} source={require('../../res/images/top_image_bg3x.png')}/>
                        <View style={{justifyContent:'center',backgroundColor:'#fff',height:44,borderBottomLeftRadius:5,borderBottomRightRadius:5}}>
                            <Text style={{fontSize:17,color:'#4a4a4a',marginLeft:12}}>绿地博瑞酒店</Text>
                        </View>
                    </View>
                    <View style={{width:158,height:159,marginLeft:left,marginBottom:30}}>
                        <Image style={{width:158,height:115,borderTopLeftRadius:5,borderTopRightRadius:5}} source={require('../../res/images/top_image_bg3x.png')}/>
                        <View style={{justifyContent:'center',backgroundColor:'#fff',height:44,borderBottomLeftRadius:5,borderBottomRightRadius:5}}>
                            <Text style={{fontSize:17,color:'#4a4a4a',marginLeft:12}}>绿地博瑞酒店</Text>
                        </View>
                    </View>
                    <View style={{width:158,height:159,marginLeft:left,marginBottom:30}}>
                        <Image style={{width:158,height:115,borderTopLeftRadius:5,borderTopRightRadius:5}} source={require('../../res/images/top_image_bg3x.png')}/>
                        <View style={{justifyContent:'center',backgroundColor:'#fff',height:44,borderBottomLeftRadius:5,borderBottomRightRadius:5}}>
                            <Text style={{fontSize:17,color:'#4a4a4a',marginLeft:12}}>绿地博瑞酒店</Text>
                        </View>
                    </View>
                    <View style={{width:158,height:159,marginLeft:left,marginBottom:30}}>
                        <Image style={{width:158,height:115,borderTopLeftRadius:5,borderTopRightRadius:5}} source={require('../../res/images/top_image_bg3x.png')}/>
                        <View style={{justifyContent:'center',backgroundColor:'#fff',height:44,borderBottomLeftRadius:5,borderBottomRightRadius:5}}>
                            <Text style={{fontSize:17,color:'#4a4a4a',marginLeft:12}}>绿地博瑞酒店</Text>
                        </View>
                    </View>
                </View>
            </View>
            
        )
    }
}