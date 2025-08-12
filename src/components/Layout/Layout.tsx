import React, { FC } from "react";
import styles from "./Layout.module.css";
import MainLayout from "./MainLayout";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

interface LayoutProps {
	children?: React.ReactNode;
	className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
 const Layout: FC<LayoutProps> = ({ children, className = "", ...props }) => {
	return (
		<>
			<Header/>
			<MainLayout className={'grid' + ` ${className}`}>
				{children}
				<Footer/>
			</MainLayout>

			<div className={styles.bgcircle}></div>
		</>
	);
};

export default Layout;