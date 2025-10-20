import React from "react";

interface CardRootProps {
  children: React.ReactNode;
  backgroundClassName?: string;
}

function CardRoot({ children, backgroundClassName = "bg-white bg-opacity-50" }: CardRootProps) {
  return (
    <div className={`p-8 rounded-4xl shadow-sm w-full ${backgroundClassName}`}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}
function CardHeader({ children, className = "text-xl font-semibold text-black" }: CardHeaderProps) {
  return <h2 className={className}>{children}</h2>;
}

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}
function CardBody({ children, className = "text-base text-black space-y-4" }: CardBodyProps) {
  return <div className={className}>{children}</div>;
}

// Attach subcomponents
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
});