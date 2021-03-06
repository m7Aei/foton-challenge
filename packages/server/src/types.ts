import DataLoader from 'dataloader';
import { Types } from 'mongoose';
import { Context } from 'koa';

import { ITask } from './modules/tasks/TaskModel';
import { IUser } from './modules/user/UserModel';

export type DataLoaderKey = Types.ObjectId | string | undefined | null;

export interface GraphQLDataloaders {
  UserLoader: DataLoader<DataLoaderKey, IUser>;
  TaskLoader: DataLoader<DataLoaderKey, ITask>;
}

export interface GraphQLContext {
  dataloaders: GraphQLDataloaders;
  appplatform: string;
  koaContext: Context;
  user?: IUser;
}
