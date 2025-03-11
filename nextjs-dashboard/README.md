## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

# Try it out

```
Now, try it out. You should be able to log in and out of your application using the following credentials:

Email: user@nextmail.com
Password: 123456
```

# Terminal

```
npm install -g pnpm
npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm
cd nextjs-dashboard
pnpm run dev
```

# Next JS Chapters

Ref :-
https://nextjs.org/learn/dashboard-app/adding-authentication

```
Chapter 1 -Getting Started
Chapter 2 -CSS Styling
Chapter 3 -Optimizing Fonts and Images
Chapter 4 -Creating Layouts and Pages
Chapter 5 -Navigating Between Pages
Chapter 6 -Setting Up Your Database
Chapter 7 -Fetching Data
Chapter 8 -Static and Dynamic Rendering
Chapter 9 -Streaming
Chapter 10 -Partial Prerendering
Chapter 11 -Adding Search and Pagination
Chapter 12 -Mutating Data
Chapter 13 -Handling Errors
Chapter 14 -Improving Accessibility
Chapter 15 -Adding Authentication
Chapter 16 -Adding Metadata
```

# Deployment Hickupps

```
1. Next Module
    "module": "NodeNext",
    "moduleResolution": "NodeNext",

2. This is a Comman Js File, Top level await issue
    Added const client = await db.connect(); to each function.
```
