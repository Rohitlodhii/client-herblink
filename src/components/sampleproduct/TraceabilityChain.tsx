
import React, { useState, useMemo } from 'react';
import { type Farmer,type Processor,type LabTest,type Manufacturer } from '../../types/producttype';
import Accordion from './Accordion';
import InfoCard from './InfoCard';
import { LeafIcon, ChevronDownIcon } from './icons';

interface TraceabilityChainProps {
  farmersByHerb: { [key: string]: Farmer[] };
  processors: Processor[];
  labTests: LabTest[];
  manufacturer: Manufacturer;
}

const TraceabilityChain: React.FC<TraceabilityChainProps> = ({
  farmersByHerb,
  processors,
  labTests,
  manufacturer,
}) => {
  const [selectedHerb, setSelectedHerb] = useState<string | null>(null);
  const ingredients = Object.keys(farmersByHerb);

  const handleSelectHerb = (herb: string) => {
    setSelectedHerb(herb === selectedHerb ? null : herb);
  };

  const filteredData = useMemo(() => {
    if (!selectedHerb) return null;
    return {
      farmers: farmersByHerb[selectedHerb] || [],
      processors: processors.filter(p => p.otherData.herbname === selectedHerb),
      labTests: labTests.filter(l => l.otherData.herbname === selectedHerb),
    };
  }, [selectedHerb, farmersByHerb, processors, labTests]);

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Ingredient Journey</h3>
      <div className="flex flex-wrap gap-3 mb-6">
        {ingredients.map(herb => (
          <button
            key={herb}
            onClick={() => handleSelectHerb(herb)}
            className={`flex items-center px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ease-in-out transform hover:scale-105 ${
              selectedHerb === herb
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <LeafIcon className="w-4 h-4 mr-2" />
            Trace {herb}
            <ChevronDownIcon className={`w-4 h-4 ml-2 transition-transform duration-300 ${selectedHerb === herb ? 'rotate-180' : ''}`}/>
          </button>
        ))}
      </div>

      {selectedHerb && filteredData ? (
        <div className="space-y-4 animate-fade-in">
          <Accordion title="1. Harvest" count={filteredData.farmers.length}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {filteredData.farmers.map(farmer => (
                <InfoCard key={farmer.blockchainID} data={farmer} />
              ))}
            </div>
          </Accordion>
          <Accordion title="2. Processing" count={filteredData.processors.length}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {filteredData.processors.map(processor => (
                <InfoCard key={processor.blockchainID} data={processor} />
              ))}
            </div>
          </Accordion>
          <Accordion title="3. Lab Testing" count={filteredData.labTests.length}>
            <div className="p-4">
              {filteredData.labTests.map(test => (
                <InfoCard key={test.blockchainID} data={test} />
              ))}
            </div>
          </Accordion>
          <Accordion title="4. Manufacturing" count={1} defaultOpen={true}>
            <div className="p-4">
              <InfoCard data={manufacturer} />
            </div>
          </Accordion>
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500">
          <p>Please select an ingredient above to view its traceability details.</p>
        </div>
      )}
    </div>
  );
};

export default TraceabilityChain;
