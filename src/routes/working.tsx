import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, Factory, FlaskConical, Leaf, Package, User } from 'lucide-react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

export const Route = createFileRoute('/working')({
  component: RouteComponent,
})



function RouteComponent() {
  const steps = [
    {
      id: 1,
      title: 'Farmer',
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      emoji: '🌱',
      description: 'Farmers register on the platform and receive a unique digital ID.',
      details: [
        'Herb name',
        'Cultivation date',
        'Pesticides used',
        'Water usage',
        'Climate conditions',
        'Location (geo-tagged)',
        'Field and crop images'
      ],
      outcome: 'HerbLink generates a unique Asset ID / QR code for each batch, tagging the raw materials.'
    },
    {
      id: 2,
      title: 'Processor',
      icon: <Factory className="w-8 h-8 text-blue-600" />,
      emoji: '🏭',
      description: 'Farmers\' batches are delivered to processors who scan the QR code to access farmer-submitted data.',
      details: [
        'Time of processing',
        'Methods used',
        'Quantity before & after processing'
      ],
      verification: {
        correct: 'If correct → batch is approved',
        incorrect: 'If incorrect → batch is returned to the farmer'
      },
      outcome: 'All updates are stored on the blockchain ledger, linked to the same Asset ID.'
    },
    {
      id: 3,
      title: 'Laboratory',
      icon: <FlaskConical className="w-8 h-8 text-purple-600" />,
      emoji: '🔬',
      description: 'Lab scientists scan the QR code to view farmer and processor records.',
      details: [
        'Quality test reports',
        'Certificates',
        'Safety approvals'
      ],
      verification: {
        correct: 'If valid → batch is approved',
        incorrect: 'If invalid → batch is returned'
      },
      outcome: 'These verified records are stored on the blockchain under the same Asset ID.'
    },
    {
      id: 4,
      title: 'Manufacturer',
      icon: <Package className="w-8 h-8 text-orange-600" />,
      emoji: '🧪 / 🧴',
      description: 'Manufacturers receive approved batches and verify farmer, processor, and lab records.',
      details: [
        'Production details',
        'Packaging information',
        'Expiry & batch data'
      ],
      outcome: 'A new product-level QR code is generated, linking back to the original herb batch.'
    },
    {
      id: 5,
      title: 'Consumer',
      icon: <User className="w-8 h-8 text-indigo-600" />,
      emoji: '👩‍⚕️',
      description: 'Consumers scan the QR code on the final product using HerbLink.',
      viewable: [
        'Farm origin',
        'Processing details',
        'Lab test reports',
        'Manufacturing data'
      ],
      outcome: 'This creates trust and transparency, strengthening consumer confidence in the product.'
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
        
          <h1 className="text-3xl font-bold text-gray-900 mb-2">How HerbLink Works</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            HerbLink ensures end-to-end transparency in the herbal supply chain — from farm to consumer. 
            Each stage is tracked, verified, and stored on a blockchain ledger for trust and authenticity.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              {/* Step Header */}
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full mr-4">
                  <span className="text-xl font-bold text-blue-500">{step.id}</span>
                </div>
                <div className="flex items-center">
                  {step.icon}
                  <h2 className="text-2xl font-semibold text-gray-900 ml-3">
                    {step.title} <span className="text-2xl">{step.emoji}</span>
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {step.description}
              </p>

              {/* Details/Viewable Items */}
              {(step.details || step.viewable) && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {step.viewable ? 'Consumers can instantly view:' : 'They submit/add details such as:'}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {(step.details || step.viewable)?.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Verification Process */}
              {step.verification && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Verification Process:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-green-800">{step.verification.correct}</span>
                    </div>
                    <div className="flex items-center p-3 bg-red-50 rounded-lg">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-red-800">{step.verification.incorrect}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Outcome */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-blue-900 mb-2">Outcome:</h3>
                <p className="text-blue-800">{step.outcome}</p>
              </div>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-blue-500"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final Summary */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Supply Chain Transparency</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Through this comprehensive 5-step process, HerbLink creates an unbreakable chain of trust 
            from farm to consumer, ensuring every herbal product can be traced back to its origins 
            with complete transparency and verification.
          </p>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
};

