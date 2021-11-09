import express, { Request, Response, NextFunction } from "express";
import cors from 'cors';

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());

app.get("/hello", (req: Request, res: Response, next: NextFunction) => {
  res.json("hello AH Tech");
});

app.listen(port, () => console.log(`Server listening on ${port}`));
