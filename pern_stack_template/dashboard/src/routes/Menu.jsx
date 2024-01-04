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
    path: '/home',
    icon: <HomeIcon />,
    level: 1,
    roles: ["HR"],
    isActive: false,
    isOpenChildren: false,
    children: [
      {
        title: 'Announcement',
        path: '/home/announcement',
        icon: <CampaignIcon />,
        level: 2,
        isActive: false,
      },
      {
        title: 'Graph',
        path: '/home/graph',
        icon: <AutoGraphIcon />,
        level: 2,
        isActive: false,
      },
    ]
  },
  {
    title: 'My Info',
    path: '/my-info',
    icon: <PermIdentityIcon />,
    level: 1,
    isActive: false,
  },
  {
    title: 'Setting',
    path: '/setting',
    icon: <SettingsIcon />,
    level: 1,
    isActive: false,
    isOpenChildren: false,
    children: [
      {
        title: 'Upload CSV',
        path: '/setting/upload-csv',
        icon: <CloudUploadIcon />,
        level: 2,
        isActive: false,
      },
      {
        title: 'Generic Data',
        path: '/setting/generic-data',
        icon: <InboxIcon />,
        level: 2,
        isActive: false,
      },
    ]
  },
]

export default Menu