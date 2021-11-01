import { useRef } from "react";

import Card from "../UI/card.js";
import classes from "./newMeetupForm.module.css";

function NewMeetupForm(props) {

    const titleInputRef = useRef();
    // titleInputRef is reference object.
    // Use Ref hook for reading data and for changing/manipulating data use State hook.
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        // event is the argument automatically passed by react to all addEventListeners objects/callbacks
        // and functions.
        event.preventDefault();

        const titleData = titleInputRef.current.value;
        const imageData = imageInputRef.current.value;
        const addressData = addressInputRef.current.value;
        const descriptionData = descriptionInputRef.current.value;

        const dataObject = {
            title: titleData,
            image: imageData,
            address: addressData,
            description: descriptionData
        }

        props.onAddMeetup(dataObject);

    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Enter the Title: </label>
                    <input id="title" type="text" placeholder="Enter title" ref={titleInputRef} required={true}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Enter the Image URL: </label>
                    <input id="image" type="text" placeholder="Enter image URL" ref={imageInputRef} required={true}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Enter the Address: </label>
                    <input id="address" type="text" placeholder="Enter address" ref={addressInputRef} required={true}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Enter Description: </label>
                    <textarea id="description" rows="5" placeholder="Enter description" ref={descriptionInputRef} required={true}></textarea>
                </div>
                <div className={classes.actions}>
                    <button type="submit">Add New Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;