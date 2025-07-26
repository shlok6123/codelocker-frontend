import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Container, CssBaseline } from '@mui/material';
import EditSnippetModal from './components/EditSnippetModal';

function App() {
  const [snippets, setSnippets] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const [snippetToEdit, setSnippetToEdit] = useState(null);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);

  const handleLogin = (username, password) => {
    setCurrentUser({ username, password });
  };

  useEffect(() => {
    if (!currentUser) return;

    const fetchSnippets = async () => {
      const headers = new Headers();
      const credentials = btoa(`${currentUser.username}:${currentUser.password}`);
      headers.append('Authorization', 'Basic ' + credentials);

      try {
        const response = await fetch('http://localhost:8080/api/snippets', {
          headers: headers,
        });
        if (!response.ok) {
          console.error("Failed to fetch snippets with status:", response.status);
          return;
        }
        const data = await response.json();
        setSnippets(data);
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    };

    fetchSnippets();
  }, [currentUser]);

  const addSnippet = async (newSnippet) => {
    const headers = new Headers();
    const credentials = btoa(`${currentUser.username}:${currentUser.password}`);
    headers.append('Authorization', 'Basic ' + credentials);
    headers.append('Content-Type', 'application/json');

    const response = await fetch('http://localhost:8080/api/snippets', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(newSnippet),
    });

    const data = await response.json();
    setSnippets([...snippets, data]);
  };

  const handleDelete = async (id) => {
    const headers = new Headers();
    const credentials = btoa(`${currentUser.username}:${currentUser.password}`);
    headers.append('Authorization', 'Basic ' + credentials);

    if (window.confirm("Are you sure you want to delete this snippet?")) {
      const response = await fetch(`http://localhost:8080/api/snippets/${id}`, {
        method: 'DELETE',
        headers: headers,
      });

      if (response.ok) {
        setSnippets(snippets.filter(snippet => snippet.id !== id));
      } else {
        alert("Failed to delete snippet.");
      }
    }
  };

  const handleOpenEditDialog = (snippet) => {
    setSnippetToEdit(snippet);
    setEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
    setSnippetToEdit(null);
  };

  const handleUpdateSnippet = async (updatedSnippet) => {
    const headers = new Headers();
    const credentials = btoa(`${currentUser.username}:${currentUser.password}`);
    headers.append('Authorization', 'Basic ' + credentials);
    headers.append('Content-Type', 'application/json');

    const response = await fetch(`http://localhost:8080/api/snippets/${updatedSnippet.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(updatedSnippet),
    });

    if (response.ok) {
      const data = await response.json();
      // Update the list with the new data
      setSnippets(snippets.map(s => s.id === data.id ? data : s));
      handleCloseEditDialog();
    } else {
      alert("Failed to update snippet.");
    }
  };


  const handleLogout = () => {
    setCurrentUser(null);
  };


return (
  <>
    <CssBaseline />
    <Header currentUser={currentUser} onLogout={handleLogout} />
    <Container>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              currentUser ? (
                <HomePage
                  snippets={snippets}
                  onAddSnippet={addSnippet}
                  onDeleteSnippet={handleDelete}
                  onEditSnippet={handleOpenEditDialog}
                />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </Container>

    {/* The Edit Modal will live here, outside the main content */}
    {snippetToEdit && (
       <EditSnippetModal
         snippet={snippetToEdit}
         open={isEditDialogOpen}
         onClose={handleCloseEditDialog}
         onSave={handleUpdateSnippet}
       />
    )}
  </>
);
}

export default App;