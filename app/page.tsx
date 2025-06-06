"use client";

import { motion } from "framer-motion";
import {
	ArrowRight,
	Linkedin,
	Mail,
	Phone,
	Code,
	Users,
	Award,
	Zap,
	Star,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
	const achievements = [
		{
			icon: <Code className="h-6 w-6" />,
			title: "7+ Projects Delivered",
			description: "Successfully completed diverse projects across industries",
		},
		{
			icon: <Users className="h-6 w-6" />,
			title: "Team Leadership",
			description: "Led development teams and mentored junior developers",
		},
		{
			icon: <Award className="h-6 w-6" />,
			title: "Performance Optimization",
			description: "Improved application performance by 40% on average",
		},
		{
			icon: <Zap className="h-6 w-6" />,
			title: "Real-time Solutions",
			description: "Expert in WebSocket and real-time communication systems",
		},
	];

	const testimonials = [
		{
			name: "Joe Wambugu",
			position: "CTO at HOT Group",
			company: "House of Technology",
			content:
				"Harsh delivered an exceptional e-commerce platform that exceeded our expectations. His expertise in React and real-time features helped us increase user engagement by 40%. Professional, reliable, and highly skilled.",
			project: "E-commerce Platform",
		},
		{
			name: "Odirile Meshack",
			position: "CTO at Brastorne Enterprises",
			company: "Brastorne Enterprises",
			content:
				"Working with Harsh on our social media platform was fantastic. He implemented complex real-time messaging and video call features flawlessly. His attention to detail and problem-solving skills are outstanding.",
			project: "Social Media Platform",
		},
		{
			name: "Steve McDonald",
			position: "CEO at STWI Technologies",
			company: "STWI Technologies",
			content:
				"Harsh built our service provider app from scratch with incredible efficiency. The custom UI components he developed are highly capable and well-designed. He's a true professional who consistently delivers high-quality work on time.",
			project: "Service Provider App",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-950 via-black to-emerald-950">
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
				{/* Animated Background Elements */}
				<div className="absolute inset-0 overflow-hidden">
					<motion.div
						className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.3, 0.6, 0.3],
						}}
						transition={{
							duration: 8,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
					/>
					<motion.div
						className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl"
						animate={{
							scale: [1.2, 1, 1.2],
							opacity: [0.6, 0.3, 0.6],
						}}
						transition={{
							duration: 8,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
					/>
					<motion.div
						className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
						animate={{
							rotate: [0, 360],
							scale: [1, 1.1, 1],
						}}
						transition={{
							duration: 20,
							repeat: Number.POSITIVE_INFINITY,
							ease: "linear",
						}}
					/>
				</div>

				<div className="relative z-10 text-center max-w-5xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: "easeOut" }}
						className="mb-8"
					>
						<motion.h1
							className="text-6xl md:text-8xl font-bold mb-6"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1.2, ease: "easeOut" }}
						>
							<span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
								Harsh Patel
							</span>
						</motion.h1>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.8 }}
							className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"
						>
							<span className="font-mono text-emerald-400">
								&lt;FULLSTACK DEVELOPER /&gt;
							</span>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.8 }}
							className="text-lg text-emerald-400 mb-8 font-mono"
						>
							&#123; "status": "available", "location": "worldwide" &#125;
						</motion.div>
					</motion.div>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.9, duration: 0.8 }}
						className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light"
					>
						Crafting scalable web applications and mobile solutions with modern
						technologies. Specialized in React ecosystem, real-time systems, and cloud
						architecture.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.2, duration: 0.8 }}
						className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
					>
						<Link href="/projects">
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									size="lg"
									className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-xl shadow-emerald-500/25 transition-all duration-300"
								>
									View My Work
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</motion.div>
						</Link>
						<Link href="/contact">
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									variant="outline"
									size="lg"
									className="border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300"
								>
									Get In Touch
								</Button>
							</motion.div>
						</Link>
					</motion.div>

					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.5, duration: 0.8 }}
						className="flex justify-center space-x-6"
					>
						<motion.a
							href="https://www.linkedin.com/in/harshpatel2125"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.1, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:bg-emerald-500/10 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group"
						>
							<Linkedin className="h-6 w-6 text-emerald-400 group-hover:text-emerald-300" />
						</motion.a>
						<motion.a
							href="mailto:iharshpatel.official@gmail.com"
							whileHover={{ scale: 1.1, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:bg-emerald-500/10 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group"
						>
							<Mail className="h-6 w-6 text-emerald-400 group-hover:text-emerald-300" />
						</motion.a>
						<motion.a
							href="tel:+919265463789"
							whileHover={{ scale: 1.1, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:bg-emerald-500/10 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group"
						>
							<Phone className="h-6 w-6 text-emerald-400 group-hover:text-emerald-300" />
						</motion.a>
					</motion.div>
				</div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 0.8 }}
					className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{
							duration: 2,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
						className="w-6 h-10 border-2 border-emerald-500/50 rounded-full flex justify-center"
					>
						<motion.div
							animate={{ y: [0, 12, 0] }}
							transition={{
								duration: 2,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							}}
							className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
						/>
					</motion.div>
				</motion.div>
			</section>

			{/* Quick Stats Section */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-3 gap-8"
					>
						<motion.div
							whileHover={{ scale: 1.05, y: -5 }}
							className="text-center p-8 bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-3xl backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300"
						>
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
								viewport={{ once: true }}
								className="text-5xl font-bold text-emerald-400 mb-2"
							>
								5+
							</motion.div>
							<div className="text-gray-300 font-medium">Years Experience</div>
						</motion.div>

						<motion.div
							whileHover={{ scale: 1.05, y: -5 }}
							className="text-center p-8 bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-3xl backdrop-blur-sm border border-teal-500/30 hover:border-teal-500/50 transition-all duration-300"
						>
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
								viewport={{ once: true }}
								className="text-5xl font-bold text-teal-400 mb-2"
							>
								15+
							</motion.div>
							<div className="text-gray-300 font-medium">Technologies</div>
						</motion.div>

						<motion.div
							whileHover={{ scale: 1.05, y: -5 }}
							className="text-center p-8 bg-gradient-to-br from-cyan-900/30 to-emerald-900/30 rounded-3xl backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300"
						>
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
								viewport={{ once: true }}
								className="text-5xl font-bold text-cyan-400 mb-2"
							>
								7+
							</motion.div>
							<div className="text-gray-300 font-medium">Projects Completed</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Key Achievements */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
							Key Achievements
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							Highlights of my professional journey and technical accomplishments
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{achievements.map((achievement, index) => (
							<motion.div
								key={achievement.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1, duration: 0.8 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.02, y: -5 }}
								className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl backdrop-blur-sm border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 group"
							>
								<div className="flex items-start space-x-4">
									<div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
										{achievement.icon}
									</div>
									<div>
										<h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
											{achievement.title}
										</h3>
										<p className="text-gray-400 leading-relaxed">
											{achievement.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Client Testimonials */}
			<motion.section
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="py-20 px-4"
			>
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
							Client Testimonials
						</h2>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							What clients say about working with me
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={testimonial.name}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1, duration: 0.8 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.02, y: -5 }}
								className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-3xl p-8 backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300"
							>
								<p className="text-gray-300 mb-6 leading-relaxed italic">
									"{testimonial.content}"
								</p>
								<div className="border-t border-emerald-500/20 pt-4">
									<div className="font-bold text-white">{testimonial.name}</div>
									<div className="text-emerald-400 text-sm">{testimonial.position}</div>
									<div className="text-gray-400 text-sm">{testimonial.company}</div>
									<div className="text-gray-500 text-xs mt-2">{testimonial.project}</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</motion.section>

			{/* Featured Projects Preview */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
							Featured Projects
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							A showcase of my recent work in web and mobile development
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.02, y: -5 }}
							className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 hover:border-emerald-500/70 transition-all duration-300"
						>
							<div className="p-8">
								<h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
									Social Networking Platform
								</h3>
								<p className="text-gray-400 mb-6 leading-relaxed">
									Feature-rich social app with real-time messaging, video calls, and
									location-based recommendations using React Native and WebSockets.
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="px-3 py-1 bg-emerald-600/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
										React Native
									</span>
									<span className="px-3 py-1 bg-teal-600/20 text-teal-300 rounded-full text-sm border border-teal-500/30">
										WebSockets
									</span>
									<span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
										AWS
									</span>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.02, y: -5 }}
							className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900/30 to-cyan-900/30 border border-teal-500/30 hover:border-teal-500/70 transition-all duration-300"
						>
							<div className="p-8">
								<h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">
									Service Provider App
								</h3>
								<p className="text-gray-400 mb-6 leading-relaxed">
									Comprehensive platform for booking services like AC technician,
									plumber, electrician with real-time tracking and secure payments.
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="px-3 py-1 bg-teal-600/20 text-teal-300 rounded-full text-sm border border-teal-500/30">
										React
									</span>
									<span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
										Node.js
									</span>
									<span className="px-3 py-1 bg-emerald-600/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
										GraphQL
									</span>
								</div>
							</div>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						viewport={{ once: true }}
						className="text-center"
					>
						<Link href="/projects">
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									variant="outline"
									size="lg"
									className="border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 px-8 py-3 rounded-2xl font-medium transition-all duration-300"
								>
									View All Projects
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</motion.div>
						</Link>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
