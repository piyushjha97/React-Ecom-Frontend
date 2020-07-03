

function cartReducer(state={cartItem:[]}, action){
    switch (Action.type) {
        case ADD_TO_CART: 
        const item = action.payload;
        const product=state.cartItem.find(x=>x.product ===item.product)
            
            
    
        default:
            
    }
}