import EditEvent from '../../../_components/EditEvent';
import React from 'react';

const UpdateEvent = async ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <EditEvent eventId={params.slug} />
    </div>
  );
};

export default UpdateEvent;
