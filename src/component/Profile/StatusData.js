import { NONAME } from "dns";

export const data = {
  labels: [  '체력', '실행력', '창의력', '사고력','집중력','사교력',],
  datasets: [{
    label: 'Status',
    data: [5, 8, 7, 6, 4, 6],
    fill: true,
    tension: 0,
    responsive: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
  }]
};

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  scale: {
      r: {
        min: 0,
        max: 10,

        pointLabels: {
          font: {
            family: "Neo둥근모Code",
            // size: 30,
          }
        },

        ticks: {
          stepSize: 2,
          maxTicksLimit: 10,
          font: {
            size: 16,
            family: "Neo둥근모Code"
        }
        },

    },
  },
  plugins: {
    legend: {
        labels: {
            font: {
               size: 0,
               family: "Neo둥근모Code"
            }
        }
    }
}
};

export const explData = [
  { label: '체력', expl: '쉽게 지치지 않습니다. 스포츠는 잘 못합니다.' },
  { label: '실행력', expl: '목표가 있다면 즉시 실행에 옮깁니다. 단, 돈이 드는건 조금 망설입니다' },
  { label: '창의력', expl: '한가지 일을 다양한 시야로 해석할 수 있습니다' },
  { label: '사고력', expl: '논리적, 인문학적인 사고가 두루 발달되어 있습니다' },
  { label: '집중력', expl: '비교적 집중력이 떨어집니다. 다만 맡은 일은 책임감있게 마무리합니다' },
  { label: '사교력', expl: '공적인 관계에서 사람을 잘 대합니다. 사적인 관계는 낯가림이 있습니다.' },
]

