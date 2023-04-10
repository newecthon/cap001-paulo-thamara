import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Flex } from "@chakra-ui/react";

export default function Portfolio() {
    return (
        <Flex
            direction="column"
            height="auto"
        >   
            <Header />
            
            <Footer />
        </Flex>
    )
}