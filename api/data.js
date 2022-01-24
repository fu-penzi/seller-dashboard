const users = [
    {
        id: 1,
        username: "william",
        password: "alamakota"
    },
    {
        id: 1,
        username: "bill",
        password: "alamakota"
    },
    {
        id: 2,
        username: "robert",
        password: "alamakota"
    }
];


const saleData = {
    "william": {
        "current-week": {
            false: {
                labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"],
                datasets: [
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    }
                ]
            },
            true: {
                labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"],
                datasets: [
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    },
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    }
                ]
            }
        },
        "next-week": {
            false: {
                labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"],
                datasets: [
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    }
                ]
            },
            true: {
                labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"],
                datasets: [
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    },
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    }
                ]
            }
        },
        "today": {
            false: {
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
                    "16:00"
                ],
                datasets: [
                    {
                        label: "today",
                        data: [...new Array(15)].map(() => Math.random() * 100)
                    }
                ]
            },
            true: {
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
                    "00:00"
                ],
                datasets: [
                    {
                        label: "today",
                        data: [...new Array(15)].map(() => Math.random() * 100)
                    },
                    {
                        label: "yesterday",
                        data: [...new Array(24)].map(() => Math.random() * 100)
                    }
                ]
            }
        }
    },
    "bill": {
        "current-week": {
            false: {
                labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"],
                datasets: [
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    }
                ]
            },
            true: {
                labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"],
                datasets: [
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    },
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    }
                ]
            }
        },
        "next-week": {
            false: {
                labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"],
                datasets: [
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    }
                ]
            },
            true: {
                labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"],
                datasets: [
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    },
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    }
                ]
            }
        },
        today: {
            false: {
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
                    "16:00"
                ],
                datasets: [
                    {
                        label: "today",
                        data: [...new Array(15)].map(() => Math.random() * 100)
                    }
                ]
            },
            true: {
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
                    "00:00"
                ],
                datasets: [
                    {
                        label: "today",
                        data: [...new Array(15)].map(() => Math.random() * 100)
                    },
                    {
                        label: "yesterday",
                        data: [...new Array(24)].map(() => Math.random() * 100)
                    }
                ]
            }
        }
    },
    "robert": {
        "currentweek": {
            false: {
                labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"],
                datasets: [
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    }
                ]
            },
            true: {
                labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"],
                datasets: [
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    },
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    }
                ]
            }
        },
        "next-week": {
            false: {
                labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"],
                datasets: [
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    }
                ]
            },
            true: {
                labels: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"],
                datasets: [
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    },
                    {
                        data: [...new Array(7)].map(() => Math.random() * 100)
                    }
                ]
            }
        },
        today: {
            false: {
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
                    "10:00"
                ],
                datasets: [
                    {
                        label: "today",
                        data: [...new Array(10)].map(() => Math.random() * 100)
                    }
                ]
            },
            true: {
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
                    "00:00"
                ],
                datasets: [
                    {
                        label: "today",
                        data: [...new Array(15)].map(() => Math.random() * 100)
                    },
                    {
                        label: "yesterday",
                        data: [...new Array(24)].map(() => Math.random() * 100)
                    }
                ]
            }
        }
    },

};

module.exports = {
    users: function(name, password) {

    },
    saleData: function(name){
        return saleData[name];
    }
}
