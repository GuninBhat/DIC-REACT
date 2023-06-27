import React from "react";
import Navbar from "./Navbar";

export default function Signup() {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <h1 style={{ color: "rgb(230, 6, 6)" }}>
            This is the Sign Up Page Of FITNESS TRACKER
          </h1>
          <br />
          <br />

          <form id="signup-form">
            <label for="name">Name:</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              id="name"
              required
            />

            <label for="email">Email:</label>
            <input
              type="email"
              placeholder="Enter Your Email Id"
              id="email"
              required
            />

            <label for="password">Password:</label>
            <input
              type="password"
              placeholder="Type Your Password"
              id="password"
              required
            />

            <button type="submit">Sign Up</button>
          </form>
        </section>
      </main>

      <script src="app.js"></script>
    </>
  );
}
