import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Container, CssBaseline } from '@mui/material';

function App() {
  const [snippets, setSnippets] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (username, password) => {
    setCurrentUser({ username, password });
  };

  useEffect(() => {
    if (!currentUser) return;
    const fetchSnippets = async () => {
      const headers = new Headers();
      // Use credentials from the state instead of hardcoded values
      const credentials = btoa(`${currentUser.username}:${currentUser.password}`);
      headers.append('Authorization', 'Basic ' + credentials); // Base64 encode credentials

      // 2. Make the authenticated request
      try {
        const response = await fetch('http://localhost:8080/api/snippets', {
          method: 'GET',
          headers: headers,
        });

        if (!response.ok) {
            // If response is not 200 OK, don't try to parse JSON
            console.error("Authentication failed with status:", response.status);
            return;
        }

        const data = await response.json();
        setSnippets(data);
      } catch (error) {
          console.error("There was an error fetching the data:", error);
      }
      
    };

    fetchSnippets();
  }, []);



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
    // Add the new snippet to our existing list in the UI
    setSnippets([...snippets, data]);
  };


    
  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <main>
        <Routes>
        <Route path="/" element={
            currentUser 
            ? <HomePage snippets={snippets} onAddSnippet={addSnippet} /> 
            : <LoginPage onLogin={handleLogin} />
        } />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage />} />
    </Routes>
        </main>
      </Container>
    </>
  );
}
export default App;