'use client'
import React, { forwardRef } from "react";
import styles from "./FieldComposer.module.css";
import { NumberInput, Radio, Select, Textarea, TextInput } from "@mantine/core";
import DatePick from "@/components/DatePick/DatePick";


interface FieldComposerProps {
	children?: React.ReactNode;
	className?: string;
	[key:string]: unknown
}
const baseStyles = {
	label: styles.label,
	root: styles.root,
	input: styles.input,
	controls: "absolute",
	error: 'absolute text-red-500 text-xs bottom-0 mt-0 -mb-5'
};
// eslint-disable-next-line react/display-name
const FieldComposer = forwardRef<HTMLInputElement, FieldComposerProps>((_props: FieldComposerProps, ref) => {
	const {error, placeholder,  ...rest} = _props;
	let props:Record<string, unknown> = {};
	props = {
		...rest,
		placeholder: error ? error : placeholder,
		'data-error': !!error
	}
	const element = {
		text: <TextInput classNames={baseStyles} {...props} ref={ref}/>,
		number: <NumberInput classNames={baseStyles} {...props} />,
		email: <TextInput classNames={baseStyles} {...props} />,
		date: <DatePick {...props} ref={ref}/>,

		select: <Select unstyled  comboboxProps={{ shadow: 'md' }}  classNames={{
			...baseStyles,
			wrapper: styles.wrapper,
			section: styles.section,
			options: styles.options,
			option: styles.option,
			dropdown: styles.dropdown
		}}   withCheckIcon={false}
							styles={{ dropdown: { maxHeight: '50vh', overflowY: 'auto' } }}    withScrollArea={false} variant={"filled"}  {...props} />,
		radio: <Radio classNames={baseStyles} {...props} />,
		textarea: <Textarea classNames={baseStyles} {...props} />,
	};
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	return element[props.type];
});
export default FieldComposer;
