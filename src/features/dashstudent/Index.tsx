// src/features/integer/integerSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Course={
    title:string,
    enrolledDate:string,
    percentageOfCompletion:string,
    lastSeen:string,
    tutorName:string
}

type Homework={
    title:string,
    description:string,
    deadline:string
}

interface DashStudentIndexState {
    loading:boolean,
    displaying:boolean,
    agreed:boolean,
    pseudo:string,
    dateInscription:string,
    recentlySeen:Course[],
    courses:Course[],
    homework:Homework[]
}

const initialState: DashStudentIndexState = {
    loading:false,
    displaying:false,
    agreed:false,
    pseudo:"pseudo",
    dateInscription:"12/08/2023",
    recentlySeen:
                [ 
                    { title: 'course 1', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: '50'},
                    { title: 'course 2', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: '50'},
                    { title: 'course ', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: '50'},
                    { title: 'course 1', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: '50'},
                    { title: 'course 1', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: '50'},
                    { title: 'course 1', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: '50'},
                ],
    courses:[ 
                { title: 'course 1', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: '50'},
                { title: 'sirina 1', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: '50'},
                { title: 'course 1', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: '50'},
                { title: 'course 1', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: '50'},
                { title: 'course 1', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: '50'},
                { title: 'course 1', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: '50'},
                { title: 'course 1', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: '50'},
                { title: 'course 1', enrolledDate: '12/08/2023', lastSeen: '12/08/2023', tutorName: 'Ahmed Ali', percentageOfCompletion: '50'},
            ],
    homework:[ 
                { title: 'homework 1', description: 'wwwwwwwwwwwww', deadline: '12/08/2023'},
                { title: 'homework 1', description: 'wwwwwwwwwwwww', deadline: '12/08/2023'},
                { title: 'homework 1', description: 'wwwwwwwwwwwww', deadline: '12/08/2023'},
            ],
};

const indexSlice = createSlice({
  name: 'integer',
  initialState,
  reducers: {
    display(state,action:PayloadAction<boolean>) {
      state.displaying =action.payload;
    },
    loading(state,action:PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    agreed(state, action: PayloadAction<boolean>) {
      state.agreed = action.payload;
    },
  },
});

export const { display, loading, agreed } = indexSlice.actions;
export default indexSlice.reducer;
