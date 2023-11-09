import React, { useState } from "react";
import { Text } from "@mantine/core";

function DateTest() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Text
      ta={"center"}
      my={20}
      color="orange"
      fz={"xl"}
      fw={900}
      >
      ทดสอบบการสอบ
      </Text>
      <h1>{date.toDateString()}</h1>
    </>
  );
}

export default DateTest;
