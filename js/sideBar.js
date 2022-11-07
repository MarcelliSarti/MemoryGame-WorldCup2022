function expandeSideBar() {
  var sideBar = document.getElementById('collapse');
  sideBar.classList = (sideBar.classList == 'collapse icons' ? 'collapse expanded icons' : 'collapse icons');
}