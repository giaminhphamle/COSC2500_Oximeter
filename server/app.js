import express, { json } from "express";
import pkg from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

// import expressSession from "express-session";

dotenv.config();
// require("./config/database").connect();
const { json: _json } = pkg;
const app = express();
const recordKey = "records";
app.use(json());

app.use(_json());
app.use(cors());
// app.use(
// 	expressSession({
// 		secret: "keyboard cat",
// 	})
// );

const getRecordInStorage = () => {
	return localStorage.getItem(recordKey);
};

const setRecordInStorage = (record) => {
	if (getRecordInStorage() === null) {
		return localStorage.setItem(recordKey, [record]);
	}
	return localStorage.setItem(recordKey, [...getRecordInStorage(), record]);
};

const sendMessageSuccess = (res) => {
    res.status(200).send({ message: "success" });
}

const sendMessageFail = (res) => {
    res.status(500).send({ message: "internal server error" });
}

app.post("/api/record", (req, res, next) => {
	try {
		setRecordInStorage(req);
        sendMessageSuccess(res);
	} catch {
        sendMessageFail(res);
        next();
	}
});

app.get("/api/record", (req, res, next) => {
    try {
        if (getRecordInStorage() === null) {
            res.status(200).send([]);
        }
        res.status(200).send(getRecordInStorage());
    }
    catch {
        sendMessageFail(res);
    }
})

app.use("*", (req, res) => {
	res.status(404).json({
		success: "false",
		message: "Page not found",
		error: {
			statusCode: 404,
			message: "You reached a route that is not defined on this server",
		},
	});
});

export default app;
