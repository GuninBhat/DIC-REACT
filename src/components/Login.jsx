import React from "react";
import Navbar from "./Navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <h1 style={{ color: "red" }}>
        This is the Login page of FITNESS TRACKER
      </h1>
      <br />
      <br />
      <form>
        <label for="username12">Username Id </label>
        <input
          type="text"
          placeholder="Enter Your Username Id"
          id="username12"
        />
        <br />
        <br />
        <label for="pass12">Password</label>
        <input type="password" placeholder="Enter Your Password" id="pass12" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
