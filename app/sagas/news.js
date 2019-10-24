import {
  put,
  takeEvery,
  call,
  all,
  select,
  fork,
  delay
} from 'redux-saga/effects'
import ActionType from '../config/actionType'
import {apiUrl} from '../config'
import request from './request'
import Tips from '../utils/tips'
export function * fillList(payload) {
  try {
    const {options, extra} = {
      ...payload
    }
    let list = {}
    const ret = yield call(request, apiUrl.newsList, options, extra)
    list.content = ret
    if(!options.pageIndex||options.pageIndex<2)
    yield put({type: ActionType.news.fillList, payload: list});
    else
    yield put({type: ActionType.news.addList, payload: list});
  } catch (e) {
    Tips.toast(e.message)
  }
}

export default function * news() {
  yield takeEvery(ActionType.news.getList, fillList)

}
