export type Snowflake = Record<"timestamp" | "timestampWithEpoch" | "internalWorkerId" | "internalProcessId" | "increment", number>;

export const EPOCH = 1_420_070_400_000;

export const parseSnowflake = (snowflake: bigint | string): Snowflake => {
  if (typeof snowflake === "string") {
    snowflake = BigInt(snowflake);
  }

  const timestamp = Number(snowflake >> 22n);

  return {
    timestamp,
    timestampWithEpoch: timestamp + EPOCH,
    internalWorkerId: Number((snowflake & 0x3E_00_00n) >> 17n),
    internalProcessId: Number((snowflake & 0x1_F0_00n) >> 12n),
    increment: Number(snowflake & 0xF_FFn)
  };
};
