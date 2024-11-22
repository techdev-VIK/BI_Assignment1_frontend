import MeetupLogo from '/Meetup_Images/MeetupLogo1.png';
import { NavLink } from 'react-router-dom';

export default function Header({setSearchQuery}){

return (
    <nav className="navbar" style={{padding: "0"}}>
        <div className="container">
        <NavLink to="/"><img src={MeetupLogo} alt="Meetup Logo" style={{ height: "5rem", width: "7rem" }}  /></NavLink>
          <div className="d-flex" role="search">
            <input className="form-control me-2 shared-width" type="search" placeholder="Search by title or tag" aria-label="Search" onChange={(e) => setSearchQuery(e.target.value)}/>
        </div>
      </div>
    </nav>
    )
    
}