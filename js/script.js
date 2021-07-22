/* eslint-disable no-undef */
/* Hamburger Menu */

function addClickListenersToMenu() {
  const menuButton = document.querySelector('.hamburger');
  menuButton.addEventListener('click', menuClickHandler);
}
  
addClickListenersToMenu();

function menuClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Button was cliked!', clickedElement);
  const activeMenu = document.querySelector('.menu');
  console.log('Menu: ', activeMenu);
  activeMenu.classList.toggle('active');
  console.log('Menu: ', activeMenu);
}

/* Chart */
function initChart(){
  const ctx = document.getElementById('myChart').getContext('2d');
   
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
      // 2
      labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
      // 3
      datasets: [{
        // 4
        label: 'Signups',
        // 5
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        // 6
        data: [ 350, 200, 220, 350, 450, 400, 300, 290, 210, 300 ],
      },
      {
        label: 'FTD',
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [ 400, 200, 200, 250, 270, 100, 450, 340, 150, 310 ],
      },
      {
        label: 'Earned',
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [ 250, 210, 100, 330, 400, 190, 370, 390, 410, 480 ],
        // 7
        hidden: true,
      }]
    },
  });
}

const app = () => {
  initChart();
};

app();