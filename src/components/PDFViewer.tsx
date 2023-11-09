import ReactPDF, {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";
// Create styles

import font from "./text_font/THSarabun.ttf"
import font_bold from "./text_font/THSarabun Bold.ttf"
import font_italic from "./text_font/THSarabun Italic.ttf"
import font_bold_italic from "./text_font/THSarabun Bold Italic.ttf"
//เพิ่ม font เข้ามาให้อ่านภาษาไทยได้


// Font.register({
//   family: "THSarabun",
//   format: "truetype",
//   src: font 
// //ลงทะเบียน font ไว้ใน family

// // Font.register({ family: 'THSarabun',

// // fonts: [
// //   {
// //     src: `./text_font/THSarabun.ttf`
// //   },
// //   {
// //     src: `./text_font/THSarabun Bold.ttf`,
// //     fontWeight: 'bold'
// //   },
// //   {
// //     src: `./text_font/THSarabun Italic.ttf`,
// //     fontWeight: 'normal',
// //     fontStyle: 'italic'
// //   },
// //   {
// //     src: `./text_font/THSarabun Bold Italic.ttf`,
// //     fontWeight: 'bold',
// //     fontStyle: 'italic'
// //   }
// //   ]
// });

Font.register({ family: 'THSarabun', format: "truetype", 
    fonts: [
  { src: font}, // font-style: normal, font-weight: normal
  { src: font_bold, fontWeight: 'bold'},
  { src: font_italic, fontStyle: 'italic'},
  { src: font_bold_italic, fontStyle: 'italic', fontWeight: 'bold'},
 ]
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",

  },

  section: {
    margin: 10,
    padding: 10,
  },

  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },

  font: {
    fontFamily: 'THSarabun',
  },

  title: {
    position: "absolute",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "THSarabun",
    right: 30,
    top: 20,
  },

  formName: {
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "THSarabun",
    alignContent: "center",
    top: 70,
    left: 200,
  }

});


// Create Document Component
function BasicDocument() {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>สวท.ทบ.02</Text>
            <Text style={styles.formName}>คำร้องขอแก้ไขข้อมูลทางการศึกษา</Text>
          </View>
        </Page>
      </Document>
      
    </PDFViewer>
  );
}
export default BasicDocument;