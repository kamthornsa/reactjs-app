import {
    Container, Table, Title, Image, Group ,
  } from "@mantine/core";
  import { useEffect, useState } from "react";
  import axios from "axios";
  import { ActionIcon } from '@mantine/core';
  import { Icon3dCubeSphere, IconAdjustments, IconSettings, IconSubmarine } from '@tabler/icons-react';
  
  export function ClientComponent() {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost/phpapi/member.php")
            .then((response) => {
                setClients(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(clients);
    const rows = clients.map((element) => (
        <tr key={element.id}>
            <td>{element.fullname}</td>
            <td>{element.email}</td>
            <td>{element.age}</td>
            <td>{element.password}</td>
            <td><Image withPlaceholder maw={240} mx="auto" radius="md" src={element.picture}/></td>
            <td>{element.timest}</td>
            <td>
                <Group>
                <ActionIcon variant="filled" color="red">
                <Icon3dCubeSphere  size="1rem" />
                </ActionIcon>
                <ActionIcon variant="filled" color="blue">
                <IconSubmarine size="1rem" />
                </ActionIcon>
                <ActionIcon variant="filled">
                <IconSettings size="1rem" />
                </ActionIcon>
                </Group>
                </td>
                
        </tr>
    ));
    return (
      <Container maw={1200}>
        <Title>รายชื่อ</Title>
        <Table>
            <thead>
                <tr>
                    <td>ชื่อ-นามสกุล</td>
                    <td>Email</td>
                    <td>อายุ</td>
                    <td>รหัสผ่าน</td>
                    <td>รูปภาพ</td>
                    <td>เวลา</td>
                    <td>ปุ่ม</td>
                </tr>
            </thead>
                <tbody>{rows}</tbody>
        </Table>
      </Container>
    );
  }
  