'use client'
import React, { FC } from "react";
import styles from "./LinkTheme.module.css";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface LinkThemeProps  extends LinkProps {
	href: string;
	className?: string;
	children?: React.ReactNode;
}

 const LinkTheme: FC<LinkThemeProps> = ({ href, children, className = "", ...props }) => {
	 const pathname = usePathname()
	return (
		<Link href={href} data-active={pathname === `${href}` ? 'true' : 'false'} className={`${styles.LinkTheme} ${className}`} {...props}>
			{children}
		</Link>
	);
};

export default LinkTheme;