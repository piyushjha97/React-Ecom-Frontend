

function cartReducer(state={cartItems:[]}, action){
    switch (Action.type) {
        case ADD_TO_CART: 
        const item = action.payload;
        const product = state.cartItems.find(x=>x.product === item.product)

         if(product){
             return{
                 cartItem:
                    state.cartItems.map(x=> x.product === product.product? item:x)
             }
         }

         return{cartItems:[...state.cartItems,item]}
            
            
    
        default:
            
    }
}