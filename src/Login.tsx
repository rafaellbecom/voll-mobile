import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './components/Titulo';
import { Botao } from './components/Botao';
import { EntradaTexto } from './components/EntradaTexto';

export default function Login() {
  return (
    <VStack flex={1} justifyContent="center" alignItems="center" p={5}>
      <Image source={require('./assets/Logo.png')} alt="Logo Voll" />
      
      <Titulo>Faça login em sua conta</Titulo>

      <Box>
        <EntradaTexto label="Email" placeholder="Insira seu endereço de email"/>

        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input 
            placeholder="Insira sua senha"
            size="lg"
            w="100%"
            borderRadius="lg"
            bgColor="gray.100"
            shadow={3}  
          />
        </FormControl>
      </Box>

      <Botao>Entrar</Botao>

      <Link
        href="https://alura.com.br"
        mt={2}
      >
        Esqueceu sua senha?
      </Link>

      <Box
        w="100%"
        mt={12}
        flexDirection="row"
        justifyContent="center"
      >
        <Text
          color="blue.800"
        >
          Ainda não tem cadastro? 
        </Text>
        <TouchableOpacity>
          <Text
            color="blue.500"
            fontWeight="bold"
          >
            Faça seu cadastro
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}

