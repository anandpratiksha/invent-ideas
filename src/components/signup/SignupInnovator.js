import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
    ThemeProvider,
    alpha,
    withStyles,
    makeStyles,
    createTheme
} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";
import { purple } from "@material-ui/core/colors";
import Button from '@material-ui/core/Button';
import './Signup.css'
import { useDispatch, useSelector } from 'react-redux';
import { innovatorSignup } from '../../redux/actions/signupActions';
import Loading from '../loading/Loading.js';
import { SnackbarProvider, useSnackbar } from 'notistack';


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

const BootstrapInput = withStyles((theme) => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(2),
        }
    },
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.common.white,
        border: "1px solid #ced4da",
        fontSize: 16,
        width: "auto",
        padding: "10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
        "&:focus": {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main
        }
    }
}))(InputBase);

function SignupInnovator(props) {

    const dispatch = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [picture, setPicture] = useState('');
    const [mobile, setMobile] = useState('+91');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [occupation, setOccupation] = useState('');
    const [document, setDocument] = useState('');

    const userFromReducer = useSelector((state) => state.signupInnovator);

    const handleSnackbar = (value, variant) => {
        // console.log('from function', value)
        enqueueSnackbar(value, { variant });
    };

    const { loading, user, userError } = userFromReducer;
    //  console.log(userError, 'user')

    if (user) {
        props.history.push('/')
    }

    useEffect(() => {
        if (userError) {
            // console.log('user error in else if')
            handleSnackbar('Signup was not successful, Please try again', 'error');
        }
    }, [userError])


    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== rePassword) {
            alert('Password and Re-password does not match');
            return;
        };
        if (mobile.length !== 13) {
            alert('Mobile number should consists of 10 digits');
            return;
        }
        if (pincode.length !== 6) {
            alert('Pincode should consists of 6 digits');
        }
        // console.log('working')
        const data = {
            name: fullname,
            email: email,
            password: password,
            profile_picture: picture,
            mobileno: mobile,
            city: city,
            district: district,
            state: state,
            pincode: pincode,
            occupation: occupation,
            document: document,
            userType: 'innovator'
        }

        dispatch(innovatorSignup(data));
    }

    const avatarPicker = async (value) => {


        const data = new FormData();
        data.append("file", value);
        // console.log(selectedImage);
        data.append("upload_preset", "inventProfile");                             //Cloudinary
        data.append("cloud_name", "lenindallas");                            //Cloudinary
        fetch("	https://api.cloudinary.com/v1_1/lenindallas/image/upload", {
            method: "POST",
            body: data,
        })
            .then((res) => res.json())
            .then(async (data) => {
                //console.log('cloudinary', data.secure_url);
                setPicture(data.secure_url)
            })

            .catch((err) => console.log(err));
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div className='formContainer'>
            <div className='formBlock'>
                <form className={classes.root} onSubmit={(e) => handleSubmit(e)}>
                    <Avatar
                        alt="Remy Sharp"
                        src={picture ? picture : "https://bit.ly/3td6kYa"}
                        className="profileAvatar"
                    />
                    <div className="formTitle" >
                        <u> Innovator Signup </u>
                    </div>

                    <ThemeProvider theme={theme}>
                        <div className='rowedInput'>
                            <TextField
                                className={classes.margin}
                                label="Fullname"
                                variant="outlined"
                                type='text'
                                required
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                            />
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
                            <TextField
                                className={classes.margin}
                                label="Re-type Password"
                                variant="outlined"
                                type='password'
                                required
                                value={rePassword}
                                onChange={(e) => setRePassword(e.target.value)}
                            />
                        </div>
                        <div className='rowedInput'>
                            <TextField
                                className={classes.margin}
                                label="Mobile Number"
                                variant="outlined"
                                type='tel'
                                required
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            />

                            <TextField
                                className={classes.margin}
                                label="Occupation"
                                variant="outlined"
                                type='text'
                                required
                                value={occupation}
                                onChange={(e) => setOccupation(e.target.value)}
                            />
                        </div>
                        <div className='rowedInput'>
                            <TextField
                                className={classes.margin}
                                label="City"
                                variant="outlined"
                                type='text'
                                required
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <TextField
                                className={classes.margin}
                                label="District"
                                variant="outlined"
                                type='text'
                                required
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                            />
                        </div>
                        <div className='rowedInput'>
                            <TextField
                                className={classes.margin}
                                label="State"
                                variant="outlined"
                                type='text'
                                required
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                            <TextField
                                className={classes.margin}
                                label="Pincode"
                                variant="outlined"
                                type='number'
                                required
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                            />
                        </div>
                        <div className='rowedInput'>
                            <FormControl className={classes.margin}>
                                <InputLabel shrink htmlFor="bootstrap-input">
                                    Profile Picture
                                </InputLabel>
                                <BootstrapInput id="bootstrap-input"
                                    value=''
                                    onChange={(e) => avatarPicker(e.target.files[0])}
                                    type="file"
                                />
                            </FormControl>

                            <FormControl className={classes.margin}>
                                <InputLabel shrink htmlFor="bootstrap-input">
                                    Aadhaar Card
                                </InputLabel>
                                <BootstrapInput id="bootstrap-input"
                                    value={document}
                                    onChange={(e) => setDocument(e.target.files[0])}
                                    type="file"
                                />
                            </FormControl>
                        </div>
                    </ThemeProvider>
                    <Button variant="contained" className="btn btn-primary" type='submit'>
                        Submit
                    </Button>

                </form>

                <>
                    <p className="alreadyHave">Already have an account ?
                        <Link to='/signinInnovator'>
                            Signin
                        </Link>
                    </p>
                </>
            </div>

        </div>
    );
}

export default SignupInnovator;