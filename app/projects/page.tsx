"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProjectsPage() {
	const projects = [
		{
			title: "Social Networking Platform",
			description:
				"Developed a feature-rich social networking app supporting real-time messaging, voice/video calls, and location-based recommendations. Designed an optimized backend architecture using AWS Lambda and API Gateway to ensure scalability and high availability.",
			technologies: [
				"React Native",
				"Node.js",
				"Java",
				"WebSockets",
				"Firebase",
				"AWS Lambda",
				"Real-time Communication",
				"API Gateway",
			],
			features: [
				"Real-time messaging and video call features",
				"Location-based recommendations",
				"Optimized backend API performance",
				"Secure authentication system",
				"High scalability and low latency",
			],
			gradient: "from-emerald-600/20 to-teal-600/20",
			borderColor: "border-emerald-500/50",
			featured: true,
		},
		{
			title: "QR Code Generation and Management",
			description:
				"Developed a QR code generation and tracking platform, allowing users to create and manage QR codes with real-time analytics. Integrated an advanced tracking system to monitor scan frequency, location, and device details.",
			technologies: [
				"React.js",
				"Node.js",
				"Java",
				"Analytics",
				"Real-time Tracking",
			],
			features: [
				"Dynamic QR code generator",
				"Real-time tracking capabilities",
				"Analytics tools for monitoring interactions",
				"Secure and scalable architecture",
				"Cross-browser compatibility",
			],
			gradient: "",
			borderColor: "border-cyan-500/50",
			featured: true,
		},
		{
			title: "Service Provider App",
			description:
				"Comprehensive service booking platform where customers can easily book various services like AC technician, plumber, electrician, and more. Built as a senior fullstack developer using React, Node.js, GraphQL, and MongoDB with real-time service tracking and secure payments.",
			technologies: [
				"React",
				"Node.js",
				"GraphQL",
				"MongoDB",
				"Real-time Tracking",
				"Payment Gateway",
			],
			features: [
				"Multi-service booking platform",
				"Real-time service provider tracking",
				"Secure payment gateway integration",
				"Rating and review system",
				"Push notifications for updates",
				"Admin dashboard for service management",
			],
			gradient: "from-teal-600/20 to-cyan-600/20",
			borderColor: "border-teal-500/50",
			featured: true,
		},
		{
			title: "Poster Maker App & Website",
			description:
				"Led the development of a comprehensive poster creation platform available as both a web application and mobile apps. As the product owner, oversaw the entire development lifecycle from concept to deployment, ensuring seamless user experience across all platforms.",
			technologies: ["React", "React Native", "Node.js", "MySQL", "AWS", "Redux"],
			features: [
				"Cross-platform poster creation tools",
				"Extensive template library",
				"Real-time preview and editing",
				"Cloud storage for designs",
				"Social media integration",
				"Premium subscription model",
				"Analytics dashboard",
			],
			links: {
				web: "status365.in",
				ios: "status365.in",
				android: "status365.in",
			},
			gradient: "from-cyan-600/20 to-emerald-600/20",
			borderColor: "border-cyan-500/50",
			featured: false,
		},
		{
			title: "E-commerce Platform (Farmer-Buyer)",
			description:
				"Built a dynamic e-commerce platform connecting farmers with buyers, enabling direct sales through an intuitive and interactive interface. Developed with Next.js for fast and SEO-friendly experience with real-time chat system using WebSockets.",
			technologies: [
				"Next.js",
				"Node.js",
				"WebSockets",
				"Authentication",
				"Payment Integration",
			],
			features: [
				"Reusable UI components for scalability",
				"Real-time messaging between buyers and sellers",
				"Secure authentication and authorization",
				"Optimized frontend and backend performance",
				"SEO-friendly architecture",
			],
			gradient: "from-emerald-600/20 to-teal-600/20",
			borderColor: "border-emerald-500/50",
			featured: false,
		},
		{
			title: "E-commerce Web Platform",
			description:
				"Designed and developed a scalable e-commerce website with a fully responsive UI for seamless user experience across devices. Focused on intuitive navigation, performance optimization, and efficient state management.",
			technologies: [
				"React.js",
				"Node.js",
				"Java",
				"State Management",
				"Responsive Design",
			],
			features: [
				"Responsive and interactive UI",
				"Optimized frontend performance",
				"Smooth API integration",
				"Cross-browser compatibility",
				"Mobile-first design principles",
			],
			gradient: "from-emerald-600/20 to-teal-600/20",
			borderColor: "border-emerald-500/50",
			featured: false,
		},
		{
			title: "POS ERP Solution",
			description:
				"Enterprise Point of Sale and Resource Planning solution designed to streamline business operations including inventory management, sales tracking, customer management, and financial reporting. Built with React, Node.js, and MongoDB for scalability and performance.",
			technologies: [
				"React",
				"Node.js",
				"MongoDB",
				"Express.js",
				"Real-time Analytics",
			],
			features: [
				"Comprehensive inventory management",
				"Real-time sales tracking and analytics",
				"Customer relationship management",
				"Financial reporting and insights",
				"Multi-location support",
				"Role-based access control",
				"Automated workflow management",
			],
			gradient: "from-teal-600/20 to-cyan-600/20",
			borderColor: "border-teal-500/50",
			featured: false,
		},
	];

	const featuredProjects = projects.filter((project) => project.featured);
	const otherProjects = projects.filter((project) => !project.featured);

	return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-950 via-black to-emerald-950 pt-20 pb-12 px-4">
			<div className="max-w-7xl mx-auto pt-12 md:pt-20 space-y-16">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center"
				>
					<h1 className="text-5xl/[54px] md:text-6xl/[70px] font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
						My Projects
					</h1>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
						A comprehensive showcase of 7+ projects demonstrating expertise in
						full-stack development, mobile applications, and modern web technologies.
					</p>
				</motion.div>

				{/* Featured Projects */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="flex items-center mb-8">
						<Star className="h-8 w-8 text-emerald-400 mr-3" />
						<h2 className="text-3xl font-bold text-white">Featured Projects</h2>
					</div>

					<div className="space-y-10">
						{featuredProjects.map((project, index) => (
							<motion.div
								key={project.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1, duration: 0.8 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.01, y: -5 }}
								className={`bg-gradient-to-br ${project.gradient} rounded-3xl p-8 backdrop-blur-sm border ${project.borderColor} hover:border-opacity-100 transition-all duration-300 group`}
							>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
									<div>
										<h3 className="text-3xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
											{project.title}
										</h3>
										<p className="text-gray-300 mb-6 leading-relaxed">
											{project.description}
										</p>

										<div className="mb-6">
											<h4 className="text-lg font-semibold text-white mb-3">
												Technologies Used:
											</h4>
											<div className="flex flex-wrap gap-2">
												{project.technologies.map((tech) => (
													<span
														key={tech}
														className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-sm border border-white/20 hover:border-emerald-400/50 transition-colors duration-300"
													>
														{tech}
													</span>
												))}
											</div>
										</div>

										{project.links && (
											<div className="mb-6">
												<h4 className="text-lg font-semibold text-white mb-3">Links:</h4>
												<div className="space-y-2">
													<div className="flex items-center">
														<span className="text-emerald-400 font-medium mr-2">
															Website:
														</span>
														<a
															href={`https://${project.links.web}`}
															target="_blank"
															rel="noopener noreferrer"
															className="text-gray-300 hover:text-emerald-400 transition-colors"
														>
															{project.links.web}
														</a>
													</div>
													<div className="flex items-center">
														<span className="text-emerald-400 font-medium mr-2">
															iOS App:
														</span>
														<a
															href={`https://${project.links.ios}`}
															target="_blank"
															rel="noopener noreferrer"
															className="text-gray-300 hover:text-emerald-400 transition-colors"
														>
															{project.links.ios}
														</a>
													</div>
													<div className="flex items-center">
														<span className="text-emerald-400 font-medium mr-2">
															Android App:
														</span>
														<a
															href={`https://${project.links.android}`}
															target="_blank"
															rel="noopener noreferrer"
															className="text-gray-300 hover:text-emerald-400 transition-colors"
														>
															{project.links.android}
														</a>
													</div>
												</div>
											</div>
										)}
									</div>

									<div>
										<h4 className="text-lg font-semibold text-white mb-4">
											Key Features:
										</h4>
										<ul className="space-y-2 mb-6">
											{project.features.map((feature, featureIndex) => (
												<motion.li
													key={featureIndex}
													initial={{ opacity: 0, x: 20 }}
													whileInView={{ opacity: 1, x: 0 }}
													transition={{ delay: featureIndex * 0.1, duration: 0.5 }}
													viewport={{ once: true }}
													className="flex items-start text-gray-300"
												>
													<span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0" />
													{feature}
												</motion.li>
											))}
										</ul>

										<div className="flex gap-4">
											<motion.div
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												<Button
													variant="outline"
													size="sm"
													className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-emerald-400"
												>
													<Github className="h-4 w-4 mr-2" />
													View Code
												</Button>
											</motion.div>
											<motion.div
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												<Button
													variant="outline"
													size="sm"
													className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-emerald-400"
												>
													<ExternalLink className="h-4 w-4 mr-2" />
													Live Demo
												</Button>
											</motion.div>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Other Projects */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl font-bold text-white mb-8">Other Projects</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{otherProjects.map((project, index) => (
							<motion.div
								key={project.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1, duration: 0.8 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.02, y: -5 }}
								className={`bg-gradient-to-br ${project.gradient} rounded-3xl p-6 backdrop-blur-sm border ${project.borderColor} hover:border-opacity-100 transition-all duration-300 group`}
							>
								<h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
									{project.title}
								</h3>
								<p className="text-gray-300 mb-4 leading-relaxed text-sm">
									{project.description}
								</p>

								<div className="mb-4">
									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="px-2 py-1 bg-white/10 text-gray-200 rounded-full text-xs border border-white/20"
											>
												{tech}
											</span>
										))}
										{/* {project.technologies.length > 3 && (
											<span className="px-2 py-1 bg-white/10 text-gray-400 rounded-full text-xs border border-white/20">
												+{project.technologies.length - 3} more
											</span>
										)} */}
									</div>
								</div>

								<div className="flex gap-3">
									<motion.div
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Button
											variant="outline"
											size="sm"
											className="border-gray-600 text-gray-300 hover:bg-gray-800 text-xs"
										>
											<Github className="h-3 w-3 mr-1" />
											Code
										</Button>
									</motion.div>
									<motion.div
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Button
											variant="outline"
											size="sm"
											className="border-gray-600 text-gray-300 hover:bg-gray-800 text-xs"
										>
											<ExternalLink className="h-3 w-3 mr-1" />
											Demo
										</Button>
									</motion.div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-3xl p-12 backdrop-blur-sm border border-emerald-500/30">
						<h2 className="text-3xl font-bold text-white mb-4">
							Ready to Start Your Next Project?
						</h2>
						<p className="text-gray-400 mb-8 max-w-2xl mx-auto">
							I'm always excited to work on new challenges and bring innovative ideas
							to life. Let's discuss how we can create something amazing together!
						</p>
						<Link href="/contact">
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									size="lg"
									className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 rounded-2xl font-medium shadow-xl shadow-emerald-500/25"
								>
									Get In Touch
								</Button>
							</motion.div>
						</Link>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
