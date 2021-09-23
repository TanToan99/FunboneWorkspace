import React from "react";
import { useStyles } from "./styles";
import image from "assets/images/lamavt.png"; 
import iconedit from "assets/icons/edit.png"; 
import {Button} from "@mui/material";


const ProfileCard = () => {
  const classes= useStyles();
  return <div className={classes.profile}>
    <div className={classes.nameprofile}>
      <img src={image} alt="" className={classes.avt}/>
      <div className={classes.info}>
        <h1 className={classes.textName}>Nguyen Hoang Lam</h1>
        <h2 className={classes.roleName}>Developer</h2>
      </div>
      
      <img src={iconedit} alt="" className={classes.edit} />
    </div>
    <div className={classes.mailuser}>
      <h2 className={classes.usermail}>nguyenhoanglam.emily@gmail.com</h2>
    </div>
    <Button type="submit" className={`${classes.buttonLogout}`}>
      Log Out
    </Button>
  </div>;
};

export default ProfileCard;
