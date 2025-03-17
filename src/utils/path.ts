/**
 * Utility function to fix the path for GitHub Pages deployment
 * Ensures we don't get double prefixes of /EK-Web-Design/EK-Web-Design
 */
export function getPath(path: string): string {
  // Check if running on the GitHub Pages domain
  const isGitHubPages = typeof window !== 'undefined' && 
    window.location.hostname.includes('github.io');
  
  // Strip leading slash for consistency
  const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
  
  // In GitHub Pages domain, use a simple path without prefix
  if (isGitHubPages) {
    return normalizedPath ? `/${normalizedPath}` : '/';
  }
  
  // In development, also use simple paths
  if (process.env.NODE_ENV !== 'production') {
    return normalizedPath ? `/${normalizedPath}` : '/';
  }
  
  // Only in production build but not on GitHub Pages domain, add the prefix
  return normalizedPath ? `/EK-Web-Design/${normalizedPath}` : '/EK-Web-Design';
} 