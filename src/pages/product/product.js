import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FakeStoreApi } from "../../service/fakeStoreApi";

import { useCart } from "../../context/cart";

const Product = () => {

    const{addToCart} =useCart();

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState();
    const { productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const product = await FakeStoreApi.fetchProductById(productId);
            setProduct(product);
            setLoading(false);
        }
        fetchProduct().catch(console.error)
    }, [productId])

    if (!loading && !product) {
        return (
            <div className="container">
                <div className="product py-2">
                    <div className="details p-3">
                        Product not found. Please visit{" "}
                        <Link to="/" replace>
                            home
                        </Link>{" "}
                        to see all available products
                    </div>
                </div>
            </div>
        )
    }


    return (


        //     <div className="container1">
        //     {loading ? (
        //         <div className={"loader"}></div>
        //     ) : (
        //         <div className="product py-2">
        //             <div className="details grid1 p-3">
        //                 <div className="product-image">
        //                     <img src={product.image} alt="" />
        //                 </div>
        //                 <div className="info">
        //                     <div className="description">
        //                         <h3>{product.title}</h3>
        //                         <p className=" my-2">{product.description}</p>
        //                     </div>
        //                     <div className="flex1">
        //                         <span className="price">${product.price}</span>
        //                         <span className="cart" onClick={() => {}}>
        //                             <img src="/cart.svg" alt="" />
        //                         </span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     )}
        // </div>




        <div className="container1">
            {loading ? (
                <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
                    <div className="wheel"></div>
                    <div className="hamster">
                        <div className="hamster__body">
                            <div className="hamster__head">
                                <div className="hamster__ear"></div>
                                <div className="hamster__eye"></div>
                                <div className="hamster__nose"></div>
                            </div>
                            <div className="hamster__limb hamster__limb--fr"></div>
                            <div className="hamster__limb hamster__limb--fl"></div>
                            <div className="hamster__limb hamster__limb--br"></div>
                            <div className="hamster__limb hamster__limb--bl"></div>
                            <div className="hamster__tail"></div>
                        </div>
                    </div>
                    <div className="spoke"></div>
                </div>
            ) : (
                <div className="product py-2">
                    <div className="details grid1 p-3">
                        <div className="product-image">
                            <img src={product.image} alt={product.title} className="product-img" />
                        </div>
                        <div className="info">
                            <div className="description">
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-description my-2">{product.description}</p>
                            </div>
                            <div className="flex1">
                                <span className="product-price">${product.price}</span>

                                <button class="card-btn" onClick={(Product)=>
                                {
                                    addToCart(product);
                                }}>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export { Product }