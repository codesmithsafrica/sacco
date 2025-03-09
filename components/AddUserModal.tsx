import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    useDisclosure,
    // Modal,
    // ModalOverlay,
    // ModalContent,
    // ModalHeader,
    // ModalFooter,
    // ModalCloseButton,
    // ModalBody,
    // FormControl,
    // FormErrorMessage,
    // FormLabel,
    Fieldset,
    NativeSelect,
    Stack,
    Input,
  
    Button,
    Flex,

} from "@chakra-ui/react";
import { Field } from "@/components/ui/field"

import {
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover"

import {  toaster } from "@/components/ui/toaster"

const AddItemModal: React.FC = () => {
    const { onOpen, onClose } = useDisclosure();
    const { handleSubmit } = useForm();
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [code, setCode] = useState(null);
    const [category_id, setCategoryId] =  useState<string|undefined>('');



    const flushInputs = () => {
        setFName("");
        setLName("");
        setEmail("");
        setCode(null)

    };

    const onOpenDealModal = () => {

        onOpen();
    };

    return (
        <>
            <Flex p={6}>
                <Button
                    onClick={onOpenDealModal}
                    variant="solid"
                    colorScheme="teal"
                    //@ts-expect-error:type fix
                    align="center"
                    minH="40px"
                    w="60%"
                >
                    Add User
                </Button>
            </Flex>
            <PopoverRoot>
                <PopoverTrigger />
                <PopoverContent>
                    <PopoverBody>
                        <PopoverTitle >Add Member</PopoverTitle >
                        <form
                            onSubmit={handleSubmit(async () => {

                                console.log('data', fname, lname, email, code, category_id)

                                const response = await fetch('/api/user', {
                                    method: 'POST',

                                    body: JSON.stringify({ firstName: fname, lastName: lname, email: email, code: code, role: category_id }),
                                })
                                const _data = await response.json()
                                console.log('data', _data)
                              
                                toaster.create({
                                    description: "Member created successfully",
                                    type: "info",
                                  })
                                onClose()
                                flushInputs();
                            }

                            )}
                        >


                            <Fieldset.Root size="lg" maxW="md">
                                <Stack>
                                    <Fieldset.Legend>Add Member</Fieldset.Legend>
                                    <Fieldset.HelperText>
                                        Please provide your contact details below.
                                    </Fieldset.HelperText>
                                </Stack>

                                <Fieldset.Content>
                                    <Field label="First Name">
                                        <Input
                                            autoFocus
                                            placeholder="Name"
                                            onChange={(e) => setFName(e.target.value)}
                                            //@ts-expect-error:fix
                                            variant="filled"
                                            value={fname}
                                            type="text"
                                        />
                                    </Field>
                                    <Field label="Last Name">
                                        <Input
                                            autoFocus
                                            placeholder="Name"
                                            onChange={(e) => setLName(e.target.value)}
                                            //@ts-expect-error:fix
                                            variant="filled"
                                            value={lname}
                                            type="text"
                                        />
                                    </Field>
                                    <Field label="Code">
                                        <Input
                                            //@ts-expect-error:fix
                                            variant="filled"
                                            // @ts-expect-error:type fix
                                            value={code}
                                            // @ts-expect-error:type fix
                                            onChange={(e) => setCode(e.target.value)}
                                            placeholder="Code"
                                            type="text"
                                        />
                                    </Field>

                                    <Field label="Email address">
                                        <Input
                                            autoFocus
                                            //@ts-expect-error:fix
                                            variant="filled"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                        />
                                    </Field>

                                    <NativeSelect.Root size="sm" width="240px">
                                        <NativeSelect.Field
                                            placeholder="MEMBER"
                                        
                                        value={category_id}
                                        onChange={(e) => setCategoryId(e.currentTarget.value)}
                                        >
                                            <option value="MEMBER">Member</option>
                                            <option value="SUPERADMIN">Admin</option>
                                     
                                        </NativeSelect.Field>
                                        <NativeSelect.Indicator />
                                    </NativeSelect.Root>
                                </Fieldset.Content>

                                <Button type="submit" alignSelf="flex-start">
                                    Submit
                                </Button>
                            </Fieldset.Root>

                            <Button mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button
                                //   isLoading={loading}
                                type="submit"
                                // @ts-expect-error:type fix
                                variantColor="teal"
                                variant="solid"
                                colorScheme="teal"
                                ml={3}
                            >
                                Create
                            </Button>

                        </form>
                    </PopoverBody>
                </PopoverContent>
            </PopoverRoot>

            {/* 
            <Modal blockScrollOnMount={false} isOpen={open} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <form
                        onSubmit={handleSubmit(async () => {

                            console.log('data', fname, lname, email, code, category_id)

                            const response = await fetch('/api/user', {
                                method: 'POST',

                                body: JSON.stringify({ firstName: fname, lastName: lname, email: email, code: code, role: category_id }),
                            })
                            const _data = await response.json()
                            console.log('data', _data)
                            toast({
                                title: "User created",
                                description: "We've created your user for you.",
                                status: "success",
                                position: "top",
                                duration: 3000,
                                isClosable: true,
                            });
                            onClose()
                            flushInputs();
                        }

                        )}
                    >
                        <ModalHeader>Add User</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input
                                    autoFocus
                                    placeholder="Name"
                                    onChange={(e) => setFName(e.target.value)}
                                    //@ts-expect-error:fix
                                    variant="filled"
                                    value={fname}
                                    type="text"
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Last Name</FormLabel>
                                <Input
                                    autoFocus
                                    placeholder="Name"
                                    onChange={(e) => setLName(e.target.value)}
                                             //@ts-expect-error:fix
                                    variant="filled"
                                    value={lname}
                                    type="text"
                                />
                            </FormControl>
                            <FormControl isRequired mt={6}>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    autoFocus
                                             //@ts-expect-error:fix
                                    variant="filled"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                />
                            </FormControl>

                            <FormControl isRequired mt={6}>
                                <FormLabel>Code</FormLabel>
                                <Input
                                         //@ts-expect-error:fix
                                    variant="filled"
                                    // @ts-expect-error:type fix
                                    value={code}
                                    // @ts-expect-error:type fix
                                    onChange={(e) => setCode(e.target.value)}
                                    placeholder="Code"
                                    type="text"
                                />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel htmlFor="category">Role</FormLabel>
                                <Select
                                    {...register("category_id", { required: true })}
                                    name="category_id"
                                    id="category"
                                    // @ts-expect-error:type fix
                                    onChange={(e) => setCategoryId(e.target.value)}
                                    placeholder="Select Role"
                                >

                                    <option value='MANAGER'>Manager</option>
                                    <option value='ADMIN'>Admin</option>
                                    <option value='HOSPITAL'>Hospital</option>

                                </Select>
                                <FormErrorMessage></FormErrorMessage>
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button
                                //   isLoading={loading}
                                type="submit"
                                // @ts-expect-error:type fix
                                variantColor="teal"
                                variant="solid"
                                colorScheme="teal"
                                ml={3}
                            >
                                Create
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal> */}
        </>
    );
};

export default AddItemModal;