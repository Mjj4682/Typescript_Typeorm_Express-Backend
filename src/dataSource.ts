import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Weather } from "./entities/Weather";
import { Post } from "./entities/Post";
import dotenv from "dotenv";
dotenv.config();

const database = new DataSource({
  type: "mysql",
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT as unknown as number,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [User, Weather, Post],
  logging: false,
});

export default database;