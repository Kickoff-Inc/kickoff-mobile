import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
    const [loaded] = useFonts({
        Inter: require("../../assets/fonts/Inter-Regular.ttf"),
    });

    if (!loaded) {
        // Async font loading only occurs in development.
        return null;
    }

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="news/[id]" options={{ headerShown: false }} />
        </Stack>
    );
}
