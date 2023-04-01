import { Flex } from "@chakra-ui/react";
import Link from "next/link";

export function MySection() {
    return (
        <Flex
            w="100%"
            h="500px"
            bg="pink"
        >
            <Flex
                w="1120px"
                m="0 auto"
            >
                <Link href="#" style={{ height:'100px', marginTop:"300px" }}>
                    <Flex
                        fontFamily="Zilla Slab"
                        fontSize="64px"
                    >
                        Casamentos
                    </Flex>
                </Link>
            </Flex>
        </Flex>
    )
}