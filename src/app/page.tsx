import { FaGithub, FaRust, FaCuttlefish, FaServer, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiGo, SiCplusplus } from "react-icons/si";
import "./globals.css";
import Link from "next/link";

const projects = [
	{
		name: "Multithreaded Encrypted File Server/Client",
		description: "Networking, concurrency, encryption in C++",
		link: "YOUR_GITHUB_LINK_1",
		icons: [<SiCplusplus size={20} />, <FaServer size={20} />],
	},
	{
		name: "Encrypted Steganography Suite",
		description: "Cryptography & image processing in Rust",
		link: "YOUR_GITHUB_LINK_2",
		icons: [<FaRust size={20} />],
	},
	{
		name: "Server Agent Threat Detection",
		description: "gRPC + Elasticsearch threat detection in Go",
		link: "YOUR_GITHUB_LINK_3",
		icons: [<SiGo size={20} />],
	},
	{
		name: "Network Encryption Interface",
		description: "C++ systems programming & encryption interface",
		link: "YOUR_GITHUB_LINK_4",
		icons: [<SiCplusplus size={20} />],
	},
];

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen flicker-in">
			<main className="flex-grow bg-darkScreen text-pipboyGreen fallout-scanlines p-6">

				<header className="text-center">
					<h1 className="pipboy-flicker text-5xl font-mono mb-2 leading-tight">
						Francois Coleongco
					</h1>

					<p style={{ color: 'var(--text-green)', opacity: 0.1 }}>We're all void pointers 💚</p>
					<br />
					<p className="text-xl font-mono leading-relaxed">
						Undergraduate honors CS major at the University of Alberta.
					</p>
					<br />
				</header>

				<h2 className="text-lg font-mono mb-4 border-b border-pipboyGreen w-fit">
					Projects
				</h2>
				<section className="bg-panelBg/80 backdrop-blur-sm p-6">

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{projects.map((proj) => (
							<div
								key={proj.name}
								className="w-full md:w-auto project-panel rounded-md shadow-lg p-4 flex flex-col justify-between hover:shadow-[0_0_15px_rgba(143,193,62,0.7)] transition-shadow"

							>
								<h3 className="text-xl font-mono mb-2 leading-snug">{proj.name}</h3>
								<p className="text-sm leading-relaxed mb-2">{proj.description}</p>

								<div className="flex justify-between items-center mt-4">
									{/* Tech/Dev icons */}
									<div className="flex items-center gap-2">
										{proj.icons.map((icon, idx) => (
											<span key={idx} className="text-pipboyGreen">
												{icon}
											</span>
										))}
									</div>

									{/* GitHub link */}
									<Link
										href={proj.link}
										target="_blank"
										className="text-pipboyGreen hover:text-white flex items-center gap-2"
									>
										<FaGithub size={20} />
									</Link>
								</div>
							</div>
						))}
					</div>
				</section>

			</main>


			<footer className="bg-panelBg/90 scanline border-t-2 border-pipboyGreen py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm mt-0">
				{/* Left: copyright or name */}
				<div className="mb-4 md:mb-0 text-pipboyGreen font-mono">
					© {new Date().getFullYear()} Francois Coleongco
				</div>

				{/* Right: links */}
				<div className="flex gap-6">
					<Link
						href="https://github.com/YOUR_GITHUB"
						target="_blank"
						className="flex items-center gap-1 text-pipboyGreen hover:text-white"
					>
						<FaGithub /> GitHub
					</Link>
					<Link
						href="https://linkedin.com/in/YOUR_LINKEDIN"
						target="_blank"
						className="flex items-center gap-1 text-pipboyGreen hover:text-white"
					>
						<FaLinkedin /> LinkedIn
					</Link>
					<a
						href="mailto:YOUR_EMAIL"
						className="flex items-center gap-1 text-pipboyGreen hover:text-white"
					>
						<FaEnvelope /> Email
					</a>
				</div>
			</footer>
		</div >
	);
}
