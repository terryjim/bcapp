import React from 'react';
import {
  Text,
  View
} from 'react-native';

export default class SystemMsg extends React.Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#f2f2f2'}}>
                <View style={{backgroundColor:'#fff',height:65,borderBottomColor:'#f2f2f2',borderBottomWidth:1}}>
                    <View style={{flexDirection: "row",justifyContent: 'space-between',marginRight:16,marginVertical:10,flex:1,alignItems:'center'}}>
                        <View style={{marginLeft:16,marginRight:4,width:4,height:4,backgroundColor:'red',borderRadius:50}}></View>
                        <Text style={{fontSize:14,color:'#4a4a4a',flex:1}}>系统消息</Text>
                        <Text style={{fontSize:12,color:'#9b9b9b'}}>20:20</Text>
                    </View>
                    <Text style={{fontSize:12,color:'#9b9b9b',marginRight:16,marginLeft:24,marginBottom:10}} numberOfLines={1}>水电费李静安寺砥砺奋进阿萨德六块腹肌阿里发动机阿斯利康当甲方卢卡斯江东父老卡决胜巅峰</Text>
                </View>
                <View style={{backgroundColor:'#fff',height:65,borderBottomColor:'#f2f2f2',borderBottomWidth:1}}>
                    <View style={{flexDirection: "row",justifyContent: 'space-between',marginRight:16,marginVertical:10,flex:1,alignItems:'center'}}>
                        <Text style={{marginLeft:24,fontSize:14,color:'#4a4a4a',flex:1}}>系统消息</Text>
                        <Text style={{fontSize:12,color:'#9b9b9b'}}>20:20</Text>
                    </View>
                    <Text style={{fontSize:12,color:'#9b9b9b',marginRight:16,marginLeft:24,marginBottom:10}} numberOfLines={1}>水电费李静安寺砥砺奋进阿萨德六块腹肌阿里发动机阿斯利康当甲方卢卡斯江东父老卡决胜巅峰</Text>
                </View>
                <View style={{backgroundColor:'#fff',height:65,borderBottomColor:'#f2f2f2',borderBottomWidth:1}}>
                    <View style={{flexDirection: "row",justifyContent: 'space-between',marginRight:16,marginVertical:10,flex:1,alignItems:'center'}}>
                        <Text style={{marginLeft:24,fontSize:14,color:'#4a4a4a',flex:1}}>系统消息</Text>
                        <Text style={{fontSize:12,color:'#9b9b9b'}}>20:20</Text>
                    </View>
                    <Text style={{fontSize:12,color:'#9b9b9b',marginRight:16,marginLeft:24,marginBottom:10}} numberOfLines={1}>水电费李静安寺砥砺奋进阿萨德六块腹肌阿里发动机阿斯利康当甲方卢卡斯江东父老卡决胜巅峰</Text>
                </View>
            </View>
        )
    }
}