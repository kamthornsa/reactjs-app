import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export function HomeComponent() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <IconPaperclip size={30} /> ระบบยื่นคำร้อง
            </Title>

            <Text color="dimmed" mt="md" >
              ระบบทดสอบการยื่นคำร้องออนไลน์
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl" color="yellow">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>สะดวก</b> – ให้ความรวดเร็วจากการใช้ระบบ Internet ในการตรวจสอบข้อมูล!!
              </List.Item>
              <List.Item>
                <b>ปลอดภัย</b> – เนื่องจากใช้ระบบข้อมูลในการเก็บเอกสารไร้กังวลเรื่อง เอกสารหาย หรือ เอกสารเสียสภาพ!!
              </List.Item>
              <List.Item>
                <b>ใช้งานง่าย</b> – เพียงกรอกข้อมูลเล็กน้อยและรอยืนยัน เอกสารก็พร้อมปลิ้นทันที!!
              </List.Item>
            </List>

            <Group mt={30}>
              <Button color="orange" radius="xl" size="md" className={classes.control}>
                เลือกแบบฟอร์ม
              </Button>
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
}
