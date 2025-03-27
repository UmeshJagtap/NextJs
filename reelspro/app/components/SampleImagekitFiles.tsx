'use client';

import React from 'react';
// Trying imagekit.io
import {
  IKImage,
  IKVideo,
  ImageKitProvider,
  IKUpload,
  ImageKitContext,
} from 'imagekitio-next';
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

function SampleImagekitFiles() {
  return (
    <>
      <h1>ImageKit Next.js quick start</h1>
      <IKImage
        urlEndpoint={urlEndpoint}
        path="default-image.jpg"
        width={400}
        height={400}
        alt="default_image"
      />
      <IKImage
        urlEndpoint={urlEndpoint}
        path="O-glass.jpg"
        width={400}
        height={400}
        alt="O_glass"
      />
      {/* <IKVideo
    urlEndpoint={urlEndpoint}
    path="sample-video.mp4"
    width={400}
    height={800}
  /> */}
      <IKVideo
        path="sample-video.mp4"
        transformation={[
          { width: '400', height: '300' },
          { raw: 'l-image,w-300,h-100,l-end' },
        ]}
        controls={true}
      />
      <br />
      <IKVideo
        path="army_day_status_2022_15january_20220115_0.mp4"
        transformation={[
          { width: '9', height: '16' },
          { raw: 'l-image,w-300,h-100,l-end' },
        ]}
        controls={true}
      />
      {/* https://ik.imagekit.io/qpyardkh8/army_day_status_2022_15january_20220115_0.mp4?updatedAt=1740470563331 */}
    </>
  );
}

export default SampleImagekitFiles;
