import * as yup from "yup"

const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/vnd.microsoft.icon",
  "image/gif",
  "image/jpeg",
  "image/png",
  "audio/mp3",
  "audio/mpeg",
  "audio/opus",
  "video/mpeg",
  "video/mp4",
  "application/json",
  "application/zip",
  "application/x-tar",
  "application/gzip",
  "application/json",
  "application/ld+json",
  "application/pdf",
  "application/vnd.rar",
  "application/x-tar",
  "application/x-7z-compressed",
  "application/x-bzip",
  "application/x-bzip2",
  "application/x-7z-compressed",
  "application/octet-stream",
  "application/java-archive",
]

export const FileSchema = yup.object().shape({
  file: yup
    .mixed()
    .nullable()
    .test("fileSize", "Something went wrong", (value) => value?.size < 80000000)
    .test(
      "type",
      "Max Upload size is 80MB",
      (value) => value && SUPPORTED_FORMATS.includes(value.type),
    ),
})
