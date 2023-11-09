import {
    Container,
    TextInput,
    Button,
    Group,
    Box,
    PasswordInput,
    Anchor,
  } from "@mantine/core";
  import { useForm } from "@mantine/form";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";
  
  function AuthenticationForm() {
    const navigate = useNavigate();
    const form = useForm({
      initialValues: {
        email: "",
        password: "",
      },
      validate: {
        email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
        password: (value) =>
          value !== null ? "Please Enter Your Password" : null,
      },
    });
  
    return (
      <>
        <Container>
          <Box maw={500} mx="auto">
            <form
            //   onSubmit={form.onSubmit(async (values) => {
            //     const response = await axios.post(
            //       "http://localhost/phpapi/member.php",
            //       {
            //         email: values.email,
            //         password: values.password,
            //       }
            //     );
            //     alert("สมัครสมาชิกเรียบร้อย");
            //     navigate("/client");
            //     // router.replace("./create/files/");
            //   })}
            >
              {" "}

              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
              />
              <PasswordInput
                label="Password"
                placeholder="Password"
                {...form.getInputProps("password")}
              />
                <Group position="left" mt="md">
                <text>ต้องการลงทะเบียนใช้งานหรือไม่?</text>
                <Anchor href="/register" color="orange">ลงทะเบียน</Anchor>
                </Group>
                <Group position="right" mt="md">
                    <Button type="submit" color="orange">เข้าสู่ระบบ</Button>
                </Group>
            </form>
          </Box>
        </Container>
      </>
    );
  }
  
  export default AuthenticationForm;
  