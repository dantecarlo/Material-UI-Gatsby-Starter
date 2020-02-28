import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '../../Shared/components/Button'
import Header from './Header'
import headersStyle from '../../../assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle'

const useStyles = makeStyles(headersStyle)

const MainHeader = () => {
  const classes = useStyles()

  return (
    <Header
      fixed
      brand="Nt School"
      color="transparent"
      links={
        <List className={`${classes.list} ${classes.mlAuto}`}>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              Home
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              About us
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              Products
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              Contact us
            </Button>
          </ListItem>
        </List>
      }
    />
  )
}

export default MainHeader
