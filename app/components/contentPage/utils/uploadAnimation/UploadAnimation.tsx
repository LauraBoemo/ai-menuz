import { Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export const UploadAnimation = () => {
  const steps = [
    "Uploading the menu's image...",
    "Reading the menu's image...",
    "Translating the menu's content...",
    "Organizing the menu's content...",
    "Adding the condiments for flavour...",
    "This can take a while!",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <Stack direction="column" textAlign={"center"} color={"primary.dark"} gap={1}>
      {steps.slice(0, currentStep + 1).map((step, index) => (
        <Typography variant='body2' key={index}>{step}</Typography>
      ))}
    </Stack>
  );
};

export default UploadAnimation;
