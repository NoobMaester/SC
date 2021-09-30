import {Logo, Nav, StyledHeader} from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Button } from './styles/Button.styled';

export default function Header (){
    return (
        <StyledHeader>

            <Container>
                <Nav>
                    <Logo/>
                    <Button>Try It Free</Button>
                </Nav>
            </Container>
            
        </StyledHeader>
    )
}

