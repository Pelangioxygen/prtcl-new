import React from "react";
import HeaderMobile from "@/components/Header/HeaderMobile";
import styles from "@/components/Header/HeaderMobile.module.css";

const Header = () => {

	return (
		<header className={`${styles.Header}`} >
			<HeaderMobile/>
		</header>
	)
}

export default Header;
