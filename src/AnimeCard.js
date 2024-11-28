import './index.css';

function AnimeCard(props){

        const { animedata, addStars, subStars, toggleFav, toggleBuy } = props;
        const { title, plot, poster, price, rating, stars, fav, buy } = props.animedata;
        return (
            <div className="collection">
                <div className="animecard">
                    <section className="left">
                        <img alt="Poster" src={poster} />
                    </section>
                    <section className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">₹{price}</div>

                        <div className="foot">
                            <div className="rating">{rating}</div>
                            <div className="stars">
                                <img className="minus" alt="min" src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                                    onClick={() => { subStars(animedata) }} />
                                <span className="starCount">{stars}</span>
                                <img className="star" alt="s" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                                <img className="plus" alt="pls" src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                                    onClick={() => { addStars(animedata) }} />
                            </div>



                            <button className={fav ? "fav" : "unfav"}
                                onClick={()=>{toggleFav(animedata)}}>Favourite</button>

                            <button className={buy ? "buy" : "remove"}
                                onClick={()=>{toggleBuy(animedata)}}>{buy ? "Add Cart" : "Remove"}</button>
                        </div>
                    </section>
                </div>
            </div>
        )

    }

export default AnimeCard;
