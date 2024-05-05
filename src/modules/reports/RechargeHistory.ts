export const RechargeHistory = {
  getData() {
    return [
      {
        id: 1000,
        date: "05-02-2024",
        description: "Recharge of Vodafone Mobile 9696969696",
        orderId: 5286977475,
        status: "Success",
        amount: 150,
      },
      {
        id: 1001,
        date: "04-02-2024",
        description: "Booking of Delhi to Sydney flight",
        orderId: 5136907172,
        status: "Failure",
        amount: 980,
      },
      {
        id: 1002,
        date: "03-02-2024",
        description: "Bill Payment of Vodafone Mobile 9898989898",
        orderId: 1072317951,
        status: "Pending",
        amount: 99,
      },
      {
        id: 1003,
        date: "05-02-2024",
        description: "Recharge of Vodafone Mobile 9696969696",
        orderId: 5286977475,
        status: "Success",
        amount: 150,
      },
      {
        id: 1004,
        date: "04-02-2024",
        description: "Booking of Delhi to Sydney flight",
        orderId: 5136907172,
        status: "Failure",
        amount: 980,
      },
      {
        id: 1005,
        date: "03-02-2024",
        description: "Bill Payment of Vodafone Mobile 9898989898",
        orderId: 1072317951,
        status: "Pending",
        amount: 99,
      },
      {
        id: 1006,
        date: "05-02-2024",
        description: "Recharge of Vodafone Mobile 9696969696",
        orderId: 5286977475,
        status: "Success",
        amount: 150,
      },
      {
        id: 1007,
        date: "04-02-2024",
        description: "Booking of Delhi to Sydney flight",
        orderId: 5136907172,
        status: "Failure",
        amount: 980,
      },
      {
        id: 1008,
        date: "03-02-2024",
        description: "Bill Payment of Vodafone Mobile 9898989898",
        orderId: 1072317951,
        status: "Pending",
        amount: 99,
      },
      {
        id: 1009,
        date: "05-02-2024",
        description: "Recharge of Vodafone Mobile 9696969696",
        orderId: 5286977475,
        status: "Success",
        amount: 150,
      },
      {
        id: 1010,
        date: "04-02-2024",
        description: "Booking of Delhi to Sydney flight",
        orderId: 5136907172,
        status: "Failure",
        amount: 980,
      },
      {
        id: 1011,
        date: "03-02-2024",
        description: "Bill Payment of Vodafone Mobile 9898989898",
        orderId: 1072317951,
        status: "Pending",
        amount: 99,
      },
      {
        id: 1012,
        date: "05-02-2024",
        description: "Recharge of Vodafone Mobile 9696969696",
        orderId: 5286977475,
        status: "Success",
        amount: 150,
      },
      {
        id: 1013,
        date: "04-02-2024",
        description: "Booking of Delhi to Sydney flight",
        orderId: 5136907172,
        status: "Failure",
        amount: 980,
      },
      {
        id: 1014,
        date: "03-02-2024",
        description: "Bill Payment of Vodafone Mobile 9898989898",
        orderId: 1072317951,
        status: "Pending",
        amount: 99,
      },
    ];
  },

  getCustomersSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  },

  getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  },

  getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  },

  getCustomersXLarge() {
    return Promise.resolve(this.getData());
  },

  getCustomers(params) {
    const queryParams = params
      ? Object.keys(params)
          .map(
            (k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
          )
          .join("&")
      : "";

    return fetch(
      "https://www.primefaces.org/data/customers?" + queryParams
    ).then((res) => res.json());
  },
};
