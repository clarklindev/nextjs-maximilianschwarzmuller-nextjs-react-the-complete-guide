import { useRouter } from 'next/router';

import { getAllEvents } from '../../../dummy-data';
import EventList from '../../components/events/eventList';
import EventsSearch from '../../components/events/eventsSearch';

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
