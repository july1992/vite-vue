import type {ResponseData} from '../Response'

//代表一个用户信息的数据类型
export interface UserInfo {
    "id": number,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {
    },
    "openid": null,
    "nickName": null,
    "phone": string,
    "name": string,
    "certificatesType": string,
    "certificatesNo": string,
    "certificatesUrl": null,
    "authStatus": number,
    "status": number
}

 
export interface UserRes extends ResponseData {
    data: UserInfo
}
