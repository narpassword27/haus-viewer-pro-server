import express from 'express';
import { Request, Response } from 'express';

const port = 3000;

main();

function main(){
	
	const app = express();

	app.get('/', (req: Request, res: Response) => {

		//Create a communicating class
		//Ask communicating class a q
		//send back the response

		res.send('Hello World!');
	});



	app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
}
