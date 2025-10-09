'use client'
import { DateInput } from "@mantine/dates";
import React, { forwardRef } from "react";
import styles from "./DatePick.module.css";
const baseStyles = {
	label: styles.label,
	root: styles.root,
	input: styles.input,
	controls: "absolute",
	error: 'absolute text-red-500 text-xs bottom-0 mt-0 -mb-5'
};
// eslint-disable-next-line react/display-name
const DatePick = forwardRef<HTMLInputElement, Record<string, unknown>>((props: Record<string, unknown>, ref) => {
  // @ts-ignore
	return <DateInput ref={ref} classNames={baseStyles} {...props} valueFormat="YYYY-MM-DD"/>
	}
);


export default DatePick;