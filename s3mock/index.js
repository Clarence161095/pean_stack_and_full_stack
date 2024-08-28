const express = require("express");
const AWS = require("aws-sdk");
const multer = require("multer");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Cấu hình S3 client
const s3 = new AWS.S3({
  endpoint: "http://localhost:9000",
  accessKeyId: "minioadmin",
  secretAccessKey: "minioadmin",
  s3ForcePathStyle: true,
  signatureVersion: "v4",
});

const bucketName = "tuan-bucket";

// Cấu hình multer để xử lý file upload
const upload = multer({ storage: multer.memoryStorage() });

// Hàm để tạo và cấu hình bucket
async function createAndConfigureBucket() {
  try {
    // Kiểm tra xem bucket đã tồn tại chưa
    try {
      await s3.headBucket({ Bucket: bucketName }).promise();
      console.log(`Bucket ${bucketName} đã tồn tại.`);
    } catch (error) {
      if (error.statusCode === 404) {
        // Bucket chưa tồn tại, tạo mới
        await s3.createBucket({ Bucket: bucketName }).promise();
        console.log(`Bucket ${bucketName} đã được tạo.`);
      } else {
        throw error;
      }
    }

    // Cấu hình bucket policy để cho phép truy cập công khai
    const bucketPolicy = {
      Version: "2012-10-17",
      Statement: [
        {
          Sid: "PublicReadGetObject",
          Effect: "Allow",
          Principal: "*",
          Action: ["s3:GetObject"],
          Resource: [`arn:aws:s3:::${bucketName}/*`],
        },
      ],
    };

    await s3
      .putBucketPolicy({
        Bucket: bucketName,
        Policy: JSON.stringify(bucketPolicy),
      })
      .promise();

    console.log("Bucket policy đã được cấu hình để cho phép truy cập công khai.");
  } catch (error) {
    console.error("Lỗi khi tạo hoặc cấu hình bucket:", error);
  }
}

// API endpoint để upload file
app.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("Không có file được upload");
  }

  const params = {
    Bucket: bucketName,
    Key: req.file.originalname,
    Body: req.file.buffer,
    ACL: "public-read", // Đặt ACL là public-read
  };

  try {
    const result = await s3.upload(params).promise();
    res.json({ fileUrl: result.Location });
  } catch (error) {
    console.error("Lỗi khi upload file:", error);
    res.status(500).send("Lỗi server khi upload file");
  }
});

// Gọi hàm để tạo và cấu hình bucket khi khởi động server
createAndConfigureBucket();

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
