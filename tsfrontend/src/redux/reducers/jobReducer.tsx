import { JobState, JobActions } from "redux/types";

const defaultState: JobState = {
  jobs: [],
  job: {
    id: 0,
    location: [],
    category: [],
    applicants: [],
    qualification: [],
    title: "",
    company: "",
    experiance: 0,
    datestamp: new Date(),
    description: "",
    salaray: 0,
  },
  filters: {},
};

const jobReducer = (state = defaultState, action: JobActions): JobState => {
  switch (action.type) {
    case "FETCH_JOBS":
      return {
        ...state,
        jobs: [...action.payload],
      };
    case "FETCH_JOB":
      return {
        ...state,
        job: { ...action.payload },
      };

    case "SET_FILTERS":
      return {
        ...state,
        filters: { ...action.payload },
      };

    default:
      return state;
  }
};

export default jobReducer;
