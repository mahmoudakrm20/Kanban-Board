import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { MemberCard } from "./types";
interface BoardProps {
  cards: MemberCard[];
  onDeleteCard: (index: number) => void;
  onEditCard: (index: number) => void;
  onMoveCardForward: (index: number) => void;
  onMoveCardBackward: (index: number) => void;
}
const Board: React.FC<BoardProps> = ({
  cards,
  onDeleteCard,
  onEditCard,
  onMoveCardForward,
  onMoveCardBackward,
}) => {
  return (
    <div className="flex flex-col w-full text-center h-full">
      <div className="flex flex-row flex-wrap h-full justify-between gap-4 overflow-x-auto">
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
              className="flex-1 min-w-[300px] max-w-[600px] w-full sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[450px] bg-gray-50 h-fit rounded-md shadow-md"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between px-4 py-4 bg-[#bed0de] text-black rounded-t-md">
                <span className="text-base font-semibold">{status}</span>
                <span className="bg-white px-4 py-2 text-base rounded-full">
                  {columnCards.length}
                </span>
              </div>

              {/* Column Body */}
              <div
                className="bg-[#bed0de] border border-gray-300 rounded-b-md h-[calc(100vh-350px)] overflow-y-auto p-2"
                style={{
                  scrollbarColor: "#a6bccf #cbdce8 ",
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
                          className={`py-2 px-3 rounded-full text-sm font-semibold ${
                            status === "Unclaimed"
                              ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                              : "bg-gray-500 text-white hover:bg-gray-600 transition-colors duration-200"
                          }`}
                          title="Move Back"
                        >
                          <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button
                          onClick={() => onMoveCardForward(originalIndex)}
                          disabled={status === "Send to Therapist"}
                          className={`py-2 px-3 rounded-full text-sm font-semibold ${
                            status === "Send to Therapist"
                              ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                              : "bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
                          }`}
                          title="Move Forward"
                        >
                          <FontAwesomeIcon icon={faArrowRight} />
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
