/*
 * @Author: hhhhhq
 * @Date: 2020-05-30 10:44:31
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-30 15:55:48
 * @Description: file content
 */ 
/*
 * @Author: hhhhhq
 * @Date: 2020-05-28 23:37:31
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-05-29 10:01:49
 * @Description: file content
 */

import { queryUser } from '@/services/api';

export default {
  namespace: 'userArt',

  state: {
    data: {
      list: [],
      pagination: {}
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryUser, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
