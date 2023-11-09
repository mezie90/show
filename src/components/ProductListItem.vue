<template>


      


         
             <div class=" p-10  flex justify-center flex-col items-center">   
                
                    
                <div  class=" h-auto  items-center flex justify-center ">
                    <img class="rounded-lg w-80 h-50" :src="product.image"  alt="..." />
                </div>     
            
            <div class="text-center ">
                
                <h5 class=" font-sans text-2xl font-bold">{{product.name}}</h5><p class="card-text">Some d make up the bulk of the card's content.</p>
                <button 
                    @click="data.addToCart(product)"
               class="bg-orange-500 font-bold rounded-lg text-white  m-2  shadow-lg uppercase tracking-wider px-6 py-3 hover:bg-slate-500 br-10">
                    <i class="bi bi-cart-check"></i> add to cart
                </button>
            </div>
        </div>
    


</template>

<script setup>
    import { useShoppingStore } from '../stores'
    //get props
    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    });
    //get store
    const data = useShoppingStore();
</script>


