import React from 'react';
import { Box } from '@chakra-ui/react'; // Make sure to import Box
import {
  Step,
  StepDescription,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react';

const steps = [
  { title: 'First', description: 'Contact Info' },
  { title: 'Second', description: 'Date & Time' },
  { title: 'Third', description: 'Select Rooms' },
  { title: 'Third', description: 'Select Rooms' },
  { title: 'Third', description: 'Select Rooms' },
  { title: 'Third', description: 'Select Rooms' },

];

const MyStepper = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <div className='w-56 '>
<Stepper index={activeStep} orientation="vertical" height="400px" gap="0">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepNumber />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
    </div>
    
  );
};

export default MyStepper;
