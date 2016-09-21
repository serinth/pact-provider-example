import server from '../server';
import pact from '@pact-foundation/pact-node';


const opts = {
  providerBaseUrl: 'http://localhost:3000',
  providerStatesUrl: 'http://localhost:3000/providerStates',
  providerStatesSetupUrl: 'http://localhost:3000/providerSetup',
  pactUrls: ['/home/vagrant/pact-provider-example/src/api/consumer_name-provider_name.json']
}

describe('Pact Verify Traveller', () => {
  let socket;

  before((done) => {
    socket = server();
    done();
  });

  after((done) => {
    socket.close();
    done();
  });

  it('should honour pact with consumer_name', (done) => {
    pact.verifyPacts(opts)
    .then(() => { 
      console.log('Done Verifying Traveller');
      done();
      })
    .catch((err) => { 
      console.log('ERROR:', err); 
      done(err); 
    });
  });
});

