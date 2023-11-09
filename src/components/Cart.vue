<template>
    <div class="row my-4">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <table class="flex justify-center items-center flex-col">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody class="">
            <tr v-for="item in data.getCartItems" :key="item.id" class="flex flex-wrap justify-center gap-3 items-center  flex-col">
                                <!-- <td>{{item.id}}</td> -->
                                <td>
                                    <img :src="item.image" 
                                    class="fluid rounded w-80 h-80"
                                    width=""
                                    height=""    
                                    :alt="item.name" />
                                </td>
                                <td class="font-bold">
                                    {{item.name}}
                                    
                                </td>
                                <td>
                                    <button  @click="data.incrementQ(item)  " class="bg-orange-500 w-10 h-10 font-bold rounded 2xl ">++</button>
                                       
                                        
                                    <span class="mx-2 font-bold">
                                        {{item.quantity}}
                                    </span>
                                    <button  @click="data.decrementQ(item)" class="bg-orange-500 w-10 h-10 rounded font-bold font-2xl" > --  </button>   
                                       
                                        
                                </td>
                                <td class="font-bold">
                                    ${{item.price}}
                                </td>
                                <td class="font-bold">
                                    ${{item.price * item.quantity}} 
                                </td>
                                <td>
                                    
                                        <button  @click="data.removeFromCart(item)" class="w-40 text-white rounded-lg h-10 bg-blue-500">remove item</button>
                                </td>
                            </tr>
                            <tr class="flex justify-center items">
                                <th colSpan="3" class="text-center">
                                    Total:
                                </th>
                                <td colSpan="3" class="text-center">
                                    <span class="text-center flex justify-center font-bold">
                                        ${{ data.cartItems.reduce((acc,item) => acc += item.price * item.quantity,0) }}
                                    </span>
                                
                                </td>
                                
                            </tr>
                        </tbody>
                        <button class="w-40 h-10 bg-black text-white rounded">pay</button>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed, } from "vue";
import { useShoppingStore } from "../stores"
    //get store
    const data = useShoppingStore();
    

    
</script>

<style>
    i{
        cursor: pointer;
    }
</style>