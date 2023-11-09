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
  
  function FormRepetitionOrReplacementComponent() {
    const navigate = useNavigate();
  
    // const [clients, setClients] = useState([]);
    //   useEffect(() => {
    //       axios
    //           .get("http://localhost/project/teacher.php")
    //           .then((response) => {
    //               setClients(response.data);
    //           })
    //           .catch((error) => {
    //               console.log(error);
    //           });
    //   }, []);
    //   console.log(clients);
    //   console.log(clients.teacher_Id, clients.teacher_FristName, clients.teacher_LastName);
    // //   const RegisterFullname = clients.teacher_FristName + clients.teacher_LastName
    //   // const rows = clients.map((element) => (
    //   //     <tr key={element.teach_Id}>
    //   //         <td>{element.teacher_FristName}</td>
    //   //         <td>{element.teacher_LastName}</td>
    //   //     </tr>
    //   // ));
    //   const outputArray = clients.map(item => ({
    //     value: item.teacher_Id,
    //     label: item.teacher_FristName + item.teacher_LastName
    //   }));
      
    //   const [clientsAdvisor, setClientsAdvisor] = useState([]);
    //   useEffect(() => {
    //       axios
    //           .get("http://localhost/project/findAdvisor.php")
    //           .then((response) => {
    //             setClientsAdvisor(response.data);
    //           })
    //           .catch((error) => {
    //               console.log(error);
    //           });
    //   }, []);
    //   console.log(clientsAdvisor);
    //   console.log(clientsAdvisor.teacher_Id, clientsAdvisor.teacher_FristName, clientsAdvisor.teacher_LastName);
    // //   const RegisterFullname = clients.teacher_FristName + clients.teacher_LastName
    //   // const rows = clients.map((element) => (
    //   //     <tr key={element.teach_Id}>
    //   //         <td>{element.teacher_FristName}</td>
    //   //         <td>{element.teacher_LastName}</td>
    //   //     </tr>
    //   // ));
    //   const outputArrayAdvisor = clientsAdvisor.map(item => ({
    //     value: item.teacher_Id,
    //     label: item.teacher_FristName + item.teacher_LastName
    //   }));

    //   const [clientsDean, setClientsDean] = useState([]);
    //   useEffect(() => {
    //       axios
    //           .get("http://localhost/project/findDean.php")
    //           .then((response) => {
    //             setClientsDean(response.data);
    //           })
    //           .catch((error) => {
    //               console.log(error);
    //           });
    //   }, []);
    //   console.log(clientsDean);
    //   console.log(clientsDean.teacher_Id, clientsDean.teacher_FristName, clientsDean.teacher_LastName);
    // //   const RegisterFullname = clients.teacher_FristName + clients.teacher_LastName
    //   // const rows = clients.map((element) => (
    //   //     <tr key={element.teach_Id}>
    //   //         <td>{element.teacher_FristName}</td>
    //   //         <td>{element.teacher_LastName}</td>
    //   //     </tr>
    //   // ));
    //   const outputArrayDean = clientsDean.map(item => ({
    //     value: item.teacher_Id,
    //     label: item.teacher_FristName + item.teacher_LastName
    //   }));

    //   const [clientsHeadRegisTration, setClientsHeadRegisTration] = useState([]);
    //   useEffect(() => {
    //       axios
    //           .get("http://localhost/project/findHeadRegistration.php")
    //           .then((response) => {
    //             setClientsHeadRegisTration(response.data);
    //           })
    //           .catch((error) => {
    //               console.log(error);
    //           });
    //   }, []);
    //   console.log(clientsHeadRegisTration);
    //   console.log(clientsHeadRegisTration.teacher_Id, clientsHeadRegisTration.teacher_FristName, clientsHeadRegisTration.teacher_LastName);
    // //   const RegisterFullname = clients.teacher_FristName + clients.teacher_LastName
    //   // const rows = clients.map((element) => (
    //   //     <tr key={element.teach_Id}>
    //   //         <td>{element.teacher_FristName}</td>
    //   //         <td>{element.teacher_LastName}</td>
    //   //     </tr>
    //   // ));
    //   const outputArrayHeadRegisTration = clientsHeadRegisTration.map(item => ({
    //     value: item.teacher_Id,
    //     label: item.teacher_FristName + item.teacher_LastName
    //   }));

      const [clientsStudent, setClientsStudent] = useState([]);
      useEffect(() => {
          axios
              .get("http://localhost/project/findStudent.php")
              .then((response) => {
                setClientsStudent(response.data);
              })
              .catch((error) => {
                  console.log(error);
              });
      }, []);
      console.log(clientsStudent);

      // const testStudent = async () => {
      //   const res = await fetch(clientsStudent[0])
      //   const data = await res.json();
      //   return data 
      // }


      //   const payload = await testStudent();

      //   let dataDisplay = payload.map((object) => {
      //     const {student_Id, fristName}
      //   })
      // }
      // console.log(clientsStudent[1].student_Id);

      // console.log(clientsStudent.fristName, clientsStudent.lastName, clientsStudent.student_Number, clientsStudent.student_major, 
      //   clientsStudent.faculty, clientsStudent.student_Id, clientsStudent.title);
      
      
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
    

    const form = useForm({
      initialValues: {
        studentId: clientsStudent.student_Id,
        gradeName: "",
        titleName: clientsStudent.title,
        ROR_Type: "",
        studentfristName: clientsStudent.fristName,
        studentlastName: clientsStudent.lastName,
        studentNumber: clientsStudent.student_Number,
        studentmajor: clientsStudent.student_major,
        studentfaculty: clientsStudent.student_faculty,
        subjectName: "",
        
        // advisorName: "",
        // deanName: "",
        // headRegisterName: "",
        // registerName: "",
      },
    });

    console.log(form);
  
    return (
      <>
        <Container>
          <Box maw={500} mx="auto">
  
            <form
              onSubmit={form.onSubmit(async (values) => {
                const response = await axios.post(
                  "http://localhost/project/addFormROR.php",
                  {
                    student_Id: values.studentId,
                    grade: values.gradeName,
                    title: values.titleName,
                    request_ROR_type: values.ROR_Type,
                    student_fristName: values.studentfristName,
                    student_lastName: values.studentlastName,
                    student_Number: values.studentNumber,
                    student_Major: values.studentmajor,
                    student_faculty: values.studentfaculty,
                    // subject: values.subjectName,
                    
                    // advisor: values.advisorName,           
                    // dean: values.deanName,
                    // headRegister: values.headRegisterName,
                    // register: values.registerName,         
                  }
                );
                alert("สร้างรายการเรียบร้อย");
                navigate("/services");
                // router.replace("./create/files/");
              })}
            >
              {" "}
  
            {/* <Select
                withAsterisk
                label="กรุณาเลือกระดับการศึกษา"
                placeholder="เลือก"
                data={[
                  { value: 'ปวส', label: 'ปวส.' },
                  { value: 'ปริญญาตรี', label: 'ปริญญาตรี' },
                  { value: 'บัณฑิตศึกษา', label: 'บัณฑิตศึกษา' },
                ]}
                {...form.getInputProps("student_Type")}
              /> */}
  
              {/* <TextInput
                withAsterisk
                label="ภาคเรียนการศึกษา"
                placeholder="กรุณากรอกภาคเรียนการศึกษา // 1-2"
                {...form.getInputProps("seasonName")}
              /> */}

              {/* <TextInput
                withAsterisk
                label="ปีเรียนการศึกษา"
                placeholder="กรุณากรอกปีเรียนการศึกษา // 2566"
                {...form.getInputProps("yearName")}
              /> */}

              <Select
                withAsterisk
                label="กรุณาเลือกประเภทการเรียน"
                placeholder="เลือก"
                data={[
                  { value: 'เรียนซ้ำ', label: 'เรียนซ้ำ' },
                  { value: 'เรียนแทน', label: 'เรียนแทน' },
                ]}
                {...form.getInputProps("ROR_Type")}
              />

              <Select
                withAsterisk
                label="กรุณาเลือกผลการศึกษา"
                placeholder="เลือก"
                data={[
                  { value: 'F', label: 'F' },
                  { value: 'U', label: 'U' },
                  { value: 'E', label: 'E' },
                  { value: 'D', label: 'D' },
                  { value: 'D+', label: 'D+' },
                ]}
                {...form.getInputProps("gradeName")}
              />

              {/* <Select
                withAsterisk
                label="กรุณาเลือกรายวิชา"
                placeholder="เลือก"
                data={[
                  { value: 'แคล1', label: 'แคล1' },
                  { value: 'AI', label: 'AI' },
                ]}
                {...form.getInputProps("subjectName")}
              /> */}
              
              <label>อาจารย์ที่ปรึกษา</label>
              {/* <tbody>{rows}</tbody> */}
              {/* <Select
                withAsterisk
                label="เลือกอาจารย์ที่ปรึกษา"
                placeholder="เลือก"
                data={outputArrayAdvisor}
                {...form.getInputProps("advisorName")}
              />
              <label>คณะบดี</label>
              <Select
                withAsterisk
                label="เลือกคณะบดี"
                placeholder="เลือก"
                data={outputArrayDean}
                {...form.getInputProps("deanName")}
              />
              <label>คณะบดี</label>
              <Select
                withAsterisk
                label="เลือกคณะบดี"
                placeholder="เลือก"
                data={outputArrayHeadRegisTration}
                {...form.getInputProps("headRegisterName")}
              />
              <label>เจ้าหน้าที่งานทะเบียน</label>
              <Select
                withAsterisk
                label="เลือกพนักงานทะเบียน"
                placeholder="เลือก"
                data={outputArray}
                {...form.getInputProps("registerName")}
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
  
  export default FormRepetitionOrReplacementComponent;
  