<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
<<<<<<< HEAD
=======

PlayGround Query-

1-registerAdmin

mutation {
registerAdmin(email: "admin@example.com", password: "123456") {
\_id
email
role
}
}

2- Admin login

mutation {
login(email: "admin@example.com", password: "123456") {
access_token
admin {
\_id
email
role
}
}
}

Token- You will be recieve token like this after login

{
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODBiNzg4NTZjNDlhMTEyNTRmZTE5NWMiLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiaWF0IjoxNzQ1NjU2OTQ4fQ.VrknM31YgBdKW4ySHEeMMWLhqcAJ-cDL4ZtOwjXLiMc"
}

3-createLead

mutation {
createLead(input: {
name: "Alice",
email: "alice@example.com",
phone: "1234567890",
division: "ITConnect",
message: "Interested in your product"
}) {
\_id
name
status
}
}

4-findAllLeads

query {
findAllLeads {
\_id
name
email
status
createdAt
}
}

5-getLeadById

query {
getLeadById(id: "680b6bbba991397828d00333") {
\_id
name
email
phone
division
message
status
createdAt
}
}

6-updateLead

mutation {
updateLead(
id: "680b6bbba991397828d00333"
input: {
name: "imran"
email: "imran@example.com"
phone: "1234567890"
division: "Marketing"
message: "Updated message"
status: "active"
}
) {
\_id
name
email
phone
division
message
status
createdAt
}
}

> > > > > > > origin/feature-auth

ORDERS :-

1. POST
   mutation {
   createOrder(
   createOrderInput: {
   user: {
   name: "zehara"
   email: "zehara@gmail.com"
   phone: "9578797979"
   }
   productId: "680f26b2745215bd3eb09ba9"
   quantity: 12
   amount: 800
   }
   ) {
   id
   amount
   status
   createdAt
   user {
   name
   email
   }
   }
   }

OUTPUT :-
{
"data": {
"createOrder": {
"id": "6810a57e48edae3e9f10ac9d",
"amount": 800,
"status": "pending",
"createdAt": "2025-04-29T10:10:06.775Z",
"user": {
"name": "zehara",
"email": "zehara@gmail.com"
}
}
}
}

2. FINDALL
   query {
   orders {
   id
   quantity
   amount
   status
   createdAt
   }
   }

OUTPUT :-
{
"data": {
"orders": [
{
"id": "680f1f4eeaf7d45c8dfaa2d0",
"quantity": 2,
"amount": 500,
"status": "pending",
"createdAt": "2025-04-28T06:25:18.866Z"
},
{
"id": "680f1f50eaf7d45c8dfaa2d2",
"quantity": 2,
"amount": 500,
"status": "pending",
"createdAt": "2025-04-28T06:25:20.292Z"
},
{
"id": "680f1f50eaf7d45c8dfaa2d4",
"quantity": 2,
"amount": 500,
"status": "pending",
"createdAt": "2025-04-28T06:25:20.812Z"
},
{
"id": "680f1f51eaf7d45c8dfaa2d6",
"quantity": 2,
"amount": 500,
"status": "pending",
"createdAt": "2025-04-28T06:25:21.047Z"
},
{
"id": "680f669d3aaa37ca4cdaa05a",
"quantity": 2,
"amount": 500,
"status": "pending",
"createdAt": "2025-04-28T11:29:33.902Z"
},
{
"id": "680f67b02e65541d98e2b612",
"quantity": 2,
"amount": 500,
"status": "pending",
"createdAt": "2025-04-28T11:34:08.663Z"
},
{
"id": "6810827b55964f90c501f31a",
"quantity": 2,
"amount": 199998,
"status": "pending",
"createdAt": "2025-04-29T07:40:43.649Z"
},
{
"id": "68108337ea63fb485f27d9c9",
"quantity": 2,
"amount": 500,
"status": "pending",
"createdAt": "2025-04-29T07:43:51.999Z"
},
{
"id": "681083a6ea63fb485f27d9cb",
"quantity": 2,
"amount": 500,
"status": "pending",
"createdAt": "2025-04-29T07:45:42.758Z"
},
{
"id": "68109139dd2549bf1dba2421",
"quantity": 2,
"amount": 500,
"status": "pending",
"createdAt": "2025-04-29T08:43:37.528Z"
},
{
"id": "6810a57e48edae3e9f10ac9d",
"quantity": 12,
"amount": 800,
"status": "pending",
"createdAt": "2025-04-29T10:10:06.775Z"
}
]
}
}

3.  FINDONE :-
    query {
    order(id: "68109139dd2549bf1dba2421") {
    id
    user {
    name
    email
    phone
    }
    productId {
    name
    price
    }
    quantity
    amount
    status
    createdAt
    }
    }

OUTPUT :-

{
"data": {
"order": {
"id": "68109139dd2549bf1dba2421",
"user": {
"name": "John Doe",
"email": "john@example.com",
"phone": "9876543210"
},
"productId": {
"name": "Laptop",
"price": 99999
},
"quantity": 2,
"amount": 500,
"status": "pending",
"createdAt": "2025-04-29T08:43:37.528Z"
}
}
}
