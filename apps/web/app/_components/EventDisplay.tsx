'use client';
import {
  Image,
  Heading,
  Flex,
  HStack,
  Text,
  VStack,
  Stack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { gql } from '../../data-access/graphql-client';
import { format } from 'date-fns';
import { CalendarIcon } from '@chakra-ui/icons';

const EventDisplay: React.FC<{ eventId: string }> = ({ eventId }) => {
  const [event, setEvent] = useState<unknown>();

  useEffect(() => {
    async function fetchEvent() {
      setEvent((await gql.GetEvent({ id: eventId })).event);
    }
    fetchEvent();
  }, []);

  if (!event) {
    return <></>;
  }

  return (
    <VStack>
      <Stack w="100%" direction={['column', 'row']} align="center">
        <Image
          src={`https://source.unsplash.com/random/500x500?sig=${Math.floor(
            Math.random() * 10
          )}`}
          alt="Green double couch with wooden legs"
          objectFit="cover"
          w={['100%', '50%']}
        />
        <Flex flexGrow={1} justify="center">
          <VStack align="start" spacing={6}>
            <Text fontSize={16}>{format(new Date(event?.date), 'MMM d')}</Text>
            <Heading fontSize={48}>{event?.name}</Heading>
            <HStack fontSize={18} justify="space-around">
              <Text>${Math.floor(Math.random() * 100)}</Text>
              <Text pl={6}>{event?.owner || 'Dummy'}</Text>
            </HStack>
          </VStack>
        </Flex>
      </Stack>
      <Stack direction={['column', 'row']} justify="space-between">
        <VStack align="start" fontSize={20} p={20}>
          <Text>{event.description || 'Lorem ipsum'}</Text>
          <Text mt={5} fontWeight={700}>
            What You&apos;ll Learn:{' '}
          </Text>
          <Text mt={2}>{event?.owner || 'Lorem Ipsum'}</Text>
        </VStack>
        <VStack align="start" fontSize={20} p={20}>
          <HStack align="start">
            <CalendarIcon boxSize={12} mt={3} color="primary.majorelle" />
            <VStack pl={5} align="start">
              <Text>Date and time: </Text>
              <Text>{format(new Date(event?.date), 'EEE, MMM d, yyyy')}</Text>
              <Text>{format(new Date(event?.date), ' h:mm a')}</Text>
            </VStack>
          </HStack>
          <Text mt={5} fontWeight={700}>
            Location:
          </Text>
          <Text>ONLINE</Text>
        </VStack>
      </Stack>
    </VStack>
  );
};
export default EventDisplay;
