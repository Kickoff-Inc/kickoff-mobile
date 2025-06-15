import { colors } from "@/src/constants/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
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
                        <AntDesign name="home" size={24} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="MyFeed"
                options={{
                    title: "My Feed",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="hearto" size={24} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="Matches"
                options={{
                    title: "Matches",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="soccer-field"
                            size={24}
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
