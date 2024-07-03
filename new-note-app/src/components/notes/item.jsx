import AntdCard from '../antd/Card';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const Item = ({ name, description }) => {
  return (
    <AntdCard
      className={'cursor-pointer'}
      title={name}
      description={description}
      actions={[<EditOutlined key="edit" />, <DeleteOutlined key="del" />]}
    />
  );
};

export default Item;
