import { ChakraProvider, extendTheme} from '@chakra-ui/react'

const colors = {
    brand: {
        900: '#7B7E5B'
    }
}

const fonts = {
    body: `'Zilla Slab', sans-serif`,
    heading: `'Zilla Slab', sans-serif`,
}

export const theme = extendTheme({colors, fonts});