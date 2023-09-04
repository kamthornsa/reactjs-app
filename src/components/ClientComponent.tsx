import { Container, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <>
      <Container>
        <Title>รายชื่อสมาชิก</Title>
      </Container>
    </>
  );
}

export default ClientComponent;
