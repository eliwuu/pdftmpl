function selectItem(element) {
  const source = document.getElementById(element);
  const unselect = document.getElementsByClassName("selected");

  for (const selected of unselect) {
    selected.classList.remove("selected");
  }

  source.className = "btn selected";

  const container = document.getElementById(element + "Container");
  const containers = document.getElementsByClassName("container");

  for (const selected of containers) {
    selected.classList.remove("visible");
    selected.className = "container hidden";
  }

  container.className = "container visible";
}
