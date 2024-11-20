import {Component} from "react";
import onepiece from './onepiece.jpg'
import './index.css';

class MovieCard extends Component{
    constructor(){
        super();
        this.state={
            title:"One Piece",
            plot:"ONE PIECE is a legendary high-seas quest unlike any other. Luffy is a young adventurer who has longed for a life of freedom ever since he can remember. He sets off from his small village on a perilous journey to find the legendary fabled treasure, ONE PIECE, to become King of the Pirates!",
            price:599,
            rating:9.8,
            stars:0
        }
    }

    addStars=()=>{

        if(this.state.stars>=5){
            return;
        }

        this.setState({
            stars: this.state.stars +1
        })
    }

    subStars=()=>{

        if(this.state.stars<=0){
            return;
        }

        this.setState((prev)=>{
            return{
                stars: prev.stars-1
            }
        })
    }

    render(){
        const {title,plot,price,rating,stars}=this.state;
        return(
            <div className="movies">
                <div className="moviecard">
                    <section className="left">
                        <img alt="Poster" src={onepiece}/>
                    </section>
                    <section className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">₹{price}</div>

                        <div className="foot">
                            <div className="rating">{rating}</div>
                            <div className="stars">
                                <img className="minus" alt="min" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" 
                                onClick={this.subStars}/>
                                <span className="starCount">{stars}</span>
                                <img className="star" alt="s" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
                                <img className="plus" alt="pls" src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" 
                                    onClick={this.addStars}/>
                            </div>

                            <button className="fav">Favourite</button>
                            <button className="buy">Cart</button>
                        </div>
                    </section>
                </div>
            </div>
        )

    }
}

export default MovieCard;