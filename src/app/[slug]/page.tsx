import { pages } from "@/content/pages";
import Section from "@/components/Section/Section";
import Layout from "@/components/Layout/Layout";
import type { Metadata } from 'next'
type Props = {
	params: Promise<{ slug: string }>
}
export async function generateMetadata(
	{ params }: Props
): Promise<Metadata> {
	const slug = (await params).slug;

	return {
		title: 'Prtcl - ' + pages[slug].title,
		description: 'Prtcl - ' + pages[slug].description,
	}
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

	const { slug } = await params;
	return (
		<Layout className={`page-${slug}`}>
			{pages[slug].sections.map((s) => <Section key={s.type}  {...s}/>)}
		</Layout>
	);
}
