import { stringify } from 'querystring';
import type { Reducer, Effect } from 'umi';
import { history } from 'umi';

import { queryTopic } from './service';
import { message } from 'antd';


export type LoginModelType = {
  namespace: string;
  state: {};
  effects: {
      query: Effect;
  };
  reducers: {
      getTopicList: Reducer<any>;
  };
  subscriptions: {}
};

const Model: LoginModelType = {
  namespace: 'interviewList',

  state: {
    dataSource: [],
  },

  effects: {
    * query({payload}: any, {call, put}) {
        const res = yield queryTopic(payload)
        if (res != null) {
            yield put({
                type: "getTopicList",
                payload: res
            })
        }
    }
  },

  reducers: {
      getTopicList(state, action) {
          return {
              ...state,
              dataSource: action.payload
          }
      }
  },
  subscriptions: {
      setup({ dispatch, history }: any): void {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      history.listen(({ pathname, search }: any): void => {
        if (pathname.indexOf("/interview/index") != -1) {
          dispatch({
            type: "query",
            payload: {
              page: 1
            }
          })
        }
      });
    },
  }
};

export default Model;
