import MDBox from "components/MDBox";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";
import PropTypes from "prop-types";

function ClothCard({ image, clothName }) {
  return (
    <MDBox>
      <Card>
        <Grid container p={2} spacing={3} alignItems="center" justify="center">
          <Grid item xs={5}>
            <MDBox position="relative" borderRadius="lg">
              <MDBox
                component="img"
                src={image}
                alt={clothName}
                borderRadius="lg"
                shadow="md"
                width="100%"
                height="100%"
                position="relative"
                zIndex={1}
              />
            </MDBox>
          </Grid>
          <Grid item xs={7}>
            <MDBox p={3}>
              <MDTypography
                display="inline"
                variant="h3"
                textTransform="capitalize"
                fontWeight="bold"
              >
                {clothName}
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </Card>
    </MDBox>
  );
}

ClothCard.propTypes = {
  image: PropTypes.string.isRequired,
  clothName: PropTypes.string.isRequired,
};

export default ClothCard;