<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" id="btcturk">
      <img src="/btcturk.png">
    </a>
  </div>
  
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="is-flex is-align-items-center" id="text-container">      
      <p id="username">{{ email }}</p><br>
      <img src="/arrow.png" width="7px" height="7px" id="arrow">
    </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <!-- <img src="/arrow.png" width="7px" height="7px" id="arrow"> -->
          <!-- <img src="/bell.png" width="22px" height="22px" id="bell">
          <img src="/questionmark.png" width="22px" height="22px" id="questionmark"> -->
        </div>
      </div>
    </div>
</nav>
</template>

<script setup>

import { useStoreAuth } from '@/stores/storeAuth'
const storeAuth = useStoreAuth()

const email = storeAuth.user.email

</script>

<style scoped>

.navbar{
    height: 70px;
    background-color: rgb(12, 12, 41);
}
/* 
#questionmark{
    position: absolute;
    right: 70px;
} 

#bell{
    position: absolute;
    right: 140px;
    display: ;
} */

#btcturk{
    left: 25px;
}

#text-container{
  position: relative;
  left: 1108px;
}

#username{
  display: flex;
  justify-content: flex-end;
    color: white;
    font-size: 20px;
    width: 180px;
}

#arrow{
    position: relative;
    left: 970px;
    bottom: 50px;
}
</style>