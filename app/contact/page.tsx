"use client";

import type React from "react";

import { motion } from "framer-motion";
import {
	Mail,
	Phone,
	MapPin,
	Linkedin,
	Send,
	MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

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
						Get In Touch
					</h1>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
						Ready to bring your ideas to life? Let's discuss your next project and
						create something amazing together.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="space-y-8"
					>
						<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
							<h2 className="text-3xl font-bold text-white mb-8">
								Contact Information
							</h2>

							<div className="space-y-6">
								<motion.a
									href="mailto:iharshpatel.official@gmail.com"
									whileHover={{ scale: 1.02 }}
									className="flex items-center p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700/70 transition-colors duration-300 group"
								>
									<div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg mr-4">
										<Mail className="h-6 w-6 text-white" />
									</div>
									<div>
										<div className="text-gray-400 text-sm">Email</div>
										<div className="text-white font-medium group-hover:text-emerald-400 transition-colors">
											iharshpatel.official@gmail.com
										</div>
									</div>
								</motion.a>

								<motion.a
									href="tel:+919265463789"
									whileHover={{ scale: 1.02 }}
									className="flex items-center p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700/70 transition-colors duration-300 group"
								>
									<div className="p-3 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg mr-4">
										<Phone className="h-6 w-6 text-white" />
									</div>
									<div>
										<div className="text-gray-400 text-sm">Phone</div>
										<div className="text-white font-medium group-hover:text-teal-400 transition-colors">
											+91 92654 63789
										</div>
									</div>
								</motion.a>

								<motion.div
									whileHover={{ scale: 1.02 }}
									className="flex items-center p-4 bg-gray-700/50 rounded-xl"
								>
									<div className="p-3 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-lg mr-4">
										<MapPin className="h-6 w-6 text-white" />
									</div>
									<div>
										<div className="text-gray-400 text-sm">Location</div>
										<div className="text-white font-medium">
											Ahmedabad, Gujarat, India
										</div>
									</div>
								</motion.div>

								<motion.a
									href="https://www.linkedin.com/in/harshpatel2125"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.02 }}
									className="flex items-center p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700/70 transition-colors duration-300 group"
								>
									<div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg mr-4">
										<Linkedin className="h-6 w-6 text-white" />
									</div>
									<div>
										<div className="text-gray-400 text-sm">LinkedIn</div>
										<div className="text-white font-medium group-hover:text-blue-400 transition-colors">
											linkedin.com/in/harshpatel2125
										</div>
									</div>
								</motion.a>
							</div>
						</div>

						{/* Availability */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
							className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-3xl p-8 backdrop-blur-sm border border-emerald-500/30"
						>
							<div className="flex items-center mb-4">
								<div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse" />
								<h3 className="text-xl font-bold text-white">Available for Work</h3>
							</div>
							<p className="text-gray-300">
								I'm currently available for freelance projects and full-time
								opportunities. Let's discuss how I can help bring your vision to life.
							</p>
						</motion.div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50"
					>
						<div className="flex items-center mb-8">
							<MessageCircle className="h-8 w-8 text-emerald-400 mr-3" />
							<h2 className="text-3xl font-bold text-white">Send a Message</h2>
						</div>

						<form
							onSubmit={handleSubmit}
							className="space-y-6"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="name"
										className="block text-gray-300 text-sm font-medium mb-2"
									>
										Name
									</label>
									<Input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500"
										placeholder="Your Name"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-gray-300 text-sm font-medium mb-2"
									>
										Email
									</label>
									<Input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500"
										placeholder="your.email@example.com"
										required
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="subject"
									className="block text-gray-300 text-sm font-medium mb-2"
								>
									Subject
								</label>
								<Input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500"
									placeholder="Project Discussion"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-gray-300 text-sm font-medium mb-2"
								>
									Message
								</label>
								<Textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows={6}
									className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500 resize-none"
									placeholder="Tell me about your project, requirements, or any questions you have..."
									required
								/>
							</div>

							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Button
									type="submit"
									size="lg"
									className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-3 rounded-xl transition-all duration-300"
								>
									<Send className="h-5 w-5 mr-2" />
									Send Message
								</Button>
							</motion.div>
						</form>

						<div className="mt-8 pt-8 border-t border-gray-700">
							<p className="text-gray-400 text-sm text-center">
								I typically respond within 24 hours. Looking forward to hearing from
								you!
							</p>
						</div>
					</motion.div>
				</div>

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
							Let's Build Something Great Together
						</h2>
						<p className="text-gray-400 mb-8 max-w-2xl mx-auto">
							Whether you have a specific project in mind or just want to explore
							possibilities, I'm here to help turn your ideas into reality with
							cutting-edge technology and creative solutions.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									size="lg"
									className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-2xl font-medium"
								>
									Schedule a Call
								</Button>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									variant="outline"
									size="lg"
									className="border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 px-8 py-3 rounded-2xl font-medium"
								>
									Download Resume
								</Button>
							</motion.div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
