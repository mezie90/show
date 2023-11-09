<template>
    <div class="mt-10 ">

  
    <h1 class="text-center text-4xl font-bold">Products</h1>
    <div class="flex justify-evenly gap-5 p-3  items-center flex-wrap">
        
        <ProductListItem v-for="product in data.products" 
            :key="product.id" :product="product" />
    </div>
</div>
</template>

<script setup>
import ProductListItem from './ProductListItem.vue'
import { useShoppingStore } from '../stores'

//get products from store
const data = useShoppingStore();
</script>

<style>
</style>