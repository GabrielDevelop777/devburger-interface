import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CardProduct } from "../../components/CardProduct";
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import {
	Banner,
	ButtonVoltar,
	CategoryButton,
	CategoryMenu,
	Container,
	ProductsContainer,
} from "./styles";

export function Menu() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	const navigate = useNavigate();

	const { search } = useLocation();

	const queryParams = new URLSearchParams(search);

	const [activeCategory, setActiveCategory] = useState(() => {
		const categoryId = +queryParams.get("categoria");

		if (categoryId) {
			return categoryId;
		}
		return 0;
	});

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get("/categories");

			const newCategories = [{ id: 0, name: "Todas" }, ...data];

			setCategories(newCategories);
		}

		async function loadProducts() {
			const { data } = await api.get("/products");

			const newProducts = data.map((product) => ({
				currencyValue: formatPrice(product.price),
				...product,
			}));

			setProducts(newProducts);
		}
		loadCategories();
		loadProducts();
	}, []);

	useEffect(() => {
		if (activeCategory === 0) {
			setFilteredProducts(products);
		} else {
			const newfilteredProducts = products.filter(
				(product) => product.category_id === activeCategory,
			);

			setFilteredProducts(newfilteredProducts);
		}
	}, [products, activeCategory]);

	return (
		<Container>
			<Banner>
				<h1>
					O MELHOR
					<br />
					HAMBURGUER
					<br />
					ESTÁ AQUI!
					<span>Esse cárdapio está irresistível!</span>
				</h1>
			</Banner>
			<CategoryMenu>
				{categories.map((category) => (
					<CategoryButton
						$isActiveCategory={category.id === activeCategory}
						onClick={() => {
							navigate(
								{
									pathname: "/cardapio",
									search: `?categoria=${category.id}`,
								},
								{
									replace: true,
								},
							);
							setActiveCategory(category.id);
						}}
						key={category.id}
					>
						{category.name}
					</CategoryButton>
				))}
			</CategoryMenu>
			<ProductsContainer>
				{filteredProducts.map((product) => (
					<CardProduct product={product} key={product.id} />
				))}
			</ProductsContainer>
			<ButtonVoltar to="/">Voltar</ButtonVoltar>
			<Footer />
		</Container>
	);
}
