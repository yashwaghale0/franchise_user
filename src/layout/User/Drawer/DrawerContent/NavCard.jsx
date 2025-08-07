// material-ui
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Footer from "../../Footer";
import Crown from "../../../../assets/images/users/crown.svg";

// project import
import MainCard from "components/MainCard";

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

export default function NavCard() {
  return (
    <MainCard className="border-0 upgrade-account-btn">
      <Stack alignItems="center" c>
        <a href="#" className="upgrade-link">
          <Button>
            <img src={Crown} alt="Crown" /> Upgrade Account{" "}
          </Button>
        </a>
      </Stack>
      <Footer />
    </MainCard>
  );
}
