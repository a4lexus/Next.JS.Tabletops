import { db } from "@/db";
import { events as eventsTable } from "@/db/schema";

const EventsPage = async ({}) => {
  const events = await db.select().from(eventsTable);
  return (
    <div
      style={{
        padding: 24,
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        color: "#0f172a",
      }}
    >
      <section style={{ maxWidth: 960, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, marginBottom: 12 }}>Events</h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
          {events.map((event, index) => {
            const colors = [
              "#e0f2fe",
              "#fae8ff",
              "#dcfce7",
              "#ffedd5",
              "#fee2e2",
            ];
            const colorIndex = index % colors.length;
            return (
              <li
                key={event.id}
                style={{
                  background: colors[colorIndex],
                  border: "1px solid #e6eaf0",
                  borderRadius: 8,
                  padding: 16,
                  boxShadow: "0 2px 4px rgba(16,24,40,0.08)",
                }}
              >
                <h3 style={{ margin: 0, fontSize: 18 }}>{event.name}</h3>
                {event.description && (
                  <p
                    style={{ marginTop: 8, marginBottom: 0, color: "#334155" }}
                  >
                    {event.description}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default EventsPage;
