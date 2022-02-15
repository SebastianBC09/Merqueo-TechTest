import React from "react";

const Context = React.createContext();

function Provider(props) {
  const { children } = props;
  const [items, setItems] = React.useState([]);
  const URL = "https://run.mocky.io/v3/729fdd53-f365-49b4-bd55-f7e10bcc9a4b";

  React.useEffect(() => {
    async function fetchItems() {
      const response = await fetch(URL);
      const results = await response.json();
      setItems(results.data)
    }
    fetchItems()
  }, [])
  return (
    <Context.Provider value={{
      items,
      setItems
    }}>
      {children}
    </Context.Provider>
  )
}

export { Context, Provider };