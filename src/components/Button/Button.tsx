import React, { forwardRef } from "react";
import styles from "./Button.module.css";
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';
import Link, { LinkProps } from "next/link";

type CustomButtonProps = {
	component: 'button' | string;
	href?: never;
} & Omit<MantineButtonProps, 'component' | 'href' | 'size' | 'variant'>   & BaseProps;

type CustomLinkProps = {
	component: 'a' | string;
	href: string;
} & Omit<MantineButtonProps, 'component' | 'href'> & LinkProps   & BaseProps;

type BaseProps = {
	children?: React.ReactNode  | string;
	variant: 'primary' | 'default' | 'glass' | 'icon' | 'outline' | string | 'white';
	size: 'sm' | 'xs' | 'md' | 'lg' | 'xl' | string;
	component?: 'a' | 'button';
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

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		return (<MantineButton
				{...rest}
				{...dataAttributes}
				className={classNames}
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