import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { AppBar, Tabs, Tab, Typography, Box, Container } from '@mui/material';
import Album from './Album';

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
        <Box sx={{ p: 5 }}>
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
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: '100%',
        position: 'relative',
        top: 660
      }}
      
    >
      <AppBar position="static">
        <Container maxWidth='xl'>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="product1" {...a11yProps(0)} />
            <Tab label="product2" {...a11yProps(1)} />
            <Tab label="product3" {...a11yProps(2)} />
            <Tab label="product4" {...a11yProps(3)} />
            <Tab label="product5" {...a11yProps(4)} />
          </Tabs>
        </Container>
      </AppBar>
      <Container maxWidth='xl'>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Typography
              variant='h2'
              fontFamily={'gothic_m'}
              sx={{
                width: '100%',
                textAlign: 'center'
              }}
            >
              Product1
            </Typography>
            <Album />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
          <Typography
              variant='h2'
              fontFamily={'gothic_m'}
              sx={{
                width: '100%',
                textAlign: 'center'
              }}
            >
              Product2
            </Typography>
            <Album />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
          <Typography
              variant='h2'
              fontFamily={'gothic_m'}
              sx={{
                width: '100%',
                textAlign: 'center'
              }}
            >
              Product3
            </Typography>
            <Album />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
          <Typography
              variant='h2'
              fontFamily={'gothic_m'}
              sx={{
                width: '100%',
                textAlign: 'center'
              }}
            >
              Product4
            </Typography>
            <Album />
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
          <Typography
              variant='h2'
              fontFamily={'gothic_m'}
              sx={{
                width: '100%',
                textAlign: 'center'
              }}
            >
              Product5
            </Typography>
            <Album />
          </TabPanel>
        </SwipeableViews>
      </Container>
    </Box>
  );
}
