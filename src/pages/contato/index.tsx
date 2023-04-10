import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Flex } from "@chakra-ui/react";

export default function Contact() {
    return (
        <Flex
            direction="column"
            height="auto"
        >   
            <Header />
                <h1>Contato</h1>
            <Footer />
        </Flex>
    )
}