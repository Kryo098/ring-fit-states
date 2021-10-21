import React, {useState} from "react"
  
import { makeStyles,Modal,Box,Paper,AppBar,Toolbar,Typography,IconButton } from "@material-ui/core"
  
import { Message,ExitToApp,Info } from "@material-ui/icons"
  
import { push } from "connected-react-router"
  
import { useDispatch, useSelector } from "react-redux"
  
import { signOut } from "../reducks/users/operations"
  
import { getIsSignedIn } from "../reducks/users/selectors"
  
import Form from "./Form"

const useStyles = makeStyles((theme)=> ({
  root: {
    flexGrow: 1,
    color:"#ff8e00",
    [theme.breakpoints.down('sm')]: {
      width:'100%',
    }
  },
  title: {
    position:"relative",
    left:-60,
    right:0,
    margin:"0 auto",
    fontSize:30,
    cursor:"pointer",
    "&:hover":{
      transition: theme.transitions.create(
        ['color'],
        {duration:theme.transitions.duration.complex}
      ),
      color:"#ffb5a0",
    },
    [theme.breakpoints.down('sm')]: {
      fontSize:21,
      left:20,
    },
  },
  menu: {
    backgroundColor: "#fff",
    color: "#444",
    width:200
  },
  toolBar: {
    margin: "0",
    width: "100%",
    },
  iconButtons: {
    margin: "0 0 0 auto",
  },
  modal:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    backgroundColor: '#f4f4f4',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 4,
    [theme.breakpoints.down('md')]: {
      width:'85%',
    },
  },
  logout: {
    fontSize:18,
    [theme.breakpoints.down('sm')]: {
      fontSize:0,
    },
  },
  info: {
    padding:20,
    width:700,
    marginTop:20,
    margin:"0 auto",
    [theme.breakpoints.down('md')]:{
      width:"100%",
      marginTop:0,
    }
  },
  icon:{
    position:'relative',
    top:15,
    transform:'scale(1.6)',
    [theme.breakpoints.down('md')]: {
      top:-10,
      left:-10,
      transform:"scale(1.2)"
    },
  },
  typo: {
    display:"block",
    lineHeight:1.8,
    width:600,
    marginLeft:50,
    marginTop:-30,
    [theme.breakpoints.down('md')]: {
      marginLeft:0,
      marginTop:-15,
      width:'auto',
    }
  }
}))
  

const ButtonAppBar = () => {
  const [open,setOpen] =useState(false)
  const handleOpen =()=> setOpen(true)
  const handleClose =()=> setOpen(false)

  const classes = useStyles()
  
  const dispatch = useDispatch()
  
  const selector = useSelector((state)=> state)
  const IsSignedIn = getIsSignedIn(selector)

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#e73e0e" }} >
        <Toolbar className={classes.toolBar}>
          
          {IsSignedIn&&
          (
                      <IconButton color="inherit" onClick={()=>dispatch(signOut())}>
                      <ExitToApp />
                      <Typography className={classes.logout}>ログアウト</Typography>
                      </IconButton>
          )
          }

          <Typography className={classes.title} color="inherit" onClick={() => dispatch(push("/"))}>
            RINGFIT ADVENTURE STATES
          </Typography>
          <IconButton color="inherit" onClick={handleOpen}>
            <Info />
          </IconButton>

          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
            <Box className={classes.modal}>
              <Paper className={classes.info}>
                <Message className={classes.icon}/>
                <Typography className={classes.typo}>
                  このサイトは Nintendo®Switchソフト Ring Fit Adventure に収録されている<br />各フィットネスを行なった回数と日付をグラフ化、自己管理に便利なアプリです。
                </Typography>
              </Paper>
              <Form />
            </Box>
          </Modal>
          
        </Toolbar>
      </AppBar>
    </div>
  )
  
}
  

export default ButtonAppBar
  
