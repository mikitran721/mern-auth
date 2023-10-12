import React from "react";

export default function Home() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-slate-700">
        Welcome to my Auth App
      </h2>
      <p className="mb-4 text-slate-800">
        This is full-stack web application built with MERN (MongoDB, Express,
        React, Node.js) stack. It includes authentication features that allow
        users to sign up, log in, and log out, and provides access to protectd
        routes only for authenticated users.
      </p>
      <p className="mb-4 text-slate-800">
        The front-end of the application is built with React and uses React
        Router for client-side routing. The back-end is built with Node.js and
        Express, and uses MongoDB as the database. Authentication is implemented
        using JON Web Token (JWT).
      </p>
      <p className="mb-4 text-slate-800">
        This application is intended as a staring point for building full-stack
        web application with authentication using the MERN stack. Fell free to
        use it as a template for your own projects!
      </p>
    </div>
  );
}
