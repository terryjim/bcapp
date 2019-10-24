import news from './news'
import auth from './auth'
import sms from './sms'
import request from './request'
import { put, takeEvery, fork,all } from 'redux-saga/effects'

 
export default function* rootSaga() {
    yield all([news(),auth(),sms()])
  }