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
            <Flex
                    w="100%"
                    h="auto"
                >
                    <Flex flexWrap="wrap"
                        w="1120px"
                        h="700px"
                        bg="red"
                        margin="0 auto"
                    >
                    </Flex>
                </Flex>
            <Footer />
        </Flex>
    )
}