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
    <div className="flex flex-col justify-center items-center  bg-white p-6">
      <div
        id="reader"
        className="w-full max-w-[350px] aspect-square bg-white border-2 border-gray-300 rounded-lg shadow-md mb-6"
      ></div>
      
      {scanResult && (
        <div className="w-full max-w- bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Scan Result:</h2>
          <p className="text-lg text-gray-600">{scanResult}</p>
        </div>
      )}
    </div>
  );
};

export default Index;
