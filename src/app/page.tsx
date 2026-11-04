"use client";
import React, { useState } from "react";
import { ReactorCore } from "../components/bento/ReactorCore";
import { profileData } from "../data/profile";
import { skillsData } from "../data/skills";
import { researchData, ResearchItem } from "../data/research";
import { projectsData, Project } from "../data/projects";
import { experienceData } from "../data/experience";
import { certificationsData } from "../data/certifications";
import {
  GraduationCap,
  Briefcase,
  Award,
  ExternalLink,
  Layers,
  Sparkles,
  BookOpen,
  FlaskConical,
  FileText
} from "lucide-react";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-black text-zinc-100 p-4 md:p-8 lg:p-12 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Pitch-black subtle top glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_70%_at_50%_-15%,rgba(6,182,212,0.12),rgba(0,0,0,0))]" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-6">
        
        {/* ROW 1: HERO & REACTOR */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-2 p-6 md:p-8 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                {profileData.statusBadge}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
                {profileData.name}
              </h1>
              <p className="text-cyan-400 font-mono text-sm md:text-base mb-4">
                {profileData.title}
              </p>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl">
                {profileData.bio}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-zinc-900">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-medium text-zinc-200 transition-colors border border-zinc-800"
              >
                <GithubIcon className="w-4 h-4" /> GitHub ↗
              </a>
              <a
                href={profileData.resumeUrl}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium transition-colors"
              >
                <BookOpen className="w-4 h-4" /> View Resume
              </a>
            </div>
          </div>

          {/* Interactive Core */}
          <div className="lg:col-span-1">
            <ReactorCore />
          </div>
        </div>

        {/* ROW 2: EDUCATION, SKILLS & CERTIFICATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Education */}
          <div className="p-6 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase mb-4">
              <GraduationCap className="w-4 h-4" /> Education
            </div>
            <h3 className="text-lg font-bold text-white">B.Sc. in Computer Science (CS)</h3>
            <p className="text-zinc-300 text-sm mt-1">BRAC University</p>
            <p className="text-zinc-500 text-xs font-mono mt-1">Expected Graduation: April 2028</p>
            <div className="mt-4 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs text-zinc-400 leading-relaxed">
              I am a MERN Stack Developer with knowledge about Springboot. Actively doing Research related to Machine Learning , Large Language Model , Natural Language Processing and Fine Tuning . I have skills related to Data Science and completed course on GCI World 2026 as a Data Analytics.
            </div>
          </div>

          {/* Technical Skills */}
          <div className="p-6 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase mb-4">
              <Layers className="w-4 h-4" /> Technical Skills
            </div>
            <div className="space-y-3">
              {skillsData.map((cat, i) => (
                <div key={i}>
                  <span className="text-[11px] font-mono text-zinc-500 block mb-1">{cat.category}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-300 text-xs border border-zinc-800 hover:border-cyan-500/40 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="p-6 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase mb-4">
              <Award className="w-4 h-4" /> Certifications & Awards
            </div>
            <div className="space-y-3">
              {certificationsData.map((c) => (
                <div key={c.id} className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/70">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-white">{c.title}</h4>
                      <p className="text-[11px] text-zinc-400 mt-0.5">{c.issuer} • {c.issuedDate}</p>
                    </div>
                    {c.score && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
                        {c.score}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ROW 3: RESEARCH & PUBLICATIONS */}
        <div className="p-6 md:p-8 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase">
              <FlaskConical className="w-4 h-4" /> Research & Publications
            </div>
            <span className="text-xs text-zinc-500 font-mono">Papers & Preprints</span>
          </div>

          <div className="space-y-4">
            {researchData.map((paper: ResearchItem) => (
              <div
                key={paper.id}
                className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/70 hover:border-cyan-500/40 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-800/40">
                    {paper.venueStatus} ({paper.year})
                  </span>
                  <div className="flex items-center gap-2">
                    {paper.paperUrl && (
                      <a
                        href={paper.paperUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1"
                      >
                        <FileText className="w-3.5 h-3.5" /> PDF ↗
                      </a>
                    )}
                    {paper.codeUrl && (
                      <a
                        href={paper.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1"
                      >
                        <GithubIcon className="w-3.5 h-3.5" /> Code ↗
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{paper.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-3">{paper.abstract}</p>
                <div className="flex flex-wrap gap-1.5">
                  {paper.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 4: EXPERIENCE & INTERNSHIPS */}
        <div className="p-6 md:p-8 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase mb-6">
            <Briefcase className="w-4 h-4" /> Experience & Internships
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceData.map((exp) => (
              <div key={exp.id} className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      {exp.type}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">{exp.duration}</span>
                  </div>
                  <h3 className="text-base font-bold text-white">{exp.role}</h3>
                  <p className="text-xs text-cyan-400 mb-3">{exp.organization} • {exp.location}</p>
                  <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 5: FEATURED PROJECTS */}
        <div className="p-6 md:p-8 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase">
              <Sparkles className="w-4 h-4" /> Featured Projects
            </div>
            <span className="text-xs text-zinc-500 font-mono">Click card to view Problem & Solution</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsData.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="group cursor-pointer p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-cyan-500/50 hover:bg-zinc-900/70 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {proj.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-3">
                    {proj.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-zinc-900">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1"
                  >
                    GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POPUP MODAL: Problem & Solution */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-xl w-full p-6 md:p-8 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-900 cursor-pointer border border-zinc-800"
            >
              Close ✕
            </button>

            <h3 className="text-xl font-bold text-white mb-1">{selectedProject.title}</h3>
            <p className="text-xs text-cyan-400 font-mono mb-4">{selectedProject.tagline}</p>

            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-900/30">
                <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider block mb-1">
                  The Problem Encountered
                </span>
                <p className="text-zinc-300 leading-relaxed">{selectedProject.problem}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-900/30">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  The Solution Built
                </span>
                <p className="text-zinc-300 leading-relaxed">{selectedProject.solution}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-zinc-900">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium transition-colors"
                >
                  Launch Live Demo ↗
                </a>
              )}
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium transition-colors border border-zinc-800"
              >
                View GitHub Code ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}