import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../../dummy-data';
import EventList from '../../components/events/eventList';
import ErrorAlert from '../../components/ui/error-alert';

import Button from '../../components/ui/button';
import ResultsTitle from '../../components/events/results-title';
//kicks in if there is more than one dynamic parameter

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;
  console.log(filterData);
  if (!filterData) {
    return <p className='center'>loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  const date = new Date(numYear, numMonth - 1);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <ErrorAlert>
        <h1>Invalid filter: adjust values!</h1>
        <div className='center'>
          <Button link='/events'>show all events</Button>
        </div>
      </ErrorAlert>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>no events found</p>
          <div className='center'>
            <Button link='/events'>show all events</Button>
          </div>
        </ErrorAlert>
      </>
    );
  }
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
