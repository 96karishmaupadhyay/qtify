import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./Accordion.module.css"

export default function AccordionExpandDefault() {
  return (
    <div className={styles.accordionContainer}>
    <h2 style={{ paddingBottom: "16px" }}>FAQs</h2>
      <Accordion   sx={{ border: "1px solid white", width: "100%" ,overflow:"hidden", borderRadius:"4px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{color: "green" ,fontSize:"2rem"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: "black",
            color: "white",
            borderRadius:"4px"
          }}
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:"white",color:"black"}}>
          <Typography >
          Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{ border: "1px solid white", width: "100%", overflow:"hidden", borderRadius:"4px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "green",fontSize:"2rem"}}/>}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            backgroundColor: "black",
            color: "white",
            borderRadius:"4px"
          }}
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:"white" ,color:"black" }}>
          <Typography>
          Sorry, unfortunately we don't provide the service to download anysongs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}