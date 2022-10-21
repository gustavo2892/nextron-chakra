import React from "react";
import Head from "next/head";
import Link from "next/link";
import { BasicCard } from "../components/BasicCard";
import { TitleCard } from "../components/TitleCard";
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

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  gender: string;
  description: string;
};

function Next() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    console.log("Esses sao os values => ", values);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-typescript-emotion)</title>
      </Head>
      <div>
        <TitleCard>Nextron with Emotion</TitleCard>
        <BasicCard>
          <Link href="/home">
            <a>Go to home page</a>
          </Link>
        </BasicCard>
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
                    placeholder='Selecione uma opção'
                  >
                    <option value='MALE'>Masculino</option>
                    <option value='FEMALE'>Feminino</option>
                    <option value='OTHERS'>Outros</option>
                  </Select >
                  <Textarea
                    name="description"
                    label="Descrição"
                    {...register("description")}
                    error={formState.errors.description}
                  />
                </SimpleGrid>
              </VStack>

              <Flex mt="8" justify="flex-end">
                <HStack spacing="4">
                  <Link href="/home" passHref>
                    <Button as="a" colorScheme="whiteAlpha">
                      Cancelar
                    </Button>
                  </Link>
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
      </div>
    </React.Fragment>
  );
}

export default Next;
