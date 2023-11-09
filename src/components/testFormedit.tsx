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
  import React from "react";
  import { useNavigate } from "react-router-dom";
//   import { string } from "yup";
  
  function TestContentEdit() {
    const navigate = useNavigate();
    const form = useForm({
      initialValues: {
        testName: "",
        testPassword: "",
      },
    });
  
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
                  "http://localhost/project/test.php",
                  {
                    name: values.testName,
                    password: values.testPassword,
                  }
                );
                alert("สร้างรายการเรียบร้อย");
                // navigate("/services");
                // router.replace("./create/files/");
              })}
            >
              {" "}
  
            {/* <Select
                withAsterisk
                label="กรุณาเลือกประเภทของการแก้ไข"
                placeholder="เลือก"
                data={[
                  { value: 'ขอเปลี่ยนชื่อ', label: 'ขอเปลี่ยนชื่อ' },
                  { value: 'ขอเปลี่ยนนามสกุล', label: 'ขอเปลี่ยนนามสกุล' },
                ]}
                {...form.getInputProps("editType")}
              /> */}
  
              {/* <TextInput
                withAsterisk
                label="กรุณากรอกประเภทของการแก้ไข"
                placeholder="ขอเปลี่ยนชื่อ"
                {...form.getInputProps("editType")}
              /> */}
              {/* <TextInput
                withAsterisk
                label="ภาคเรียนการศึกษา"
                placeholder="กรุณากรอกภาคเรียนการศึกษา // 2566"
                {...form.getInputProps("typeName")}
              /> */}
              <TextInput
                withAsterisk
                label="ใส่ชื่อ"
                placeholder="นาย A"
                {...form.getInputProps("testName")}
              />
              <TextInput
              withAsterisk
              label="รหัสผ่าน"
              placeholder="123"
              {...form.getInputProps("testPassword")}
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
  
  export default TestContentEdit;
  