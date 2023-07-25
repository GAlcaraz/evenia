'use client';

import React from 'react';

import { Flex } from '@chakra-ui/react';
import { gql } from '../../../data-access/graphql-client';

const Events = async ({ params }: { params: { slug: string } }) => {
  const event = (await gql.GetEvent({ id: params.slug })).event;

  return <Flex>{event.name}</Flex>;
};

export default Events;
