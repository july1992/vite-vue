<template>

    <div class="content">

        <div class="login">
            <div class="loginType">
                微信登录，手机号登录，账号密码登录
            </div>
            <div class="account">

                <p> 用户名：</p>
               <el-input  placeholder="输入用户名" :prefix-icon="User" v-model="inputAccount" clearable />
            </div>

            <div class="psw">
                <p> 密码</p>
                <el-input v-model="inputPsw" :prefix-icon="Lock" placeholder="请输入密码" clearable />
            </div>
            <el-button type="primary" @click="login()">登录</el-button>
        </div>
      

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { User, Lock } from "@element-plus/icons-vue";
const inputAccount = ref('')
const inputPsw = ref('')
let flag=ref(boolean)(false)////flag如果为真,开启倒计时  flag:为假的并非倒计时

const login=()=>{
    inputAccount.value="xxxx"
    inputPsw.value="ssss"

}
</script>

<style scoped lang="scss">
    .content{
        margin-top: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 300px;
        .login{
            width: 300px;
           
            .loginType{
                text-align: center;
            }
            .account{
                display: flex;
                justify-content: space-between;
                margin-top: 12px;
                p{

                    text-align: left;
                }

                ::v-deep(.el-input__wrapper){
                    width: 100px;
                }
            }
             .psw{
                display: flex;
                margin-top: 12px;
            }
        }
    }
    

</style>