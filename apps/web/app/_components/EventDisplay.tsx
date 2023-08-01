'use client';
import {
  Image,
  Heading,
  Flex,
  HStack,
  Text,
  VStack,
  Stack,
  Button,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { gql } from '../../data-access/graphql-client';
import { format } from 'date-fns';
import { CalendarIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { Event } from '../_models/event';
import { useSession } from 'next-auth/react';

const EventDisplay: React.FC<{ eventId: string }> = ({ eventId }) => {
  const [event, setEvent] = useState<Event>();
  const [token, setToken] = useState<string>();
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    async function fetchEvent() {
      const { token: authToken } = await (await fetch('/api/token')).json();
      setToken(authToken);
      console.log(authToken);
      setEvent(
        (
          await gql.GetEvent(
            { id: eventId },
            {
              authorization: authToken,
            }
          )
        ).event
      );
    }
    fetchEvent();
  }, []);

  const deleteEvent = async () => {
    if (token) {
      const deletedEvent = (
        await gql.DeleteEvent(
          { id: eventId },
          {
            authorization: token,
          }
        )
      ).removeEvent.id;
      if (deletedEvent) {
        router.push('/');
      }
    }
  };

  if (!event) {
    return <></>;
  }
  return (
    <VStack>
      <Stack w="100%" direction={['column', 'row']} align="center">
        <Image
          src={`https://source.unsplash.com/random/400x400?sig=${Math.floor(
            Math.random() * 10
          )}`}
          alt="Random event"
          objectFit="cover"
          w={['100%', '50%']}
        />
        <Flex flexGrow={1} justify="center">
          <VStack align="start" spacing={6}>
            {event.isOwner ? (
              <HStack align="start">
                <NextLink href={`/events/${eventId}/edit`} passHref>
                  <Button as="div" variant="outline">
                    Update event
                  </Button>
                </NextLink>

                <Button variant="critical" onClick={deleteEvent}>
                  Delete
                </Button>
              </HStack>
            ) : (
              <></>
            )}
            <Text fontSize={16}>{format(new Date(event?.date), 'MMM d')}</Text>
            <Heading fontSize={48}>{event?.name}</Heading>
            <HStack fontSize={18} justify="space-around">
              <Text>${Math.floor(Math.random() * 100)}</Text>
              <Text pl={6}>{session?.user?.email || 'TestUser'}</Text>
            </HStack>
            <Button>Register</Button>
          </VStack>
        </Flex>
      </Stack>
      <Stack
        direction={['column', 'row']}
        justify="space-around"
        w={['100%', '80%']}
      >
        <VStack fontSize={20} p={20} w="50%">
          <Text>{event.description || 'Lorem ipsum'}</Text>
          <Text mt={5} fontWeight={700}>
            What You&apos;ll Learn:{' '}
          </Text>
          <Text mt={2}>{session?.user?.email || 'TestUser'}</Text>
        </VStack>
        <VStack fontSize={20} p={20} w="50%">
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
          <Text>{event.city}</Text>
        </VStack>
      </Stack>
    </VStack>
  );
};
export default EventDisplay;
