import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import OfferRankingHead from "./OfferRankingHead";
import { BodyRow, Cell, OfferCell, OfferName } from "./Styles";
function createData(name, imgName, totalSold, moneyCirculation, uniqueViews) {
  return { name, imgName, totalSold, moneyCirculation, uniqueViews };
}
const rows = [
  createData("Xiaomi Mi 11 Lite", "xiaomi-mi-11-lite.jpg", 159, 519, 159),
  createData("Apple iPhone X", "iphone-x.jpg", 237, 155, 129),
  createData("Apple iPhone 7", "iphone-7.jpg", 305, 165, 199),
  createData("Samsung Galaxy S20", "samsung-galaxy-s20.jpg", 262, 2159, 169),
  createData("Huawei P30 Pro", "huawei-p30-pro.jpg", 356, 159, 29)
];
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function RankingWidget() {
  const [order, setOrder] = React.useState("asc");
  const handleSort = () => {
    setOrder(order === "asc" ? "desc" : "asc");
  };
  return (
    <Box className="WidgetContentWrapper" >
      <TableContainer>
        <Table>
          <OfferRankingHead
            order={order}
            onSort={handleSort}
          />
          <TableBody>
            {rows
              .slice()
              .sort(getComparator(order, "totalSold"))
              .map((row) => {
                return (
                  <BodyRow key={row.name}>
                    <OfferCell sx={{ flex: "2" }} >
                      <img
                        width="50px"
                        height="50px"
                        alt="item"
                        src={`./images/${row.imgName}`}
                      />
                      <OfferName>
                        {row.name}
                      </OfferName>
                    </OfferCell>
                    <Cell sx={{ flex: "1" }} align="right">{row.totalSold}</Cell>
                    <Cell sx={{ flex: "1" }} align="right">
                      {order === "asc" ? row.uniqueViews : row.moneyCirculation}
                    </Cell>
                  </BodyRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
