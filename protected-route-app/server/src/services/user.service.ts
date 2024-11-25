import * as userDAL from '../models/DAL/user.DAL';
import { UserDTO } from '../models/DTO/user.DTO';

export async function createUser(user: UserDTO) {
  try {
    const existingUsers = await userDAL.getUserByEmail(user.email);
    if (existingUsers) {
      return { error: 'Email already exists' };
    }
    const result = await userDAL.insetUser(user);
    return { data: result };
  } catch (error) {
    return { error: 'Unknown error' };
  }
}

export async function getUserByEmail(email: string) {
  try {
    const user = await userDAL.getUserByEmail(email);
    if (!user) {
      return { error: 'User not found' };
    }
    return { data: user };
  } catch (error) {
    return { error: 'Unknown error' };
  }
}

export async function getUsers() {
  try {
    const users = await userDAL.getUsers();
    return { data: users };
  } catch (error) {
    return { error: 'Unknown error' };
  }
}

export async function updateUserByEmail(email: string, user: UserDTO) {
  try {
    const userAfterUpdate = await userDAL.updateUserByEmail(email, user);
    return { data: userAfterUpdate };
  } catch (error) {
    return { error: 'Unknown error' };
  }
}

export async function deleteUserByEmail(email: string) {
  try {
    const result = await userDAL.deleteUserByEmail(email);
    return { data: result };
  } catch (error) {
    return { error: 'Unknown error' };
  }
}
