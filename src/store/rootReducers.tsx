// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import dashStudentIndexReducer from '../features/dashstudent/IndexStudent';
import dashStudentEnrolledCoursesReducer from '../features/dashstudent/Enrolledcourses';
import dashStudentHistoryReducer from '../features/dashstudent/History';
import dashTutorEnrolledCourseReducer from '../features/dashTutor/EnrolledCoursesTutor';
import dashTutorNotificationsReducer from '../features/dashTutor/Notifications';

const rootReducer = combineReducers({
  dashStudentIndex: dashStudentIndexReducer,
  dashStudentEnrolledCourses:dashStudentEnrolledCoursesReducer,
  dashStudentHistory:dashStudentHistoryReducer,
  dashTutorEnrolledCourses:dashTutorEnrolledCourseReducer,
  dashTutorNotifications:dashTutorNotificationsReducer,
});

export default rootReducer;