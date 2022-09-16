import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NextPage } from "next";
import { SymbolFlagIcon } from "./SymbolFlag";
import { css } from "@emotion/react";

const styles = {
  toolBar: css({
    display: "flex",
  }),
  symbolFlag: css({
    width: "60px",
    height: "60px",
  }),
  title: css({
    marginLeft: "8px",
  }),
};

const Header: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar css={styles.toolBar}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            css={styles.title}
          >
            なやメール
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
