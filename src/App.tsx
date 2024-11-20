import { useState } from "react";
import Board from "./components/Board";
import FormComponent from "./components/FormComponent";
interface MemberCard {
  title: string;
  name: string;
  age: string;
  email: string;
  phone: string;
}
function App() {
  // State of cards
  const [cards, setCards] = useState<MemberCard[]>([]);

  // Function to handle form and add new card
  const handleFormSubmit = (values: MemberCard) => {
    // Add the new card to the Unclaimed column
    setCards([...cards, values]);
  };
  return (
    <div className="bg-gray-800 min-h-screen p-5">
      <header className="flex flex-col items-center justify-center text-2xl text-white mb-8">
        <b>Kanban Board</b>
      </header>

      <div className="flex flex-row text-white">
        {/* Form Section */}
        <FormComponent onSubmit={handleFormSubmit} />
        {/* Kanban Board Section */}
        <Board cards={cards} />
      </div>
    </div>
  );
}

export default App;
