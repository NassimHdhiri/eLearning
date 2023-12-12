import React from 'react'

// type Props = {}

const HomeworkDetails :React.FC= () => {
    return(
        <div className='ml-7 w-[630px] border-2 border-slate-300 h-[620px] rounded-[50px] '>
                <div className="p-7 pl-14 pr-20  h-full flex flex-col gap-y-4">
                <h2 className=" text-2xl font-medium capitalize">title title</h2>
                <h4 className="text-xl font-normal text-start pb-1 pt-2">Description</h4>
                <div className="m-auto -mt-5 w-[520px] overflow-y-auto  h-[400px]">
                    <p className=" text-justify p-4 pl-0 text-base font-light text leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  
                    </p>
                </div>
                <div className="flex justify-between -mb-1">
                    <p className=" font-semibold  text-red-600 ">Deadline : 12/05/2023 </p>
                    <p className=" font-semibold text-red-600 capitalize">note : ?/20</p>
                </div>
                <button type="button" className='-mb-4 bg-[#9DACFF] text-white w-[60%] h-10 items-center self-center mt-3 '>
                    Upload
                </button>
            </div>
        </div>
    )
}

export default HomeworkDetails