import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, BlobProvider } from '@react-pdf/renderer';
import { Center } from '@mantine/core';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDoc = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);


function PDFCreate() {
  return (
      <BlobProvider document={MyDoc}>
      {({ blob, url, loading, error }) => {
        // Do whatever you need with blob here
        return <Center><Text>สร้างคำร้องสำเร็จ</Text></Center>
      }}
    </BlobProvider>
  );
}

export default PDFCreate;