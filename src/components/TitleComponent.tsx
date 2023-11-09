import { Text } from "@mantine/core";
import React from "react";

function TitleComponent({ data }: any) {
  return (
    <Text
      ta={"center"}
      my={20}
      color="orange"
      fz={"xl"}
      fw={900}
    >
      {data}
    </Text>
  );
}

export default TitleComponent;
