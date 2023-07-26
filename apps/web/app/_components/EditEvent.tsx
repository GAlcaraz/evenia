'use client';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  VStack,
  Heading,
  Textarea,
  Stack,
  InputGroup,
  Select,
  useToast,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { gql } from '../../data-access/graphql-client';
import { AddIcon } from '@chakra-ui/icons';
import { Event } from '../_models/event';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const options = [
  'Paris',
  'NewYork',
  'Istanbul',
  'London',
  'Madrid',
  'Tokyo',
  'Dubai',
  'Blida',
  'Wakanda',
  'Gotham',
];

const EditEvent: React.FC<{ eventId?: string }> = ({ eventId }) => {
  const [event, setEvent] = useState<Event>();
  const { data: session } = useSession();
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    async function fetchEvent() {
      if (eventId) {
        setEvent((await gql.GetEvent({ id: eventId })).event);
      }
    }
    fetchEvent();
  }, []);

  const formatDate = (date: Date | undefined) => {
    if (!date) {
      return null;
    }
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // getMonth() is zero-indexed, so we add one
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const formik = useFormik({
    initialValues: {
      name: event?.name,
      description: event?.description,
      date: formatDate(event?.date),
      city: event?.city,
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      const { token } = await (await fetch('/api/token')).json();
      if (event) {
        gql.UpdateEvent(
          { id: eventId, ...values },
          {
            authorization: token,
          }
        );
        toast({
          title: 'Event updated',
          status: 'success',
          isClosable: true,
          position: 'top',
        });
      } else {
        gql.CreateEvent(
          {
            ownerEmail: session?.user?.email,
            ...values,
          },
          {
            authorization: token,
          }
        );
        toast({
          title: 'Event created',
          status: 'success',
          isClosable: true,
          position: 'top',
        });
      }
      router.push('/');
    },
  });

  return (
    <Flex align="center" justify="center" pt={10}>
      <Box
        as="form"
        width="100%"
        px={['20px', '60px']}
        onSubmit={formik.handleSubmit}
        maxW="1280px"
      >
        <Heading>Event</Heading>
        <Text py={2}>Please fill all the required information</Text>
        <VStack spacing={4} align="center">
          <Stack width="100%" direction={['column', 'row']} spacing={10}>
            <Flex
              h="450px"
              border="1px"
              borderColor="text.disabled"
              borderStyle="dashed"
              borderRadius="14px"
              backgroundColor="text.whiteGrey"
              width={['100%', '50%']}
              alignItems="center"
              justifyContent="center"
            >
              <AddIcon />
            </Flex>
            <VStack width={['100%', '50%']} spacing={4}>
              <FormControl>
                <Input
                  id="name"
                  name="name"
                  placeholder="Event Title"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  required
                />
              </FormControl>
              <FormControl>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Description"
                  onChange={formik.handleChange}
                  resize="none"
                  value={formik.values.description || ''}
                  required
                />
              </FormControl>
              <FormControl>
                <InputGroup dir="row" size="lg">
                  <Input
                    id="date"
                    name="date"
                    placeholder="Event date"
                    type="datetime-local"
                    onChange={formik.handleChange}
                    value={formik.values.date || undefined}
                    required
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <Select
                  id="city"
                  name="city"
                  placeholder="Event location"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  required
                >
                  {options.map((option) => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
            </VStack>
          </Stack>
          <Button type="submit" width="full">
            Continue
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};
export default EditEvent;
