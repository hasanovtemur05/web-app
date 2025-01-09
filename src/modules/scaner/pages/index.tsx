import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useState } from "react";

const Index = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);

  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader");

    const cameraConfig: MediaTrackConstraints = {
      facingMode: "environment", 
    };

    html5QrCode
      .start(
        cameraConfig,  
        { qrbox: { width: 250, height: 250 }, fps: 20 }, 
        onSuccess,      
        onError         
      )
      .catch((err) => {
        console.error("Camera initialization failed:", err);
      });

    return () => {
      html5QrCode.stop().then(() => {
        console.log("QR code scanner stopped");
      });
    };
  }, []);

  function onSuccess(result: string) {
    console.log("Scan success:", result);
    setScanResult(result);
  }

  function onError(err: string) {
    if (err.includes("NotFoundException")) {
      return; 
    }
    console.error("Scan error:", err);
  }

  return (
    <div className="flex flex-col justify-center items-center p-6">
      <div
        id="reader"
        className="w-[300px] md:w-[400px]  bg-white border-2 border-gray-300 rounded-lg mb-6"
      ></div>
      
      {scanResult && (
        <div className="w-[300px] md:w-[400px]  bg-white p-4 rounded-lg text-center">
          <h2 className="text-lg font-medium text-gray-700 mb-3">Scan Result:</h2>
          <a href={scanResult} className="text-sm text-blue-600">{scanResult}</a>
        </div>
      )}
    </div>
  );
};

export default Index;
