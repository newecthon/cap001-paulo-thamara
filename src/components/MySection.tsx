import { Flex, Text } from "@chakra-ui/react";
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
                bg="#c1c1c1"
            >
                <Link href="#">
                    <Text fontFamily="zilla-slab" fontSize="64px" mt="300px">Casamentos</Text>
                </Link>
            </Flex>
        </Flex>
    )
}