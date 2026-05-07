import {
  Kanit_400Regular,
  Kanit_700Bold,
  useFonts,
} from "@expo-google-fonts/kanit";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// 1. ป้องกันไม่ให้ Splash Screen ปิดตัวเองโดยอัตโนมัติก่อนฟอนต์จะโหลดเสร็จ
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
  });

  useEffect(() => {
    // 2. ถ้าโหลดฟอนต์เสร็จ หรือมี Error ในการโหลด ให้สั่งปิด Splash Screen
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  // 3. ถ้าฟอนต์ยังไม่พร้อม ให้คืนค่า null ไปก่อน (Splash Screen ยังคงแสดงอยู่)
  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // เพิ่มเติม: คุณสามารถกำหนดฟอนต์ Kanit ให้เป็น Default ของทั้งแอปได้ที่นี่ (ถ้าต้องการ)
        headerTitleStyle: { fontFamily: "Kanit_700Bold" },
      }}
    >
      {/* ตรวจสอบชื่อ name ให้ตรงกับชื่อไฟล์จริง (ปกติจะเป็นตัวพิมพ์เล็ก) */}
      <Stack.Screen name="index" />
      <Stack.Screen name="Input" />
    </Stack>
  );
}
