import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { loginOut } from '../../actions/auth'
import {
    Text,
    View, Image, StyleSheet, Dimensions, ScrollView, Switch
} from 'react-native';
import { Input, Button, Icon, ListItem, Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationEvents } from 'react-navigation';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import ActionType from '../config/actionType'
class SettingPage extends Component {
    static navigationOptions = {
        title: '设置',
    };
    constructor(props) {
        super(props)
        this.state = {
            switchReceiveNewMessage: true,
            switchVoice: false,
            switchShake: true,
            switchAvoidDisturb: false,
            switchVoiceOut: false,
            scanningFrequency: 0,//0:低１：中２：高
        }
    }
    componentDidMount() {
       /*  if (!this.props.user || !this.props.user.token)
            this.props.navigation.navigate('Login') */
    }
    loginOut() {
        this.props.dispatch({type: ActionType.auth.loginOut})
        this.props.navigation.goBack()
        //this.props.dispatch({type: 'RESET_STORE'});
        //this.props.navigation.navigate('Login')
    } 
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#F8F8F8' }}>
              {/*   <NavigationEvents
                    onWillFocus={payload => {
                        if (!this.props.user || !this.props.user.token)
                            this.props.navigation.navigate('Login')
                    }}

                /> */}
                <View>
                    <ListItem
                        key={1}
                        title='账号'
                        bottomDivider
                        // leftIcon={{ name: 'av-timer' }}
                        rightTitle="18971685188"
                    />
                    <ListItem
                        key={2}
                        title='头像'
                       
                        /* rightAvatar={<Avatar source={{
                            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }} />} */
                       // rightAvatar={<Avatar  rounded source={require('../../res/images/avatar1.jpg')} />}
                        chevron
                    //leftIcon={{ name: 'aspect-ratio' }}
                    />
                </View>

                <View style={{ marginTop: 10 }}>
                    <ListItem
                        key={3}
                        title='密码'
                        bottomDivider
                        chevron
                    //leftIcon={{ name: 'flight-takeoff' }}
                    />
                    <ListItem
                        key={4}
                        title='接收新消息通知'
                        bottomDivider
                        switch={{
                            onValueChange: value => this.setState({ switchReceiveNewMessage: value }),
                            value: this.state.switchReceiveNewMessage
                        }}
                    //leftIcon={{ name: 'email' }}
                    />
                    <ListItem
                        key={5}
                        title='声音'
                        bottomDivider
                        switch={{
                            onValueChange: value => this.setState({ switchVoice: value }),
                            value: this.state.switchVoice
                        }}
                    //leftIcon={{ name: 'lightbulb-outline' }}
                    />
                    <ListItem
                        key={6}
                        title='震动'
                        bottomDivider
                        switch={{
                            onValueChange: value => this.setState({ switchShake: value }),
                            value: this.state.switchShake
                        }}
                    //leftIcon={{ name: 'settings' }}
                    />
                    <ListItem
                        key={7}
                        title='聊天消息免打扰'
                        bottomDivider
                        switch={{
                            onValueChange: value => this.setState({ switchAvoidDisturb: value }),
                            value: this.state.switchAvoidDisturb
                        }}
                    //leftIcon={{ name: 'settings' }}
                    />
                    <ListItem
                        key={8}
                        title='使用扬声器播放语音'
                        bottomDivider
                        switch={{
                            onValueChange: value => this.setState({ switchVoiceOut: value }),
                            value: this.state.switchVoiceOut
                        }}
                    //leftIcon={{ name: 'settings' }}
                    />
                    <ListItem
                        key={9}
                        title='门禁扫描频率'
                        bottomDivider
                        buttonGroup={{
                            buttons: ['低', '中', '高'],
                            onPress: (selectedIndex) => this.setState({ scanningFrequency: selectedIndex }),
                            selectedIndex: this.state.scanningFrequency
                        }}
                    //leftIcon={{ name: 'settings' }}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <ListItem
                        key={10}
                        title='退出'
                        //bottomDivider
                        //chevron
                        // leftIcon={{ name: 'settings' }}
                        onPress={this.loginOut.bind(this)}
                    />
                </View>
                {/*  <Button
                    buttonStyle={styles.loginButton}
                    containerStyle={{ marginTop: 32, flex: 0 }}
                    activeOpacity={0.8}
                    title='重新登录'
                    onPress={this.loginOut.bind(this)}
                    titleStyle={styles.loginTextButton}
                
                /> */}
            </ScrollView>
        );
    }
}


//获取ticket记录集及修改记录ＩＤ数组
const mapStateToProps = (state) => {
    let user = state.user
    return { user }


}
SettingPage = connect(
    mapStateToProps
)(SettingPage) 
export default SettingPage;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    rowSelector: {
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectorContainer: {
        flex: 1,
        alignItems: 'center',
    },
    selected: {
        position: 'absolute',
        borderRadius: 50,
        height: 0,
        width: 0,
        top: -5,
        borderRightWidth: 70,
        borderBottomWidth: 70,
        borderColor: 'white',
        backgroundColor: 'white',
    },
    loginContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginTextButton: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    loginButton: {
        backgroundColor: 'rgba(232, 147, 142, 1)',
        borderRadius: 10,
        height: 50,
        width: 200,
    },
    titleContainer: {
        height: 150,
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    formContainer: {
        backgroundColor: 'white',
        width: SCREEN_WIDTH - 30,
        borderRadius: 10,
        paddingTop: 32,
        paddingBottom: 32,
        alignItems: 'center',
    },
    loginText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    bgImage: {
        flex: 1,
        top: 0,
        left: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        fontFamily: 'light',
        backgroundColor: 'transparent',
        opacity: 0.54,
    },
    selectedCategoryText: {
        opacity: 1,
    },
    titleText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'regular',
    },
    helpContainer: {
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:
        { width: 100, height: 100, backgroundColor: '#FFFFFF', borderWidth: 1, borderRadius: 5, borderColor: '#ECECEC', margin: 5 }
    ,
    /* list: {
        marginTop: 20,
        borderTopWidth: 1,
        borderColor: '#cbd2d9',
        backgroundColor: '#fff',
      }, */
});