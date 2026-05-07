import { router } from "expo-router";
import { useEffect } from "react";
import {
    ActivityIndicator,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function Index() {
  useEffect(() => {
    // ทำงานทุกครั้งที่หน้าจอถูกโหลด
    const timer = setTimeout(() => {
      // เปลี่ยนจาก /home เป็น /input ให้ตรงกับชื่อไฟล์ที่คุณมี
      router.replace("/input");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* โลโก้เรียกจากโฟลเดอร์ assets */}
      <Image
        source={require("../assets/images/LOGO-Car.png")}
        style={styles.imglogo}
        resizeMode="contain"
      />

      <View style={styles.textGroup}>
        <Text style={styles.txtAppName}>Smart Auto Loan</Text>
        <Text style={styles.txtSubtitle}>วางแผนออกรถฉบับมือโปร</Text>
      </View>

      <ActivityIndicator size="large" color="#DEFF9A" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E293B", // สีโทนเข้มตามรูปภาพของคุณ
  },
  imglogo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  textGroup: {
    alignItems: "center",
    marginBottom: 40,
  },
  txtAppName: {
    fontSize: 32,
    fontFamily: "Kanit_700Bold", // ใช้ Font ที่โหลดไว้ใน _layout
    color: "#FFFFFF",
    marginBottom: 8,
  },
  txtSubtitle: {
    fontSize: 18,
    fontFamily: "Kanit_400Regular",
    color: "#CBD5E1",
  },
});
