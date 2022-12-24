import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'primary' | 'outline';
  loading?: boolean;

  [x: string]: any;
}

const Button = (props: Props) => {
  const {
    className = '',
    children,
    disabled = false,
    variant = 'default',
    type = 'button',
    loading = false,
    ...rest
  } = props;

  let classes = [ 'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark' ];
  classes.push(className);

  if (disabled) {
    classes.push('opacity-40 pointer-events-none');
  }

  return (
    <button { ...rest } type={ type } className={ classes.join(' ') }>
      { loading &&
          <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
          </svg> }
      { children }
    </button>
  );
};

export default Button;
