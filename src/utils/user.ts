//本地存储操作用户信息的方法
export const set_token=(userInfo:string) =>{
    localStorage.setItem('userInfo',userInfo);
}

export const get_token=()=>{
    return localStorage.getItem('userInfo')
}

export const remove_token=()=>{
    localStorage.removeItem('userInfo')
}