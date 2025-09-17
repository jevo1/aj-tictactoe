interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

export function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button 
        className="square" 
        onClick={onSquareClick}
        data-hover-value={!value ? "X" : undefined}
    >
      {value}
    </button>
  );
}