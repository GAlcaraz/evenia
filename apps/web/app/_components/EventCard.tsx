import {
  Box,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { Link } from '@chakra-ui/next-js';
import { Event } from '../_models/event';
import { useSession } from 'next-auth/react';

type EventCardProps = {
  event: Event;
  imgWidth?: number;
  imgHeight?: number;
};

const EventCard: React.FC<EventCardProps> = ({
  event,
  imgWidth = 300,
  imgHeight = 160,
}) => {
  const { data: session } = useSession();

  return (
    <Link href={`/events/${event.id}`} style={{ textDecoration: 'none' }}>
      <Card overflow="hidden" maxW={imgWidth}>
        <Box>
          <Image
            src={`https://source.unsplash.com/random/${imgWidth}x${imgHeight}?sig=${Math.floor(
              Math.random() * 10
            )}`}
            alt="Green double couch with wooden legs"
            objectFit="cover"
          />
        </Box>
        <CardBody>
          <Stack spacing={1}>
            <Text fontSize={18} color="text.grey" fontWeight={500}>
              {format(new Date(event.date), 'EEE, MMM d, h:mm a')}
            </Text>
            <Heading fontSize={20} fontWeight={500}>
              {event.name}
            </Heading>
            <Text fontSize={16} color="text.grey" fontWeight={500}>
              {session?.user?.email || 'Dummy User'}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};
export default EventCard;
