import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Flex, Text } from "@chakra-ui/react";

export default function Portfolio() {
    const myImg = "https://images.unsplash.com/photo-1676107983242-be49d4a542ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    return (
        <Flex
            width="100%"
            height="auto"
            direction="column"
        >   
            <Header />
            <Flex
                    w="100%"
                    h="auto"
                >
                    <Flex
                        w="1440px"
                        h="auto"
                        flexWrap="wrap"
                        justify={{base:"center", md:"center", lg: "center"}}
                        margin="64px auto"
                        gap="16px"
                        // bg="Highlight"
                    >
                        <Flex
                            w="348px"
                            h="450px"
                            backgroundImage={myImg}
                            backgroundSize={"cover"}
                            backgroundRepeat={"no-repeat"}
                            backgroundPosition={"center"}
                            justify={"center"}
                            align={"center"}
                        >
                            <Text>Paulo & Thamara</Text>
                        </Flex>
                        <Flex
                            w="348px"
                            h="450px"
                            backgroundImage={myImg}
                            backgroundSize={"cover"}
                            backgroundRepeat={"no-repeat"}
                            backgroundPosition={"center"}
                            justify={"center"}
                            align={"center"}
                            
                        >
                            <Text>Paulo & Thamara</Text>
                        </Flex>
                        <Flex
                            w="348px"
                            h="450px"
                            backgroundImage={myImg}
                            backgroundSize={"cover"}
                            backgroundRepeat={"no-repeat"}
                            backgroundPosition={"center"}
                            justify={"center"}
                            align={"center"}
                            
                        >
                            <Text>Paulo & Thamara</Text>
                        </Flex>
                        <Flex
                            w="348px"
                            h="450px"
                            backgroundImage={myImg}
                            backgroundSize={"cover"}
                            backgroundRepeat={"no-repeat"}
                            backgroundPosition={"center"}
                            justify={"center"}
                            align={"center"}
                            
                        >
                            <Text>Paulo & Thamara</Text>
                        </Flex>
                        <Flex
                            w="348px"
                            h="450px"
                            backgroundImage={myImg}
                            backgroundSize={"cover"}
                            backgroundRepeat={"no-repeat"}
                            backgroundPosition={"center"}
                            justify={"center"}
                            align={"center"}
                            
                        >
                            <Text>Paulo & Thamara</Text>
                        </Flex>
                        <Flex
                            w="348px"
                            h="450px"
                            backgroundImage={myImg}
                            backgroundSize={"cover"}
                            backgroundRepeat={"no-repeat"}
                            backgroundPosition={"center"}
                            justify={"center"}
                            align={"center"}
                            
                        >
                            <Text>Paulo & Thamara</Text>
                        </Flex>
                        <Flex
                            w="348px"
                            h="450px"
                            backgroundImage={myImg}
                            backgroundSize={"cover"}
                            backgroundRepeat={"no-repeat"}
                            backgroundPosition={"center"}
                            justify={"center"}
                            align={"center"}
                            
                        >
                            <Text>Paulo & Thamara</Text>
                        </Flex>
                        <Flex
                            w="348px"
                            h="450px"
                            backgroundImage={myImg}
                            backgroundSize={"cover"}
                            backgroundRepeat={"no-repeat"}
                            backgroundPosition={"center"}
                            justify={"center"}
                            align={"center"}
                            
                        >
                            <Text>Paulo & Thamara</Text>
                        </Flex>
                        <Flex
                            w="348px"
                            h="450px"
                            backgroundImage={myImg}
                            backgroundSize={"cover"}
                            backgroundRepeat={"no-repeat"}
                            backgroundPosition={"center"}
                            justify={"center"}
                            align={"center"}
                            
                        >
                            <Text>Paulo & Thamara</Text>
                        </Flex>
                        
                    </Flex>
                </Flex>
            <Footer />
        </Flex>
    )
}