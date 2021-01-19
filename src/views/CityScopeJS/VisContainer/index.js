import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Radar from "./Radar/Radar";
import BarChart from "./BarChart/BarChart";
import AreaCalc from "./AreaCalc/AreaCalc";

function VisContainer(props) {
    const indicatorsData = props.cityIOdata.cityIOdata;
    return (
        <>
            {props.cityIOdata && (
                <List>
                    <ListItem>
                        {/* <AreaCalc
                            cityioData={indicatorsData}
                            drawerWidth={300}
                        /> */}
                    </ListItem>
                    <ListItem>
                        {/* <Radar cityioData={indicatorsData} drawerWidth={300} /> */}
                    </ListItem>
                    <ListItem>
                        {/* <BarChart
                            cityioData={indicatorsData}
                            drawerWidth={300}
                        /> */}
                    </ListItem>
                </List>
            )}
        </>
    );
}

export default VisContainer;
