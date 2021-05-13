
export const Contact = () => {
    const contacts = [
        {
            name: "GitHub",
            url: "https://github.com/AGhafoor94",
            image: "./images/github_icon.png",
            alt: "GitHub Icon",
            link_name: "GitHub Repo"
        },
        {
            name: "Linkedin",
            url: "https://uk.linkedin.com/in/adnan-ghafoor-9bb42b1aa",
            image: "./images/linkedin_logo.png",
            alt: "Linkedin Logo",
            link_name: "Linkedin"
        }
    ]
  return (
    
 <div className="container">
                <div className="row">
                    {
                        contacts.map((item, key)=>{
                            return (
                                <div className="col-sm-12 col-md-6 my-2" key={key}>
                                    <div className="card-group h-100">
                                        <div className="card">
                                            <img src={item.image}className="card-img-top" alt={item.alt}/>
                                            <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            
                                                <a
                target="_blank"
                rel="noopener noreferrer" href={item.url} className="card-text">{item.link_name}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
  );
};