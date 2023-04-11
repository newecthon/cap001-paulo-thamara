import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Flex, Image, Text } from "@chakra-ui/react";

export default function About() {
    return (
        <Flex
            direction="column"
            height="auto"
        >   
            <Header />
            <Flex
                w="1120px"
                h="auto"
                m="0 auto"
                direction="column"
            >  
                <Flex
                    w="100%"
                    p="16px"
                    align={"center"}
                    gap="32px"
                >
                    <Image w="400px" src="https://github.com/newecthon.png" />   
                    <Flex
                        p="16px"
                        direction="column"
                        w="100%"
                        justify="cente"
                    >
                        <Text
                            fontSize='32px'
                            fontWeight='bold'
                        >
                            Paulo
                        </Text>
                        <Text
                            fontSize='20px'
                        >
                            É cristão, ama viajar, cantar, tocar violão e tomar um bom café da manhã. É geólogo por formação e músico por vocação.
                            Vê na fotografia uma forma de tornar memorável experiências e histórias reais a partir de um olhar sensível e simples.
                        </Text>
                    </Flex>
                </Flex>

                <Flex
                    w="100%"
                    p="16px"
                    gap="32px"
                >
                    <Flex
                        p="16px"
                        direction="column"
                        w="100%"
                        align="end"
                        alignItems="end"
                        justify="center"
                    >
                        <Text
                            fontSize='32px'
                            fontWeight='bold'
                        >
                            Thâmara
                        </Text>
                        <Text
                            fontSize='20px'
                            align='end'
                        >
                            É cristão, ama viajar, cantar, tocar violão e tomar um bom café da manhã. É geólogo por formação e músico por vocação.
                            Vê na fotografia uma forma de tornar memorável experiências e histórias reais a partir de um olhar sensível e simples.
                        </Text>
                    </Flex>
                    <Image w="400px" src="https://github.com/newecthon.png" /> 
                </Flex>
            </Flex>
            <Footer />
        </Flex>
    )
}