import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { FC, ReactNode, useEffect, useState } from "react";

import NextLink from 'next/link'
import { useRouter } from "next/router";


const collapseItems = [
    { name: "Home", url: "/" },
    { name: "Ingreso", url: "/ingreso" },
    { name: "Crear Ticket", url: "/crearticket" },
    { name: "Cola", url: "/cola" },
];

interface Props {
    children: ReactNode
}
const NavbarLayout: FC<Props> = ({children}) => {

    const {asPath} = useRouter();

    const [idIngreso1, setIdIngreso1] = useState("");
    const [idHome1, setIdHome1] = useState("");
    const [idCrearTicket1, setIdCrearTicket1] = useState("");
    const [idCola1, setIdCola1] = useState("");

    useEffect(() => {
        setIdIngreso1(`link-${Math.random().toString(36).substring(7)}`)
        setIdHome1(`link-${Math.random().toString(36).substring(7)}`)
        setIdCrearTicket1(`link-${Math.random().toString(36).substring(7)}`)
        setIdCola1(`link-${Math.random().toString(36).substring(7)}`)
    }, [])

    return (
        <>
        <Navbar isBordered variant="sticky" height={50} maxWidth="fluid">
            <Navbar.Toggle showIn="xs" />
            <Navbar.Brand
                css={{
                    "@xs": {
                        w: "12%",
                    },
                }}
            >
                <Text b color="inherit" hideIn="xs">
                    SOTA REALTIME
                </Text>
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight
                activeColor="warning"
                hideIn="xs"
                variant="highlight"
            >

                <NextLink href="/" color="white" passHref legacyBehavior id={idHome1}>
                    <Navbar.Link isActive={asPath==='/'}>Home</Navbar.Link>
                </NextLink>
                <NextLink href="/ingreso" color="white" passHref legacyBehavior id={idIngreso1}>
                    <Navbar.Link isActive={asPath==='/ingreso'}>Ingreso</Navbar.Link>
                </NextLink>
                <NextLink href="/crearticket" color="white" passHref legacyBehavior id={idCrearTicket1}>
                    <Navbar.Link isActive={asPath==='/crearticket'}>Crear Ticket</Navbar.Link>
                </NextLink>
                <NextLink href="/cola" color="white" passHref legacyBehavior id={idCola1}>
                    <Navbar.Link isActive={asPath==='/cola'}>Cola</Navbar.Link>
                </NextLink>
            </Navbar.Content>
            <Navbar.Collapse disableAnimation css={{'::-webkit-scrollbar': { display: 'none'}}}>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={item.name}
                        activeColor="warning"
                        isActive={item.url === asPath}
                    >
                        <NextLink id={item.name} href={item.url} color="white" passHref legacyBehavior>
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: "100%",
                                }}
                                href={item.url}
                            >
                                {item.name}
                            </Link>

                        </NextLink>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
       {children}
</>);
}

export default NavbarLayout;