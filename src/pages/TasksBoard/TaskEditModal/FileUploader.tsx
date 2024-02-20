import axios, { AxiosResponse } from "axios";
import { useState, ChangeEvent } from "react";

const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<{ started: boolean; pc: number }>({
    started: false,
    pc: 0,
  });
  const [msg, setMsg] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleUpload = () => {
    if (!file) {
      setMsg("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);

    setMsg("Uploading...");
    setProgress({ started: true, pc: 0 });

    axios
      .post('https://httpbin.org/post', formData, {
        onUploadProgress: (progressEvent) => {
          const percentage = Math.round((progressEvent.loaded / (progressEvent.total ?? 1)) * 100);

          setProgress({ started: true, pc: percentage });
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res: AxiosResponse) => {
        setMsg("Upload successful");
        console.log(res.data);
        setUploadedFile(file); // Save the uploaded file
        setFile(null); // Clear file input
        setPreviewURL(null); // Clear preview URL
      })
      .catch((err) => {
        setMsg("Upload failed");
        console.error(err);
      });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      // Read file for preview if it's an image
      if (selectedFile.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewURL(reader.result as string);
        };
        reader.readAsDataURL(selectedFile);
      }
    }
  };

  return (
    <div className="w-1/2 mx-auto mt-10">
      <div className="flex items-center gap-2">
        <input onChange={handleFileChange} type="file" className="px-2  py-2 border rounded mr-2" />
        <button onClick={handleUpload} className="px-4 py-2 bg-primeColor text-white rounded hover:bg-blue-600">Upload</button>
      </div>
      {progress.started && <progress max={100} value={progress.pc} className="w-full mt-4"></progress>}
      {msg && <span className="text-red-500">{msg}</span>}
      {uploadedFile && (
        <div className="mt-4">
          <p className="font-bold">Uploaded File:</p>
          <p>{uploadedFile.name}</p>
          {previewURL && <img src={previewURL} alt="Preview" className="mt-2 max-w-full h-auto" />}
        </div>
      )}
    </div>
  );
};

export default FileUploader;
