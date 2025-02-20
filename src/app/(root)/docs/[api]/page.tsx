"use client";
import { useParams } from "next/navigation";
import { apiDocs } from "@/data/apis";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import {
  Clipboard,
  CheckCircle,
  FileText,
  Database,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const ApiDocPage = () => {
  const params = useParams();
  const api = params.api as string;
  const [copied, setCopied] = useState(false);
  const [openResponses, setOpenResponses] = useState<Record<number, boolean>>(
    {}
  );

  // Find API details
  let apiDetail;
  for (const category of apiDocs) {
    apiDetail = category.apis.find((item) => item.id === api);
    if (apiDetail) break;
  }

  if (!apiDetail) {
    return <p className="text-center mt-10 text-red-500">API not found</p>;
  }

  // Copy function
  const copyToClipboard = () => {
    if (apiDetail?.requestBody) {
      navigator.clipboard.writeText(
        JSON.stringify(apiDetail.requestBody, null, 2)
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Toggle responses
  const toggleResponse = (status: number) => {
    setOpenResponses((prev) => ({ ...prev, [status]: !prev[status] }));
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-64 fixed md:sticky top-0 left-0 h-screen md:h-auto bg-white shadow-md z-20">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-8 flex-1 max-w-3xl mx-auto bg-white shadow-md rounded-lg mt-16 md:mt-0">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FileText className="text-blue-600" /> {apiDetail.title}
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          {apiDetail.description}
        </p>

        {/* Endpoint Section */}
        <div className="mb-4 p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
          <h3 className="font-semibold text-blue-700 flex items-center gap-2">
            <Database /> Endpoint:
          </h3>
          <code className="text-blue-900 font-mono bg-blue-200 px-3 py-1 rounded block mt-1 break-all">
            {apiDetail.endpoint}
          </code>
        </div>

        {/* Method Section */}
        <div className="mb-4 flex items-center gap-3">
          <h3 className="font-semibold text-gray-700">Method:</h3>
          <span
            className={`px-3 py-1 text-white font-semibold rounded text-sm md:text-base ${
              apiDetail.method === "GET"
                ? "bg-green-500"
                : apiDetail.method === "POST"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          >
            {apiDetail.method}
          </span>
        </div>

        {/* Request Body with Copy Button */}
        {apiDetail.requestBody && (
          <div className="mb-4 relative p-4 border-l-4 border-gray-500 bg-gray-50 rounded">
            <h3 className="font-semibold text-gray-700 flex items-center gap-2">
              <FileText /> Request Body:
            </h3>
            <button
              onClick={copyToClipboard}
              className="absolute top-4 right-4 bg-gray-700 text-white px-3 py-1 text-sm rounded hover:bg-gray-600 flex items-center gap-1 transition-all"
            >
              {copied ? (
                <CheckCircle className="text-green-400" />
              ) : (
                <Clipboard />
              )}
              {copied ? "Copied!" : "Copy"}
            </button>
            <pre className="bg-gray-800 text-white p-4 rounded text-sm mt-2 overflow-x-auto">
              {JSON.stringify(apiDetail.requestBody, null, 2)}
            </pre>
          </div>
        )}

        {/* Response Section */}
        <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
          <h3 className="font-semibold text-green-700 flex items-center gap-2">
            <Database /> Response:
          </h3>
          <pre className="bg-gray-800 text-green-300 p-4 rounded text-sm mt-2 overflow-x-auto">
            {JSON.stringify(
              "success" in apiDetail.response
                ? apiDetail.response.success
                : apiDetail.response,
              null,
              2
            )}
          </pre>
        </div>

        {/* Error Responses */}
        {apiDetail.response?.errors && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-red-600">
              Error Responses
            </h3>
            {Object.entries(apiDetail.response.errors).map(
              ([status, error]) => (
                <div key={status} className="mt-3">
                  <button
                    onClick={() => toggleResponse(Number(status))}
                    className="flex justify-between w-full bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200 transition"
                  >
                    {status} - {error.description}
                    {openResponses[Number(status)] ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )}
                  </button>
                  {openResponses[Number(status)] && (
                    <pre className="bg-gray-800 text-red-300 p-4 rounded text-sm mt-2 overflow-x-auto">
                      {JSON.stringify(error.example, null, 2)}
                    </pre>
                  )}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiDocPage;
