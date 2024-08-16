import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const DocumentItem = ({ document }) => {
  return (
    <ListItem>
      <ListItemText
        primary={document.name}
        secondary={`Type: ${document.type} | Added: ${document.added}`}
      />
    </ListItem>
  );
};

export default DocumentItem;