const Item = ({ text, isActive, className, activeClassName, ...props }) => {
  let classes = className;
  if (isActive) {
    classes += ` ${activeClassName}`;
  }
  return (
    <li className={classes} {...props}>
      {text}
    </li>
  );
};

export default Item;
