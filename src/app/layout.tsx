import type { Metadata } from "next";
import "@/app/globals.css";
import localFont from 'next/font/local'
import { NextFont } from "next/dist/compiled/@next/font";
import { HeadlessMantineProvider } from "@mantine/core";

export const metadata: Metadata = {
	title: "Next App Mantine Tailwind Template",
	description: "Next App Mantine Tailwind Template",
};
const inter:NextFont = localFont({
	src: './assets/styles/Inter/InterVariable.woff2',
	display: 'swap',
	variable: '--inter-display',
})
const circular_prtcl = localFont({
	src: './assets/styles/CircularPRTCL-Book/CircularPRTCL-Book.woff2',
	display: 'swap',
	variable: '--circular-prtcl',
})


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru" className={circular_prtcl.className }>
			<head>
				<meta name="apple-mobile-web-app-title" content="Prtcl" />
			</head>
			<body className={inter.className + " " + "antialiased"}>
				<HeadlessMantineProvider>
					{children}
				</HeadlessMantineProvider>
			</body>
		</html>
	);
}
