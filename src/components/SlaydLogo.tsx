import React from 'react';
import { Sword } from 'lucide-react';

type SlaydLogoProps = {
  className?: string;
};

const SlaydLogo: React.FC<SlaydLogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center pl-0 pt-2 gap-1 ${className}`}>
      <Sword size={36} className="text-slayd-pink" strokeWidth={2.5} />
      <span className="text-4xl font-bold text-slayd-text leading-none -ml-1">
        Sla<span className="bg-gradient-to-r from-slayd-pink to-slayd-purple bg-clip-text text-transparent">y</span>d
      </span>
    </div>
  );
};

export default SlaydLogo;