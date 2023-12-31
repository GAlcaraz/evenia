'use client';

import React, { useEffect, useState } from 'react';

import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { gql } from '../../data-access/graphql-client';
import EventCard from './EventCard';
import { Event } from '../_models/event';

const CARD_WIDTH = 300;

const Events = () => {
  const [events, setEvents] = useState<Event[] | []>();

  useEffect(() => {
    async function fetchEvents() {
      setEvents((await gql.GetEvents()).events);
    }
    fetchEvents();
  }, []);

  return (
    <Flex direction="column" p="40px" align="center">
      <Flex direction="column" align="start">
        <Heading pb="30px">Our events</Heading>
        <SimpleGrid
          columns={[1, 2, 3, 4]}
          spacing="40px"
          maxW={CARD_WIDTH * 4 + 120}
        >
          {events &&
            events.map((event) => (
              <EventCard key={event.id} event={event} imgWidth={CARD_WIDTH} />
            ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Events;
