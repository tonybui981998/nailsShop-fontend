const menuData = [
  {
    title: "Kids from 3 - under 8 years old",
    options: [
      {
        name: "Kids Under 4 years old Manicure with Polish",
        time: 20,
        price: 15,
      },
      {
        name: "Kids Under 4 years old Pedicure with Polish",
        time: 15,
        price: 15,
      },
      { name: "Kid Pedicure With Polish", time: 20, price: 20 },
      { name: "Kids Manicure With Polish", time: 20, price: 20 },
      { name: "Kids Manicures with Gel", time: 25, price: 35 },
      { name: "Kid Pedicure With Gel", time: 25, price: 35 },
      { name: "Kids Manicure & Pedicure With Polish", time: 30, price: 35 },
      { name: "Kids Manicure & Pedicure with Gel from", time: 40, price: 65 },
    ],
  },
  {
    title: "Nail Art",
    options: [
      { name: "5 to 10 Different Colour", time: 10, price: 5 },
      { name: "Nail Art for 2 Nails (Minimum Price)", time: 10, price: 8 },
      { name: "Nail Art for 4 Nails (Minimum Price)", time: 15, price: 30 },
      { name: "Nail Art from 30$", time: 25, price: 30 },
      { name: "Chrome Nail", time: 10, price: 20 },
      {
        name: "French Tip with full Chrome Powder on top",
        time: 25,
        price: 35,
      },
      { name: "Full Chrome for hand and toes Nail", time: 25, price: 35 },
    ],
  },
  {
    title: "Basic Nail Service",
    options: [
      {
        name: "Remove Gel Colour (Booked with Gel Service Again)",
        time: 10,
        price: 5,
      },
      { name: "Basic Gel Manicure With Rubber Base Gel", time: 35, price: 55 },
      { name: "Basic Gel Pedicure", time: 25, price: 45 },
      { name: "Basic Manicure with Polish", time: 20, price: 30 },
      { name: "Basic Pedicure with Polish", time: 20, price: 30 },
      { name: "(ADD-ON) Extended Massage", time: 10, price: 15 },
    ],
  },
  {
    title: "Spa Nails Service",
    options: [
      { name: "Spa Gel Manicure With Rubber Base Gel", time: 45, price: 65 },
      { name: "Spa Gel Pedicure", time: 40, price: 70 },
      { name: "Spa Manicure Normal Polish", time: 30, price: 45 },
      { name: "Spa Pedicure Normal Polish", time: 40, price: 60 },
    ],
  },
  {
    title: "Deluxe Nail Service",
    options: [
      { name: "Deluxe Gel Manicure Rubber Base Gel", time: 60, price: 90 },
      { name: "Deluxe Gel Pedicure", time: 60, price: 95 },
      { name: "Deluxe Manicure Normal Polish", time: 50, price: 75 },
      { name: "Deluxe Pedicure Normal Polish", time: 60, price: 85 },
    ],
  },
  {
    title: "For Men",
    options: [
      { name: "Basic Male Pedicure With No Colour", time: 20, price: 25 },
      { name: "Basic Male Manicure With No Colour", time: 20, price: 25 },
      { name: "Spa Male Pedicure With No Colour", time: 30, price: 55 },
      { name: "Spa Male Manicure With No Colour", time: 30, price: 40 },
    ],
  },
  {
    title: "Builder Gel (BIAB)",
    options: [
      {
        name: "Builder Gel On Natural Nails (Own Length)",
        time: 50,
        price: 80,
      },
      { name: "Builder Gel Infill (Under 3 Weeks)", time: 55, price: 80 },
      { name: "Builder Gel Infill (Over 3 Weeks)", time: 55, price: 85 },
    ],
  },
  {
    title: "Gel Extension",
    options: [
      { name: "Gel X Extension - Short / Medium", time: 55, price: 85 },
      { name: "Gel X Extension - Long", time: 55, price: 95 },
      { name: "Deluxe Gel X Extension", time: 75, price: 120 }, // 1 hour 15 mins → 75 mins
    ],
  },
  {
    title: "Polygel",
    options: [
      { name: "Polygel Extension with Tip", time: 55, price: 95 },
      { name: "Polygel On Natural Nail (Own Length)", time: 50, price: 80 },
      { name: "Polygel Infill Under 3 Weeks", time: 55, price: 80 },
      { name: "Polygel Infill Over 3 Weeks", time: 55, price: 85 },
    ],
  },
  {
    title: "Dipping Powder (SNS) Service",
    options: [
      { name: "Dipping Powder On Natural Nails", time: 40, price: 65 },
      { name: "Deluxe Dipping Powder on Natural Nails", time: 70, price: 95 }, // 1 hour 10 mins → 70 mins
    ],
  },
  {
    title: "Remove Service",
    options: [
      { name: "Remove Gel Polish (Without cut, shape)", time: 25, price: 20 },
      { name: "Remove Builder Gel (Without cut, shape)", time: 30, price: 35 },
      { name: "Remove Acrylic (Without cut, shape)", time: 35, price: 35 },
    ],
  },
  {
    title: "Fix Nails",
    options: [
      { name: "Fix Nails Gel Colour Under 10 days", time: 15, price: null }, // Không có giá cố định
      { name: "Fix One Nail With Tip", time: 15, price: 8 },
      { name: "Fix 2 Nails with Tip on Gel Manicure", time: 15, price: 15 },
    ],
  },
];

export default menuData;
