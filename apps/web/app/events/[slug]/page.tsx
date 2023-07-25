import React from 'react';

import EventDisplay from '../../_components/EventDisplay';

const Events = async ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <EventDisplay eventId={params.slug} />
    </div>
  );
};

export default Events;
