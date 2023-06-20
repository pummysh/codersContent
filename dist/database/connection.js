"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDatabaseConnection = void 0;
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
function createDatabaseConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, typeorm_1.createConnection)({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'deepaksaini',
            database: 'testing',
            entities: [path_1.default.join(__dirname, '../*/.entity{.ts,.js}')],
            synchronize: true, // Automatically creates database schema based on entity definitions (for development only)
        });
    });
}
exports.createDatabaseConnection = createDatabaseConnection;
// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "deepaksaini",
//   database: "testing",
//   synchronize: true,
//   logging: true,
//   entities: [path.join(__dirname,'../*/.entity{.ts,.js}')],
//   subscribers: [],
//   migrations: [],
// })
