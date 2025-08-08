import React, { FC } from "react";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
	children?: React.ReactNode;
	className?: string;
}

 const MainLayout: FC<MainLayoutProps> = ({ children, className = "", ...props }) => {
	return (
		<main className={`${styles.MainLayout} ${className}`} {...props}>
			{children}
		</main>
	);
};

export default MainLayout;