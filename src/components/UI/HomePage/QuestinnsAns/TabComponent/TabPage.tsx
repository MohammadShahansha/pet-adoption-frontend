"use client";
import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductTab from "./ProductTab";
import ServiceTap from "./ServiceTap";
import CareTab from "./CareTab";
import { useTheme } from "@mui/material/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function TabPage() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{}}>
      <AppBar
        position="static"
        sx={{
          width: { sm: "100%", md: "500px" },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            sx={{
              "&.Mui-selected": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            label="Products"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              "&.Mui-selected": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            label="Services"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              "&.Mui-selected": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            label="Care"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <ProductTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ServiceTap />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CareTab />
      </TabPanel>
    </Box>
  );
}
