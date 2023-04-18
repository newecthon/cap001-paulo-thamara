import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Flex, Text } from "@chakra-ui/react";

export default function Portfolio() {
    const myImg = "https://images.unsplash.com/photo-1676107983242-be49d4a542ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

    function addClass() {
        const element = document.querySelector('#card-hover');
        element?.classList.add('snip1577');  
    }

    function removeClass() {
        const element = document.querySelector('#card-hover');
        element?.classList.remove('hove');  
    }



    return (
        <Flex
            width="100%"
            height="auto"
            direction="column"
            // background={"red"}
        >   
            <Header />
            <Flex
                    w="100%"
                    h="auto"
                >
                    <Flex flexWrap="wrap"
                        w="1120px"
                        h="auto"
                        //bg="red"
                        margin="64px auto"
                        gap="16px"
                    >
                        <Flex
                            onMouseLeave={removeClass}
                            id="card-hover"
                            className="snip1577"
                            w={{base: "100%", md:"100%", lg: "384px"}}
                            h="450px"
                            backgroundImage={myImg}
                            backgroundSize={"cover"}
                            backgroundRepeat={"no-repeat"}
                            backgroundPosition={"center"}
                            justify={"center"}
                            align={"center"}
                            _hover={{
                                filter:"grayscale(100%)" 
                            }}
                            
                        >
                            <Text className="testoo">Paulo & Thamara</Text>
                        </Flex>
                        
                    </Flex>
                </Flex>
            <Footer />
        </Flex>
    )
}