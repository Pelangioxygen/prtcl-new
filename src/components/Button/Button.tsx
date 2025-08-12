import React, { forwardRef } from "react";
import styles from "./Button.module.css";
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';
import Link, { LinkProps } from "next/link";

type CustomButtonProps = {
	component: 'button' | string;
	href?: never;
}  & LinkProps & BaseProps & Omit<MantineButtonProps, 'component' | 'href' | 'size' | 'variant'>;

type CustomLinkProps = {
	component: 'a' | string;
	href: string;
}  & LinkProps & BaseProps & Omit<MantineButtonProps, 'component' | 'href'>;

type BaseProps = {
	children?: React.ReactNode  | string;
	variant?: 'primary' | 'default' | 'glass' | 'icon' | 'outline' | string | 'white' | 'link' | 'social';
	size?: 'sm' | 'xs' | 'md' | 'lg' | 'xl' | string;
	component: 'a' | 'button' | string;
	shadow?: boolean;
}

export type ButtonComponentProps = CustomButtonProps| CustomLinkProps;

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonComponentProps >(
	(
		{
			children,
			className = "",
			href,
			size = "sm",
			shadow = false,
			variant = "default",
			component = 'a',
			...rest
		},
		ref
	) => {
		const classNames = `${styles.Button} ${className}`;
		const dataAttributes = {
			'data-variant': variant.toString(),
			'data-size': size,
			'data-shadow': shadow.toString(),
		};
		const linkprops = {
			...(className ? { className: className } : null)
		}

		if (variant === 'link' && href) {
			return <Link href={href} {...linkprops}>{children}</Link>
		}
		if (component === 'a' && href) {
			return (
				<MantineButton
					{...rest}
					href={href}
					{...dataAttributes}
					className={classNames}
					component={Link}
					ref={ref as React.ForwardedRef<HTMLAnchorElement>}
				>
					{children}
				</MantineButton>
			);
		}


		return (<MantineButton
				{...rest}
				{...dataAttributes}
				className={classNames}
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				component={component}
				ref={ref as React.ForwardedRef<HTMLButtonElement>}
			>
				{children}
			</MantineButton>
		);
	}
);

Button.displayName = "Button";

export default Button;