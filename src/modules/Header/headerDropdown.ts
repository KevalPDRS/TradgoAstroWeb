// data.ts
export interface Item {
  title: string;
  imageUrl: string;
  url: string;
}

export const items: Item[] = [
  {
    title: "My Profile",
    url: "/profile",
    imageUrl: "./../../../public/images/Home_dropdown/My_Profile_Icon.png",
  },
  {
    title: "Reports",
    url: "/reports",
    imageUrl: "./../../../public/images/Home_dropdown/Reports_Icon.png",
  },
  // {
  //   title: "24x7 Help & Support",
  //   url: "/",
  //   imageUrl: "./../../../public/images/Home_dropdown/Help_Tutorial_Icon.png",
  // },
  {
    title: "Order & Booking",
    url: "/orderAndBooking",
    imageUrl:
      "./../../../public/images/Home_dropdown/Order_And_Booking_Icon.png",
  },
  {
    title: "Your Business",
    // target: "_blank",
    url: "https://play.google.com/store/apps/details?id=com.tradgobusiness",
    imageUrl: "./../../../public/images/Home_dropdown/Your_Business_Icon.png",
  },
  {
    title: "Refer & Earn",
    url: "/referAndEarn",
    imageUrl: "./../../../public/images/Home_dropdown/Refer_And_Earn_Icon.png",
  },
  {
    title: "Complaint History",
    // url: "/complaintHistory",
    url: "/",
    imageUrl:
      "./../../../public/images/Home_dropdown/Complaint_History_Icon.png",
  },
  {
    title: "Help Tutorial",
    url: "/helpTutorial ",
    imageUrl: "./../../../public/images/Home_dropdown/Help_Tutorial_Icon.png",
  },
  // {
  //   title: "Rate & Review",
  //   url: "/",
  //   imageUrl: "./../../../public/images/Home_dropdown/Rate_And_Review_Icon.png",
  // },
  {
    title: "Logout",
    url: "/",
    imageUrl: "./../../../public/images/Home_dropdown/Logout_Icon.png",
  },
  // Add more items as needed
];
