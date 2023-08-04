import express from 'express';
import {PrintRouter} from './prints/routers/print-router'
import {logger} from '../domain/services/logging'

const app = express();
const port = 3000;

app.listen(port, () => {
  logger.debug(`Driven3D core is running on port ${port}.`)
});

app.use(`/Prints`, PrintRouter)
