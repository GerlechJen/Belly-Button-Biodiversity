d3.selectAll("body").on("change", updatePage);
menu = "Mickey", "Minnie", 'Donald', "Goofy"

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  // console.log(dropdownMenuID);
  console.log(selectedOption);
};