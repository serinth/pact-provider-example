import { Router } from 'express';

export default ({ config }) => {
  let router = Router();

  router.get('/providerStates', (req, res) => {
    res.json({
      'consumer_name': ['I have a list of travellers'] //the consumer name and list of states should match the contract
    });
  });

  router.get('/providerSetup', (req, res) => {
    res.json({});
  });

  return router;
}
