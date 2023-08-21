import {
    chakra,
    Stack,
    Box,
    Image,
    Text,
    Flex,
    Divider,
    IconButton,
    Grid,
} from "@chakra-ui/react";

export const DiaSemana = chakra(Flex, {
    baseStyle: {
        width: "25%",
        height: "50px",
        fontsize: "16px",
        fontWeight: "700",
        justifyContent: "center",
        alignItems: "center",
        transition: "all .5s",
        marginBottom: "15px",
        background: "#402815",
        color: "#ffffff",
        _hover: {
            color: "#402815",
            background: "#fcba43",
        },
    },
});

export const Selecionado = chakra(Flex, {
    baseStyle: {
        width: "25%",
        height: "50px",
        fontsize: "16px",
        fontWeight: "700",
        justifyContent: "center",
        alignItems: "center",
        transition: "all .5s",
        marginBottom: "30px",
        color: "#402815",
        background: "#fcba43",
    },
});

