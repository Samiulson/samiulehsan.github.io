import React from 'react';

// material-ui
import { Typography } from '@material-ui/core';

// project imports
import MainCard from '../../ui-component/cards/MainCard';


// import React from 'react';
// import ReactDOM from 'react-dom/client';
import {
  AppBar,
  Toolbar,
//   Typography,
  Container,
  Box,
  Avatar,
  Card,
  CardContent,
  Grid,
  Button,
  Link
} from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core';

//==============================|| SAMPLE PAGE ||==============================//

const SamplePage = () => {
    const theme = createTheme({
    palette: {
        primary: {
        main: '#1976d2',
        },
        background: {
        default: '#f4f6f8',
        },
    },
    });

    return (
        <MainCard title="Sample Card">
            <Typography variant="body2">
                Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut
                enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue
                dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president,
                sunk in culpa qui officiate descent molls anim id est labours.
            </Typography>




            <ThemeProvider theme={theme}>
            <AppBar position="static" color="primary">
                <Toolbar>
                <Typography variant="h6">My Portfolio</Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="md" sx={{ mt: 4 }}>
                {/* Hero Section */}
                <Box textAlign="center" mb={4}>
                <Avatar
                    alt="Your Name"
                    src="https://via.placeholder.com/150"
                    sx={{ width: 100, height: 100, margin: 'auto', mb: 2 }}
                />
                <Typography variant="h4">Your Name</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Web Developer | React Enthusiast | UI/UX Designer
                </Typography>
                </Box>

                {/* About Section */}
                <Box mb={4}>
                <Typography variant="h5" gutterBottom>About Me</Typography>
                <Typography>
                    I'm a passionate developer who loves building responsive web apps with React and Material UI.
                    I enjoy learning new technologies and continuously improving my skills.
                </Typography>
                </Box>

                {/* Projects Section */}
                <Box mb={4}>
                <Typography variant="h5" gutterBottom>Projects</Typography>
                <Grid container spacing={2}>
                    {[1, 2, 3].map((project) => (
                    <Grid item xs={12} sm={6} key={project}>
                        <Card>
                        <CardContent>
                            <Typography variant="h6">Project {project}</Typography>
                            <Typography variant="body2">
                            A short description of project {project}. Built with React, Material UI, and more.
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
                </Box>

                {/* Contact Section */}
                <Box textAlign="center" mb={4}>
                <Typography variant="h5" gutterBottom>Contact</Typography>
                <Typography>Email: <Link href="mailto:your.email@example.com">your.email@example.com</Link></Typography>
                <Button
                    variant="contained"
                    color="primary"
                    href="mailto:your.email@example.com"
                    sx={{ mt: 2 }}
                >
                    Get In Touch
                </Button>
                </Box>
            </Container>

            {/* Footer */}
            <Box textAlign="center" py={3} bgcolor="primary.main" color="white">
                <Typography variant="body2">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</Typography>
            </Box>
            </ThemeProvider>



        </MainCard>
        
    );
};

export default SamplePage;
