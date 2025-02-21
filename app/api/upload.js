import multer from "multer";
import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

const uploadDir = path.join(process.cwd(), "public/uploads");

// Ensure the uploads directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer for storing files in `/public/uploads`
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Middleware to handle form-data upload
export default function handler(req, res) {
  if (req.method === "POST") {
    upload.single("file")(req, res, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      const filePath = `/uploads/${req.file.filename}`;
      return res.status(200).json({ filePath });
    });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}

export const config = {
  api: {
    bodyParser: false, // Required for multer to process multipart/form-data
  },
};