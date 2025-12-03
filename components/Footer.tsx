import React from 'react';
import { Container } from './ui/Container';
import { SmartLink } from './ui/SmartLink';
import { Profile } from '../types';
import { MailIcon } from './Icons';

interface FooterProps {
  profile: Profile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-400 py-24 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl text-white font-light tracking-tight">Contact</h2>
            <div className="space-y-4 text-lg font-light">
              <SmartLink 
                href={`mailto:${profile.email}`} 
                className="flex items-center gap-3 hover:text-white transition-colors duration-300 group"
              >
                <MailIcon className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                {profile.email}
              </SmartLink>
              <p className="leading-relaxed">
                {profile.institution}<br/>
                Department of Economics
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end justify-start md:justify-start space-y-6">
             <h2 className="text-2xl text-white font-light tracking-tight">Links</h2>
             <div className="flex flex-col md:items-end gap-4">
                <SmartLink href={profile.cvUrl} className="hover:text-white transition-colors">Curriculum Vitae</SmartLink>
                {profile.linkedinUrl && <SmartLink href={profile.linkedinUrl} className="hover:text-white transition-colors">LinkedIn</SmartLink>}
                {profile.scholarUrl && <SmartLink href={profile.scholarUrl} className="hover:text-white transition-colors">Google Scholar</SmartLink>}
                {profile.githubUrl && <SmartLink href={profile.githubUrl} className="hover:text-white transition-colors">GitHub</SmartLink>}
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 text-sm font-light text-neutral-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} {profile.name}. All rights reserved.</p>
          <p>Designed with minimalism.</p>
        </div>
      </Container>
    </footer>
  );
};