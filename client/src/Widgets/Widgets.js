import ChartWidget from "./ChartWidget/ChartWidget";
import OrdersWidget from "./OrdersWidget/OrdersWidget";
import { Box, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import Widget from "./Widget";
import RankingWidget from "./RankingWidget/RankingWidget";

export default function Widgets(props) {
  const notImplementedWidgets = [
    {
      name: "Opinie kupujących",
      href: "#opinions"
    },
    {
      name: "Jakość sprzedaży",
      href: "#quality"
    }
  ];
  return (
    <Grid alignContent="stretch" alignItems="stretch" container spacing={3}>
      <Grid item xs={12}>
        <Widget key="Wykres sprzedaży" name="Wykres sprzedaży" href="#chart">
          <ChartWidget />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget key="Ranking ofert" name="Ranking ofert" href="#ranking">
          <RankingWidget />
        </Widget>
      </Grid>
      <Grid item xs={12} md={6}>
        <Widget name="Opinie kupujących" href="#opinions">
          <Box className="WidgetContentWrapper" />
        </Widget>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Widget name="Jakość sprzedaży" href="#quality">
          <Box className="WidgetContentWrapper" />
        </Widget>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Widget key="Zamówienia" name="Zamówienia" href="#orders">
          <OrdersWidget />
        </Widget>
      </Grid>
    </Grid>
  );
}
