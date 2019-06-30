import React, { Component } from 'react'
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";


const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 2,
    },
    title: {
        flexGrow: 1,
    },
    btn: {
        backgroundColor: "blue",
        color: "white",
        width: "100px",
        "&:hover": {
            background: "rgba(0, 0, 255, 0.7)",
        }
    },
};

class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    handleChange = () => {

    }
    render() {
        const { values: { firstName, lastName, email }, classes, handleChange, nextStep } = this.props;
        // const classes = useStyles();
        return (
            <div className={classes.root}>
                <AppBar mt={4} position="static" m={2}>
                    <Toolbar>   
                        <IconButton className={classes.menuButton} edge="start">
                            <MenuIcon/>
                        </IconButton>
                        <Typography className={classes.title}>      
                            General User Details
                        </Typography>
                        <Button color="inherit">
                            Login
                        </Button>
                    </Toolbar>
                </AppBar>
                <Grid justify="center" container direction="column" spacing={5}>
                    <Grid item >
                        <TextField
                        label="First Name"
                        type="search"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange('firstName')}
                        defaultValue={firstName}
                        />
                    </Grid>
                    <Grid item >
                        <TextField
                        label="Last Name"
                        type="search"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange('lastName')}
                        defaultValue={lastName}
                        />
                    </Grid>
                    <Grid item >
                        <TextField
                        label="Email"
                        type="search"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange('email')}
                        defaultValue={email}
                        />
                    </Grid>
                    <Grid item>
                        <Button 
                        className={classes.btn}
                        onClick={nextStep}>
                            Continue
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(FormUserDetails);