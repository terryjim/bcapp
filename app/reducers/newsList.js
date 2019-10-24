import ActionType from '../config/actionType'
export default newsList = (state = {
    content: [],
    numberOfElements: 2
}, action) => {
    if (action.type === ActionType.news.fillList) {
        //alert("aa:"+JSON.stringify(action.payload))
        if (action.payload != null) {
            state = Object.assign({}, action.payload)
            // alert("bb:"+JSON.stringify(state))
        } else {
            //alert(';bbb;')
            state = {}
        }
    }
    if (action.type === ActionType.news.addList) {
        // alert("bb:"+JSON.stringify(action.payload))
        if (action.payload != null) {
            if (state && state.content) 
                state = Object.assign({},{content: state.content.concat(action.payload.content)})
            else 
                state = Object.assign({}, action.payload)

        }
       // alert("cc:" + JSON.stringify(state.content.length))
    }
    return state;
}