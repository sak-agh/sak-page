import React from 'react';

interface Props {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  img?: string;
  rounded?: boolean;
}

const Avatar = (props: Props) => {
  const {
    size = 'm',
    img = null,
    rounded = true
  } = props;

  const dimensionMap = new Map()
    .set('xs', 'h-6 w-6')
    .set('s', 'h-8 w-8')
    .set('m', 'h-10 w-10')
    .set('l', 'h-12 w-12')
    .set('xl', 'h-14 w-14');

  const dimension = dimensionMap.get(size);
  const roundedClass = rounded ? 'rounded-full' : 'rounded-md';

  if (img) {
    return (
      <img
        className={ `inline-block ${ dimension } ${ roundedClass }` }
        src={ img }
        alt=""
      />
    );
  }

  return (
    <span className={ `inline-block ${ dimension } ${ roundedClass } overflow-hidden bg-gray-100` }>
        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
    </span>
  );
};

export default Avatar;
