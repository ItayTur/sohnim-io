# sohnim.io

Welcome to the **sohnim.io** repository! This README will guide you through setting up and running the project locally.

---

## Menu

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Set Up Environment Variables](#2-set-up-environment-variables)
  - [3. Install Dependencies](#3-install-dependencies)
  - [4. Start the Development Server](#4-start-the-development-server)
- [Continuous Deployment](#continuous-deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Prerequisites

Ensure you have the following installed on your machine:

1. **Yarn**: Package manager

---

## Getting Started

Follow these steps to get the project up and running locally:

### 1. Clone the Repository

### 2. Set Up Environment Variables

You will need to obtain the environment variables from a fellow dev. Once you have them, create a `.env` file in the root directory of the project:

```bash
touch .env
```

Add the required environment variables to the `.env` file. If you're unsure which variables to include, consult a team member or the project documentation.

### 3. Install Dependencies

Install the necessary dependencies by running:

```bash
yarn
```

### 4. Start the Development Server

Run the development server with:

```bash
yarn dev
```

If the default port (3000) is free, the app will be available at:

```
http://localhost:3000
```

If port 3000 is occupied, the server will attempt to use the next available port.

---

## Continuous Deployment

Every push to the main branch automatically deploys the app to Vercel. Ensure all changes are thoroughly tested before pushing to main.

---

## Project Structure

Here's a brief overview of the project's structure:

- `src/` - Contains the application's main source code.
- `public/` - Static files such as images, icons, and other assets.
- `.env` - Environment variables (not committed to the repository).

---

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Support

If you encounter any issues, please create a new issue in the [GitHub Issues](https://github.com/ItayTur/sohnim-io/issues) section of this repository.

Happy coding!

# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
