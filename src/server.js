import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { db } from './db/index.js';
import { authRouter } from './routes/auth.routes.js';

export const app = express();
export const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use(authRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/loans/:id', (req, res) => {
  console.log(req.params.id);
  try {
    const query = `
    SELECT
      L.id AS loanId,
      L.clientId,
      C.name AS clientName,
      L.loanAmount,
      L.monthlyPayments,
      L.referral,
      P.paymentDate,
      P.amountPaid,
      P.status
    FROM
        Loans AS L
    JOIN
        Clients AS C ON L.clientId = C.id
    LEFT JOIN
        Payments AS P ON L.id = P.loanId
    WHERE
        L.id = ?;
`;

    const stmt = db.prepare(query);
    const result = stmt.get(req.params.id);

    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).send({ result: 'error' });
  }
});
