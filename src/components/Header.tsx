import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
    return (
        <Flex
            w="100%"
            h="80px"
            align="center"
            justify="center"
            bg="brand.900"
        >
            <Flex
                w="1120px"
                h="100%"
                justify="space-between"
                align="center"
            >
                <Link href="/">Logo</Link>
                <Flex as="nav">
                    <Link href="#" style={{ marginRight:'40px', color:'#FBFFD4'}}>Home</Link>
                    <Link href="#" style={{ marginRight:'40px', color:'#FBFFD4'}}>Portfolio</Link>
                    <Link href="#" style={{ marginRight:'40px', color:'#FBFFD4'}}>Sobre</Link>
                    <Link href="#" style={{ marginRight:'0', color:'#FBFFD4'}}>Contato</Link>
                </Flex>
            </Flex>
        </Flex>
    )
}