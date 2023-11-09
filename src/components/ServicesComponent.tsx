import {
  createStyles,
  Title,
  Text,
  Container,
  rem,
  Box,
  NavLink,
  Center,
  Anchor,
} from "@mantine/core";
import { IconGauge, IconFingerprint, IconChevronRight, IconActivity } from "@tabler/icons-react";
import { useState } from "react";
import { BasicDocument } from "./PDFViewer";
// import testFormEdit from "./testFormedit";


const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

//---------------FormBox------------------------//
const data = [
  { icon: IconGauge, label: 'Dashboard', description: 'Item with description' },
  {
    icon: IconFingerprint,
    label: 'Security',
    rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
  },
  { icon: IconActivity, label: 'Activity' },
];
//---------------FormBox------------------------//

export function ServicesComponent() {
  const { classes, theme } = useStyles();
  const [active, setActive] = useState(0);

  //---------------FormBox------------------------//
  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      icon={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
    />
  ));
  //---------------FormBox------------------------//
  // const features = mockdata.map((feature) => (

  return (
    <>
    <Container size="lg" py="xl">
      {/* <Group position="center">
        <Badge variant="filled" size="lg" color="orange">
          Best company ever
        </Badge>
      </Group> */}
      <Box
        sx={(theme) => ({
          display: 'block',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
          color: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[7],
          textAlign: 'center',
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          cursor: 'pointer',
        })}
      >
      <Title order={2} className={classes.title} variant="filled" color="orange" ta="center" mt="sm">
        กรุณาเลือกแบบคำร้อง
      </Title>

      <Text c="dimmed" ta="center" mt="md">
        กรุณาเลือกแบบคำร้องที่ท่านต้องการเพื่อดำเนินการยื่นคำร้องต่อ
      </Text>

            <Center 
              sx={(theme) => ({
                '&:hover': {
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
                },})}><Anchor href="/testDate" color="orange" mt="md">
            เอกสาร 1
            </Anchor></Center>
            <Center
              sx={(theme) => ({
                '&:hover': {
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
                },})}><Anchor href="/services" color="orange" mt="md">
            เอกสาร 2
            </Anchor></Center>
            <Center
              sx={(theme) => ({
                '&:hover': {
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
                },})}><Anchor href="/formROR" color="orange" mt="md">
            เอกสาร 3
            </Anchor></Center>
            <Center
              sx={(theme) => ({
                '&:hover': {
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
                },})}><Anchor href="/formEducationBreak" color="orange" mt="md">
            คำร้องขอลาพักการเรียน
            </Anchor></Center>
            <Center
              sx={(theme) => ({
                '&:hover': {
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
                },})}><Anchor href="/formEditName" color="orange" mt="md">
            คำร้องขอแก้ไขข้อมูลทางการศึกษา
          </Anchor></Center>  
          {/* <BasicDocument />  */}
      </Box>
      {/* <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid> */}
    </Container>
    {/* //---------------FormBox------------------------// */}
    {/* <Box w={220} ta="center">{items}</Box>; */}
    {/* //---------------FormBox------------------------// */}
    </>
  );
}
