//对于axios函数库进行二次封装?
//你工作的时候是否axios进行二次封装?二次封装的目的是什么那?
//目的:1,利用axios请求、响应拦截器功能
//目的2:请求拦截器,一般可以在请求头中携带公共的参数:token
//目的3:响应拦截器,可以简化服务器返回的数据,处理http网络错误
import axios from 'axios';

//@ts-ignore
import { ElMessage } from 'element-plus';
const request = axios.create({
    baseURL: '/api',//请求的基础路径的设置
    timeout: 5000//超时的时间的设置,超出五秒请求就是失败的
});


//务必对外暴露axios
export default request;