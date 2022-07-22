<div align="center">

![ZiShop](public/images/logo.png)

An E-commerce site template, implemented with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/). Styled with [TailwindCSS](https://tailwindcss.com/). This is one of my portfolios, but I would be pleased if these codes helped others, so I published it as an open-source project. feel free to explore it, and if you need help, ask me. I would respond as soon as possible.

<p>

![GitHub top language](https://img.shields.io/github/languages/top/zahramirzaei/online-shop)&nbsp;
![GitHub last commit](https://img.shields.io/github/last-commit/zahramirzaei/online-shop)&nbsp;
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/zahramirzaei/online-shop)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/zahramirzaei/online-shop?display_name=tag)&nbsp;
![GitHub Repo stars](https://img.shields.io/github/stars/zahramirzaei/online-shop?color=yellow)
![GitHub forks](https://img.shields.io/github/forks/zahramirzaei/online-shop)

</p>

<p>

[Technologies](#technologies) •
[Demo](#demo) •
[Features](#features) •
[Pages](#pages) •
[Getting started](#getting-started) •
[Installation](#installation) •
[Configuration](#configuration) •
[Integrations](#third-party-integrations)
</p>
<img src="/public/images/zishopBanner.png"/>
</div>

## Technologies
![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react)&nbsp;
![TypeScript](https://img.shields.io/badge/-TypeScript-05122A?style=flat&logo=typescript)&nbsp;
![Next.js](https://img.shields.io/badge/-Next.js-05122A?style=flat&logo=next.js)&nbsp;
![Redux](https://img.shields.io/badge/-Redux-05122A?style=flat&logo=redux&logoColor=764ABC)&nbsp;
![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-05122A?style=flat&logo=tailwindCSS&logoColor=06B6D4)

## Demo
You can visit and explore in the ZiShop template at [ZiShop.vercel.app](https://zishop.vercel.app/).

## Features
* Using Redux toolkit as state manager
* Using [Sanity.io](https://www.sanity.io/) as database
* Fully responsive
* Multi-language (EN-FA)
* Multi-theme (Dark/Light)

## Pages
* Main (index)
* Login/SignUp
* Products List
* Product Details
* Cart
* Favorites
* About


## Getting Started
1. Sign up in [sanity.io](https://www.sanity.io/) and get `projectId` and `token`

> **Warning**&nbsp;
> To work with sanity, people how live in Iran should run `VPN`.

2. Clone the project
  ```bash
  git clone https://github.com/ZahraMirzaei/online-shop.git
  ```
3. Install project dependencies
  ```bash
  npm install
  #or
  yarn add
  ```
4. Enter your `projectId` into `lib/client.ts`
5. Add `.env` file to root project, and enter your `token` into `.env`
  ```js
  NEXT_PUBLIC_SANITY_TOKEN= [ENTER YOUR TOKEN]
  ```
6. Go to sanity_onlineshop folder and open new terminal in this path, then
  ```bash
  sanity start
  ```
open `http://localhost:3333` and enter products.
 
7. Run the development server:

  ```bash
  npm run dev
  # or
  yarn dev
  ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
