import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import StringProvider from "@/provider/StringProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<StringProvider>
			<RouterProvider router={router} />
		</StringProvider>
	</React.StrictMode>
);
