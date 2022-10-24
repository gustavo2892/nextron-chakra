import * as yup from 'yup';

export const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais'),
  gender: yup.string().required('Gênero obrigatório'),
  description: yup.string().required('Descrição obrigatório'),
  radio: yup.string().required('Selecione uma opção'),
  rememberMe: yup.boolean(),
  stringArray: yup.array().min(1, 'Selecione pelo menos uma opcao').required('Campo obrigatório'),
  enableEmails: yup.boolean()
});