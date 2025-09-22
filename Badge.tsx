interface BadgeProps {
  label: string;
  color?: string;
}

export default function Badge({ label, color = 'red' }: BadgeProps) {
  return (
    <span className={`px-2 py-1 text-xs font-bold text-white rounded bg-${color}-500`}>
      {label}
    </span>
  );
}
