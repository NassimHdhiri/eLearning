import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const CardDetails: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className='ml-7 w-[630px] border-2 border-slate-300 h-[620px] rounded-[50px] '>
      {children}
    </div>
  );
};

export default CardDetails;