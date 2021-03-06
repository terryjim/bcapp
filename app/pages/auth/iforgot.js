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

const logoPng = require('../../res/images/logo.png');
const MobilePng = require('../../res/images/mobile.png');
const VerifyPng = require('../../res/images/verify.png');
const PasswordPng = require('../../res/images/password.png');

const SCREEN_WIDTH = Dimensions.get('window').width;

class Iforgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile:'',
            sms:'',
            isSendSMS:0,
            second:60
        };
    }
    componentDidUpdate() {
        if (this.props.sms) {
            //短信发送成功，修改短信发送状态
            this.props.dispatch({type: ActionType.common.smsFailure})
            //开始倒计时
            this.bulletincd()
        }
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
    next=() =>{
        const {mobile,sms} = this.state
        if(!FieldValidate.mobile(mobile)){
            Tips.toast("手机号格式不正确")
            return
        }
        if(!sms){
            Tips.toast("请输入验证码")
            return
        }
        this.props.navigation.navigate('NewPwd',{mobile,sms})
    }
    render() {
        let {mobile,sms,isSendSMS,second} = this.state
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
                        onSubmitEditing={() => this.smsInput.focus()}
                        onChangeText={mobile => this.setState({ mobile })}
                    />
                    <Input
                        leftIcon={(
                            <Image source={VerifyPng} style={styles.inputIcon} />
                        )}
                        rightIcon={(
                            !isSendSMS?
                            <Button
                                title="获取验证码"
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
                        placeholder='请输入验证码'
                        value={sms}
                        keyboardType="numeric"
                        returnKeyType='done'
                        ref={input => (this.smsInput = input)}
                        onChangeText={sms => this.setState({ sms })}
                        onSubmitEditing={this.next}
                    />
                </View>
                <Button
                    containerStyle={styles.loginButPortion}
                    buttonStyle={[styles.input,{backgroundColor:'#016843'}]}
                    onPress={this.next}
                    title={'下一步'}
                    titleStyle={styles.loginButTitle}
                />
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
    let sms = state.sms
    return {sms}
}
Iforgot = connect(mapStateToProps)(Iforgot)
export default Iforgot;
