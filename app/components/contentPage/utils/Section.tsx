import { Stack } from "@mui/material";

export const Section = ({ content }) => {
  return ( 
    <Stack py={2} width={"80%"} alignSelf={"center"}>
      { content }
    </Stack>
  );
}

export default Section;
