import flavors from "../data/flavors";
import reviews from "../data/reviews"


function getRandomItems(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function MainSection(){
    

    const randomFlavors = getRandomItems(flavors, 3);
    const randomReviews = getRandomItems(reviews, 2);
    const stars = randomReviews.map(review => {
        return "★".repeat(review.rating);
    });
    return (
        <div classname='main-section'>
            <div className='content'>
                <h2>About Sweet Scoop Ice Cream</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sapien felis. Aliquam non blandit ipsum. Quisque sagittis ac mi nec dictum. Integer magna ligula, sagittis id consequat vel, semper accumsan arcu. Integer ultricies eros sapien, vitae malesuada ante dictum non. Praesent vel venenatis odio. Morbi at cursus purus, et tempor elit. Nunc accumsan orci in nisl malesuada, quis eleifend metus varius. Aenean consectetur pulvinar lobortis. Curabitur et semper lectus. Praesent bibendum felis vitae augue suscipit eleifend. Sed laoreet sodales dui varius aliquam.</p>
                <h2 classname='featured-flavours-text'>Featured Flavors</h2>
            </div>
            
            <div className='flavor-grid'>
                <div className='container'>
                    <h3>{randomFlavors[0].name}</h3>
                    <p>{randomFlavors[0].description}</p>
                    <p>{randomFlavors[0].price}</p>
                    <img src={randomFlavors[0].image}></img>
                </div>
                <div className='container'>
                    <h3>{randomFlavors[1].name}</h3>
                    <p>{randomFlavors[1].description}</p>
                    <p>{randomFlavors[1].price}</p>
                    <img src={randomFlavors[1].image}></img>
                </div>
                <div className='container'>
                    <h3>{randomFlavors[2].name}</h3>
                    <p>{randomFlavors[2].description}</p>
                    <p>{randomFlavors[2].price}</p>
                    <img src={randomFlavors[2].image}></img>
                </div>
            </div>
            <div className='reviews'>
                <h2>Customer Reviews</h2>
                <div classname='review'>
                    <h3>{randomReviews[0].customerName}</h3>
                    <p>{randomReviews[0].review}</p>
                    <p>{stars[0]}</p>
                </div>
                <div classname='review'>
                    <h3>{randomReviews[1].customerName}</h3>
                    <p>{randomReviews[1].review}</p>
                    <p>{stars[1]}</p>
                </div>
            </div>
        </div>
    )
}

export default MainSection