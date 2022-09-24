import * as React from 'react';
import { NavLink } from "@remix-run/react";

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import Avatar from '@mui/joy/Avatar';

export default function Navigation() {
    return (
        <List size="sm" sx={{ '--List-item-radius': '8px' }}>
            <ListItem nested sx={{ p: 0 }}>
                <Box
                    sx={{
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        id="nav-list-browse"
                        textColor="neutral.500"
                        fontWeight={700}
                        sx={{
                            fontSize: '12px',
                            textTransform: 'uppercase',
                            letterSpacing: '.1rem',
                        }}
                    >
                        Clients
                    </Typography>
                    <IconButton
                        size="sm"
                        variant="plain"
                        color="primary"
                        sx={{ '--IconButton-size': '24px' }}
                    >
                    </IconButton>
                </Box>
                <List
                    aria-labelledby="nav-list-browse"
                    sx={{
                        '& .JoyListItemButton-root': { p: '8px' },
                    }}
                >
                    <ListItem sx={{ textDecoration: 'none' }}>
                        <NavLink to='0'>
                            <ListItemButton>
                                <ListItemDecorator sx={{ color: 'inherit' }}>
                                    <Avatar color="primary" variant="plain">C</Avatar>
                                </ListItemDecorator>
                                <ListItemContent>Client</ListItemContent>
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                </List>
            </ListItem>
        </List>
    );
}
