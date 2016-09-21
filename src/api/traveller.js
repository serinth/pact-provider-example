import { Router } from 'express';

export default ({ config  }) => {
	let router = Router();
  
  router.get('/', (req, res) => {
    res.json({
      "firstName": "Tony",
      "id": 1,
      "lastName": "Truong"
    });
  });


	return router;
}
