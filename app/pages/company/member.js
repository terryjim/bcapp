import React from 'react';
import {
  Text,
  View,Image,Dimensions,TouchableOpacity,FlatList,LayoutAnimation
} from 'react-native';
import { Input, Button, Icon, ListItem, Avatar } from 'react-native-elements';
import defaultStyles from '../../res/commonStyle'

export default class Company extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedProj: -1
        }
    }
    itemTap = (index) => {

        // 点击的item如果是同一个, 就置为初始状态-1, 也就是折叠的状态
        let select = index;
        if (this.state.selectedProj === index) {
            select = -1;
        }

        //动画效果
        LayoutAnimation.easeInEaseOut();
        this.setState({
            selectedProj: select
        })
    }
    edit = data =>{
        data = {
          openId:'1111',
          title:'编辑成员'
        }
        this.props.navigation.navigate('CompanyForm',data)
    }
    renderItem = ({ item }) => {
        return (
            <View style={{marginBottom:5}}>               
                <ListItem
                    containerStyle={{
                        height:50
                    }}
                    title={item.title}
                    titleStyle={{
                        fontSize:14,
                        color:'#4a4a4a'
                    }}
                    rightTitle='10人'
                    rightTitleStyle={{
                        fontSize:14,
                        color:'#9b9b9b'
                    }}
                    key={item.key}
                    chevron={
                        this.state.selectedProj === item.key ? 
                        <Icon
                            name='up'
                            type='antdesign'
                            color='#9b9b9b'
                            size={16}
                        /> 
                        :
                        <Icon
                            name='down'
                            type='antdesign'
                            color='#9b9b9b'
                            size={16}
                        />
                    }
                    onPress={() => this.itemTap(item.key)}
                />
                 
                {this.state.selectedProj === item.key ? 
                    <View>
                        <ListItem
                            containerStyle={{
                                height:44,
                                borderTopWidth:1,
                                borderTopColor:'#f2f2f2'
                            }}
                            title='张三'
                            titleStyle={{
                                marginLeft:32
                            }}
                            chevron={
                                <Button
                                    title="编辑"
                                    type="clear"
                                    onPress={
                                        this.edit.bind(this,"")
                                    }
                                />
                            }
                        />
                        <ListItem
                            containerStyle={{
                                height:44,
                                borderTopWidth:1,
                                borderTopColor:'#f2f2f2'
                            }}
                            title='张三'
                            titleStyle={{
                                marginLeft:32
                            }}
                            chevron={
                                <Button
                                    title="编辑"
                                    type="clear"
                                    onPress={
                                        this.edit.bind(this,"")
                                    }
                                />
                            }
                        />
                    </View>
                    
                    : 
                    null
                }
                    
            </View>
        )
    }
    render() {
        let data=[{title:'科技运营部',key:1},{title:'市场营销部',key:2}]
        return (
            <View style={defaultStyles.container}>
                <FlatList
                    keyExtractor={(item, index) => index}
                    data={data}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}