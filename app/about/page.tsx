"use client";

import { motion } from "framer-motion";
import {
	Award,
	Calendar,
	Code,
	GraduationCap,
	MapPin,
	User,
	Heart,
	Globe,
	Book,
} from "lucide-react";

export default function AboutPage() {
	const skills = [
		"JavaScript",
		"TypeScript",
		"React.js",
		"Next.js",
		"React Native",
		"Vue.js",
		"Node.js",
		"Express.js",
		"GraphQL",
		"AWS Services",
		"Firebase",
		"WebSocket",
		"MongoDB",
		"Amazon DynamoDB",
		"MySQL",
		"Git",
		"Github",
		"Jira",
		"Figma",
	];

	const experience = [
		{
			company: "Bacancy Services Pvt. Ltd.",
			position: "Lead Software Engineer",
			duration: "Mar 2025 - Present",
			description:
				"Leading a team of developers in building enterprise-scale applications. Driving technical decisions, implementing best practices, and optimizing development workflows. Specializing in microservices architecture, cloud-native solutions, and AI integration.",
		},
		{
			company: "iWant Technologies Pvt. Ltd.",
			position: "Senior Software Engineer",
			duration: "Apr 2021 - Feb 2025",
			description:
				"Developed and maintained multiple full-stack applications using React ecosystem. Implemented real-time features, payment integrations, and complex UI components. Mentored junior developers and contributed to architectural decisions.",
		},
	];

	const education = [
		{
			degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
			school: "Silver Oak College of Eng. & Tech., Ahmedabad",
			duration: "Aug 2019 - May 2022",
		},
		{
			degree: "Diploma in Information Technology",
			school: "R. C. Technical Institute, Ahmedabad",
			duration: "Aug 2016 - Apr 2019",
		},
	];

	const certifications = [
		{
			name: "Generative AI Course",
			provider: "LinkedIn Learning",
			year: "2024",
		},
		{
			name: "Fullstack Web Development Bootcamp",
			provider: "Udemy",
			year: "2021",
		},
	];

	const interests = [
		{
			category: "Technology",
			items: [
				"Learning latest technologies",
				"Open source contributions",
				"Coding challenges",
				"Tech innovation research",
			],
		},
		{
			category: "History & Culture",
			items: [
				"Exploring historical places",
				"Reading history books",
				"Visiting museums",
				"Ancient civilizations study",
			],
		},
		{
			category: "Entertainment",
			items: [
				"History documentaries",
				"Sci-fi movies",
				"Adventure films",
				"Technology podcasts",
			],
		},
		{
			category: "Personal",
			items: [
				"Travel photography",
				"Music discovery",
				"World news",
				"Current affairs analysis",
			],
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-950 via-black to-emerald-950 pt-20 pb-12 px-4">
			<div className="max-w-6xl mx-auto pt-12 md:pt-20 space-y-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
						About Me
					</h1>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
						Passionate software engineer dedicated to creating innovative solutions
						that bridge technology and human needs.
					</p>
				</motion.div>

				{/* Personal Info */}
				<motion.section
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
						<div className="flex items-center mb-6">
							<User className="h-8 w-8 text-emerald-400 mr-3" />
							<h2 className="text-3xl font-bold text-white">Personal Information</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
							<div className="flex items-center text-gray-300">
								<MapPin className="h-5 w-5 text-teal-400 mr-3" />
								<span>Ahmedabad, Gujarat, India</span>
							</div>
							<div className="flex items-center text-gray-300">
								<Calendar className="h-5 w-5 text-emerald-400 mr-3" />
								<span>5+ Years Experience</span>
							</div>
						</div>
						<div className="space-y-4 text-gray-300 leading-relaxed">
							<p>
								I'm a dedicated software engineer who thrives on creating innovative
								solutions and pushing the boundaries of what's possible with modern web
								technologies. My journey in software development has been driven by
								curiosity, continuous learning, and a passion for building applications
								that solve real-world problems.
							</p>
							<p>
								With expertise spanning the full development stack, I specialize in
								creating scalable web applications, mobile solutions, and real-time
								communication systems that deliver exceptional user experiences.
							</p>
						</div>
					</div>
				</motion.section>

				{/* Professional Summary */}
				<motion.section
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
						<div className="flex items-center mb-6">
							<Award className="h-8 w-8 text-emerald-400 mr-3" />
							<h2 className="text-3xl font-bold text-white">Professional Summary</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
							<div className="space-y-4">
								<p>
									• Over 5+ years of experience in full-stack development, specializing
									in responsive and engaging user interfaces.
								</p>
								<p>
									• Expert in modern web technologies including JavaScript, TypeScript,
									React.js, Next.js, React Native, and Vue.js.
								</p>
								<p>
									• Developed solutions for diverse industries including social media,
									e-commerce, and enterprise applications.
								</p>
								<p>
									• Proficient in Agile development workflows with expertise in Jira,
									Git, and collaborative development.
								</p>
							</div>
							<div className="space-y-4">
								<p>
									• Focused on writing maintainable, scalable code that enhances
									long-term project sustainability.
								</p>
								<p>
									• Passionate about user experience, accessibility, and creating
									intuitive, aesthetically pleasing interfaces.
								</p>
								<p>
									• Experienced in mentoring junior developers and contributing to team
									growth and efficiency.
								</p>
								<p>
									• Committed to continuous learning and staying current with industry
									trends and best practices.
								</p>
							</div>
						</div>
					</div>
				</motion.section>

				{/* Skills */}
				<motion.section
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
						<div className="flex items-center mb-6">
							<Code className="h-8 w-8 text-emerald-400 mr-3" />
							<h2 className="text-3xl font-bold text-white">Technical Skills</h2>
						</div>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
							{skills.map((skill, index) => (
								<motion.div
									key={skill}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ delay: index * 0.05, duration: 0.5 }}
									viewport={{ once: true }}
									whileHover={{ scale: 1.05, y: -2 }}
									className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-xl p-3 text-center border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group"
								>
									<span className="text-gray-200 font-medium group-hover:text-emerald-400 transition-colors duration-300">
										{skill}
									</span>
								</motion.div>
							))}
						</div>
					</div>
				</motion.section>

				{/* Experience */}
				<motion.section
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50 h-full">
						<h2 className="text-3xl font-bold text-white mb-6">Work Experience</h2>
						{experience.map((exp, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2, duration: 0.6 }}
								viewport={{ once: true }}
								className="border-l-4 border-emerald-500 pl-6 pb-6 last:pb-0"
							>
								<h3 className="text-xl font-bold text-white">{exp.position}</h3>
								<p className="text-emerald-400 font-medium">{exp.company}</p>
								<p className="text-gray-400 text-sm mb-1.5">{exp.duration}</p>
								<p className="text-gray-300 leading-relaxed">{exp.description}</p>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* Education */}
				<motion.section
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50 h-full">
						<div className="flex items-center mb-6">
							<GraduationCap className="h-8 w-8 text-emerald-400 mr-3" />
							<h2 className="text-3xl font-bold text-white">Education</h2>
						</div>
						{education.map((edu, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2, duration: 0.6 }}
								viewport={{ once: true }}
								className="border-l-4 border-teal-500 pl-6 pb-6 last:pb-0"
							>
								<h3 className="text-lg font-bold text-white">{edu.degree}</h3>
								<p className="text-teal-400 font-medium">{edu.school}</p>
								<p className="text-gray-400 text-sm">{edu.duration}</p>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* Certifications */}
				<motion.section
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-3xl p-8 backdrop-blur-sm border border-emerald-500/30">
						<h2 className="text-3xl font-bold text-white mb-6">Certifications</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{certifications.map((cert, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ delay: index * 0.1, duration: 0.6 }}
									viewport={{ once: true }}
									className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50"
								>
									<h3 className="text-lg font-bold text-emerald-400 mb-2">
										{cert.name}
									</h3>
									<p className="text-gray-300">{cert.provider}</p>
									<p className="text-gray-400 text-sm">{cert.year}</p>
								</motion.div>
							))}
						</div>
					</div>
				</motion.section>

				{/* Interests & Hobbies */}
				<motion.section
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
						<div className="flex items-center mb-6">
							<Heart className="h-8 w-8 text-emerald-400 mr-3" />
							<h2 className="text-3xl font-bold text-white">Interests & Hobbies</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{interests.map((interest, index) => (
								<motion.div
									key={interest.category}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1, duration: 0.6 }}
									viewport={{ once: true }}
									className="space-y-4"
								>
									<h3 className="text-xl font-bold text-emerald-400 flex items-center">
										{interest.category === "Technology" && (
											<Code className="h-5 w-5 mr-2" />
										)}
										{interest.category === "History & Culture" && (
											<Book className="h-5 w-5 mr-2" />
										)}
										{interest.category === "Entertainment" && (
											<Globe className="h-5 w-5 mr-2" />
										)}
										{interest.category === "Personal" && (
											<Heart className="h-5 w-5 mr-2" />
										)}
										{interest.category}
									</h3>
									<ul className="space-y-2">
										{interest.items.map((item, itemIndex) => (
											<li
												key={itemIndex}
												className="flex items-start text-gray-300"
											>
												<span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0" />
												{item}
											</li>
										))}
									</ul>
								</motion.div>
							))}
						</div>
					</div>
				</motion.section>
			</div>
		</div>
	);
}
