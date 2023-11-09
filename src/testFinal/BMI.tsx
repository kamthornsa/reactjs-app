import React, { useState } from "react";
import { Text } from "@mantine/core";

function BMITest() {
  const weight = 90;
  const height = 180;
  const result = weight/(height*2);

  return (
    <>
      <h1>{result}</h1>
    </>
  );
}

export default BMITest;
