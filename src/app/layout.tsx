import type { Metadata } from "next";
import "@/app/globals.css";
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import { NextFont } from "next/dist/compiled/@next/font";
import Layout from "@/components/Layout/Layout";
import { HeadlessMantineProvider } from "@mantine/core";

export const metadata: Metadata = {
	title: "Next App Mantine Tailwind Template",
	description: "Next App Mantine Tailwind Template",
};
const inter:NextFont = Inter({
	subsets: ['latin'],
	display: 'swap',
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
			<body className={inter.className + " " + "antialiased"}>
				<HeadlessMantineProvider>
					<Layout>{children}</Layout>
				</HeadlessMantineProvider>
			</body>
		</html>
	);
}
