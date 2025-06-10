import { colors } from "@/src/constants/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const _Layout = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: colors.primary.light }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "News",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome
                            size={28}
                            name="newspaper-o"
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="MyFeed"
                options={{
                    title: "My Feed",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={28} name="heart-o" color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="Matches"
                options={{
                    title: "Matches",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome
                            size={28}
                            name="soccer-ball-o"
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default _Layout;

const styles = StyleSheet.create({});
