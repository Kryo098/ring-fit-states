
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { init,sendForm } from 'emailjs-com'
import {TextField,Button} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {Send} from "@material-ui/icons"
init('user_8xqmapNB3IIa6XJfZ3ZOB')

const useStyles = makeStyles((theme)=>({
  h2: {
    marginLeft: 10,
    marginTop: 20,
    marginBottom: -10,
    letterSpacing: 2,
    fontSize: 28,
    [theme.breakpoints.down('md')]:{
      textAlign: "center",
      marginTop: 30,
      marginBottom: 5,
    },
  },
  button: {
    position: "relative",
    left: 0,
    right: 0,
    backgroundColor: "#e73e0e",
    color: "#fff",
    fontSize: 20,
    height: 62,
    letterSpacing: 6,
    margin: 10,
    fontWeight: 800,
    "&:hover": {
      backgroundColor: "#ff8e00",
      color: "#e73e0e",
      "& $send": {
        transition: theme.transitions.create(
          ['left'],
          {duration: theme.transitions.duration.complex}
        ),
        left: 135
      }
    },
    [theme.breakpoints.down('md')]: {
      margin: 0,
      marginTop: 10,
    },
  },
  send: {
    position: "relative",
    left: -10,
  },
  form: {
    width: "70%",
    margin: "0 auto",
    marginTop: 70,
    [theme.breakpoints.down('md')]: {
      marginTop: 10,
      width: "100%"
    },
  },
  name: {
    margin: 10,
    [theme.breakpoints.down('md')]: {
      marginTop: 10,
      margin: 0,
    },
  },
  email: {
    margin: 10,
    [theme.breakpoints.down('md')]: {
      marginTop: 10,
      margin: 0,
    },
  },
  message: {
    margin: 10,
    [theme.breakpoints.down('md')]: {
      marginTop: 10,
      margin: 0,
    },
  },
}))
const Form = () => {
  const classes = useStyles()
  const [contactNumber,setContactNumber] = useState("000000")
  const [statusMessage,setStatusMessage] = useState("Message")
  const generateContactNumbr = () => {
    const numStr = '000000' + (Math.random()*1000000 | 0 )
    setContactNumber(numStr.substring(numStr.length - 6 ))
  }
  const { register, handleSubmit} = useForm()
  
  const onSubmit = (data) => {
    const statusMessage = document.querySelector('.statusMessage')
    const form = document.querySelector('#contact-form')
    generateContactNumbr()
    sendForm('default_service', 'template_ehtxvze', '#contact-form')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text)
  
      form.reset()
      setStatusMessage('メッセージを送信しました！')
      statusMessage.className = 'statusMessage success'
      setTimeout(()=>{
        setStatusMessage.className = 'statusMessage'
      },5000)
    }, function(error) {
      console.log('FAILED...', error)
  
      setStatusMessage("Failed to send message! Please try again later.")
  
      statusMessage.className = "statusMessage failure"
  
      setTimeout(()=> {
        statusMessage.className = 'statusMessage'
      }, 5000)
    })
  
  }

  return(
    <form  className={classes.form} id='contact-form' onSubmit={handleSubmit(onSubmit)}>
      <h2 className={classes.h2}>CONTACT</h2>
      <input type='hidden' name='contact_number' value={contactNumber} />
      <TextField className={classes.name} fullWidth variant="filled" type='text' name='userName' required {...register('userName', { required: true })} placeholder='Your name'/>
      <TextField className={classes.email} fullWidth variant="filled" type='email' name='userEmail' required {...register('userEmail', { required: true })} placeholder='Your email' />
      <TextField className={classes.message} fullWidth variant="filled" multiline rows={7} name='message' required {...register('message', { required: true })} placeholder='Message'/>
      <p className="statusMessage">{statusMessage}</p>
      <Button className={classes.button} fullWidth type='submit'><Send className={classes.send}/>SEND!</Button>
    </form>
  )
}

export default Form