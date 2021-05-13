export const Home = () => {
    const images = [
        {
            image: "./images/palestine-flag.jpg",
            alt: "FREE PALESTINE"
        }
    ]
    return (
        <>
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                    {
                        images.map((item, key)=><div className="carousel-item active" key={key}> <img src={item.image} className="d-block w-100" alt={item.alt}/> </div>)
                    }
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>FREE PALESTINE</h1>
                    <h1>BLACK LIVES MATTER</h1>
                </div>
            </div>
        </div>
        </>
    )
}