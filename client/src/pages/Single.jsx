import React from 'react';

// images
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';

// react router dom
import { Link, Navigate } from 'react-router-dom';
import Menu from '../components/Menu';

import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

import { AuthContext } from '../context/authContext';

export default function Single() {
  const [post, setPost] = React.useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split('/')[2];

  const { currentUser } = React.useContext(AuthContext);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/posts/${postId}`);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='single'>
      <div className='content'>
        <img
          // src='https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png'
          src={post?.img}
          alt='nioce'
        />

        <div className='user'>
          {post.userImg && (
            <img
              // src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
              src={post.userImg}
              alt='test'
            />
          )}
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>

          {currentUser?.username === post.username && (
            <div className='edit'>
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt='edit' />
              </Link>
              <img onClick={handleDelete} src={Delete} alt='delete' />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.description}
      </div>
      <Menu cat={post.cat} postId={post.id} />
    </div>
  );
}
