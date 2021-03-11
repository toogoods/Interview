import request from '@/utils/request';

export async function queryTopic(params: any) {
    return request('/api/getTopicList', {
        params: params
    })
}