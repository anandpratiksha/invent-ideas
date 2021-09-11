import React from 'react';
import Form1 from '../accordian1/Form1.js';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Form2 from '../accordian2/Form2.js';
import Form3 from '../accordian3/Form3.js';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        position: 'relative',
        left: '10%',
        marginTop: '1%',
        overflowX: 'hidden',
        overflowY: 'hidden',
    },
    heading: {
        fontSize: '1.5rem',
        fontWeight: '600',
    },
    container: {
        backgroundColor: '#bb8bbb',
    },
    innerContainer: {
        backgroundColor: '#f8ecf8'
    },
    innovatorIdeaFormTitle: {
        marginBottom: '10px',
        position: 'relative',
        left: '42%',
    }
}));

function InnovatorForm(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2 className={classes.innovatorIdeaFormTitle}>Explain your idea</h2>
            <Accordion className={classes.container}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>1. My Idea</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.innerContainer}>
                    {/* <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography> */}
                    <div className="accordianContainer">
                        <Form1 />
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.container}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>2. Upload Attachments</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.innerContainer}>
                    <div className="accordianContainer">
                        <Form2 />
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.container}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>3. Intellectual Property</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.innerContainer}>
                    <div className="accordianContainer">
                        <Form3 />
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>

    );
}

export default InnovatorForm;
