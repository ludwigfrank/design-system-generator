import { View, Text, makeSymbol } from "react-sketchapp";
import React from "react";
import { createSymbol } from "./util";

const RedSquare = () => (
    <View
        name="Square"
        style={{ width: 400, height: 100, backgroundColor: "blue" }}
    >
        <Text name="Red Square Text">Red Square</Text>
    </View>
);

createSymbol(
    () => (
        <View
            name="Square"
            style={{ width: 400, height: 100, backgroundColor: "yellow" }}
        >
            <Text name="Red Square Text">Red Square</Text>
        </View>
    ),
    "test/squares/red"
);
