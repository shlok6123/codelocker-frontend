import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

function EditSnippetModal({ snippet, open, onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('');
  const [code, setCode] = useState('');

  // This useEffect hook updates the form when a new snippet is selected for editing
  useEffect(() => {
    if (snippet) {
      setTitle(snippet.title);
      setLanguage(snippet.language);
      setCode(snippet.code);
    }
  }, [snippet]);

  const handleSave = () => {
    const updatedSnippet = {
      ...snippet, // Keep the original id and user
      title,
      language,
      code,
    };
    onSave(updatedSnippet);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Edit Snippet</DialogTitle>
      <DialogContent>
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
          rows={10}
          margin="normal"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditSnippetModal;