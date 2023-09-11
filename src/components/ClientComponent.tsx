import {
  ActionIcon,
  Container,
  Group,
  Table,
  Title,
  Text,
} from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { IconSettings, IconTrash } from "@tabler/icons-react";
import { ModalsProvider, modals } from "@mantine/modals";

function ClientComponent() {
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
      <td>
        <Group>
          <ActionIcon variant="filled">
            <IconSettings size="1rem" />
          </ActionIcon>
          <ActionIcon variant="filled">
            <IconSettings size="1rem" />
          </ActionIcon>
          <ActionIcon
            variant="filled"
            onClick={() => openDeleteModal(element.id)}
          >
            <IconTrash size="1rem" />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));
  const openDeleteModal = (id: any) =>
    modals.openConfirmModal({
      title: "Delete your profile",
      centered: true,
      children: <Text size="sm">คุณต้องการลบรายการนี้ ? {id}</Text>,
      labels: { confirm: "Delete account", cancel: "No don't delete it" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: async () => {
        const res = await axios.delete(
          `http://localhost/phpapi/member.php?id=${id}`
        );
        location.replace("/client");
      },
    });
  return (
    <>
      <ModalsProvider labels={{ confirm: "Submit", cancel: "Cancel" }}>
        <Container>
          <Title>รายชื่อสมาชิก</Title>
          <Table>
            <thead>
              <tr>
                <td>ชื่อ - นามสกุล</td>
                <td>E-mail</td>
                <td>อายุ</td>
                <td>จัดการข้อมูล</td>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Container>
      </ModalsProvider>
    </>
  );
}

export default ClientComponent;
