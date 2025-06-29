import { Elements } from "@stripe/react-stripe-js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "./styles/globalStyles";

import { BrowserRouter } from "react-router-dom";
import stripePromisse from "./config/stripeConfig";
import AppProvider from "./hooks";
import { Router } from "./routes";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AppProvider>
			<Elements stripe={stripePromisse}>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</Elements>
			<GlobalStyles />
			<ToastContainer autoClose={2000} theme="colored" />
		</AppProvider>
	</StrictMode>,
);
