import AsideBar from '../../components/dashTutor/AsideBar';
import NavBar from '../../components/Dash/navbar/Index';
import ListOfAssignments from '../../components/dashTutor/Assignment/ListOfAssignments';
import ConfirmDialogeLogout from '../../components/dashStudent/index.tsx/ConfirmDialogeLogout';
import AssignmentDetails from '../../components/dashTutor/Assignment/AssignmentDetails';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

// type Props = {} props: Props

const Assignments = () => {
  const { displaying } = useSelector((state: RootState) => state.dashStudentIndex);

  return (
    <>
      {displaying && <ConfirmDialogeLogout/>}
      <div className='m-auto ml-5 overflow-x-hidden overflow-y-hidden flex-row w-full h-screen grid grid-cols-12 justify-between'>
          <div className='w-[270px]  -ml-2  font-bold col-span-2'>
            <AsideBar/>
          </div>
          {/* main */}
          <div className=' flex-row ml-5 col-span-10'>
            {/* NAVBAR */}
            <NavBar type={"Tutor"}/>
            <div className="  grid grid-cols-12 h-screen ">
                <div className=' col-span-5 items-start   ' >
                    {/* <HomeworkState/> */}
                    <ListOfAssignments/>
                </div>
                <div className=' '>
                    <AssignmentDetails/>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Assignments