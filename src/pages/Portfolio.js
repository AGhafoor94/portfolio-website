import { useEffect, useState } from "react"
import axios from "axios"
export const Portfolio = () => {
    const [api, setApi] = useState([])
    useEffect(()=>{
        
    const getGitHubRepos = async () =>{
        const {data} = await axios.get("https://api.github.com/users/AGhafoor94/repos")
        setApi(data);
    }
    getGitHubRepos()
    },[api])
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        api.map((item, key)=>{
                            return (
                                <div className="col-sm-12 col-md-3 my-2" key={key}>
                                    <div className="card-group h-100">
                                        <div className="card">
                                            <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            {
                                                item.description === "" ? <p className="card-text">No Description Available</p>:<p className="card-text">{item.description}</p>
                                            }
                                            <a href={item.html_url} className="card-text">GitHub URL</a>
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