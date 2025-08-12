import React from "react";
import styles from "./Header.module.css";
import { config } from "@/content/config";
import Link from "next/link";
import { Logo, PhoneIcon, WorkingTimeIcon } from "@/components/Icons/Icons";
import LinkTheme from "@/components/LinkTheme/LinkTheme";
import Button from "@/components/Button/Button";

const Header = () => {
	return (
		<header className={`${styles.Header} grid`}>
			<div className={styles.topbar}>
				<div className={styles.logo}>
					<Link href={"/"}>
						<Logo />
					</Link>
				</div>
				<nav className={styles.menu}>
					{config.menu.map((l) => (
						<LinkTheme key={l.link} href={l.link} className={"text-white border-b border-b-transparent hover:border-b-white data-[active=true]:border-b-white"}>
							{l.name}
						</LinkTheme>
					))}
				</nav>
				<div className={styles.langswitcher}>
					<LinkTheme className={"text-white border-b border-b-transparent hover:border-b-white data-[active=true]:border-b-white"} href={"/"} locale={"en"}>
						en
					</LinkTheme>
					<hr />
					<LinkTheme className={"text-white border-b border-b-transparent  hover:border-b-white data-[active=true]:border-b-white"} href={"/es"} locale={"es"}>
						es
					</LinkTheme>
				</div>
				<div className={"flex items-center gap-x-4"}>
					<Button component={"a"} href={"/refer-a-patient"}>Refer a Patient</Button>
					<Button component={'a'} variant={"outline"}  href={'/book-now'}>Book Now</Button>
				</div>
			</div>
			<div className={styles.bottombar}>
				<div className={"flex-1 flex items-center gap-x-4  text-primary"}>
					<span className={'text-sm'}>{config.info.group}</span>
					<span className={styles.circle}></span>
					<span className={'text-sm'}>{config.info.slogan}</span>
				</div>
				<div className={"flex-1 flex items-center justify-end gap-x-4"}>
					<span className={"inline-flex gap-2 items-center text-base font-medium text-primary"}>
						<WorkingTimeIcon className={"h-3.5 w-3.5"} />
						{config.contacts.workingHours}
					</span>
					<span>
						<a className={"inline-flex gap-2 items-center text-base font-bold text-primary"} href={`tel:${config.contacts.phone.raw}`}>
							<PhoneIcon className={"h-3.5 w-3.5"} />
							{config.contacts.phone.text}
						</a>
					</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
