import { Link as RouterLink } from "react-router-dom";
const Header = () => {
	return (
		<div
			style={{
				background: "lightblue",
				display: "flex",
				justifyContent: "flex-end",
			}}
		>
			<div style={{ padding: "8px" }}>
				<RouterLink to="/">首頁</RouterLink>
			</div>
			<div style={{ padding: "8px" }}>
				<RouterLink to="/PageA">PageA</RouterLink>
			</div>
			<div style={{ padding: "8px" }}>
				<RouterLink to="/PageB">PageB</RouterLink>
			</div>
		</div>
	);
};

export default Header;
