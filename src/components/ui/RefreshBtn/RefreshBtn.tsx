import store from '@/store';
import { RotateCcw } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface RefreshBtnProps {
  className?: string;
}

const RefreshBtn: React.FC<RefreshBtnProps> = ({ className }) => {
  const setCoords = store((state) => state.setCoords);
  const handleRefresh = () => {
    setCoords(null);
    window.location.reload();
  };
  return (
    <button
      onClick={handleRefresh}
      className={twMerge(
        'cursor-pointer text-foreground hover:text-blue-500 transition-colors',
        className,
      )}
      title="Refresh location"
      aria-label="Refresh location"
    >
      <RotateCcw />
    </button>
  );
};

export default RefreshBtn;
