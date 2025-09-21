"use client";
import React, { useState } from 'react';
import { UploadIcon } from './icons';
import { useTranslation } from "react-i18next";

const ComplaintForm: React.FC = () => {
  const { t } = useTranslation();
  const [blockchainId, setBlockchainId] = useState('');
  const [complaintType, setComplaintType] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImage(null);
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionStatus(null);

    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Complaint Submitted:', {
      blockchainId,
      complaintType,
      details,
      imageName: image?.name
    });

    setBlockchainId('');
    setComplaintType('');
    setDetails('');
    setImage(null);
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImagePreview(null);
    setIsSubmitting(false);
    setSubmissionStatus('success');

    setTimeout(() => setSubmissionStatus(null), 5000);
  };

  const complaintOptions = [
    t("complain.options.packaging"),
    t("complain.options.quality"),
    t("complain.options.incorrectInfo"),
    t("complain.options.allergy"),
    t("complain.options.other")
  ];

  return (
    <div className="max-w-4xl mx-auto animate-fade-in pt-4">
      <h1 className="text-2xl font-bold mb-2">{t("complain.title")}</h1>

      <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="blockchainId" className="block text-sm font-medium text-gray-700 mb-1">
              {t("complain.blockchainId")}
            </label>
            <input
              type="text"
              id="blockchainId"
              value={blockchainId}
              onChange={(e) => setBlockchainId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder={t("complain.blockchainPlaceholder")}
              required
            />
          </div>

          <div>
            <label htmlFor="complaintType" className="block text-sm font-medium text-gray-700 mb-1">
              {t("complain.type")}
            </label>
            <select
              id="complaintType"
              value={complaintType}
              onChange={(e) => setComplaintType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 bg-white transition-colors"
              required
            >
              <option value="" disabled>{t("complain.selectCategory")}</option>
              {complaintOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
              {t("complain.details")}
            </label>
            <textarea
              id="details"
              rows={5}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder={t("complain.detailsPlaceholder")}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("complain.attachImage")}
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {imagePreview ? (
                  <div className="relative group">
                    <img src={imagePreview} alt="Preview" className="mx-auto h-32 w-auto object-contain rounded-md"/>
                    <button
                      type="button"
                      onClick={() => handleImageChange({ target: { files: null } } as any)}
                      className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full leading-none opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none"
                      aria-label={t("complain.removeImage")}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </button>
                  </div>
                ) : (
                  <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                )}
                <div className="flex text-sm text-gray-600 justify-center">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                    <span>{image ? t("complain.changeFile") : t("complain.uploadFile")}</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageChange} accept="image/png, image/jpeg"/>
                  </label>
                  {!image && <p className="pl-1">{t("complain.orDragDrop")}</p>}
                </div>
                <p className="text-xs text-gray-500">{t("complain.fileLimit")}</p>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? t("complain.submitting") : t("complain.submit")}
            </button>
          </div>
        </form>
        {submissionStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 border border-green-200 rounded-md text-center animate-fade-in">
            {t("complain.successMessage")}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplaintForm;
