import {
    Container, Table, Title, Image, Group , Text, 
  } from "@mantine/core";
  import { useEffect, useState } from "react";
  import axios, { Axios } from "axios";
  import { ActionIcon } from '@mantine/core';
  import { ModalsProvider, modals } from '@mantine/modals';
  import { Icon3dCubeSphere, IconUser, IconSettings, } from '@tabler/icons-react';
import { Link } from "react-router-dom";
  
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
                <Icon3dCubeSphere  size="1rem" onClick={() => openDeleteModal(element.id)}/>
                </ActionIcon>
                <Link to={`/client/${element.id}`}>
                <ActionIcon variant="filled">
                <IconUser size="1rem" />
                </ActionIcon>
                </Link>
                <Link to={`/client/edit/${element.id}`}>
                <ActionIcon variant="filled">
                <IconSettings size="1rem" />
                </ActionIcon>
                </Link>
                </Group>
                </td>
                
        </tr>
    ));

    const openDeleteModal = (id: any) => modals.openConfirmModal({
        title: 'Delete ?',
        children: (
          <Text size="sm">คุณต้องการลบรายการนี้หรือไม่ ?
          </Text>
        ),
        labels: { confirm: 'ยืนยัน', cancel: 'ยกเลิก' },
        onCancel: () => console.log('Cancel'),
        onConfirm: async () => {
            const res = await axios.delete(`http://localhost/phpapi/member.php?id=${id}`);
            location.replace("/client");
        }
      });

    return (
      <Container maw={1200}>
        <ModalsProvider labels={{ confirm: 'Submit', cancel: 'Cancel' }}>
        </ModalsProvider>
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
export default ClientComponent;