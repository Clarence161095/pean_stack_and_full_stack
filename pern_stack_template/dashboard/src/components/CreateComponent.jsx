/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
// const OldButton = ({ title, className, type = 'success', ...props }) => {
//   let color = 'green';

//   if (type === 'success') {
//     color = 'green';
//   } else if (type === 'danger') {
//     color = 'red';
//   } else if (type === 'warning') {
//     color = 'yellow';
//   } else if (type === 'info') {
//     color = 'blue';
//   } else {
//     color = 'green';
//   }

//   let classes = `bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-1 px-2 rounded`;

//   if (className) {
//     classes += ` ${className}`
//   } else {
//     classes += '';
//   }

//   return (
//     <button className={classes} {...props} >
//       {title}
//     </button>
//   )
// }

// const SimpleButton = ({ title }) => {
//   return (
//     <button className={`bg-stone-500 hover:bg-stone-700 text-white font-bold py-1 px-2 rounded`}>
//       {title}
//     </button>
//   )
// }

export const classNameStrategy = (Component) => {
  return ({ className, ...props }) => {
    let classes = '';

    if (className) {
      classes += ` ${className}`
    } else {
      classes += '';
    }

    return <Component addClass={classes} {...props} />
  }
}

export const bgColorStrategy = (Component) => {
  return ({ bgColorType = 'success', ...props }) => {
    let bgColor = 'green';

    if (bgColorType === 'success') {
      bgColor = 'green';
    } else if (bgColorType === 'danger') {
      bgColor = 'red';
    } else if (bgColorType === 'warning') {
      bgColor = 'yellow';
    } else if (bgColorType === 'info') {
      bgColor = 'blue';
    } else {
      bgColor = 'green';
    }

    return <Component bgColor={bgColor} {...props} />
  }
}

export const applyStrategy = (Component, strategies) => {
  return strategies.reduce((acc, strategy) => {
    return strategy(acc);
  }, Component);
}

export const createComponent= (Component, strategies) => {
  !strategies && (strategies = [classNameStrategy, bgColorStrategy]);
  return applyStrategy(Component, strategies);
}
