type Variants = 'outline' | 'text';
type Size = 'sm' | 'md' | 'lg';
type Colors = 'default' | 'primary' | 'secondary' | 'danger';

interface ButtonProps {
  variant?: Variants | null;
  disabledShadow?: boolean | null;
  disabled?: boolean;
  startIcon?: string | null | undefined;
  endIcon?: string | null | undefined;
  size?: Size;
  color?: Colors;
  message?: string;
}

export const Button = ({
  variant,
  disabledShadow = null,
  disabled,
  startIcon = null,
  endIcon = null,
  size = 'md',
  color = 'default',
  message = 'default',
}: ButtonProps) => {
  return (
    <button
      className={`btn ${`${variant ? variant : ''} ${color}`.trim()} ${size} ${
        !disabledShadow ? '' : 'disabled-shadow'
      }`.trim()}
      disabled={disabled}
    >
      {!!startIcon && (
        <span className="material-symbols-outlined">{startIcon}</span>
      )}
      {message}
      {!!endIcon && (
        <span className="material-symbols-outlined">{endIcon}</span>
      )}
    </button>
  );
};
