import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Input, Button, Icon} from 'react-native-elements';
import {
    StyleSheet,
    View,
    Text,Image,
    ImageBackground,
    Dimensions,
    LayoutAnimation,
    UIManager,
    KeyboardAvoidingView
} from 'react-native';
import ActionType from '../../config/actionType'
import {connect} from 'react-redux'
import FieldValidate from '../../utils/FieldValidate'
import Tips from '../../utils/tips'
import crypto from "crypto-js"

const logoPng = require('../../res/images/logo.png');
const MobilePng = require('../../res/images/mobile.png');
const VerifyPng = require('../../res/images/verify.png');
const PasswordPng = require('../../res/images/password.png');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginMethod: 1, //登陆类型
            mobile:'',
            pwd:'',
            sms:'',
            isSendSMS:0,
            second:60
        };
      }
    componentDidUpdate() {
        //alert(JSON.stringify(this.props.user))
        if (this.props.user && this.props.user.token) {
            this.props.navigation.navigate('MainTabs')
        }
        if (this.props.sms) {
            //短信发送成功，修改短信发送状态
            this.props.dispatch({type: ActionType.common.smsFailure})
            //开始倒计时
            this.bulletincd()
        }
    }
    loginMethodSwitch=loginMethod=>{
        this.setState({
            loginMethod,
            pwd:'',
            sms:''
        })
    }
    login = () => {
        let {loginMethod,mobile,pwd,sms} = this.state
        if(!FieldValidate.mobile(mobile)){
            Tips.toast("手机号格式不正确")
            return
        }
        if(loginMethod==1){
            if(!FieldValidate.minLength6(pwd)){
                Tips.toast("请至少输入六位字符")
                return
            }
        }else{
            if(!sms){
                Tips.toast("请输入验证码")
                return
            }
        }
        //密码加密
        pwd = crypto.MD5(pwd).toString()
        this.props.dispatch({
            type: ActionType.auth.login, 
            options: {
                loginMethod,mobile,pwd,sms
            }
        })
    }
    bulletincd=()=>{
        let timer = setInterval(() => {
            let second = this.state.second
            this.setState({second:--second});
            if(second===0){
              clearInterval(timer);
              this.setState({
                second:60,
                isSendSMS:0
              })
            }
        }, 1000);
        this.setState({
            isSendSMS:1
        });
    }
    sendSms = () =>{
        let {mobile} = this.state
        if(!FieldValidate.mobile(mobile)){
            Tips.toast("手机号格式不正确")
            return
        }
        this.props.dispatch({
            type: ActionType.common.sendsms, 
            options: {
                phoneNumber:mobile
            }
        })
    }
    render() {
        let {loginMethod,mobile,pwd,sms,isSendSMS,second} = this.state
        return (
            <View style={styles.container}>
                <Image source={logoPng} style={styles.logo} />
                <View style={styles.inputPortion}>
                    <Input
                        leftIcon={(
                            <Image source={MobilePng} style={styles.inputIcon} />
                        )}
                        containerStyle={styles.input}
                        inputContainerStyle={styles.inputBorder}
                        inputStyle={styles.inputFace}
                        placeholder='请输入手机号码'
                        value={mobile}
                        maxLength={11}
                        keyboardType="numeric"
                        returnKeyType="next"
                        ref={input => (this.mobileInput = input)}
                        onSubmitEditing={() => 
                            loginMethod==1 ? this.passwordInput.focus() : this.smsInput.focus()
                        }
                        onChangeText={mobile => this.setState({ mobile })}
                    />
                    {loginMethod==1 && 
                        <Input
                            leftIcon={(
                                <Image source={PasswordPng} style={styles.inputIcon} />
                            )}
                            containerStyle={[styles.input,{marginTop:5}]}
                            inputContainerStyle={styles.inputBorder}
                            inputStyle={styles.inputFace}
                            placeholder='请输入密码'
                            value={pwd}
                            keyboardType='default'
                            returnKeyType='done'
                            secureTextEntry={true}
                            ref={input => (this.passwordInput = input)}
                            onChangeText={pwd => this.setState({ pwd })}
                            onSubmitEditing={this.login}
                        />
                    }
                    {loginMethod==2 && 
                        <Input
                            leftIcon={(
                                <Image source={VerifyPng} style={styles.inputIcon} />
                            )}
                            rightIcon={(
                                !isSendSMS?
                                <Button
                                    title="获取动态密码"
                                    titleStyle={[styles.inputFace,{color:'#4A90E2'}]}
                                    type="clear"
                                    onPress={this.sendSms.bind(this)}
                                />
                                :
                                <Text style={{color:"#4A90E2",marginRight:10}}>{second}</Text>
                            )}
                            containerStyle={[styles.input,{marginTop:5}]}
                            inputContainerStyle={styles.inputBorder}
                            inputStyle={styles.inputFace}
                            placeholder='请输入动态密码'
                            value={sms}
                            keyboardType="numeric"
                            returnKeyType='done'
                            ref={input => (this.smsInput = input)}
                            onChangeText={sms => this.setState({ sms })}
                            onSubmitEditing={this.login}
                        />
                    }
                </View>
                <Button
                    containerStyle={styles.loginButPortion}
                    buttonStyle={[styles.input,{backgroundColor:'#016843'}]}
                    onPress={this.login}
                    title={'登录'}
                    titleStyle={styles.loginButTitle}
                />
                {loginMethod==1 && 
                    <View style={styles.bottomView}>
                        <Button
                            title="手机动态码登陆"
                            titleStyle={styles.bottomBut}
                            type="clear"
                            onPress={this.loginMethodSwitch.bind(this,2)}
                        />
                        <Button
                            title="忘记密码"
                            titleStyle={styles.bottomBut}
                            type="clear"
                            onPress={()=>{this.props.navigation.navigate('Iforgot')}}
                        />
                    </View>
                }
                {loginMethod==2 && 
                    <View style={styles.bottomView}>
                        <Button
                            title="账号密码登录"
                            titleStyle={styles.bottomBut}
                            type="clear"
                            onPress={this.loginMethodSwitch.bind(this,1)}
                        />
                        <View></View>
                    </View>
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bottomBut:{
        fontSize:12,
        color:'#4a4a4a'
    },
    bottomView:{
        marginTop:29,
        flexDirection:'row',
        width:SCREEN_WIDTH-32,
        justifyContent:'space-between'
    },
    loginButTitle:{
        fontSize:19,
        color:'#fff'
    },
    loginButPortion:{
        marginTop:40
    },
    container:{
        flex: 1,
        alignItems: "center"
    },
    logo:{
        height:64,
        width:64,
        borderRadius:10,
        marginTop:60
    },
    inputPortion:{
        marginTop:96
    },
    input:{
        height:44,
        width:SCREEN_WIDTH-32
    },
    inputBorder:{
        borderColor:'#f0f0f0',
    },
    inputFace:{
        fontSize:14,
        color:'#9B9B9B'
    },
    inputIcon:{
        height:20,
        width:20
    }
})
const mapStateToProps = (state) => {
    //alert(JSON.stringify(state))
    let user = state.user
    let sms = state.sms
    return {user,sms}
}
Login = connect(mapStateToProps)(Login)
export default Login;
