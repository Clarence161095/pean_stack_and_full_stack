import Item from './Item';
import { Fragment } from 'react';

const List = ({ list, setItem, ...props }) => {
  return (
    <ul {...props}>
      {list.map((item) => (
        <Fragment key={item.id}>{setItem(item)}</Fragment>
      ))}
    </ul>
  );
};

export const ListItem = ({
  list,
  activeId,
  ulClassName,
  liClass,
  liActiveClass,
  onClickItem,
  ...props
}) => {
  return (
    <List
      list={list}
      className={ulClassName}
      setItem={(item) => (
        <Item
          key={item.id}
          text={item.name}
          isActive={activeId === item.id}
          className={liClass}
          activeClassName={liActiveClass}
          onClick={() => onClickItem(item.id)}
        />
      )}
      {...props}
    />
  );
};

export default List;
