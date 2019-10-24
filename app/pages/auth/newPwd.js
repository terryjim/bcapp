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

class NewPwd extends Component {
    constructor(props) {
        super(props);
        //获取上一步的参数
        const {mobile,sms} = props.navigation.state.params
        this.state = {
            mobile,
            sms,
            isSendSMS:0,
            second:60,
            pwd:'',
            pwdConfirmation:''
        };
    }
    newPwd=()=>{
        let {mobile,pwd,pwdConfirmation,sms} = this.state
        if(!FieldValidate.minLength6(pwd)){
            Tips.toast("请至少输入六位字符")
            return
        }
        if(pwd != pwdConfirmation){
            Tips.toast("密码不一致，请重新输入！")
            return
        }
        pwd = crypto.MD5(pwd).toString()
        this.props.dispatch({
            type: ActionType.auth.resetPassword, 
            options: {
                mobile,pwd,sms,navigation:this.props.navigation
            }
        })
    }
    render() {
        const {pwd,pwdConfirmation} = this.state
        return (
            <View style={styles.container}>
                <Image source={logoPng} style={styles.logo} />
                <View style={styles.inputPortion}>
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
                        onSubmitEditing={()=>this.passwordConfirmationInput.focus()}
                    />
                    <Input
                        leftIcon={(
                            <Image source={PasswordPng} style={styles.inputIcon} />
                        )}
                        containerStyle={[styles.input,{marginTop:5}]}
                        inputContainerStyle={styles.inputBorder}
                        inputStyle={styles.inputFace}
                        placeholder='请再次输入新密码'
                        value={pwdConfirmation}
                        keyboardType='default'
                        returnKeyType='done'
                        secureTextEntry={true}
                        ref={input => (this.passwordConfirmationInput = input)}
                        onChangeText={pwdConfirmation => this.setState({ pwdConfirmation })}
                        onSubmitEditing={this.newPwd}
                    />
                </View>
                <Button
                    containerStyle={styles.loginButPortion}
                    buttonStyle={[styles.input,{backgroundColor:'#016843'}]}
                    onPress={this.newPwd}
                    title={'提交'}
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
NewPwd = connect(mapStateToProps)(NewPwd)
export default NewPwd;