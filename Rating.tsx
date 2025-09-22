interface RatingProps {
  value: number;
  count: number;
}

export default function Rating({ value, count }: RatingProps) {
  return (
    <div className="flex items-center space-x-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < value ? '★' : '☆'}</span>
      ))}
      <span className="text-gray-600 text-sm">({count})</span>
    </div>
  );
}
