// material-ui
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        p: "24px 16px 0px",
        mt: "auto",
      }}
    >
      <Typography variant="caption">
        &copy; 2025
        <Link href="#" target="_blank" underline="hover">
          FranchiseListings.com
        </Link>
        All rights reserved{" "}
      </Typography>
      {/* <Stack
        direction="row"
        sx={{ gap: 1.5, alignItems: "center", justifyContent: "space-between" }}
      >
        <Link href="#" target="_blank" variant="caption" color="text.primary">
          Privacy
        </Link>
        <Link href="#" target="_blank" variant="caption" color="text.primary">
          Terms
        </Link>
      </Stack> */}
    </Stack>
  );
}
