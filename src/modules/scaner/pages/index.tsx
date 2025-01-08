import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

const Index = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader", 
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      },
      false 
    );

    scanner.render(onSuccess, onError);

    return () => {
      scanner.clear();
    };

    function onSuccess(result: string) {
      console.log("Scan success:", result);
      setScanResult(result);
    }

    function onError(err: string) {
      console.error("Scan error:", err);
    }
  }, []);

  return (
    <div className="w-[90%] m-auto">
      <h1 className="text-center text-lg font-semibold">QR Code Scanner</h1>
      {scanResult ? (
        <div className="mt-4">
          <h2 className="text-green-600">Scan Success:</h2>
          <a
            href={scanResult.startsWith("http") ? scanResult : `https://${scanResult}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {scanResult}
          </a>
        </div>
      ) : (
        <div id="reader" className="w-[300px] md:w-[500px] m-auto mt-4"></div>
      )}
    </div>
  );
};

export default Index;
