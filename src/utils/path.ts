/**
 * Utility function for path handling that works across all deployment types
 * (local development, Vercel, GitHub Pages)
 */
export function getPath(path: string): string {
  // Check if running on the GitHub Pages domain
  const isGitHubPages = typeof window !== 'undefined' && 
    window.location.hostname.includes('github.io');
  
  // Strip leading slash for consistency
  const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Only in GitHub Pages domain, add the prefix
  if (isGitHubPages) {
    return normalizedPath ? `/EK-Web-Design/${normalizedPath}` : '/EK-Web-Design';
  }
  
  // For all other environments (Vercel, local development), use simple paths
  return normalizedPath ? `/${normalizedPath}` : '/';
} 