import React from 'react';
import {
  Text,
  View,Image,Dimensions,TouchableOpacity
} from 'react-native';
import defaultStyles from '../../res/commonStyle'

export default class House extends React.Component {
    details = data =>{
        this.props.navigation.navigate('HouseManage',data)
    }
    render() {
        return (
            <View style={defaultStyles.container}>
                <View style={{flex:1}}>
                    <TouchableOpacity onPress={this.details.bind(this,{})}>
                        <View style={{height:78,backgroundColor:'#fff',marginBottom:5}}>
                                <View style={{flexDirection: "row",alignItems: 'center',justifyContent:'space-between',height:50,borderBottomColor:'#f2f2f2',borderBottomWidth:1}}>
                                    <Image style={{width:34,height:34,marginLeft:16}} source={require('../../res/images/house.png')}/>
                                    <Text style={{fontSize:14,color:'#4A4A4A',marginLeft:6,flex:1}}>绿地国际金融城</Text>
                                    <View style={{borderColor:'#016843',borderWidth:1,borderRadius:5,marginRight:16,height:18,width:32,alignItems:'center'}}>
                                        <Text style={{fontSize:11,color:'#016843'}}>业主</Text>
                                    </View>
                                    <View style={{borderColor:'#F5A623',borderWidth:1,borderRadius:5,marginRight:16,height:18,width:43,alignItems:'center'}}>
                                        <Text style={{fontSize:11,color:'#F5A623'}}>管理员</Text>
                                    </View>
                                </View>
                                <View style={{height:27,justifyContent:'center'}}>
                                    <Text style={{fontSize:12,color:'#9b9b9b',marginLeft:56}}>A2栋 1单元 1801室</Text>
                                </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.details.bind(this,{})}>
                        <View style={{height:78,backgroundColor:'#fff',marginBottom:5}}>
                                <View style={{flexDirection: "row",alignItems: 'center',justifyContent:'space-between',height:50,borderBottomColor:'#f2f2f2',borderBottomWidth:1}}>
                                    <Image style={{width:34,height:34,marginLeft:16}} source={require('../../res/images/house.png')}/>
                                    <Text style={{fontSize:14,color:'#4A4A4A',marginLeft:6,flex:1}}>绿地香树花城</Text>
                                    <View style={{borderColor:'#016843',borderWidth:1,borderRadius:5,marginRight:16,height:18,width:54,alignItems:'center'}}>
                                        <Text style={{fontSize:11,color:'#016843'}}>家庭成员</Text>
                                    </View>
                                    <View style={{borderColor:'#F5A623',borderWidth:1,borderRadius:5,marginRight:16,height:18,width:43,alignItems:'center'}}>
                                        <Text style={{fontSize:11,color:'#F5A623'}}>管理员</Text>
                                    </View>
                                </View>
                                <View style={{height:27,justifyContent:'center'}}>
                                    <Text style={{fontSize:12,color:'#9b9b9b',marginLeft:56}}>A2栋 1单元 1801室</Text>
                                </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.details.bind(this,{})}>
                        <View style={{height:78,backgroundColor:'#fff',marginBottom:5}}>
                                <View style={{flexDirection: "row",alignItems: 'center',justifyContent:'space-between',height:50,borderBottomColor:'#f2f2f2',borderBottomWidth:1}}>
                                    <Image style={{width:34,height:34,marginLeft:16}} source={require('../../res/images/house.png')}/>
                                    <Text style={{fontSize:14,color:'#4A4A4A',marginLeft:6,flex:1}}>绿地国际金融城</Text>
                                    <View style={{borderColor:'#016843',borderWidth:1,borderRadius:5,marginRight:16,height:18,width:54,alignItems:'center'}}>
                                        <Text style={{fontSize:11,color:'#016843'}}>房产中介</Text>
                                    </View>
                                </View>
                                <View style={{height:27,justifyContent:'center'}}>
                                    <Text style={{fontSize:12,color:'#9b9b9b',marginLeft:56}}>A2栋 1单元 1801室</Text>
                                </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.details.bind(this,{})}>
                        <View style={{height:78,backgroundColor:'#fff',marginBottom:5}}>
                                <View style={{flexDirection: "row",alignItems: 'center',justifyContent:'space-between',height:50,borderBottomColor:'#f2f2f2',borderBottomWidth:1}}>
                                    <Image style={{width:34,height:34,marginLeft:16}} source={require('../../res/images/house.png')}/>
                                    <Text style={{fontSize:14,color:'#4A4A4A',marginLeft:6,flex:1}}>绿地国际金融城</Text>
                                    <View style={{borderColor:'#016843',borderWidth:1,borderRadius:5,marginRight:16,height:18,width:32,alignItems:'center'}}>
                                        <Text style={{fontSize:11,color:'#016843'}}>租客</Text>
                                    </View>
                                </View>
                                <View style={{height:27,justifyContent:'center'}}>
                                    <Text style={{fontSize:12,color:'#9b9b9b',marginLeft:56}}>A2栋 1单元 1801室</Text>
                                </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.details.bind(this,{})}>
                        <View style={{height:78,backgroundColor:'#fff',marginBottom:5}}>
                                <View style={{flexDirection: "row",alignItems: 'center',justifyContent:'space-between',height:50,borderBottomColor:'#f2f2f2',borderBottomWidth:1}}>
                                    <Image style={{width:34,height:34,marginLeft:16}} source={require('../../res/images/house.png')}/>
                                    <Text style={{fontSize:14,color:'#4A4A4A',marginLeft:6,flex:1}}>绿地国际金融城</Text>
                                    <View style={{borderColor:'#016843',borderWidth:1,borderRadius:5,marginRight:16,height:18,width:32,alignItems:'center'}}>
                                        <Text style={{fontSize:11,color:'#016843'}}>租客</Text>
                                    </View>
                                </View>
                                <View style={{height:27,justifyContent:'center'}}>
                                    <Text style={{fontSize:12,color:'#9b9b9b',marginLeft:56}}>A2栋 1单元 1801室</Text>
                                </View>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <View style={{height:50,backgroundColor:'#016843',alignItems: 'center',justifyContent:'center'}}>
                    <Text style={{fontSize:19,color:'#fff'}}>住宅成员申请</Text>
                </View> */}
            </View>
        )
    }
}