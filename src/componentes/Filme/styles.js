import {
    chakra,
    Stack,
    Box,
    Image,
    Text,
    Flex,
    Divider,
    IconButton,
} from "@chakra-ui/react";

export const ContainerMovie = chakra(Flex, {
    baseStyle: {
        width: {
            base: "calc(100% -30)",
        },
        height: { base: "277px", lg: "400px" },
        bgSize: "cover",
        bgPosition: "center",
        borderRadius: "md",
        boxShadow: "md",
        cursor: "pointer",
        textAlign: "center",
        position: "relative",
        margin: '15px 15px'
    },
});

export const MovieShadow = chakra(Flex, {
    baseStyle: {
        background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0, #000 100%) no-repeat padding-box",
        top: 0,
        width: "100%",
        height: "100%",
        left: 0,
        position: "absolute",
    },
});

export const MovieTitle = chakra(Flex, {
    baseStyle: {
        flexDirection: "column",
        alignItems: "flex-start",
        bottom: 0,
        right: 0,
        padding: "0 20px 30px",
        fontFamily: "Muli",
        fontWeight: 700,
        fontSize: "1.125rem",
        lineHeight: "1.5rem",
        color: "#ffffff",
        left: 0,
        position: "absolute",
        textAlign: "left",
    },
});

export const Debut = chakra(Flex, {
    baseStyle: {
        display: "block",
        fontFamily: "Muli",
        fontWeight: 400,
        fontSize: ".75rem",
        lineHeight: ".9375rem",
        letterSpacing: ".31px",
        color: "#fcba43",
    },
});
