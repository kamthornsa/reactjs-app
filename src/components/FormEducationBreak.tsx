import {
    Container,
    TextInput,
    Button,
    Group,
    Box,
    Select,
    Anchor,
    Textarea,
  } from "@mantine/core";
  import { useForm } from "@mantine/form";
  import axios from "axios";
  import React from "react";
  import { useNavigate } from "react-router-dom";
  import { string } from "yup";
  
  function FormEducationBreakComponent() {
    const navigate = useNavigate();
    const form = useForm({
      initialValues: {
        education_Type: "",
        education_Year: "",
        reason_User: "",
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
                  "http://localhost/project/teacher.php",
                  {
                    educationType: values.education_Type,
                    educationYear: values.education_Year,
                    reason: values.reason_User,
                    
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
                label="กรุณาเลือกระดับการศึกษา"
                placeholder="เลือก"
                data={[
                  { value: 'ปวส.', label: 'ระดับ ปวส.' },
                  { value: 'ป.ตรี', label: 'ระดับ ปริญญาตรี' },
                  { value: 'บัณทิต', label: 'ระดับ บัณดิตศึกษา' },
                ]}
                {...form.getInputProps("education_Type")}
              />
  
              <TextInput
                withAsterisk
                label="ปีการศึกษา"
                placeholder="กรุณากรอกปีการศึกษา // 2566"
                {...form.getInputProps("education_Year")}
              />

              <Textarea
                withAsterisk
                label="เนื่องจาก"
                placeholder="-------------เหตุผล-----------------"
                {...form.getInputProps("reason_User")}
              />

              {/* <TextInput
                withAsterisk
                label="เนื่องจาก"
                placeholder="....................................."
                {...form.getInputProps("reason_User")}
              /> */}

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
  
  export default FormEducationBreakComponent;
  