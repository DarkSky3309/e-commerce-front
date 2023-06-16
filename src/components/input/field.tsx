import { forwardRef, InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  Icon?: IconType;
  error?: string;
}

const Field = forwardRef<HTMLInputElement, IInputProps>(
  ({ title, Icon, className, error, type = 'text', style, ...rest }, ref) => {
    return (
      <div className={`${className} relative mb-4`} style={style}>
        <label>
          <span className={'mt-3 block'}>
            {Icon && <Icon className={'mr-3'} />}
            {title}
          </span>
          <input
            className={`rounded-lg placeholder:font-light mt-1 px-4 py-2 w-full outline-none border border-solid focus:border-themeColor ${
              !!error ? 'border-red-500' : 'border-gray'
            } transition-all`}
            ref={ref}
            type={type}
            {...rest}
          />
        </label>
        {error && (
          <span className={'text-red-500 mt-1 absolute top-20 left-0'}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

Field.displayName = 'Field';

export default Field;
