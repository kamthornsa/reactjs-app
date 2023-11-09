import React, { useState } from "react";
import { Select, Table, Text } from "@mantine/core";


function UserTest() {
  // let numbers: number[] = [1,4,5,9,2];
  // let round = 0;
  // let total = 0;
  // let result = 0;
  // for (let i=0; i < 5; i++) {
  //   round = round + i;
  //   total = total + numbers[i];
  //   result = total / round;
  const users = [
    {id: 1, name: 'Alice', email: 'alice@example.com'},
    {id: 2, name: 'Bob', email: 'bob@example.com'},
    {id: 3, name: 'Charlie', email: 'charlie@example.com'},
    {id: 4, name: 'Diana', email: 'diana@example.com'},
  ]; 
  const rows = users.map((test) => (
    <tr>
        <td>{test.id}</td>
        <td>{test.name}</td>
        <td>{test.email}</td>
    </tr>
));
  return (
    <>
    <Table>
    <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                </tr>
            </thead>
                <tbody>{rows}</tbody>
    </Table>
    </>
  )
}

export default UserTest;
