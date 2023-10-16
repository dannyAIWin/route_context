import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Outlet } from "react-router-dom";
const Layout = () => {
	return (
		<>
			<Header />
			<div
				style={{
					maxWidth: "1200px",
					margin: "0 auto",
					minHeight: "calc(100vh - 100px)",
				}}
			>
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default Layout;
