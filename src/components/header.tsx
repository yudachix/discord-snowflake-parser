import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ backgroundColor: "background.paper" }}
    >
      <Toolbar
        disableGutters
      >
        <Typography color="text.primary" variant="h4" component="h1">Discord Snowflake Parser</Typography>
      </Toolbar>
    </AppBar>
  );
}
