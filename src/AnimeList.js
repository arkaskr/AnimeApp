import { Component } from "react";
import AnimeCard from "./AnimeCard";
import images from './images'

class AnimeList extends Component {

    constructor() {
        super();
        this.state = {
            animelist: [
                {
                    title: "One Piece",
                    poster: images.onepiece,
                    plot: "ONE PIECE is a legendary high-seas quest unlike any other. Luffy is a young adventurer who has longed for a life of freedom ever since he can remember. He sets off from his small village on a perilous journey to find the legendary fabled treasure, ONE PIECE, to become King of the Pirates!",
                    price: 599,
                    rating: 9.8,
                    stars: 0,
                    fav: true,
                    buy: true
                },
                {
                    title: "Naruto Shippuden",
                    poster: images.narutoship,
                    plot: "Naruto Uzumaki wants to be the best ninja in the land. He's done well so far, but with the looming danger posed by the mysterious Akatsuki organization, Naruto knows he must train harder than ever and leaves his village for intense exercises that will push him to his limits.",
                    price: 599,
                    rating: 9.1,
                    stars: 0,
                    fav: true,
                    buy: true
                },
                {
                    title: "Attack On Titan",
                    poster: images.attack,
                    plot: "In a world where giant humanoid Titans prey on humans, Eren joins the scouting legion to get revenge on the monsters who killed everyone in his town. A teenage boy named Eren Jaeger must use his special gift to fight alongside with the military to defeat the titan race.",
                    price: 599,
                    rating: 9.5,
                    stars: 0,
                    fav: true,
                    buy: true
                },
                {
                    title: "One Punch Man",
                    poster: images.opm,
                    plot: "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch. In a world of superhuman beings, Saitama is a unique hero, he can defeat enemies with a single punch.",
                    price: 599,
                    rating: 9.4,
                    stars: 0,
                    fav: true,
                    buy: true
                },
                {
                    title: "Chainsaw Man",
                    poster: images.chain,
                    plot: "The world is one ravaged by Devils, otherworldly monsters who feed on human fear. Despite their antagonistic nature, humans can actually form alliances with these Devils and gain powers of their own. The protagonist, a downtrodden young man named Denji, works to clear his father's massive debt to the yakuza.",
                    price: 599,
                    rating: 9.6,
                    stars: 0,
                    fav: true,
                    buy: true
                },
                {
                    title: "The Seven Deadly Sins",
                    poster: images.sds,
                    plot: "The Seven Deadly Sins are a band of knights in the land of Britannia (ブリタニア, Buritania) who had disbanded ten years earlier after being framed for plotting a coup against the Liones Kingdom (リオネス王国, Rionesu Ōkoku), the Holy Knights who sequestered them before taking control in the wake of a rebellion they organized.",
                    price: 599,
                    rating: 9.0,
                    stars: 0,
                    fav: true,
                    buy: true
                },
                {
                    title: "Spy X Family",
                    poster: images.sxf,
                    plot: "Master Spy Twilight, who must disguise himself as psychiatrist Loid Forger and build a mock family in order to investigate political leader Donovan Desmond. Unbeknownst to him, his wife, Yor, is actually an assassin known as the Thorn Princess, while his daughter, Anya, has telepathic abilities.",
                    price: 599,
                    rating: 9.0,
                    stars: 0,
                    fav: true,
                    buy: true
                },
            ]
        }
    }

    handleIncStars = (anime) => {
        const { animelist } = this.state;
        const movid = animelist.indexOf(anime);

        if (animelist[movid].stars >= 5) {
            return;
        }

        animelist[movid].stars += 1;

        this.setState({
            animelist
        });
    };

    handleSubStars = (anime) => {
        const { animelist } = this.state;
        const movid = animelist.indexOf(anime);

        if (animelist[movid].stars <= 0) {
            return;
        }

        animelist[movid].stars -= 1;

        this.setState({
            animelist
        });
    }

    handleToggleFav=(anime) => {
        const {animelist}=this.state;
        const movid=animelist.indexOf(anime);

        animelist[movid].fav=!animelist[movid].fav;

        this.setState({
            animelist
        });
    }

    handleToggleBuy=(anime) => {
        const {animelist}=this.state;
        const movid=animelist.indexOf(anime);

        animelist[movid].buy=!animelist[movid].buy;

        this.setState({
            animelist
        });
    }

    render() {
        const { animelist } = this.state;
        return (
            <>
                {animelist.map((anime, index) =>
                    <div key={index}>
                        <AnimeCard animedata={anime}
                            addStars={this.handleIncStars}
                            subStars={this.handleSubStars}
                            toggleFav={this.handleToggleFav}
                            toggleBuy={this.handleToggleBuy}
                        />
                    </div>
                )}
            </>
        )
    }
}

export default AnimeList;