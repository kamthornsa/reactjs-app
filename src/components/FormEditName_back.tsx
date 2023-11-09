import {
  Container,
  TextInput,
  Button,
  Group,
  Box,
  Anchor,
  Select,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const initialValues = [
//   { label: 'ขอเปลี่ยนชื่อ', checked: false},
//   { label: 'ขอเปลี่ยนนามสกุล', checked: false},
//   { label: 'ขอเปลี่ยนคำนำหน้า', checked: false},
//   { label: 'ขอเปลี่ยนยศ', checked: false},
// ];

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
      // editData: "test",
      editType: "",
    },
  //   validate: {
  //     // type: (value) => (/^\S+@\S+$/.test(value) ? null : "ข้อมูลไม่ถูกต้อง")
  //     // homeNumber: (value) => (/^\S+@\S+$/.test(value) ? null : "ข้อมูลไม่ถูกต้อง"),
  //     // villageNumber: (value) => (/^\S+@\S+$/.test(value) ? null : "ข้อมูลไม่ถูกต้อง"),
  //     // allayWay: (value) => (/^\S+@\S+$/.test(value) ? null : "ข้อมูลไม่ถูกต้อง"),
  //     // road: (value) => (/^\S+@\S+$/.test(value) ? null : "ข้อมูลไม่ถูกต้อง"),
  //     // district: (value) => (/^\S+@\S+$/.test(value) ? null : "ข้อมูลไม่ถูกต้อง"),
  //     // canton: (value) => (/^\S+@\S+$/.test(value) ? null : "ข้อมูลไม่ถูกต้อง"),
  //     // province: (value) => (/^\S+@\S+$/.test(value) ? null : "ข้อมูลไม่ถูกต้อง"),
  //     // zipcode: (value) => (/^\S+@\S+$/.test(value) ? null : "ข้อมูลไม่ถูกต้อง"),
  //     // phoneNumber: (value) => (/^\S+@\S+$/.test(value) ? null : "ข้อมูลไม่ถูกต้อง"),
  //     // editData: (value) => (/^\S+@\S+$/.test(value) ? null : "ข้อมูลไม่ถูกต้อง"),
  //     // editType: (value) => (/^\S+@\S+$/.test(value) ? null : "ข้อมูลไม่ถูกต้อง"),
  //     // // age: (value) =>
  //     //   value < 18 ? "You must be at least 18 to register" : null,
  // //     confirmPassword: (value, values) =>
  // //       value !== values.password ? "Passwords did not match" : null,
  //   },
  });

  // const [values, handlers] = useListState(initialValues);
  // const items = values.map((value, index) => (
  //     <Checkbox
  //       mt="xs"
  //       ml={33}
  //       label={value.label}
  //       checked={value.checked}
  //       onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
  //     />
  //   ));


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
                  // edit_data: values.editData,
                  edit_type: values.editType,
                }
              );
              alert("สร้างคำร้องเรียบร้อยเรียบร้อย");
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
              ]}
              {...form.getInputProps("editType")}
            />
            
            <TextInput
              withAsterisk
              label="ภาคเรียน"
              placeholder="กรุณากรอกภาคเรียน // 2566"
              {...form.getInputProps("typeName")}
            />
            <TextInput
              withAsterisk
              label="บ้านเลขที่"
              placeholder="'111/11'"
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
            {/* <TextInput
              label="แก้ไข้ข้อมูลที่ต้องการ"
              placeholder="----------------------------------------------------------------------------------------------"
              {...form.getInputProps("editData")}
            /> */}

              <Group position="left" mt="md">
                  <Button type="submit" color="orange">แก้ไขข้อมูล</Button>
                  <Anchor href="/services" color="orange">ยกเลิก</Anchor>
              </Group>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default FormEditNameComponent;
