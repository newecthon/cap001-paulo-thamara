import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
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
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((item) => (
                <NavLink key={item.page}>{item.label}</NavLink>
              ))}
            </HStack>
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
                <NavLink key={item.label}>{item.label}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}