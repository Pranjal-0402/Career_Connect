import express, { urlencoded } from "express";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
//import bodyParser from "body-parser";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";

dotenv.config({});
// connect db
connectDB();

const app = express();
const PORT= process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//app.use(urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:"https://career-connect-79k9.onrender.com",
    credentials:true
}
app.use(cors(corsOptions));

// api's route
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

//deployment code
if(process.env.NODE_ENV==="production"){
    const dirPath=path.resolve();
    app.use(express.static("./Frontend/dist"));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(dirPath, "./Frontend/dist","index.html"));
    })
}

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
});