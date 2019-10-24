import React from 'react';
import {
  Text,
  View,Image,Dimensions,TouchableOpacity,FlatList,LayoutAnimation
} from 'react-native';
import { Input, Button, Icon, ListItem, Avatar } from 'react-native-elements';
import defaultStyles from '../../res/commonStyle'

export default class Company extends React.Component {
    edit = data =>{
        data = {
          openId:'1111',
          title:'编辑成员'
        }
        this.props.navigation.navigate('CompanyForm',data)
    }
    render() {
        return (
            <View style={defaultStyles.container}>
                <ListItem
                    containerStyle={{
                        height:44,
                        borderTopWidth:1,
                        borderTopColor:'#f2f2f2'
                    }}
                    title='张三'
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
        )
    }
}