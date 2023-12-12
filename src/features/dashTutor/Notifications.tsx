import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type Notification = {
  id: string;
  usernameStudent: string;
  titleCourse: string;
};

type DashTutorEnrolledCoursesState = {
  loading: boolean;
  displaying: boolean;
  agreed: boolean;
  clickedNotification: Notification | null;
  allNotifications: Notification[];
  filteredNotifications: Notification[];
};

const initialState: DashTutorEnrolledCoursesState = {
  loading: false,
  displaying: false,
  agreed: false,
  clickedNotification: null,
  allNotifications: [
    { id: '1', usernameStudent: 'Hama ', titleCourse: 'React Js' },
    { id: '2', usernameStudent: 'taha ', titleCourse: 'React Js' },
    { id: '2', usernameStudent: 'taha ', titleCourse: 'React Js' },
    { id: '2', usernameStudent: 'taha ', titleCourse: 'React Js' },
    { id: '2', usernameStudent: 'taha ', titleCourse: 'React Js' },
    { id: '3', usernameStudent: 'younes', titleCourse: 'React Js' },
    { id: '3', usernameStudent: 'younes', titleCourse: 'React Js' },
    { id: '3', usernameStudent: 'younes', titleCourse: 'React Js' },
    { id: '3', usernameStudent: 'younes', titleCourse: 'React Js' },
    { id: '3', usernameStudent: 'younes', titleCourse: 'React Js' },
    { id: '4', usernameStudent: 'nassim', titleCourse: 'React Js' },
    { id: '4', usernameStudent: 'nassim', titleCourse: 'React Js' },
    { id: '4', usernameStudent: 'nassim', titleCourse: 'React Js' },
    { id: '4', usernameStudent: 'nassim', titleCourse: 'React Js' },
    { id: '4', usernameStudent: 'nassim', titleCourse: 'React Js' },
  ],
  filteredNotifications: [
   
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

export const getAllNotifications = createAsyncThunk(
  'enrolled_courses/getAllCourses',
  async () => {
    // Simulate an asynchronous API call
    const response = await fetch(`your_api_endpoint/allCourses`);
    const data = await response.json();
    return data;
  }
);

export const acceptNotifications = createAsyncThunk(
  'enrolled_courses/acceptNotifications',
  async () => {
    // Simulate an asynchronous API call
    const response = await fetch(`your_api_endpoint/acceptNotifications`);
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
   showClickedNotification(state, action: PayloadAction<string>) {
    const selectedNotification = state.allNotifications.filter((course) => course.id === action.payload);
    if (selectedNotification.length > 0) {
        state.filteredNotifications = selectedNotification;
    }
    },
    },
  extraReducers(builder) {
    builder.addCase(getAllNotifications.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllNotifications.fulfilled, (state, action) => {
      state.loading = false;
      state.allNotifications = action.payload;
    });
    builder.addCase(getAllNotifications.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(acceptNotifications.pending, (state) => {
      // Handle pending state for acceptNotifications if needed
    });
    builder.addCase(acceptNotifications.fulfilled, (state) => {
      // Handle fulfilled state for acceptNotifications if needed
    });
    builder.addCase(acceptNotifications.rejected, (state) => {
      // Handle rejected state for acceptNotifications if needed
    });
  },
});

export const { display, loading, agreed, showClickedNotification } = enrolledCoursesSlice.actions;
export default enrolledCoursesSlice.reducer;
