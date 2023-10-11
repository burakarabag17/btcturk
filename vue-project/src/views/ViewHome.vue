<template>
        <NavBar />
        <Menu />
        <Crypto />
</template>

<script setup>

    import NavBar from '@/DashBoard/NavBar.vue'
    import Menu from '@/DashBoard/Menu.vue'
    import Crypto from '@/Dashboard/Crypto.vue'

</script>

<style>
::-webkit-scrollbar{
    width: 10px;
    background-color: #a1a1a1;
}

::-webkit-scrollbar-thumb{
    background-color: rgb(12, 12, 41);
    border-radius: 4.5px;
}
</style>