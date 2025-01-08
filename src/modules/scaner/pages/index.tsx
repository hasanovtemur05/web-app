import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

const Index = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    }, false);

    scanner.render(success, error);

    function success(result:string) {
      setScanResult(result); 
    }

    function error(err: string) {
      console.log(err); 
    }

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <div className="w-[90%] m-auto">
      <h1>QR Code Scanner</h1>
      {scanResult ? (
        <div >
          Success:{" "}
          <a href={"https://" + scanResult}>
            {scanResult}
          </a>
        </div>
      ) : (
        <div id="reader" className="w-[300px] md:w-[500px]  m-auto"></div>
      )}
    </div>
  );
};

export default Index;
