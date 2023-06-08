import { Box, Button, Container, Flex, HStack, IconButton, Image, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { IoClose, IoMenu } from 'react-icons/io5';
import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Box background={"#325CAB"} w={'100%'} p={4} color='white'>
            <Container maxW="container.lg">
                <Flex align="center" justify="space-between" h="70px">
                    <Image
                        src="./image/litro_logo.svg"
                        w="40px"
                        display={{ base: 'flex', md: 'none' }}
                    />
                    <HStack spacing="50px" display={{ base: 'none', md: 'flex' }}>
                        <HStack>
                            <Image
                                src="./image/litro_logo.svg"
                                w="40px"
                            />
                            <Text
                                // fontFamily={'Caveat'}
                                fontWeight="700"
                                fontSize="20px"
                            >
                                LITRO
                            </Text>
                        </HStack>
                        <Link
                            href="#Products"
                            textDecoration="none"
                            fontFamily="GT Walsheim Pro"
                            fontWeight="500"
                            fontSize="15px"
                            color="white"
                            _hover={{
                                color: 'red',
                            }}
                        >
                            Products
                        </Link>
                        <Link
                            href="#Blog"
                            textDecoration="none"
                            fontFamily="GT Walsheim Pro"
                            fontWeight="500"
                            fontSize="15px"
                            color="white"
                            _hover={{
                                color: 'lightGrey',
                            }}
                        >
                            Blog
                        </Link>
                        <Link
                            href="#FAQs"
                            textDecoration="none"
                            fontFamily="GT Walsheim Pro"
                            fontWeight="500"
                            fontSize="15px"
                            color="white"
                            _hover={{
                                color: 'lightGrey',
                            }}
                        >
                            FAQs
                        </Link>
                        <Link
                            href="#Contact us"
                            textDecoration="none"
                            fontFamily="GT Walsheim Pro"
                            fontWeight="500"
                            fontSize="15px"
                            color="white"
                            _hover={{
                                color: 'lightGrey',
                            }}
                        >
                            Contact us
                        </Link>
                    </HStack>
                    <HStack display={{ base: 'none', md: 'flex' }}>
                        <Button
                            background="#FFFFFF;"
                            color="black"
                            fontWeight="700"
                            fontSize="12px"
                            fontFamily="GT Walsheim Pro"
                            d={{ base: 'none', md: 'flex' }}
                            w="108px"
                            h="48px"
                            border="none"
                            rounded="8px"
                            _hover={{
                                color: '#325CAB',
                                cursor: 'pointer'
                            }}
                        >
                            <Link to="/login">
                                Login
                            </Link>
                        </Button>
                        <Button
                            background="none"
                            color="#ffffff"
                            fontWeight="700"
                            fontSize="12px"
                            fontFamily="GT Walsheim Pro"
                            d={{ base: 'none', md: 'flex' }}
                            w="108px"
                            h="48px"
                            border="1px solid #DFDFE0"
                            rounded="8px"
                            _hover={{
                                color: 'lightGrey',
                                cursor: 'pointer'
                            }}
                        >
                            <Link to="/register">
                                Register
                            </Link>
                        </Button>
                    </HStack>

                    <IconButton
                        variant="outline"
                        borderColor="#110620"
                        rounded="md"
                        size="lg"
                        icon={isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
                        onClick={onToggle}
                        display={{ base: 'flex', md: 'none' }}
                        _hover={{
                            bg: '#849ecf',
                            borderColor: '#849ecf',
                        }}
                    />
                </Flex>
                {isOpen && (
                    <Box p="20px" bg="white" rounded="md" mb="50px" shadow="md">
                        <Stack spacing="20px">
                            <Link
                                href="#Products"
                            >
                                <Text
                                    fontFamily="GT Walsheim Pro"
                                    fontWeight="500"
                                    fontSize="15px"
                                    color="black"
                                    _hover={{
                                        color: 'lightGrey',
                                    }}
                                >
                                    Products
                                </Text>
                            </Link>
                            <Link
                                href="#Blog"
                                textDecoration="none"
                                fontFamily="GT Walsheim Pro"
                                fontWeight="500"
                                fontSize="15px"
                                color="black"
                                _hover={{
                                    color: 'lightGrey',
                                }}
                            >
                                Blog
                            </Link>
                            <Link
                                href="#FAQs"
                                textDecoration="none"
                                fontFamily="GT Walsheim Pro"
                                fontWeight="500"
                                fontSize="15px"
                                color="black"
                                _hover={{
                                    color: 'lightGrey',
                                }}
                            >
                                FAQs
                            </Link>
                            <Link
                                href="#Contact us"
                                textDecoration="none"
                                fontFamily="GT Walsheim Pro"
                                fontWeight="500"
                                fontSize="15px"
                                color="black"
                                _hover={{
                                    color: 'lightGrey',
                                }}
                            >
                                Contact us
                            </Link>
                        </Stack>
                    </Box>
                )}
            </Container>
        </Box>
    )
}

export default NavBar