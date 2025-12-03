import React from 'react';

interface SmartLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string | undefined;
  className?: string;
  children: React.ReactNode;
}

/**
 * SmartLink automatically handles external vs internal links.
 * 
 * - If href starts with "http" or "https", it opens in a new tab.
 * - If href is a local path (starts with "/" or relative), it opens in the same tab, 
 *   unless it looks like a file (ends in .pdf), in which case it opens in a new tab.
 */
export const SmartLink: React.FC<SmartLinkProps> = ({ href, className, children, ...props }) => {
  if (!href) {
    return <span className={className}>{children}</span>;
  }

  const isExternal = href.startsWith('http') || href.startsWith('https');
  const isFile = href.toLowerCase().endsWith('.pdf');
  
  // Decide target behavior
  const target = (isExternal || isFile) ? '_blank' : undefined;
  const rel = (isExternal || isFile) ? 'noopener noreferrer' : undefined;

  return (
    <a 
      href={href} 
      className={className} 
      target={target} 
      rel={rel}
      {...props}
    >
      {children}
    </a>
  );
};