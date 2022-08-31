import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
export default function AllMeetupsPage() {
    const [isLoading,setIsLoading] = useState(false);
    const [loadedMeetups,setLoadedMeetups] = useState([]);
    useEffect(() => {
      setIsLoading(true);
      fetch('https://react-getting-started-ee427-default-rtdb.firebaseio.com/meetups.json')
      .then((res) => { return res.json(); })
      .then(data => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id:key,
            ...data[key]
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
    },[]);
    
    if (isLoading) {
      return <section>
            <p>Loading...</p>
          </section>
    }
    return <section>
            <h1>All Meetups Page</h1>;
            <MeetupList meetups={loadedMeetups} />
        </section>
}