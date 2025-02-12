'use client';
import React, { useState } from 'react';
import { IKUpload } from 'imagekitio-next';
import { Loader2 } from 'lucide-react';
import { IKUploadResponse } from 'imagekitio-next/dist/types/components/IKUpload/props';

interface FileUploadProps {
  onSuccess: (res: IKUploadResponse) => void;
  onProgress?: (progress: number) => void;
  fileType?: 'image' | 'video';
}

// const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
// const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
// const authenticator = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/api/auth");

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`Request failed with status ${response.status}: ${errorText}`);
//     }

//     const data = await response.json();
//     const { signature, expire, token } = data;
//     return { signature, expire, token };
//   } catch (error) {
//     throw new Error(`Authentication request failed: ${error.message}`);
//   }
// };

export default function FileUpload({
  onSuccess,
  onProgress,
  fileType = 'image',
}: FileUploadProps) {
  //   const ikUploadRefTest = useRef(null);

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onError = (err: { message: string }) => {
    console.log('Error', err);
    setError(err.message);
    setUploading(false);
  };

  const handleSuccess = (response: IKUploadResponse) => {
    console.log('Success', response);
    setUploading(false);
    setError(null);
    onSuccess(response);
  };

  //   const onUploadProgress = (progress) => {
  const handleUploadProgress = (evt: ProgressEvent) => {
    // console.log("Progress", progress);
    if (evt.lengthComputable && onProgress) {
      const percentComplete = (evt.loaded / evt.total) * 100;
      onProgress(Math.round(percentComplete));
    }
  };

  //   const onUploadStart = (evt) => {
  const handleUploadStart = () => {
    // console.log('Start', evt);
    setUploading(true);
    setError(null);
  };

  const validateFile = (file: File) => {
    if (fileType === 'video') {
      if (!file.type.startsWith('video/')) {
        setError('Please upload a video file');
        return false;
      }

      if (file.size > 100 * 1024 * 1024) {
        setError('Video must be less than 100 MB');
        return false;
      }
    } else {
      const validTypes = ['image/jpeg', 'image/png', 'image/webp'];

      if (!validTypes.includes(file.type)) {
        setError('Please upload a valid Image file (JPEG, PNG, WEBP)');
        return false;
      }

      if (file.size > 5 * 1024 * 1024) {
        setError('Image must be less than 5 MB');
        return false;
      }
    }

    return false;
  };

  return (
    <div className="App space-y-2">
      <h1>ImageKit Next.js quick start</h1>
      {/* <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}> */}
      <p>Upload an image with advanced options</p>
      <IKUpload
        //   fileName="test-upload.jpg"
        fileName={fileType === 'video' ? 'video' : 'image'}
        //   tags={["sample-tag1", "sample-tag2"]}
        //   customCoordinates={"10,10,10,10"}
        //   isPrivateFile={false}
        useUniqueFileName={true}
        //   responseFields={["tags"]}
        //   validateFile={(file) => file.size < 2000000}
        validateFile={validateFile}
        //   folder={"/sample-folder"}
        //   {/* extensions={[
        //     {
        //       name: "remove-bg",
        //       options: {
        //         add_shadow: true,
        //       },
        //     },
        //   ]} */}
        //   webhookUrl="https://www.example.com/imagekit-webhook" // replace with your webhookUrl
        //   overwriteFile={true}
        //   overwriteAITags={true}
        //   overwriteTags={true}
        //   overwriteCustomMetadata={true}
        //   {/* customMetadata={{
        //     "brand": "Nike",
        //     "color": "red",
        //   }} */}
        onError={onError}
        onSuccess={handleSuccess}
        onUploadProgress={handleUploadProgress}
        onUploadStart={handleUploadStart}
        accept={fileType === 'video' ? 'video/*' : 'image/*'}
        folder={fileType === 'video' ? '/videos' : '/images'}
        transformation={{
          pre: 'l-text,i-Imagekit,fs-50,l-end',
          post: [
            {
              type: 'transformation',
              value: 'w-100',
            },
          ],
        }}
        style={{ display: 'none' }} // hide the default input and use the custom upload button
        // ref={ikUploadRefTest}
        className="file-input file-input-bordered w-full"
      />
      {/* <p>Custom Upload Button</p>
      {ikUploadRefTest && (
        <button onClick={() => ikUploadRefTest.current.click()}>Upload</button>
      )}
      <p>Abort upload request</p>
      {ikUploadRefTest && (
        <button onClick={() => ikUploadRefTest.current.abort()}>
          Abort request
        </button>
      )} */}
      {/* </ImageKitProvider> */}
      {/* ...other SDK components added previously */}

      {uploading && (
        <div className="flex items-center gap-2 text-sm text-primary">
          <Loader2 className="animate-spin w-4 h-4" />
          <span>Uploading...</span>
        </div>
      )}

      {error && <div className="text-error text-sm ">{error}</div>}
    </div>
  );
}

// Refer :-
// Imagekit > Nexts > Upload section
// https://imagekit.io/docs/integration/nextjs#uploading-files-in-next.js
