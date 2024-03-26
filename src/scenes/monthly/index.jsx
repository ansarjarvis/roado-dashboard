import { useMemo } from "react";
import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import Header from "../../components/Header";

const Monthly = () => {
  //   const { data } = useGetSalesQuery();

  let data = [
    {
      id: "Instagram",
      color: "hsl(342, 70%, 50%)",
      data: [
        {
          x: "sunday",
          y: 19,
        },
        {
          x: "monday",
          y: 178,
        },
        {
          x: "tuesday",
          y: 266,
        },
        {
          x: "wednesday",
          y: 220,
        },
        {
          x: "thursday",
          y: 223,
        },
        {
          x: "friday",
          y: 283,
        },
        {
          x: "saturday",
          y: 322,
        },
      ],
    },
    {
      id: "facebook",
      color: "hsl(292, 70%, 50%)",
      data: [
        {
          x: "sunday",
          y: 25,
        },
        {
          x: "monday",
          y: 182,
        },
        {
          x: "tuesday",
          y: 46,
        },
        {
          x: "wednesday",
          y: 52,
        },
        {
          x: "thursday",
          y: 269,
        },
        {
          x: "friday",
          y: 170,
        },
        {
          x: "saturday",
          y: 42,
        },
      ],
    },
  ];

  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box m="2.5rem 0" border="2px #edf2f4 solid">
      <Box marginLeft="4rem">
        <h2>Performance</h2>
      </Box>
      <Box height="75vh">
        {data ? (
          <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "days",
              legendOffset: 36,
              legendPosition: "middle",
              truncateTickAt: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "count",
              legendOffset: -40,
              legendPosition: "middle",
              truncateTickAt: 0,
            }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        ) : (
          <>Loading...</>
        )}
      </Box>
    </Box>
  );
};

export default Monthly;
