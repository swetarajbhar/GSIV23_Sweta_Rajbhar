import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import { useState,useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import { searchMovieList } from '../../api/listing';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: 'var(--disabled)',
    marginRight: theme.spacing(0),
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: '0 !important',
    textAlign: 'start',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(0),   
        width: 'auto',
    },     
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--light-gray)', // Change the color of the SearchIcon
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'var(--gray)', // Change the color of the search text
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '70ch',
        },
    },
    '& .MuiInputBase-input::placeholder': {
        color: 'var(--light-gray)', // Change the color of the placeholder text
        fontWeight: 'bold',
    },
}));

const TopNavBar = ({isListingPageOpen = false,isDetailsPageOpen = false,setMovieDataOnChange}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [searchText, setSearchText] = useState('');

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleSearchInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchData = ()=>{
        const searchParams = {
            query: searchText
        }
        searchMovieList(searchParams).then((res)=>{
            setMovieDataOnChange(res.data);
        }).catch((error)=>{
            setSearchText('');
        })
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const navigate = useNavigate()
    const onHomeClick = () => {
        navigate('/list')
    }
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={onHomeClick}>
                <IconButton
                    size="large"
                    aria-label="home"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="black"
                >
                    <HomeIcon />
                </IconButton>
            </MenuItem>
        </Menu>
    );

    useEffect(()=>{
        handleSearchData();
    },[searchText])    

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "white" }}>
                <Toolbar>
                    {isListingPageOpen &&
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'search' }}
                                value={searchText}
                                onChange={handleSearchInputChange}
                            />
                        </Search>
                    }{
                        isDetailsPageOpen &&
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            color="var(--gray)"
                            fontWeight="bold"
                        >
                            Movie Details
                        </Typography>
                    }
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="home"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={onHomeClick}
                            color="black"
                        >
                            <HomeIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="home"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={onHomeClick}
                            color="black"
                        >
                            <HomeIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}

export default TopNavBar;