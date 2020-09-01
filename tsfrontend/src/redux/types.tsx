export interface Alert {
  msg: string;
  alertType: string;
  id: string;
}
export interface Profile {
  location: string;
  bio: string;
  education: string;
  experiance: string;
  birthDate: Date;
  image: string;
}

export interface Job {
  id: number;
  location: string[];
  category: string[];
  applicants: string[];
  qualification: string[];
  title: string;
  company: string;
  experiance: number;
  datestamp: Date;
  description: string;
  salaray: number;
}

export interface User {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  jobsApplied: Job[];
  profile: Profile;
}

export interface UserState {
  loadded: boolean;
  loggedIn: boolean;
  user: User;
}

export interface JobState {
  job: Job;
  jobs: Job[];
}

export interface AlertState {
  alerts: Alert[];
}

export enum UserActionTypes {
  SET_USER = "SET_USER",
  LOG_OUT = "LOG_OUT",
  AUTO_LOGIN = "AUTO_LOGIN",
}

export enum AlertActionTypes {
  SET_ALERT = "SET_ALERT",
  REMOVE_ALERT = "REMOVE_ALERT",
}

export enum JobActionTypes {
  FETCH_JOB = "FETCH_JOB",
  FETCH_JOBS = "FETCH_JOBS",
}

export interface BaseUserAction {
  type: UserActionTypes;
}

export interface BaseAlertAction {
  type: AlertActionTypes;
}

export interface BaseJobAction {
  type: JobActionTypes;
}

export interface LogOutUserAction extends BaseUserAction {
  type: UserActionTypes.LOG_OUT;
}

export interface SetUserAction extends BaseUserAction {
  type: UserActionTypes.SET_USER;
  payload: User;
}

export interface AutoLoginUserAction extends BaseUserAction {
  type: UserActionTypes.AUTO_LOGIN;
}

export interface SetAlertAction extends BaseAlertAction {
  type: AlertActionTypes.SET_ALERT;
  payload: Alert;
}

export interface RemoveAlertAction extends BaseAlertAction {
  type: AlertActionTypes.REMOVE_ALERT;
  payload: Alert["id"];
}

export interface FetchJobAction extends BaseJobAction {
  type: JobActionTypes.FETCH_JOB;
  payload: Job;
}

export interface FetchJobsAction extends BaseJobAction {
  type: JobActionTypes.FETCH_JOBS;
  payload: Job[];
}

export type UserActions =
  | SetUserAction
  | LogOutUserAction
  | AutoLoginUserAction;
export type AlertActions = SetAlertAction | RemoveAlertAction;
export type JobActions = FetchJobAction | FetchJobsAction;
