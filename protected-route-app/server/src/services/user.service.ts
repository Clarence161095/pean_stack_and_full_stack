import getClient from '../configs/db';

export interface UserDTO {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

export async function createUser(user: UserDTO) {
  const { email, displayName, photoURL, uid } = user;
  const client = await getClient();
  try {
    // Check if email exists
    const { rows: existingUsers } = await client.sql`
        SELECT * FROM protected_route_app.users WHERE email = ${email} AND deleted_at IS NULL
      `;

    if (existingUsers.length > 0) {
      return { error: 'Email already exists' };
    }

    const { rows } = await client.sql`
        INSERT INTO protected_route_app.users (email, display_name, photo_url, uid)
        VALUES (${email}, ${displayName}, ${photoURL || null}, ${uid})
        RETURNING *
      `;

    return { data: rows[0] };
  } catch (error) {
    return { error: 'Unknown error' };
  }
}

export async function getUserByEmail(email: string) {
  const client = await getClient();
  try {
    const { rows } = await client.sql`
      SELECT * FROM protected_route_app.users WHERE email = ${email} AND deleted_at IS NULL
    `;

    if (rows.length === 0) {
      return { error: 'User not found' };
    }

    return { data: rows[0] };
  } catch (error) {
    return { error: 'Unknown error' };
  }
}

export async function getUsers() {
  const client = await getClient();
  try {
    const { rows } = await client.sql`
      SELECT * FROM protected_route_app.users WHERE deleted_at IS NULL
    `;
    return { data: rows };
  } catch (error) {
    return { error: 'Unknown error' };
  }
}

export async function updateUserByEmail(email: string, user: UserDTO) {
  const { displayName, photoURL } = user;
  const client = await getClient();
  try {
    const { rows } = await client.sql`
      UPDATE protected_route_app.users
      SET display_name = ${displayName}, photo_url = ${photoURL || null}
      WHERE email = ${email} AND deleted_at IS NULL
      RETURNING *
    `;
    return { data: rows[0] };
  } catch (error) {
    return { error: 'Unknown error' };
  }
}

export async function deleteUserByEmail(email: string) {
  const client = await getClient();
  try {
    const { rows } = await client.sql`
      UPDATE protected_route_app.users
      SET deleted_at = NOW()
      WHERE email = ${email} AND deleted_at IS NULL
      RETURNING *
    `;
    return { data: rows[0] };
  } catch (error) {
    return { error: 'Unknown error' };
  }
}
