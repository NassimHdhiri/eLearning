import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type Course = {
  id: string;
  title: string;
  description: string;
  enrolledDate: string;
  percentageOfCompletion: number;
  lastSeen: string;
  tutorName: string;
};

type CourseDetails = {
  title: string;
  description: string;
  materials: Video[] | Image[];
};

interface Video {
  type: 'video';
  url: string;
}

interface Image {
  type: 'image';
  url: string;
}

interface DashTutorEnrolledCoursesState {
  loading: boolean;
  displaying: boolean;
  agreed: boolean;
  pseudo: string;
  courses: Course[];
  clickedCourse: Course;
  courseDetails: CourseDetails[];
}

const initialState: DashTutorEnrolledCoursesState = {
  loading: false,
  displaying: false,
  agreed: false,
  clickedCourse: {
    id: "0",
    description: "xxxxxxxxx",
    title: 'course 0',
    enrolledDate: '00/00/0000',
    lastSeen: '00/00/0000',
    tutorName: 'Ahmed 000',
    percentageOfCompletion: 0,
  },
  pseudo: "pseudo",
  courses: [
    { id: "123", description: "xxxxxxxxx1 tutor ", title: 'course TUTOR 1', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: 50 },
    { id: "124", description: "xxxxxxx2xx tutor ", title: 'course TUTOR 2', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: 50 },
    { id: "125", description: "xxxxxxxx3x tutor ", title: 'course TUTOR 3', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: 50 },
    { id: "126", description: "xxxxxxxxx4 tutor ", title: 'course TUTOR 4', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: 50 },
    { id: "127", description: "xxxxx5xxxx tutor ", title: 'course TUTOR 5', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: 50 },
    { id: "128", description: "xxxxxx6xxx tutor ", title: 'course TUTOR 6', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: 50 },
    { id: "129", description: "xxxxxxx7xx tutor ", title: 'course TUTOR 7', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: 50 },
    { id: "130", description: "xxxxxxxx8x tutor ", title: 'course TUTOR 7', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: 50 },
  ],
  courseDetails: [
    { title: "Course x", description: "Course xxxxxxxxx", materials: [] },
    // Default value for courseDetails
  ],
};

// Create an asynchronous thunk to fetch course details by ID
export const getCourseDetailsPerId = createAsyncThunk(
  'enrolled_courses/getCourseDetailsPerId',
  async (courseId: string) => {
    // Simulate an asynchronous API call
    const response = await fetch(`your_api_endpoint/${courseId}`);
    const data = await response.json();
    return data;
  }
);

export const getAllCourses = createAsyncThunk(
  'enrolled_courses/getAllCourses',
  async () => {
    // Simulate an asynchronous API call
    const response = await fetch(`your_api_endpoint/allCourses`);
    const data = await response.json();
    return data;
  }
);

const enrolledCoursesSlice = createSlice({
  name: 'enrolled_courses',
  initialState,
  reducers: {
    display(state, action: PayloadAction<boolean>) {
      state.displaying = action.payload;
    },
    loading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    agreed(state, action: PayloadAction<boolean>) {
      state.agreed = action.payload;
    },
    showClickedCourse(state, action: PayloadAction<string>) {
      const selectedCourse = state.courses.find((course) => course.id === action.payload);
      if (selectedCourse) {
        state.clickedCourse = selectedCourse;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(getCourseDetailsPerId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCourseDetailsPerId.fulfilled, (state, action) => {
      state.loading = false;
      state.courseDetails = action.payload;
    });
    builder.addCase(getCourseDetailsPerId.rejected, (state) => {
      state.loading = false;
      // Handle error state if needed
    });
    builder.addCase(getAllCourses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    });
    builder.addCase(getAllCourses.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { display, loading, agreed, showClickedCourse } = enrolledCoursesSlice.actions;
export default enrolledCoursesSlice.reducer;
