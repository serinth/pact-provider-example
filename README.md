# Pact Tests - Provider Example

This is an example of how to verify consumer driven contracts using [Pact Testing](https://docs.pact.io/).

From Pact.io:

# What is Pact?
The Pact family of frameworks provide support for Consumer Driven Contracts testing.

# Consumer Driven Contracts
A Contract is a collection of agreements between a client (Consumer) and an API (Provider) that describes the interactions that can take place between them.
Consumer Driven Contracts is a pattern that drives the development of the Provider from its Consumers point of view.
**Pact** is a testing tool that guarantees those Contracts are satisfied.

# Running the existing test

Modify the `src/api/traveller.pact.js` and change json file path to match your system. If you want to use a pact broker then change the options to match:

```javascript
const opts = {
      providerBaseUrl: <String>,       // Running API provider host endpoint. Required.
      pactUrls: <Array>,               // Array of local Pact file paths or Pact Broker URLs (http based). Required.
      providerStatesUrl: <String>,     // URL to fetch the provider states for the given provider API. Optional.
      providerStatesSetupUrl <String>, // URL to send PUT requests to setup a given provider state. Optional.
      pactBrokerUsername: <String>,    // Username for Pact Broker basic authentication. Optional
      pactBrokerPassword: <String>    // Password for Pact Broker basic authentication. Optional
};

```

More info available at Pact Foundation: https://github.com/pact-foundation/pact-js

Then run:

`npm run pactVerify`

