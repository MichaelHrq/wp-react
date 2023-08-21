import { Box } from "@chakra-ui/react";
import { DiaSemana, Selecionado } from "./styles";

export default function Calendario(props) {
    const { dateFormatted, daySelected, setDaySelected, index } = props;

    const handleChangeDay = () => {
        setDaySelected(index);
    };

    const todayTomorrow = () => {
        switch (index) {
            case 0:
                return "HOJE";
            case 1:
                return "AMANHÃ";
            default:
                return dateFormatted;
        }
    };

    return (
        <>
            {daySelected ? (
                <Selecionado>{todayTomorrow()}</Selecionado>
            ) : (
                <DiaSemana onClick={handleChangeDay}>{todayTomorrow()}</DiaSemana>
            )}
        </>
    );
}
