import React from 'react';
import { Container } from './ui/Container';
import { TeachingExperience } from '../types';
import { SmartLink } from './ui/SmartLink';

interface TeachingSectionProps {
  data: TeachingExperience[];
}

export const TeachingSection: React.FC<TeachingSectionProps> = ({ data }) => {
  return (
    <section className="py-24 bg-neutral-50 border-t border-neutral-100">
      <Container>
        <div className="mb-16">
          <h2 className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-2">
            Experience
          </h2>
          <p className="font-display text-3xl font-light text-neutral-900">
            Teaching
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {data.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-lg shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-neutral-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="font-display text-lg font-medium text-neutral-900">{item.course}</h3>
                  <p className="text-neutral-600 mt-1 font-light">{item.role}</p>
                </div>
                <div className="text-right md:text-right">
                    <span className="text-sm text-neutral-400 block">{item.institution}</span>
                    <span className="text-sm font-medium text-neutral-500 block mt-1">{item.period}</span>
                </div>
              </div>
              {item.description && (
                <p className="text-neutral-500 text-sm leading-relaxed border-t border-neutral-50 pt-4 mt-2">
                  {item.description}
                </p>
              )}
              {item.materialsUrl && (
                <div className="mt-3">
                  <SmartLink
                    href={item.materialsUrl}
                    className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    <span>Course materials</span>
                  </SmartLink>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};