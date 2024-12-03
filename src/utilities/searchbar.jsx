import * as React from 'react';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


//styled components
const Search = styled('div')(() => ({
  position: 'relative',
  borderRadius: 'var(--8)', // Border radius
  backgroundColor: '#f0f0f0', // Grey background
  width: '160px', // Fixed width
  height: '28px', // Hug height
  display: 'flex',
  alignItems: 'center',
  padding: '4px 8px 4px 8px', // Padding for inner spacing
  gap: '8px', // Space between elements
  opacity: 1, // Full transparency
}));

const SearchIconWrapper = styled('div')(() => ({
  height: 'auto',
  minHeight: '28px',
  display: 'flex',
  alignItems: 'center',
  color : 'grey'// Grey color for the search icon
}));

const SlashIconWrapper = styled('div')(( ) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  color: 'grey', // Grey color for the slash icon
  fontSize: '10px', // font size for the slash icon
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? 'black' : 'grey',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 0, 1, 0), // No extra left padding
    width: '100%',
    fontSize: '12px', // font size for input text
  },
}));


//searchbar in header
export default function SearchBar() {
    
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase 
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      <SlashIconWrapper>⌘</SlashIconWrapper>
      <SlashIconWrapper>/</SlashIconWrapper>
    </Search>
  );
}
