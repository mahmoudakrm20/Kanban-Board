import FormComponent from "./components/FormComponent";

function App() {
  return (
    <div className="bg-gray-800 min-h-screen p-5">
      <header className="flex flex-col items-center justify-center text-2xl text-white mb-8">
        <b>Kanban Board</b>
      </header>

      <div className="flex flex-row text-white">
        {/* Form Section */}
        <FormComponent />
        {/* Kanban Board Section */}
        <div className="flex flex-col w-full text-center">
          <div className="flex flex-row h-full justify-between gap-2">
            <div className="flex-1">
              <b>Unclaimed</b>
              <div className="bg-blue-500 border border-white h-full mt-2"></div>
            </div>
            <div className="flex-1">
              <b>First Contact</b>
              <div className="bg-blue-500 border border-white h-full mt-2"></div>
            </div>
            <div className="flex-1">
              <b>Preparing Work Offer</b>
              <div className="bg-blue-500 border border-white h-full mt-2"></div>
            </div>
            <div className="flex-1">
              <b>Send to Therapists</b>
              <div className="bg-blue-500 border border-white h-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
