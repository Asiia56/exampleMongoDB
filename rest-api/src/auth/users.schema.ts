import * as mongoose from 'mongoose';


export const Usersschema = new mongoose.Schema({
  email: String,
  roles: Array,
  passwordHash: String
});
