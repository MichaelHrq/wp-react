import { useEffect, useState } from "react";
import Catalogo from "./componentes/Catalogo";
import { AppContainer, DiaSemanaContainer, Skeleton } from "./styles";
import Calendario from "./componentes/Calendario";

export default function App() {
    const [dias, setDias] = useState([]);
    const [daySelected, setDaySelected] = useState(0);
    const arrayLoading = Array.from({ length: 5 }, (_, index) => index);

    const searchMovies = async () => {
        const response = await fetch(process.env.REACT_APP_API);
        const movies = await response.json();
        return movies;
    };

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await searchMovies();
            setDias(data);
        };
        fetchMovies();
    }, []);

    return (
        <AppContainer>
            <DiaSemanaContainer>
                {dias
                    ? dias.map((item, key) => (
                          <Calendario
                              {...item}
                              setDaySelected={setDaySelected}
                              daySelected={daySelected === key}
                              index={key}
                              key={key}
                          />
                      ))
                    : arrayLoading.map((item) => (
                          <Skeleton key={item} h="292px" w="428px" />
                      ))}
            </DiaSemanaContainer>
            {dias
                ? dias.map((item, key) => (
                      <Catalogo
                          {...item}
                          daySelected={daySelected === key}
                          index={key}
                          key={key}
                      />
                  ))
                : arrayLoading.map((item) => (
                      <Skeleton key={item} h="292px" w="428px" />
                  ))}
        </AppContainer>
    );
}
