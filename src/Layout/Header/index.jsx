import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { Form, Row } from 'reactstrap';
import { X } from 'react-feather';
import { Link } from 'react-router-dom';
import RightHeader from './RightHeader/index';
import { Loading } from '../../Constant';
import SvgIcon from '../../Components/Common/Component/SvgIcon';

const Header = () => {
  const id = window.location.pathname.split('/').pop();
  const layout = id;

  const [searchValue, setsearchValue] = useState('');

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setsearchValue('');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  const handleSearchKeyword = (keyword) => {
    keyword ? addFix() : removeFix();
  };

  const addFix = () => {
    document.querySelector('.Typeahead-menu').classList.add('is-open');
    document.body.classList.add(`ltr`);
    // if (document.body.classList.value !== 'box-layout') {
    //   document.body.classList.add('offcanvas');
    // }
  };

  const removeFix = () => {
    setsearchValue('');
    document.querySelector('.Typeahead-menu').classList.remove('is-open');
    document.body.classList.add(`ltr`);
    document.body.classList.remove('offcanvas');
  };

  return (
    <Fragment>
      <div className={`page-header`}>
        <Row className='header-wrapper m-0'>
          <Form className='form-inline search-full col' action='#' method='get'>
            <div className='form-group w-100'>
              <div className='Typeahead Typeahead--twitterUsers'>
                <div className='u-posRelative'>
                  <input className='Typeahead-input form-control-plaintext w-100' id='demo-input' type='search' placeholder='Search Cuba ..' defaultValue={searchValue} onChange={(e) => handleSearchKeyword(e.target.value)} />
                  <div className='spinner-border Typeahead-spinner' role='status'>
                    <span className='sr-only'>{Loading}</span>
                  </div>
                  <X className='close-search' onClick={() => document.querySelector('.search-full').classList.remove('open')} />
                </div>
                <div className='Typeahead-menu' id='search-outer'>
                  <div className='header-search-suggestion custom-scrollbar'>
                    {searchValue
                      ? searchValue.map((data, index) => {
                          return (
                            <div className='ProfileCard u-cf' key={index}>
                              <div className='ProfileCard-details'>
                                <div className='ProfileCard-realName'>
                                  <Link to={data.path + '/' + layout} className='realname  w-100 d-flex justify-content-start gap-2' onClick={removeFix}>
                                    <SvgIcon style={{ width: '16px', height: '16px' }} className='stroke-icon' iconId={`stroke-${data.icon}`} />
                                    <SvgIcon style={{ width: '16px', height: '16px' }} className='fill-icon' iconId={`fill-${data.icon}`} />
                                    {data.title}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : ''}
                  </div>
                </div>
                <div className='Typeahead-menu empty-menu'>
                  <div className='tt-dataset tt-dataset-0'>
                    <div className='EmptyMessage'>{'Opps!! There are no result found.'}</div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
          <RightHeader />
        </Row>
      </div>
    </Fragment>
  );
};

export default Header;
