import React from 'react';
import { Container } from './ui/Container';
import { SmartLink } from './ui/SmartLink';
import { Profile } from '../types';
import { MailIcon, MapPinIcon } from './Icons';

interface HeroProps {
  profile: Profile;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-white">
      <Container>
        <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-20 items-start md:items-center">
          
          {/* Left Text Content */}
          <div className="flex-1 space-y-8 animate-in slide-in-from-left-4 duration-700 fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900">
                {profile.name}
              </h1>
              <div className="space-y-1">
                <p className="text-xl md:text-2xl text-neutral-500 font-light">
                  {profile.title}
                </p>
                <p className="text-lg md:text-xl text-neutral-500 font-light">
                  {profile.institution}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-sm text-neutral-600">
              <div className="flex items-center gap-3 group cursor-pointer w-fit">
                <div className="p-2 bg-neutral-50 rounded-full group-hover:bg-neutral-100 transition-colors">
                  <MailIcon className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                </div>
                <SmartLink href={`mailto:${profile.email}`} className="border-b border-transparent hover:border-neutral-300 hover:text-neutral-900 transition-all">
                  {profile.email}
                </SmartLink>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-neutral-50 rounded-full">
                  <MapPinIcon className="w-4 h-4 text-neutral-400" />
                </div>
                <span>{profile.location}</span>
              </div>
            </div>

            <p className="text-neutral-600 leading-relaxed max-w-2xl text-lg font-light">
              {profile.about}
            </p>

            <div className="pt-4">
               <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 block mb-3">
                 Fields of Interest
               </span>
               <div className="flex flex-wrap gap-2">
                 {profile.fields.map((field) => (
                   <span 
                    key={field} 
                    className="px-3 py-1 bg-white text-neutral-600 text-sm rounded-md border border-neutral-200 transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-50 cursor-default shadow-sm hover:shadow-md"
                   >
                     {field}
                   </span>
                 ))}
               </div>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="w-48 h-48 md:w-80 md:h-80 relative shrink-0 animate-in slide-in-from-right-4 duration-1000 fade-in delay-200">
            <div className="absolute inset-0 bg-neutral-100 rounded-full md:rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-out hover:shadow-2xl hover:scale-105 cursor-none">
                <img 
                  src={profile.image} 
                  alt={profile.name} 
                  className="w-full h-full object-cover opacity-95 grayscale transition-all duration-700 ease-in-out hover:grayscale-0"
                />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};