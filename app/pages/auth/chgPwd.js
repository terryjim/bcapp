import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Dimensions,
    LayoutAnimation,
    UIManager,
    KeyboardAvoidingView
} from 'react-native';

import {connect} from 'react-redux'

const SCREEN_WIDTH = Dimensions
    .get('window')
    .width;
const SCREEN_HEIGHT = Dimensions
    .get('window')
    .height;

class ChgPwd extends Component {
    render() {
        return (
            <View
                style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>修改密码</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {return {}}
ChgPwd = connect(mapStateToProps)(ChgPwd)
export default ChgPwd;
