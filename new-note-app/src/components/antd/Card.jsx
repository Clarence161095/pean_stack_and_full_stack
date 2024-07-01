import { Avatar, Card } from 'antd';
const { Meta } = Card;

// https://ant.design/components/card#
const AntdCard = ({
  width = 300,
  cardCover,
  imgAlt = 'example',
  avatar,
  title = 'Card title',
  description = 'This is the description',
  actions,
  className,
  ...props
}) => (
  <Card
    style={{
      width,
    }}
    cover={cardCover && <img alt={imgAlt} src={cardCover} />}
    actions={actions}
    className={className}
    {...props}
  >
    <Meta avatar={avatar && <Avatar src={avatar} />} title={title} description={description} />
  </Card>
);
export default AntdCard;
