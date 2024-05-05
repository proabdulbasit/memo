import * as express from 'express';
import { model, connect } from 'mongoose';
import * as cors from 'cors'
import { IDrop } from '../database/interface';
import dropSchema from '../database/models/Drop';

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());
startConnection()

async function startConnection() {
    await connect(`mongodb+srv://hugogrdpro:2E5eZwF2MFpyRtI9@cluster0.psvhqwd.mongodb.net/hackathon_memo`);
}

app.post('/', async (req, res) => {
    const Drop = model<IDrop>('drops', dropSchema);
    let drop = new Drop(req.body);
    let result = await drop.save()
    res.send(result)
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
