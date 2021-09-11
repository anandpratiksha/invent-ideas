import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    ThemeProvider,
    makeStyles,
    createTheme
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { purple } from "@material-ui/core/colors";
import Button from '@material-ui/core/Button';
import '../signup/Signup.css';
import { useDispatch } from 'react-redux';
import { innovatorSignin } from '../../redux/actions/signinActions';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: 'column',
        flexWrap: "wrap",
    },
    margin: {
        margin: theme.spacing(2)
    },
}));

const theme = createTheme({
    palette: {
        primary: purple
    }
});



function SigninInnovator(props) {

    const dispatch = useDispatch();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log('working')
        const data = {
            email: email,
            password: password,
        }

        dispatch(innovatorSignin(data));
    }



    return (
        <div className='formContainer'>
            <div className='formBlock'>
                <form className={classes.root} onSubmit={(e) => handleSubmit(e)}>

                    <div className="formTitle" >
                        <u> Innovator Signin </u>
                    </div>

                    <ThemeProvider theme={theme}>
                        <div className='rowedInput'>

                            <TextField
                                className={classes.margin}
                                label="E-mail"
                                variant="outlined"
                                type='email'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='rowedInput'>
                            <TextField
                                className={classes.margin}
                                label="Password"
                                variant="outlined"
                                type='password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                        </div>

                    </ThemeProvider>
                    <Button variant="contained" className="btn btn-primary" type='submit'>
                        Submit
                    </Button>

                </form>
                <p className="alreadyHave">Dont have an account ?
                    <Link to='/signupInnovator'>
                        Signup
                    </Link>
                </p>
            </div>

        </div>
    );
}

export default SigninInnovator;