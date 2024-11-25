import getClient, { query, readOnlyQuery } from '../../configs/db';
import { UserDTO } from '../DTO/user.DTO';
import * as userSql from './sql/user.sql';

export const getUsers = async (): Promise<any> => {
  try {
    const { rows } = await readOnlyQuery(userSql.selectUsers());
    return rows;
  } catch (error) {
    return { error: 'Unknown error' };
  }
};

export const getUserByEmail = async (email: string): Promise<any> => {
  try {
    const { rows } = await readOnlyQuery(userSql.selectUserByEmail(email));
    return rows[0] || null;
  } catch (error) {
    return { error: 'Unknown error' };
  }
};

export const insetUser = async (user: UserDTO): Promise<any> => {
  try {
    const { rows } = await query(userSql.insertUser(user));
    return rows[0];
  } catch (error) {
    return { error: 'Unknown error' };
  }
};

export const updateUserByEmail = async (email: string, user: UserDTO): Promise<any> => {
  try {
    const { rows } = await query(userSql.updateUserByEmail(email, user));
    return rows[0];
  } catch (error) {
    return { error: 'Unknown error' };
  }
};

export const deleteUserByEmail = async (email: string): Promise<any> => {
  try {
    const { rows } = await query(userSql.deleteUserByEmail(email));
    return rows[0];
  } catch (error) {
    return { error: 'Unknown error' };
  }
};
