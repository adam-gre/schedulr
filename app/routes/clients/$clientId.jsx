import React from 'react';
import { useParams } from "@remix-run/react";

import Sheet from '@mui/joy/Sheet';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import Tab from '@mui/joy/Tab';
import TabList from '@mui/joy/TabList';
import TabPanel from '@mui/joy/TabPanel';

import EventAvailable from '@mui/icons-material/EventAvailable';
import DesignServices from '@mui/icons-material/DesignServices';
import Error from '@mui/icons-material/Error';
import Check from '@mui/icons-material/Check';
import FormatListBulleted from '@mui/icons-material/FormatListBulleted';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const { Link, Outlet } = require("@remix-run/react");

export function loader({ params }) {
  const id = params.clientId;
  return id;
}

// export function action({ params }) {
//   const id = params.clientId;
// }

export default function Client() {
  const params = useParams();
  const id = params.clientId;

  const types = ["Scheduled", "Draft", "Failed", "Posted"];
  const colours = ["primary", "neutral", "danger", "success"];

  return (
    <React.Fragment>
      <Sheet sx={{display: "flex", flexDirection: "row", height: "100%", gap: "20px"}}>
        <Sheet sx={{display: "flex", flexDirection: "column", width: "100%"}}>
          <Tabs aria-label="Display Modes" defaultValue={0}>
            <TabList sx={{maxWidth: "150px", alignSelf: "end"}}>
              <Tab value={0}><FormatListBulleted /></Tab>
              <Tab value={1}><CalendarViewWeekIcon /></Tab>
              <Tab value={2}><CalendarMonthIcon /></Tab>
            </TabList>
          
            <TabPanel sx={{display: "flex", flexDirection: "column", gap: "10px"}} value={0}>
          {
            types.map((type, i) => {
              return (
                <Link to={i.toString()} key={i} prefetch="intent">
                  <Card variant="outlined" row sx={{gap: "10px", alignItems: "center", '&:hover': { boxShadow: 'md', cursor: 'pointer', opacity: "0.75" }}}>
                    <Chip variant="soft" color={colours[i]} startDecorator={<EventAvailable />}>{type}</Chip>
                    <Typography fontWeight="lsg">Post Name</Typography>        
                  </Card>
                </Link>
              )
            })
          }
          </TabPanel>
          
          </Tabs>
          {/* <Card row sx={{gap: "10px", alignItems: "center", '&:hover': { boxShadow: 'md', cursor: 'pointer', opacity: "0.75" }}}>
            <Chip variant="soft" color="neutral" startDecorator={<DesignServices />}>Draft</Chip>
            <Typography fontWeight="lg">Post Name</Typography>
          </Card>
          <Card row sx={{gap: "10px", alignItems: "center", '&:hover': { boxShadow: 'md', cursor: 'pointer', opacity: "0.75" }}}>
            <Chip variant="soft" color="danger" startDecorator={<Error />}>Failed</Chip>
            <Typography fontWeight="lg">Post Name</Typography>
          </Card>
          <Card row sx={{gap: "10px", alignItems: "center", '&:hover': { boxShadow: 'md', cursor: 'pointer', opacity: "0.75" }}}>
            <Chip variant="soft" color="success" startDecorator={<Check />}>Posted</Chip>
            <Typography fontWeight="lg">Post Name</Typography>
          </Card> */}
        </Sheet>
        <Outlet />
      </Sheet>
    </React.Fragment>
  );
}