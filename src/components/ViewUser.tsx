import { Container } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewUser() {
  const { id } = useParams();
  const [clients, setClients] = useState([]);

  const getData = async (uid: any) => {
    const res = await axios.get(`http://localhost/phpapi/member.php?id=${uid}`);
    setClients(res.data);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  console.log(clients);
  const name = clients.fullname;
  const email = clients.email;

  return (
    <>
      <Container>
        {id} {name} {email}
      </Container>
    </>
  );
}

export default ViewUser;
