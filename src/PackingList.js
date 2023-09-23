import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItem, onToggle, onClearList }) {
  const [sortby, setsortby] = useState("input");
  let sortedItems;
  if (sortby === "input") {
    sortedItems = items;
  }
  if (sortby === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} onToggle={onToggle} />
        ))}
      </ul>
      <div className="actions" onChange={(e) => setsortby(e.target.value)}>
        <select value={sortby}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => onClearList()}>Clear List</button>
      </div>
    </div>
  );
}
