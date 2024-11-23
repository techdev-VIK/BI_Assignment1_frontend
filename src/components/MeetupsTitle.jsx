import useFetch from "../useFetch";

const MeetupsTitle = ({title}) => {

    const {data, loading, error} = useFetch(`http://localhost:3000/allmeetups/${title}`);

    console.log(data);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error loading the data.</p>

    return (
        <>
        data? (<div className="container">
            <hr />
            <div className="d-flex justify-content-between align-items-center">
                
            <h2 className="mb-0"><strong>Meetup Events</strong></h2>
                <select className="form-select me-2 shared-width " style={{padding: "6px 12px"}}>
                    <option value="">Select Event Type</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Both">Both</option>
                </select>
            </div>
            <div className="row">
            {data.map((card) => (
                <div key={card._id} className="col-md-4">
                    <div className="mt-3">
                    <img src={card.imageUrl} alt="Tech Conference Image" className="card-img-top img-fluid rounded ms-2" />
                    
                    <p className="ms-2" style={{
                    color: "goldenrod", fontSize: "0.9rem", marginBottom: "2px",
                  }}>{card.eventDate.slice(0,15)}{"   ·   "}{card.eventTime}     IST</p>
                    <h4 className="ms-2"><strong>{card.title}</strong></h4>
                    </div>
                   
                </div>
            ))}
              </div>
            </div>) : loading && <p>Loading...</p>
        </>
    )

}

export default MeetupsTitle;

