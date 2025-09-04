'use client'
import Image, { ImageProps } from "next/image";
import React, { useMemo } from "react";
import { useViewportSize } from "@mantine/hooks";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const ImageResp = ({ image }: { image: ImageProps & {
		srcMobile?: string | StaticImport;
	}}) => {

	const { width } = useViewportSize();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const {srcMobile, ...rest} = image;
	const _image = useMemo(() => {
		if (width < 1024) {
			return image.srcMobile ||  image.src
		}
		return image.src;
	}, [width, image]);

	console.log(width, _image);
	return <Image {...rest} src={_image} alt={''}/>
};
// @ts-ignore
export default ImageResp as Image;