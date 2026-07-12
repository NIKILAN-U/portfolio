"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, GitFork, Star, Users, BookMarked } from "lucide-react";
import { profile } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type GithubUser = {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
};

type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

export function GithubStats() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${profile.githubUser}`),
          fetch(`https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=updated`),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API unavailable");

        const userData = (await userRes.json()) as GithubUser;
        const reposData = (await reposRes.json()) as GithubRepo[];

        if (!cancelled) {
          setUser(userData);
          setRepos(reposData.sort((a, b) => b.stargazers_count - a.stargazers_count));
          setStatus("ready");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
  const topRepos = repos.slice(0, 4);

  const stats = [
    { label: "Public Repos", value: user?.public_repos, icon: BookMarked },
    { label: "Followers", value: user?.followers, icon: Users },
    { label: "Total Stars", value: status === "ready" ? totalStars : undefined, icon: Star },
    { label: "Total Forks", value: status === "ready" ? totalForks : undefined, icon: GitFork },
  ];

  return (
    <section id="github" className="relative py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="GitHub"
          title="Open-source activity"
          description="Live data pulled from the GitHub REST API — repositories, stars, and contribution history."
        />

        <div className="mb-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="gradient-border bg-surface/60 p-5 backdrop-blur-xl">
              <stat.icon className="h-4 w-4 text-accent" />
              <p className="font-mono-tag mt-3 text-2xl font-bold text-foreground">
                {stat.value ?? (status === "error" ? "—" : "···")}
              </p>
              <p className="mt-1 text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="gradient-border mb-8 overflow-x-auto bg-surface/60 p-6 backdrop-blur-xl"
        >
          <p className="font-mono-tag mb-4 text-xs uppercase tracking-[0.2em] text-muted">
            Contribution Calendar
          </p>
          <Image
            src={`https://ghchart.rshah.org/7C8CF0/${profile.githubUser}`}
            alt={`${profile.name} GitHub contribution chart`}
            width={870}
            height={110}
            unoptimized
            className="min-w-[720px]"
          />
        </motion.div>

        {status === "error" ? (
          <p className="text-sm text-muted">
            GitHub data couldn&apos;t be loaded right now (public API rate limit). Visit the profile
            directly below.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {topRepos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="gradient-border group bg-surface/60 p-5 backdrop-blur-xl transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono-tag text-sm font-semibold text-foreground group-hover:text-accent">
                    {repo.name}
                  </p>
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <Star className="h-3.5 w-3.5" /> {repo.stargazers_count}
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 text-xs text-muted">
                  {repo.description ?? "No description provided."}
                </p>
                {repo.language && (
                  <span className="mt-3 inline-block rounded-full border border-foreground/10 px-2.5 py-1 text-[0.65rem] text-muted">
                    {repo.language}
                  </span>
                )}
              </motion.a>
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <Button href={profile.github} variant="outline" external>
            <Github className="h-4 w-4" /> View Full Profile
          </Button>
        </div>
      </div>
    </section>
  );
}
