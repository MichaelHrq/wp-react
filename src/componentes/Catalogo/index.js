import Filme from "../Filme";
import { ContainerMovie } from "./styles";

export default function Catalogo(props) {
    const { movies, daySelected } = props;

    return (
        <ContainerMovie>
            {movies.length > 0 && daySelected &&
                movies.map((item, key) => <Filme key={key} {...item} />)}
        </ContainerMovie>
    );
}
