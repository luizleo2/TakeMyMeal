
import { Container } from "./styles";
import { Logo } from "../Logo";
import { Input } from "../Input";
import { Button } from "../Button";
import { Link } from "react-router-dom";

import { MagnifyingGlass, SignOut } from "@phosphor-icons/react";

export function Header() {
    return (
        <Container>
        <div className='header-content'>
            <Logo  size={2.1} />

        <Input
          icon={MagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
        />
        
        {/* <Button /> */}

        {/* <Link to="/">
          <SignOut
            size={40}
            role="button"
            aria-label="Sair"
            className="sign-out"
          />
        </Link> */}
        </div>
        </Container>
    )
}