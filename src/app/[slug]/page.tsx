import { pages } from "@/content/pages";
import Section from "@/components/Section/Section";
import Layout from "@/components/Layout/Layout";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

	const { slug } = await params
	console.log(slug);
	return (
		<Layout className={`page-${slug}`}>
			{pages[slug].sections.map((s) => <Section key={s.type}  {...s}/>)}
		</Layout>
	);
}
