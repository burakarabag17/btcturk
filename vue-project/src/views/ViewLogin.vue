<template>
    <img src="/login-4.png" id="login-image">
    <div class="login">
        <h1>Welcome Back</h1>
        <div class="loginpage">
            <input type="email" id="username" placeholder="Username" v-model="accounts.email"><br>
            <input type="password" id="password" placeholder="Password" v-model="accounts.password"><br><br><br>
            <p v-if="loginAlert" class="alert">
                Wrong username or password.
            </p>
            <p v-else-if="loginAlert2" class="alert" id="empty">
                Username or password cannot be empty.
            </p>
            <button id="login" v-on:click.prevent='onLogin()'>
                Login
            </button>
            <div class="sign-up">
                Don't have an account?
                <RouterLink class="link" to="/sign-up">
                    Sign up
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, reactive, onMounted } from 'vue'
// import { useRouter } from 'vue-router'
import { useStoreAuth } from '@/stores/storeAuth'

const storeAuth = useStoreAuth()

const accounts = reactive({
    email: '',
    password: ''
})

const loginAlert = ref(false);
const loginAlert2 = ref(false);

const onLogin = () => {
    loginAlert.value = false;
    loginAlert2.value = false;
    if (accounts.email === '' || accounts.password === '') {
        loginAlert2.value = true
    }
    else{storeAuth.loginUser(accounts)}
}

// const router = useRouter()

const input = {
    username: '',
    password: '',
}

// const login = () => {
//     loginAlert.value = false;
//     loginAlert2.value = false;
//     if (input.username === '' || input.password === '') {
//         loginAlert2.value = true
//     }
//     else {
//         const savedUser = localStorage.getItem('user');
//         if (savedUser) {
//             const user = JSON.parse(savedUser);
//             if (user.username === input.username && user.password === input.password) {
//                 go()
//             }
//             else {
//                 loginAlert.value = true
//             }
//         }
//     }
// }

// onMounted(() => {
//     storeAuth.init()
//   })


// const go = () => {
//     router.replace("/home")
// }
</script>


<style scoped>
.sign-up {
    text-align: center;
    position: relative;
    top: 120px;
    left: 10px;
}

.loginpage {
    color: rgb(132, 132, 132);
}

.link:hover {
    background-color: transparent;
    color: rgb(33, 33, 102);
}

.alert {
    margin-top: 5px;
    margin-left: 13px;
    color: rgb(237, 12, 12);
    position: fixed;
}

#empty {
    margin-left: -33px;
}

#login-image {
    position: absolute;
    bottom: -100px;
    right: -110px;
    width: 1000px;
    height: 1000px;
}

.login {
    position: relative;
    bottom: 95px;
    right: 280px;
    font-size: 23px;
    font-family: arial;
}

#login {
    margin-top: 10px;
}

h1 {
    text-align: center;
    color: rgb(46, 46, 138);
    font-size: 45px;
    margin-left: 17px;
}

#username,
#password {
    position: absolute;
    right: -40px;
    margin-top: 23px;
    background-color: rgb(235, 235, 235);
    border: transparent;
    border-radius: 15px;
    height: 45px;
    width: 380px;
    font-size: 20px;
    padding-left: 14px;
}

#password {
    margin-top: 50px;
}

#username::placeholder,
#password::placeholder {
    color: rgb(95, 94, 94);
}

button {
    height: 45px;
    width: 380px;
    border: transparent;
    border-radius: 15px;
    color: white;
    background-color: rgb(33, 33, 102);
    position: absolute;
    top: 250px;
    right: -40px;
    cursor: pointer;
    font-size: 25px;
    font-family: arial;
    text-align: center;
}
</style>