<template>
  <div class="mt">
    <component :is="hompage" ></component>
  </div>

    <component  :is="ProductList"  ></component>
    <div>
      <component :is="Testimonial"></component>
    </div>
    <div>
      <component :is="footer"></component>
    </div>
    
  </template>
  
  <script setup>
  import ProductList from "./ProductList.vue"; 
  import hompage from "./hompage.vue";
  import footer from "./footer.vue";
import Testimonial from "./testimonial.vue";
  </script>
  
  <style>
  
  </style>
