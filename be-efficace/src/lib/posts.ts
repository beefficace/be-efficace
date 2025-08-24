import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'posts');

// A simple frontmatter parser
function parseFrontmatter(fileContent: string): { [key: string]: any } {
  const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontmatter: { [key: string]: any } = {};

  if (match) {
    const frontmatterBlock = match[1];
    const lines = frontmatterBlock.split('\n');
    lines.forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        const value = valueParts.join(':').trim().replace(/^['"]|['"]$/g, '');
        frontmatter[key.trim()] = value;
      }
    });
  }
  return frontmatter;
}

// A very basic markdown to HTML converter
function markdownToHtml(markdown: string): string {
    let html = markdown
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>')
        .split('\n')
        .map(line => line.trim() === '' ? '' : `<p>${line}</p>`)
        .join('');
    return html;
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const frontmatter = parseFrontmatter(fileContents);
    const content = fileContents.replace(/^---\s*([\s\S]*?)\s*---/, '').trim();

    return {
      slug,
      content,
      ...frontmatter,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const frontmatter = parseFrontmatter(fileContents);
    const content = fileContents.replace(/^---\s*([\s\S]*?)\s*---/, '').trim();
    const contentHtml = markdownToHtml(content);

    return {
        slug,
        contentHtml,
        ...frontmatter,
    };
}
