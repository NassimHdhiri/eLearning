import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg'; // Assuming 'vite.svg' is in the same directory as the component
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// student
import IndexStudent from './pages/dash_student/Index';
import HomeworkStudent from './pages/dash_student/Homework';
import HistoryStudent from './pages/dash_student/History';
import GradStudent from './pages/dash_student/Grad';
import EnrolledCoursesStudent from './pages/dash_student/EnrolledCourses';
import DetailsCourse from './pages/dash_student/DetailsCourse';

// tutor
import IndexTutor from './pages/dash_tutor/Index'
import AddCourse from './pages/dash_tutor/AddCourse';
import Assignments from './pages/dash_tutor/Assignments';
import MarkAbssent from './pages/dash_tutor/MarkAbssent';
import MyCourses from './pages/dash_tutor/MyCoursesTutor';
import Notifications from './pages/dash_tutor/Notifications';
import UpdateCourse from './pages/dash_tutor/UpdateCourse';
import Meet from './pages/dash_tutor/Meet';

interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  tel: number;
  webSite: string;
  trackingLink: string;
  method: 'paypal' | 'bank_transfer' | 'payonner';
  rate: '5' | '10' | '15';
  commPref: 'email' | 'phone' | 'meet';
  gender: 'male' | 'female';
  location: 'Tunis'| 'Sousse'| 'Ariana'| 'Sfax'| 'Mahdia'| 'Jandouba'| 'Kef'| 'Touzer'| 'Jerjis'| 'Ben_Arous';
  field: 'health' | 'it' | 'marketing' | 'foods' | 'clothes';
  age: number;
  experience: number;
  imagePath: string;
}

const App: React.FC = () => {
  
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<UserData[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
  
        const response = await fetch('http://127.0.0.1:8000/api/profiles/', {
          // Add any necessary headers or configurations here
        });
  
        setLoading(false);
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setLoading(false);
        setError("An error occurred while fetching data");
        console.error('Error fetching data:', error);
        // Handle error state or rethrow the error
      }
    };
  
    const fetchDataWithDelay = () => {
      setTimeout(() => {
        fetchData();
      }, 5000);
    };
  
    fetchDataWithDelay();
  
  }, []);  
  

  return (
    <Router>
    <div className=''>
            <Routes>
                {/* Student's routes */}
              <Route path="/student/id" element={<IndexStudent name='index' />} />
              <Route path="/student/id/homework" element={<HomeworkStudent name='homework' />} />
              <Route path="/student/id/history" element={<HistoryStudent name='history' />} />
              <Route path="/student/id/grade" element={<GradStudent name='grade' />} />
              <Route path="/student/id/enrolled-courses" element={<EnrolledCoursesStudent name={'enrolled courses'} />} />
              <Route path="/student/id/enrolled-courses/courseId" element={<DetailsCourse name={'enrolled courses'} />} />

              {/* Student's routes */}
              <Route path="/tutor/id" element={<IndexTutor name='index_tutor' />} />
              <Route path="/tutor/id/assignment" element={<Assignments name='assignment' />} />
              <Route path="/tutor/id/mycourses/idCourse" element={<MyCourses name='mycourses' />} />
              <Route path="/tutor/id/mycourses" element={<MyCourses name='mycourses' />} />
              <Route path="/tutor/id/mycourses/add-courses" element={<AddCourse name='add-courses' />} />
              <Route path="/tutor/id/mycourses/add-courses/meet" element={<Meet name='add-courses' />} />
              <Route path="/tutor/id/mycourses/update-courses" element={<UpdateCourse name='update-courses' />} />
              <Route path="/tutor/id/mycourses/courseId/mark-absent" element={<MarkAbssent name='mark-absent' />} />
              <Route path="/tutor/id/notifications" element={<Notifications name={'notifications'} />} />
            </Routes>
    </div>
  </Router>
  );
};

export default App;
