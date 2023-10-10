import React from 'react';
import Conference from '@/views/Conference';
import Party from '@/views/Party';

function MapsParty() {
  return (
    <div>
      <section className="informacion-boda">
        <Conference />
        <Party />
      </section>
    </div>
  );
}

export default MapsParty;