/**
 * @Author: chenzj
 * @Date:   2019-07-03 10:52:35
 * @Last modified by:   chenzj
 * @Last modified time: 2019-07-03 11:06:12
 */

import axios from 'axios';
const uuidv1 = require('uuid/v1');

let newAxios = axios.create({
    responseType: 'json',
    timeout: 30000,
});
let xhrs: any[] = [];

const CancelToken = axios.CancelToken;

// 请求拦截器
newAxios.interceptors.request.use(
    function(config) {
        const source = CancelToken.source();
        const uuid = uuidv1();
        xhrs.push({
            uuid,
            source: source,
        });
        config.cancelToken = source.token;
        (config as any).cancelTokenUuid = uuid;
        // header 添加AppName AppVersion
        config.headers.AppName = 'WebClient';
        config.headers.AppVersion = 0;
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// 响应拦截器
newAxios.interceptors.response.use(
    function(response) {
        if (!response) {
            throw new Error('服务器错误');
        } else if (response && response.status === 401) {
            throw new Error('401');
        } else if (response && response.status >= 200 && response.status <= 504 && response.data) {
            if (response.data.success || response.data.Success) {
                if ('result' in response.data) {
                    return response.data.result;
                } else if ('Result' in response.data) {
                    return response.data.Result;
                }
            }
            if (!response.data.success && response.data.error) {
                throw new Error(response.data.error.message);
            }
            if (!response.data.Success && response.data.Error) {
                throw new Error(response.data.Error.Message);
            }
            if (response.data instanceof Blob) {
                return response.data;
            }
        } else {
            throw new Error('未知错误');
        }
    },
    function(error) {
        // Do something with response error
        let response = error.response;
        if (response) {
            let { status, data } = response;
            if (status === 403) {
                return Promise.reject(new Error('当前用户无权限'));
            }
            if (data && data.error) {
                return Promise.reject(new Error(data.error.message));
            }
            if (status === 401) {
                // setTimeout(() => history.replace('/login'), 0);
                return Promise.reject(new Error('401'));
            }
        }
        return Promise.reject(error);
    }
);
