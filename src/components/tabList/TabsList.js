import React from "react";
import styles from "./tabsList.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Content from "../contentComponent/Content";
//This component is used outsource component.
function TabsList() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabsName = [
    "Python",
    "Drawing",
    "Excel",
    "Javascript",
    "Web Development",
    "AWS Certification",
    "Date Science",
  ];
  const tabs = [];
  for (let i = 0; i < tabsName.length; i++) {
    tabs.push({
      label: tabsName[i],
      id: i + 1,
    });
  }
  return (
    <Box className={styles.box}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {tabs.map((cur) => (
          <Tab
            className={styles.tab}
            label={cur.label}
            value={cur.id.toString()}
            key={cur.id}
          />
        ))}
      </Tabs>
      {tabs.map((cur) => {
        if (cur.id.toString() == value)
          return <Content id={cur.id.toString()}></Content>;
      })}
    </Box>
  );
}

export default TabsList;
