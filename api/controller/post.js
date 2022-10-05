import { db } from '../db.js';
import jwt from 'jsonwebtoken';

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? 'SELECT * FROM post WHERE cat=?'
    : 'SELECT * FROM post';

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q =
    'SELECT  `username`,`title`,`description`,p.img,u.img AS userImg,p.id,`cat`,`date` FROM user u JOIN post p ON u.id=p.uid WHERE p.id=?';

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  res.json('from controller');
};

export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  console.log('token', req);
  if (!token) res.status(401).json('Not Authenticated!');

  jwt.verify(token, 'jwtkey', (err, userInfo) => {
    if (err) return res.status(403).json('Invalid Token');

    const postId = req.params.id;
    const q = 'DELETE FROM post WHERE id=? AND uid=?';

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json('You can delete only your post!');
      return res.status(200).json('Post deleted!');
    });
  });
};

export const updatePost = (req, res) => {
  res.json('from controller');
};
