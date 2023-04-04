import { Flex, Image, Text } from "@chakra-ui/react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
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
                <Flex
                key={index}
                w="100%"
                h="500px"
                margin="16px 0"
            >
                <Image
                        w='100%'
                        h='auto'
                        bgImage={item.img}
                        bgSize="cover"
                        bgPos="center"
                        bgRepeat="no-repeat"
                    />
                <Flex
                    w="1120px"
                    m="0 auto"
                    position="absolute"
                    marginLeft="300px"
                >
                    <Link href={item.page} style={{ height:'100px', marginTop:"300px", color:"white" }}>
                        <Flex
                            fontFamily="Zilla Slab"
                            fontSize="64px"
                            align="center"
                            color="#ffffff45"
                            _hover={{ color: "white", ml: "16px", transition:"1s"}}
                            className="item-menu-section"
                        >
                            <Text>{item.label}</Text>
                        </Flex>
                    </Link>
                </Flex>
            </Flex>
            ))}
        </>
    )
}