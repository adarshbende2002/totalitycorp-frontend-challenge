
# TotalityCorp Frontend Challenge

This project is a web application built using React.js that serves as an online store. It allows users to browse products, view product details, add items to their cart, and place orders. Below, you'll find detailed information about the project structure, usage, technology stack, and acknowledgments.

## Project Structure

The project structure is organized into several folders and components to maintain a clean and modular codebase.

### 1. Service Folder

The `service` folder contains API service files responsible for fetching product data from the "fakeStoreApi.com" API. It includes the following functions:

- `fetchAllProducts`: Fetches all products from the API.
- `fetchProductById`: Fetches a single product by its ID.
- `fetchProductByQuery`: Fetches products based on a search query.

### 2. Pages Folder

The `pages` folder implements a Pages approach for routing. It includes the following pages:

- `cart`: Displays cart items and order summary.
- `not-found`: Shows a 404 error page for invalid routes.
- `product`: Displays details of a single product.
- `products`: Lists all products fetched from the API.

### 3. Components Folder

The `components` folder contains reusable UI components used throughout the application. Notable components include:

- `Navbar`: The navigation bar that appears on every page.
- `ContentItem`: A reusable card component displaying item information, including image, title, price, and an "Add to Cart" button.

### 4. Context Folder

The application uses React context and hooks to manage the shopping cart. The cart state is accessible throughout the application, allowing users to add and remove items seamlessly.

## Usage

Feel free to explore the codebase, make changes, and customize it as needed for your use case. You can also extend the functionality by adding more features and improving the user interface.

## Credits

- [React.js](https://reactjs.org)
- [fakeStoreApi.com](https://fakeStoreApi.com)

## Acknowledgments

This project was created as part of the TotalityCorp Frontend Challenge. We'd like to express our gratitude to the React.js community and the fakeStoreApi.com team for providing the necessary tools and data to build this web application.

Thank you for considering this README for the TotalityCorp Frontend Challenge. If you have any questions or need further assistance, feel free to reach out to us at 20211a1212@bvrit.ac.in

# Tech Stack

This project is built using a variety of technologies and tools to create a modern and interactive web application. Below is a breakdown of the key technologies used in this project:

### 1. React.js

- **Description**: React.js is a popular JavaScript library for building user interfaces. It allows for the creation of reusable UI components and provides a virtual DOM for efficient rendering, making it an excellent choice for building interactive web applications.

- **Why React.js**: We chose React.js for its component-based architecture, which promotes code reusability and maintainability. React's ecosystem also includes tools like React Router and Context API that enhance routing and state management.

### 2. JSX (JavaScript XML)

- **Description**: JSX is a syntax extension for JavaScript that allows the mixing of HTML-like code within JavaScript code. It's used in React to define the structure and appearance of UI components.

- **Why JSX**: JSX simplifies the creation of React components by providing a familiar HTML-like syntax. This makes it easier to visualize and work with the UI structure directly in the JavaScript code.

### 3. CSS

- **Description**: Cascading Style Sheets (CSS) is a stylesheet language used for describing the presentation and design of web pages. In this project, CSS is used to style and layout the user interface elements.

- **Why CSS**: CSS is essential for creating visually appealing and responsive web applications. It allows for the customization of colors, fonts, spacing, and layout, ensuring a polished and user-friendly design.

## Additional Tools and Libraries

In addition to the core technologies mentioned above, the project may utilize various additional tools and libraries for specific purposes such as:

- **React Router**: This library is used for client-side routing, enabling navigation between different pages of the application without the need for full page refreshes.

- **React Context API**: Context is used for state management, particularly for managing the shopping cart state across different components of the application.

- **npm (Node Package Manager)**: npm is used for package management and dependency resolution. It simplifies the process of installing, updating, and managing project dependencies.


## Why This Tech Stack

The chosen tech stack offers several advantages for developing a web application like ours:

- **Modularity**: React's component-based architecture encourages modular development, making it easier to build and maintain complex user interfaces.

- **Performance**: React's virtual DOM and efficient rendering ensure a smooth and responsive user experience.

- **Community Support**: React has a large and active community, resulting in a wealth of resources, third-party libraries, and solutions for common challenges.

- **Customizability**: CSS allows for extensive customization of the user interface, ensuring that the application matches the desired design and branding.

By leveraging this tech stack, we aim to deliver a robust, user-friendly, and visually appealing web application for our users.
