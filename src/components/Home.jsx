import React from "react";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section class="bg-gray-100 py-16">
          <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center">
              <div class="px-4">
                <h1 style={{ color: "red" }}>WELCOME TO FITNESS TRACKER</h1>
                <h2 class="text-3xl font-semibold mb-4">
                  Track Your Fitness with FITNESS TRACKER
                </h2>
                <p class="text-gray-600 mb-6">
                  FITNESS TRACKER tells the amount of Calories burned, No. of
                  Steps covered, HeartBeat, Pulse Rate, sleep ptterns.FITNESS
                  TRACKER also allows its users to track their overall progress
                  and set goals as well as offer guidelines to help achieve
                  their Fitness Goals.
                </p>
                <a href="login.html" class="btn-primary">
                  Get Started
                </a>
              </div>
              <div class="px-4">
                <img
                  src="https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTkyMDQzMTc3NzYxMzE4MzQz/best-running-shoes-for-men_lead.png"
                  alt="error"
                  class="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white py-16">
          <div class="container mx-auto">
            <h2 class="text-3xl font-semibold text-center mb-8">
              Why Choose FITNESS TRACKER?
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="px-4">
                <img
                  src="https://blog.nasm.org/hubfs/power-pushups.jpg"
                  alt="error"
                  class="w-full"
                />
                <h3 class="text-xl font-semibold mt-4">
                  Personalized Workouts
                </h3>
                <p class="text-gray-600">
                  Get personalized workout plans tailored to your fitness level
                  and goals.
                </p>
              </div>
              <div class="px-4">
                <img
                  src="https://img.freepik.com/premium-photo/young-people-runner-running-running-road-city-park_41380-393.jpg"
                  alt="error"
                  class="w-full"
                />
                <h3 class="text-xl font-semibold mt-4">Track Your Progress</h3>
                <p class="text-gray-600">
                  Track your daily activity, steps, calories burned, and
                  distance covered.
                </p>
              </div>
              <div class="px-4">
                <img
                  src="https://i.insider.com/5aa30e43a4f4ac1a008b46e6?width=1000&format=jpeg&auto=webp"
                  alt="error"
                  class="w-full"
                />
                <h3 class="text-xl font-semibold mt-4">Achieve Your Goals</h3>
                <p class="text-gray-600">
                  Set goals, receive reminders, and stay motivated to reach your
                  fitness targets.
                </p>
              </div>
              <div class="px-4">
                <img
                  src="https://st2.depositphotos.com/1023771/8506/i/600/depositphotos_85062448-stock-photo-beautiful-woman-working-out-in.jpg"
                  alt="error"
                  class="w-full"
                />
                <h3 class="text-xl font-semibold mt-4">Connect with Others</h3>
                <p class="text-gray-600">
                  Connect with a community of fitness enthusiasts to share your
                  progress and get inspired.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gray-100 py-16">
          <div class="container mx-auto">
            <h2 class="text-3xl font-semibold text-center mb-8">
              Start Your Fitness Journey Today
            </h2>
            <p class="text-center text-gray-600 mb-8">
              Join Now as Thousands of people have already transformed their
              lives with FITNESS TRACKER.
            </p>
            <a href="login.html" class="btn-primary">
              Get Started
            </a>
          </div>
        </section>
      </main>

      <footer class="bg-gray-800 py-4">
        <div class="container mx-auto text-center">
          <p class="text-white">
            Fitness Tracker &copy; 2023. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
