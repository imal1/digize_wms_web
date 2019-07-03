/**
 * @Author: chenzj
 * @Date:   2019-07-03 11:09:42
 * @Last modified by:   chenzj
 * @Last modified time: 2019-07-03 11:27:13
 */

import axios from "./axios";

export function loginAsync(data: any) {
  return axios.post('/userlogin/authlogin', data)
}

export default {
  loginAsync
}
