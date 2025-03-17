import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {

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
    Stack,
    Input,
    Portal,
    Button,
    CloseButton,
    Dialog,
    Flex,

} from "@chakra-ui/react";
import { Field } from "@/components/ui/field"
import { toaster,Toaster } from "@/components/ui/toaster"


const AddItemModal: React.FC = () => {

    const { handleSubmit } = useForm();
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [phone, setPhone] = useState("");
    const [open, setOpen] = useState(false)
  



    const flushInputs = () => {
        setFName("");
        setLName("");
        setEmail("");
        setCode("")
        setPhone("")

    };

    const onOpenDealModal = () => {

        setOpen(true);
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
            <Toaster      />
            <Dialog.Root  open={open} onOpenChange={(e) => setOpen(e.open)}>

                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title>Add Member</Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Body>
                                <form
                                    onSubmit={handleSubmit(async () => {

                                        console.log('data', fname, lname, email, code,phone )

                                        const response = await fetch('/api/user', {
                                            method: 'POST',

                                            body: JSON.stringify({ firstName: fname, lastName: lname, email: email, code: code ,phone:phone,}),
                                        })
                                        const _data = await response.json()
                                        console.log('data', _data)

                                        toaster.create({
                                            description: "Member created successfully",
                                            type: "success",
                                        })
                                        setOpen(false)
                                        flushInputs();
                                    }

                                    )}
                                >


                                    <Fieldset.Root size="lg" maxW="md">
                                        <Stack>

                                            <Fieldset.HelperText>
                                                Please enter member details below.
                                            </Fieldset.HelperText>
                                        </Stack>

                                        <Fieldset.Content>
                                            <Field label="First Name">
                                                <Input
                                                    autoFocus
                                                    placeholder="Name"
                                                    onChange={(e) => setFName(e.target.value)}

                                                    variant="outline"
                                                    value={fname}
                                                    type="text"
                                                />
                                            </Field>
                                            <Field label="Last Name">
                                                <Input
                                                    autoFocus
                                                    placeholder="Name"
                                                    onChange={(e) => setLName(e.target.value)}

                                                    variant="outline"
                                                    value={lname}
                                                    type="text"
                                                />
                                            </Field>
                                            <Field label="Code">
                                                <Input

                                                    variant="outline"
                                                   
                                                    value={code}
                                           
                                                    onChange={(e) => setCode(e.target.value)}
                                                    placeholder="Code"
                                                    type="text"
                                                />
                                            </Field>

                                            <Field label="Email address">
                                                <Input
                                                    autoFocus

                                                    variant="outline"
                                                    value={email}
                                                    placeholder="email"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    type="email"
                                                />
                                            </Field>
                                            <Field label="Phone Number">
                                                <Input
                                                    autoFocus

                                                    variant="outline"
                                                    value={phone}
                                                    placeholder="phone"
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    type="text"
                                                />
                                            </Field>

                                        </Fieldset.Content>
                                        <Flex justifyContent={'center'} alignItems={'center'} gap={4}>
                                            <Button type="submit" alignSelf="flex-start">
                                                Submit
                                            </Button>

                                            <Button  variant="surface" mr={3} onClick={()=>setOpen(false)}>
                                                Close
                                            </Button>
                                        </Flex>

                                    </Fieldset.Root>

                                </form>
                            </Dialog.Body>

                            <Dialog.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Dialog.CloseTrigger>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>



        </>
    );
};

export default AddItemModal;