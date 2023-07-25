'use client';

import React from 'react';

import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { gql } from '../../data-access/graphql-client';
import EventCard from './EventCard';

const Events = async () => {
  const events = (await gql.GetEvents()).events;

  return (
    <Flex direction="column" p="40px">
      <Heading pb="30px">Our events</Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px">
        {events &&
          events.map((event) => <EventCard key={event.id} event={event} />)}
      </SimpleGrid>
    </Flex>
  );
};

export default Events;
