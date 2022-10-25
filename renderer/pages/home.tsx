import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Box,
  Flex,
  Heading,
  Divider,
  HStack,
  VStack,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { createUserFormSchema } from "../schemas/user";
import { Input } from "../components/Form/Input";
import { Select } from "../components/Form/Select";
import { Textarea } from "../components/Form/Textarea";
import { RadioGroup } from "../components/Form/RadioGroup";
import { Checkbox } from "../components/Form/Checkbox";
import { CheckboxGroup } from "../components/Form/CheckboxGroup";
import { Switch } from "../components/Form/Switch";
import { DatePicker } from "../components/Form/DatePicker";

const TextEditor = dynamic(() =>
  import("../components/Form/TextEditor").then(module => module.TextEditor), {
    ssr: false,
  }
);

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  gender: string;
  description: string;
  radio: string;
  rememberMe: boolean;
  stringArray: string[];
  enableEmails: boolean;
  date: string;
  startDate: string;
  endDate: string;
  textEditor: string;
};

function Home() {
  const { register, handleSubmit, formState, setValue, control, reset, watch } =
    useForm({
      resolver: yupResolver(createUserFormSchema),
    });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    console.log("Values => ", values);
  };

  const click = () => {
    setValue("gender", "MALE", { shouldValidate: true });
    setValue("name", "Gustavo", { shouldValidate: true });
    setValue("email", "teste@teste.com", { shouldValidate: true });
    setValue("password", "123456", { shouldValidate: true });
    setValue("password_confirmation", "123456", { shouldValidate: true });
    setValue("description", "Teste123", { shouldValidate: true });
    setValue("radio", "1", { shouldValidate: true });
    setValue("rememberMe", true, { shouldDirty: true });
    setValue("stringArray", ["Naruto"], { shouldValidate: true });
    setValue("enableEmails", true, { shouldDirty: true });
    setValue("date", new Date(), { shouldValidate: true });
    setValue("textEditor", '<p>Teste 123</p>', { shouldValidate: true });
  };
  
  return (
    <Box>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome completo"
                {...register("name")}
                error={formState.errors.name}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                {...register("email")}
                error={formState.errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                {...register("password")}
                error={formState.errors.password}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação de senha"
                {...register("password_confirmation")}
                error={formState.errors.password_confirmation}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Select
                name="gender"
                label="Gênero"
                {...register("gender")}
                error={formState.errors.gender}
                defaultValue={null}
                placeholder="Selecione uma opção"
                options={[
                  { label: "Masculino", value: "MALE" },
                  { label: "Feminino", value: "FEMALE" },
                  { label: "Outros", value: "OTHERS" },
                ]}
              />
              <Textarea
                name="description"
                label="Descrição"
                {...register("description")}
                error={formState.errors.description}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <RadioGroup
                name="radio"
                label="Selecione uma opcao"
                error={formState.errors.radio}
                control={control}
                options={[
                  { label: "Option 1", value: "1" },
                  { label: "Option 2", value: "2" },
                ]}
              />
              <Checkbox
                name="rememberMe"
                label="Lembrar de mim"
                control={control}
                {...register("rememberMe")}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <CheckboxGroup
                name="stringArray"
                label="Qual voce gosta?"
                error={formState.errors.stringArray}
                control={control}
                options={[
                  { label: "Naruto", value: "Naruto" },
                  { label: "Sasuke", value: "Sasuke" },
                  { label: "Kakashi", value: "Kakashi" },
                ]}
              />
              <Switch
                name="enableEmails"
                label="Ativar alertas de e-mail?"
                error={formState.errors.enableEmails}
                control={control}
                confirmText="Sim"
                negativeText="Não"
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <DatePicker
                control={control}
                name="date"
                label="Selecione a data"
                error={formState.errors.date}
              />
              <TextEditor
                control={control}
                label="Digite o texto"
                name="textEditor"
                error={formState.errors.textEditor}
                setValue={setValue}
                htmlValue={watch('textEditor')}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/home" passHref>
                <Button as="a" colorScheme="blue">
                  Cancelar
                </Button>
              </Link>
              <Button onClick={() => click()} colorScheme="pink">
                Preencher Automatico
              </Button>
              <Button
                onClick={() => {
                  reset();
                  setValue("rememberMe", false, { shouldValidate: false });
                  setValue("stringArray", [], { shouldValidate: false });
                  setValue("radio", null, { shouldValidate: false });
                  setValue("enableEmails", false, { shouldValidate: false });
                  setValue("date", null, { shouldValidate: false });
                  setValue("textEditor", '<p></p>', { shouldValidate: false });
                }}
                colorScheme="blue"
              >
                Resetar formulário
              </Button>
              <Button
                colorScheme="pink"
                type="submit"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Home;
