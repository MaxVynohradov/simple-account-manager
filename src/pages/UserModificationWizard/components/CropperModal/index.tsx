/* eslint-disable no-unused-expressions */
import React, { useCallback, useRef, useState } from 'react';
import Cropper from 'react-easy-crop';

import useStyles from './styles';

interface Props {
  updateImageFile: (file: File) => void;
  image: HTMLImageElement;
  imageBase64: string | ArrayBuffer | null;
}

const PhotoCropper: React.FC<Props> = ({ updateImageFile, image, imageBase64 }: Props) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixelsState, setCroppedAreaPixelsState] = useState({ width: 1, height: 1 });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctx: CanvasRenderingContext2D | null = canvasRef.current ? canvasRef.current.getContext('2d') : null;

  const classes = useStyles();

  const onCropComplete = useCallback(
    (croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixelsState(croppedAreaPixels);

      ctx?.clearRect(0, 0, canvasRef.current?.width || 0, canvasRef.current?.height || 0);

      ctx?.drawImage(
        image,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
      );
    },
    [ctx, image],
  );

  const handleCropSubmit = useCallback(() => {
    if (canvasRef.current)
      canvasRef.current.toBlob((file: Blob | null): void => {
        updateImageFile(file as File);
      }, 'image/jpeg');
  }, [updateImageFile]);

  return (
    <div className={classes.cropContainer}>
      <button onClick={handleCropSubmit}>Crop!</button>
      <canvas ref={canvasRef} width={croppedAreaPixelsState.width} height={croppedAreaPixelsState.height} />
      <Cropper
        image={imageBase64 as string}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        cropShape="round"
      />
    </div>
  );
};

export default PhotoCropper;
