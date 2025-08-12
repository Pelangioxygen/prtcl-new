import React, { FC } from "react";
import styles from "./Footer.module.css";
import Socials from "@/components/Socials/Socials";
import { Logo } from "@/components/Icons/Icons";
import { config } from "@/content/config";
import Link from "next/link";

interface FooterProps {
	children?: React.ReactNode;
	className?: string;
}

 const Footer: FC<FooterProps> = ({ children, className = "", ...props }) => {
	return (
		<footer className={`${styles.Footer} ${className}`} {...props}>
			<div className={styles.box}>
				<div className={styles.logobox}>
					<Logo/>
					<h3>{config.info.group}</h3>
					<h4>{config.info.slogan}</h4>
				</div>
				<div className={styles.contacts}>
					<p>{config.contacts.address}</p>

					<p>	<a  href={`tel:${config.contacts.phone.raw}`}>
						{config.contacts.phone.text}
					</a> • <a  href={`mailto:${config.contacts.email}`}>
						{config.contacts.email}
					</a></p>
				</div>
				<Socials/>
			</div>
			<div className={styles.line}>
				<div>
				{'@' + new Date().getFullYear() + " PRTCL — Your heath protocol"}
				</div>
				<div className={'flex gap-x-4'}>
					<Link href={'/privacy'}>Privacy policy</Link>
					<Link href={'/terms'}>Terms & Condition</Link>
				</div>

			</div>
			{children}

		</footer>
	);
};

export default Footer;