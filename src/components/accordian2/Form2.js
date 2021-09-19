import React, { useState } from 'react';
import './Form2.css';
import {
    makeStyles,
    withStyles,
    alpha
} from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { innovatorForm2 } from '../../redux/actions/innovatorFormActions';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '15px'
    },
    imageList: {
        width: 1100,
        height: 165,
        borderRadius: '15px'
    },
}));

const BootstrapInput = withStyles((theme) => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(4),

        }
    },
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: '#f8ecf8',
        // border: "1px solid #ced4da",
        fontSize: 22,
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

function Form2() {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [images, setImages] = useState([]);
    // console.log(images)
    const handleImage = async (value) => {


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
                // console.log('cloudinary', data.secure_url);
                const picture = {
                    img: data.secure_url
                }

                setImages([...images, picture]);
            })

            .catch((err) => alert('Image upload not successful, try again.'));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(images)
        dispatch(innovatorForm2);
    };


    return (
        <div >
            <div className={classes.root}>
                <ImageList rowHeight={160} className={classes.imageList} cols={3}>
                    {images && images.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1}>
                            <img src={item.img} alt={item.img} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
            <div>
                <FormControl className={classes.margin}>
                    <InputLabel shrink htmlFor="bootstrap-input" className='fileInputLabel'>
                        Select images
                    </InputLabel>
                    <BootstrapInput id="bootstrap-input"
                        value=''
                        onChange={(e) => handleImage(e.target.files[0])}
                        type="file"
                    />
                </FormControl>
            </div>
            <Button variant="contained" className='formButton imageFormButton' onClick={(e) => handleSubmit(e)}>Save and Continue</Button>
        </div>

    );
}

export default Form2;