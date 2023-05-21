import { forwardRef, InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  Icon: IconType;
  error?: string;
}

const Field = forwardRef<HTMLInputElement, IInputProps>(({
                                                           placeholder,
                                                           Icon,
                                                           className,
                                                           error,
                                                           type = 'text',
                                                           style,
                                                           ...rest
                                                         }, ref) => {
  return (
    <div className={`${className}`} style={style}>
      <label htmlFor=''>
        <Icon className={'mr-3'}/>
        <span>{placeholder}</span>
        <input ref={ref} type={type} {...rest} />
      </label>
      {error && <span className={'text-red-500'}>{error}</span>}
    </div>
  );
});

Field.displayName = 'Field';

export default Field;