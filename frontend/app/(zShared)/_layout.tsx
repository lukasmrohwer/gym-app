import { Stack } from "expo-router";
export default function SharedLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="(help)" options={{ title: "Help Center" }} />
      <Stack.Screen name="(profile)" options={{ title: "Profile" }} />
    </Stack>
  );
}