"use client";

import { motion } from "framer-motion";

export default function TechStackPage() {
	const techCategories = [
		{
			title: "Frontend Technologies",
			icon: "🎨",
			technologies: [
				{ name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600" },
				{ name: "TypeScript", level: 80, color: "from-blue-400 to-blue-600" },
				{ name: "React.js", level: 85, color: "from-cyan-400 to-cyan-600" },
				{ name: "Next.js", level: 80, color: "from-gray-400 to-gray-600" },
				{ name: "Vue.js", level: 60, color: "from-emerald-400 to-emerald-600" },
				{ name: "React Native", level: 80, color: "from-purple-400 to-purple-600" },
			],
		},
		{
			title: "Backend Technologies",
			icon: "⚙️",
			technologies: [
				{ name: "Node.js", level: 80, color: "from-emerald-400 to-emerald-600" },
				{ name: "Express.js", level: 75, color: "from-gray-400 to-gray-600" },
				{ name: "GraphQL", level: 80, color: "from-pink-400 to-pink-600" },
				{ name: "WebSocket", level: 90, color: "from-orange-400 to-orange-600" },
				{ name: "RESTful APIs", level: 90, color: "from-teal-400 to-teal-600" },
			],
		},
		{
			title: "Databases",
			icon: "🗄️",
			technologies: [
				{ name: "MongoDB", level: 90, color: "from-emerald-400 to-emerald-600" },
				{ name: "MySQL", level: 80, color: "from-blue-400 to-blue-600" },
				{ name: "Firebase", level: 70, color: "from-yellow-400 to-orange-600" },
				{
					name: "PostgreSQL",
					level: 65,
					color: "from-purple-400 to-purple-600",
				},
			],
		},
		{
			title: "Cloud & DevOps",
			icon: "☁️",
			technologies: [
				{ name: "AWS Services", level: 80, color: "from-orange-400 to-orange-600" },
				{
					name: "Serverless Architecture",
					level: 85,
					color: "from-cyan-400 to-cyan-600",
				},
				{ name: "AWS Lambda", level: 85, color: "from-purple-400 to-purple-600" },
				{ name: "Docker", level: 75, color: "from-blue-400 to-blue-600" },
			],
		},
		{
			title: "Tools & Others",
			icon: "🛠️",
			technologies: [
				{ name: "Git", level: 90, color: "from-red-400 to-red-600" },
				{ name: "VS Code", level: 95, color: "from-blue-400 to-blue-600" },
				{ name: "Cursor", level: 95, color: "from-gray-400 to-gray-600" },
				{ name: "Figma", level: 70, color: "from-purple-400 to-purple-600" },
				{ name: "Jira", level: 80, color: "from-blue-400 to-cyan-600" },
				{ name: "Postman", level: 85, color: "from-orange-400 to-orange-600" },
			],
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-950 via-black to-emerald-950 pt-20 pb-12 px-4">
			<div className="max-w-7xl mx-auto pt-12 md:pt-20 space-y-16">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-10"
				>
					<h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
						Tech Stack
					</h1>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
						A comprehensive overview of the technologies, frameworks, and tools I use
						to build modern, scalable, and efficient applications.
					</p>
				</motion.div>

				{/* Tech Categories */}
				<div className="space-y-10">
					{techCategories.map((category, categoryIndex) => (
						<motion.section
							key={category.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
							viewport={{ once: true }}
							className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50"
						>
							<div className="flex items-center mb-8">
								<span className="text-4xl mr-4">{category.icon}</span>
								<h2 className="text-3xl font-bold text-white">{category.title}</h2>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{category.technologies.map((tech, techIndex) => (
									<motion.div
										key={tech.name}
										initial={{ opacity: 0, x: -30 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ delay: techIndex * 0.1, duration: 0.6 }}
										viewport={{ once: true }}
										className="space-y-2"
									>
										<div className="flex justify-between items-center">
											<span className="text-gray-200 font-medium">{tech.name}</span>
											<span className="text-gray-400 text-sm">{tech.level}%</span>
										</div>
										<div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
											<motion.div
												initial={{ width: 0 }}
												whileInView={{ width: `${tech.level}%` }}
												transition={{
													delay: techIndex * 0.1 + 0.5,
													duration: 1,
													ease: "easeOut",
												}}
												viewport={{ once: true }}
												className={`h-full bg-gradient-to-r ${tech.color} rounded-full relative`}
											>
												<div className="absolute inset-0 bg-white/20 animate-pulse" />
											</motion.div>
										</div>
									</motion.div>
								))}
							</div>
						</motion.section>
					))}
				</div>

				{/* Experience Highlights */}
				<motion.section
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mt-12 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-3xl p-8 backdrop-blur-sm border border-emerald-500/30"
				>
					<h2 className="text-3xl font-bold text-white mb-8 text-center">
						Experience Highlights
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.2, duration: 0.6 }}
							viewport={{ once: true }}
							className="text-center"
						>
							<div className="text-4xl font-bold text-emerald-400 mb-2">15+</div>
							<div className="text-gray-300">Technologies Mastered</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.4, duration: 0.6 }}
							viewport={{ once: true }}
							className="text-center"
						>
							<div className="text-4xl font-bold text-teal-400 mb-2">5+</div>
							<div className="text-gray-300">Years of Experience</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.6, duration: 0.6 }}
							viewport={{ once: true }}
							className="text-center"
						>
							<div className="text-4xl font-bold text-cyan-400 mb-2">7+</div>
							<div className="text-gray-300">Projects Completed</div>
						</motion.div>
					</div>
				</motion.section>

				{/* Continuous Learning */}
				<motion.section
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mt-16 text-center"
				>
					<h2 className="text-3xl font-bold text-white mb-4">Continuous Learning</h2>
					<p className="text-gray-400 max-w-4xl mx-auto mb-8">
						Technology evolves rapidly, and I'm committed to staying current with the
						latest trends and best practices in software development. I actively
						leverage AI tools for code completion, debugging, and testing, allowing me
						to focus on creative problem-solving while improving code quality and
						delivery speed.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						{[
							"AI/ML",
							"AI Model Training",
							"AI/ML Integration",
							"Prompt Engineering",
							"Blockchain",
						].map((tech, index) => (
							<motion.span
								key={tech}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ delay: index * 0.1, duration: 0.5 }}
								viewport={{ once: true }}
								className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 rounded-full text-sm border border-gray-600"
							>
								{tech} (Learning)
							</motion.span>
						))}
					</div>
				</motion.section>
			</div>
		</div>
	);
}
