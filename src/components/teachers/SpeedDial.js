import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";


import Logo from "../images/F.png";
import Course from "../images/course.png";
import Home from "../images/home.png";
import Mail from "../images/mail.png";
import Profile from "../images/profile.png";
import Settings from "../images/settings.png";
import Logout from "../images/logout.png";

const useStyles = makeStyles((theme) => ({
  root: {
    transform: 'translateZ(0px)',
    flexGrow: 1,
    width: '90vw',
  },
  speedDial: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: 0,
    minHeight: 100
  },
  fab: {
    backgroundColor: "gray"
  }
}));



const actions = [
  { icon: <Link to='/'><img src={Logo} alt="" /></Link>, name: '' },
  { icon: <Link to='/courses'><img src={Course} alt="" /></Link>, name: 'Course' },
  { icon: <Link to='/'><img src={Home} alt="" /></Link>, name: 'Home' },
  { icon: <Link to='/'><img src={Mail} alt="" /></Link>, name: 'Mail' },
  { icon: <Link to='/'><img src={Profile} alt="" /></Link>, name: 'Profile' },
  { icon: <Link to='/'><img src={Settings} alt="" /></Link>, name: 'Settings' },
  { icon: <Link to='/'><img src={Logout} alt="" /></Link>, name: 'Logout' },
];

export default function OpenIconSpeedDial() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button onClick={handleVisibility}></Button>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
            style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}
            classes={classes}
            TooltipClasses={classes}
          />
        ))}
      </SpeedDial>
    </div>
  );
}