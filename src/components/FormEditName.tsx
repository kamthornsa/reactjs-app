import {
  Container,
  TextInput,
  Button,
  Group,
  Box,
  Select,
  Anchor,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { string } from "yup";

function FormEditNameComponent() {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      typeName: "",
      homeNumber: "",
      villageNumber: "",
      allayWay: "",
      road: "",
      district: "",
      canton: "",
      province: "",
      zipcode: "",
      phoneNumber: "",
      editType: "",
    },
  });

  const [clients, setClients] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost/project/teacher.php")
            .then((response) => {
                setClients(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(clients);
    console.log(clients.teacher_FristName, clients.teacher_LastName);
    const RegisterFullname = clients.teacher_FristName + clients.teacher_LastName
    // const rows = clients.map((element) => (
    //     <tr key={element.teach_Id}>
    //         <td>{element.teacher_FristName}</td>
    //         <td>{element.teacher_LastName}</td>
    //     </tr>
    // ));
    const outputArray = clients.map(item => ({
      value: item.teacher_FristName,
      label: item.teacher_LastName
    }));
  // const testJson = {
  //   type: "test",
  //   homeNumber_new: "",
  //   villageNumber_new: values.villageNumber,
  //   allayWay_new: values.allayWay,
  //   road_new: values.road,
  //   district_new: values.district,
  //   canton_new: values.canton,
  //   province_new: values.province,
  //   zipcode_new: values.zipcode,
  //   phoneNumber_new: values.phoneNumber,
  //   edit_type: values.editType};

  return (
    <>
      <Container>
        <Box maw={500} mx="auto">

          <form
            onSubmit={form.onSubmit(async (values) => {
              const response = await axios.post(
                "http://localhost/project/teacher.php",
                {
                  type: values.typeName,
                  homeNumber_new: values.homeNumber,
                  villageNumber_new: values.villageNumber,
                  allayWay_new: values.allayWay,
                  road_new: values.road,
                  district_new: values.district,
                  canton_new: values.canton,
                  province_new: values.province,
                  zipcode_new: values.zipcode,
                  phoneNumber_new: values.phoneNumber,
                  edit_type: values.editType,
                }
              );
              alert("สร้างรายการเรียบร้อย");
              navigate("/services");
              // router.replace("./create/files/");
            })}
          >
            {" "}

          <Select
              withAsterisk
              label="กรุณาเลือกประเภทของการแก้ไข"
              placeholder="เลือก"
              data={[
                { value: 'ขอเปลี่ยนชื่อ', label: 'ขอเปลี่ยนชื่อ' },
                { value: 'ขอเปลี่ยนนามสกุล', label: 'ขอเปลี่ยนนามสกุล' },
                { value: 'ขอเปลี่ยนคำนำหน้า', label: 'ขอเปลี่ยนคำนำหน้า' },
                { value: 'ขอเปลี่ยนยศ', label: 'ขอเปลี่ยนยศ' },
              ]}
              {...form.getInputProps("editType")}
            />

            {/* <TextInput
              withAsterisk
              label="กรุณากรอกประเภทของการแก้ไข"
              placeholder="ขอเปลี่ยนชื่อ"
              {...form.getInputProps("editType")}
            /> */}

            <TextInput
              withAsterisk
              label="ภาคเรียนการศึกษา"
              placeholder="กรุณากรอกภาคเรียนการศึกษา // 2566"
              {...form.getInputProps("typeName")}
            />
            <TextInput
              withAsterisk
              label="บ้านเลขที่"
              placeholder="100/13"
              {...form.getInputProps("homeNumber")}
            />
            <TextInput
              withAsterisk
              label="หมู่"
              placeholder="1"
              {...form.getInputProps("villageNumber")}
            />
            <TextInput
              withAsterisk
              label="ซอย"
              placeholder="อภัย"
              {...form.getInputProps("allayWay")}
            />
            <TextInput
              withAsterisk
              label="ถนน"
              placeholder="ขนมหวาน"
              {...form.getInputProps("road")}
            />
            <TextInput
              withAsterisk
              label="ตำบล"
              placeholder="กาฬสินธุ์"
              {...form.getInputProps("district")}
            />
            <TextInput
              withAsterisk
              label="อำเภอ"
              placeholder="เมือง"
              {...form.getInputProps("canton")}
            />
            <TextInput
              withAsterisk
              label="จังหวัด"
              placeholder="กาฬสินธุ์"
              {...form.getInputProps("province")}
            />
            <TextInput
              withAsterisk
              label="รหัสไปรษณีย์"
              placeholder="46000"
              {...form.getInputProps("zipcode")}
            />
            <TextInput
              withAsterisk
              label="เบอร์โทรศัพย์มือถือ"
              placeholder="0123456789"
              {...form.getInputProps("phoneNumber")}
            />
            <label>เจ้าหน้าที่งานทะเบียน</label>
            {/* <tbody>{rows}</tbody> */}
            <Select
              withAsterisk
              label="เลือกพนักงานทะเบียน"
              placeholder="เลือก"
              data={outputArray}
              {...form.getInputProps("RegisterMember")}
            />
            <Group position="right" mt="md">
              <Button type="submit" color="orange">ยืนยันการยื่นคำร้อง</Button>
              <Anchor href="/services" color="orange">ยกเลิก</Anchor>
            </Group>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default FormEditNameComponent;
