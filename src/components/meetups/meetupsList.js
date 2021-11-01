import MeetupItem from "./meetupItem.js";
import classes from "./meetupsList.module.css";

function meetupsList(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map((data) => {
                return <MeetupItem
                    key={data.id}
                    id={data.id}
                    image={data.image}
                    title={data.title}
                    address={data.address}
                    description={data.description}
                />
            })}
        </ul>
    );
}

export default meetupsList;