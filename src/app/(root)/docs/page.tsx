import Sidebar from "@/components/Sidebar";

const DocsPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1">
        <h1 className="text-3xl font-bold">API Documentation</h1>
        <p className="text-gray-700 mt-2">
          Select an API from the sidebar to view details.
        </p>
      </div>
    </div>
  );
};

export default DocsPage;
