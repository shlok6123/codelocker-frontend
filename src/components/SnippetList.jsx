import { Card, CardContent, Typography, Box } from '@mui/material'; 
function SnippetList({ snippets }) {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        My Snippets
      </Typography>
      {snippets.map((snippet) => (
        <Card key={snippet.id} variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{snippet.title}</Typography>
            <Typography color="text.secondary" sx={{ mb: 1.5 }}>
              Language: {snippet.language}
            </Typography>
            <Box component="pre" sx={{ bgcolor: '#f5f5f5', p: 1, borderRadius: 1 }}>
              <code>{snippet.code}</code>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
  }
  
  export default SnippetList;