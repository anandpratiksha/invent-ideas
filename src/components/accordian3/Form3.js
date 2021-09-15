import React from 'react';
import './Form3.css';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from '@material-ui/core/Button';

function Form3(props) {
    const [state, setState] = React.useState({
        patent: false,
        pendingPatent: false,
        comeUpWithInvention: false,
        rememberDateOfInvention: false,
        anyoneKnowAboutInvention: false,
        disclosedToPublic: false,
        websiteForInvention: false,
        anyoneElseContributed: false,
        explainedInPublic: false,
    });

    // console.log(state);

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
    };

    return (
        <div>
            <FormGroup column className='ipContainer' onSubmit={(e) => handleSubmit(e)}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={state.patent}
                            onChange={handleChange}
                            name="patent"
                            color="primary"
                        />
                    }
                    label="Patent"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={state.pendingPatent}
                            onChange={handleChange}
                            name="pendingPatent"
                            color="primary"
                        />
                    }
                    label="Pending patent application"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={state.comeUpWithInvention}
                            onChange={handleChange}
                            name="comeUpWithInvention"
                            color="primary"
                        />
                    }
                    label="Did you come up with this invention"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={state.rememberDateOfInvention}
                            onChange={handleChange}
                            name="rememberDateOfInvention"
                            color="primary"
                        />
                    }
                    label="Do you remember date of invention"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={state.anyoneKnowAboutInvention}
                            onChange={handleChange}
                            name="anyoneKnowAboutInvention"
                            color="primary"
                        />
                    }
                    label="Disclosed your invention to anyone"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={state.disclosedToPublic}
                            onChange={handleChange}
                            name="disclosedToPublic"
                            color="primary"
                        />
                    }
                    label="Disclosed your invention in public"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={state.websiteForInvention}
                            onChange={handleChange}
                            name="websiteForInvention"
                            color="primary"
                        />
                    }
                    label="Website for your invention"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={state.anyoneElseContributed}
                            onChange={handleChange}
                            name="anyoneElseContributed"
                            color="primary"
                        />
                    }
                    label="Anyone else contributed in your invention"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={state.explainedInPublic}
                            onChange={handleChange}
                            name="explainedInPublic"
                            color="primary"
                        />
                    }
                    label="Have you explained your invention in public places"
                />

            </FormGroup>
            <Button variant="contained" className='formButton radioButton' onClick={(e) => handleSubmit(e)}>Save and Continue</Button>

        </div>
    );
}

export default Form3;