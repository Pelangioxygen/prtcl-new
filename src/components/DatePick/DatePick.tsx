'use client'
import { DateInput } from "@mantine/dates";
import React, { forwardRef } from "react";
import styles from "./DatePick.module.css";
const baseStyles = {
	label: styles.label,
	root: styles.root,
	input: styles.input,
	controls: "absolute"
};
// eslint-disable-next-line react/display-name
const DatePick = forwardRef<unknown, unknown>((props: unknown, ref) => {
  // @ts-ignore
	return <DateInput ref={ref} classNames={baseStyles} {...props} valueFormat="YYYY-MM-DD"/>
	}
);


export default DatePick;