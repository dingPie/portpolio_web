export const data = {
  labels: [  '체력', '실행력', '창의력', '사고력','집중력','창의력',],
  datasets: [{
    label: 'Status',
    data: [5, 5, 7, 4, 5, 6],
    fill: true,
    tension: 0.1,
    responsive: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    // pointBorderColor: '#fff',
    // pointHoverBackgroundColor: '#fff',
    // pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  scale: {
      r: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
          maxTicksLimit: 10,
          color: 'blue'
        },
        grid: {
          color: "red",
        }
    }
  },

};