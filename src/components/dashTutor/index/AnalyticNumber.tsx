import React from 'react'
import CourseImage from '../../../assets/images/MycoursesDesign.svg'

type Props = {
    title:string,
    numberOfCourse:string,
}

const AnalyticNumber = (props: Props) => {
  return (
    <div className="cards hover:cursor-pointer" >
            <figure className="card rounded-2xl" >
                    {/* img */}
                <figcaption className="card_title">
                    <div className="w-52 h-32 relative">
                        <img className='absolute left-12' src={CourseImage} alt="" />
                        <h2 className='absolute left-14 text-sm top-12 truncate'>{props.title}</h2>
                        <p className='absolute bottom-7  left-14 text-sm font-light '>{props.numberOfCourse} </p>
                    </div>
                </figcaption>
            </figure>
    </div>
)
}

export default AnalyticNumber