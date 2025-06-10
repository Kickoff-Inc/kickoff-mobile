import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NewsDetails = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>NewsDetails</Text>
        </View>
    );
};

export default NewsDetails;

const styles = StyleSheet.create({});
