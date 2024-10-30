# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Pokedex Application by Anthony Guzmán

## Overview

This project is a React application that consumes the public Pokémon API ([PokeAPI](https://pokeapi.co/)). It allows users to view a paginated list of Pokémon, search for Pokémon by name, filter by type, and view detailed information about each Pokémon. The application is designed to provide an intuitive user experience with responsive design.

## Features

- **Fetch Pokémon Data**: The app fetches data from the PokeAPI, displaying a list of Pokémon with pagination (20 Pokémon per page).
- **Search Functionality**: Users can search for Pokémon by their name or id using a search bar.
- **Type Filtering**: Users can filter Pokémon by type (e.g., Water, Fire).
- **Pokémon Details**: Clicking on a Pokémon small card reveals a detailed view with its name, image, abilities, types, and stats.
- **Favorites**: Users can mark Pokémon as favorites, which are then stored in local storage. (localstorage in this case simulating and DB)
- **Dark Mode**: A toggle allows users to switch between light and dark themes.
- **Loading Indicators**: The app displays loading indicators while data is being fetched. (mayority of the components)

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **Axios**: For making HTTP requests to the API.
- **Tailwind CSS**: For styling the application.
- **Jest & React Testing Library**: For unit testing components.

## Getting Started

Follow these instructions to set up and run the application locally:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Anthonyjgr/pokedex.git

2. **Navigate into the project directory**:

cd pokedex

1. **Install the dependencies:**:

npm install

1. **Start the development server**:

npm run dev

1. **Run test**:

npm run test
