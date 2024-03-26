import FlexBetween from "../../components/FlexBetween";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import Monthly from "../monthly";
import { Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";
import { Box, useTheme, useMediaQuery } from "@mui/material";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Box
          backgroundColor="black"
          color="white"
          width="100%"
          borderRadius=".5rem"
          padding="2rem"
        >
          <Header
            title="Unlock Premium stats"
            subtitle="Get up to 10TB of storage for a limited time"
          />
        </Box>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(8, 1fr)"
        gridAutoRows="160px"
        gap="40px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Revenue"
          increase="+14%"
          description="Since last month"
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Users"
          increase="+21%"
          description="Since last month"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        {/* <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        ></Box> */}
        <StatBox
          title="New SignUps"
          increase="+5%"
          description="Since last month"
          icon={
            <PersonAdd
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Retention"
          increase="+43%"
          description="Since last month"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* ROW 2 */}
      </Box>
      <Box>
        <Monthly />
      </Box>
    </Box>
  );
};

export default Dashboard;
