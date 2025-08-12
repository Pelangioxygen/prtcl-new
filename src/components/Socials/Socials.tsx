import React, { FC } from "react";
import styles from "./Socials.module.css";
import { FBIcon, InstIcon, LnkDldIcon, XIcon, YouTubeIcon } from "@/components/Icons/Icons";
import Button from "@/components/Button/Button";

interface SocialsProps {
	children?: React.ReactNode;
	className?: string;
}

 const Socials: FC<SocialsProps> = ({ children, className = "", ...props }) => {
	const ar = [
		{
			icon: <FBIcon />,
			href: 'fb'
		},
		{
			icon: <XIcon />,
			href: 'x'
		},
		{
			icon: <InstIcon />,
			href: 'inst'
		},
		{
			icon: <LnkDldIcon />,
			href: 'lnkdld'
		},
		{
			icon: <YouTubeIcon />,
			href: 'youtube'
		}
	]
	return (
		<div className={`${styles.Socials} ${className}`} {...props}>
			{children}
			{ar.map((a) => <Button key={a.href} href={a.href} shadow={true} component={'a'} size={'xs'} variant={'social'}>{a.icon}</Button> )}
		</div>
	);
};

export default Socials;