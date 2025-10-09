'use client'
import styles from "@/components/Header/HeaderMobile.module.css";
import Link from "next/link";
import { Logo, PhoneBurgerIcon } from "@/components/Icons/Icons";
import { config } from "@/content/config";
import LinkTheme from "@/components/LinkTheme/LinkTheme";
import React, { useMemo } from "react";
import BurgerIcon from "@/components/Icons/BurgerIcon";
import { useViewportSize } from "@mantine/hooks";
import HeaderDesktop from "@/components/Header/HeaderDesktop";

const HeaderMobile = () => {

	const [state, setState] = React.useState(false);
	const { width } = useViewportSize();
	const headers = useMemo(() => {
		if (width < 1024) {
			return <>
				<div className={styles.topbar} data-state={state}>
				<div className={styles.burger} onClick={() => setState(prevState => !prevState)}>
					<BurgerIcon state={state} />
				</div>
				<div className={styles.logo}>
					<Link href={"/"}>
						<Logo />
					</Link>
				</div>
				<div className={"row-start-2 relative z-10 col-span-full hidden lg:block"} data-content={"slogan"}>

						<h3 className={"text-sm block text-white"}>{config.info.group}</h3>
						<h4 className={"text-sm block text-white"}>{config.info.slogan}</h4>

				</div>
				<nav className={styles.menu}  data-state={state}>
					{config.menu.map((l) => (
						<LinkTheme key={l.link} href={l.link} className={"text-white border-b border-b-transparent hover:border-b-white data-[active=true]:border-b-white"}>
							{l.name}
						</LinkTheme>
					))}
				</nav>
				{/*<div className={styles.langswitcher}>*/}
				{/*	<LinkTheme className={"text-white border-b border-b-transparent hover:border-b-white data-[active=true]:border-b-white"} href={"/"} locale={"en"}>*/}
				{/*		en*/}
				{/*	</LinkTheme>*/}
				{/*	<hr />*/}
				{/*	<LinkTheme className={"text-white border-b border-b-transparent  hover:border-b-white data-[active=true]:border-b-white"} href={"/es"} locale={"es"}>*/}
				{/*		es*/}
				{/*	</LinkTheme>*/}
				{/*</div>*/}
				<div className={styles.phoneButton}  data-state={state}>
					<a href={`mailto: ${config.contacts.email}`}>
						<PhoneBurgerIcon/>
					</a>
				</div>
				<div className={styles.btns}   data-state={state}>
					<div className={"flex items-center justify-center gap-x-4"}>
						<Link href={"/refer-a-patient"}>Refer a Patient</Link>
						<Link href={'/prices'}>Book Now</Link>
					</div>
				</div>
				<div className={styles.bottombar}   data-state={state}>
					<div className={styles.address}>
						<span>{config.contacts.address}</span>
						<a href={`tel: ${config.contacts.phone.raw}`} >{config.contacts.phone.text}</a>
						<a href={`mailto: ${config.contacts.email}`}>{config.contacts.email}</a>
					</div>
				</div>
			</div>


			</>
		}
		return <HeaderDesktop />
	}, [state, width]);

	if (!width) return;
	return <div className={styles.wrapper  + "  grid"} data-state={state}>{headers}</div>;
};
export default HeaderMobile;