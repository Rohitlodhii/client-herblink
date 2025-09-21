import React, { useState } from 'react';
import { UploadIcon, SpinnerIcon } from './icons';

interface QRCodeScannerProps {
  onScanComplete: (productId: string) => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ onScanComplete }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setIsScanning(true);

        // Simulate scanning delay and route
        setTimeout(() => {
          onScanComplete('sampleproduct');
        }, 2500);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full mt-10 text-center animate-fade-in">
      <div className="bg-white shadow-lg rounded-sm p-8 md:p-12 border border-gray-200 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Upload Product QR Code</h1>
        <p className="text-gray-500 mb-8">Upload an image of the QR code to see its journey.</p>
        
        <div className="relative w-64 h-64 mx-auto mb-8 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
          {imagePreview ? (
             <div className="relative w-full h-full">
                <img src={imagePreview} alt="QR Code Preview" className="w-full h-full object-cover"/>
                {isScanning && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white">
                      <SpinnerIcon className="w-16 h-16 animate-spin" />
                      <p className="mt-4 font-semibold">Scanning...</p>
                  </div>
                )}
             </div>
          ) : (
            <div className="text-center text-gray-400 p-4">
                <UploadIcon className="w-16 h-16 mx-auto" />
                <p className="mt-2 text-sm font-medium">Select an image to scan</p>
            </div>
          )}
        </div>
        
        <label 
          htmlFor="qr-code-upload" 
          className={`w-full text-center block cursor-pointer py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white transition-all transform hover:scale-105 ${isScanning ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'}`}
        >
          {isScanning ? 'Processing...' : 'Select Image'}
        </label>
        <input
            id="qr-code-upload"
            type="file"
            className="sr-only"
            accept="image/png, image/jpeg, image/webp"
            onChange={handleFileChange}
            disabled={isScanning}
        />
      </div>
    </div>
  );
};

export default QRCodeScanner;
