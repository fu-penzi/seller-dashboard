import ChartWidget from "./ChartWidget/ChartWidget";
import OrdersWidget from "./OrdersWidget/OrdersWidget";
import { Box, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import Widget from "./Widget";

export default function Widgets(props) {
  const { t } = useTranslation();
  const notImplementedWidgets = [
    {
      name: "Opinie kupujących",
      href: "#opinions"
    },
    {
      name: "Jakość sprzedaży",
      href: "#quality"
    },
    {
      name: "Ranking ofert",
      href: "#ranking"
    }
  ];
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Widget key="Wykres sprzedaży" name="Wykres sprzedaży" href="#chart">
          <ChartWidget />
        </Widget>
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Widget key="Zamówienia" name="Zamówienia" href="#orders">
          <OrdersWidget />
        </Widget>
      </Grid>
      {notImplementedWidgets.map((widget, id) => (
        <Grid key={widget["name"]} item xs={12} sm={6} lg={4}>
          <Widget name={widget["name"]} href={widget["href"]}>
            <Box sx={{ minHeight: "340px" }} className="WidgetContentWrapper" />
          </Widget>
        </Grid>
      ))}
    </Grid>
  );
}
