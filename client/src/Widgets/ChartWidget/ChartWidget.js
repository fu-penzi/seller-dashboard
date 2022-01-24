import React, { useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Grid } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import SaleChart from "./SaleChart";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../Login/AuthContext";
// to remove
import { getTodayData } from "./ChartData";
import { chartSelect } from "./chartSelect";


export default function ChartWidget(props) {
  const { t } = useTranslation();
  const auth = useContext(AuthContext);
  const [data, setData] = React.useState(getTodayData("mock", "money-circulation", false));
  const [chartSelect, setChartSelect] = React.useState({
    dataType: "money-circulation",
    type: "line",
    timeSpan: "today",
  });
  const [previous, setPrevious] = React.useState(false);
  //this.auth = React.useContext(AuthContext);
  //   componentDidMount() {
  //     this.getData();
  //   }

  //   getData() {
  //     fetch(`"http://localhost:3001"/saledata/${this.context.user}`)
  //     .then(res => {
  //       if (res.ok) {
  //           return res.json()
  //       }
  //     }).then(data => {
  //       this.setState({
  //         data: data
  //       })
  //     });
  //   }

  const onChartSelectChange = (e) => {
    setChartSelect({
      ...chartSelect,
      [e.target.name]: e.target.value,
    })
  }
  const onPreviousPeriodChange = (e) => {
    setPrevious(e.target.checked);
  }
  return (
    <Box className="WidgetContentWrapper">
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <SaleChart data={data} type={chartSelect.type} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              mx: {
                xs: 0,
                lg: "auto"
              },
              maxWidth: "260px"
            }}
          >
            {chartSelect.map((select) => (
              <FormControl key={select.name} className="ChartControl">
                <InputLabel id={select.label}>{t(select.label)}</InputLabel>
                <Select
                  labelId={select.label}
                  name={select.name}
                  value={chartSelect[select.name]}
                  label={select.label}
                  onChange={onChartSelectChange}
                >
                {select.menuItems.map((menuItem)=>(
                  <MenuItem key={menuItem.value} value={menuItem.value}>{t(menuItem.name)}</MenuItem>
                ))}
                </Select>
              </FormControl>
            ))}
            <FormControlLabel
              control={
                <Checkbox
                  checked={previous}
                  onChange={onPreviousPeriodChange}
                />
              }
              label={t("Dane z poprzedniego okresu")}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
