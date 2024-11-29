import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export const Header = () => {
  return ( 
    <Stack alignItems={"center"} mb={-2}>
        <Typography color="primary.dark" mt={"30px"} mb={"-30px"} variant={"h5"} fontSize={50}>Menuz</Typography>
        <Image 
          src={"/static/CenteredDark.svg"}
          width={200}
          height={120}
          alt="CenteredDark" 
        />
    </Stack>
  );
}

export default Header;
