import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import * as Updates from "expo-updates";
import { useEffect } from "react";

export default function App() {
  console.log("Channel:", Updates.channel);
  console.log(Updates.manifest);
  const checkForUpdates = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        Alert.alert(
          "Update Tersedia",
          "Ada pembaruan baru! Ingin mengupdate sekarang?",
          [
            {
              text: "Nanti",
              style: "cancel",
            },
            {
              text: "Update Sekarang",
              onPress: async () => {
                const { isNew } = await Updates.fetchUpdateAsync();
                if (isNew) {
                  await Updates.reloadAsync(); // Restart aplikasi untuk apply update
                }
              },
            },
          ]
        );
      } else {
        console.log("Tidak ada update tersedia.");
      }
    } catch (error) {
      console.error("Gagal memeriksa pembaruan:", error);
    }
  };

  useEffect(() => {
    checkForUpdates();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App</Text>
      <Button
        title="Update"
        color={"red"}
        onPress={() => {
          checkForUpdates();
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
