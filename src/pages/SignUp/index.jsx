import { Container, Form } from './styles';
import { Logo }  from '../../components/Logo';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button';
// import { Link } from 'react-router-dom';


export function SignUp() {
    return(
        <Container>
            <Logo />
            <Form>
                <h1>Crie sua conta</h1>

                <Input 
                id='name'
                type='text'
                label='Seu nome'
                placeholder='Digite seu nome'
                />

                <Input
					id='email'
					type='text'
					label='E-mail'
					placeholder='exemplo@exemplo.com.br'
				/>

                    <Input
					id='password'
					type='password'
					label='Senha'
					placeholder='No mínimo 6 caracteres'
				/>

                <Button title='criar conta'/>

                {/* <Link to="/register">Criar uma conta</Link> */}
            </Form>
        </Container>
    )
}
