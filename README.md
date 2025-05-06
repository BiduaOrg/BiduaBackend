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
 origin/feature-auth

<---------ORDERS----------------->

1. POST :-

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

2. FINDALL:-

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

<-------------- AGENCY--------------->

1.  POST METHOD:-

Url :- http://localhost:3000/admin/agencies
JSON :-
{
"name": "smriti Agency",
"phone": "9876543210",
"email": "smriti@gmail.com",
"district": "Jaipur",
"state": "Rajasthan",
"type": "District",
"depositPaid": true
}

Output :-
{
"name": "smriti Agency",
"phone": "9876543210",
"email": "smriti@gmail.com",
"district": "Jaipur",
"state": "Rajasthan",
"type": "District",
"depositPaid": true,
"status": "active",
"\_id": "681880852f91ef2d9ad11f3a",
"createdAt": "2025-05-05T09:10:29.344Z",
"\_\_v": 0
}

2.  GET METHOD :-

    findAll -
    Url :- http://localhost:3000/admin/agencies

        Output :-
                 [
        {
            "_id": "6815d15deeb028614e500cd8",
            "name": "ABC Agency",
            "phone": "1234567890",
            "email": "contact@abcagency.com",
            "district": "District1",
            "state": "State1",
            "type": "urban",
            "depositPaid": true,
            "status": "Deactive",
            "createdAt": "2025-05-03T08:18:37.013Z",
            "__v": 0
        },
        {
            "_id": "6815d3c8eeb028614e500cdd",
            "name": "Smriti Agency",
            "phone": "9334249895",
            "email": "smriti@gmail.com",
            "district": "Katihar",
            "state": "Bihar",
            "type": "urban",
            "depositPaid": true,
            "status": "active",
            "createdAt": "2025-05-03T08:28:56.227Z",
            "__v": 0
        },
        {
            "_id": "6815d3d6eeb028614e500cdf",
            "name": "Smriti Agency",
            "phone": "9334249895",
            "email": "smriti@gmail.com",
            "district": "Katihar",
            "state": "Bihar",
            "type": "urban",
            "depositPaid": false,
            "status": "Deactive",
            "createdAt": "2025-05-03T08:29:10.776Z",
            "__v": 0
        },
        {
            "_id": "681880602f91ef2d9ad11f38",
            "name": "ABC Agency",
            "phone": "9876543210",
            "email": "abc@example.com",
            "district": "Jaipur",
            "state": "Rajasthan",
            "type": "District",
            "depositPaid": true,
            "status": "active",
            "createdAt": "2025-05-05T09:09:52.831Z",
            "__v": 0
        },
        {
            "_id": "681880852f91ef2d9ad11f3a",
            "name": "smriti Agency",
            "phone": "9876543210",
            "email": "smriti@gmail.com",
            "district": "Jaipur",
            "state": "Rajasthan",
            "type": "District",
            "depositPaid": true,
            "status": "active",
            "createdAt": "2025-05-05T09:10:29.344Z",
            "__v": 0
        }

    ]

3.  PATCH METHOD :-

        Url :- http://localhost:3000/admin/agencies/681880852f91ef2d9ad11f3a/status
        JSON :-
        {
        "status": "Deactive"
        }

             OUTPUT :-
                      {
            "_id": "681880852f91ef2d9ad11f3a",
            "name": "smriti Agency",
            "phone": "9876543210",
            "email": "smriti@gmail.com",
            "district": "Jaipur",
            "state": "Rajasthan",
            "type": "District",
            "depositPaid": true,
            "status": "Deactive",
            "createdAt": "2025-05-05T09:10:29.344Z",
            "__v": 0

        }

        <------------------BLOCK MANAGER -------------------------------------->

4.  POST METHOD :-
    Url :- http://localhost:3000/admin/block-managers

          JSON :-
                   {


    "agencyId": "681880852f91ef2d9ad11f3a",
    "name": "Ravi Kumar",
    "phone": "9876543210",
    "email": "ravi@example.com",
    "state": "Rajasthan",
    "district": "Jaipur",
    "block": "Amber",
    "assignedLeads": ["6637e5a2c10d8fba9f6a9999"],
    "status": "active"
    }

         OUTPUT :-
              {
        "agencyId": "681880852f91ef2d9ad11f3a",
        "name": "Ravi Kumar",
        "phone": "9876543210",
        "email": "ravi@example.com",
        "state": "Rajasthan",
        "district": "Jaipur",
        "block": "Amber",
        "assignedLeads": [
            "6637e5a2c10d8fba9f6a9999"
        ],
        "status": "active",
        "_id": "6818863a2f91ef2d9ad11f41",
        "__v": 0

    }

4.  GET METHOD :-
    FindAll -
    url :- http://localhost:3000/admin/block-managers

         OUTPUT :-

    [
    {
    "\_id": "6815fbc73e9ba5704b476008",
    "agencyId": {
    "\_id": "6815d15deeb028614e500cd8",
    "name": "ABC Agency",
    "phone": "1234567890",
    "email": "contact@abcagency.com",
    "district": "District1",
    "state": "State1",
    "type": "urban",
    "depositPaid": true,
    "status": "Deactive",
    "createdAt": "2025-05-03T08:18:37.013Z",
    "**v": 0
    },
    "name": "Ravi Kumar",
    "phone": "9876543210",
    "email": "ravi.kumar@example.com",
    "state": "State1",
    "district": "District1",
    "block": "BlockA",
    "assignedLeads": [],
    "status": "Deactive",
    "**v": 0
    },
    {
    "\_id": "6815fe6b3e9ba5704b476011",
    "agencyId": {
    "\_id": "6815d3c8eeb028614e500cdd",
    "name": "Smriti Agency",
    "phone": "9334249895",
    "email": "smriti@gmail.com",
    "district": "Katihar",
    "state": "Bihar",
    "type": "urban",
    "depositPaid": true,
    "status": "active",
    "createdAt": "2025-05-03T08:28:56.227Z",
    "**v": 0
    },
    "name": "Ujjwal",
    "phone": "9570479775",
    "email": "ujjwal@gmail.com",
    "state": "Bhopal",
    "district": "District5",
    "block": "BlockD",
    "assignedLeads": [],
    "status": "active",
    "**v": 0
    },
    {
    "\_id": "6818863a2f91ef2d9ad11f41",
    "agencyId": {
    "\_id": "681880852f91ef2d9ad11f3a",
    "name": "smriti Agency",
    "phone": "9876543210",
    "email": "smriti@gmail.com",
    "district": "Jaipur",
    "state": "Rajasthan",
    "type": "District",
    "depositPaid": true,
    "status": "Deactive",
    "createdAt": "2025-05-05T09:10:29.344Z",
    "**v": 0
    },
    "name": "Ravi Kumar",
    "phone": "9876543210",
    "email": "ravi@example.com",
    "state": "Rajasthan",
    "district": "Jaipur",
    "block": "Amber",
    "assignedLeads": [],
    "status": "active",
    "**v": 0
    }
    ]

5.  PATCH METHOD :-
    url :- http://localhost:3000/admin/block-managers/6818863a2f91ef2d9ad11f41/status

           JSON :- {

    "status": "deactive"
    }

        OUTPUT :-
                   {
        "_id": "6818863a2f91ef2d9ad11f41",
        "agencyId": "681880852f91ef2d9ad11f3a",
        "name": "Ravi Kumar",
        "phone": "9876543210",
        "email": "ravi@example.com",
        "state": "Rajasthan",
        "district": "Jaipur",
        "block": "Amber",
        "assignedLeads": [
            "6637e5a2c10d8fba9f6a9999"
        ],
        "status": "deactive",
        "__v": 0

 feature-order
    }

<-------------------RIDER---------------------------------->

1. POST METHOD :-
   Url :-http://localhost:3000/riders
   JSON :-
   {
   "blockManagerId": "6818863a2f91ef2d9ad11f41",
   "name": "Ankit Sharma",
   "phone": "9876543210",
   "assignedPincode": "302020",
   "status": "Deactive"
   }

OUTPUT :-
{
"blockManagerId": "6818863a2f91ef2d9ad11f41",
"name": "Ankit Sharma",
"phone": "9876543210",
"assignedPincode": "302020",
"status": "Deactive",
"\_id": "68188c072f91ef2d9ad11f47",
"\_\_v": 0
}

2.  GET METHOD :-

        FindAll -
          url :-  http://localhost:3000/riders

          OUTPUT :-
               [
        {
            "_id": "6816065bbb3a71915f51fdf3",
            "blockManagerId": {
                "_id": "6815fe6b3e9ba5704b476011",
                "agencyId": "6815d3c8eeb028614e500cdd",
                "name": "Ujjwal",
                "phone": "9570479775",
                "email": "ujjwal@gmail.com",
                "state": "Bhopal",
                "district": "District5",
                "block": "BlockD",
                "assignedLeads": [
                    "661fb6e0b01b3a5fd4b62be0",
                    "661fb7a2c16de645a3a50fd2"
                ],
                "status": "active",
                "__v": 0
            },
            "name": "sonu yadav",
            "phone": "9876543210",
            "assignedPincode": "854114",
            "status": "active",
            "__v": 0
        },
        {
            "_id": "68185997f1d7de531dfbb9bd",
            "blockManagerId": {
                "_id": "6815fe6b3e9ba5704b476011",
                "agencyId": "6815d3c8eeb028614e500cdd",
                "name": "Ujjwal",
                "phone": "9570479775",
                "email": "ujjwal@gmail.com",
                "state": "Bhopal",
                "district": "District5",
                "block": "BlockD",
                "assignedLeads": [
                    "661fb6e0b01b3a5fd4b62be0",
                    "661fb7a2c16de645a3a50fd2"
                ],
                "status": "active",
                "__v": 0
            },
            "name": "Rider Ujjwal",
            "phone": "9876543210",
            "assignedPincode": "462001",
            "status": "Deactive",
            "__v": 0
        },
        {
            "_id": "68188c072f91ef2d9ad11f47",
            "blockManagerId": {
                "_id": "6818863a2f91ef2d9ad11f41",
                "agencyId": "681880852f91ef2d9ad11f3a",
                "name": "Ravi Kumar",
                "phone": "9876543210",
                "email": "ravi@example.com",
                "state": "Rajasthan",
                "district": "Jaipur",
                "block": "Amber",
                "assignedLeads": [
                    "6637e5a2c10d8fba9f6a9999"
                ],
                "status": "deactive",
                "__v": 0
            },
            "name": "Ankit Sharma",
            "phone": "9876543210",
            "assignedPincode": "302020",
            "status": "Deactive",
            "__v": 0
        }

    ]

3.  PATCH METHOD :-

    Url :- http://localhost:3000/riders/6816065bbb3a71915f51fdf3/status
    JSON :-  
     {
    "status": "Active"
    }

        OUTPUT :-
               {
        "_id": "6816065bbb3a71915f51fdf3",
        "blockManagerId": "6815fe6b3e9ba5704b476011",
        "name": "sonu yadav",
        "phone": "9876543210",
        "assignedPincode": "854114",
        "status": "Active",
        "__v": 0

    }
 origin/feature-auth


Create Product Query

1 Create Product

mutation {
  createProduct(createProductInput: {
    name: "CloudDrive",
    description: "A cloud storage solution.",
    category: "Cloud",
    price: 49.99,
    images: ["image1.jpg", "image2.jpg"]
  }) {
    _id
    name
    description
    category
    price
    images
    stockStatus
    createdAt
  }
}

2 Get All Products

query {
  products {
    _id
    name
    description
    category
    price
    images
    stockStatus
    createdAt
  }
}

3 Get Product By ID

query {
  product(id: "60d0fe4f5311236168a109ca") {
    _id
    name
    description
    category
    price
    images
    stockStatus
    createdAt
  }
}

4 Update Product

mutation {
  updateProduct(updateProductInput: {
    id: "60d0fe4f5311236168a109ca",
    name: "Updated CloudDrive",
    description: "Updated cloud storage description.",
    category: "Cloud",
    price: 59.99,
    images: ["image3.jpg", "image4.jpg"]
  }) {
    _id
    name
    description
    category
    price
    images
    stockStatus
    createdAt
  }
}

5 Delete Product

mutation {
  removeProduct(id: "60d0fe4f5311236168a109ca") {
    _id
    name
    description
    category
    price
    images
    stockStatus
    createdAt
  }
}



Services

1 - CreateService


mutation CreateService {
  createService(
    input: {
      title: "Human Verification"
      slug: "human-verification"
      description: "We verify human identity through multiple checks."
      price: 499
      fields: ["Name", "Address", "Phone", "Email"]
    }
  ) {
    _id
    title
    slug
    description
    price
    fields
    createdAt
  }
}


2 - GetAllServices

query GetAllServices {
  getAllServices {
    _id
    title
    slug
    description
    price
    fields
    createdAt
  }
}


3 - GetServiceBySlug


query GetServiceBySlug {
  getServiceBySlug(slug: "human-verification") {
    _id
    title
    slug
    description
    price
    fields
    createdAt
  }
}



Service Order

1 - createServiceOrder

mutation {
  createServiceOrder(
    input: {
      serviceSlug: "human-verification",
      data: {
        Name: "John",
        Address: "123 Street",
        Phone: "9876543210",
        Email: "john@example.com"
      },
      userEmail: "john@example.com",
      razorpay_order_id: "order_xyz123",
      razorpay_payment_id: "pay_abc456",
      razorpay_signature: "sig_sample"
    }
  ) {
    
    serviceSlug
    data
    userEmail
    status
    createdAt
  }
}


2 - GetAllServiceOrders


query GetAllServiceOrders {
  getAllServiceOrders {
    
    serviceSlug
    data
    userEmail
    razorpay_order_id
    razorpay_payment_id
    razorpay_signature
    status
    mediaLinks
    createdAt
  }
}

Users
1.Post(Create User)
mutation {
  createUser(
    createUserInput: {
      name: "Hyder"
      email: "hyder@example.com"
      phone: "9876543210"
      type: "customer"
    }
  ) {
    _id
    name
    email
    phone
    type
  }
}

Output:-
{
  "data": {
    "createUser": {
      "_id": "6811dc2974366f340384fbe2",
      "name": "Hyder",
      "email": "hyder@example.com",
      "phone": "9876543210",
      "type": "customer"
    }
  }
}

2.Get (FindAll users)
query {
  users {
    _id
    name
    email
    phone
    type
  }
}

OUTPUT:-
{
  "data": {
    "users": [
      {
        "_id": "6811dab274366f340384fbdf",
        "name": "Hyder",
        "email": "hyder@example.com",
        "phone": "9876543210",
        "type": "customer"
      },
      {
        "_id": "6811da0a74366f340384fbd7",
        "name": "Bilal Hyder",
        "email": "bilal@example.com",
        "phone": "1234567890",
        "type": "partner"
      },
      {
        "_id": "6811da9574366f340384fbdd",
        "name": "Zehra",
        "email": "zehra@example.com",
        "phone": "9876543210",
        "type": "customer"
      }
    ]
  }
}

3.Get (Find One User)
query {
  user(id: "6811dab274366f340384fbdf") {
    _id
    name
    email
    phone
    type
  }
}

OUTPUT:-
{
  "data": {
    "user": {
      "_id": "6811da0a74366f340384fbd7",
      "name": "Hyder",
      "email": "hyder@example.com",
      "phone": "9876543210",
      "type": "customer"
    }
  }
}

4.PATCH (Update User)
mutation {
  updateUser(
    id: "6811da0a74366f340384fbd7"
    updateUserInput: {
      name: "Bilal Hyder"
      email: "Bilal@example.com"
      phone: "1234567890"
      type: "partner"
    }
  ) {
    _id
    name
    email
    phone
    type
  }
}

OUTPUT:-
{
  "data": {
    "updateUser": {
      "_id": "6811da0a74366f340384fbd7",
      "name": "Bilal Hyder",
      "email": "Bilal@example.com",
      "phone": "1234567890",
      "type": "partner"
    }
  }
}

5.Delete (Remove User)
mutation {
  removeUser(id: "6811da0a74366f340384fbd7")
}

OUTPUT:-
{
  "data": {
    "removeUser": true
  }
}





 develop
