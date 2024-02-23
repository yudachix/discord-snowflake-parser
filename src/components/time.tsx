import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import dayjs from "@/utils/dayjs";

export type TimeProps = {
  label: string,
  timestamp: number
};

export default function Time({ label, timestamp }: TimeProps) {
  const time = dayjs(timestamp).locale("ja");

  return (
    <Stack spacing={1}>
      <Typography
        component="span"
        variant="h6"
      >
        {label}
      </Typography>
      <Typography
        color="secondary"
        component="time"
        dateTime={time.toISOString()}
        variant="h5"
      >
        {time.format("LLLL zzz")}
      </Typography>
    </Stack>
  );
}
