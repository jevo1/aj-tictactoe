interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
  currentPlayer: string;
}

export function Square({ value, onSquareClick, currentPlayer }: SquareProps) {
  return (
    <button 
      className="square" 
      onClick={onSquareClick}
      data-hover-value={!value ? currentPlayer : undefined} 
    >
      {value}
    </button>
  );
}