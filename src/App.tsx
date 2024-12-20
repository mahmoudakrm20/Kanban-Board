import { useState, useEffect } from "react";
import Board from "./components/Board";
import FormComponent from "./components/FormComponent";
import UpdateModal from "./components/UpdateModal";
import { MemberCard } from "./components/types";
function App() {
  // Initialize state with localStorage data if available
  const [cards, setCards] = useState<MemberCard[]>(() => {
    const savedCards = localStorage.getItem("cards");
    return savedCards ? JSON.parse(savedCards) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const handleFormSubmit = (values: MemberCard) => {
    setCards([...cards, { ...values, status: "Unclaimed" }]);
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

  const moveCardForward = (index: number) => {
    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index
          ? {
              ...card,
              status:
                card.status === "Unclaimed"
                  ? "First Contact"
                  : card.status === "First Contact"
                  ? "Preparing Work Offer"
                  : "Send to Therapist",
            }
          : card
      )
    );
  };

  const moveCardBackward = (index: number) => {
    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index
          ? {
              ...card,
              status:
                card.status === "Send to Therapist"
                  ? "Preparing Work Offer"
                  : card.status === "Preparing Work Offer"
                  ? "First Contact"
                  : "Unclaimed",
            }
          : card
      )
    );
  };

  return (
    <div className=" min-h-screen p-5 bg-[#d6e4ec]">
      <header className="flex flex-col items-center justify-center text-2xl text-black mb-8">
        <b>Kanban Board</b>
      </header>
      <div className="flex flex-row text-white ">
        <FormComponent onSubmit={handleFormSubmit} />
        <Board
          cards={cards}
          onDeleteCard={handleDeleteCard}
          onEditCard={openModal}
          onMoveCardForward={moveCardForward}
          onMoveCardBackward={moveCardBackward}
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
