import React, { ReactNode } from "react";

interface ReportCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const ReportCard = ({ title, icon, children }: ReportCardProps) => {
  return (
    <div className="bg-crypto-pureWhite p-6 rounded-xl shadow-md">
      <h3 className="flex items-center text-lg font-semibold text-crypto-navy mb-4">
        <span className="w-5 h-5 mr-2">{icon}</span>
        {title}
      </h3>
      <p className="text-sm leading-7">{children}</p>
    </div>
  );
};

export default ReportCard;