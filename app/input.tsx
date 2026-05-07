import React, { useState } from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function InputScreen() {
  const [carPrice, setCarPrice] = useState("");
  const [downPayment, setDownPayment] = useState("15%");
  const [period, setPeriod] = useState("48");
  const [interest, setInterest] = useState("");

  const downPaymentOptions = ["5%", "10%", "15%", "20%", "25%"];
  const periodOptions = ["24", "36", "48", "60", "72"];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* รูปด้านบนจาก Internet */}
        <Image
          source={{
            uri: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
          }}
          style={styles.topImage}
        />

        <View style={styles.formCard}>
          <Text style={styles.headerText}>คำนวณค่างวดรถ</Text>

          {/* ราคารถ */}
          <Text style={styles.label}>ราคารถ (บาท)</Text>
          <TextInput
            style={styles.input}
            placeholder="เช่น 850000"
            keyboardType="numeric"
            value={carPrice}
            onChangeText={setCarPrice}
          />

          {/* เลือกเงินดาวน์ */}
          <Text style={styles.label}>เลือกเงินดาวน์ (%)</Text>
          <View style={styles.optionsContainer}>
            {downPaymentOptions.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionButton,
                  downPayment === item && styles.optionActive,
                ]}
                onPress={() => setDownPayment(item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    downPayment === item && styles.optionTextActive,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* ระยะเวลาผ่อน */}
          <Text style={styles.label}>ระยะเวลาผ่อน (งวด)</Text>
          <View style={styles.optionsContainer}>
            {periodOptions.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.optionButton,
                  period === item && styles.optionActive,
                ]}
                onPress={() => setPeriod(item)}
              >
                <Text
                  style={[
                    styles.optionText,
                    period === item && styles.optionTextActive,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* ดอกเบี้ย */}
          <Text style={styles.label}>ดอกเบี้ย (% ต่อปี)</Text>
          <TextInput
            style={styles.input}
            placeholder="เช่น 2.59"
            keyboardType="numeric"
            value={interest}
            onChangeText={setInterest}
          />

          {/* ปุ่มคำนวณ */}
          <TouchableOpacity style={styles.calculateButton}>
            <Text style={styles.calculateButtonText}>คำนวณค่างวด</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  topImage: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  formCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: -40,
    marginHorizontal: 20,
    borderRadius: 30,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  headerText: {
    fontFamily: "Kanit_700Bold",
    fontSize: 24,
    color: "#1E293B",
    marginBottom: 25,
  },
  label: {
    fontFamily: "Kanit_400Regular",
    fontSize: 16,
    color: "#64748B",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F1F5F9",
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    fontFamily: "Kanit_400Regular",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: "#F1F5F9",
  },
  optionActive: {
    backgroundColor: "#1E293B",
  },
  optionText: {
    fontFamily: "Kanit_400Regular",
    color: "#64748B",
  },
  optionTextActive: {
    color: "#FFFFFF",
  },
  calculateButton: {
    backgroundColor: "#2563EB",
    borderRadius: 15,
    padding: 18,
    alignItems: "center",
    marginTop: 10,
  },
  calculateButtonText: {
    fontFamily: "Kanit_700Bold",
    color: "#FFFFFF",
    fontSize: 18,
  },
});
