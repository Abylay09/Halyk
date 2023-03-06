<script setup lang="ts">
import Auth from "../components/auth/Auth.vue"
import { useAuthStore } from "@/stores/AuthStore";

const counterStore = useAuthStore();
</script>

<template>
    <div class="error-block" :class="{ showError: counterStore.showError }">
        <h3>Пользователь не найден</h3>
        <img @click="counterStore.closeError" src="https://img.icons8.com/ios/1x/multiply.png" alt="cross">
    </div>
    <Auth />
</template>

<style scoped>
.error-block {
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    width: 650px;
    height: 60px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: top .6s linear;;
}

.showError {
    top: 0;
}


.error-block img {
    cursor: pointer;
}

h3 {
    color: #fff;
}
</style>