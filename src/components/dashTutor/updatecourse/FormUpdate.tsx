import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
// import { updateCourse } from '../yourReduxSlice'; // Import the correct slice for your tutor enrolled courses
// type Props = {}

const FormUpdate = () => {
  const dispatch = useDispatch();

//   const handleUpdateCourse = (e) => {
//     e.preventDefault();
//     console.log("Update Course");

//     // You need to dispatch an action to update the course in your Redux store
//     dispatch(updateCourse({ /* Updated course data */ }));
//   };

  const { clickedCourse } = useSelector((state: RootState) => state.dashTutorEnrolledCourses);

  return (
    // handleUpdateCourse  onSubmit={}
    <form>
      <div className='-mt-10 h-[560px] overflow-y-auto relative'>
        {/*  Title  */}
        <div className="flex flex-col items-start mb-6">
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={clickedCourse.title}
            placeholder='Enter the title of the course '
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        {/*  Description */}
        <div className='flex flex-col items-start mb-6'>
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description
          </label>
          <textarea
            id="description"
            rows={12}
            value={clickedCourse.description}
            onChange={(e) => console.log(e.target.value)} // Handle change event for description
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your description here..."
          ></textarea>
        </div>

        {/* Upload Files */}
        <div className="flex flex-col items-start mb-6">
          <label htmlFor="multiple_files" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Upload multiple files
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="multiple_files"
            type="file"
            multiple
          />
        </div>
        <button type="submit" className='bg-[#9DACFF] pt-2 text-white w-[60%] h-10 items-center self-center mt-3 rounded-lg text-center '>
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormUpdate;
