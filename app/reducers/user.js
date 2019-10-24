import ActionType from '../config/actionType'
const user = (state = {
    token: 'Bearer 49b1f23e77da9feb041a61db090641fef46bf867'
}, action) => {
    if (action.type === ActionType.auth.logined) {
        /*  alert(JSON.stringify(action)) */
        // state = Object.assign({}, { token: action.token, userName: action.userName,
        // expired: action.expired, propertyId: action.propertyId, propertyProjectId:
        // action.propertyProjectId, companyName: action.companyName })
        state = Object.assign({}, state, action.payload)
    }
    if (action.type === ActionType.auth.loginOut) {
        state = Object.assign({}, null)
    }
   /*  if (action.type === 'LOGIN_FAILURE') {
        state = Object.assign({}, null)
    }
    if (action.type === 'RESET_USER_PASSWORD') {
        if (action.data != null) 
            state = Object.assign({}, action.data)
        else 
            state = Object.assign({}, {})
    }
    if (action.type === 'USER_VERIFT_STATUS') {
        if (action.data != null) 
            state = Object.assign({}, action.data)
        else 
            state = Object.assign({}, {})
    } */
    return state;

}
export default user;