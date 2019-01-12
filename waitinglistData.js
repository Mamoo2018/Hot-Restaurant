// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var waitingArray = [
    {
      customerName: "Richard",
      customerEmail: "rich6ix@mamoo.com",
      phoneNumber: "000-000-0000",
      customerID: "rich6ix"
    }
  ];
  
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = waitingArray;