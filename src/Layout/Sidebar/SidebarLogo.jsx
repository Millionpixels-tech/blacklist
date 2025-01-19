import React from 'react';
import { Grid } from 'react-feather';
import { Link } from 'react-router-dom';
import { Image } from '../../AbstractElements';

const SidebarLogo = () => {

  return (
    <div className='logo-wrapper'>
        <Link to={`${process.env.PUBLIC_URL}/dashboard/default/Dubai`}>
          <Image attrImage={{ className: 'img-fluid d-inline', src: `${require('../../assets/images/logo/logo_dark.png')}`, alt: '' }} />
        </Link>
      <div className='back-btn'>
        <i className='fa fa-angle-left'></i>
      </div>
      <div className='toggle-sidebar'>
        <Grid className='status_toggle middle sidebar-toggle' />
      </div>
    </div>
  );
};

export default SidebarLogo;
