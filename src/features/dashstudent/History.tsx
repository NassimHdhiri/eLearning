  import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type Interaction = {
    materialTitle: string;
    dateInteraction: string;
    typeOfInteraction: string;
};

type History = {
    courseId: string;
    courseTitle: string;
    courseTutorName: string;
    percentageOfCompletion: string;
    interactions: Interaction[];
};

interface DashStudentHistoryCoursesState {
    loading: boolean;
    displaying: boolean;
    agreed: boolean;
    histories: History[];
    clickedHistory: History;
}

const initialState: DashStudentHistoryCoursesState = {
    loading: false,
    displaying: false,
    agreed: false,
    clickedHistory: {
        courseId: "0",
        courseTitle: "React xxx",
        courseTutorName: "xxxxxxxxx",
        percentageOfCompletion: '00',
        interactions: [
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "download",
            },
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "download",
            },
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "download",
            }
        ]
    },
    histories:[ 
        { courseId:"1423",courseTitle:"xxxxxxxxx1",courseTutorName: 'course 1' , percentageOfCompletion: '50',interactions:
        [   
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "send",
            },
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "download",
            },
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "click",
            }
        ]
    },
    { courseId:"128",courseTitle:"xxxxxxxxx1",courseTutorName: 'course 1' , materialTitle: '12/08/2023', dateInteraction: '12/08/2023', typeOfInteraction: 'Ahmed Ali', percentageOfCompletion: '50',interactions:
        [   
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "download",
            },
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "download",
            },
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "download",
            }
        ]
    },
    { courseId:"126",courseTitle:"xxxxxxxxx1",courseTutorName: 'course 1' , materialTitle: '12/08/2023', dateInteraction: '12/08/2023', typeOfInteraction: 'Ahmed Ali', percentageOfCompletion: '50',interactions:
        [   
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "download",
            },
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "download",
            },
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "download",
            }
        ]
    },
    { courseId:"123",courseTitle:"xxxxxxxxx1",courseTutorName: 'course 1' , materialTitle: '12/08/2023', dateInteraction: '12/08/2023', typeOfInteraction: 'Ahmed Ali', percentageOfCompletion: '50',interactions:
        [   
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "download",
            },
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "download",
            },
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "download",
            }
        ]
    },
    { courseId:"123",courseTitle:"xxxxxxxxx1",courseTutorName: 'course 1' , materialTitle: '12/08/2023', dateInteraction: '12/08/2023', typeOfInteraction: 'Ahmed Ali', percentageOfCompletion: '50',interactions:
        [   
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "download",
            },
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "download",
            },
            {
                materialTitle: 'course 0',
                dateInteraction: '00/00/0000',
                typeOfInteraction: "download",
            }
        ]
    },
],
};

// Create an asynchronous thunk to fetch all histories
export const getAllHistories = createAsyncThunk(
    'history_courses/getAllHistories',
    async () => {
        // Simulate an asynchronous API call
        const response = await fetch(`your_api_endpoint/allHistories`);
        const data = await response.json();
        return data;
    }
);

const historyCoursesSlice = createSlice({
    name: 'history_courses',
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
        showClickedHistory(state, action: PayloadAction<string>) {
            const selectedHistory = state.histories.find((history) => history.courseId === action.payload);
            if (selectedHistory) {
                state.clickedHistory = selectedHistory;
            }
        },
    },
    extraReducers(builder) {
        builder.addCase(getAllHistories.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllHistories.fulfilled, (state, action) => {
            state.loading = false;
            state.histories = action.payload;
        });
        builder.addCase(getAllHistories.rejected, (state) => {
            state.loading = false;
            // Handle error state if needed
        });
    },
});

export const { display, loading, agreed, showClickedHistory } = historyCoursesSlice.actions;
export default historyCoursesSlice.reducer;
