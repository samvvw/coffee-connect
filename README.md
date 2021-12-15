# :coffee: Qafa

<img width="1438" alt="Screen Shot 2021-12-14 at 9 41 06 AM" src="https://user-images.githubusercontent.com/10744642/146051361-5b22f1cc-63da-44a1-bda0-0294eaac7f94.png">

**Qafa** is a web platform which helps specialty coffee farmers who wants to maximize their profit margins and expand their businesses by connecting directly with coffee enthusiasts internationally. Unlike the traditional ways of trading coffee. 

## Project main features

### 1. Search functionality: 

Anyone can search and see the farm directory and the coffee marketplace, and we have different filters to make it easier for the user to find their coffee: 
- Roast Level 
- Origin 
- Price

### 2. Farmer’s dashboard

This feature is the core of our application since it solves the main problem of connecting specialty coffee farmers with their customers around the world.  

With our app farmers will be able to display their farm profile and what they offer to their customers in the marketplace. Each farm will have its profile, story and relevant information about the farm, along with a showcase of its products. 
- Farm Profile 
- Product page 
- Messages * (further feature) 
- Orders * (further feature) 
- Support * (further feature) 
- Farm visit request* (further feature) 

### 3. Consumer’s dashboard

The consumers will browse through the farms, their profiles, and products and buy coffee once or make a monthly subscription. When they create their account, they can buy, save their favourite coffee farms and products. As the farmers are under a process or validation, their purchase is secure. 

## Tech Stack
- React.js
- React Context API
- Styled-Components
- Node.js
- Express.js
- NoSQL Database: MongoDB
- Leaflet
- Jest
- AWS S3 (Images storage)
- AWS EC2 (Server deployment)
- Netlify (Client deployment)

## Installation

Make sure you have Node.js installed, and be sure to have at least Node v14.8+

Clone the project, and open it with Visual Studio Code:

```bash
git clone https://github.com/samvvw/coffee-connect.git

cd coffee-connect

code .
```

Then, let's configure the environmental variables needed by Qafa, which are the following:

```bash
NODE_ENV=development
PORT=8080
MONGODB_URL=mongodb://localhost:27017/coffee-connect-dev
MONGODB_URL_TEST=mongodb://localhost:27017/coffee-connect-dev-test
JWT_SECRET=
JWT_EXPIRATION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_BUCKET_NAME=
```

Now let's install all the npm dependencies for both Client and Server, and run the entire application with the following commands:

```bash
cd server

npm run dev
```

**Qafa** should be up and running!! :rocket:

## Qafa's Project Presentation

If you want to know more about Qafa and watch a demo of how to use it, please check our Project's presentation in the following link:

[Qafa's presentation Video](https://www.youtube.com/watch?v=zMaUMyqxssc)
