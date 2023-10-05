type Props = {
  id: string;
} & React.SVGProps<SVGSVGElement>;

export const Icon = ({ id, ...restProps }: Props) => {
  return (
    <svg {...restProps}>
      <use xlinkHref={`/icons/sprites.svg#${id}`} />
    </svg>
  );
};
