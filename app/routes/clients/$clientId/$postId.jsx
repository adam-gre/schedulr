import React, { useRef } from 'react';
import { useParams, useLocation, useNavigate } from "@remix-run/react";

import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Textarea from '@mui/joy/Textarea';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Avatar from '@mui/joy/Avatar';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const { Link, Outlet, Form } = require("@remix-run/react");

export function loader({ params }) {

  const clientId = params.clientId;
  const postId = params.postId;
  return { clientId, postId };
}

export function action({ params }) {
  const id = params.clientId;
  return null;
}

export default function Post() {
  const location = useLocation();
  const params = useParams();
  const [textLength, setTextLength] = React.useState(0);

  const types = ["Scheduled", "Draft", "Failed", "Posted"];
  const colours = ["primary", "neutral", "danger", "success"];

  return (
    <React.Fragment>
      <Card variant="outlined" sx={{ display: "flex", flexDirection: "column", width: "30%", padding: "3rem" }}>
        <Box sx={{ borderBottom: "solid 2px rgba(0,0,0,0.15)", paddingBottom: "1rem", marginBottom: "1rem" }}>
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
            Edit Post
          </Typography>
        </Box>
        <Form method="post">
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", borderBottom: "solid 2px rgba(0,0,0,0.15)", paddingBottom: "1rem", marginBottom: "1rem" }}>
              <TextField level="h2" value={`Post name (${params.postId})`} sx={{ fontWeight: "700" }} />
              <Textarea 
                minRows={15} 
                // startDecorator={
                //   <Box sx={{ display: 'flex', gap: 0.5 }}>
                //     <IconButton variant="outlined" color="neutral" onClick={addEmoji('👍')}>
                //       👍
                //     </IconButton>
                //     <IconButton variant="outlined" color="neutral" onClick={addEmoji('🏖')}>
                //       🏖
                //     </IconButton>
                //     <IconButton variant="outlined" color="neutral" onClick={addEmoji('😍')}>
                //       😍
                //     </IconButton>
                //   </Box>
                // }
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit turpis in sollicitudin aliquam. Ut ullamcorper, neque mattis pharetra maximus, erat massa ornare risus, vel sollicitudin ex dolor ut nibh. Vestibulum quis rutrum velit. Sed tempor consectetur scelerisque. Pellentesque iaculis pretium diam at mollis. Ut tristique diam eget sem malesuada, in sodales urna tincidunt. Nullam mauris purus, tempus vitae molestie ut, commodo non diam. Duis pulvinar nisl id nibh tempor, quis volutpat felis tincidunt. Duis pharetra tempus leo.
                      Vestibulum interdum lobortis tempor. Etiam mattis quam eget velit vestibulum, mattis ullamcorper ipsum tempus. Quisque lacinia sit amet lacus at placerat. Aenean finibus consequat nunc, eu imperdiet massa varius quis. Integer ac hendrerit est, fermentum vestibulum sapien. Pellentesque a commodo magna. In urna ligula, sagittis ac nisi in, semper semper ipsum. Pellentesque hendrerit lorem ac metus posuere ultricies luctus quis lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam vehicula fringilla elit vitae maximus. Mauris ac nulla porta, mattis metus in, malesuada nunc. Proin diam diam, consectetur nec mi ut, vestibulum pulvinar dui. Duis placerat consequat nulla id consectetur. Proin in diam non urna varius tempus." />

          </Box>
          {/* TODO: Fix the below not navigating properly */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px"}}>
            <Button variant="solid" color="primary" type="">Schedule Post</Button>
            <Link to={`/clients/${params.clientId}`}>
            <Button variant="solid" color="neutral" type="">Save Without Scheduling</Button>
            </Link>
            <Link to={`/clients/${params.clientId}`}>
              <Button variant="plain" color="danger" type="reset">Discard Changes</Button>
            </Link>
          </Box>
        </Form>
      </Card>
    </React.Fragment>
  );
}