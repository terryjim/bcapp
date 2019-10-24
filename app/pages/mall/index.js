import React from "react"
import {StyleSheet,View,Text} from 'react-native'
import { WebView } from 'react-native-webview';
import defaultStyles,{commonStyle} from '../../res/commonStyle'
import {connect} from 'react-redux'
import ActionType from '../../config/actionType'
import NetInfo from "@react-native-community/netinfo"
import { Button } from "react-native-elements";
import {NavigationEvents} from 'react-navigation'
class Mall extends React.Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = {
        isConnected: null
    };
  }
  componentDidMount(){
    // //检测网络是否连接
    // NetInfo.isConnected.fetch().done((isConnected) => {
    //   this.setState({isConnected});
    // });
    // //监听网络变化事件
    // NetInfo.addEventListener('change', (networkType) => {
    //   this.setState({isConnected: networkType})
    // })
    //this.props.dispatch({type: ActionType.auth.loginOut})
  }
  render() {
    let {isConnected} = this.state 
    return (     
      <View style={defaultStyles.container}>
        <NavigationEvents 
          onDidFocus={()=>{
            //检测网络是否连接
            NetInfo.isConnected.fetch().done((isConnected) => {
              this.setState({isConnected});
            });
            //监听网络变化事件
            NetInfo.addEventListener('change', (networkType) => {
              this.setState({isConnected: networkType})
            })
          }}
        />
        {
          isConnected?
            <View style={{flex:1}}>
              <View style={{height:commonStyle.navStatusBarHeight,backgroundColor:'#016843'}} />
              <WebView  source={{uri: 'http://h5.ueecai.com/#/auth/?shop=10002&token=Bearer 49b1f23e77da9feb041a61db090641fef46bf867'}}/>
            </View>
          :
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Text>没有网络</Text> 
              <Button
                title="刷新"
                onPress={()=>{
                  NetInfo.isConnected.fetch().done((isConnected) => {
                    this.setState({isConnected});
                  });
                }}
              />
            </View> 
        }
      </View>
    )
  }  
}
const mapStateToProps = (state) => {
  let user = state.user
  return {user}
}
Mall = connect(mapStateToProps)(Mall)
export default Mall;
 /*  source={{uri: 'http://h5.ueecai.com/#/auth/?shop=10002&token=Bearer 49b1f23e77da9feb041a61db090641fef46bf867'}} */