//定义用户相关的仓库
import {defineStore} from "pinia";
//
import {reqCode,reqUserLogin} from "@/api/hospital";

import {set_token,get_token,remove_token} from "@/utils/user"

