// Wedding Services Website - Simplified Version (BaratiSay)

import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-100 to-pink-300 py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Plan Your Wedding with BaratiSay
        </h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Connect with top vendors in Delhi — DJs, caterers, banquet halls, and
          more — all at discounted rates.
        </p>
        <a
          href="#contact"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl text-lg"
        >
          Get a Free Quote
        </a>
      </div>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Catering",
            "DJ & Music",
            "Lighting & Decor",
            "Banquet Halls",
            "Waiters & Staff",
            "Photography",
            "Bridal Makeup",
            "Mehendi Artists",
            "Wedding Planners",
            "Invitation Cards",
            "Transportation",
            "Puja & Pandit Services",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-6 text-center shadow hover:shadow-lg"
            >
              <div className="text-pink-500 text-3xl mb-4">🎉</div>
              <h3 className="text-xl font-medium">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-pink-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Big Day?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Fill out our quick form and we’ll match you with the best vendors in
          your budget.
        </p>
        <a
          href="#contact"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-xl text-lg"
        >
          Request a Callback
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6 text-center">
        <p className="mb-2">© 2025 BaratiSay</p>
        <p>Email: narendrajoshi2407@outlook.com | Phone: +91-87459-60120</p>
      </footer>
    </div>
  );
}
