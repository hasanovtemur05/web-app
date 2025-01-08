import { useState, useEffect, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";  

const ScannerPage = () => {
  const [scannedData, setScannedData] = useState<string | null>(null);  
  const videoRef = useRef<HTMLVideoElement | null>(null); 

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader(); 

    if (videoRef.current) {
      codeReader
        .decodeFromVideoDevice(null, videoRef.current, (result, error) => {
          if (result) {
            setScannedData(result.getText()); 
          }
          if (error) {
            console.error(error); 
          }
        })
        .catch((err) => {
          console.error("Error during barcode scanning:", err); 
        });

      return () => {
        codeReader.reset();
      };
    }
  }, []);

  return (
    <div className="w-[90%] m-auto">
      <h1 className="text-center">QR and Barcode Scanner</h1>
      <video ref={videoRef} className="w-auto m-auto" />
      {scannedData && <p>Scanned Data: {scannedData}</p>}
    </div>
  );
};

export default ScannerPage;
