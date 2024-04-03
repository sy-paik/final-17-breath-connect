import SpriteSVG from './spriteSheet.svg';

interface SvgSpriteProps {
  id: string;
  color: string;
  width: number;
  height?: number;
  className?: string;
}

const SvgSprite = ({
  id,
  color,
  width = 24,
  height,
  className,
}: SvgSpriteProps) => {
  return (
    <div>
      <svg fill={color} width={width} height={height ?? width}>
        <use href={`${SpriteSVG}#${id}`} className={`${className ?? ''}`} />
      </svg>
    </div>
  );
};

export default SvgSprite;
