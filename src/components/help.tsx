import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import Box from "@mui/material/Box";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Help() {
  const help = (
    <Stack spacing={2}>
      <Stack spacing={1}>
        <Typography variant="h6" component="h2">Snowflakeとは？</Typography>
        <Typography>SnowflakeとはTwitterによって発表されたIDの形式のことです。Snowflakeは雪の結晶という意味であり、雪の結晶もIDのように一つ一つが違う形を持ちます。</Typography>
      </Stack>
      <Stack spacing={1}>
        <Typography variant="h6" component="h2">Discordエポックとは？</Typography>
        <Typography>Discordエポックとは2015年を基点とした時間です。UNIXタイムスタンプではこの基点は1420070400000と表現されます。</Typography>
      </Stack>
    </Stack>
  );

  return (
    <>
      <Accordion
        variant="outlined"
        sx={{ width: "100%" }}
      >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
        >
          <Typography>ヘルプ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {help}
        </AccordionDetails>
      </Accordion>
      <Box component="noscript" width="100%">
        <Paper
          variant="outlined"
          sx={{
            width: "100%",
            padding: 1
          }}
        >
          {help}
        </Paper>
      </Box>
    </>
  );
}
