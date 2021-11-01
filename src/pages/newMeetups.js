import NewMeetupForm from "../components/meetups/newMeetupForm.js";
import { useHistory } from "react-router-dom";

function NewMeetupsPage() {
    const history = useHistory();

    function addMeetupHandler(data) {

        fetch("https://react-summary-section-2-default-rtdb.firebaseio.com/meetups.json",
            // /meetups.json ==> meetups is the name of the collection of a database. 
            // .json is required by the firebase syntax.
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json"
                }
            }
        )
            .then((data) => {
                // console.log("Success is fetch() function: " + console.dir(data));
                history.replace("/");
            })
            .catch((data) => {
                console.log("Error in fetch() function: " + console.dir(data));
            })
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
        </section>
    )
}

export default NewMeetupsPage;