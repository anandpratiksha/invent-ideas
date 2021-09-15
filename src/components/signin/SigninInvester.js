import React, { useState, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { investorSignin } from '../../redux/actions/signinActions';
import Loading from '../loading/Loading';
import { useSnackbar } from 'notistack';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


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



function SigninInvestor(props) {

    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

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

        dispatch(investorSignin(data));
    };

    const userFromReducer = useSelector((state) => state.signinInvestor);

    const { user, userError, loading } = userFromReducer

    const handleSnackbar = (value, variant) => {
        // console.log('from function', value)
        enqueueSnackbar(value, { variant });
    };

    useEffect(() => {
        if (user) {
            handleSnackbar('Signin was successful', 'success')
            props.history.push('/')
        } else if (userError) {
            handleSnackbar('Signin was unsuccessful, please try again', 'error')
        }
    }, [user, userError])


    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div className='formContainer'>
            <Navbar />
            <div className='formBlock'>
                <form className={classes.root} onSubmit={(e) => handleSubmit(e)}>

                    <div className="formTitle" >
                        <u> Investor Signin </u>
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
                    <Link to='/signup-investor'>
                        Signup
                    </Link>
                </p>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default SigninInvestor;