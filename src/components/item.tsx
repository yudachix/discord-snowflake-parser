import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export type ItemProps = {
  label: string,
  value: string,
  description?: string
};

export default function Item({ label, value, description }: ItemProps) {
  return (
    <Stack>
      <Stack direction="row" spacing={1}>
        <Typography fontSize="large">{label}:</Typography>
        <Typography fontSize="large" color="secondary.main">{value}</Typography>
      </Stack>
      <Typography marginX="1rem" color="text.secondary">{description}</Typography>
    </Stack>
  );
}
