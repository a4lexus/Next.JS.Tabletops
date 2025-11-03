import { db } from "@/db";
import { gameTable } from "@/db/schema";

const Games = async() => {
  const games = await db.select().from(gameTable);
  return (
    <div className="p-5 bg-accent3 h-lvh ">
      <h2 >Games</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h3>{game.title}</h3>
            <p>{game.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Games;
