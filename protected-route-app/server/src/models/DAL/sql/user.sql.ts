import { UserDTO } from '@/models/DTO/user.DTO';

export const selectUserByEmail = (email: string): any => {
  const sql = `
    SELECT * FROM protected_route_app.users WHERE email = $1 AND deleted_at IS NULL
  `;
  const values = [email];
  return { sql, values };
};

export const selectUsers = (): any => {
  const sql = `
    SELECT * FROM protected_route_app.users WHERE deleted_at IS NULL
  `;
  return { sql };
};

export const insertUser = (user: UserDTO): any => {
  const sql = `
    INSERT INTO protected_route_app.users (email, display_name, photo_url, uid)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
  const values = [user.email, user.displayName, user.photoURL || null, user.uid];
  return { sql, values };
};

export const updateUserByEmail = (email: string, user: UserDTO): any => {
  const { displayName, photoURL } = user;
  const sql = `
    UPDATE protected_route_app.users
    SET display_name = $1, photo_url = $2
    WHERE email = $3 AND deleted_at IS NULL
    RETURNING *
  `;
  const values = [displayName, photoURL || null, email];
  return { sql, values };
};

export const deleteUserByEmail = (email: string): any => {
  const sql = `
    UPDATE protected_route_app.users
    SET deleted_at = NOW()
    WHERE email = $1 AND deleted_at IS NULL
    RETURNING *
  `;
  const values = [email];
  return { sql, values };
};
