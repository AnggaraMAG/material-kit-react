/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PropTypes from "prop-types";
// Author page sections
import Posts from "pages/LandingPages/Author/sections/Posts";

// Routes
import routes from "routes";

// Images
import { AppBar, Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import bgImage from "assets/images/city-profile.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import React, { useState } from "react";
import Footer from "./sections/Footer";
import Article from "./sections/Article";
import MKTypography from "components/MKTypography";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
function Author() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [activeTab, setActiveTab] = useState(0);

  const handleTabType = (event, newValue) => setActiveTab(newValue);
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox bgColor="white">
        <MKBox
          minHeight="20rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Container>
            <Grid
              container
              item
              xs={12}
              lg={12}
              flexDirection="column"
              alignItems="center"
              sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
            >
              <MKTypography variant="h2" fontWeight="bold">
                Lorem Ipsum is simply dummy text
              </MKTypography>
              <MKTypography variant="body1" color="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem has
                has been the industry's standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </MKTypography>
            </Grid>
          </Container>
          <Container>
            <Grid container item justifyContent="center" xs={12} lg={8} mx="auto">
              <AppBar position="static">
                <Tabs value={activeTab} onChange={handleTabType}>
                  <Tab label="Provider Dashboard" />
                  <Tab label="Mobile Input Tool" />
                  <Tab label="Web-based Input Tools" />
                </Tabs>
              </AppBar>
            </Grid>
          </Container>

          <TabPanel value={activeTab} index={0}>
            <Article />
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
            <Article />
          </TabPanel>
          <TabPanel value={activeTab} index={2}>
            <Article />
          </TabPanel>
          {/* <Profile /> */}
          {/* <Posts /> */}
        </Card>
        {/* <Contact /> */}
        {/* <Footer /> */}
      </MKBox>
    </>
  );
}

export default Author;
