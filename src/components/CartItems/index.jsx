// CartItems.jsx
import TrashIcon from "../../assets/trash.svg";
import { useCart } from "../../hooks/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import { Table } from "../index";
import {
	ButtonGroup,
	EmptyCart,
	ProductImage,
	ProductTotalPrice,
	TrashImage,
} from "./style";

// Componente SVG personalizado para carrinho vazio
const EmptyCartSVG = () => (
	<svg
		width="400"
		height="160"
		viewBox="0 0 300 120"
		xmlns="http://www.w3.org/2000/svg"
		opacity="0.6"
	>
		{/* Texto "SEU CARRINHO" */}
		<text
			x="15"
			y="45"
			fontFamily="Arial, sans-serif"
			fontSize="24"
			fontWeight="bold"
			fill="#999"
		>
			SEU CARRINHO
		</text>

		{/* Texto "ESTÁ VAZIO" */}
		<text
			x="15"
			y="75"
			fontFamily="Arial, sans-serif"
			fontSize="24"
			fontWeight="bold"
			fill="#999"
		>
			ESTÁ VAZIO
		</text>

		{/* Carrinho de compras */}
		<g transform="translate(220, 25)">
			{/* Alça/cabo do carrinho */}
			<path
				d="M8 12 C8 8 11 4 15 4 L72 4 C76 4 79 8 79 12"
				stroke="#999"
				strokeWidth="3"
				fill="none"
				strokeLinecap="round"
			/>

			{/* Corpo principal do carrinho */}
			<path
				d="M15 12 L19 12 L23 38 L65 38 L68 12 L72 12"
				stroke="#999"
				strokeWidth="3"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			{/* Base do carrinho */}
			<path
				d="M23 38 L65 38 L63 53 L25 53 Z"
				stroke="#999"
				strokeWidth="2.5"
				fill="none"
				strokeLinejoin="round"
			/>

			{/* Cabo/alça para segurar */}
			<path
				d="M-8 20 L8 20"
				stroke="#999"
				strokeWidth="3"
				strokeLinecap="round"
			/>

			{/* Conexão do cabo com o carrinho */}
			<path
				d="M8 12 L8 28"
				stroke="#999"
				strokeWidth="3"
				strokeLinecap="round"
			/>

			{/* Rodas */}
			<circle cx="32" cy="65" r="4.5" fill="#999" />
			<circle cx="56" cy="65" r="4.5" fill="#999" />

			{/* X vermelho */}
			<g transform="translate(44, 27)">
				<line
					x1="-6"
					y1="-6"
					x2="6"
					y2="6"
					stroke="#e74c3c"
					strokeWidth="2.5"
					strokeLinecap="round"
				/>
				<line
					x1="6"
					y1="-6"
					x2="-6"
					y2="6"
					stroke="#e74c3c"
					strokeWidth="2.5"
					strokeLinecap="round"
				/>
			</g>
		</g>
	</svg>
);

export function CartItems() {
	const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } =
		useCart();

	return (
		<Table.Root>
			<Table.Header>
				<Table.Tr>
					<Table.Th />
					<Table.Th>Items</Table.Th>
					<Table.Th>Preço</Table.Th>
					<Table.Th>Quantidade</Table.Th>
					<Table.Th>Total</Table.Th>
					<Table.Th />
				</Table.Tr>
			</Table.Header>
			{cartProducts?.length ? (
				cartProducts.map((product) => (
					<Table.Tr key={product.id}>
						<Table.Td>
							<ProductImage src={product.url} />
						</Table.Td>

						<Table.Td>{product.name}</Table.Td>

						<Table.Td>{product.currencyValue}</Table.Td>

						<Table.Td>
							<ButtonGroup>
								<button onClick={() => decreaseProduct(product.id)}>-</button>

								{product.quantity}

								<button onClick={() => increaseProduct(product.id)}>+</button>
							</ButtonGroup>
						</Table.Td>
						<Table.Td>
							<ProductTotalPrice>
								{formatPrice(product.quantity * product.price)}
							</ProductTotalPrice>
						</Table.Td>
						<Table.Td>
							<TrashImage
								src={TrashIcon}
								alt="lixeira"
								onClick={() => deleteProduct(product.id)}
							/>
						</Table.Td>
					</Table.Tr>
				))
			) : (
				<EmptyCart>
					<EmptyCartSVG />
				</EmptyCart>
			)}
			<Table.Body />
		</Table.Root>
	);
}
