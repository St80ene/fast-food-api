import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import migration from './models/migration';
import router from './route';

require('dotenv').config();
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', router);

// router.get('/', (req, res) => {
//   res.status(200);
//   res.json({ title: 'welcome' });
// });

app.listen(3000, function () {
  migration()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => {
      console.log(`Server is listening on port 3000`);
    });
});

export default app;
