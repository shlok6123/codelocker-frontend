import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
// The function receives "onAddSnippet" as a prop
function SnippetForm({ onAddSnippet }) {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the browser from reloading

    // Call the function from the parent with the form data
    onAddSnippet({ title, language, code });

    // Clear the form fields after submitting
    setTitle('');
    setLanguage('');
    setCode('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Add a New Snippet
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Language"
        variant="outlined"
        fullWidth
        margin="normal"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      />
      <TextField
        label="Code"
        variant="outlined"
        fullWidth
        multiline
        rows={6}
        margin="normal"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Save Snippet
      </Button>
    </Box>
  );
}

export default SnippetForm;