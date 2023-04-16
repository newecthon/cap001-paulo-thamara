import { ReactNode } from 'react';
import NextLink from 'next/link'
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Menu,
  useDisclosure,
  useColorModeValue,
  Stack,
  textDecoration,
  background,
  color,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [
  {label: 'Home', page:'/'},
  {label: 'Portfolio', page:'portfolio'},
  {label: 'Sobre', page:'sobre'},
  {label: 'Contato', page:'contato'},
];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} maxW="1120px" m="0 auto">
          <Link>Logo here</Link>
          
          <Flex alignItems={'center'}>
            <Menu>
            <Flex
              as={'nav'}
              gap="16px"
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((item) => (
                <NextLink
                  key={item.page}
                  href={item.page}
                >
                  <Text
                  style={{
                    padding: '4px 16px',
                    background: 'gray.700',
                    borderRadius: '8px',
                    textDecoration: 'none',
                  }}
                   _hover = {{
                      background: useColorModeValue('gray.200', 'gray.700'),
                    }}
                  >
                    {item.label}
                  </Text>
                </NextLink>
              ))}
            </Flex>
            </Menu>
          </Flex>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((item) => (
                <NextLink key={item.label} href={item.page}>{item.label}</NextLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}