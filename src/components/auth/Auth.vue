<script setup lang="ts">
import { useAuthStore } from "../../stores/AuthStore"
const AuthStore = useAuthStore();



</script>

<template>
    <div class="auth-wrapper">

        <img src="https://www.halyklife.kz/themes/halyk/assets/images/svg/logo.svg" alt="halyk-life">
        <form @submit.prevent="AuthStore.auth" class="auth-form">
            <input type="text" placeholder="Логин" v-model="AuthStore.login">
            <input type="password" placeholder="Пароль" v-model="AuthStore.password">
            <button type="submit">Вход в систему</button>
        </form>
    </div>
</template>

<style scoped>
.auth-wrapper {
    text-align: center;
    margin-top: 65px;
}

.auth-wrapper img {
    width: 250px;
    margin-bottom: 75px;
}


.auth-form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 500px;
}

.auth-form input {
    width: 100%;
    padding: 18px;
    border: none;
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 16px;
}




.auth-form button {
    text-transform: uppercase;
    background: #00805f;
    color: #fff;
    border: none;
    padding: 15px 0;
    cursor: pointer;
}

.auth-form button:hover {
    background: #029d76;
}
</style>