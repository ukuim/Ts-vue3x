

<template>
  <el-form label-width="auto" class="login-form" style="padding: 0; margin: 0">
    <el-form-item label="名字">
      <el-input v-model="UserData.username" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="UserData.password" />
    </el-form-item>
    <el-form-item label="token">
      <el-input v-model="Token.token" />
    </el-form-item>
    <el-form-item>
      <el-button @click="login()">登录</el-button>
      <el-button @click="cheakToken()">注册</el-button>
    </el-form-item>
  </el-form>
</template>
  
  <script lang="ts" setup>

import { useStore } from "vuex";
const store = useStore();

var UserData = store.state.userModel.user;
var Token =store.state.userModel.Token;



const login = () => {
  store.dispatch("userModel/loginUser");
};
const cheakToken = () => {
  store.dispatch("userModel/cheakToken");
};
</script>
<style scoped>
.login-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>