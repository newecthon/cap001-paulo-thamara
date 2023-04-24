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
                    w="1120px"
                    h="100vh"
                    margin="0 auto"
                >

                </Flex>
            <Footer />
        </Flex>
    )
}