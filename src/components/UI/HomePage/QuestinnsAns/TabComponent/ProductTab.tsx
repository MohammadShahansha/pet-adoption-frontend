import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import { Box } from "@mui/material";

export default function ProductTab() {
  const questionAnsArray = [
    {
      question: "Choosing the Right Pet Food?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vel?Lorem ipsum dolor, sit amet consectetur.",
    },
    {
      question: "Whether All Your Foods Vegetarian?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vel?Lorem ipsum dolor, sit amet consectetur.",
    },
    {
      question: "What Types of Toys are Suitable for different breeds",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vel?Lorem ipsum dolor, sit amet consectetur.",
    },
    {
      question: "Recommended Pet Toys?",
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
              sx={{ backgroundColor: "white" }}
            >
              <Typography
                fontWeight={400}
                sx={{
                  color: "black",
                  fontSize: { xs: "20px", md: "27px" },
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "white" }}>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
