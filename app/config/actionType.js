export default ActionType = {
    auth: {
        login: Symbol('login'),
        loginOut: Symbol('loginOut'),
        logined: Symbol('logined'),
        chgPwd: Symbol('chgPwd'),
        register: Symbol('register'),
        resetPassword: Symbol('resetPassword')
    },
    common: {
        loading: Symbol('loading'),
        loaded: Symbol('loaded'),
        sendsms: Symbol('sendsms'),
        smsSucceed: Symbol('smsSucceed'),
        smsFailure: Symbol('smsFailure'),
    },
    news: {
        getList: Symbol('news_getList'), //获取新闻列表,调用fillList
        fillList: Symbol('news_fillList'), //fetch数据后覆盖数据reducer
        addList: Symbol('news_addList'), //fetch数据后添加数据reducer
    }
}