import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  return (
    <>
      <EventsList events={data.events} />
    </>
  );
}

export default EventsPage;

export async function eventsLoader() {
  // cookies, browser codes
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
      status: 500,
    });
    // throw json({ message: "Could not fetch events" }, { status: 500 }); // available new versions of router
  } else {
    return response;
    // const resData = await response.json();
    // return resData.events;
  }
}
