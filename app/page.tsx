import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { IEvent } from "@/database";
// import { events } from "@/lib/constants";

const BASE_URL= process.env.NEXT_PUBLIC_BASE_URL;

const Page = async() => {
  const response = await fetch(`${BASE_URL}/api/events`);
  const{events}= await response.json();

  return (
    <section>
      <h1 className="text-center">The ultimate hub for developer events</h1>
      <p className="text-center mt-5">
        Hackathon, Meetups, and conferences, All in One place
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events && events.length>0 && events.map((event:IEvent) => (
            <li key={event.slug}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
