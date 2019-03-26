export interface IProject {
  id: string;
  name: string;
  tasks: string[];
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  assignedUser: string;
}

export interface IUser {
  name: string;
  id: string;
}
