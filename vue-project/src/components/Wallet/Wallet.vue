<template>
    <NavBar />
    <Menu />
    <!DOCTYPE html>
<html>
    <body>
    <div class="container">
        <div class="bitcoin">
            <div class="border-container">
                <div class="border">
                    <h1>Bitcoin</h1>
                    <div class="buttons">
                        <input type="button" value=" Add          +" class="bt1" v-on:click.prevent="addFunction('btc')"><br>
                        <input type="button" value=" Remove   -" class="bt1" v-on:click.prevent="removeFunction('btc')">
                    </div>
                </div>
            </div><br><br><br>
            <div class="border-container">
                <div class="border" id="eth-border">
                    <h1>Ethereum</h1>
                    <div class="buttons" id="eth-buttons">
                        <input type="button" value=" Add          +" class="bt2" v-on:click.prevent="addFunction('eth')"><br>
                        <input type="button" value=" Remove   -" class="bt2" v-on:click.prevent="removeFunction('eth')">
                    </div>
                </div>
            </div><br><br><br>
            <div class="border-container">
                <div class="border">
                    <h1>Tether</h1>
                    <div class="buttons" id="tether-buttons">
                        <input type="button" value=" Add          +" class="bt3" v-on:click.prevent="addFunction('usd')"><br>
                        <input type="button" value=" Remove   -" class="bt3" v-on:click.prevent="removeFunction('usd')">
                    </div>
                </div>
            </div>
        </div>
        <div id="wallet">

            <h1 id="wallet-h1">Wallet</h1>

            <div class="column-labels">
                <label class="coin-img"></label>
                <label class="coin-quantity"></label>
                <label class="coin-name"></label>
            </div><br><br>

            <div class="coin">
                <div class="coin-img" id="img-1">
                    <img src="/bitcoin-mini.png">
                </div>
                <div class="coin-quantity" ref="cq1">{{ Refs.cq1 }}</div>
                <div class="coin-name">BTC</div>
            </div><br>

            <div class="coin">
                <div class="coin-img" id="img-2">
                    <img src="/Eth-diamond-rainbow.png">
                </div>
                <div class="coin-quantity" ref="cq2">{{ Refs.cq2 }}</div>
                <div class="coin-name">ETH</div>
            </div><br>

            <div class="coin">
                <div class="coin-img" id="img-3">
                    <img src="/texter.logo-mini .png">
                </div>
                <div class="coin-quantity" ref="cq3">{{ Refs.cq3 }}</div>
                <div class="coin-name">USDT</div>
            </div>

            <div id="total-balance">
                <h1>Total Balance (USDT):</h1>
                <div id="balance" ref="totalbalance">{{ balance.totalbalance }}  USDT</div>
            </div>
        </div>
    </div>
    </body>
</html>
</template>

<script setup>

import NavBar from '@/DashBoard/NavBar.vue'
import Menu from '@/DashBoard/Menu.vue'

import {ref} from 'vue'

const Refs = {
    cq1: ref(0),
    cq2: ref(0),
    cq3: ref(0)
}

const btcu = 26.8
const ethu = 1.7
const usdt = 1

const balance = {
    totalbalance: ref(0)
}

const addFunction = (coin) => {
    if (coin == "btc"){
        Refs.cq1.value++;
    }
    if (coin == "eth"){
        Refs.cq2.value++;
    }
    if (coin == "usd"){
        Refs.cq3.value++;
    }
    var totalbtc = Refs.cq1.value * btcu;
    var totaleth = Refs.cq2.value * ethu;
    var totalusd = Refs.cq3.value * usdt;

    balance.totalbalance.value = totalbtc + totaleth + totalusd
}

const removeFunction = (coin) => {
    if (coin == "btc"){
        if(Refs.cq1.value != 0)
        Refs.cq1.value--;
    }
    if (coin == "eth"){
        if(Refs.cq2.value != 0)
        Refs.cq2.value--;
    }
    if ( coin == "usd"){
        if(Refs.cq3.value != 0)
        Refs.cq3.value--;
    }
    var totalbtc = Refs.cq1.value * btcu;
    var totaleth = Refs.cq2.value * ethu;
    var totalusd = Refs.cq3.value * usdt;

    balance.totalbalance.value = totalbtc + totaleth + totalusd
}
</script>

<style scoped>

.border{
    display: flex;
    align-items: center;
}


html, body{
    width: 1450px;
    height: 750px;
    overflow-y: hidden;
    overflow-x: hidden;
    background-color: #e7e2e2;
}

.container {
    position: relative;
    top: 123px;
    height: 1000px;
}


#total-balance{
    margin-top: 11px;
    position: relative;
    top: 8px;
}

#balance{
    position: relative;
    top: 12px;
}

.column-labels{
    margin-top: -10px;
    margin-left: 80px;
}


.border-container {
    background-color: #d0d9dd;
    width: fit-content;
    display: flex;
    position: relative;
    right: 65px;
    border: groove 6px rgb(12, 12, 41);
    padding: 10px 10px 10px 120px;
    border-radius: 13px;
}

#eth-border{
    padding-right: 26px;
}

#tether-buttons {
    position: relative;
    right: 857px;
    margin-right: 10px;
}

#eth-buttons {
    position: relative;
    right: 898px;
    margin-right: -54px;
}

.buttons {
    display: inline-block;
}

.bt1, .bt2, .bt3 {
    margin-top: 8px;
}

.bitcoin h1 {
    display: inline;
    margin-left: 50px;
    font-weight: bold;
    font-size: 24px;
    color: #101048;
    font-family: helvetica;
    padding-left: 8px;
    padding-right: 8px;
    position: relative;
    right: 145px;
}

input[type=button] {
    width: 100px;
    height: 40px;
    text-align: left;
    font-size: 14px;
    color: #63297d;
    font-weight: bold;
    background-color: #f5f3f3;
    border: rgb(12, 12, 41) solid 4.5px;
    border-radius: 17px;
    cursor: pointer;
    font-family: helvetica;
    position: relative;
    right: 40px;
    bottom: 8px;
}

.bitcoin {
    position: relative;
    top: 163px;
    left: 190px;
}

.coin-img {
    float: left;
    width: 30%;
    margin-left: 70px;
}

.coin-quantity {
    float: left;
    width: 15%;
    margin-top: 17px;
    font-size: 31px;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
}

.coin-name, .coin-quantity{
    color: #63297d;
}

.coin {
    height: 90px;
}

.bt2 {
    position: relative;
    bottom: 185px;
    left: 830px;
}

.bt3 {
    position: relative;
    bottom: 220px;
    left: 830px;
}


#total-balance h1, #wallet-h1 {
    text-align: center;
    font-size: 32px;
    font-family: helvetica;
    color: #101048;
    position: relative;
    top: 25px;
}

#total-balance h1 {
    position: relative;
    top: 8px;
}

.coin-name {
    float: left;
    width: 30%;
    margin-top: 19px;
    margin-left: 62px;
    font-size: 27px;
    font-family: tahoma;
    position: relative;
    left: 15px;
}

#balance {
    font-size: 29px;
    font-family: "tahoma";
    text-align: center;
    margin-top: 16px;
    color: #63297d;
}

#wallet {
    position: relative;
    left: 695px;
    bottom: 385px;
    height: 590px;
    width: 540px;
    border: 6px rgb(12, 12, 41);
    border-style: ridge;
    border-radius: 30px;
    background-color: #d0d9dd;
}

.coin-img {
    position: relative;
    top: 4px;
    left: 16px;
}

#img-1{
    position: relative;
    top: 6px;
}

#img-2 {
    position: relative;
    left: 29px;
}

#img-3 {
    position: relative;
    top: 6px;
}

</style>