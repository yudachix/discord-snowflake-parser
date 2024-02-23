import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

export default function NoScriptAlert() {
  return (
    <Box component="noscript" width="100%">
      <Alert severity="error" variant="filled">JavaScript must be enabled for the tool to work</Alert>
    </Box>
  );
}
