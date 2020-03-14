import React,{createContext} from 'react'
import Header from '../../../shared/components/Header'
import Sidebar from '../../../shared/components/Sidebar'
import { AdminListItems } from '../../../shared/components/Sidebar/listItems'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const initialvalue = {open:true}
export const DrawerContext = createContext(initialvalue);

const useStyles = makeStyles(theme => ({
  root: {
    //   flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



export default function AdminLayout(props) {
  const classes = useStyles();

  return (
    <>
      <DrawerContext.Provider  value={initialvalue}>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Sidebar item={AdminListItems} />
            </Grid>
            <Grid item xs={12} sm={9}>
              {props.children}
            </Grid>
          </Grid>
        </div>
      </DrawerContext.Provider>
    </>
  )
}
