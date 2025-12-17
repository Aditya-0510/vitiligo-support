"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import didiImage from '../data/didi.png';
import haaniyaImage from '../data/Haaniya_Khan.jpg';
import nabeelaImage from '../data/Syeda_Nabeela.jpg';
import mubeenaImage from '../data/Mubeena_Kausar.jpg';
import aishaImage from '../data/Aisha_Anam.jpg';
import FloatingLines from '@/components/FloatingLines';

interface TeamMember {
    name: string;
    title: string;
    handle: string;
    status: string;
    avatarImage: string | StaticImageData;
    linkedinUrl?: string;
    githubUrl?: string;
    email?: string;
    bio?: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Naila Kauser",
        title: "3rd Year MBBS Student",
        handle: "_nailakauser",
        status: "Medico",
        avatarImage: didiImage, // REPLACE: import and change to member1Image
        linkedinUrl: "https://linkedin.com/in/sarahjohnson",
        email: "sarah@vitiligoconnect.org",
        bio: "Studying medicine, practicing empathy, one vitiligo story at a time."
    },
    {
        name: "Haaniya Khan",
        title: "3rd Year MBBS Student",
        handle: "mchen",
        status: "Medico",
        avatarImage: haaniyaImage, // REPLACE: import and change to member2Image
        linkedinUrl: "https://linkedin.com/in/michaelchen",
        githubUrl: "https://github.com/mchen",
        bio: "Building supportive communities for vitiligo patients worldwide"
    },
    {
        name: "Aisha Anam",
        title: "Medico",
        handle: "Aisha_Anam",
        status: "Medico",
        avatarImage: aishaImage, // REPLACE: import and change to member5Image
        linkedinUrl: "https://linkedin.com/in/priyasharma",
        email: "priya@vitiligoconnect.org",
        bio: "Connecting patients with resources and support networks"
    },
    {
        name: "Syeda Nabeela",
        title: "3rd Year MBBS Student",
        handle: "emily_r",
        status: "Medico",
        avatarImage: nabeelaImage, // REPLACE: import and change to member3Image
        linkedinUrl: "https://linkedin.com/in/emilyrodriguez",
        email: "emily@vitiligoconnect.org",
        bio: "Creating educational content to empower vitiligo community"
    },
    {
        name: "Mubeena Kausar",
        title: "3rd Year MBBS Student",
        handle: "dkim",
        status: "Medico",
        avatarImage: mubeenaImage, // REPLACE: import and change to member4Image
        linkedinUrl: "https://linkedin.com/in/davidkim",
        githubUrl: "https://github.com/davidkim",
        bio: "Building accessible platforms for health communities"
    },

];

const ProfileCard = ({ member }: { member: TeamMember }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotateY: 2 }}
            transition={{ duration: 0.3 }}
            className="relative group"
        >
            {/* Card Container */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"></div>

                {/* Card Content */}
                <div className="relative p-6 flex flex-col items-center text-center space-y-4">
                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1 shadow-lg">
                            <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                                <Image
                                    src={member.avatarImage}
                                    alt={member.name}
                                    width={128}
                                    height={128}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Status Badge */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                            {member.status}
                        </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-2 pt-4">
                        <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                        <p className="text-purple-300 font-medium">{member.title}</p>
                        <p className="text-gray-400 text-sm">@{member.handle}</p>
                    </div>

                    {/* Bio */}
                    {member.bio && (
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            {member.bio}
                        </p>
                    )}

                    {/* Social Links */}
                    <div className="flex gap-3 pt-2">
                        {member.linkedinUrl && (
                            <a
                                href={member.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/10 hover:bg-blue-500/20 rounded-full transition-colors duration-300 group/icon"
                                aria-label={`${member.name}'s LinkedIn`}
                            >
                                <Linkedin className="w-5 h-5 text-blue-400 group-hover/icon:scale-110 transition-transform" />
                            </a>
                        )}
                        {member.githubUrl && (
                            <a
                                href={member.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/10 hover:bg-purple-500/20 rounded-full transition-colors duration-300 group/icon"
                                aria-label={`${member.name}'s GitHub`}
                            >
                                <Github className="w-5 h-5 text-purple-400 group-hover/icon:scale-110 transition-transform" />
                            </a>
                        )}
                        {member.email && (
                            <a
                                href={`mailto:${member.email}`}
                                className="p-2 bg-white/10 hover:bg-pink-500/20 rounded-full transition-colors duration-300 group/icon"
                                aria-label={`Email ${member.name}`}
                            >
                                <Mail className="w-5 h-5 text-pink-400 group-hover/icon:scale-110 transition-transform" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Bottom Gradient Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        </motion.div>
    );
};

export default function TeamPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 200,
            },
        },
    };

    return (
        <div className="relative overflow-hidden min-h-screen">
            {/* Background */}
            <div className="fixed inset-0 z-0">
                <FloatingLines
                    enabledWaves={['top', 'middle', 'bottom']}
                    lineDistance={[7, 5, 3]}
                    bendRadius={5.0}
                    lineCount={[6, 10, 12]}
                    bendStrength={-1}
                    interactive={true}
                    parallax={true}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg"
                    >
                        {"Meet Our".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                style={{ display: 'inline-block' }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                        <br />
                        {"Dedicated Team".split("").map((char, index) => (
                            <motion.span
                                key={index + 100}
                                variants={letterVariants}
                                style={{ display: 'inline-block' }}
                                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Passionate professionals committed to supporting the vitiligo community
                    </motion.p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <ProfileCard key={index} member={member} />
                    ))}
                </div>
            </div>

            {/* Shine Animation */}
            <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
      `}</style>
        </div>
    );
}