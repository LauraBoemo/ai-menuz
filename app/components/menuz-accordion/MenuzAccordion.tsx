'use client'

import { styled } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';

export const MenuzAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.dark}`,
  color: theme.palette.primary.dark,
  ".MuiSvgIcon-root": {
    color: theme.palette.primary.dark,
  },
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

export default MenuzAccordion;