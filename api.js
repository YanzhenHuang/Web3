fetch("https://backend.cpsumsu.org/api/metaverse_quotes")
.then((response) => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
})

.then((data) => {
  console.log("Fetched data:", data["en"]);
  const listContainer = document.getElementById("list-container");
  // Failed finding a list container
  if (!listContainer) {
    console.error("Could not find list container");
    return;
  }

  console.log("Data Retrieved:", data);
  // Found a list container
  for (let i = 0; i < data["en"].length; i++) {
    // Debug
    console.log("Debug");
    const quoteItem = data["en"][i];
    const listItem = document.createElement("li");
    const itemText = document.createTextNode(
      `${quoteItem.id}. ${quoteItem.quote} -----${quoteItem.author}`
    );
    listItem.appendChild(itemText);
    listContainer.appendChild(listItem);
  }
})

.catch((error) => {
  console.error("Error fetching data:", error);
});