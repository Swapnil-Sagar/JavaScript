let user = {
  name: "Swapnil",
  address: {
    personal: {
      city: "Jamshedpur",
      area: "Kadma",
    },
    office: {
      city: "Pune",
      area: {
        landmark: "Magarpatta",
      },
    },
  },
};

let finalObj = {};

let magic = (obj, parent) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      magic(obj[key], parent + "_" + key);
    } else {
      finalObj[parent + "_" + key] = obj[key];
    }
  }
};

magic(user, "user");
