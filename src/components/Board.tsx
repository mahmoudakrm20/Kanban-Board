interface BoardProps {
  cards: {
    title: string;
    name: string;
    age: string;
    email: string;
    phone: string;
  }[];
  onDeleteCard: (index: number) => void; // Prop to handle card deletion
}

const Board: React.FC<BoardProps> = ({ cards, onDeleteCard }) => {
  return (
    <div className="flex flex-col w-full text-center">
      <div className="flex flex-row h-full justify-between gap-2">
        {/* Unclaimed Column */}
        <div className="flex-1">
          <b>Unclaimed</b>
          <div className="bg-blue-500 border border-white h-full mt-2">
            {/* Mapping over the card array to render all cards in the "Unclaimed" column */}
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white text-black p-2 m-2 rounded-md"
              >
                <p>
                  <strong>Name:</strong> {card.name}
                </p>
                <p>
                  <strong>Title:</strong> {card.title}
                </p>
                <p>
                  <strong>Age:</strong> {card.age}
                </p>
                <p>
                  <strong>Email:</strong> {card.email}
                </p>
                <p>
                  <strong>Phone:</strong> {card.phone}
                </p>
                {/* Delete Button */}
                <button
                  onClick={() => onDeleteCard(index)}
                  className="bg-red-500 text-white p-1 rounded-md mt-2"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Other columns (First Contact, Preparing Work Offer, Send to Therapists) */}
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
  );
};

export default Board;
