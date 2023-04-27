import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Flex, Text } from "@chakra-ui/react";

export default function Contact() {
    return (
        <Flex
            direction="column"
            height="auto"
        >   
            <Header />
                <Flex
                    direction="column"
                    w="1120px"
                    h="75vh"
                    margin="0 auto"
                    align="center"
                    justify="center"
                >
                    <Text fontSize={20}>Whatsapp: (91) 99999-9999</Text>
                    <Text fontSize={20}>Email: pauloethamara@gmail.com</Text>
                    <Text fontSize={20}>🚧 página em construção 🚧</Text>

                </Flex>
            <Footer />
        </Flex>
    )
}