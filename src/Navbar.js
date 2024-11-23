import React from "react";
import N from "./Navbar.module.css"

class Navbar extends React.Component{
    render(){
        return(
            <>
            <div className={N.nav}>
                <div className={N.title}>Anime Collection</div>
                <div>
                    <img
                        className={N.cart} 
                        alt="CartIcon"
                         src="https://cdn-icons-png.flaticon.com/128/726/726496.png"
                    />
                    <span className={N.num}>0</span>
                </div>
                </div>
            </>
        )
    }
}

export default Navbar;