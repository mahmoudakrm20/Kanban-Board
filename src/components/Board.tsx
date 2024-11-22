import { MemberCard } from "./types";
interface BoardProps {
  cards: MemberCard[];
  onDeleteCard: (index: number) => void;
  onEditCard: (index: number) => void;
  onMoveCardForward: (index: number) => void;
  onMoveCardBackward: (index: number) => void;
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
const Board: React.FC<BoardProps> = ({
  cards,
  onDeleteCard,
  onEditCard,
  onMoveCardForward,
  onMoveCardBackward,
}) => {
  return (
    <div className="flex flex-col w-full text-center h-full">
      <div className="flex flex-row h-full justify-between gap-4 overflow-x-auto">
        {[
          "Unclaimed",
          "First Contact",
          "Preparing Work Offer",
          "Send to Therapist",
        ].map((status) => {
          const columnCards = cards
            .map((card, index) => ({ ...card, originalIndex: index })) // Attach the original index
            .filter((card) => card.status === status);

          return (
            <div
              key={status}
              className="flex-1 min-w-[250px] bg-gray-50 h-fit rounded-md shadow-md"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-blue-500 text-white rounded-t-md">
                <span className="text-sm font-semibold">{status}</span>
                <span className="bg-blue-700 px-2 py-1 text-xs rounded-full">
                  {columnCards.length}
                </span>
              </div>

              {/* Column Body */}
              <div
                className="bg-blue-100 border border-gray-300 rounded-b-md h-[calc(100vh-150px)] overflow-y-auto p-2"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#888 #e0e0e0",
                }}
              >
                {columnCards.map((card) => {
                  const { originalIndex } = card; // Use the attached original index

                  return (
                    <div
                      key={originalIndex}
                      className="bg-white text-black p-4 mb-4 rounded-lg shadow-lg relative hover:shadow-xl transition-shadow duration-300"
                    >
                      {/* Header Section */}
                      <div className="absolute top-2 right-2 flex gap-2">
                        <button
                          onClick={() => onEditCard(originalIndex)}
                          className="text-yellow-500 hover:text-yellow-600 text-lg font-bold"
                          title="Update"
                        >
                          <FontAwesomeIcon icon={faEdit} title="Edit" />
                        </button>
                        <button
                          onClick={() => onDeleteCard(originalIndex)}
                          className="text-red-500 hover:text-red-600 text-lg font-bold"
                          title="Delete"
                        >
                          <FontAwesomeIcon icon={faTrash} title="Delete" />
                        </button>
                      </div>

                      {/* Card Content */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold text-gray-800">
                            {card.name}
                          </h3>
                          <span className="text-base font-semibold text-gray-500 mt-5">
                            {card.age} yo
                          </span>
                        </div>
                        <p className="text-base mr-auto text-gray-600">
                          {card.title}
                        </p>
                        <p className="text-base mr-auto text-gray-600">
                          {card.email}
                        </p>
                        <p className="text-base mr-auto text-gray-600">
                          {card.phone}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex justify-between mt-4">
                        <button
                          onClick={() => onMoveCardBackward(originalIndex)}
                          disabled={status === "Unclaimed"}
                          className={`py-2 px-4 rounded-lg text-sm font-semibold ${
                            status === "Unclaimed"
                              ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                              : "bg-gray-500 text-white hover:bg-gray-600 transition-colors duration-200"
                          }`}
                          title="Move Back"
                        >
                          &lt;
                        </button>
                        <button
                          onClick={() => onMoveCardForward(originalIndex)}
                          disabled={status === "Send to Therapist"}
                          className={`py-2 px-4 rounded-lg text-sm font-semibold ${
                            status === "Send to Therapist"
                              ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                              : "bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
                          }`}
                          title="Move Forward"
                        >
                          &gt;
                        </button>
                      </div>
                    </div>
                  );
                })}

                {/* Empty State */}
                {columnCards.length === 0 && (
                  <p className="text-gray-500 text-sm text-center mt-4">
                    No items in this column
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
