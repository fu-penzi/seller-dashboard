import { Avatar, Dialog, DialogTitle, List } from "@mui/material";
import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { AuthContext } from "../../Login/AuthContext";
import MenuListItem from "../MenuListItem";
import { useTranslation } from "react-i18next";

export default function AccountSelect(props) {
  const { t } = useTranslation();

  let [users, setUsers] = useState([
    {
      name: "Test"
    }
  ]);
  let auth = useContext(AuthContext);
  return (
    <Dialog onClose={props.onClose} open={props.open}>
      <DialogTitle>{t("Wybierz konto")}</DialogTitle>
      <List sx={{ pt: 0 }} onClick={props.onClose}>
        {users.map((user, id) => (
          <MenuListItem
            key={id}
            avatar={<Avatar alt={user.name} src="" />}
            onClick={() => props.onSelect(user.name)}
            user={{
              name: user.name
            }}
          />
        ))}
        <MenuListItem
          text="Dodaj konto"
          avatar={
            <Avatar>
              <AddIcon />
            </Avatar>
          }
        />
      </List>
    </Dialog>
  );
}
