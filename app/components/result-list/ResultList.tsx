import { Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MyMenuAccordion } from "../mymenu-accordion";
import MyMenuAccordionDetails from "../mymenu-accordion-details/MyMenuAccordionDetails";
import { MyMenuAccordionSummary } from "../mymenu-accordion-summary";

interface ResultListProps {
  content: string;
}

export const ResultList = ({ content }: ResultListProps) => {
  const regex = /```json([\s\S]*?)```/;
  const match = content.match(regex);
  const menuData = JSON.parse(match[1].trim());

  return ( 
    <Stack maxHeight={"50vh"} overflow={"hidden"} sx={{ overflowY: "scroll", scrollbarWidth: 0 }}>
      {
        menuData.recipes.map((data) => {
          return (
            <MyMenuAccordion>
              <MyMenuAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{data.name}</Typography>
              </MyMenuAccordionSummary>
              <MyMenuAccordionDetails>
                <Typography>
                  {data.ingredients}
                </Typography>
              </MyMenuAccordionDetails>
            </MyMenuAccordion>
          )
        })
      }
    </Stack>
  );
}

export default ResultList;
