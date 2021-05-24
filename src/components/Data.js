import React from "react";
import { ListItem, ListItemText, Button, Typography } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { deleteTodo } from "../firebase/database";

export default function Data({ data, date, id }) {
  return (
    <div
      className="data_body"
      style={{
        marginBottom: "2px",
        display: "flex",
        borderBottom: "2px solid beige",
        boxShadow: "1px 1px 1px beige",
      }}
    >
      <ListItem>
        <ListItemText
          primary={data + " kg"}
          secondary={
            <>
              <Typography component="span" style={{ color: "grey" }}>
                {new Date(date).getHours() +
                  ":" +
                  new Date(date).getMinutes() +
                  ":" +
                  new Date(date).getSeconds() +
                  "        "}
              </Typography>
              <Typography
                style={{ marginLeft: "30px", color: "grey" }}
                component="span"
              >
                {new Date(date).getMonth() +
                  1 +
                  "-" +
                  new Date(date).getDate() +
                  "-" +
                  new Date(date).getFullYear()}
              </Typography>
            </>
          }
        />
      </ListItem>

      <Button onClick={() => deleteTodo(id)}>
        <DeleteForeverIcon color="secondary" />
      </Button>
    </div>
  );
}
