import { useState } from "react"
import { Link } from "react-router-dom"


const NavBar = ({ onSearch, cartItemCount }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = () => {
        if (searchQuery.trim().length) {
            onSearch(searchQuery.trim())
        }
        setSearchQuery('')
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    };



    return (
        <div className="wrapper">

            <div calssname="container">
                <div className="grid">

                    {/* main icon */}
                    <Link to="/" className="link">

                        <h1 className="brand">Totality Crop.</h1>

                    </Link>

                    {/* for seach  */}
                    <div className="formContainer">
                        <div className="searchForm">

                            <div className="InputContainer">
                                <input placeholder="Search.." id="input" class="input" name="text" type="text"

                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    onKeyPress={handleKeyPress}

                                />

                            </div>

                            <button class="button_search" onClick={handleSubmit} >
                                <span class="span">🔎</span>
                            </button>

                        </div>
                    </div>
                    <div className="dummy"> </div>

                    <Link to="/cart" className="header_cart">


                        <svg class="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" width="24.38" xmlns="http://www.w3.org/2000/svg">
                            <title>icon-cart</title>
                            <path transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
                        </svg>
                        <span class="quantity"></span>

                        {cartItemCount > 0 && (
                            <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}
                            </div>
                        )}

                    </Link>

                </div>
            </div>
        </div>
    )
}

export { NavBar }