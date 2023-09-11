import { useEffect, useState } from "react"
import { FakeStoreApi } from "../../service/fakeStoreApi"
import { useSearchParams } from "react-router-dom"

import { Item } from "../../components/item"

import { useCart } from "../../context/cart"

import {Link} from "react-router-dom"

import "./products.css"

const Products = () => {

    const { addToCart } = useCart()

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([])
    const [query, setQuery] = useSearchParams();

    const searchQuery = query.get('q');



    /*fetch products from api services*/
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);

            const products = searchQuery ?
                await FakeStoreApi.fetchProductByQuery(searchQuery) :
                await FakeStoreApi.fetchAllProducts();

            setProducts(products)
            setLoading(false)
        }
        fetchProducts().catch(console.error)

    }, [searchQuery])

    // if product not avalable

    if (!loading && searchQuery && !products.length) {
        return (
            <div className="not-found-container">
                <p className="message">No product found matching your Filter/Query</p>
                <Link to="/" className="home-link">Go to Home</Link>
            </div>
        )
    }

    return (
        <>
            <div className="container">
                <div className="products my-5">

                    <div className="grid">
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
                            products.map((product) => (
                                <Item key={product.id} data={product} addToCart={() => addToCart(product)} />
                            ))
                        )
                        }
                    </div>

                </div>
            </div>


        </>
    )
}

export { Products }