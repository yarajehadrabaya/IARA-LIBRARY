# Project Name: IARA Library System

### What is the goal of this website?
This project is focused on creating a library system where students can easily browse, borrow,
and return books, while admins manage the collection of books. Admins will have special
access to add, edit, and remove books, while students can only borrow and return available
books. Anyone visiting the website can search and view the list of books, but only registered
users can borrow them. The system will be designed to work well on all devices and provide a
smooth, user-friendly experience.
### 🌍 Live Demo :
[planner you](https://planneryou.netlify.app/index.html) - "Responsive"
### Authors:
* 	👩💻Yara Jehad Rabaya
_______________________________________________________________________________________________________________________
### Project Type ?
Front end 
_______________________________________________________________________________________________________________________
# Pages:
## 1.HomePage Components and Technologies

The **HomePage** of the library system project is designed to provide an interactive and user-friendly interface. Below are the main components and technologies used for building it:

### 1. Sticky Navigation Bar (Navbar)
   - A sticky navigation bar is used to provide quick access to important sections, and it adapts dynamically based on the user's role (Admin or Student).
   - **Technology**: React, CSS (for styling), and dynamic rendering based on user roles.

### 2. Book Display Section
   - A section displaying a list of books, fetched from the API, where users can browse available books.
   - **Technology**: React, API calls (Google Books API or custom API), CSS Grid/Flexbox for layout, and responsive design for different screen sizes.

### 3. Search Bar
   - An interactive search bar is provided above the book display section, allowing users to search for books by title, author, or genre.
   - **Technology**: React, custom search logic, and CSS for styling.

### 4. User Role-Based Interface
   - The HomePage dynamically adapts based on whether the user is an Admin or a Student, offering different functionalities for each role.
   - **Technology**: React (conditional rendering), API for role checking, and state management (using hooks or Context API).

### 5. Responsive Design
   - The HomePage is fully responsive and adapts to different screen sizes, ensuring optimal viewing on mobile and desktop devices.
   - **Technology**: CSS Media Queries, Flexbox, and Grid layout.

### 6. API Integration
   - The HomePage communicates with the backend to fetch books and other data. It supports pagination, error handling, and real-time data updates.
   - **Technology**: Fetch API, Axios, or other HTTP request libraries, with error handling in React.

### 7. Styling
   - The styling of the page uses modern CSS techniques to ensure a clean and modern look, including background images, gradients, and hover effects.
   - **Technology**: CSS3, Flexbox, Grid, and custom themes based on the brand's color palette.

---

## Technologies Used:
- **React** (for building the user interface)
- **CSS** (for layout and styling)
- **Axios** / **Fetch API** (for making API calls)
- **React Router** (for navigation between pages)
- **React Hooks** (for managing state and side-effects)
- **CSS Flexbox/Grid** (for responsive layout)
- **Media Queries** (for mobile-first design)
_______________________________________________________________________________________________________________________
## AboutPage Components and Technologies

### 1. About Section
   - This section provides an overview of the library, including its mission and purpose, to engage visitors and encourage exploration of available resources.
   - **Technology**: React, CSS for styling, and basic HTML for structuring the content.


### 2. Contact Information
   - The contact section includes the library's phone number, allowing users to easily reach out for any queries.
   - **Technology**: React, Icons (emojis for phone symbol), and custom CSS styling.

### 3. Responsive Layout
   - The layout of the AboutPage is responsive, ensuring it looks great on both mobile and desktop devices.
   - **Technology**: CSS Media Queries for responsiveness, Flexbox or Grid for layout.

---

## Technologies Used:
- **React** (for building the user interface)
- **CSS** (for styling and layout)
- **Media Queries** (for mobile-first design)
- **Icons** (for phone symbol)
_______________________________________________________________________________________________________________________
# Book Detail Page Components and Technologies

## 1. Book Information Section
This section displays detailed information about the book, including the title, author, price, availability, and cover image. It provides users with all the information they need to decide whether they want to borrow the book.
- **Technology**: React, Axios (for fetching data from the API), CSS for layout and styling.

## 2. Borrow and Return Book Actions
Users can borrow or return books through this section. The interface provides a clear indication of whether the book is available, and users can easily borrow or return books with a simple button click.
- **Technology**: React, Axios (for making borrow and return requests), CSS for button styling, and confirmation popups for successful actions.

## 3. Star Rating System
A star rating system allows users to rate the book on a scale of 1 to 5 stars. The rating is stored in the browser's `localStorage` to persist the user's input across page reloads.
- **Technology**: React, CSS (for styling the star ratings), and LocalStorage (for persistence).

## 4. Responsive Design
The Book Detail Page is fully responsive, providing an optimal viewing experience across devices of various screen sizes.
- **Technology**: CSS Media Queries, Flexbox, and Grid layout to ensure the page adapts to different devices and screen resolutions.

## 5. Confirmation Popups
After borrowing or returning a book, a popup appears to confirm the action. This enhances the user experience by providing immediate feedback.
- **Technology**: React (for handling popups), CSS for styling, and state management (using React hooks).

## 6. API Integration
The Book Detail Page communicates with the backend API to fetch book details, borrow or return books, and manage ratings. The API integration ensures real-time data updates, error handling, and seamless user interactions.
- **Technology**: Axios (for API requests), React (for managing the UI based on the API response), and error handling in React to ensure smooth operation.

## 7. Styling
The styling of the page uses modern CSS techniques to create a clean, professional design with background images, gradients, and hover effects that enhance the overall user experience.
- **Technology**: CSS3, Flexbox, Grid, and custom themes based on the library system's brand and design guidelines.

# Technologies Used:

## React
For building the user interface and handling dynamic content.

## CSS
For layout and styling.

## Axios / Fetch API
For making API calls to fetch book details and interact with the backend.

## React Router
For navigation between pages in the library system.

## React Hooks
For managing state and side-effects, including managing the rating system and API responses.

## CSS Flexbox/Grid
For creating a responsive layout.

## Media Queries
For mobile-first design and ensuring a great experience on all screen sizes.

## LocalStorage
For storing the user's book rating and maintaining persistence across page reloads.

