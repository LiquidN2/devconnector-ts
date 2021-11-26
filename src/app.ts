import express, { Request, Response } from 'express';
import path from 'path';

const app = express();

// GLOBAL MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello, this is your api entry point');
});

// SERVE STATIC FILES IN PRODUCTION
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));

  app.get('*', (req: Request, res: Response) => {
    res.sendFile(
      path.resolve(__dirname, '..', 'client', 'build', 'index.html')
    );
  });
}

export default app;
