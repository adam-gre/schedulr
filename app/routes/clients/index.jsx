import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';

export default function Client() {
    let name = "Adam";
    return (
        <Sheet sx={{display: "flex", flexDirection: "column", gap: "10px", width: "100%", height: "100%", textAlign: "center", justifyContent: "center", alignItems: "center"}}>
            <Typography level="h2">Hey {name} 👋 </Typography>
            <Typography variant="soft" color="info"> Select a client to continue</Typography>
        </Sheet>);
}