import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { withTranslation } from "react-i18next";
import { Box, Grid } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import SaleChart from "./SaleChart";

import { AuthContext } from "../../Login/AuthContext";

// to remove
import {getTodayData} from "./ChartData";

export class ChartWidget extends React.Component {

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      data: getTodayData("mock", "money-circulation", false),
      dataType: "money-circulation",
      type: "line",
      timeSpan: "today",
      previous: false
    };
    //this.auth = React.useContext(AuthContext);
    this.onDataTypeChange = this.onDataTypeChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onTimeSpanChange = this.onTimeSpanChange.bind(this);
    this.onPreviousPeriodChange = this.onPreviousPeriodChange.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch(`http://localhost:3001/saledata/${this.context.user}/${this.state.timeSpan}/${this.state.previous}`)
    .then(res => {
      if (res.ok) {
          return res.json()
      }
    }).then(data => {
      this.setState({
        data: data
      })
    });
  }

  async onDataTypeChange(event) {
    let type = event.target.value;
    await this.setState({ dataType: type });
    this.getData();
  }

  onTypeChange(event) {
    let type = event.target.value;
    this.setState({ type: type });
  }

  async onTimeSpanChange(event) {
    let timeSpan = event.target.value;
    await this.setState({ timeSpan: timeSpan });
    this.getData();
  }

  async onPreviousPeriodChange(event) {
    let isPrevious = event.target.checked;
    await this.setState({ previous: isPrevious });
    this.getData();
  }

  render() {
    const { t } = this.props;
    return (
      <Box className="WidgetContentWrapper">
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <SaleChart data={this.state.data} type={this.state.type} />
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
              <FormControl className="ChartControl">
                <InputLabel id="data-type">{t("Typ danych")}</InputLabel>
                <Select
                  labelId="data-type"
                  id="data-type-select"
                  defaultValue="money-circulation"
                  value={this.state.dataType}
                  label="Typ danych"
                  onChange={this.onDataTypeChange}
                >
                  <MenuItem value="money-circulation">{t("Obrót")}</MenuItem>
                  <MenuItem value="sold-items">
                    {t("Liczba sprzedanych sztuk")}
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl className="ChartControl">
                <InputLabel id="chart-type">{t("Typ wykresu")}</InputLabel>
                <Select
                  labelId="chart-type"
                  id="chart-type-select"
                  defaultValue="bar"
                  value={this.state.type}
                  label="Typ wykresu"
                  onChange={this.onTypeChange}
                >
                  <MenuItem value="bar">{t("Słupkowy")}</MenuItem>
                  <MenuItem value="line">{t("Liniowy")}</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ mb: 0 }} className="ChartControl">
                <InputLabel id="time-span">{t("Zakres czasu")}</InputLabel>
                <Select
                  labelId="time-span"
                  id="time-span-select"
                  value={this.state.timeSpan}
                  label="Zakres czasu"
                  onChange={this.onTimeSpanChange}
                >
                  <MenuItem value="today">{t("Dzisiaj")}</MenuItem>
                  <MenuItem value="current-week">
                    {t("Obecny tydzień")}
                  </MenuItem>
                  <MenuItem value="next-week">{t("Następny tydzień")}</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.previous}
                    onChange={this.onPreviousPeriodChange}
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
}
export default withTranslation()(ChartWidget);
