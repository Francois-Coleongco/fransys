import { FaGithub } from "react-icons/fa";
import "./globals.css";
import Link from "next/link";

const projects = [
	{
		name: "Server Agent Threat Detection",
		description: "gRPC + Elasticsearch threat detection in Go",
		link: "https://github.com/Francois-Coleongco/SATD",
	},
	{
		name: "Multithreaded Encrypted File Server/Client",
		description: "Networking, concurrency, encryption in C++",
		link: "https://github.com/Francois-Coleongco/MEFSC",
	},
	{
		name: "Encrypted Steganography Suite",
		description: "Cryptography & image processing in Rust",
		link: "https://github.com/Francois-Coleongco/Steganography_Suite",
	},
	{
		name: "Network Encryption Interface",
		description: "C++ systems programming & encryption interface",
		link: "https://github.com/Francois-Coleongco/Network-Encryption-Interface",
	},
];

export default function Home() {
	return (
		<main className="min-h-screen bg-darkScreen text-pipboyGreen scanline p-6 space-y-12">

			<header className="text-center">
				<h1 className="text-5xl font-mono mb-2 leading-tight">
					Francois Coleongco
				</h1>
				<p className="text-xl font-mono leading-relaxed">
					Undergraduate honors CS major at the University of Alberta.
				</p>
			</header>

			<section className="bg-panelBg/80 backdrop-blur-sm border-2 border-pipboyGreen rounded-md p-6 space-y-6">
				<h2 className="text-3xl font-mono mb-4 border-b border-pipboyGreen w-fit">
					Projects
				</h2>


				<div className="grid md:grid-cols-2 gap-6">
					{projects.map((proj) => (
						<div
							key={proj.name}
							className="w-full md:w-64 bg-panelBg/90 scanline rounded-md border-2 border-pipboyGreen shadow-lg p-4 flex flex-col justify-between hover:shadow-[0_0_10px_#8fc13e] transition-shadow"
						>
							<h3 className="text-xl font-mono mb-2 leading-snug">{proj.name}</h3>
							<p className="text-sm leading-relaxed mb-2">{proj.description}</p>
							<Link
								href={proj.link}
								target="_blank"
								className="text-pipboyGreen hover:text-white flex items-center gap-2"
							>
								<FaGithub size={20} /> GitHub
							</Link>
						</div>
					))}
				</div>
			</section>

			<section className="bg-panelBg/80 backdrop-blur-sm border-2 border-pipboyGreen rounded-md p-6 space-y-4 text-center">
				<h2 className="text-3xl font-mono mb-4 border-b border-pipboyGreen w-fit mx-auto">
					Contact
				</h2>
				<div className="flex flex-col gap-2 items-center">
					<Link
						href="https://github.com/francois-coleongco"
						className="underline hover:text-white"
						target="_blank"
					>
						GitHub
					</Link>
					<Link
						href="https://linkedin.com/in/francois-coleongco"
						className="underline hover:text-white"
						target="_blank"
					>
						LinkedIn
					</Link>
					<a href="mailto:christien.coleongco@gmail.com" className="underline hover:text-white">
						Email
					</a>
				</div>
			</section>
		</main>
	);
}
