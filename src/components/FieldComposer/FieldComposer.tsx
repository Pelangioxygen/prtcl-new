import React from "react";
import styles from "./FieldComposer.module.css";
import { NumberInput, Radio, Select, Textarea, TextInput } from "@mantine/core";
import DatePick from "@/components/DatePick/DatePick";


interface FieldComposerProps {
	children?: React.ReactNode;
	className?: string;
}
const baseStyles = {
	label: styles.label,
	root: styles.root,
	input: styles.input,
	controls: "absolute"
};
const FieldComposer = (props: FieldComposerProps) => {


	const element = {
		text: <TextInput {...props} classNames={baseStyles} />,
		number: <NumberInput classNames={baseStyles} {...props} />,
		email: <TextInput classNames={baseStyles} {...props} />,
		date: <DatePick {...props} />,

		select: <Select unstyled  comboboxProps={{ shadow: 'md' }}  classNames={{
			...baseStyles,
			wrapper: styles.wrapper,
			section: styles.section,
			options: styles.options,
			option: styles.option,
			dropdown: styles.dropdown
		}}   withCheckIcon={false}     withScrollArea={false} variant={"filled"}  {...props} />,
		radio: <Radio classNames={baseStyles} {...props} />,
		textarea: <Textarea classNames={baseStyles} {...props} />,
	};
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	return element[props.type];
};
export default FieldComposer;
