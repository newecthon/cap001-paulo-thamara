import { Flex, Text } from "@chakra-ui/react";
import { HiArrowLongRight } from "react-icons/hi2";
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
                    filter="grayscale(100%)"
                    bgSize="cover"
                    bgPos="center"
                    bgRepeat="no-repeat"
                    bgClip="border-box"
                    transition="0.3s"
                    _hover={{
                        filter:"grayscale(0%)"
                    }}
                >
                    <Flex as="a"
                        w="1120px"
                        m="0 auto"
                        align="center"
                    >
                        <Text
                            display="flex"
                            align="center"
                            w="100%"
                            height="100%"
                            color="#FFFFFF45"
                            fontFamily="Zilla Slab"
                            fontSize="64px"
                            alignItems="center"
                            gap="40px"
                            _hover={{
                                color: "white",
                                ml: "16px",
                                transition:"1s",
                            }}
                        >
                            {item.label} <Text mt="16px"><HiArrowLongRight size={40} /></Text>
                        </Text>
                    </Flex>
                    </Flex>
            </Link>    
            ))}
        </>
    )
}