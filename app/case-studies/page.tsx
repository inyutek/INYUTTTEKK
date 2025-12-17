import Link from "next/link";
import { getAllCaseStudies } from "@/lib/caseStudies";

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* PAGE HEADER */}
        <h1 className="text-4xl font-extrabold mb-4">Case Studies</h1>
        <p className="text-sm text-black/70 mb-10 max-w-2xl">
          Real work and real outcomes. Add a new case study by creating a new file
          in <b> content/case-studies </b>.
        </p>

        {/* CASE STUDIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studies.map((s) => (
            <Link
              key={s.slug}
              href={`/case-studies/${s.slug}`}
              className="border border-black/15 p-6 hover:border-black transition"
            >
              {/* META */}
              <div className="text-xs tracking-widest text-black/60 mb-2">
                {s.frontmatter.date}
                {s.frontmatter.client
                  ? ` • ${s.frontmatter.client}`
                  : ""}
              </div>

              {/* TITLE */}
              <h2 className="text-xl font-bold mb-2">
                {s.frontmatter.title}
              </h2>

              {/* SUMMARY */}
              {s.frontmatter.summary && (
                <p className="text-sm text-black/70">
                  {s.frontmatter.summary}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
