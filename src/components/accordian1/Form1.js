import React, { useState } from 'react';
import './Form1.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2.5),
            width: '100%',
        },
    },
    icon: {
        backgroundColor: '#c76fc7'
    }
}));

function Form1() {

    const classes = useStyles();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState(['It']);
    const [description, setDescription] = useState('');
    const [innovative, setInnovative] = useState('');
    const [competitors, setCompetitors] = useState('');
    const [completedAny, setCompletedAny] = useState(['Industrial design']);
    const [possessionAny, setPossessionAny] = useState(["Technical drawing"]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title,
            category,
            description,
            innovative,
            competitors,
            completedAny,
            possessionAny,
        }
        console.log(data)
    }

    const handleToggle = (value) => () => {
        const currentIndex = category.indexOf(value);
        const newcategory = [...category];

        if (currentIndex === -1) {
            newcategory.push(value);
        } else {
            newcategory.splice(currentIndex, 1);
        }

        setCategory(newcategory);
    };

    const handleCompletedAny = (value) => () => {
        const currentIndex = completedAny.indexOf(value);
        const newCompletedAny = [...completedAny];

        if (currentIndex === -1) {
            newCompletedAny.push(value);
        } else {
            newCompletedAny.splice(currentIndex, 1);
        }

        setCompletedAny(newCompletedAny);
    };

    const handlePossessionAny = (value) => () => {
        const currentIndex = possessionAny.indexOf(value);
        const newPossessionAny = [...possessionAny];

        if (currentIndex === -1) {
            newPossessionAny.push(value);
        } else {
            newPossessionAny.splice(currentIndex, 1);
        }

        setPossessionAny(newPossessionAny);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>

            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Title"
                    multiline
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    variant="outlined"
                />
                <div className="dropdownTitle">
                    <p className="dropdownHeading"> Category <ExpandMoreSharpIcon className='categoryIcon' /></p>
                    <div className='dropdownCategory'>
                        <List className='dropdownList'>
                            {["It", "Mechanical", "Aerospace", "Environment", "Others"].map((value) => {
                                const labelId = `checkbox-list-label-${value}`;

                                return (
                                    <ListItem
                                        key={value}
                                        role={undefined}
                                        dense
                                        button
                                        onClick={handleToggle(value)}
                                    >
                                        <ListItemIcon>
                                            <Checkbox
                                                className={classes.icon}
                                                edge="start"
                                                checked={category.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ "aria-labelledby": labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={`${value}`} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </div>
                </div>
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={10}
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                    variant="outlined"
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="What is innovative about your innovation"
                    multiline
                    value={innovative}
                    onChange={(e) => setInnovative(e.target.value)}
                    variant="outlined"
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Competitors"
                    multiline
                    value={competitors}
                    onChange={(e) => setCompetitors(e.target.value)}
                    variant="outlined"
                />
                <div className="dropdownTitle">
                    <p className="dropdownHeading"> Completed any of the following stages <ExpandMoreSharpIcon className='categoryIcon' /></p>
                    <div className='dropdownCategory'>
                        <List className='dropdownList'>
                            {["Industrial design", "Engineering", "Prototyping", "Branding", "Packaging", "Manufacturing",].map((value) => {
                                const labelId = `checkbox-list-label-${value}`;

                                return (
                                    <ListItem
                                        key={value}
                                        role={undefined}
                                        dense
                                        button
                                        onClick={handleCompletedAny(value)}
                                    >
                                        <ListItemIcon>
                                            <Checkbox
                                                className={classes.icon}
                                                edge="start"
                                                checked={completedAny.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ "aria-labelledby": labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={`${value}`} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </div>
                </div>
                <div className="dropdownTitle">
                    <p className="dropdownHeading"> Do you have in possesion any <ExpandMoreSharpIcon className='categoryIcon' /></p>
                    <div className='dropdownCategory'>
                        <List className='dropdownList'>
                            {["Technical drawing", "Prototype", "Factory sample", "Demonstration video",].map((value) => {
                                const labelId = `checkbox-list-label-${value}`;

                                return (
                                    <ListItem
                                        key={value}
                                        role={undefined}
                                        dense
                                        button
                                        onClick={handlePossessionAny(value)}
                                    >
                                        <ListItemIcon>
                                            <Checkbox
                                                className={classes.icon}
                                                edge="start"
                                                checked={possessionAny.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ "aria-labelledby": labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={`${value}`} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </div>
                </div>
            </div>
            <Button variant="contained" className='formButton' type='submit'>Save and Continue</Button>
        </form>
    );
}

export default Form1;