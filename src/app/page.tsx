"use client";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { ChangeEventHandler, useState } from "react";
import { Snowflake, parseSnowflake } from "@/utils/snowflake";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Item from "@/components/item";
import Time from "@/components/time";
import Help from "@/components/help";

export default function Page() {
  const [json, setJson] = useState(false);
  const [snowflake, setSnowflake] = useState<Snowflake>();
  const [helperText, setHelperText] = useState(" ");
  const error = helperText.trim().length > 0;
  const resetHelperText = (): void => setHelperText(" ");
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ currentTarget: { value } }) => {
    value = value.trim();

    setSnowflake(undefined);

    if (value.length === 0) {
      resetHelperText();

      return;
    }

    if (/\D/.test(value)) {
      setHelperText("Snowflakeとして解析できません");

      return;
    }

    resetHelperText();

    const snowflake = parseSnowflake(value);

    setSnowflake(snowflake);
  };

  return (
    <Stack
      paddingY={2}
      spacing={2}
      alignItems="flex-start"
    >
      <TextField
        fullWidth
        error={error}
        helperText={helperText}
        onChange={handleChange}
      />
      {snowflake && (
        <Stack width="100%" spacing={2} alignItems="flex-start">
          <Time
            label="Snowflakeが作成された時間"
            timestamp={snowflake.timestampWithEpoch}
          />
          <FormControlLabel
            control={(
              <Switch
                checked={json}
                onChange={(_event, checked) => setJson(checked)}
              />
            )}
            label="結果をJSONで表示する"
          />
          {json && (
            <TextField
              disabled
              multiline
              fullWidth
              sx={{
                ".Mui-disabled": {
                  color: "text.primary",
                  WebkitTextFillColor: "var(--mui-palette-text-primary) !important"
                }
              }}
              value={JSON.stringify(snowflake, undefined, 2)}
            />
          )}
          {!json && (
            <Paper sx={{ width: "100%" }}>
              <Stack padding={2} spacing={1} alignItems="flex-start">
                <Item
                  label="Timestamp"
                  value={snowflake.timestamp.toString()}
                  description="Discordエポックから経過したミリ秒数"
                />
                <Item
                  label="Timestamp with Discord Epoch"
                  value={snowflake.timestampWithEpoch.toString()}
                  description="Discordエポック + Discordエポックから経過したミリ秒数"
                />
                <Item label="Internal worker ID" value={snowflake.internalWorkerId.toString()} />
                <Item label="Internal process ID" value={snowflake.internalProcessId.toString()} />
                <Item label="Increment" value={snowflake.increment.toString()} />
              </Stack>
            </Paper>
          )}
        </Stack>
      )}
      <Help />
    </Stack>
  );
}
