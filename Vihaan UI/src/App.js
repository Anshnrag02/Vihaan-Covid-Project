import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

import useStyles from './styles';
import './navigation.css';
import { Details, Main } from './components';


const App = () => {
  const classes = useStyles();
  // const { speechState } = useSpeechContext();
  const main = useRef(null)
  const { segment } = useSpeechContext();
  //.intent.intent === 'play_cam'
  useEffect(() => {
    if (segment){
      console.log(segment)
      window.location.href = "https://adityateltia.github.io/Mask-Detection-UI/"
    }
  }, segment);

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
        </Grid>
      <a href="https://adityateltia.github.io/Mask-Detection-UI/" id ="mask">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Mask Detection
        </a>
      <a href="https://adityateltia.github.io/Social-Distancing-UI/" id ="social">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Social Distancing Model
      </a>
      <a href="https://adityateltia.github.io/Covid-19-Detector/index.html" id ="covid">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Covid 19 Tracker
      </a>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </Grid>
    </div>
  );
};

export default App;
