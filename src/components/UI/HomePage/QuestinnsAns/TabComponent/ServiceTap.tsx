import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import { Box } from "@mui/material";

export default function ServiceTap() {
  const questionAnsArray = [
    {
      question: "Can I track my in-home delivery order?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vel?Lorem ipsum dolor, sit amet consectetur.",
    },
    {
      question: "How can I check to make Sure an item is in stock?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vel?Lorem ipsum dolor, sit amet consectetur.",
    },
    {
      question: "Do you offer delevery services?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vel?Lorem ipsum dolor, sit amet consectetur.",
    },
    {
      question: "Do you offer replacement?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vel?Lorem ipsum dolor, sit amet consectetur.",
    },
  ];
  return (
    <Box>
      {questionAnsArray.map((item, index) => {
        return (
          <Accordion
            key={index}
            sx={{
              border: "none",
              boxShadow: "none",
              width: "100%",
            }}
          >
            <AccordionSummary
              expandIcon={<SouthEastIcon />}
              sx={{ backgroundColor: "rgba(1,201,214,0.1)" }}
            >
              <Typography
                fontWeight={300}
                sx={{
                  color: "black",
                  fontSize: { xs: "20px", md: "27px" },
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "rgba(1,201,214,0.1)" }}>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
