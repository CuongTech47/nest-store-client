<script setup>
import { RouterLink, RouterView } from "vue-router";

import { useRouter } from "vue-router";
import { useAuthStore } from "./stores/auth";

const auth = useAuthStore();
const router = useRouter()

function logout(){
  auth.clear()
  router.push({name : 'login'})
}

</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
