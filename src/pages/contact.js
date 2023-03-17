import Head from "next/head";
import {
  Box,
  Container,
  Text,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import Header from "@/components/Header";
import { sendContactForm } from "../../lib/api";

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { values: initValues };

export default function Home() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  //Submitting the form
  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <Box>
      <Box background="green" margin="0">
        <Header />
      </Box>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Contact Form to contact the company for questions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link type="image/png" sizes="16x16" rel="icon" href="/passport.png" />
      </Head>
      <Container maxW="450px" mt={12} marginTop="5%" marginBottom="5%">
        <Heading textAlign="center" margin="20px">
          Contact
        </Heading>
        {error && (
          <Text color="red.300" my={4} fontSize="xl">
            {error}
          </Text>
        )}
        <FormControl isRequired isInvalid={touched.name && !values.name} mb="5">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            borderColor="black"
            errorBorderColor="red.300"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.email && !values.email}
          mb="5"
        >
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={values.email}
            borderColor="black"
            errorBorderColor="red.300"
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.subject && !values.subject}
          mb="5"
        >
          <FormLabel>Subject</FormLabel>
          <Input
            type="text"
            name="subject"
            value={values.subject}
            borderColor="black"
            errorBorderColor="red.300"
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.message && !values.message}
          mb="5"
        >
          <FormLabel>Message</FormLabel>
          <Textarea
            type="text"
            name="message"
            value={values.message}
            borderColor="black"
            errorBorderColor="red.300"
            onChange={handleChange}
            rows={4}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <Button
          variant="outline"
          colorScheme="blue"
          isLoading={isLoading}
          isDisabled={
            !values.name || !values.email || !values.subject || !values.message
          }
          onClick={onSubmit}
          marginTop="3%"
        >
          Submit
        </Button>
      </Container>
    </Box>
  );
}
