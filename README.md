This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





# Tiles Gallery

A modern and responsive Tiles Gallery website built with Next.js. Explore beautiful tile collections, discover different designs, and find the perfect tiles for your space.

## 🌐 Live Website

**Live URL:** `https://your-live-website-url.vercel.app`

> Replace this URL with your actual deployed website link.

## 📌 Project Purpose

The purpose of this project is to build a modern tile gallery platform where users can explore tile collections, search for tiles, view detailed information, and manage their profiles through authentication.

## ✨ Key Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop devices.
- **Home Page:** Includes a hero banner with the heading "Discover Your Perfect Aesthetic".
- **Announcement Marquee:** Displays new arrivals and weekly featured collections.
- **Featured Tiles:** Shows the top four tiles fetched from the server.
- **SwiperJS Carousel:** Interactive and responsive featured tile slider.
- **All Tiles Page:** Browse all available tiles.
- **Search Functionality:** Search tiles by their title.
- **Tile Details:** View individual tile information and images.
- **User Authentication:** Register and login using email and password.
- **Google Login:** Authenticate using a Google account.
- **My Profile:** View logged-in user information.
- **Update Profile:** Update profile name and image URL.
- **Private Routes:** Protect user-specific pages.
- **Error Handling:** Includes loading states and not-found pages.

## 🛠️ Technologies Used

- Next.js (App Router)
- React
- Tailwind CSS
- Better Auth
- MongoDB
- JSON Server
- SwiperJS
- JavaScript

## 📦 NPM Packages

- `next`
- `react`
- `react-dom`
- `better-auth`
- `@better-auth/mongo-adapter`
- `mongodb`
- `json-server`
- `swiper`

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to the Project Directory

```bash
cd tiles-gallery
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
MONGODB_URI="YOUR_MONGODB_CONNECTION_STRING"
BETTER_AUTH_SECRET="YOUR_BETTER_AUTH_SECRET"
BETTER_AUTH_URL="http://localhost:3000"

GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID"
GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_CLIENT_SECRET"
```

**Important:** Never upload your `.env.local` file or expose your secret credentials publicly.

### 5. Start JSON Server

```bash
npm run server
```

The JSON Server will run at:

`https://tiles-gallary-server.onrender.com/tiles`

### 6. Start the Development Server

Open another terminal and run:

```bash
npm run dev
```

The application will run at:

`http://localhost:3000`

## 🚀 Deployment

This project can be deployed using Vercel.

Before deployment:

- Add all required environment variables to your hosting platform.
- Configure the production database connection.
- Configure Google OAuth production redirect URLs.
- Replace the local JSON Server API with a publicly accessible production API.
- Test all application routes after deployment.

## 👨‍💻 Developer

**Project Name:** Tiles Gallery  
**Category:** Category-A8-Apple  
**Framework:** Next.js

---

*Tiles Gallery — Discover Your Perfect Aesthetic.*
