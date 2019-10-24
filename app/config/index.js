export const netTimeout=20000   //缺省网络超时设定20s
export const delayLoadingTime=500   //缺省0.5s之内加载完成则不显示加载状态
// 请求连接前缀
export const infoBaseUrl = 'https://infoapi.greenlandilife.com'
export const gateBaseUrl = 'https://gateapi.greenlandilife.com'
export const ucenterBaseUrl = 'https://ucapi.greenlandilife.com/ucenter'
export const accessextBaseUrl = 'https://gateapi.greenlandilife.com/corp'
export const companyBaseUrl = 'https://www.greenlandilife.com/'
// 输出日志信息
export const noConsole = false
export const defaultPageSize = 20
//默认公司
export const defaultConpany = 1613
export const appletUrl='http://www.greenlandilife.com/'
//登陆key与secret
export const appKey = 1
export const appSecret = 'd7f8dd1e7b197ac975620eea8c93c6a5e14b4c25'

//APP2.0请求连接前缀
export const baseUrl = 'http://192.168.3.186:8055'
export const apiUrlV2 = {
    //登陆
    login:baseUrl+'/app/user/login',
    //注册
    appRegister:baseUrl+'/app/user/signIn',
    //发送短信
    sendSms:baseUrl+'/wxpro/sendMessage',
    //找回密码、重置密码
    resetPassword:baseUrl+'/app/user/setPassword',
}

export const apiUrl = {
    //登陆
    login:ucenterBaseUrl + '/authorize.php',
    //app注册
    appRegister:ucenterBaseUrl + '/ucenter.php/user/admin/register',
    //忘记密码
    resetPassword:infoBaseUrl+'/CommonData/v2/password/reset',

    //首页banner
    banner: infoBaseUrl + '/CommonData/v2/service/banner',
    //首页活动
    activity: infoBaseUrl + '/CommonData/v3/sl_activity/list',
    //公告
    announcement: infoBaseUrl + '/CommonData/v2/sl_activity/list',
    //新闻列表
    newsList: infoBaseUrl + '/CommonData/v2/sl_activity/list',
    //授权门禁列表
    doorAccessList: gateBaseUrl + '/AccessControl/v3/DoorAccess/CardList',
    //楼盘列表
    buildingList: infoBaseUrl + '/CommonData/v2/sl_lpgl',
    //授权地点列表
    authSiteList: gateBaseUrl + '/AccessControl/v3/owner/list',
    //远程开门
    remoteOpen: gateBaseUrl + '/AccessControl/v3/remote/open',
    //临时授权
    tempAuth: gateBaseUrl + '/AccessControl/v3/vistor',
    //意见反馈
    feedback: infoBaseUrl + '/CommonData/v3/feedback',
    //获取积分列表
    mybonusList: infoBaseUrl + '/CommonData/v3/mybonus',
    //获取帮助url
    helppage: infoBaseUrl + '/CommonData/v3/helppage',
    //获取物业反馈选择列表
    feedbackList:infoBaseUrl+'/CommonData/v3/init/feedback',
    //提交物业反馈
    feedbackSave:infoBaseUrl+'/CommonData/v3/pc/feedback',
    //我的住宅
    myhouseList: accessextBaseUrl + '/accessext/v1/myhouse',
    //我的企业
    mycompanyList: accessextBaseUrl + '/accessext/v1/mycompany',
    //住户成员
    membersList: accessextBaseUrl + '/accessext/v1/myhouse/members',
    //添加住户成员
    addMembers: accessextBaseUrl + '/accessext/v1/house/member',
    //删除住户成员
    delMembers: accessextBaseUrl + '/accessext/v1/house/del/member',
    //添加住户管理员
    setManager: accessextBaseUrl + '/accessext/v1/house/manager',

    //get:发送短信验证码,post：短信验证码验证
    sendSms: ucenterBaseUrl + '/ucenter.php/user/sms/scan',
    //注册
    register: ucenterBaseUrl + '/ucenter.php/user/wx/register',
    //查询是否绑定用户
    findUser: ucenterBaseUrl + '/ucenter.php/user/wx/find',
    //验证用户是否存在
    userVerify: ucenterBaseUrl + '/ucenter.php/user/admin/findUser',
    //获取阿里云oss直传参数
    //ossParam:'http://118.31.72.47:9001/oss/getParams',
    ossParam: ucenterBaseUrl + '/ucenter.php/user/wx/getOssParams',
    //人脸验证
    faceVerify: ucenterBaseUrl + '/ucenter.php/user/wx/faceverify',
    //获取用户头像
    userImg: ucenterBaseUrl + '/avatar.php',
    //退出解除用户绑定
    userExit: ucenterBaseUrl + '/ucenter.php/user/wx/userExit',

    //验证用户是否存在于企业
    companyVerify:companyBaseUrl + 'index.php?r=admin/wx/verify',
    //企业通讯录
    contactsList:companyBaseUrl + 'index.php?r=admin/wx/contacts',
    //审核列表
    checkList:companyBaseUrl + 'index.php?r=admin/wx/check-list',
    //审核人员删除
    checkDel:companyBaseUrl + 'index.php?r=admin/wx/check-del',
    //添加审核通过员工
    checkAdd:companyBaseUrl + 'index.php?r=admin/wx/check-add',
    //删除员工
    delUser:companyBaseUrl + 'index.php?r=admin/wx/relieve'
}