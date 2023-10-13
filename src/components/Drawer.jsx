import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate, useLocation } from "react-router-dom";

export default function TemporaryDrawer({ drawer, setDrawer }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor="left"
          open={drawer}
          onClose={() => {
            setDrawer(false);
          }}
        >
          <Box
            sx={{
              width: 250,
            }}
            role="presentation"
          >
            <List>
              <ListItem
                sx={{ bgcolor: location.pathname == "/" ? "#e4f1ff" : "" }}
                disablePadding
                onClick={() => {
                  navigate("/");
                  setDrawer(false);
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>

              <ListItem
                sx={{
                  bgcolor: location.pathname == "/contact-us" ? "#e4f1ff" : "",
                }}
                disablePadding
                onClick={() => {
                  navigate("/contact-us");
                  setDrawer(false);
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Contact Us" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
