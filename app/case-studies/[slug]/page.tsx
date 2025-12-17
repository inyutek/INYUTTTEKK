import { notFound } from "next/navigation";
import { getCaseStudyBySlug } from "@/lib/caseStudies";

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ unwrap params (because params is Promise in your Next.js)
  const { slug } = await params;

  console.log("Slug received:", slug);

  const cs = getCaseStudyBySlug(slug);

  if (!cs) {
    console.log("Case study NOT found for slug:", slug);
    return notFound();
  }

  const { frontmatter, content } = cs;

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* META INFO */}
        <div className="text-xs tracking-widest text-black/60 mb-3">
          {frontmatter.date}
          {frontmatter.client ? ` • ${frontmatter.client}` : ""}
        </div>

        {/* TITLE */}
        <h1 className="text-4xl font-extrabold mb-6">{frontmatter.title}</h1>

        {/* SERVICES TAGS */}
        {frontmatter.services && frontmatter.services.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {frontmatter.services.map((service) => (
              <span
                key={service}
                className="text-xs border border-black/20 px-3 py-1"
              >
                {service}
              </span>
            ))}
          </div>
        )}

        {/* CONTENT (plain text for now) */}
        <div className="text-sm leading-relaxed whitespace-pre-wrap text-black/80">
          {content}
        </div>
      </div>
    </main>
  );
}
