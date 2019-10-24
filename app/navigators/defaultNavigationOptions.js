import {commonStyle} from '../res/commonStyle'

export default defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: commonStyle.navThemeColor,
        elevation: 0.5,
        height:commonStyle.navHeight,
        paddingTop:commonStyle.navStatusBarHeight
    },
    headerTintColor: commonStyle.navTitleColor,
    headerTitleStyle: {
        fontWeight: 'bold'//,flex:1,textAlign:'center'
    }
}