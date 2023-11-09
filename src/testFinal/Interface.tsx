import React, { useState } from "react";
import { Anchor, Button, Group, PasswordInput, Text, TextInput } from "@mantine/core";

function InterfaceTest() {

  return (
    <>
      <form>
            {" "}
            <TextInput
              withAsterisk
              label="Name"
              placeholder="กรุณากรอกชือ"
            />
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
            />
            <PasswordInput
              label="Password"
              placeholder="Password"
            />
            <Group position="left" mt="md">
                <text>มีบัญชีอยู่แล้ว?</text>
                <Anchor href="/interface" color="orange">เข้าสู่ระบบ</Anchor>
                </Group>
                <Group position="right" mt="md">
                    <Button type="submit" color="orange">สมัครสมาชิก</Button>
                </Group>
          </form>
    </>
  );
}

export default InterfaceTest;
