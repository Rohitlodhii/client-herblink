
import React from 'react';
import { type Farmer,type Processor,type LabTest,type Manufacturer } from '../../types/producttype';
import { CalendarIcon, LocationMarkerIcon, CubeIcon, BeakerIcon, CheckCircleIcon, XCircleIcon, CogIcon } from './icons';

interface InfoCardProps {
  data: Farmer | Processor | LabTest | Manufacturer;
}

const InfoCard: React.FC<InfoCardProps> = ({ data }) => {
  const { eventType, name, timestamp, location, blockchainID, otherData } = data;

  const formatDate = (date: Date) => date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const renderOtherData = () => {
    return Object.entries(otherData).map(([key, value]) => {
      if (typeof value === 'boolean') {
        return (
          <div key={key} className="flex items-center">
            <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
            {value ? <CheckCircleIcon className="w-5 h-5 ml-2 text-green-500" /> : <XCircleIcon className="w-5 h-5 ml-2 text-red-500" />}
          </div>
        );
      }
       if (value instanceof Date) {
        return <p key={key}><span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span> {formatDate(value)}</p>;
      }
      return <p key={key}><span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span> {String(value)}</p>;
    });
  };

  const eventIcon = () => {
    switch(eventType) {
      case 'Harvest': return <LeafIcon className="w-6 h-6 text-green-600" />;
      case 'Processing': return <CogIcon className="w-6 h-6 text-blue-600" />;
      case 'Lab Test': return <BeakerIcon className="w-6 h-6 text-purple-600" />;
      case 'Manufacture': return <CubeIcon className="w-6 h-6 text-indigo-600" />;
      default: return null;
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center mb-3">
        {eventIcon()}
        <h3 className="text-xl font-bold ml-2 text-gray-800">{name}</h3>
      </div>
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center">
          <CalendarIcon className="w-4 h-4 mr-2 text-gray-400" />
          <span>{timestamp.toLocaleString()}</span>
        </div>
        <div className="flex items-start">
          <LocationMarkerIcon className="w-4 h-4 mr-2 text-gray-400 mt-1" />
          <span>{location.address}</span>
        </div>
        <div className="border-t border-gray-200 my-2"></div>
        <div className="space-y-1">
          {renderOtherData()}
        </div>
        <div className="border-t border-gray-200 my-2"></div>
        <div className="flex items-start">
          <span className="font-semibold mr-2 mt-0.5">BC ID:</span>
          <p className="text-xs text-gray-500 break-all bg-gray-100 p-1 rounded font-mono">{blockchainID}</p>
        </div>
      </div>
    </div>
  );
};

const LeafIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  </svg>
);


export default InfoCard;
