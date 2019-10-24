import React from 'react';
import {
  Text,
  View,Image,Dimensions,TouchableOpacity,StatusBar
} from 'react-native';
import defaultStyles from '../../res/commonStyle'
import { SearchBar,Button,Icon,Input } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions
    .get('window')
    .width;

export default class Search extends React.Component {
    state = {
        search: '',
    };

    render() {
        const { search } = this.state;
        return (
            <View style={defaultStyles.container}>
                <StatusBar
                    barStyle="dark-content"
                   /*  barStyle='dark-content' */
                    //backgroundColor={commonStyle.themeColor}
                    backgroundColor='rgba(255, 255, 255, 0)'
                    translucent={false}
                    //hidden={true}
                /> 
                <View style={{backgroundColor:'#fff',height:44,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'rgba(142,142,147,0.12)',borderRadius:10,width:SCREEN_WIDTH-110,height:36,marginLeft:16}}>
                        {/* <Image
                            source={ require('../../res/images/Search3x.png')}
                            style={{ width: 14, height: 14,marginLeft:8,acolor:'#8E8E93' }}
                        /> */}
                        <Icon
                            iconStyle={{marginLeft:8}}
                            name='search1'
                            type='antdesign'
                            color='#8E8E93'
                            size={16}
                        /> 
                        <Input
                            containerStyle={{
                                height:36,
                                width:SCREEN_WIDTH-140
                            }}
                            inputContainerStyle={{
                                borderColor:'#fff',
                            }}
                            placeholder='搜索'
                        />
                    </View>
                    <Button
                        buttonStyle={{
                            marginRight:16
                        }}
                        title="取消"
                        titleStyle={{
                            fontSize:17,
                            color:'#007AFF'
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
}