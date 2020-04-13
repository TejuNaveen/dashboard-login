import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';

const classes = (theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    }
})

class Register extends Component {
    render(){
        return(
            <div className="common-class">
                <h2>Register</h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth/><br/>
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth/><br/>
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth/>
                </form>
            </div>
        )
    }
}
export default Register;