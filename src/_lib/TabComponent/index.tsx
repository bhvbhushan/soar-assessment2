import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { tabStrucureInterface } from '_interfaces';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const BasicTabs: React.FC<{ tabData: tabStrucureInterface[] }> = ({
  tabData,
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabData.map((tab, idx) => {
            return (
              <Tab
                label={tab.label}
                {...a11yProps(idx)}
                key={idx}
                disabled={!tab.active}
              />
            );
          })}
        </Tabs>
      </Box>
      {tabData.map((tab, idx) => {
        return (
          <CustomTabPanel value={value} index={idx} key={idx}>
            {tab.content}
          </CustomTabPanel>
        );
      })}
    </Box>
  );
};

export default BasicTabs;
