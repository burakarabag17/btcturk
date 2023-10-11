<template>
    <div class="sign-up">
        <h1>Create your account</h1>
        <input v-model="accounts.email" type="email" id="username" placeholder="Email" @input="validate" ref="username">
        <p v-if="usernameAlert" class="alert">Your username must contain at least 5 letters.</p><br><br>
        <input v-model="accounts.password" type="password" id="password" @input="validate" placeholder="Password" ref="password"><br>
        <input type="password" id="password-2" placeholder="Confirm Password" v-model="confirm"><br><br>
        <p v-if="passwordAlert3" class="alert2">
            Your password must contain at least 7 characters.
        </p>
        <p v-else-if="passwordAlert2" class="alert2">
            Your password must contain at least one number.
        </p>
        <p v-else-if="passwordAlert" class="alert2">
            Your password must contain at least one letter.
        </p><br>
        <button id="button" v-on:click.prevent='onSubmit()'>
            Sign Up
        </button>
        <div class="log-in">
            Already have an account?
            <RouterLink class="link" to="/login">
                Log in
            </RouterLink>
        </div>
    </div>
</template>

<script setup>

import { ref, reactive } from 'vue'
import { useStoreAuth } from '@/stores/storeAuth'
import { useRouter } from 'vue-router'

const storeAuth = useStoreAuth()

const accounts = reactive({
    email: '',
    password: ''
})

// const username = ref('');
// const password = ref('');
// const confirm = ref('');
const usernameAlert = ref(false);
const passwordAlert = ref(false);
const passwordAlert2 = ref(false);
const passwordAlert3 = ref(false);

// const validate = () => {
//     usernameAlert.value = false;
//     passwordAlert.value = false;
//     passwordAlert2.value = false;
//     passwordAlert3.value = false;

//     if(accounts.email.length <= 4){
//         usernameAlert.value = true
//     } 
//     if(accounts.password.length <= 6){
//         passwordAlert3.value = true
//     }
//     if(!/[a-zA-Z]/.test(accounts.password)){
//         passwordAlert.value = true
//     }
//     if(!/\d/.test(accounts.password)){
//         passwordAlert2.value = true
//     }}

const onSubmit = () => {
    if(!accounts.email || !accounts.password){
        alert('Please enter an email and password.')
    }
    usernameAlert.value = false;
    passwordAlert.value = false;
    passwordAlert2.value = false;
    passwordAlert3.value = false;
    if(accounts.email.length <= 4){
        usernameAlert.value = true
    } 
    if(accounts.password.length <= 6){
        passwordAlert3.value = true
    }
    if(!/[a-zA-Z]/.test(accounts.password)){
        passwordAlert.value = true
    }
    if(!/\d/.test(accounts.password)){
        passwordAlert2.value = true
    }
    else{
        storeAuth.registerUser(accounts)
        }
}

const router = useRouter()


// const username = ref('');
// const password = ref('');
// const confirm = ref('');



// const signup = () => {
//     if(accounts.password.value === confirm.value && accounts.password.value.length > 6 && accounts.email.value.length > 4 && /[a-zA-Z]/.test(accounts.password.value) && /\d/.test(accounts.password.value)){
//         go()
//     } 
//     const user = {
//         username: accounts.email.value,
//         password: accounts.password.value
//     };
//     localStorage.setItem('user', JSON.stringify(user));
// }

// const go = () => {
//     router.replace("/login")
// }
</script>

<style scoped>

.log-in{
    position: relative;
    bottom: 7px;
    font-size: 20px;
}

.alert {
    margin-top: -17px;
    margin-left: 24px;
    color: rgb(237, 12, 12);
    position: fixed;
    font-size: 18px;
}

.alert2{
    margin-top: -42px;
    margin-left: 11px;
    color: rgb(237, 12, 12);
    position: fixed;
    font-size: 18px;
}

.sign-up{
    position: relative;
    left: 200px;
}

button {
    height: 45px;
    width: 380px;
    border: transparent;
    border-radius: 15px;
    color: white;
    background-color: rgb(33, 33, 102);
    cursor: pointer;
    font-size: 25px;
    font-family: arial;
    text-align: center;
    position: relative;
    bottom: 30px;
}

h1 {
    position: relative;
    right: 2px;
    bottom: 50px;
    text-align: center;
    color: rgb(46, 46, 138);
    font-size: 45px;
    font-weight: 500;
}

#username, #password, #password-2{
    background-color: rgb(235, 235, 235);
    border: transparent;
    border-radius: 15px;
    height: 45px;
    width: 380px;
    font-size: 20px;
    padding-left: 14px;
    position: relative;
    bottom: 10px;
    margin-bottom: 13px;
}

.link:hover {
    background-color: transparent;
    color: rgb(33, 33, 102);
}

.sign-up{
    text-align: center;
}

.alert{
    position: fixed;
    color: red;
    text-align: center;
}

p{
    text-align: center;
}
</style>