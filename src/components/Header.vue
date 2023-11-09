<template>
    <nav class="container bg-gray-100  py-5 ">
        <div class="flex justify-between items-center">
            <router-link class="font-bold  font-sans text-2xl" to="/">Hub96</router-link>
                <button class="" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="">
                <ul class="flex gap-5  items-center">
                    <li class="">
                        <router-link class="font-bold" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="relative">
                        <router-link class="" to="/cart"><i class=""><img src="../assets/download.png" alt=""></i></router-link>

                        </li>
                                 
                </ul>

                
              
            </div>
        </div> 
        <router-link class="flex items-center absolute top-7 right-10 text-2xl text-purple-500" to="/cart"><i class=""></i> {{data.countCartItems}}</router-link>
    </nav>
</template>

<script setup>
    import { useShoppingStore } from '../stores'
    //get store
    const data = useShoppingStore();
</script>

<style>

</style>