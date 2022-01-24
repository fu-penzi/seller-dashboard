import React, { useContext } from "react";
import { styled } from "@mui/system";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../Login/AuthContext";
import { apiUrl } from "../config";

const WidgetName = styled("a")({
  display: "block",
  color: "inherit",
  textDecoration: "none",
  marginBottom: "0.5rem",
  "&:hover": {
    textDecoration: "underline"
  }
});
const StyledBox = (props) => (
  <Box
    sx={{
      p: {
        xs: 4,
        md: 5,
        xl: 6
      },
      minHeight: "275px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: 2,
      backgroundColor: "background.default",
      borderRadius: 3,
    }}
  >
    {props.children}
  </Box>
);
export default function Widget(props) {
  const { t } = useTranslation();
  const auth = useContext(AuthContext);
  const [loading, setLoading] = React.useState(props.load ? true : false);
  const [data, setData] = React.useState();
  React.useEffect(() => {
    if (props.load) {
      fetch(`${apiUrl}/${props.load}/${auth.user}`)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        }).then(data => {
          setData(data);
          setLoading(false)
        });
    }
  }, []);
  return (
    <StyledBox>
      {props.name && (
        <div>
          <WidgetName href={props.href} id={props.href.substring(1)}>
            <Typography variant="h5" component="h2">
              {t(props.name)}
            </Typography>
          </WidgetName>
          <Divider />
        </div>
      )}
      {loading
        ? <CircularProgress sx={{ mx: "auto" }} />
        : props.children(data)
      }
      <div />
    </StyledBox>
  );
}
