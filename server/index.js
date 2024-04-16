// //Import required modules
// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import cookieParser from "cookie-parser";
// import cors from "cors";



// //Import route modules
// // import adminAuth from "./Routes/Admin/adminAuthRoutes.js"


// import AdminRoutes from "./Routes/Admin/adminRoutes.js";

// const app = express()

// app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(cookieParser())

// mongoose.connect('mongodb://127.0.0.1:27017/trello', {
// }).then(() => {
//     console.log("MONGODB CONNECTED");
// }).catch(err => {
//     console.log(err.message);
// })

// app.use(cors({
//     origin: '*',
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true
// }))


// // app.use('/admin/adminAuth', adminAuth)

// app.use('/admin', AdminRoutes)

// const server = app.listen(process.env.PORTNUMBER, () => {
//     console.log('Server running');
// })

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import AdminRoutes from "./Routes/Admin/adminRoutes.js";
import env from "dotenv";
const app = express();

env.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
    .connect("mongodb://127.0.0.1:27017/trello")
    .then(() => {
        console.log("MONGODB CONNECTED");
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use(
    cors({
        origin: "*",
        methods: ["Get", "Post", "Put", "Delete"],
        credentials: true,
    })
);

app.use("/admin", AdminRoutes);

app.listen(3000, () => {
    console.log("Sever running");
});

