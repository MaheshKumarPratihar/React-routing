import { useRouteLoaderData } from "react-router-dom";
import EditEventForm from "../components/EventForm";

export default function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <EditEventForm method="patch" event={data.event} />
    </>
  );
}
