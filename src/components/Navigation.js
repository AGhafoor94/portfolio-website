
import { NavLink } from "react-router-dom";


export const Navigation = () => 
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/portfolio-website/">Home</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/portfolio-website/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/portfolio-website/contact">Contact</NavLink>
        </li>
        <a
              className="nav-link"
              href="https://aghafoor94.github.io/portfolio-website/Adnan-Ghafoor-CV-2021.pdf"
              target="_blank" rel="noopener noreferrer">CV</a>
      </ul>
    </div>
  </div>
</nav>
    </>
