import React from 'react';
import DocumentItem from './DocumentItem';
import Folder from './Folder';
import List from '@mui/material/List';

const DocumentList = ({ documents }) => {
  return (
    <List>
      {documents.map((doc, index) => (
        doc.type === 'folder' ? (
          <Folder key={index} folder={doc} />
        ) : (
          <DocumentItem key={index} document={doc} />
        )
      ))}
    </List>
  );
};

export default DocumentList;