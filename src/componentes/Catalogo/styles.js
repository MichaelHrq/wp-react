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
    Wrap,
} from "@chakra-ui/react";

export const ContainerMovie = chakra(Grid, {
    baseStyle: {
        justifyContent: "center",
        gridTemplateColumns: {
            base: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
        },
        width: {base: '95%', md:'70%'},
        flexWrap: "wrap"
    },
});
