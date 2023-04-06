import { Flex, Image, LinkBox, Text, background } from "@chakra-ui/react";
import Link from "next/link";

const linksData = [
    { img:"/img/casamentos.svg", page: "/casamentos", label: "Casamentos" },
    { img:"/img/noivados.svg", page: "/noivaidos", label: "Noivados" },
    { img:"/img/all.svg", page: "/all", label: "All" },
    
]

export function MySection() {
    return (
        <>
            {linksData.map((item, index) => (
            <Link href={item.page}>
                <Flex
                    key={index}
                    w="100%"
                    h="500px"
                    margin="16px 0"
                    bgImage={item.img}
                    bgSize="cover"
                    bgPos="center"
                    bgRepeat="no-repeat"
                    bgClip="border-box"
                >
                    <Flex as="a"
                        w="1120px"
                        m="0 auto"
                        align="center"
                    >
                        <Text
                            w="100%"
                            color="#FFFFFF45"
                            fontFamily="Zilla Slab"
                            fontSize="64px"
                            _hover={{
                                color: "white",
                                ml: "16px",
                                transition:"1s",
                            }}
                        >
                            {item.label}
                        </Text>
                    </Flex>
                    </Flex>
            </Link>    
            ))}
        </>
    )
}