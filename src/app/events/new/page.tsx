import createEvent from "@/app/actions/create-event";

const CreateEvent = ({}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
        <div
            style={{
                width: "100%",
                maxWidth: 640,
                background: "#fff",
                borderRadius: 10,
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                padding: "1.5rem",
            }}
        >
            <h2 style={{ margin: "0 0 1rem", fontSize: "1.25rem" }}>Create new event</h2>

            <form action={createEvent} style={{ display: "grid", gap: "0.75rem" }}>
                <label htmlFor="name-input" style={{ fontSize: 14, fontWeight: 600 }}>
                    Name of event:
                </label>
                <input
                    id="name-input"
                    name="name"
                    type="text"
                    placeholder="Game night"
                    style={{
                        padding: "0.6rem 0.75rem",
                        border: "1px solid #e5e7eb",
                        borderRadius: 8,
                        fontSize: 14,
                    }}
                />

                <label htmlFor="description-input" style={{ fontSize: 14, fontWeight: 600 }}>
                    Description
                </label>
                <input
                    id="description-input"
                    name="description"
                    type="text"
                    placeholder="Describe your event"
                    style={{
                        padding: "0.6rem 0.75rem",
                        border: "1px solid #e5e7eb",
                        borderRadius: 8,
                        fontSize: 14,
                    }}
                />

                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "0.25rem" }}>
                    <button
                        type="submit"
                        style={{
                            background: "#2563eb",
                            color: "#green",
                            padding: "0.6rem 1rem",
                            border: "none",
                            borderRadius: 8,
                            cursor: "pointer",
                            fontWeight: 600,
                        }}
                    >
                        Add event
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default CreateEvent;
