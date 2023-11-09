"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const tmt_f8186_firebase_adminsdk_k2g4z_d4f14aa44c_json_1 = __importDefault(require("./tmt-f8186-firebase-adminsdk-k2g4z-d4f14aa44c.json"));
const firebaseConfig = {
    credential: firebase_admin_1.default.credential.cert(tmt_f8186_firebase_adminsdk_k2g4z_d4f14aa44c_json_1.default)
};
exports.default = firebase_admin_1.default.initializeApp(firebaseConfig);
