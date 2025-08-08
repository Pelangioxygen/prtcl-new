import Button from "@/components/Button/Button";
import { pages } from "@/content/pages";
import Section from "@/components/Section/Section";

export default function Page() {

	return (
		<>
			{pages["index"].sections.map((s) => <Section key={s.type}  {...s}/>)}


		<div className={'grid'}>

			<div>
				<h1>Heading 1</h1>
				<h2>Heading 2</h2>
				<h3>Heading 3</h3>
				<h4>Heading 4</h4>
				<div className={'grid gap-4'}>
				<Button component={"button"} shadow={true}  variant={"primary"} size={"sm"}>Button / 20</Button>
				<Button component={"button"} shadow={true}  variant={"default"} size={"sm"}>Button / 20</Button>
				<Button component={"button"}  variant={"glass"} size={"md"}>Glass Button</Button>
				<Button component={"button"}  variant={"white"} size={"md"}>2:15 PM</Button>
				<Button component={"button"}  variant={"primary"} size={"lg"}>2:15 PM</Button>
				<Button component={"button"}  variant={"outline"} size={"lg"}>Book Now</Button>
				<Button component={"button"}  variant={"glass"} size={"lg"}>glass button</Button>
				<Button component={"button"}  variant={"icon"} size={"lg"}>🧠 Neurology</Button>
				<Button component={"button"}  variant={"icon"} size={"sm"}>🧠 Neurology</Button>
				<Button component={"a"} variant={"default"} size={"sm"} href={"/about"}>about default</Button>
				<Button component={"a"} variant={"default"} size={"md"} href={"/about"}>about default</Button>
				<Button component={"a"} variant={"default"} size={"lg"}  href={"/about"}>about default</Button>
				<Button component={"a"} variant={"default"} size={"sm"}  href={"/about"}>← Back</Button>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ipsum massa. Praesent nec maximus dui, nec vulputate neque. Interdum et malesuada fames ac ante ipsum primis
					in faucibus. Maecenas vitae orci dolor. Vestibulum nec auctor leo. Quisque sem ligula, convallis et mattis at, fringilla ac sapien. Aliquam consectetur odio sed orci dignissim
					facilisis.
				</p>

				<p>
					Proin elementum lorem sit amet eros fermentum molestie. Proin congue massa massa, at mattis risus consectetur quis. Ut vel neque porttitor, dignissim justo eu, cursus lorem.
					Phasellus fermentum, tellus a cursus commodo, risus nulla eleifend risus, vitae varius ligula ante sit amet orci. Integer vestibulum malesuada lobortis. Suspendisse sit amet
					condimentum quam. Nam molestie elementum ligula vel feugiat.
				</p>

				<p>
					Etiam at consequat quam. Mauris ac magna sed odio mollis elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut vehicula neque a
					dapibus accumsan. Fusce et fermentum neque. Donec sodales nibh pulvinar libero semper interdum. Etiam faucibus ligula et diam bibendum, vel porta sem sodales. Phasellus iaculis mi
					et rutrum facilisis. Praesent pulvinar nisi vitae quam imperdiet, in vestibulum turpis finibus. In bibendum eros nisi, a sagittis tortor accumsan sed. Nam dignissim sapien id
					fringilla tincidunt.
				</p>

				<p className={"text-lead"}>
					Fusce et fermentum neque. <a>Donec</a> sodales nibh pulvinar libero semper interdum. Etiam faucibus ligula et diam bibendum, vel porta sem sodales. Phasellus iaculis mi et rutrum
					facilisis. Praesent pulvinar nisi vitae quam imperdiet, in vestibulum turpis finibus. In bibendum eros nisi, a sagittis tortor accumsan sed. Nam dignissim sapien id fringilla
					tincidunt.
				</p>
				<button>asdasdsad</button>

			</div>
		</div>
		</>
	);
}
