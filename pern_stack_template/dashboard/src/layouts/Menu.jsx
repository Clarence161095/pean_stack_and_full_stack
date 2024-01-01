import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import NestedList from "../components/NestedList";
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorder from '@mui/icons-material/StarBorder';

const INIT_MENU = [
  {
    title: 'Gửi Thư',
    icon: <SendIcon />,
    level: 1,
    roles: ["HR"]
  },
  {
    title: 'Nháp',
    icon: <DraftsIcon />,
    level: 1
  },
  {
    title: 'Hòm Thư',
    icon: <InboxIcon />,
    childrenIsOpen: false,
    level: 1,
    children: [
      {
        title: 'Starred 9',
        icon: <StarBorder />,
        level: 2
      },
      {
        title: 'Hòm Thư Con',
        icon: <InboxIcon />,
        childrenIsOpen: false,
        level: 2,
        children: [
          {
            title: 'Starred 1',
            icon: <StarBorder />,
            level: 3
          },
          {
            title: 'Starred 2',
            icon: <StarBorder />,
            level: 3
          },
        ]
      }
    ]
  },
]

export default function Menu() {
  // TODO: Use state for menus
  return (
    <>
      <NestedList menus={INIT_MENU} />
    </>
  )
}
