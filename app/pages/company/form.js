import React from 'react';
import {
  Text,
  View,Image,Dimensions,TouchableOpacity,StatusBar
} from 'react-native';
import defaultStyles from '../../res/commonStyle'
import { Input, Button, Icon, ListItem, Avatar,Overlay } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions
    .get('window')
    .width;

export default class Form extends React.Component {
    static navigationOptions = ({navigation})=> ({
        title: navigation.state.params.title
    });  
    state = {
        visible: false
    };
    
    setVisible(visible) {
        if(visible){
            StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.5)')
        }else{
            StatusBar.setBackgroundColor('rgba(255, 255, 255, 0)')
        }
        this.setState({ visible });
    }
    render() {
        const {openId}=this.props.navigation.state.params;      
        return (
            <View style={defaultStyles.container}>
                <Overlay
                    isVisible={this.state.visible}
                    windowBackgroundColor='rgba(0, 0, 0, 0.5)'
                    overlayBackgroundColor='#fff'
                    overlayStyle={{
                        width:271,
                        height:164,
                        borderRadius:15
                    }}
                >
                    <View>
                        <View style={{justifyContent:'center',height:120,borderBottomColor:'#f0f0f0',borderBottomWidth:1}}>
                            <Text style={{fontSize:17,color:'#000',fontWeight:'400',height:50}}>删除该成员后，TA将不再享有相应门禁权限。是否确认删除？</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:0.5,alignItems: 'center',justifyContent:'center'}}>
                                <Button
                                    title="取消"
                                    titleStyle={{
                                        fontSize:15,color:'#9b9b9b'
                                    }}
                                    type="clear"
                                    onPress={this.setVisible.bind(this,false)}
                                />
                            </View>
                            <View style={{flex:0.5,alignItems: 'center',justifyContent:'center'}}>
                                <Button
                                    title="确认"
                                    titleStyle={{
                                        fontSize:15,color:'#000'
                                    }}
                                    type="clear"
                                    onPress={this.setVisible.bind(this,false)}
                                />
                            </View>
                        </View>        
                    </View>
                    
                </Overlay>
                <View style={{flex:1}}>
                    <View style={{height:78,backgroundColor:'#fff',marginBottom:5}}>
                        <View style={{flexDirection: "row",alignItems: 'center',justifyContent:'space-between',height:50,borderBottomColor:'#f2f2f2',borderBottomWidth:1}}>
                            <Image style={{width:34,height:34,marginLeft:16}} source={require('../../res/images/34x34_23x.png')}/>
                            <Text style={{fontSize:14,color:'#4A4A4A',marginLeft:6,flex:1}}>武汉蓝筹科技有限公司</Text>
                            <View style={{borderColor:'#F5A623',borderWidth:1,borderRadius:5,marginRight:16,height:18,width:43,alignItems:'center'}}>
                                <Text style={{fontSize:11,color:'#F5A623'}}>管理员</Text>
                            </View>
                        </View>
                        <View style={{height:27,justifyContent:'center'}}>
                            <Text style={{fontSize:12,color:'#9b9b9b',marginLeft:56}}>当代光谷梦工厂 1栋 3楼</Text>
                        </View>
                    </View>
                    <ListItem
                            containerStyle={{
                                height:44,
                                borderTopWidth:1,
                                borderTopColor:'#f2f2f2'
                            }}
                            title='登陆账号'
                            titleStyle={{
                                fontSize:14,
                                color:'#4a4a4a'
                            }}
                            chevron={
                                <Input
                                    containerStyle={{
                                        height:44,
                                        width:SCREEN_WIDTH-105
                                    }}
                                    inputContainerStyle={{
                                        borderColor:'#fff',
                                        
                                    }}
                                    inputStyle={{
                                        fontSize:14,
                                        color:'#9B9B9B'
                                    }}
                                    placeholder='请输入成员手机号码'
                                />
                            }
                        />
                        <ListItem
                            containerStyle={{
                                height:44,
                                borderTopWidth:1,
                                borderTopColor:'#f2f2f2'
                            }}
                            title='成员姓名'
                            titleStyle={{
                                fontSize:14,
                                color:'#4a4a4a'
                            }}
                            chevron={
                                <Input
                                    containerStyle={{
                                        height:44,
                                        width:SCREEN_WIDTH-105
                                    }}
                                    inputContainerStyle={{
                                        borderColor:'#fff',
                                        
                                    }}
                                    inputStyle={{
                                        fontSize:14,
                                        color:'#9B9B9B'
                                    }}
                                    placeholder='请输入成员姓名'
                                />
                            }
                        />
                        <ListItem
                            containerStyle={{
                                height:44,
                                borderTopWidth:1,
                                borderTopColor:'#f2f2f2'
                            }}
                            title='所属部门'
                            titleStyle={{
                                fontSize:14,
                                color:'#4a4a4a'
                            }}
                            chevron={
                                <Input
                                    containerStyle={{
                                        height:44,
                                        width:SCREEN_WIDTH-105
                                    }}
                                    inputContainerStyle={{
                                        borderColor:'#fff',
                                        
                                    }}
                                    inputStyle={{
                                        fontSize:14,
                                        color:'#9B9B9B'
                                    }}
                                    placeholder='请选择'
                                />
                            }
                        />
                        {
                            !openId && (
                                <View style={{marginTop:16,marginLeft:16}}>
                                    <Text style={{fontSize:13,color:'#F5A623'}}>新增成员说明：</Text>
                                    <Text style={{fontSize:11,color:'#F5A623'}}>1.请认真填写账号和姓名，保存提交后不可更改。</Text>
                                    <Text style={{fontSize:11,color:'#F5A623'}}>2.添加成功后，该成员会收到短信通知，提醒其APP账号和初始密码。</Text>
                                </View>
                            )
                        } 
                </View>
                {
                    !openId?
                    (
                        <View style={{height:50,backgroundColor:'#016843',alignItems: 'center',justifyContent:'center'}}>
                            <Button
                                title="保存并提交"
                                titleStyle={{
                                    fontSize:19,color:'#fff'
                                }}
                                type="clear"
                                onPress={()=>{
                                    this.props.navigation.goBack()
                                }}
                            />
                        </View>
                    ):(
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:0.5,height:50,backgroundColor:'#fff',alignItems: 'center',justifyContent:'center'}}>
                                <Button
                                    title="删除"
                                    titleStyle={{
                                        fontSize:19,color:'#9B9B9B'
                                    }}
                                    type="clear"
                                    onPress={this.setVisible.bind(this,true)}
                                />
                            </View>
                            <View style={{flex:0.5,height:50,backgroundColor:'#016843',alignItems: 'center',justifyContent:'center'}}>
                                <Button
                                    title="保存"
                                    titleStyle={{
                                        fontSize:19,color:'#fff'
                                    }}
                                    type="clear"
                                    onPress={()=>{
                                        this.props.navigation.goBack()
                                    }}
                                />
                            </View>
                        </View>
                        
                    )
                }
                
            </View>
        )
    }
}