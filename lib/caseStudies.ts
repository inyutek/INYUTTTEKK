import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = process.cwd();
const CASE_STUDIES_DIR = path.join(ROOT, "content", "case-studies");

export type CaseStudyFrontmatter = {
  title: string;
  date: string;
  client?: string;
  services?: string[];
  summary?: string;
};

export type CaseStudy = {
  slug: string;
  frontmatter: CaseStudyFrontmatter;
  content: string;
};

export function getAllCaseStudies(): CaseStudy[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return [];

  const files = fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((f) => f.endsWith(".mdx"));

  const studies: CaseStudy[] = [];

  for (const file of files) {
    const slug = file.replace(".mdx", "");
    const fullPath = path.join(CASE_STUDIES_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(raw);

    // ✅ Skip invalid/hidden/broken MDX files
    const fm = data as Partial<CaseStudyFrontmatter>;
    if (!fm?.title || !fm?.date) {
      console.warn(`Skipping invalid case study file: ${file}`);
      continue;
    }

    studies.push({
      slug,
      frontmatter: fm as CaseStudyFrontmatter,
      content,
    });
  }

  // ✅ Sort by date (latest first)
  studies.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));

  return studies;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const fullPath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const fm = data as Partial<CaseStudyFrontmatter>;
  if (!fm?.title || !fm?.date) return null;

  return {
    slug,
    frontmatter: fm as CaseStudyFrontmatter,
    content,
  };
}
