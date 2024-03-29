const endpoint = "https://vms-alb.tractorjunction.in/graphql"; // Replace with your GraphQL endpoint

// fetch(endpoint, requestOptions)
//   .then(response => response.json())
//   .then(data => {
//     // Handle the response data here
//     console.log('Mutation response:', data)
//   })
//   .catch(error => {
//     console.error('Error:', error)
//   })

const LeadsMakeAndModelData = [
  {
    filter: { regNo: { eq: "2021475" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8fc" },
    },
  },
  {
    filter: { regNo: { eq: "2412017" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1d95a" },
    },
  },
  {
    filter: { regNo: { eq: "5752014" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d9d0" },
    },
  },
  {
    filter: { regNo: { eq: "265" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1da2f" },
    },
  },
  {
    filter: { regNo: { eq: "4752015" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d9bc" },
    },
  },
  {
    filter: { regNo: { eq: "575" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d9d0" },
    },
  },
  {
    filter: { regNo: { eq: "735" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1dbdb" },
    },
  },
  {
    filter: { regNo: { eq: "5038" } },
    set: {
      vehicleBrand: { id: "0x1d8ad" },
      vehicleModel: { id: "0x1d91c" },
    },
  },
  {
    filter: { regNo: { eq: "485" } },
    set: {
      vehicleBrand: { id: "0x1d8a8" },
      vehicleModel: { id: "0x1d927" },
    },
  },
  {
    filter: { regNo: { eq: "36002" } },
    set: {
      vehicleBrand: { id: "0x1d8c0" },
      vehicleModel: { id: "0x1da94" },
    },
  },
  {
    filter: { regNo: { eq: "1035" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1dc13" },
    },
  },
  {
    filter: { regNo: { eq: "5752020" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d9d0" },
    },
  },
  {
    filter: { regNo: { eq: "20151035" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1da07" },
    },
  },
  {
    filter: { regNo: { eq: "47512" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d9bc" },
    },
  },
  {
    filter: { regNo: { eq: "181035" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1d978" },
    },
  },
  {
    filter: { regNo: { eq: "585" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1db60" },
    },
  },
  {
    filter: { regNo: { eq: "475" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d907" },
    },
  },
  {
    filter: { regNo: { eq: "43517589" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8f7" },
    },
  },
  {
    filter: { regNo: { eq: "51621363" } },
    set: {
      vehicleBrand: { id: "0x1d8c0" },
      vehicleModel: { id: "0x1d9a3" },
    },
  },
  {
    filter: { regNo: { eq: "MH44Z1836" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1dae5" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d932" },
    },
  },
  {
    filter: { regNo: { eq: "MH28BK0433" } },
    set: {
      vehicleBrand: { id: "0x1d8a4" },
      vehicleModel: { id: "0x1db48" },
      tempVehicleBrand: { id: "0x1d8a4" },
      tempVehicleModel: { id: "0x1db48" },
    },
  },
  {
    filter: { regNo: { eq: "MH18BX1893" } },
    set: {
      vehicleBrand: { id: "0x1d8a3" },
      vehicleModel: { id: "0x1da0f" },
      tempVehicleBrand: { id: "0x1d8a3" },
      tempVehicleModel: { id: "0x1da0f" },
    },
  },
  {
    filter: { regNo: { eq: "MH11DA3076" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1d8f6" },
      tempVehicleBrand: { id: "0x1d8aa" },
      tempVehicleModel: { id: "0x1da9b" },
    },
  },
  {
    filter: { regNo: { eq: "MH17CM8339" } },
    set: {
      vehicleBrand: { id: "0x1d8a3" },
      vehicleModel: { id: "0x1da0f" },
      tempVehicleBrand: { id: "0x1d8a3" },
      tempVehicleModel: { id: "0x1d8cc" },
    },
  },
  {
    filter: { regNo: { eq: "RJ09RD7555" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8f7" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d8f7" },
    },
  },
  {
    filter: { regNo: { eq: "RJ35RB0359" } },
    set: {
      vehicleBrand: { id: "0x1d8a8" },
      vehicleModel: { id: "0x1db50" },
      tempVehicleBrand: { id: "0x1d8a8" },
      tempVehicleModel: { id: "0x1db50" },
    },
  },
  {
    filter: { regNo: { eq: "RJ09RE0219" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8f7" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d8f7" },
    },
  },
  {
    filter: { regNo: { eq: "MP70A9663" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8f7" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d8f7" },
    },
  },
  {
    filter: { regNo: { eq: "MP70A9379" } },
    set: {
      vehicleBrand: { id: "0x1d8a8" },
      vehicleModel: { id: "0x1db50" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d8f7" },
    },
  },
  {
    filter: { regNo: { eq: "RJ28RC9372" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1db43" },
      tempVehicleBrand: { id: "0x1d8b7" },
      tempVehicleModel: { id: "0x1da7c" },
    },
  },
  {
    filter: { regNo: { eq: "RJ28RC9254" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1da0c" },
      tempVehicleBrand: { id: "0x1d8b7" },
      tempVehicleModel: { id: "0x1da0c" },
    },
  },
  {
    filter: { regNo: { eq: "RJ28RD1369" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1db60" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1db60" },
    },
  },
  {
    filter: { regNo: { eq: "RJ06RD1657" } },
    set: {
      vehicleBrand: { id: "0x1d8a6" },
      vehicleModel: { id: "0x1db1e" },
      tempVehicleBrand: { id: "0x1d8a6" },
      tempVehicleModel: { id: "0x1da83" },
    },
  },
  {
    filter: { regNo: { eq: "RJ30RB0511" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d9e8" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d9e8" },
    },
  },
  {
    filter: { regNo: { eq: "MH35AR8192" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1d943" },
      tempVehicleBrand: { id: "0x1d8aa" },
      tempVehicleModel: { id: "0x1d943" },
    },
  },
  {
    filter: { regNo: { eq: "TEATING1" } },
    set: {
      vehicleBrand: { id: "0x1d8a9" },
      vehicleModel: { id: "0x1db8d" },
      tempVehicleBrand: { id: "0x1d8ae" },
      tempVehicleModel: { id: "0x1da25" },
    },
  },
  {
    filter: { regNo: { eq: "TESTING2" } },
    set: {
      vehicleBrand: { id: "0x1d8b0" },
      vehicleModel: { id: "0x1d975" },
      tempVehicleBrand: { id: "0x1d8b0" },
      tempVehicleModel: { id: "0x1d975" },
    },
  },
  {
    filter: { regNo: { eq: "MH30BL3931" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1dc14" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1dc14" },
    },
  },
  {
    filter: { regNo: { eq: "MH12QM1346" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1da20" },
      tempVehicleBrand: { id: "0x1d8aa" },
      tempVehicleModel: { id: "0x1da20" },
    },
  },
  {
    filter: { regNo: { eq: "RJ22RB6064" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1d909" },
    },
  },
  {
    filter: { regNo: { eq: "RJ22RC0438" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1db2c" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d8f7" },
    },
  },
  {
    filter: { regNo: { eq: "RJ01RB5841" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8f7" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d8f7" },
    },
  },
  {
    filter: { regNo: { eq: "MP50ZA7628" } },
    set: {
      vehicleBrand: { id: "0x1d8a4" },
      vehicleModel: { id: "0x1db48" },
      tempVehicleBrand: { id: "0x1d8a4" },
      tempVehicleModel: { id: "0x1db87" },
    },
  },
  {
    filter: { regNo: { eq: "RJ10RC2111" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d907" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d907" },
    },
  },
  {
    filter: { regNo: { eq: "MH37AD4104" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1dbdb" },
      tempVehicleBrand: { id: "0x1d8aa" },
      tempVehicleModel: { id: "0x1dbdb" },
    },
  },
  {
    filter: { regNo: { eq: "RJ34RB7114" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1db43" },
    },
  },
  {
    filter: { regNo: { eq: "RJ35RB3464" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8f7" },
    },
  },
  {
    filter: { regNo: { eq: "RJ07RD8423" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1da91" },
    },
  },
  {
    filter: { regNo: { eq: "RJ24RA7078" } },
    set: {
      vehicleBrand: { id: "0x1d8c0" },
      vehicleModel: { id: "0x1dbaf" },
      tempVehicleBrand: { id: "0x1d8c0" },
      tempVehicleModel: { id: "0x1d8d2" },
    },
  },
  {
    filter: { regNo: { eq: "MH50L9760" } },
    set: {
      vehicleBrand: { id: "0x1d8a3" },
      vehicleModel: { id: "0x1d8f1" },
      tempVehicleBrand: { id: "0x1d8a3" },
      tempVehicleModel: { id: "0x1d8f1" },
    },
  },
  {
    filter: { regNo: { eq: "RJ27RC3017" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8fc" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d8fc" },
    },
  },
  {
    filter: { regNo: { eq: "TESTING3" } },
    set: {
      vehicleBrand: { id: "0x1d8a9" },
      vehicleModel: { id: "0x1db8d" },
      tempVehicleBrand: { id: "0x1d8a8" },
      tempVehicleModel: { id: "0x1dac5" },
    },
  },
  {
    filter: { regNo: { eq: "RJ32RB0355" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d907" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d8fc" },
    },
  },
  {
    filter: { regNo: { eq: "RJ27RC3130" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1dc13" },
      tempVehicleBrand: { id: "0x1d8b7" },
      tempVehicleModel: { id: "0x1da07" },
    },
  },
  {
    filter: { regNo: { eq: "RJ30RB1581" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8f7" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d8f7" },
    },
  },
  {
    filter: { regNo: { eq: "RJ30RB1292" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8f7" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1db3e" },
    },
  },
  {
    filter: { regNo: { eq: "RJ12RB2946" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1da0c" },
      tempVehicleBrand: { id: "0x1d8b7" },
      tempVehicleModel: { id: "0x1d95a" },
    },
  },
  {
    filter: { regNo: { eq: "RJ30RB1130" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1dc13" },
      tempVehicleBrand: { id: "0x1d8b7" },
      tempVehicleModel: { id: "0x1dc13" },
    },
  },
  {
    filter: { regNo: { eq: "RJ35RB1266" } },
    set: {
      vehicleBrand: { id: "0x1d8a8" },
      vehicleModel: { id: "0x1db32" },
      tempVehicleBrand: { id: "0x1d8a8" },
      tempVehicleModel: { id: "0x1db32" },
    },
  },
  {
    filter: { regNo: { eq: "RJ06RD6350" } },
    set: {
      vehicleBrand: { id: "0x1d8a6" },
      vehicleModel: { id: "0x1d905" },
      tempVehicleBrand: { id: "0x1d8a6" },
      tempVehicleModel: { id: "0x1d905" },
    },
  },
  {
    filter: { regNo: { eq: "RJ51RB1225" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1da0c" },
      tempVehicleBrand: { id: "0x1d8b7" },
      tempVehicleModel: { id: "0x1d9b3" },
    },
  },
  {
    filter: { regNo: { eq: "RJ09RE5534" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d907" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d8fc" },
    },
  },
  {
    filter: { regNo: { eq: "RJ18RC3612" } },
    set: {
      vehicleBrand: { id: "0x1d8ad" },
      vehicleModel: { id: "0x1d911" },
      tempVehicleBrand: { id: "0x1d8ad" },
      tempVehicleModel: { id: "0x1d911" },
    },
  },
  {
    filter: { regNo: { eq: "RJ21RK8834" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8f7" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1db3e" },
    },
  },
  {
    filter: { regNo: { eq: "RJ07RF6827" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d907" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d8fc" },
    },
  },
  {
    filter: { regNo: { eq: "RJ05RD5133" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1da0c" },
      tempVehicleBrand: { id: "0x1d8b7" },
      tempVehicleModel: { id: "0x1d95a" },
    },
  },
  {
    filter: { regNo: { eq: "RJ25RC7050" } },
    set: {
      vehicleBrand: { id: "0x1d8a4" },
      vehicleModel: { id: "0x1da8c" },
      tempVehicleBrand: { id: "0x1d8a4" },
      tempVehicleModel: { id: "0x1db4d" },
    },
  },
  {
    filter: { regNo: { eq: "RJ52RA4314" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1da0c" },
      tempVehicleBrand: { id: "0x1d8b7" },
      tempVehicleModel: { id: "0x1d9b3" },
    },
  },
  {
    filter: { regNo: { eq: "RJ48RA5353" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d9d0" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d9d0" },
    },
  },
  {
    filter: { regNo: { eq: "RJ17RC8736" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8f7" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d8f7" },
    },
  },
  {
    filter: { regNo: { eq: "RJ04RC5887" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1dbb6" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1dbb6" },
    },
  },
  {
    filter: { regNo: { eq: "MP51ZA4238" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8f8" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d8f7" },
    },
  },
  {
    filter: { regNo: { eq: "MP50AA5754" } },
    set: {
      vehicleBrand: { id: "0x1d8a4" },
      vehicleModel: { id: "0x1db48" },
      tempVehicleBrand: { id: "0x1d8a4" },
      tempVehicleModel: { id: "0x1db87" },
    },
  },
  {
    filter: { regNo: { eq: "MP11ZB4036" } },
    set: {
      vehicleBrand: { id: "0x1d8a8" },
      vehicleModel: { id: "0x1d927" },
      tempVehicleBrand: { id: "0x1d8a8" },
      tempVehicleModel: { id: "0x1d927" },
    },
  },
  {
    filter: { regNo: { eq: "MH11CW4316" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1dbe5" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1dbe5" },
    },
  },
  {
    filter: { regNo: { eq: "MH19EA8112" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1d8d3" },
      tempVehicleBrand: { id: "0x1d8aa" },
      tempVehicleModel: { id: "0x1d8d3" },
    },
  },
  {
    filter: { regNo: { eq: "MH29BV6704" } },
    set: {
      vehicleBrand: { id: "0x1d8b4" },
      vehicleModel: { id: "0x1dba5" },
      tempVehicleBrand: { id: "0x1d8b4" },
      tempVehicleModel: { id: "0x1db8c" },
    },
  },
  {
    filter: { regNo: { eq: "MH29BV5989" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d9d0" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d9d0" },
    },
  },
  {
    filter: { regNo: { eq: "MH19EA0793" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1d8d3" },
      tempVehicleBrand: { id: "0x1d8aa" },
      tempVehicleModel: { id: "0x1d8d3" },
    },
  },
  {
    filter: { regNo: { eq: "MH19CZ9154" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d9d0" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d9d0" },
    },
  },
  {
    filter: { regNo: { eq: "MH22AW4323" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1d8f6" },
      tempVehicleBrand: { id: "0x1d8aa" },
      tempVehicleModel: { id: "0x1d8f6" },
    },
  },
  {
    filter: { regNo: { eq: "MH11DH2594" } },
    set: {
      vehicleBrand: { id: "0x1d8b4" },
      vehicleModel: { id: "0x1dbc5" },
      tempVehicleBrand: { id: "0x1d8b4" },
      tempVehicleModel: { id: "0x1dba5" },
    },
  },
  {
    filter: { regNo: { eq: "MH11DH5910" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d9d0" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d9d0" },
    },
  },
  {
    filter: { regNo: { eq: "MH41BE9848" } },
    set: {
      vehicleBrand: { id: "0x1d8a3" },
      vehicleModel: { id: "0x1da0f" },
      tempVehicleBrand: { id: "0x1d8a3" },
      tempVehicleModel: { id: "0x1d8cc" },
    },
  },
  {
    filter: { regNo: { eq: "MH13DY1134" } },
    set: {
      vehicleBrand: { id: "0x1d8ad" },
      vehicleModel: { id: "0x1d9c8" },
      tempVehicleBrand: { id: "0x1d8ad" },
      tempVehicleModel: { id: "0x1d9c8" },
    },
  },
  {
    filter: { regNo: { eq: "RJ40RA4011" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8e5" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d8e5" },
    },
  },
  {
    filter: { regNo: { eq: "RJ12RA9282" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1dc13" },
      tempVehicleBrand: { id: "0x1d8b7" },
      tempVehicleModel: { id: "0x1dc13" },
    },
  },
  {
    filter: { regNo: { eq: "RJ03RB5482" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8f7" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d8f7" },
    },
  },
  {
    filter: { regNo: { eq: "RJ27RB7848" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1dbdb" },
      tempVehicleBrand: { id: "0x1d8aa" },
      tempVehicleModel: { id: "0x1dbdb" },
    },
  },
  {
    filter: { regNo: { eq: "RJ09RE0054" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1db43" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1db43" },
    },
  },
  {
    filter: { regNo: { eq: "RJ06RD5564" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1d973" },
      tempVehicleBrand: { id: "0x1d8aa" },
      tempVehicleModel: { id: "0x1d973" },
    },
  },
  {
    filter: { regNo: { eq: "MH25AW2446" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1daa2" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1daa2" },
    },
  },
  {
    filter: { regNo: { eq: "MP51AB3332" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1d943" },
      tempVehicleBrand: { id: "0x1d8aa" },
      tempVehicleModel: { id: "0x1d961" },
    },
  },
  {
    filter: { regNo: { eq: "MP52ZA4718" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1dbdb" },
      tempVehicleBrand: { id: "0x1d8aa" },
      tempVehicleModel: { id: "0x1dbdb" },
    },
  },
  {
    filter: { regNo: { eq: "MP52ZA2881" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1dbdb" },
      tempVehicleBrand: { id: "0x1d8aa" },
      tempVehicleModel: { id: "0x1daa9" },
    },
  },
  {
    filter: { regNo: { eq: "MP54ZA2754" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d9e8" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d9e8" },
    },
  },
  {
    filter: { regNo: { eq: "TS18H3757" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d907" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d9bc" },
    },
  },
  {
    filter: { regNo: { eq: "TS18H3892" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d907" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d9bc" },
    },
  },
  {
    filter: { regNo: { eq: "MP28ZB3609" } },
    set: {
      vehicleBrand: { id: "0x1d8ad" },
      vehicleModel: { id: "0x1dc0f" },
      tempVehicleBrand: { id: "0x1d8ad" },
      tempVehicleModel: { id: "0x1dc0f" },
    },
  },
  {
    filter: { regNo: { eq: "RJ29RC0463" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d907" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d9bc" },
    },
  },
  {
    filter: { regNo: { eq: "RJ27RC2599" } },
    set: {
      vehicleBrand: { id: "0x1d8a8" },
      vehicleModel: { id: "0x1db50" },
      tempVehicleBrand: { id: "0x1d8a8" },
      tempVehicleModel: { id: "0x1d9eb" },
    },
  },
  {
    filter: { regNo: { eq: "RJ30RB1956" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1dbdb" },
      tempVehicleBrand: { id: "0x1d8aa" },
      tempVehicleModel: { id: "0x1dbdb" },
    },
  },
  {
    filter: { regNo: { eq: "RJ05RC1094" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1da07" },
      tempVehicleBrand: { id: "0x1d8b7" },
      tempVehicleModel: { id: "0x1da07" },
    },
  },
  {
    filter: { regNo: { eq: "RJ34RB2291" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1da0c" },
      tempVehicleBrand: { id: "0x1d8b7" },
      tempVehicleModel: { id: "0x1da0c" },
    },
  },
  {
    filter: { regNo: { eq: "RJ25RC1881" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d9bc" },
    },
  },
  {
    filter: { regNo: { eq: "RJ11RA7735" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8f7" },
    },
  },
  {
    filter: { regNo: { eq: "JON51" } },
    set: {
      vehicleBrand: { id: "0x1d8ad" },
      vehicleModel: { id: "0x1d911" },
    },
  },
  {
    filter: { regNo: { eq: "RJ11RA9861" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d907" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d9bc" },
    },
  },
  {
    filter: { regNo: { eq: "RJ34RB1992" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1da07" },
    },
  },
  {
    filter: { regNo: { eq: "RJ34RB4233" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d907" },
    },
  },
  {
    filter: { regNo: { eq: "RJ09RE3703" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1daa9" },
      tempVehicleBrand: { id: "0x1d8aa" },
      tempVehicleModel: { id: "0x1daa9" },
    },
  },
  {
    filter: { regNo: { eq: "RJ34RA5797" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1dbb6" },
    },
  },
  {
    filter: { regNo: { eq: "RJ27RC0612" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1dc13" },
      tempVehicleBrand: { id: "0x1d8b7" },
      tempVehicleModel: { id: "0x1dc13" },
    },
  },
  {
    filter: { regNo: { eq: "RJ22RC0568" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d907" },
    },
  },
  {
    filter: { regNo: { eq: "RJ30RA5439" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d9bc" },
    },
  },
  {
    filter: { regNo: { eq: "RJ22RA6590" } },
    set: {
      vehicleBrand: { id: "0x1d8a3" },
      vehicleModel: { id: "0x1da0f" },
    },
  },
  {
    filter: { regNo: { eq: "RJ745SO" } },
    set: {
      vehicleBrand: { id: "0x1d8a6" },
      vehicleModel: { id: "0x1db1e" },
    },
  },
  {
    filter: { regNo: { eq: "MP11AE4658" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1d8f6" },
      tempVehicleBrand: { id: "0x1d8aa" },
      tempVehicleModel: { id: "0x1daa0" },
    },
  },
  {
    filter: { regNo: { eq: "RJ09RD8138" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d9bc" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d9bc" },
    },
  },
  {
    filter: { regNo: { eq: "MP45ZA9485" } },
    set: {
      vehicleBrand: { id: "0x1d8a8" },
      vehicleModel: { id: "0x1d927" },
      tempVehicleBrand: { id: "0x1d8a8" },
      tempVehicleModel: { id: "0x1d927" },
    },
  },
  {
    filter: { regNo: { eq: "MP14ZA8465" } },
    set: {
      vehicleBrand: { id: "0x1d8aa" },
      vehicleModel: { id: "0x1dbdb" },
      tempVehicleBrand: { id: "0x1d8aa" },
      tempVehicleModel: { id: "0x1dbdb" },
    },
  },
  {
    filter: { regNo: { eq: "RJ22RC0276" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8f7" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1d8f8" },
    },
  },
  {
    filter: { regNo: { eq: "RJ15RB5001" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1d95a" },
      tempVehicleBrand: { id: "0x1d8b7" },
      tempVehicleModel: { id: "0x1d95a" },
    },
  },
  {
    filter: { regNo: { eq: "RJ10RB8326" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1d978" },
      tempVehicleBrand: { id: "0x1d8b7" },
      tempVehicleModel: { id: "0x1da07" },
    },
  },
  {
    filter: { regNo: { eq: "RJ34RB4043" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1da07" },
    },
  },
  {
    filter: { regNo: { eq: "RJ09RE3742" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8f7" },
      tempVehicleBrand: { id: "0x1d8bf" },
      tempVehicleModel: { id: "0x1db3e" },
    },
  },
  {
    filter: { regNo: { eq: "RJ23RB9294" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1dbb6" },
    },
  },
  {
    filter: { regNo: { eq: "RJ23RD1726" } },
    set: {
      vehicleBrand: { id: "0x1d8bf" },
      vehicleModel: { id: "0x1d8f7" },
    },
  },
  {
    filter: { regNo: { eq: "RJ27RC1542" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1dc13" },
    },
  },
  {
    filter: { regNo: { eq: "RJ31RC2036" } },
    set: {
      vehicleBrand: { id: "0x1d8a8" },
      vehicleModel: { id: "0x1d927" },
    },
  },
  {
    filter: { regNo: { eq: "RJ05RC0175" } },
    set: {
      vehicleBrand: { id: "0x1d8a3" },
      vehicleModel: { id: "0x1d8cc" },
    },
  },
  {
    filter: { regNo: { eq: "RJ26RC6663" } },
    set: {
      vehicleBrand: { id: "0x1d8b7" },
      vehicleModel: { id: "0x1d9a9" },
    },
  },
  {
    filter: { regNo: { eq: "RJ13RE0269" } },
    set: {
      vehicleBrand: { id: "0x1d8a4" },
      vehicleModel: { id: "0x1db48" },
    },
  },
];

console.log(LeadsMakeAndModelData.length);
LeadsMakeAndModelData?.slice(0, 1).map((i) => {
  const mutation = `
    mutation MyMutation($input: UpdateVehicleInput!) {
      updateVehicle(input: $input) {
        vehicle {
          vehicleBrand {
            name
            id
          }
          vehicleModel {
            name
            id
          }
          tempVehicleBrand {
            id
            name
          }
          tempVehicleModel {
            id
            name
          }
        }
      }
    }`;

  console.log(JSON.stringify(i));
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add any additional headers here, such as authorization if required
    },
    body: JSON.stringify({
      query: mutation,
      variables: { input: i }, // Corrected spelling
    }),
  };
  fetch(endpoint, requestOptions)
    .then((res) => res.json())
    .then((res) => console.log("res returned:", JSON.stringify(res, null, 2)));
});
