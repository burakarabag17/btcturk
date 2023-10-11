<template>
    <div class="background">
        <div class="menu">
            <div class="dashboard" v-on:click="dashboard()">
                <img src="/dashboard-2.png" id="dashboard-image"><button class="text" id="dashboard">Dashboard</button><br><br>
            </div>
            <div class="wallet" v-on:click.prevent="wallet()">
                <img src="/wallet.png"><button class="text">Wallet</button><br><br>
            </div>
            <!-- <img src="/reports.png"><button class="text">Reports</button><br><br>
            <img src="/resources.png"><button class="text">Resources</button><br><br> -->
            <div id="log-out" @click="storeAuth.logOutUser">
                <img src="/log-out-2.png" id="log-out-logo"><button class="text" id="log-out-text">Log
                    out</button>
            </div>
        </div>
    </div>
</template>

<script setup>

import { useRouter } from 'vue-router'
import { useStoreAuth } from '@/stores/storeAuth'

const storeAuth = useStoreAuth()
const router = useRouter()

const wallet = () => {
    router.replace("/wallet")
}

const dashboard = () => {
    router.replace("/home")
}

const logOut = () => {
  storeAuth.logOutUser()
}

// const logout = () => {
//     router.replace("/login")
// }

</script>

<style scoped>

.dashboard, .wallet{
    cursor: pointer;
}
.background {
    position: fixed;
    top: 70px;
    left: 0px;
    background-color: rgb(12, 12, 41);
    height: 100%;
    width: 240px;
}

#dashboard-image {
    position: relative;
    left: 2px;
}

#dashboard {
    position: relative;
    top: -6px;
    left: 26px;
}

.menu {
    position: absolute;
    left: 50px;
    top: 80px;
    z-index: 1;
}

.text {
    position: relative;
    left: 22px;
    bottom: 10px;
    font-size: 16px;
    font-family: arial;
}

#log-out {
    position: relative;
    top: 370px;
    cursor: pointer;
}

#log-out-text {
    color: #ebebeb;
    font-size: 18px;
    font-weight: 520;
}

#log-out-logo {
    position: relative;
    left: 2px;
}

button {
    background-color: transparent;
    border: transparent;
    color: rgb(196, 196, 196);
    left: 22px;
    bottom: 10px;
    font-size: 16px;
    font-family: arial;
    margin-left: -6px;
    cursor: pointer;
}
</style>