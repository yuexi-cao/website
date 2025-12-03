import React, { useState } from 'react';
import { Container } from './ui/Container';
import { SmartLink } from './ui/SmartLink';
import { ResearchData, Paper } from '../types';
import { FileTextIcon, DownloadIcon, ChevronDownIcon } from './Icons';

interface ResearchSectionProps {
  data: ResearchData;
}

const PaperCard: React.FC<{ paper: Paper }> = ({ paper }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isJMP = paper.isJobMarketPaper;

  return (
    <div 
      className={`group relative p-8 rounded-xl border transition-all duration-500 ease-out 
      hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]
      ${isJMP 
        ? 'bg-neutral-50 border-neutral-200 shadow-sm' 
        : 'bg-white border-transparent hover:border-neutral-200 hover:bg-neutral-50'
      }`}
    >
      {isJMP && (
        <span className="absolute top-0 right-0 mt-8 mr-8 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-900 text-white tracking-wide uppercase shadow-sm z-10">
          Job Market Paper
        </span>
      )}
      
      <div className="flex flex-col gap-4">
        {/* Title & Header */}
        <div className="relative z-10">
          <h3 className={`text-xl font-medium tracking-tight mb-2 transition-colors duration-300 ${
            isJMP ? 'text-neutral-900' : 'text-neutral-800 group-hover:text-black'
          }`}>
            {paper.title}
          </h3>
          <div className="text-neutral-500 font-light text-base group-hover:text-neutral-600 transition-colors duration-300">
            {paper.authors.join(", ")} &mdash; <span className="text-neutral-400 group-hover:text-neutral-500">{paper.year}</span>
          </div>
          {paper.publication && (
            <div className="text-neutral-600 italic text-sm mt-1">
              Published in {paper.publication}
            </div>
          )}
        </div>

        {/* Interactive Abstract Section */}
        {paper.abstract && paper.abstract.trim().length > 0 && (
          <div className="mt-2 relative z-10">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-neutral-400 hover:text-neutral-900 transition-colors focus:outline-none group/btn py-2"
            >
              <span>{isExpanded ? 'Hide Abstract' : 'Read Abstract'}</span>
              <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover/btn:translate-y-0.5'}`} />
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
              }`}
            >
              <p className="text-neutral-600 leading-relaxed text-sm max-w-3xl pl-4 border-l-2 border-neutral-200">
                {paper.abstract}
              </p>
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-6 mt-4 pt-4 border-t border-neutral-100 group-hover:border-neutral-200 transition-colors duration-300 relative z-10">
          {paper.pdfUrl && (
            <SmartLink href={paper.pdfUrl} className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
              <DownloadIcon className="w-4 h-4" />
              <span>Paper (PDF)</span>
            </SmartLink>
          )}
          {paper.codeUrl && (
            <SmartLink href={paper.codeUrl} className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
              <FileTextIcon className="w-4 h-4" />
              <span>Code & Appendix</span>
            </SmartLink>
          )}
        </div>
      </div>
    </div>
  );
};

export const ResearchSection: React.FC<ResearchSectionProps> = ({ data }) => {
  return (
    <section className="py-24 bg-white border-t border-neutral-100">
      <Container>
        <div className="mb-16 animate-in slide-in-from-bottom-8 duration-700 fade-in">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 mb-2">
            Research
          </h2>
          <p className="text-3xl font-light text-neutral-900">
            Selected Work
          </p>
        </div>

        <div className="space-y-12">
          {/* Job Market Paper */}
          {data.jobMarketPaper && (
            <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-1000 delay-100 fade-in">
              <PaperCard paper={data.jobMarketPaper} />
            </div>
          )}

          {/* Publications */}
          {data.publications && data.publications.length > 0 && (
            <div className="space-y-6 pt-8 animate-in slide-in-from-bottom-8 duration-1000 delay-200 fade-in">
              <h3 className="text-lg font-medium text-neutral-900 px-2 border-l-2 border-neutral-900 pl-4">Publications</h3>
              <div className="space-y-4">
                {data.publications.map(paper => (
                  <PaperCard key={paper.id} paper={paper} />
                ))}
              </div>
            </div>
          )}

          {/* Working Papers */}
          {data.workingPapers && data.workingPapers.length > 0 && (
            <div className="space-y-6 pt-8 animate-in slide-in-from-bottom-8 duration-1000 delay-300 fade-in">
              <h3 className="text-lg font-medium text-neutral-900 px-2 border-l-2 border-neutral-300 pl-4">Working Papers</h3>
              <div className="space-y-4">
                {data.workingPapers.map(paper => (
                  <PaperCard key={paper.id} paper={paper} />
                ))}
              </div>
            </div>
          )}

          {/* Work in Progress */}
          {data.workInProgress && data.workInProgress.length > 0 && (
            <div className="space-y-6 pt-8 animate-in slide-in-from-bottom-8 duration-1000 delay-500 fade-in">
              <h3 className="text-lg font-medium text-neutral-900 px-2 border-l-2 border-neutral-200 pl-4">Work in Progress</h3>
              <div className="space-y-4">
                {data.workInProgress.map(paper => (
                  <PaperCard key={paper.id} paper={paper} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};