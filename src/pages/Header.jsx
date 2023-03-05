import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Header = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" sx={{ m: "0 0 5px 0" }}>
        {title}
      </Typography>
      <Typography variant="h6">{subtitle}</Typography>
    </Box>
  );
};

export default Header;
