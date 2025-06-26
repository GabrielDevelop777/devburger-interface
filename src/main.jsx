import { Elements } from "@stripe/react-stripe-js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "./styles/globalStyles";

import { RouterProvider } from "react-router-dom";
import stripePromisse from "./config/stripeconfig";
import AppProvider from "./hooks";
import { router } from "./routes";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AppProvider>
			<Elements stripe={stripePromisse}>
				<RouterProvider router={router} />
			</Elements>
			<GlobalStyles />
			<ToastContainer autoClose={2000} theme="colored" />
		</AppProvider>
	</StrictMode>,
);
