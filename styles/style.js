import { StyleSheet, TouchableWithoutFeedback } from "react-native";



export const styles = StyleSheet.create(
  {
     Container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
     ViewHeader: {
      backgroundColor: 'rgba(47,79,79,1)',
      height: 200,
      width: '100%',
      justifyContent: "center",
      alignItems: "center"
    },
    TextHeader: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 22
    },

    ViewContent: {
      backgroundColor: 'rgba(25, 25,112, 1)',
      height: 800,
      width: '100%',
      justifyContent: "center",
      alignItems: "center"
    },
    TextContent: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 22
    },

    ViewFooter: {
      backgroundColor: 'rgba(3, 77, 73 ,30)',
      height: 100,
      width: '100%',
      justifyContent: "center",
      alignItems: "center"
    },
    TextFooter: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 22
    },



    /* calculadora */
    ViewCalc: {
      backgroundColor: 'rgba(0, 0, 128 ,1)',
      height: '80%',
      width: "80%",
      alignItems: 'center',
      padding: 80,
      borderRadius: 50,
      shadowRadius: 30
    },
    ViewCalcNumber: {
      height: 240,
      width: 300,
      backgroundColor: 'rgba(0, 139, 139 ,1)',
      padding: 10,
      shadowRadius: 30
    },
    ViewCalcFirst: {
      height: 100,
      width: 300,
      backgroundColor: 'rgba(0, 139, 139 ,1)',
      flexDirection: "row"
    },
    ViewCalcSecond: {
      height: 100,
      width: 300,
      backgroundColor: 'rgba(0, 139, 139 ,1)',
      flexDirection: "row"
    },
    InputCalc: {
      padding: 20,
      backgroundColor: 'rgba(39, 16, 139 ,1)',
      borderRadius: 50,
      marginBottom: 20,
      fontSize: 20,
      color: '#54FF9F'
    },
    TextNumber: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 22
     },
    BtnCalc: {
      height: 50,
      margin: 10,
      padding: 20,
      backgroundColor: 'rgba(16, 18, 139 ,1)',
      borderRadius: 50,
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: "center"     
      },
      TextBtn: {
      color: '#54FF9F',
      fontSize: 16,
    },
    TextResult: {
      backgroundColor: 'rgba(39, 16, 139 ,1)',
      color: "white",
      padding: 20,
      fontSize: 20,
      shadowRadius: 30
  }
 
 }
)


 