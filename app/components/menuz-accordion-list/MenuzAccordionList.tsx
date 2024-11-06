import { Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MenuzAccordion } from "../menuz-accordion";
import { MenuzAccordionSummary } from "../menuz-accordion-summary";
import MenuzAccordionDetails from "../menuz-accordion-details/MenuzAccordionDetails";

interface MenuzAccordionListProps {
  content: string;
}

export const MenuzAccordionList = ({ content }: MenuzAccordionListProps) => {
  const regex = /```json([\s\S]*?)```/;
  const match = content.match(regex);
  const menuData = JSON.parse(match[1].trim());

  return ( 
    <Stack maxHeight={"50vh"} overflow={"hidden"} sx={{ overflowY: "scroll", scrollbarWidth: 0 }}>
      {
        menuData.recipes.map((data) => {
          return (
            <MenuzAccordion>
              <MenuzAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{data.name}</Typography>
              </MenuzAccordionSummary>
              <MenuzAccordionDetails>
                <Typography>
                  {data.ingredients}
                </Typography>
              </MenuzAccordionDetails>
            </MenuzAccordion>
          )
        })
      }
    </Stack>
  );
}

export default MenuzAccordionList;
