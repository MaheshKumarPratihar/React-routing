import { useRouteLoaderData, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <EventItem event={data.event} />
      {/* <h1> Event Detail Page of event = {params.eventId}</h1>
      <Link to="edit">Edit</Link> */}
    </>
  );
}
export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not fetch details for the selected event.",
      }),
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });
  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not delete the selected event.",
      }),
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}
