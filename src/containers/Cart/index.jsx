import Logo from "../../assets/logo.svg";
import { CartItems } from "../../components/CartItems";
import { Header } from "../../components/Header";
import { Banner, Container, Content, Title } from "./styles";

export function Cart() {
	return (
		<Container>
			<Header />
			<Banner>
				<img src={Logo} alt="logo" />
			</Banner>
			<Title>Checkout - Pedido</Title>
			<Content>
			<CartItems />
            {/* <CartResume />  */}
			</Content>
		</Container>
	);
}
