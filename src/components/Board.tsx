interface BoardProps {
  cards: {
    title: string;
    name: string;
    age: string;
    email: string;
    phone: string;
  }[];
}
const Board: React.FC<BoardProps> = ({ cards }) => {
  return (
    <div className="flex flex-col w-full text-center">
      <div className="flex flex-row h-full justify-between gap-2">
        {/* Unclaimed Column */}
        <div className="flex-1">
          <b>Unclaimed</b>
          <div className="bg-blue-500 border border-white h-full mt-2">
            {/* mapping over card array to render all cards in the "Unclaimed" column */}
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
              </div>
            ))}
          </div>
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
  );
};

export default Board;
