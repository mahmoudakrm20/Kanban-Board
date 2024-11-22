import { useState } from "react";
import Board from "./components/Board";
import FormComponent from "./components/FormComponent";
import UpdateModal from "./components/UpdateModal";
import { MemberCard } from "./components/types";

function App() {
  const [cards, setCards] = useState<MemberCard[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState<number | null>(null);
  const handleFormSubmit = (values: MemberCard) => {
    setCards([...cards, values]);
  };
  const handleDeleteCard = (index: number) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  const handleUpdateCard = (values: MemberCard) => {
    if (currentCardIndex !== null) {
      const updatedCards = [...cards];
      updatedCards[currentCardIndex] = values;
      setCards(updatedCards);
      setIsModalOpen(false);
    }
  };

  const openModal = (index: number) => {
    setCurrentCardIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gray-800 min-h-screen p-5">
      <header className="flex flex-col items-center justify-center text-2xl text-white mb-8">
        <b>Kanban Board</b>
      </header>
      <div className="flex flex-row text-white">
        <FormComponent onSubmit={handleFormSubmit} />
        <Board
          cards={cards}
          onDeleteCard={handleDeleteCard}
          onEditCard={openModal}
        />
      </div>
      {isModalOpen && currentCardIndex !== null && (
        <UpdateModal
          card={cards[currentCardIndex]}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleUpdateCard}
        />
      )}
    </div>
  );
}

export default App;
