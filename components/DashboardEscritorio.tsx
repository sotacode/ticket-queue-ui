import { Button, Grid, Text } from "@nextui-org/react";
import { FC, useContext, useState } from "react";
import { Box } from "./layout/Navbar/Box";
import { ChevronRightCircle, Logout } from "react-iconly";
import { useRouter } from "next/router";
import useLocalStorage from "@/hooks/useLocalStorage";
import { SocketContext } from "@/hooks/SocketContext";

const DashboardEscritorio: FC = () => {

    const router = useRouter();

    const [data, setData] = useLocalStorage("@datauser", {"agente":"", "escritorio":""});

    const [ticketNo, setTicketNo] = useState(0)

    const {socket} = useContext( SocketContext )

    const salir = () => {
        setData({"agente":"", "escritorio":""})
        router.push("/ingreso")
    }

    const siguienteTicket = () => {
        socket.emit("asignar-ticket", data, (ticket: any)=>{
            if(ticket===null) setTicketNo(0)
            setTicketNo(ticket.numero);
        })
    }

    return (
        <Box>
            <Grid.Container gap={2} justify="center" css={{ padding: "25px 80px" }}>
                <Grid xs={6} justify="center" direction="column">
                    <Text h1>SotaCode</Text>
                    <Text h3>Usted está trabajando en el escritorio x</Text>
                </Grid>
                <Grid xs={6} justify="center" alignItems="center">
                    <Button
                        icon={<Logout set="curved" primaryColor="blueviolet" />}
                        color="error"
                        flat
                        onPress={salir}
                        size="xl"
                    >
                        Salir
                    </Button>
                </Grid>
                <Grid xs={12} direction="row" alignItems="center">
                    <Text h4 css={{ marginRight: "10px" }}>Actualmente estás atentiendo al cliente numero: </Text>
                    <Text color="secondary" h2>{ticketNo}</Text>
                </Grid>
                <Grid xs={12}>
                    <Button
                        color="success"
                        flat
                        onPress={siguienteTicket}
                        size="xl"
                        iconRight={<ChevronRightCircle set="bold" primaryColor="#ffffff" />}
                    >
                        Siguiente ticket
                    </Button>
                </Grid>
            </Grid.Container>
        </Box>
    )
}

export default DashboardEscritorio;