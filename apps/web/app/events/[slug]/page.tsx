import React from 'react';

import EventDisplay from '../../_components/EventDisplay';

const EventSlug = async ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <EventDisplay eventId={params.slug} />
    </div>
  );
};

export default EventSlug;
