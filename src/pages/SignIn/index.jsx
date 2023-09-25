import { Container, Form } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
    return (
        <Container>
            <Logo 
            size={3.9}/>
        <Form>
            <h1>Faça seu Login</h1>
            <Input
             id='email'
             label='E-mail'
             placeholder="exemplo@email.com"
            />

            <Input 
            id="password"
            type="password"
            label="Senha"
            placeholder="Sua senha"
            />
            <Button 
             title='entrar'/>
            </Form> 
        </Container>
    )
}