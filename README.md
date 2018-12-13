# Nine.com.au Coding Challenge

A micro-service written in Node.js using serverless & lambda.

You can access a demo here: [`https://9.jays.works`](https://9.jays.works)

---

### Requirements

- [Install Node Version Manager](https://github.com/creationix/nvm)
- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Installation

```bash
# install & use node 6.10.3
nvm install && nvm run

# install dependencies
npm install

# Run local lambda http environment
npm run dev

# Run tests
npm run test

# Deploy
npm deploy
```

### Usage

- [Information about the api](/src/hello/README.md)
- [Filter shows that have DRM enabled and at least 1 episode](/src/filter/README.md)

### Credits

- https://github.com/AnomalyInnovations/serverless-nodejs-starter
