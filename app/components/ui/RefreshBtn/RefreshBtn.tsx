import { RotateCcw } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface RefreshBtnProps {
  onClick?: () => void;
  className?: string;
}

const RefreshBtn: React.FC<RefreshBtnProps> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'cursor-pointer text-foreground hover:text-blue-500 transition-colors',
        className,
      )}
      title="Refresh location"
    >
      <RotateCcw />
    </button>
  );
};

export default RefreshBtn;
