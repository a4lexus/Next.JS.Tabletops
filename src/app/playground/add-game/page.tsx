import createGame from "@/app/actions/create-game";
import createCategory from "@/app/actions/create-game";


const CreateGame = ({}) => {
  return (
    <div className="min-h-screen bg-gray-300 py-8">
      <div className="max-w-md mx-auto bg-gray-400 p-8 rounded-lg shadow-md">
        <form action={createGame} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="title-input" className="text-gray-700 mb-2">
              Title:
            </label>
            <input
              id="title-input"
              name="title"
              type="text"
              placeholder="Game Title"
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description-input" className="text-gray-700 mb-2">
              Description:
            </label>
            <input
              id="description-input"
              name="description"
              type="text"
              placeholder="Describe your Game"
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition-colors"
            >
              Add Game
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGame;
