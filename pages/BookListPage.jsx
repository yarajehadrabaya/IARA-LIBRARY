import React, { useState, useEffect } from 'react';
import './BookListPage.css';

function BookListPage() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editBookId, setEditBookId] = useState(null);
  const [formData, setFormData] = useState({ title: '', author: '', price: '' });
  const [addFormData, setAddFormData] = useState({ title: '', author: '', price: '' });

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch('https://ahllibrary.azurewebsites.net/api/Book/GetBooks', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setBooks(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      const response = await fetch(`https://ahllibrary.azurewebsites.net/api/Book/DeleteBook/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setBooks(books.filter(book => book.id !== id));
        alert('Book deleted successfully.');
      } else {
        alert('Failed to delete the book.');
      }
    }
  };

  const handleEdit = async (id) => {
    if (editBookId === id) {
      if (window.confirm('Are you sure you want to save changes?')) {
        const response = await fetch(`https://ahllibrary.azurewebsites.net/api/Book/Editbook/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setEditBookId(null);
          fetchBooks();
          alert('Book updated successfully.');
        } else {
          alert('Failed to update the book.');
        }
      }
    } else {
      setEditBookId(id);
      const book = books.find((b) => b.id === id);
      setFormData({ 
        title: book.title || '', 
        author: book.author || '', 
        price: book.price || ''
      });
    }
  };

  const handleAdd = async () => {
    if (!addFormData.title || !addFormData.author || !addFormData.price) {
      alert('Please fill in all fields.');
      return; 
    }
  
    if (window.confirm('Are you sure you want to add this book?')) {
      const data = new FormData();
      data.append('title', addFormData.title);
      data.append('author', addFormData.author);
      data.append('price', parseFloat(addFormData.price));
  
      const response = await fetch('https://ahllibrary.azurewebsites.net/api/Book/AddBook', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: data,
      });
  
      if (response.ok) {
        setAddFormData({ title: '', author: '', price: '' });
        fetchBooks();
        alert('Book added successfully.');
      } else {
        const errorData = await response.json();
        console.error('Error adding book:', errorData);
        alert(`Failed to add the book: ${errorData.message || 'Unknown error'}`);
      }
    }
  };
  
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-background">
      <div className="book-list-container">
        <h1>Library Book List</h1>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a book..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <table className="book-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Image</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book.id} className="book-row">
                <td>{editBookId === book.id ? <input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} /> : book.title}</td>
                <td>{editBookId === book.id ? <input value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} /> : book.author}</td>
                <td>{editBookId === book.id ? <input value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} /> : book.price}</td>
                <td>{book.photoPath ? <img src={book.photoPath} alt={book.title} /> : 'No image available'}</td>
                <td>{book.isAvaliable ? 'Available' : 'Borrowed'}</td>
                <td>
                  <button className="edit-button" onClick={() => handleEdit(book.id)}>
                    {editBookId === book.id ? 'Save' : 'Edit'}
                  </button>
                  <button className="delete-button" onClick={() => handleDelete(book.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="add-book-form">
          <h2>Add a new book</h2>
          <input
            type="text"
            placeholder="Title"
            value={addFormData.title}
            onChange={(e) => setAddFormData({ ...addFormData, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author"
            value={addFormData.author}
            onChange={(e) => setAddFormData({ ...addFormData, author: e.target.value })}
          />
          <input
            type="text"
            placeholder="Price"
            value={addFormData.price}
            onChange={(e) => setAddFormData({ ...addFormData, price: e.target.value })}
          />
          <button className="add-button" onClick={handleAdd}>Add Book</button>
        </div>
      </div>
    </div>
  );
}

export default BookListPage;
