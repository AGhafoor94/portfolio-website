
export const Portfolio = () => {
    const portfolio = [
        {
            name: "BookStore API",
            description: "Learning about ASP.NET Core MVC",
            url: "https://github.com/AGhafoor94/BookStore-API"
        },
        {
            name: "Guessing Game in Rust",
            description: "Learning about Rust by making a guessing game",
            url: "https://github.com/AGhafoor94/learning-rust-guessing-game"
        },
        {
            name: "Learning Unity",
            description: "Learning about C# by making a game in Unity",
            url: "https://github.com/AGhafoor94/learning-unity-part-2"
        },
        {
            name: "Xibit App",
            description: "App to find a Safari and Aquarium near your area with React, Google API and MongoDB",
            url: "https://github.com/AGhafoor94/xibit"
        },
        {
            name: "Xibit API",
            description: "Xibit API",
            url: "https://github.com/AGhafoor94/xibit-server"
        }
    ]
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        portfolio.map((item, key)=>{
                            return (
                                <div className="col-sm-12 col-md-3 my-2" key={key}>
                                    <div className="card-group h-100">
                                        <div className="card">
                                            <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            {
                                                item.description === "" ? <p className="card-text">No Description Available</p>:<p className="card-text">{item.description}</p>
                                            }
                                            <a href={item.url} className="card-text">GitHub URL</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}