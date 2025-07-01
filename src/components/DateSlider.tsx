import { addDays, eachWeekOfInterval, format, subDays } from "date-fns";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

const dates = eachWeekOfInterval(
    {
        start: subDays(new Date(), 14),
        end: addDays(new Date(), 14),
    },
    {
        weekStartsOn: 1,
    }
).reduce((acc: Date[][], cur) => {
    const allDays = eachWeekOfInterval({
        start: cur,
        end: addDays(cur, 6),
    });

    acc.push(allDays);
    return acc;
}, []);

const DateSlider: React.FC = () => {
    return (
        <PagerView style={styles.container}>
            {dates.map((week, i) => {
                return (
                    <View key={i}>
                        <View style={styles.row}>
                            {week.map((day) => {
                                const txt = format(day, "EEEEE");
                                return (
                                    <View key={txt} style={styles.day}>
                                        <Text>{txt}</Text>
                                        <Text>{day.getDate()}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                );
            })}
        </PagerView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    day: {
        alignItems: "center",
    },
});

export default DateSlider;
