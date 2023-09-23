import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

function App() {
  const [items, setitem] = useState([]);
  function onClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) setitem([]);
  }
  function handleItem(item) {
    setitem((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setitem((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItems(id) {
    setitem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggle={handleToggleItems}
        onClearList={onClearList}
      />
      <Stats item={items} />
    </div>
  );
}

export default App;
