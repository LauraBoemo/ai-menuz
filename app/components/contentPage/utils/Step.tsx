import { Box, Stack, Typography } from "@mui/material";

export const Step = ({ number, text, mb = 0 }) => {
  return ( 
    <Box mb={mb} width={"100%"} bgcolor={"primary.dark"} color={"primary.light"} py={"20px"} justifyItems={"center"}>
      <Stack direction={"row"} gap={1} mx={2.5}>
        <Typography variant={"h5"} fontSize={22}>{number}.</Typography>
        <Typography>{text}</Typography>
      </Stack>
    </Box>
  );
}

export default Step;
