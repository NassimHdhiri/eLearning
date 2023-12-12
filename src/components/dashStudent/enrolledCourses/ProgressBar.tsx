
import { Progress } from 'flowbite-react';

interface ProgressBarProps {
  percentage: number;
}

function ProgressBar(props:ProgressBarProps) {
  
  return (
    <Progress
      progress={props.percentage}
      progressLabelPosition="inside"
      textLabelPosition="outside"
      size="lg"
      labelProgress
      color='gray'
      style={{ color: 'red' }}   
      />
  );
}
export default ProgressBar;