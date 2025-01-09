import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    const scannerId = "reader"; 
    if (!scannerRef.current) {
      scannerRef.current = new Html5Qrcode(scannerId);
    }

    const cameraConfig = {
      fps: 10,
      qrbox: { width: 250, height: 250 },
      experimentalFeatures: {
        useBarCodeDetectorIfSupported: true,
      },
      facingMode: "environment",
    };

    scannerRef.current
      .start(
        { facingMode: "environment" },
        cameraConfig,
        onSuccess,
        onError
      )
      .catch((err) => {
        console.error("Kamera ishga tushmadi:", err);
        setErrorMessage(
          "Kamera ishlamayapti yoki ruxsat berilmagan. Iltimos, ruxsat bering va qayta urinib ko'ring."
        );
      });

    return () => {
      if (scannerRef.current) {
        scannerRef.current
          .stop()
          .then(() => scannerRef.current?.clear())
          .catch((err) => {
            console.error("Kamerani tozalashda xatolik:", err);
          });
      }
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
    setErrorMessage("QR kodni skanerlashda xatolik yuz berdi.");
  }

  return (
    <div className="w-[90%] m-auto">
      <h1 className="text-center text-lg font-semibold">QR Code Scanner</h1>

      {scanResult ? (
        <div className="mt-4">
          <h2 className="text-green-600">Scan Success:</h2>
          <p className="break-words">{scanResult}</p>
          <a
            href={scanResult.startsWith("http") ? scanResult : `https://${scanResult}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Open Link
          </a>
        </div>
      ) : (
        <div id="reader" className="w-[300px] md:w-[500px] m-auto mt-4"></div>
      )}

      {errorMessage && (
        <div className="text-red-600 text-center mt-4">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Index;
