import { defineStore } from 'pinia'


export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return { 
            products: [
                {
                    id: 1,
                    name: 'tecno spark',
                    price: 700,
                    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/16/2938922/1.jpg?5082'
                    
                },
                {
                    id: 2,
                    name: 'Smart watch',
                    price: 400,
                    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/62/3027352/1.jpg?9064'
                },
                {
                    id: 3,
                    name: 'Smart watch',
                    price: 1200,
                    image: 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/37/046128/1.jpg?0748'
                },
                {
                    id: 4,
                    name: 'Huwawei Mate',
                    price: 900,
                    image: 'https://cdn.pixabay.com/photo/2017/08/11/14/19/honor-2631271__340.jpg'
                },
                {
                    id: 5,
                    name: 'tv',
                    price: 90,
                    image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/5192502/1.jpg'
                
                },
                {
                    id: 6,
                    name: 'backpack',
                    price: 50,
                    image:'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/49/0314491/1.jpg?2716'
                
                },
                {
                    id: 7,
                    name: 'headphone',
                    price: 10,
                    image:'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/02/8953852/1.jpg?5997.jpg'
                
                },
                {
                    id: 8,
                    name: 'mini hand stabilizer tripod',
                    price: 20,
                    image:'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/61/3118352/1.jpg?2492'
                
                }
            ],
            cartItems : []
        }
    },
    getters: {
        countCartItems(){
            return this.cartItems.length;
        },
        getCartItems(){
            return this.cartItems;
        }
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
              this.products[index].quantity += 1;
             
            }else {
              item.quantity = 1;
              this.cartItems.push(item);
            
            }
        },
        incrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity += 1;
                
               
            }
        },
        decrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity -= 1;
                if(this.cartItems[index].quantity === 0){
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id);
                }
          
            }
        },
        removeFromCart(item) {
            this.cartItems = this.cartItems.filter(product => product.id !== item.id);
           
        }
        
    },
})