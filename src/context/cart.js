//create--> priveder--> usercontext

import { createContext,useContext,useState } from "react";




// Define initialState of cart

const initialState=
{
    cart: [],
    cartItemCount: () => 0,
    addToCart: () => null,
    removeFromCart: () => null,
    increaseQuantity: () => null,
    decreaseQuantity: () => null,

}

const CartContext =createContext(initialState); //create

const useCart = () => useContext(CartContext); //use

const CartProvider =({children}) =>{                    //provider

    const[cart,setCart] = useState(initialState.cart);
    
    // cart's item count function

    const cartItemCount =() =>
    {
        return cart.reduce((acc,item) => acc + item.quantity, 0)
    }

    // Add to cart function
    const addToCart = (product) => {
        const productIdx = cart.findIndex((item) => item.product.id === product.id)
        if (productIdx !== -1) {
            increaseQuantity(product.id)
        } else {
            setCart([...cart, { product, quantity: 1 }])

        }


    }

    // Remove from cart
    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.product.id !== productId))
    }

    //Increase Quantity of existed item

    const increaseQuantity = (productId) => {
        const copy = cart.slice()
        const productIdx = copy.findIndex((item) => item.product.id === productId)
        if (productIdx !== -1) {
            copy[productIdx].quantity += 1
            setCart(copy)
        }
    }

    //Decrease Quantity of Existing item

    const decreaseQuantity = (productId) => {
        const copy = cart.slice()
        const productIdx = copy.findIndex((item) => item.product.id === productId)
        if (productIdx !== -1 && copy[productIdx].quantity > 1) {
            copy[productIdx].quantity -= 1
            setCart(copy)
        }
    }


    
    return (
        <CartContext.Provider
            value={{ cart, cartItemCount, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}
        >
            {children}
        </CartContext.Provider>
    )

}

export {useCart,CartProvider}


