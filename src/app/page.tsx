import { pages } from "@/content/pages";
import Section from "@/components/Section/Section";

export default function Home() {

	return (
		<>
			{pages["index"].sections.map((s) => <Section key={s.type}  {...s}/>)}
		</>
	);
}
