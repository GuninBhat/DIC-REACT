import React from "react";
import Navbar from "./Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div class="content">
        <h1 style={{ color: "red" }}>
          This is the dashboard page of FITNESS TRACKER.
        </h1>
      </div>
      <br />
      <main>
        <h2 style={{ color: "blue" }}>Welcome to Your Dashboard</h2>
        <section id="activity-section">
          <br />
          <h6>Log Your Activity</h6>
          <br />
          <br />
          <form id="activity-form">
            <label for="activity">Activity:</label>
            <input
              type="text"
              placeholder="Enter Your Activity"
              id="activity"
              required
            />

            <label for="steps">Steps:</label>
            <input
              type="number"
              placeholder="Enter Steps Covered"
              id="steps"
              required
            />

            <label for="calories">Calories Burned:</label>
            <input
              type="number"
              placeholder="Enter Calories Burned"
              id="calories"
              required
            />

            <label for="distance">Distance (km):</label>
            <input
              type="number"
              placeholder="Enter Distance Covered"
              id="distance"
              required
            />

            <button type="submit">Log Activity</button>
          </form>
        </section>
      </main>
      <br />
      <section>
        <table>
          <tr>
            <td>
              <img
                src="https://i.insider.com/5aa30e43a4f4ac1a008b46e6?width=1000&format=jpeg&auto=webp"
                height="400px"
                width="400px"
                alt="error"
              />
            </td>
            <td>
              <img
                src="https://img.freepik.com/premium-photo/young-people-runner-running-running-road-city-park_41380-393.jpg"
                height="400px"
                width="400px"
                alt="error"
              />
            </td>
            <td>
              <img
                src="https://blog.nasm.org/hubfs/power-pushups.jpg"
                height="400px"
                width="400px"
                alt="error"
              />
            </td>
          </tr>
        </table>
      </section>

      <script src="app.js"></script>
    </>
  );
}
