# AI Image Editor

_A full-stack AI-powered image editor built with **Next.js**, **Fabric.js**, **Tailwind CSS**, **ImageKit**, and **Shadcn UI**. This project provides a robust platform for editing images with a modern, responsive user interface and seamless integration with authentication and image processing services._

[Site](https://ai-image-editor-sxidsvit.vercel.app/)

---

## Features

- **Image Editing**: Utilize Fabric.js for interactive canvas-based image manipulation, including cropping, resizing, drawing, and applying filters.
- **AI-Powered Features**: Leverage AI capabilities for advanced image transformations (specific AI features depend on integrations with ImageKit or other APIs).
- **Responsive Design**: Built with Tailwind CSS and Shadcn UI for a sleek, mobile-friendly interface.
- **Authentication**: Integrated with Clerk for secure user authentication and authorization.
- **Image Hosting**: Uses ImageKit for efficient image storage, optimization, and delivery.
- **Unsplash Integration**: Access a vast library of high-quality images via the Unsplash API.
- **Backend**: Powered by Convex for real-time data management and serverless backend functionality.

## Tech Stack

- **Frontend**:
  - [Next.js](https://nextjs.org/docs) - React framework for server-side rendering and static site generation.
  - [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework for rapid UI development.
  - [Shadcn UI](https://ui.shadcn.com/docs) - Accessible and customizable UI components for React.
  - [Fabric.js](http://fabricjs.com/docs) - Powerful JavaScript library for interactive canvas-based graphics.
- **Backend**:
  - [Convex](https://docs.convex.dev) - Serverless backend platform for real-time data and logic.
- **Authentication**:
  - [Clerk](https://clerk.com/docs) - Authentication and user management platform.
- **Image Processing**:
  - [ImageKit](https://docs.imagekit.io) - Image optimization, storage, and transformation service.
- **Image Source**:
  - [Unsplash API](https://unsplash.com/developers) - API for accessing high-quality images.
- **Environment Management**:
  - [`.env` configuration](https://www.npmjs.com/package/dotenv) - Secure management of environment variables using the `dotenv` package.

## Getting Started

### Prerequisites

- **Node.js**: Version 18 or higher
- **npm** or **yarn**: For package management
- **Convex Account**: For backend deployment
- **Clerk Account**: For authentication setup
- **ImageKit Account**: For image processing and storage
- **Unsplash Account**: For accessing the Unsplash API

---

![]()<img src="demo.gif" alt="Table" width="846" height="451" style="display: block; margin-left:100px ;">

---

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/sxidsvit/ai-image-editor.git
   cd ai-image-editor
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the project root and add the following variables (replace placeholders with your actual keys):

   ```env
   # Convex
   CONVEX_DEPLOYMENT=
   NEXT_PUBLIC_CONVEX_URL=

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   CLERK_JWT_ISSUER_DOMAIN=

   # ImageKit
   NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=
   NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=
   IMAGEKIT_PRIVATE_KEY=

   # Unsplash
   NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=
   ```

4. **Deploy Convex Backend**:

   ```bash
   npx convex dev
   ```

   Follow the prompts to set up and deploy your Convex backend.

5. **Run the Development Server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open `http://localhost:3000` in your browser to view the application.

### Configuration

- **Clerk**: Set up your Clerk dashboard to obtain the `PUBLISHABLE_KEY`, `SECRET_KEY`, and `JWT_ISSUER_DOMAIN`. Configure the sign-in and sign-up URLs as needed.
- **ImageKit**: Obtain your `PUBLIC_KEY`, `PRIVATE_KEY`, and `URL_ENDPOINT` from the ImageKit dashboard for image uploads and transformations.
- **Unsplash**: Get your `ACCESS_KEY` from the Unsplash developer portal to enable image search and import.
- **Convex**: Ensure your Convex deployment is configured correctly for real-time data and backend logic.

## Usage

1. **Sign In/Sign Up**: Use Clerk to authenticate users

### 📬 Contact

Connect with the project maintainer:

[<img alt="Sergiy Antonyuk | LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />][linkedin]

[linkedin]: https://www.linkedin.com/in/sergiy-antonyuk/

#### 🙏 Acknowledgements

A heartfelt thank you to [RoadsideCoder](https://www.youtube.com/@RoadsideCoder) for their inspiring tutorials and invaluable contributions to the developer community.
