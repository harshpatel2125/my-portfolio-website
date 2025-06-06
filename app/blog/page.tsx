"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogPage() {
	const blogPosts = [
		{
			title: "Building Scalable Real-time Applications with WebSockets",
			excerpt:
				"Learn how to implement efficient real-time communication systems using WebSockets, Socket.io, and modern web technologies for high-performance applications.",
			date: "2024-01-15",
			readTime: "8 min read",
			tags: ["WebSockets", "Real-time", "Node.js", "React"],
			featured: true,
		},
		{
			title: "Optimizing React Native Performance: Best Practices",
			excerpt:
				"Discover advanced techniques for improving React Native app performance, including memory management, rendering optimizations, and native module integration.",
			date: "2024-01-10",
			readTime: "12 min read",
			tags: ["React Native", "Performance", "Mobile", "Optimization"],
			featured: true,
		},
		{
			title: "GraphQL vs REST: Choosing the Right API Architecture",
			excerpt:
				"A comprehensive comparison of GraphQL and REST APIs, exploring use cases, performance implications, and implementation strategies for modern web applications.",
			date: "2024-01-05",
			readTime: "10 min read",
			tags: ["GraphQL", "REST", "API", "Architecture"],
			featured: false,
		},
		{
			title: "Microservices with Docker and AWS: A Complete Guide",
			excerpt:
				"Step-by-step guide to building and deploying microservices architecture using Docker containers and AWS cloud services for scalable applications.",
			date: "2023-12-28",
			readTime: "15 min read",
			tags: ["Microservices", "Docker", "AWS", "DevOps"],
			featured: false,
		},
		{
			title: "Next.js 14: New Features and Performance Improvements",
			excerpt:
				"Explore the latest features in Next.js 14, including improved App Router, enhanced performance optimizations, and new developer experience improvements.",
			date: "2023-12-20",
			readTime: "7 min read",
			tags: ["Next.js", "React", "Performance", "Web Development"],
			featured: false,
		},
		{
			title: "State Management in Modern React Applications",
			excerpt:
				"Compare different state management solutions including Redux Toolkit, Zustand, and React Context API for building maintainable React applications.",
			date: "2023-12-15",
			readTime: "9 min read",
			tags: ["React", "State Management", "Redux", "Context API"],
			featured: false,
		},
	];

	const featuredPosts = blogPosts.filter((post) => post.featured);
	const recentPosts = blogPosts.filter((post) => !post.featured);

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
					<h1 className="text-5xl/[54px] md:text-6xl/[70px] font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
						Tech Blog
					</h1>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
						Insights, tutorials, and thoughts on modern web development, emerging
						technologies, and software engineering best practices.
					</p>
				</motion.div>

				{/* Featured Posts */}
				<motion.section
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mb-10"
				>
					<h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{featuredPosts.map((post, index) => (
							<Link
								href={`/blog/${post.title
									.toLowerCase()
									.replace(/[^a-z0-9]+/g, "-")
									.replace(/(^-|-$)/g, "")}`}
								key={post.title}
							>
								<motion.article
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1, duration: 0.8 }}
									viewport={{ once: true }}
									whileHover={{ scale: 1.02, y: -5 }}
									className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 group cursor-pointer"
								>
									<div className="flex items-center text-gray-400 text-sm mb-4">
										<Calendar className="h-4 w-4 mr-2" />
										<span>
											{new Date(post.date).toLocaleDateString("en-US", {
												year: "numeric",
												month: "long",
												day: "numeric",
											})}
										</span>
										<Clock className="h-4 w-4 ml-4 mr-2" />
										<span>{post.readTime}</span>
									</div>

									<h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
										{post.title}
									</h3>

									<p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>

									<div className="flex flex-wrap gap-2 mb-6">
										{post.tags.map((tag) => (
											<span
												key={tag}
												className="px-3 py-1 bg-emerald-600/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30 flex items-center"
											>
												<Tag className="h-3 w-3 mr-1" />
												{tag}
											</span>
										))}
									</div>

									<div className="flex items-center text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors duration-300">
										<span>Read More</span>
										<ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
									</div>
								</motion.article>
							</Link>
						))}
					</div>
				</motion.section>

				{/* Recent Posts */}
				<motion.section
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mb-10"
				>
					<h2 className="text-3xl font-bold text-white mb-8">Recent Articles</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
						{recentPosts.map((post, index) => (
							<Link
								href={`/blog/${post.title
									.toLowerCase()
									.replace(/[^a-z0-9]+/g, "-")
									.replace(/(^-|-$)/g, "")}`}
								key={post.title}
							>
								<motion.article
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1, duration: 0.8 }}
									viewport={{ once: true }}
									whileHover={{ scale: 1.02, y: -5 }}
									className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-emerald-500/30 transition-all duration-300 group cursor-pointer"
								>
									<div className="flex items-center text-gray-400 text-xs mb-3">
										<Calendar className="h-3 w-3 mr-1" />
										<span>
											{new Date(post.date).toLocaleDateString("en-US", {
												month: "short",
												day: "numeric",
											})}
										</span>
										<Clock className="h-3 w-3 ml-3 mr-1" />
										<span>{post.readTime}</span>
									</div>

									<h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
										{post.title}
									</h3>

									<p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
										{post.excerpt}
									</p>

									<div className="flex flex-wrap gap-1 mb-4">
										{post.tags.slice(0, 2).map((tag) => (
											<span
												key={tag}
												className="px-2 py-1 bg-emerald-600/20 text-emerald-300 rounded-full text-xs border border-emerald-500/30"
											>
												{tag}
											</span>
										))}
										{post.tags.length > 2 && (
											<span className="px-2 py-1 bg-gray-600/20 text-gray-400 rounded-full text-xs border border-gray-500/30">
												+{post.tags.length - 2}
											</span>
										)}
									</div>

									<div className="flex items-center text-emerald-400 text-sm font-medium group-hover:text-emerald-300 transition-colors duration-300">
										<span>Read Article</span>
										<ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
									</div>
								</motion.article>
							</Link>
						))}
					</div>
				</motion.section>

				{/* Newsletter Signup */}
				<motion.section
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-3xl p-12 backdrop-blur-sm border border-emerald-500/30">
						<h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
						<p className="text-gray-400 mb-8 max-w-2xl mx-auto">
							Subscribe to get notified about new articles on web development, emerging
							technologies, and software engineering insights.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
							/>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-medium">
									Subscribe
								</Button>
							</motion.div>
						</div>
					</div>
				</motion.section>
			</div>
		</div>
	);
}
