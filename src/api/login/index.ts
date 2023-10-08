//引入二次封装axios
import request from "@/utils/request"

import type {UserInfo,UserRes }  from './User'

enum API{
    Login_url='user/login'
}
export const reqUserLogin=(data:UserInfo) =>{
    request.post<any,UserRes>(API.Login_url,data);
}