export function getTodayData(userName, dataType, previousDay) {
  const dataOneDay = {
    labels: [
      "1:00",
      "2:00",
      "3:00",
      "4:00",
      "5:00",
      "6:00",
      "7:00",
      "8:00",
      "9:00",
      "10:00",
      "11:00",
      "12:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
      "0:00"
    ],
    datasets: [
      {
        data: [...new Array(24)].map((e) => Math.random() * 100)
      }
    ]
  };

  const dataTwoDays = {
    labels: [
      "1:00",
      "2:00",
      "3:00",
      "4:00",
      "5:00",
      "6:00",
      "7:00",
      "8:00",
      "9:00",
      "10:00",
      "11:00",
      "12:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
      "0:00"
    ],
    datasets: [
      {
        label: "today",
        data: [...new Array(24)].map(() => Math.random() * 100)
      },
      {
        label: "yesterday",
        data: [...new Array(24)].map(() => Math.random() * 100)
      }
    ]
  };

  return previousDay ? dataTwoDays : dataOneDay;
}
export function getWeekData(userName, dataType, previousDay) {
  const dataOneWeekCost = {
    labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"],
    datasets: [
      {
        data: [...new Array(7)].map((e) => Math.random() * 100)
      }
    ]
  };
  const dataTwoWeeksCost = {
    labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"],
    datasets: [
      {
        label: "this Week",
        data: [...new Array(7)].map(() => Math.random() * 100)
      },
      {
        label: "previos week",
        data: [...new Array(7)].map(() => Math.random() * 100)
      }
    ]
  };

  const dataOneWeekItems = {
    labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"],
    datasets: [
      {
        data: [...new Array(7)].map(() => Math.round(Math.random() * 30))
      }
    ]
  };
  const dataTwoWeeksItems = {
    labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"],
    datasets: [
      {
        label: "this Week",
        data: [...new Array(7)].map(() => Math.round(Math.random() * 30))
      },
      {
        label: "previos week",
        data: [...new Array(7)].map(() => Math.round(Math.random() * 30))
      }
    ]
  };

  return dataType === "money-circulation"
    ? previousDay
      ? dataTwoWeeksCost
      : dataOneWeekCost
    : previousDay
    ? dataTwoWeeksItems
    : dataOneWeekItems;
}


export async function getDataFF(username) {
}