import { Box } from "@chakra-ui/react";
import { ContainerMovie, Debut, MovieShadow, MovieTitle } from "./styles";

export default function Filme({ originalTitle, images }) {
    return (
        <ContainerMovie
            bgImage={images[0].url}
            alt={originalTitle}
        >
            <MovieShadow>
                <MovieTitle>
                    <Debut>estréia</Debut>
                    {originalTitle}
                </MovieTitle>
            </MovieShadow>
        </ContainerMovie>
    );
}
