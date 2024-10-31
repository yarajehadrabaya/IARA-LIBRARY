import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./CategoriesPage.css"; // تأكد من وجود التنسيق الخاص بالصفحة

const CategoriesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = location.state || {};
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&key=AIzaSyC5f_EqdT6hnq-W_KsUnZkbEI5Hvum6wkE`;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setBooks(data.items || []);
      } catch (error) {
        setErrorMessage("Error fetching books: " + error.message);
      }
    };

    if (category) fetchBooks();
  }, [category]);

  const handleMoreClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setShowModal(false);
  };

  return (
    <section className="our-books" id="books">
      <div className="container">
        <div className="title">
          <h2 style={{
            color: 'rgb(0, 0, 0)',
            fontSize: '40px',
            textAlign: 'center',
            position: 'relative',
            display: 'inline-block',
            marginTop: '90px',
            marginBottom: '10px'
          }}>
            Books in {category}
            <span style={{
              content: '""',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: '-10px',
              width: '80%',
              height: '6px',
              backgroundColor: 'orange',
              borderRadius: '5px'
            }}></span>
          </h2>
        </div>

        <div className="books">
          {books.length > 0 ? (
            books.map(book => (
              <div key={book.id} className="course">
                
                  <img
                    src={book.volumeInfo.imageLinks?.thumbnail || "/img/default-book.png"}
                    alt="Book Cover"
                    className="card-img-top img-fluid"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/img/default-book.png";
                    }}
                  />
                  <p className="title" style={{ color: "black" }}>{book.volumeInfo.title}</p>
                  <p className="author">By: {book.volumeInfo.authors?.join(', ')}</p>
              
                <button onClick={() => handleMoreClick(book)}>More</button>
              </div>
            ))
          ) : (
            <p>{errorMessage}</p>
          )}
        </div>

        {/* نافذة التفاصيل */}
        {showModal && selectedBook && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h3>{selectedBook.volumeInfo.title}</h3>
              <p>{selectedBook.volumeInfo.description || "No description available."}</p>
             
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoriesPage;

