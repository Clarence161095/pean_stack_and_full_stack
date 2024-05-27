const Item = ({ text, isActive, className, activeClassName, ...props }) => {
  let classes = className;
  if (isActive) {
    classes += ` ${activeClassName}`;
  }

  if (text.length > 18) {
    text = text.substring(0, 18) + '...';
  }

  return (
    <li className={classes} {...props}>
      {text}
    </li>
  );
};

export default Item;
