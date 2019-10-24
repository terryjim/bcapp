import React from 'react';
import {
  Text,
  View,Image,Dimensions
} from 'react-native';
import defaultStyles from '../../res/commonStyle'
import { ListItem } from 'react-native-elements'

export default class Manage extends React.Component {
    memberManage = data =>{
      this.props.navigation.navigate('HouseMemberManage',data)
    }
    add = data =>{
      data = {
        openId:'',
        title:'新增成员'
      }
      this.props.navigation.navigate('CompanyForm',data)
    }
    render() {
        return (
            <View style={defaultStyles.container}>
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
              <View>
                <ListItem
                  title='住宅成员管理'
                  rightTitle='>'
                  titleStyle={{
                    fontSize:14,
                    color:'#4a4a4a'
                  }}
                  containerStyle={{
                    borderBottomWidth:1,
                    borderBottomColor:'#f2f2f2'
                  }}
                  onPress={
                    this.memberManage.bind(this,{})
                  }
                />
                <ListItem
                  title='添加成员'
                  rightTitle='>'
                  titleStyle={{
                    fontSize:14,
                    color:'#4a4a4a'
                  }}
                  containerStyle={{
                    borderBottomWidth:1,
                    borderBottomColor:'#f2f2f2'
                  }}
                  onPress={
                    this.add.bind(this,{})
                  }
                />
              </View>
            </View>
        )
    }
}