import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge('rounded-lg bg-background p-6', className)}
      role="article"
      aria-label="card"
    >
      {children}
    </div>
  );
};

export default Card;
