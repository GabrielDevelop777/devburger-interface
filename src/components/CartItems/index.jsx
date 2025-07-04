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
const EmptyCartSVG = ({ width = 200, height = 160, className = "" }) => (
	<svg
		viewBox="0 0 400 300"
		width={width}
		height={height}
		className={className}
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<linearGradient
				id="backgroundGradient"
				x1="0%"
				y1="0%"
				x2="100%"
				y2="100%"
			>
				<stop offset="0%" style={{ stopColor: "#e3f2fd", stopOpacity: 1 }} />
				<stop offset="100%" style={{ stopColor: "#f8f9fa", stopOpacity: 1 }} />
			</linearGradient>

			<linearGradient id="cartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
				<stop offset="0%" style={{ stopColor: "#9758a6", stopOpacity: 1 }} />
				<stop offset="100%" style={{ stopColor: "#9758a6", stopOpacity: 1 }} />
			</linearGradient>

			<filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
				<feDropShadow
					dx="2"
					dy="4"
					stdDeviation="3"
					floodColor="#000"
					floodOpacity="0.1"
				/>
			</filter>
		</defs>

		<g transform="translate(170, 60)">
			<path
				d="M5 15 L55 15 L52 45 L8 45 Z"
				fill="url(#cartGradient)"
				stroke="#fff"
				strokeWidth="2"
				filter="url(#shadow)"
			/>

			<path
				d="M5 15 L0 5 L-8 5"
				fill="none"
				stroke="url(#cartGradient)"
				strokeWidth="3"
				strokeLinecap="round"
			/>

			<circle
				cx="15"
				cy="60"
				r="6"
				fill="url(#cartGradient)"
				stroke="#fff"
				strokeWidth="2"
				filter="url(#shadow)"
			/>
			<circle
				cx="45"
				cy="60"
				r="6"
				fill="url(#cartGradient)"
				stroke="#fff"
				strokeWidth="2"
				filter="url(#shadow)"
			/>

			<rect
				x="12"
				y="20"
				width="35"
				height="20"
				fill="rgba(255,255,255,0.2)"
				rx="2"
			/>
		</g>

		<text
			x="200"
			y="200"
			textAnchor="middle"
			fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
			fontSize="28"
			fontWeight="700"
			fill="#2c3e50"
		>
			Carrinho Vazio
			<animate
				attributeName="opacity"
				values="0.7;1;0.7"
				dur="3s"
				repeatCount="indefinite"
			/>
		</text>

		<text
			x="200"
			y="225"
			textAnchor="middle"
			fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
			fontSize="14"
			fill="#7f8c8d"
		>
			Que tal adicionar alguns produtos incríveis?
		</text>

		<circle cx="100" cy="80" r="3" fill="#9758a6" opacity="0.3">
			<animate
				attributeName="cy"
				values="80;70;80"
				dur="4s"
				repeatCount="indefinite"
			/>
		</circle>
		<circle cx="320" cy="120" r="2" fill="#9C27B0" opacity="0.4">
			<animate
				attributeName="cy"
				values="120;110;120"
				dur="3s"
				repeatCount="indefinite"
			/>
		</circle>
		<circle cx="80" cy="200" r="2" fill="#9C27B0" opacity="0.3">
			<animate
				attributeName="cy"
				values="200;190;200"
				dur="5s"
				repeatCount="indefinite"
			/>
		</circle>
		<circle cx="340" cy="180" r="3" fill="#9C27B0" opacity="0.3">
			<animate
				attributeName="cy"
				values="180;170;180"
				dur="3.5s"
				repeatCount="indefinite"
			/>
		</circle>
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
