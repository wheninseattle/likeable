import { Box, Typography } from "@mui/material";

const MetricInfo = (props) => {
  const { name, value } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderTop: "dashed 1px red",
      }}
    >
      <Typography variant="body1" sx={{ color: "#5E5E5E;" }}>
        {name}
      </Typography>
      <Typography variant="body1" sx={{ color: "#5E5E5E;" }}>
        {value}
      </Typography>
    </Box>
  );
};

export default MetricInfo;
