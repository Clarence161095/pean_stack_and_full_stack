import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CampaignIcon from '@mui/icons-material/Campaign';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import HomeIcon from '@mui/icons-material/Home';
import InboxIcon from '@mui/icons-material/Inbox';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsIcon from '@mui/icons-material/Settings';

const Menu = [
  {
    title: 'Home',
    route: '/home',
    icon: <HomeIcon />,
    level: 1,
    roles: ["HR"],
    childrenIsOpen: false,
    children: [
      {
        title: 'Announcement',
        route: '/home/announcement',
        icon: <CampaignIcon />,
        level: 2
      },
      {
        title: 'Graph',
        route: '/home/graph',
        icon: <AutoGraphIcon />,
        level: 2
      },
    ]
  },
  {
    title: 'My Info',
    route: 'my-info',
    icon: <PermIdentityIcon />,
    level: 1
  },
  {
    title: 'Setting',
    icon: <SettingsIcon />,
    childrenIsOpen: false,
    level: 1,
    children: [
      {
        title: 'Upload CSV',
        route: 'upload-csv',
        icon: <CloudUploadIcon />,
        level: 2
      },
      {
        title: 'Generic Data',
        route: 'generic-data',
        icon: <InboxIcon />,
        level: 2,
      },
    ]
  },
]

export default Menu