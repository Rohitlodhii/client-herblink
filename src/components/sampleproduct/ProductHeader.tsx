
import React from 'react';
import { type ProductHeader as ProductHeaderType} from '../../types/producttype';
import { StarIcon } from './icons';

interface ProductHeaderProps {
  header: ProductHeaderType;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ header }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-8 border border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{header.title}</h2>
          <p className="text-lg text-green-700 font-semibold">{header.brand}</p>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          {renderStars(header.rating)}
          <span className="ml-2 text-gray-600">({header.rating}.0)</span>
        </div>
      </div>
      <div className="border-t border-gray-200 my-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="font-semibold text-gray-500 mb-1">Key Dates</h4>
          <p><span className="font-medium text-gray-700">Harvested:</span> {header.harvest}</p>
          <p><span className="font-medium text-gray-700">Manufactured:</span> {header.manufacture}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-500 mb-1">Active Ingredients</h4>
          <div className="flex flex-wrap gap-2">
            {header.ingredients.map((ing, index) => (
              <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                {ing}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
