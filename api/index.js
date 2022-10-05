import express from 'express';

// routes
import postRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';

import cookieParser from 'cookie-parser';

import multer from 'multer';

const app = express();

app.use(express.json());
app.use(cookieParser());

// multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../client/public/upload');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.json('noice'));

app.listen(5000, () => console.log('Server running'));
