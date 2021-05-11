import {
  Avatar,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core"
import { Check, ContactMail } from "@material-ui/icons"
import React, { useState } from "react"

import { makeStyles } from "@material-ui/core"
import { useEffect } from "react"

const useStyles = makeStyles((theme) => ({
  progress: {
    color: theme.palette.primary.main,
    position: "absolute",
    top: 5,
    left: 13,
    zIndex: 1,
  },
  success: {
    background: theme.palette.success.main,
  },
  primaryColor: {
    background: theme.palette.secondary.main,
  },
}))

export const CheckoutDialog = ({ open, onClose }) => {
  const classes = useStyles()
  const [delayed, setDelayed] = useState(0)

  const GetAddress = () => (
    <ListItem>
      {delayed <= 1 ? (
        <>
          <ListItemAvatar>
            <Avatar className={classes.primaryColor}>
              <ContactMail />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"scanning for shipping address.."} />
          <CircularProgress size={46} className={classes.progress} />
        </>
      ) : (
        <>
          <ListItemAvatar>
            <Avatar className={classes.success}>
              <Check />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Shipping address acquired"} />
        </>
      )}
    </ListItem>
  )

  const GetCreditCard = () => (
    <ListItem>
      {delayed <= 2 ? (
        <>
          <ListItemAvatar>
            <Avatar className={classes.primaryColor}>
              <ContactMail />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"scanning for payment method.."} />
          <CircularProgress size={46} className={classes.progress} />
        </>
      ) : (
        <>
          <ListItemAvatar>
            <Avatar className={classes.success}>
              <Check />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Credit Card acquired"} />
        </>
      )}
    </ListItem>
  )

  const CheckoutCompleted = () => (
    <ListItem>
      <ListItemAvatar>
        <Avatar className={classes.success}>
          <Check />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={"Checkout Complete"} />
    </ListItem>
  )

  const handleClose = () => {
    setDelayed(1)
    onClose()
  }

  useEffect(() => {
    if (open) {
      const timeout = setTimeout(
        () => setDelayed((state) => (state += 1)),
        3000
      )
      return () => clearTimeout(timeout)
    }
  }, [delayed, open])

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Automated Checkout</DialogTitle>
      <DialogContent>
        <List>
          <GetAddress />
        </List>
        <List>{delayed >= 2 && <GetCreditCard />}</List>
        <List>{delayed >= 3 && <CheckoutCompleted />}</List>
      </DialogContent>
    </Dialog>
  )
}
