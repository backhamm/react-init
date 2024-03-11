import axios from 'axios'
import {getLocationParams} from "@/utils/func";
import {toast} from "@/utils/toast";

// 创建axios实例
const service = axios.create({
    timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
    config => {
        const {token} = getLocationParams()
        config.headers['token'] = token
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        toast(error.response?.data?.msg || 'Server Error')
        return Promise.reject(error.response?.data || {code: '-1', msg: 'Server Error'})
    }
)
export default service
