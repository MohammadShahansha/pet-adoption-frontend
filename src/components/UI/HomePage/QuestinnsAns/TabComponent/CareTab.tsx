import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import { Box } from "@mui/material";

export default function CareTab() {
  const questionAnsArray = [
    {
      question: "Do You Offer Care Guide?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vel?Lorem ipsum dolor, sit amet consectetur.",
    },
    {
      question: "Groomig Tips for My Pet Using Your Product?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vel?Lorem ipsum dolor, sit amet consectetur.",
    },
    {
      question: "How Offend My Pet should Gets it's Vaccination Shot?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vel?Lorem ipsum dolor, sit amet consectetur.",
    },
    {
      question: "Do You Offer Day Care Services?",
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
