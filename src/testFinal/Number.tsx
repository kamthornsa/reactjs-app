import React, { useState } from "react";
import { Select, Text } from "@mantine/core";


function NumberTest() {
  let numbers: number[] = [1,4,5,9,2];
  let round = 0;
  let total = 0;
  let result = 0;
  for (let i=0; i < 5; i++) {
    round = round + i;
    total = total + numbers[i];
    result = total / round;
} 
  return (
    <>
    <Text>คำเฉลี่ยของเลขคือ</Text><div>{result}</div>
    </>
  );
}

export default NumberTest;
