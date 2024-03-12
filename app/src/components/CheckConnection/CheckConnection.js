export function CheckConnection() {
    if (!window.navigator.onLine) {
        const NetSwitchables = document.querySelectorAll(".NetSwitchable");
    
        NetSwitchables.forEach(element => {
          element.classList.toggle("NoNetElementHide");
          element.classList.toggle("NoNetWarning");
        });
        document.getElementById("CarrouselFeeds").classList = "NoNetElementHide";
      }
}