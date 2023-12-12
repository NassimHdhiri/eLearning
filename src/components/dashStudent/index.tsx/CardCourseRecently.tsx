import React from 'react'
import CourseImage from '../../../assets/images/MycoursesDesign.svg'
import { Link } from 'react-router-dom'

type Props = {
  title:string,
  lastDate:string,
  percentageOfCompletion:string,
}

const CardCourseRecently = (props:Props) => {
  // const {recentlySeen}=useSelector((state:RootState)=>state.dashStudentIndex)
  return (
    <Link to="/enrolled-courses/id">
            <div className="cards hover:cursor-pointer" >
                <figure className="card rounded-2xl" >
                    {/* img */}
                    <figcaption className="card_title">
                      <div className="w-52 h-32 relative">
                        <img className='absolute left-12' src={CourseImage} alt="" />
                        <h2 className='absolute left-14 top-12 truncate'>{props.title}</h2>
                        <p className=" absolute bottom-6 left-14 text-sm font-light" >{props.lastDate}</p>
                        <p className='absolute -bottom-5  right-0 text-sm font-light '>{props.percentageOfCompletion} %</p>
                      </div>
                    </figcaption>
                </figure>
              </div>
    </Link>

  )
}

export default CardCourseRecently