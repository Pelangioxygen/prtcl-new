import React, { FC } from "react";
import styles from "./TemplateName.module.css";

interface TemplateNameProps {
	children?: React.ReactNode;
	className?: string;
}

 const TemplateName: FC<TemplateNameProps> = ({ children, className = "", ...props }) => {
	return (
		<div className={`${styles.TemplateName} ${className}`} {...props}>
			{children}
		</div>
	);
};

export default TemplateName;