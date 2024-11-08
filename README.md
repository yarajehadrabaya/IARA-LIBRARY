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
