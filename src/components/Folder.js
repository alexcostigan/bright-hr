import React, { useState } from 'react';
import DocumentList from './DocumentList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import FolderIcon from '@mui/icons-material/Folder';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

const Folder = ({ folder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ListItemButton onClick={toggleFolder}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={folder.name} />
        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <DocumentList documents={folder.files} />
      </Collapse>
    </>
  );
};

export default Folder;