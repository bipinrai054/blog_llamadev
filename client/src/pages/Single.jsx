import React from 'react';

// images
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';

// react router dom
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

export default function Single() {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png'
          alt='test'
        />

        <div className='user'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
            alt='test'
          />
          <div className='info'>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt='edit' />
            </Link>
            <img src={Delete} alt='delete' />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adip alet.</h1>
        <p>
          of letters, as opposed to using 'Content here, content here', making
          it look like readable English. Many desktop
          <br /> publishing packages and web page editors now use Lorem Ipsum as
          their default model text, and a search for 'lorem ipsum' will
          <br /> uncover many web sites still in their infancy. Various versions
          have evolved over the years, sometimes by accident, sometimes on
          purpose (injected humour and the like). There are many variations of
          passages of Lorem Ipsum available, but the majority have suffered
          alteration in some form, by injected humour, or randomised words which
          don't look even slightly believable. If you are going to use a passage
          of Lorem Ipsum, you need to be sure there isn't anything embarrassing
          hidden in the middle of text. All th
          <br /> e Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. <br />
          The generated Lorem Ipsum is therefore always free from repetition,
          injected humour, or non-characteristic words etc.
        </p>
      </div>
      <Menu />
    </div>
  );
}
