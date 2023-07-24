'use client';

import React from 'react';

import { SimpleGrid } from '@chakra-ui/react';
import { gql } from '../../data-access/graphql-client';
import EventCard from './EventCard';

const Events = async () => {
  const events = (await gql.GetEvents()).events;

  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px" p="40px">
      {events &&
        events.map((event) => <EventCard key={event.id} event={event} />)}
    </SimpleGrid>
  );
};

export default Events;
