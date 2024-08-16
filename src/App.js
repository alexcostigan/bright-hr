import React, { useState, useEffect } from 'react';
import DocumentList from './components/DocumentList';
import data from './data.json';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const App = () => {
  const [documents] = useState(data);
  const [filter, setFilter] = useState('');
  const [displayDocuments, setDisplayDocuments] = useState(data);

  const handleSort = (key) => {
    const sortedDocs = [...documents].sort((a, b) => {
      if (key === 'added') {
        return new Date(a[key]) - new Date(b[key]);
      } else {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      }
    });
    setDisplayDocuments(sortedDocs);
  };

  useEffect(() => {
    const filteredDocuments = documents.filter((doc) =>
      doc.name.toLowerCase().includes(filter.toLowerCase())
    );
    setDisplayDocuments(filteredDocuments);
  }, [filter, documents]);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <TextField
          fullWidth
          label="Filter by filename"
          variant="outlined"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Button variant="contained" color="primary" onClick={() => handleSort('name')}>
            Sort by Name
          </Button>
          <Button variant="contained" color="secondary" onClick={() => handleSort('added')}>
            Sort by Date
          </Button>
        </Box>
        <DocumentList documents={displayDocuments} />
      </Box>
    </Container>
  );
};

export default App;