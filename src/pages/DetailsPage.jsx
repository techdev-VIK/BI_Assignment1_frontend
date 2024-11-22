import { useParams } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../useFetch";

export default function DetailsPage(){

    const detailId = useParams();

    const {data, loading, error} = useFetch(`http://localhost:3000/allMeetups`)

    
  if (error) return <p>Error loading the event details.</p>;

  const meetupData = data?.find((meet) => meet.title == detailId.detailId);


    return (
        <>
        <Header />
        
        {data? (<main className="container">
        <hr />
        <div className="row d-flex justify-content-between">
            <div className="col-md-6">
                <h2><strong>{meetupData.title}</strong></h2>
                <p className="mb-0">Hosted By:</p>
                <p ><strong>{meetupData.host}</strong></p>
                <img src={meetupData.imageUrl} alt={meetupData.title} className="img-fluid rounded" />

                <h4 className="mt-3"><strong>Details:</strong></h4>
                <p>{meetupData.eventDetails}This {meetupData.eventType} seminar will be held at {meetupData.location}. Join industry leaders {meetupData.speakers.name} as they delve into the latest trends and strategies. The seminar is open to individuals aged {meetupData.ageRestrictions} and requires a ticket
                priced at INR {meetupData.eventPricing}.</p>

                <h4><strong>Additional Information:</strong></h4>
                <p className="mb-2"><strong>Dress Code: </strong>{meetupData.dressCode}</p>
                <p><strong>Age Restrictions:</strong> {meetupData.ageRestrictions}</p>
                
                <h4><strong>Event Tags:</strong></h4>
                
                <div>
                    {meetupData.eventTags.map((tag, index) => (
                        <button key={index} className="btn btn-danger me-2 mt-2 mb-5">{tag}</button>
                    ))}
                </div>
            </div>

            <div className="col-md-4">
                <div className="card mt-3">
                    
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">📍</div>
                                <div className="flex-grow-1 ms-3">{meetupData.eventDate.slice(0,15)} at {meetupData.eventTime} to {meetupData.eventDate.slice(0,15)} {meetupData.eventEndTime}</div>
                        </div>

                        <div className="d-flex align-items-center mt-4">
                            <div className="flex-shrink-0">🕒</div>
                                <div className="flex-grow-1 ms-3">{meetupData.location}</div>
                        </div>

                        <div className="d-flex align-items-center mt-4">
                            <div className="flex-shrink-0">₹</div>
                                <div className="flex-grow-1 ms-4">{meetupData.eventPricing}</div>
                        </div>
                </div>

                <h3 className="mt-4"><strong>Speakers: {`(${meetupData.speakers.length})`}</strong></h3>

                <div className="d-flex justify-content-start">
                    <div className="card text-center p-4">
                        <img src={`https://placehold.co/100x100?text=${meetupData.speakers[0].name.slice(0,1)}`} className="rounded-circle" />

                        <div>
                        <p className="mb-1"><strong>{meetupData.speakers[0].name}</strong></p>
                        <p className="mb-0">{meetupData.speakers[0].jobTitle}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </main>): (loading && <div className="container alert alert-warning mt-5 text-center">Loading...</div>)}
        </>
    )
}