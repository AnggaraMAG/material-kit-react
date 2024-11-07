import { Container, Grid } from "@mui/material";

import logoSurvey from "assets/images/ID Survey.png";
import logoKemenKoordinasi from "assets/images/Kementrian Koordinasi.png";
import logoKemenPertanian from "assets/images/Kementrian Pertanian.png";

const Clients = () => {
  return (
    <Container>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={4} sm={2}>
          <img
            src={logoKemenKoordinasi}
            alt="id-survey"
            height={100}
            width={100}
            style={{ display: "block", margin: "0 auto" }}
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <img
            src={logoKemenPertanian}
            alt="id-survey"
            height={100}
            width={100}
            style={{ display: "block", margin: "0 auto" }}
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <img
            src={logoSurvey}
            alt="id-survey"
            height={100}
            width={100}
            style={{ display: "block", margin: "0 auto" }}
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <img
            src={logoKemenKoordinasi}
            alt="id-survey"
            height={100}
            width={100}
            style={{ display: "block", margin: "0 auto" }}
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <img
            src={logoKemenPertanian}
            alt="id-survey"
            height={100}
            width={100}
            style={{ display: "block", margin: "0 auto" }}
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <img
            src={logoSurvey}
            alt="id-survey"
            height={100}
            width={100}
            style={{ display: "block", margin: "0 auto" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Clients;
