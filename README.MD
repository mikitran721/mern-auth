# MIKI SAYS HELLO

- This is full-stack web application built with MERN (MongoDB, Express, React, Node.js) stack. It includes authentication features that allow users to sign up, log in, and log out, and provides access to protectd routes only for authenticated users.

The front-end of the application is built with React and uses React Router for client-side routing. The back-end is built with Node.js and Express, and uses MongoDB as the database. Authentication is implemented using JON Web Token (JWT).

This application is intended as a staring point for building full-stack web application with authentication using the MERN stack. Fell free to use it as a template for your own projects!

- Project: MERN AUTH; su dung VietJs, ExpressJs, tailwindcss, Bcryptjs, JWT, MongoDB, Firebase-google:Auth, storage; Redux-persist;
- Deploy all in on hosting via RENDER

# cai dat

- cai `npm init -y` de khoi tao file package.json
- cai `npm i express`
- cai `npm i mongoose` ket noi csdl
- cai `npm i dotenv`
- su dung `Insomnia api test` de test thay vi postman
- cai `npm i bcryptjs` dung hash password
- cai `npm i jsonwebtoken` luu o cookie
- cai `npm install @reduxjs/toolkit react-redux`
- cai `npm i redux-persist`
- cai `npm i firebase` sau khi dang ky project trong firebase-goole de lay API_KEY; can tao va enable `authentication` len truoc khi su dung
- cai `npm i cookie-parser`

# GHI CHU:

- tao schema, sau do tao model
- tu app->routes->controller
- can co option: app.use(express.json()) => de client co the gui request body theo json
- set cookie with expire time `// 1 Day = 24 Hrs = 24*60*60 = 86400.`
-

# NOI DUNG

- create and add user model
- create a test API route
- create sign up API route
- create a middleware and a function to handle the errors
- complete sign up page UI
- complete sign upp page functionality
- create sign in API route
- complete the sign in page functionality
- Add redux toolkit
- Add redux Persit
- Create and add OAuth component
- update the header component and make the profile page private
- complete profile page UI
- update Image functionality
- Create update API route
- Complete update user functionality
- Add delete user functionality
- Add sign out user functionality
- complete home and about pages
- deploy to RENDER
