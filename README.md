This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Fullscreen Math App

This document provides a brief overview of the main features of the Fullscreen Math App.

## Create a Fullscreen Prompt

You can use the Fullscreen API to prompt the user to go fullscreen. This can be done using a simple button that calls `document.documentElement.requestFullscreen()` when clicked.

## Lock the App Until Fullscreen

You can use the `document.fullscreenElement` property to check if the document is currently in fullscreen mode. If not, you can disable interaction with the app.

## Implement a Timer

You can use JavaScript’s `setInterval` and `clearInterval` functions to start a timer when the app goes fullscreen and stop it when the math problems are completed.

## Generate Math Problems

You can create a function that generates random simple math problems for addition, subtraction, multiplication, and division.

## Math Problem API
Wolfram|Alpha APIs: Wolfram|Alpha offers a variety of APIs that can be used to integrate computational knowledge into your applications1.

Simple Math Problems API: This API generates 10 simple math problems, either addition, subtraction, multiplication, or division with either single digits numbers, double digit numbers, or one of either2.

Math Solver API: This API can solve simple math problems. It’s designed to handle all your problems and give you back the answer3.

## Email the Parents

To send an email, you can use a service like SendGrid or Mailgun. You’ll need to set up an API endpoint in your Next.js app that triggers the email when called.
