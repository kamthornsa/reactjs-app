import { Container, Table, Image } from "@mantine/core";
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
  const picture = clients.picture;
  const age = clients.age;
  const password = clients.password;
  const timest = clients.timest;
  

  return (
    <>
      <Container maw={1200}>
      <Table horizontalSpacing="sm" verticalSpacing="sm">
            <tr>
                <td>ID</td>
                <td>ชื่อ</td>
                <td>email</td>
                <td>รหัสผ่าน</td>
                <td>รูปภาพ</td>
                <td>อายุ</td>
                <td>เวลา</td>
            </tr>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td><Image withPlaceholder maw={240} mx="auto" radius="md" src={clients.picture}/></td>
                <td>{age}</td>
                <td>{timest}</td>
            </tr>
        </Table>
      </Container>
    </>
  );
}

export default ViewUser;