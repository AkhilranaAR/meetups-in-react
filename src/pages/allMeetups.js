import { useEffect, useState } from "react";
import MeetupsList from "../components/meetups/meetupsList.js";


function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [dataLoaded, setDataLoaded] = useState([]);


    // fetch("https://react-summary-section-2-default-rtdb.firebaseio.com/meetups.json")
    //     .then((data) => {
    //         return data.json();
    //     }).then((data) => {
    //         setIsLoading(false);
    //         setDataLoaded(data);
    //     })
    // Now just saving this code and running the server will just spam the API calls 
    // by sending the fetch() call again and again as useState() hook will reload
    // the component and hence the fetch() call will be made again and again.
    //  The solution is useEffect().

    useEffect(() => {
        setIsLoading(true);
        fetch("https://react-summary-section-2-default-rtdb.firebaseio.com/meetups.json")
            .then((data) => {
                return data.json();
            }).then((data) => {
                const meetups = [];
                for (let key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                        // Spread operator
                    };
                    meetups.push(meetup);
                }
                setIsLoading(false);
                setDataLoaded(meetups);
            })
    }, []);

    if (isLoading === true) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        < section >
            <h1>All Meetups:</h1>
            <MeetupsList meetups={dataLoaded} />
        </section >
    );

}

export default AllMeetupsPage;

// <ul>
// {DUMMY_DATA.map((data) => {
//     return (
//         <li key={data.id}>{data.title}</li>
//         // "key" attribute is required by react for efficient processing.
//         // Something covered in the full course. key={"something-unique-for-the-item"}
//     );
// })}
// </ul> 