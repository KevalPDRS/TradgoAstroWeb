export const CustomerService = {
  getData() {
    return [
      {
        transactionType: "Wallet Credited By John Doe",
        taxID: "16107890",
        description: "lorem|9898989898|150.00|52147896",
        amount: "₹100",
        date: "2024-05-04",
        closingBalance: "₹300.00",
      },
      {
        transactionType: "Wallet Debited By Jane Smith",
        taxID: "47382179",
        description: "lorem|9898989898|150.00|52147896",
        amount: "₹100",
        date: "2024-05-04",
        closingBalance: "₹300.00",
      },
      {
        transactionType: "Wallet Credited By Alex Johnson",
        taxID: "47382179",
        description: "lorem|9898989898|150.00|52147896",
        amount: "₹100",
        date: "2024-05-04",
        closingBalance: "₹300.00",
      },
      {
        transactionType: "Wallet Credited By Emily Brown",
        taxID: "13083185",
        description: "lorem|9898989898|150.00|52147896",
        amount: "₹100",
        date: "2024-05-04",
        closingBalance: "₹300.00",
      },
      {
        transactionType: "Wallet Debited By Michael Davis",
        taxID: "13076469",
        description: "lorem|9898989898|150.00|52147896",
        amount: "₹100",
        date: "2024-05-04",
        closingBalance: "₹300.00",
      },
      {
        transactionType: "Wallet Debited By Sarah Wilson",
        taxID: "43286213",
        description: "lorem|9898989898|150.00|52147896",
        amount: "₹100",
        date: "2024-05-04",
        closingBalance: "₹300.00",
      },
      {
        transactionType: "Wallet Credited By David Lee",
        taxID: "11752563",
        description: "lorem|9898989898|150.00|52147896",
        amount: "₹100",
        date: "2024-05-04",
        closingBalance: "₹300.00",
      },
      {
        transactionType: "Wallet Debited By Amanda Taylor",
        taxID: "33517675",
        description: "lorem|9898989898|150.00|52147896",
        amount: "₹100",
        date: "2024-05-04",
        closingBalance: "₹300.00",
      },
      {
        transactionType: "Wallet Credited By Chris Anderson",
        taxID: "57671335",
        description: "lorem|9898989898|150.00|52147896",
        amount: "₹100",
        date: "2024-05-04",
        closingBalance: "₹300.00",
      },
      {
        transactionType: "Wallet Debited By Jessica Martinez",
        taxID: "42505704",
        description: "lorem|9898989898|150.00|52147896",
        amount: "₹100",
        date: "2024-05-04",
        closingBalance: "₹300.00",
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
