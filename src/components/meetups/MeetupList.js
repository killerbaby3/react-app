import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
export default function MeetupList(p){
    return <ul className={classes.list}>
        {p.meetups.map(m => 
            <MeetupItem 
                key={m.id} 
                id={m.id} 
                image={m.image} 
                title={m.title} 
                description={p.description}
                address={p.address}
                meetup = {m} 
            />
        )}
    </ul>;
}