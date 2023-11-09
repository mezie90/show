<template>
    <div class="container">
      <component :is="Header"></component>
      <router-view></router-view>
    </div>
  </template>
  
  <script setup>
    import Header from './components/Header.vue'
  </script>
  
  
  <style>
  </style>