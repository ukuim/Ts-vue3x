

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          default-active="/home"
          mode="horizontal"
          background-color="#a18cd1"
          text-color="#000000"
          active-text-color="#fbc2eb"
          router
        >
          <el-menu-item index="/home/h1">导航一</el-menu-item>
          <el-sub-menu index="2">
            <template #title>导航二</template>

            <el-menu-item index="/home/h2">item two</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script   lang="ts">
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  created() {
    if (sessionStorage.getItem("user")) {
      this.$router.push("/");
    } else {
      this.$router.push("/login");
    }
  },
};
</script>

<style >
</style>
