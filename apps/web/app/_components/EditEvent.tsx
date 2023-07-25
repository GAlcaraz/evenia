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
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { gql } from '../../data-access/graphql-client';
import { AddIcon } from '@chakra-ui/icons';

const EditEvent: React.FC<{ eventId: string }> = ({ eventId }) => {
  const [event, setEvent] = useState<unknown>();

  useEffect(() => {
    async function fetchEvent() {
      setEvent((await gql.GetEvent({ id: eventId })).event);
    }
    fetchEvent();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: event?.name,
      description: event?.description,
      date: event?.date,
      city: event?.city,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  if (!event) {
    return <></>;
  }

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
                  value={formik.values.email}
                />
              </FormControl>
              <FormControl>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Description"
                  onChange={formik.handleChange}
                  resize="none"
                  //   value={formik.values.email}
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
                    //   value={formik.values.email}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <Input
                  id="location"
                  name="location"
                  placeholder="Event location"
                  onChange={formik.handleChange}
                  //   value={formik.values.email}
                />
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
