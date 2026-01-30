import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	return res.json({ status: 'Server is up and running' });
});

app.listen(8000, () => console.log('Express is running on PORT 8000'));


