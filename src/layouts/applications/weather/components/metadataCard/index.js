import MDBox from "components/MDBox";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import MDTypography from "components/MDTypography";
import PropTypes from "prop-types";

function MetadataCard({ precipitationChance, wind, humidity }) {
  const humidityIcon = "device_thermostat";
  const windIcon = "air";
  const precipitationIcon = "water_drop";
  const styles = {
    icon: {
      marginBottom: "-5px",
      marginRight: "10px",
    },
  };
  return (
    <MDBox>
      <Card sx={{ backgroundColor: "dark.main", color: "white" }}>
        <Grid container p={2} spacing={3} alignItems="center" justify="center">
          <Grid item xs={4}>
            <Icon style={styles.icon} color="primary" fontSize="default">
              {precipitationIcon}
            </Icon>
            <MDTypography color="white" display="inline" variant="body1" fontWeight="regular">
              {precipitationChance}
            </MDTypography>
          </Grid>
          <Grid item xs={4}>
            <Icon style={styles.icon} color="primary" fontSize="default">
              {windIcon}
            </Icon>
            <MDTypography color="white" display="inline" variant="body1" fontWeight="regular">
              {wind}
            </MDTypography>
          </Grid>
          <Grid item xs={4}>
            <Icon style={styles.icon} color="primary" fontSize="default">
              {humidityIcon}
            </Icon>
            <MDTypography color="white" display="inline" variant="body1" fontWeight="regular">
              {humidity}
            </MDTypography>
          </Grid>
        </Grid>
      </Card>
    </MDBox>
  );
}
MetadataCard.defaultProps = {
  precipitationChance: "Loading...",
  wind: "Loading...",
  humidity: "Loading...",
};

MetadataCard.propTypes = {
  precipitationChance: PropTypes.string,
  wind: PropTypes.string,
  humidity: PropTypes.string,
};

export default MetadataCard;
