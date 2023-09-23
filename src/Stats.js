export function Stats({ item }) {
  const numItems = item.length;
  const numPacked = item.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      <em>
        You have {numItems} items on your list and you have already packed{" "}
        {numPacked} items{" "}
      </em>
    </footer>
  );
}
