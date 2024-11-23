import { useState } from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";


const Meetups = ({searchQuery}) => {

    const {data, loading, error} = useFetch(`https://bi-assignment1-backend.vercel.app/allMeetups`)

    const [filter, setFilter] = useState('');
    

    console.log(data);

    // if (loading) return <p>Loading...</p>
    if (error) return <p>Error in loading the data, please try again!</p>

    const filteredByType = filter ? data?.filter((meet) => meet.eventType === filter) : data;

    const filterBySearch = searchQuery ? data?.filter((meet) => meet.title.toLowerCase().includes(searchQuery.toLowerCase()) || meet.eventTags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))) : data;


    const displayedData = searchQuery.length > 0 ? filterBySearch : filteredByType;


    return (
        data? (<div className="container">
            <hr />
            <div className="d-flex justify-content-between align-items-center">
                
            <h2 className="mb-0"><strong>Meetup Events</strong></h2>
                <select className="form-select me-2 shared-width " style={{padding: "6px 12px"}} onChange={(e) => setFilter(e.target.value)}>
                    <option value="">Select Event Type</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Both">Both</option>
                </select>
            </div>
            <div className="row d-flex justify-content-start">
            {displayedData.map((card) => (
                <div key={card._id} className="col-md-4 container mb-5">
                    <div className="mt-3">
                    <div className="image-container">
                    <Link to={`/pages/details/${card.title}`}><img src={card.imageUrl} alt={card.title} className="card-img-top img-fluid rounded ms-2" /></Link>

                    <div className="status-badge">
                      {card.eventType}
                    </div>

                    </div>
                    
                    
                    <p className="ms-2" style={{
                    color: "goldenrod", fontSize: "0.9rem", marginBottom: "2px",
                  }}>{card.eventDate.slice(0,15)}{"   ·   "}{card.eventTime}     IST</p>
                    <h4 className="ms-2"><strong>{card.title}</strong></h4>
                    </div>
                   
                </div>
            ))}
              </div>
            </div>) : loading && <div className="container alert alert-warning mt-5 text-center">Loading...</div>
    )
}

export default Meetups;
