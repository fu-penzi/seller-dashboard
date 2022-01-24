import {
  Alert,
  Link,
  Box,
  Typography,
  Divider
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { styled } from "@mui/system";

const orderTypes = ["Nieopłacone", "Niewysłane", "Zwroty"];
const links = ["unpaid", "unsent", "returns"];

const Orders = styled(Box)({
  margin: "auto",
  maxWidth: "300px"
});
const Order = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline"
});
const OrderType = styled(RouterLink)({
  display: "block",
  color: "inherit",
  textDecoration: "none",
  marginBottom: 12,
  "&:hover": {
    textDecoration: "underline"
  }
});

export default function OrdersWidget(props) {
  const { t } = useTranslation();
  const [alertOpen, setAlertOpen] = React.useState(true);
  const [orders, setOrders] = React.useState({
    Nieopłacone: 1,
    Niewysłane: 4,
    Zwroty: 2,
    Razem: 0
  });
  React.useEffect(() => {
    // async function fetchData() {
    //   return await fetch("https://hn.algolia.com/api/v1/search?query=redux");
    // }
    // var result = fetchData();
    // setOrders(result.orders);
    if (orders.Razem === 0) {
      setAlertOpen(true);
    }
  }, [orders.Razem]);

  return (
    <Box className="OrdersWidget WidgetContentWrapper">
      {alertOpen && (
        <Alert
          severity="info"
          onClose={() => {
            setAlertOpen(false);
          }}
        >
          <Trans i18nKey="OrdersAlert">
            Nie masz żadnych zamówień! Aby zwiększyć widoczność ofert kliknij{" "}
            <Link href="#">tutaj</Link>.
          </Trans>
        </Alert>
      )}
      <Orders sx={{ mt: 2 }}>
        {orderTypes.map((orderType, id) => (
          <Order key={links[id]}>
            <OrderType to={"orders/" + links[id]}>
              <Typography variant="h5" component="span">
                {t(orderType)}
                {":"}
              </Typography>
            </OrderType>
            <Typography variant="h4" component="span">
              {orders[orderType]}
            </Typography>
          </Order>
        ))}
      </Orders>

      <Divider
        sx={{
          width: "80%",
          my: 2,
          mx: "auto"
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <Typography variant="h5" component="span">
          {t("Razem")}
        </Typography>
        <Typography variant="h3" component="span">
          {orders.Razem}
        </Typography>
      </Box>
    </Box>
  );
}
