import { styled } from "@mui/material";

import { BDTheme } from "types";

export const CardComponentStyle = styled("div")(({ theme }: any) => {
  const bdTheme = theme as BDTheme;
  return {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    maxWidth: "900px",
    minWidth: "900px",
    margin: "auto",
    textAlign: "center",

    [bdTheme.breakpoints.down("md")]: {
      minWidth: "500px",
    },

    [bdTheme.breakpoints.down("sm")]: {
      minWidth: "150px",
    },

    ".card-header": {
      display: "flex",
      flexDirection: "row",
      padding: "1rem",
      gap: "10px",
      borderBottom: "1px solid black",

      [bdTheme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },

      ".left-section": {
        width: "30%",

        [bdTheme.breakpoints.down("md")]: {
          width: "100%",
        },

        [bdTheme.breakpoints.down("sm")]: {
          width: "100%",
        },
      },

      ".right-section": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "start",
        width: "70%",

        ".title": {
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          gap: "10px",
        },

        [bdTheme.breakpoints.down("md")]: {
          flexDirection: "column",
          width: "100%",
          gap: "10px",
        },

        [bdTheme.breakpoints.down("sm")]: {
          flexDirection: "column",
          width: "100%",
          gap: "10px",
        },
      },
    },

    ".card-body": {
      display: "flex",
      flexDirection: "column",

      ".room": {
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid black",
        padding: "0.3rem 1rem 0.3rem 1rem",

        [bdTheme.breakpoints.down("md")]: {
          flexDirection: "column",
        },

        [bdTheme.breakpoints.down("sm")]: {
          flexDirection: "column",
        },

        ".room-title": {
          display: "flex",
          flexDirection: "column",
          width: "20%",
          justifyContent: "center",
          gap: "5px",
          textAlign: "start",

          [bdTheme.breakpoints.down("md")]: {
            width: "100%",
          },

          [bdTheme.breakpoints.down("sm")]: {
            width: "100%",
          },
        },

        ".room-info": {
          width: "80%",
          textAlign: "start",

          [bdTheme.breakpoints.down("md")]: {
            width: "100%",
          },

          [bdTheme.breakpoints.down("sm")]: {
            width: "100%",
          },
        },
      },
    },

    ".card-footer": {
      width: "100%",
      padding: "1px",
      backgroundColor: bdTheme.colors.iris,
      boxSizing: "border-box",
    },
  };
});
