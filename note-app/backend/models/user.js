import { Schema, model } from 'mongoose';

// const Sample_Info_From_SSO = {
//   name: 'Nguyễn Anh Tuấn',
//   picture:
//     'https://lh3.googleusercontent.com/a/ACg8ocJ9tvDSWzAL4KftaSLKcAmI7OLHrGVdipO6XCB3SsQSuKA=s96-c',
//   iss: 'https://securetoken.google.com/linhbinhchilinhtinh',
//   aud: 'linhbinhchilinhtinh',
//   auth_time: 1707317269,
//   user_id: 'IFBzYwBZO2Zk7z6Eutm92TVAGBi1',
//   sub: 'IFBzYwBZO2Zk7z6Eutm92TVAGBi1',
//   iat: 1707317269,
//   exp: 1707320869,
//   email: 'nguyenanhtuan161095@gmail.com',
//   email_verified: true,
//   firebase: {
//     identities: {
//       'google.com': ['100646593111971680885'],
//       email: ['nguyenanhtuan161095@gmail.com'],
//     },
//     sign_in_provider: 'google.com',
//   },
// };

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  displayName: String,
  avatar: String,
  type: {
    type: String,
    require: true,
  },
});

const User = model('User', userSchema);
export default User;
