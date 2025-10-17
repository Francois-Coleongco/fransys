"use client"
import { FaGithub, FaRust, FaServer, FaLinkedin, FaEnvelope, FaNetworkWired, FaShieldAlt } from "react-icons/fa";
import { SiGo, SiCplusplus, SiSqlite, SiCmake, SiTauri, SiJavascript, SiReact, SiElasticsearch, SiNodedotjs, SiPython, SiOllama, SiOpenai, SiFastapi } from "react-icons/si";
import "./globals.css";
import Link from "next/link";
import { FaImage, FaLock } from "react-icons/fa6";
import ConwayCanvas from "./conways";
import { TbLoadBalancer } from "react-icons/tb";
import { MdHttp } from "react-icons/md";
import { useEffect, useState } from "react";
import { DiRedis } from "react-icons/di";


const projects = [
	{
		name: "Distributed Threat Detection System",
		description: "A distributed threat detection framework",
		link: "https://github.com/Francois-Coleongco/SATD",
		icons: [SiGo, FaNetworkWired, SiElasticsearch, SiNodedotjs, FaShieldAlt],
	},
	{
		name: "Multithreaded Encrypted File Server/Client",
		description: "A terminal-based file storage server and client",
		link: "https://github.com/Francois-Coleongco/MEFSC",
		icons: [SiCplusplus, FaServer, SiSqlite, FaLock, SiCmake],
	},
	{
		name: "HTTP Load Balancer",
		description: "A hybrid scheduling HTTP load balancer",
		link: "https://github.com/Francois-Coleongco/LoadBalancer",
		icons: [SiGo, TbLoadBalancer, MdHttp, DiRedis],
	},
	{
		name: "Encrypted Steganography Suite",
		description: "Secret message encoding in PNG files",
		link: "https://github.com/Francois-Coleongco/Steganography_Suite",
		icons: [FaRust, FaLock, FaImage, SiTauri, SiJavascript, SiReact],
	},
	{
		name: "Speech-Driven AI Video Preprocessor",
		description: "AI-powered video trimming for the lazy video editor",
		link: "https://github.com/Francois-Coleongco/KeepItRolling",
		icons: [SiPython, SiOllama, SiOpenai, SiFastapi],
	},
	{
		name: "Network Encryption Interface",
		description: "C++ systems programming & encryption interface",
		link: "https://github.com/Francois-Coleongco/Network-Encryption-Interface",
		icons: [SiCplusplus, FaLock, FaNetworkWired],
	},

];

export default function Home() {
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		console.log(menuOpen)
	}, [menuOpen])


	return (
		<>

			<div className="flex flex-col min-h-screen flicker-in">

				<nav className="opacity-75 border-b border-[var(--highlight-green)] px-6 py-3 flex justify-between items-center" style={{ position: 'relative', zIndex: 1 }}>

					<a href="" className="text-[var(--pipboy-foreground)] font-mono text-xl tracking-widest flicker-in transform transition-transform duration-200 hover:scale-104">
						Francois Coleongco
					</a>
					<div className="hidden md:flex space-x-6 font-mono text-[var(--text-green)]">
						<Link href="#projects" className="hover:text-[var(--pipboy-foreground)] transform transition-transform duration-200 hover:scale-104">Projects</Link>
						<Link href="#contact" className="hover:text-[var(--pipboy-foreground)] transform transition-transform duration-200 hover:scale-104">Contact</Link>
					</div>

					<div className={`md:hidden flex flex-col gap-4 mt-2 ${menuOpen ? "flex" : "hidden"}`}>
						<a href="#projects" className="hover:text-[var(--pipboy-foreground)] flicker-in transition transform transition-transform duration-200 hover:scale-104">projects</a>
						<a href="#contact" className="hover:text-[var(--pipboy-foreground)] flicker-in transition transform transition-transform duration-200 hover:scale-104">contact</a>
					</div>

					<div className="md:hidden">
						<button id="menu-btn" className="text-[var(--text-green)]" onClick={() => setMenuOpen(!menuOpen)}>
							<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button>
					</div>
				</nav >


				<main className="flex-grow text-pipboyGreen p-6">

					<h2 className="text-center pipboy-flicker text-4xl mt-4 mb-4">Hi, I&apos;m Francois</h2>

					<section
						id="about"
					>
						<div className="max-w-xl mx-auto text-center mt-4 pt-16 pb-12 -mt-24">
							<p className="text-md font-mono leading-relaxed" style={{ position: 'relative', zIndex: 1 }}>
								I&apos;m an honors CS major at the <a href="https://www.ualberta.ca/en/index.html
"className="underline">University of Alberta</a>, passionate about building high-performance systems, distributed infrastructure, and AI-driven solutions. I enjoy designing and contributing to complex features that make products more robust and scalable.
							</p>
						</div>
					</section>

					<br />

					<section
						id="projects"

						className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 md:py-24"
					>
						<h2 className="pipboy-flicker text-4xl mb-4 pb-8" style={{ position: 'relative', zIndex: 1 }}>Projects</h2>
						<section className="bg-panelBg/80 backdrop-blur-sm p-6" style={{ position: 'relative', zIndex: 1 }}>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{projects.map((proj) => (
									<div
										key={proj.name}
										className="opacity-75 w-full md:w-auto project-panel rounded-md shadow-lg p-4 flex flex-col justify-between hover:shadow-[0_0_15px_rgba(143,193,62,0.7)] transition-shadow border transform transition-transform duration-200 hover:scale-101"

									>
										<a href={proj.link} className="block">

											<h3 className="text-xl font-mono mb-2 leading-snug">{proj.name}</h3>
											<p className="text-sm leading-relaxed mb-2">{proj.description}</p>

											<div className="flex justify-between items-center mt-4">
												{/* Tech/Dev icons */}
												<div className="flex items-center gap-2">
													{proj.icons.map((Icon, idx) => (
														<span key={idx} className="text-pipboyGreen">
															<Icon size={20} className="transition-transform duration-150 ease-in-out hover:scale-110 cursor-pointer animate-pulse"
															/>
														</span>
													))}
												</div>

												{/* GitHub link */}
												<FaGithub size={20}
													className="transition-transform duration-150 ease-in-out hover:scale-110 cursor-pointer animate-pulse"
												/>
											</div>
										</a>
									</div>
								))}
							</div>
						</section >
					</section>
					<p className="text-center animate-pulse" style={{ position: 'relative', zIndex: 1 }}>Curious about the background? Click one of the squares!</p>
				</main >

				<section
					id="contact"
					className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 md:py-24"
				>
					<h2 className="pipboy-flicker text-4xl mb-4 pb-8" style={{ position: 'relative', zIndex: 1 }}>CONTACT</h2>
					<p className="text-[var(--text-green)] mb-6  pb-4" style={{ position: 'relative', zIndex: 1 }}>
						Want to get in touch? Shoot me an email or connect on GitHub.
					</p>
					<div className="flex flex-col md:flex-row gap-4">
						<a
							href="mailto:francois.coleongco@gmail.com"
							className="project-panel p-4 border border-[var(--highlight-green)] rounded-lg text-[var(--text-green)] hover:text-[var(--pipboy-foreground)] flicker-in transition text-center transform transition-transform duration-200 hover:scale-104"
							style={{ position: 'relative', zIndex: 1 }}
						>
							Email Me
						</a>
						<a
							href="https://linkedin.com/in/francois-coleongco"
							target="_blank"
							rel="noopener noreferrer"
							className="project-panel p-4 border border-[var(--highlight-green)] rounded-lg text-[var(--text-green)] hover:text-[var(--pipboy-foreground)] flicker-in transition text-center transform transition-transform duration-200 hover:scale-104"
							style={{ position: 'relative', zIndex: 1 }}
						>
							LinkedIn
						</a>
					</div>
				</section>

				<p className="text-center" style={{ position: 'relative', zIndex: 1 }} >We&apos;re all void pointers 💚</p>
				<br />


				<footer className="bg-panelBg/90 scanline border-t-2 border-pipboyGreen py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm mt-0">
					{/* Left: copyright or name */}
					<div className="mb-4 md:mb-0 text-pipboyGreen font-mono" style={{ position: 'relative', zIndex: 1 }} >
						© {new Date().getFullYear()} Francois Coleongco
					</div>
					{/* Right: links */}
					<div className="flex gap-6">
						<Link
							href="https://github.com/Francois-Coleongco"
							target="_blank" className="flex items-center gap-1 text-pipboyGreen hover:text-white transform transition-transform duration-200 hover:scale-104"
							style={{ position: 'relative', zIndex: 1 }}
						>
							<FaGithub /> GitHub
						</Link>
						<Link
							href="https://www.linkedin.com/in/francois-coleongco"
							target="_blank"
							className="flex items-center gap-1 text-pipboyGreen hover:text-white transform transition-transform duration-200 hover:scale-104"
							style={{ position: 'relative', zIndex: 1 }}
						>
							<FaLinkedin /> LinkedIn
						</Link>
						<Link
							href="mailto:francois.coleongco@gmail.com"
							className="flex items-center gap-1 text-pipboyGreen hover:text-white transform transition-transform duration-200 hover:scale-104"
							style={{ position: 'relative', zIndex: 1 }}
						>
							<FaEnvelope /> Email
						</Link>
					</div>
				</footer>
				<ConwayCanvas />
			</div >

		</>
	);
}
