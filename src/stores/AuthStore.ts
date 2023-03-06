import { defineStore } from "pinia";
import router from "../router/index"
interface IAuth {
    login: string,
    password: string,
    numAttempt: number,
    showError: boolean
}

export const useAuthStore = defineStore("AuthStore", {
    state: (): IAuth => {
        return {
            login: "",
            password: "",
            numAttempt: 0,
            showError: false
        }
    },
    actions: {
        async auth() {
            let response = await fetch("https://products.halyklife.kz/api/v1/test/insis/identity/api/Account/login", {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    login: this.login,
                    password: this.password,
                    numAttempt: this.numAttempt,
                })
            })
            if (response.ok) {
                let result = await response.json();
                localStorage.setItem("accessToken", result.accessToken)
                localStorage.setItem("refreshToken", result.refreshToken)
                this.login = "";
                this.password = "";
                router.push("/document")

            } else {
                this.showError = true;
            }
        },

        closeError() {
            this.showError = false;
        }
    }
})