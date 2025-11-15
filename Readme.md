📦 EchoMars — Modern E-Commerce Web App

EchoMars is a fully responsive and modular e-commerce application built with React, TypeScript, Tailwind CSS, and Zustand.
It features dynamic product pages, global cart management, smooth page transitions, and clean UI components.
Currently powered by the Fake Store API (temporary), with a Spring Boot backend (coming soon) for production-grade features.

🚀 Features
🛍️ Storefront

Dynamic product listing

Product detail pages

Category-based product filtering (planned)

Clean and modern UI with Tailwind CSS

🛒 Cart & Checkout

Add/remove items

Real-time cart updates using Zustand

Persisted global store

Checkout form with validation

Order summary & success screen

🎨 UI & UX

Smooth animations

Fully responsive layout

Dark mode (coming soon)

Component-driven architecture

🧪 Testing

Unit tests using Vitest + React Testing Library

Playwright browser tests

🛠 Backend (Current & Future)

✔ Fake Store API used for product data
🚧 Migrating to a Spring Boot REST backend soon
Planned backend features:

Authentication (JWT)

Orders API

Cart API

Admin dashboard tools

🏗️ Tech Stack
Frontend

React 18

TypeScript

Zustand (Global state)

Tailwind CSS

Vite

React Testing Library + Vitest

Playwright

Backend

Node.js / Express (temporary)

Spring Boot (planned upgrade)

📁 Project Structure
EchoMars/
│── Frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│   └── tests/
│
│── Backend/
│   └── server.js      # placeholder (will be replaced with Spring Boot)
│
└── README.md

🧩 Environment Setup
🔧 Clone the repository
git clone https://github.com/Kollishion/EchoMars.git
cd EchoMars

🎨 Frontend Setup
cd Frontend
npm install
npm run dev


Frontend will be available at:

http://localhost:5173

🖥️ Backend Setup (Node.js placeholder)
cd Backend
node server.js


Placeholder server will run at:

http://localhost:5000


(Will be replaced by Spring Boot)

🧪 Run Tests
Unit Tests
npm run test

E2E Tests (Playwright)
npx playwright test

📦 Build for Production
npm run build


Outputs to:

Frontend/dist

🗺️ Roadmap

 Migrate backend to Spring Boot + Maven

 Full JWT authentication

 Admin product management

 Order tracking system

 Dashboard analytics

 Dark mode theme

 User profile pages

🤝 Contributing

Pull requests are welcome.
For major changes, please open an issue to discuss what you'd like to change.

📜 License

This project is open-source under the MIT License.