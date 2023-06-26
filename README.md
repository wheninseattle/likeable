# Likeable

[Deployed Site](https://likeable.vercel.app) - Best viewed on mobile devices.

> A like/dislike based rating app for providing feedback on design options.
# Goals

- Allow designers, architects, and other stakeholders to provide feedback on design options at a time that is convenient for them.
- Reveal the group sentiment of design options by using a machine learning algorithm to assign a valence to the various clusters of similar parameter values.

## Introduction

Welcome to Likeable! This web application is designed to facilitate the feedback process for design options in the context of design firms. It provides a convenient platform for designers, architects, and other stakeholders to evaluate and express their preferences regarding various design options.

The app utilizes a machine learning algorithm to analyze user feedback and assign a valence to different clusters of design options, thereby revealing the overall group sentiment. This information can be invaluable in the decision-making process and helps stakeholders understand the preferences and trends within their design community.

## Technology Stack

The Likeable web app is built using the following technologies:

- [Grasshopper](https://www.rhino3d.com/) - A parametric modeling plug-in for Rhino3D, used to generate design options based on various parameters.
- [SciKit-Learn](https://scikit-learn.org/) - A machine learning library for Python, used for the machine learning algorithm and reward-based system.
- [Portly](https://github.com/your-portly/portly) - A library for implementing reward-based systems in machine learning algorithms.
- [Prisma](https://www.prisma.io/) - A modern database toolkit, used for managing the application's databases.
- [Next.js](https://nextjs.org/) - A React framework for building server-rendered applications, used as the web server and frontend framework.
- [Material-UI (MUI)](https://mui.com/) - A popular React component library, used for a set of baseline components and UI elements.

## See Also:

- [Proxy server for database requests] (https://github.com/fx-wood/mesh-server)

## Getting Started

To run the Likeable web app locally on your machine, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/likeable.git
```

Install the dependencies:

```bash
cd likeable
npm install
```

Configure the necessary environment variables. See the env.example file for a list of required variables.

Start the development server:

```bash
Copy code
npm run dev
```

Open your web browser and visit http://localhost:3000 to access the Likeable application.

Feel free to explore the codebase, make modifications, and contribute to the project!

License
This project is licensed under the MIT License.

Acknowledgements
Special thanks to the contributors of the technologies used in this project.
