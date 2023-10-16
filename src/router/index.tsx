import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layouts/Layout";
import Home from "@/pages/Home";
import PageA from "@/pages/PageA";
import PageB from "@/pages/PageB";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/pageA",
				element: <PageA />,
			},
			{
				path: "/pageB",
				element: <PageB />,
			},
		],
	},
]);
export default router;
