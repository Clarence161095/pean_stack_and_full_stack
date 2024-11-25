import { UserDTO } from '@/models/DTO/user.DTO';
import * as userService from '../services/user.service';

export const getAllUsers = async (req: any, res: any) => {
  try {
    const result = await userService.getUsers();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getUser = async (req: any, res: any) => {
  try {
    const { email } = req.params;
    const result = await userService.getUserByEmail(email);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const createUser = async (req: any, res: any) => {
  try {
    const data = req.body;
    const user = {
      uid: data.uid,
      email: data.email,
      displayName: data.display_name,
      photoURL: data.photo_url,
    } as UserDTO;
    const result = await userService.createUser(user);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateUser = async (req: any, res: any) => {
  try {
    const { email } = req.params;
    const data = req.body;
    const user = {
      displayName: data.display_name,
      photoURL: data.photo_url,
    } as UserDTO;
    const result = await userService.updateUserByEmail(email, user);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteUser = async (req: any, res: any) => {
  try {
    const { email } = req.params;
    const result = await userService.deleteUserByEmail(email);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
