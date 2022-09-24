import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import IconButton from '@mui/joy/IconButton';

import {ModeToggle} from './ModeToggle';

import ScheduleSendTwoTone from '@mui/icons-material/ScheduleSendTwoTone';
import React from 'react';

export const Header = () => {
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1.5,
                }}
            >
                <IconButton
                    size="sm"
                    variant="solid"
                    sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
                >
                    <ScheduleSendTwoTone />
                </IconButton>
                <Typography component="h1" fontWeight="xl">
                    schedulr
                </Typography>
            </Box>
            {/* <TextField
                size="sm"
                placeholder="Search anything…"
                startDecorator={<SearchRoundedIcon color="primary" />}
                sx={{
                    flexBasis: '500px',
                    display: {
                        xs: 'none',
                        sm: 'flex',
                    },
                }}
            /> */}
            <Avatar>AG</Avatar>
        </React.Fragment>
    )
}