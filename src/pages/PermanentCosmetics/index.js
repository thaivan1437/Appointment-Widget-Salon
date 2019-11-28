import React, { Fragment } from 'react';

import Navbar from '../../includes/NavBar'
import Footer from '../../includes/Footer'
import PermanentContent from '../../includes/PermanentCosmetics';

function PermanentCosmetics() {
  return (
    <Fragment>
      <Navbar />
      <PermanentContent />
      <Footer />
    </Fragment>
  );
}

export default PermanentCosmetics;
