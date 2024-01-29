import fs from "fs";
const response = {
  data: {
    queryLead: [
      {
        id: "0x27d9",
        vehicle: {
          make: "ACE",
          regNo: "RJ01RA2345",
          model: "DI 7575",
          id: "0x27da",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ae",
          },
          vehicleModel: {
            id: "0x1db66",
          },
        },
      },
      {
        id: "0x28dc",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ12RB1675",
          model: "275 DI TU XP Plus",
          id: "0x28dd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db3e",
          },
        },
      },
      {
        id: "0x28e3",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ40RA6795",
          model: "1035 DI MAHA SHAKTI",
          id: "0x28e2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x28e9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ04RC8433",
          model: "265 DI XP Plus",
          id: "0x28ea",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da2f",
          },
        },
      },
      {
        id: "0x28ee",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RB9479",
          model: "475 DI",
          id: "0x28ef",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x28f4",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC8098",
          model: "585 DI XP Plus",
          id: "0x28f3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0x28f5",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "RJ46RB7060",
          model: "3032 Nx",
          id: "0x28f6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1d9a3",
          },
        },
      },
      {
        id: "0x28f8",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ09RD2994",
          model: "742 FE",
          id: "0x28f9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d9fc",
          },
        },
      },
      {
        id: "0x28fc",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ26RB2739",
          model: "744 XM",
          id: "0x28fd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d966",
          },
        },
      },
      {
        id: "0x28ff",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RB9962",
          model: "475 DI",
          id: "0x28fe",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x2902",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ20RB5170",
          model: "DI 42 RX",
          id: "0x2903",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d939",
          },
        },
      },
      {
        id: "0x2909",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ39RA5076",
          model: "275 DI XP Plus",
          id: "0x290a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x290c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ30RB1322",
          model: "275 DI XP Plus",
          id: "0x290d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x290f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ30RB1527",
          model: "275 DI XP Plus",
          id: "0x2910",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x2914",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ30RB1526",
          model: "275 DI XP Plus",
          id: "0x2915",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x291c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ30RB1576",
          model: "275 DI XP Plus",
          id: "0x291d",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x2920",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ12RB1047",
          model: "1035 DI MAHA SHAKTI",
          id: "0x2921",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI MAHA SHAKTI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x2923",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC8099",
          model: "275 DI XP Plus",
          id: "0x2924",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x2928",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC8306",
          model: "575 DI XP Plus",
          id: "0x2929",
          tempMake: "MAHINDRA",
          tempModel: "575 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x292a",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ08RC2823",
          model: "Champion XP 41 Plus",
          id: "0x292b",
          tempMake: "FARMTRAC",
          tempModel: "Champion XP 41 Plus",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d953",
          },
        },
      },
      {
        id: "0x292d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RD0464",
          model: "275 DI XP Plus",
          id: "0x292e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x2931",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ17RC3250",
          model: "744 XM",
          id: "0x2932",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d966",
          },
        },
      },
      {
        id: "0x2934",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ07RF2555",
          model: "575 DI XP Plus",
          id: "0x2935",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x2937",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ49RB6965",
          model: "45",
          id: "0x2938",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x2939",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RA7794",
          model: "475 DI",
          id: "0x293a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x293c",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ29RB9064",
          model: "241 DI MAHA SHAKTI",
          id: "0x293e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x2944",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ19RG9720",
          model: "YUVO 275 DI",
          id: "0x2943",
          tempMake: "MAHINDRA",
          tempModel: "YUVO 275 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da91",
          },
        },
      },
      {
        id: "0x2945",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ39RA4148",
          model: "1035 DI MAHA SHAKTI",
          id: "0x2946",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI MAHA SHAKTI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x2949",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RB8722",
          model: "1035 DI MAHA SHAKTI",
          id: "0x2948",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI MAHA SHAKTI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x2a73",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ35RB2567",
          model: "45 Classic Supermaxx",
          id: "0x2a74",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da6c",
          },
        },
      },
      {
        id: "0x2a76",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ05RC4483",
          model: "45 Powermaxx",
          id: "0x2a77",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db1c",
          },
        },
      },
      {
        id: "0x2a79",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ02RG1772",
          model: "275 DI XP Plus",
          id: "0x2a78",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x2a7b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP14AC0533",
          model: "275 DI TU",
          id: "0x2a7c",
          tempMake: "MAHINDRA",
          tempModel: "275 DI SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x2a7e",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ03RB1860",
          model: "735 FE",
          id: "0x2a7f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x2a83",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ30RA6912",
          model: "CHAMPION XP 41",
          id: "0x2a81",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d994",
          },
        },
      },
      {
        id: "0x2a85",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC4258",
          model: "275 DI XP Plus",
          id: "0x2a86",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x2a88",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ19RF3736",
          model: "1035 DI",
          id: "0x2a89",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x2dce",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MH18BC7998",
          model: "439 Plus",
          id: "0x2dcf",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1da66",
          },
        },
      },
      {
        id: "0x2dd1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH19DV4726",
          model: "575 DI",
          id: "0x2dd2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x2dd5",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH21BF3590",
          model: "744 FE 4WD",
          id: "0x2dd4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1db2b",
          },
        },
      },
      {
        id: "0x2dd7",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "MH23BC6637",
          model: "3600 Tx Heritage Edition",
          id: "0x2dd8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1d8db",
          },
        },
      },
      {
        id: "0x2dda",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MH23BC7785",
          model: "5050 D",
          id: "0x2ddb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9e2",
          },
        },
      },
      {
        id: "0x2ddd",
        vehicle: {
          make: "SONALIKA",
          regNo: "MH26BQ4556",
          model: "DI 750III",
          id: "0x2dde",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db72",
          },
        },
      },
      {
        id: "0x2de0",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH28BK0261",
          model: "742 FE",
          id: "0x2de1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d9fc",
          },
        },
      },
      {
        id: "0x2de3",
        vehicle: {
          make: "SONALIKA",
          regNo: "MH28BQ1573",
          model: "DI 47 RX",
          id: "0x2de4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db76",
          },
        },
      },
      {
        id: "0x2de5",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MH41BE0471",
          model: "5042 D",
          id: "0x2de6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d945",
          },
        },
      },
      {
        id: "0x2df0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ47RA3679",
          model: "275 DI XP Plus",
          id: "0x2df1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x38fb",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ03RB4313",
          model: "735 FE",
          id: "0x38fc",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x38fe",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RA8914",
          model: "1035 DI",
          id: "0x38ff",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI MAHA SHAKTI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x3922",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ03RB3554",
          model: "Champion XP 41 Plus",
          id: "0x3923",
          tempMake: "FARMTRAC",
          tempModel: "Champion XP 41 Plus",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d953",
          },
        },
      },
      {
        id: "0x3926",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ03RB3446",
          model: "Champion XP 41 Plus",
          id: "0x3927",
          tempMake: "FARMTRAC",
          tempModel: "Champion XP 41 Plus",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d953",
          },
        },
      },
      {
        id: "0x392a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ35RB1224",
          model: "275 DI TU",
          id: "0x392b",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x392e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RD7860",
          model: "475 DI XP Plus",
          id: "0x392f",
          tempMake: "MAHINDRA",
          tempModel: "475 DI SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x3932",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ51RA4810",
          model: "Champion Plus",
          id: "0x3933",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db71",
          },
        },
      },
      {
        id: "0x3936",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ04RD0588",
          model: "735 FE",
          id: "0x3937",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x3ec7",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ07RE5348",
          model: "744 FE",
          id: "0x3ec3",
          tempMake: "SWARAJ",
          tempModel: "744 FE 4WD",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x3ede",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP70A2221",
          model: "1035 DI",
          id: "0x3edc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x3ee4",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP41AC1966",
          model: "45 Classic",
          id: "0x3ee5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d8cc",
          },
        },
      },
      {
        id: "0x475d",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP53AA8620",
          model: "Euro 45 Plus - 4WD",
          id: "0x475e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db35",
          },
        },
      },
      {
        id: "0x4762",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP51AB0803",
          model: "Euro 47",
          id: "0x4763",
          tempMake: "POWERTRAC",
          tempModel: "Euro 47",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0x4766",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP19AB9124",
          model: "DI 35",
          id: "0x4764",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x4768",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP04AJ0392",
          model: "415 DI",
          id: "0x4769",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0x4770",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ17RC5235",
          model: "1035 DI",
          id: "0x4771",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x4772",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP19AC9012",
          model: "Euro 42 PLUS",
          id: "0x4774",
          tempMake: "POWERTRAC",
          tempModel: "Euro 42 PLUS",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1daad",
          },
        },
      },
      {
        id: "0x477d",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP70A6536",
          model: "735 FE",
          id: "0x477f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x4781",
        vehicle: {
          make: "EICHER",
          regNo: "MP70A6917",
          model: "380",
          id: "0x4782",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x4787",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "MP04AH5330",
          model: "4510",
          id: "0x4788",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1daaa",
          },
        },
      },
      {
        id: "0x478c",
        vehicle: {
          make: "EICHER",
          regNo: "MP04AJ1494",
          model: "485",
          id: "0x478d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x4791",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP70A5909",
          model: "1035 DI",
          id: "0x4792",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x479b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RC1425",
          model: "1035 DI MAHA SHAKTI",
          id: "0x479d",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI MAHA SHAKTI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x479f",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ06RD4224",
          model: "735 FE",
          id: "0x47a0",
          tempMake: "SWARAJ",
          tempModel: "735 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x47a3",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ17RB8838",
          model: "241 DI MAHA SHAKTI",
          id: "0x47a4",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI MAHAAN",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x47a8",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP18AB1091",
          model: "Sikander DI 35",
          id: "0x47a6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d9ed",
          },
        },
      },
      {
        id: "0x47b5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP15AC1994",
          model: "275 DI XP Plus",
          id: "0x47b6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x47bb",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP19AC0476",
          model: "CHAMPION 35",
          id: "0x47bc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da1a",
          },
        },
      },
      {
        id: "0x47c0",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP70A1431",
          model: "1035 DI",
          id: "0x47c1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x47ca",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP20AB7790",
          model: "735 FE",
          id: "0x47cb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x47d3",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP21AB4138",
          model: "5036 D",
          id: "0x47d4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dade",
          },
        },
      },
      {
        id: "0x47d6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP70A8546",
          model: "475 DI XP Plus MS",
          id: "0x47d7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8fc",
          },
        },
      },
      {
        id: "0x47db",
        vehicle: {
          make: "EICHER",
          regNo: "MP35AA0938",
          model: "368",
          id: "0x47dc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db32",
          },
        },
      },
      {
        id: "0x47de",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP42AA5194",
          model: "475 DI",
          id: "0x47df",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x47e8",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP39AB7876",
          model: "241 DI MAHA SHAKTI",
          id: "0x47e9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x47ed",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP13AC5609",
          model: "1134 DI",
          id: "0x47ee",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da21",
          },
        },
      },
      {
        id: "0x47f1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP13AC4986",
          model: "475 DI",
          id: "0x47f3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x47f7",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP70A6243",
          model: "45 Super Smart",
          id: "0x47f8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d9f6",
          },
        },
      },
      {
        id: "0x47fb",
        vehicle: {
          make: "EICHER",
          regNo: "MP43AB5149",
          model: "548",
          id: "0x47fc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d942",
          },
        },
      },
      {
        id: "0x4801",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP70A5246",
          model: "Champion 42",
          id: "0x4802",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dbfb",
          },
        },
      },
      {
        id: "0x4806",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ46RB7675",
          model: "265 DI",
          id: "0x4807",
          tempMake: "MAHINDRA",
          tempModel: "265 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x4811",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ17RC7549",
          model: "241 DI MAHA SHAKTI",
          id: "0x4812",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI MAHAAN",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x482a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ04RC0741",
          model: "575 DI",
          id: "0x482b",
          tempMake: "MAHINDRA",
          tempModel: "YUVO 575 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x483b",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "RJ02RG3478",
          model: "3037 TX",
          id: "0x483c",
          tempMake: "NEW_HOLLAND",
          tempModel: "3037 TX Super",
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1db5e",
          },
        },
      },
      {
        id: "0x4cc4",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ23RC9620",
          model: "Champion 39",
          id: "0x4cc5",
          tempMake: "FARMTRAC",
          tempModel: "Champion Plus",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0x4cca",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP44AC0158",
          model: "275 DI XP Plus",
          id: "0x4ccb",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x4cce",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ12RA8633",
          model: "CHAMPION 35",
          id: "0x4ccc",
          tempMake: "FARMTRAC",
          tempModel: "Champion Plus",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da1a",
          },
        },
      },
      {
        id: "0x4ccf",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP38ZA4869",
          model: "575 DI XP Plus",
          id: "0x4cd0",
          tempMake: "MAHINDRA",
          tempModel: "575 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x4cd8",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ02RE7746",
          model: "60 Valuemaxx",
          id: "0x4cd9",
          tempMake: "FARMTRAC",
          tempModel: "60 Powermaxx 8+2",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x502c",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ02RE8900",
          model: "60 Valuemaxx",
          id: "0x502d",
          tempMake: "FARMTRAC",
          tempModel: "60 Supermaxx",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x5035",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ02RF0189",
          model: "1035 DI",
          id: "0x5034",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI Dost",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x5059",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ22RB9089",
          model: "735 FE",
          id: "0x505a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x5060",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ27RC0548",
          model: "275 DI XP Plus",
          id: "0x505f",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x5063",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ10RC2927",
          model: "1035 DI",
          id: "0x5064",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI MAHA SHAKTI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x506c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RB4892",
          model: "475 DI",
          id: "0x506d",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus MS",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x506f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06RD1568",
          model: "575 DI XP Plus",
          id: "0x5070",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x5074",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RB4894",
          model: "475 DI XP Plus",
          id: "0x5075",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI Dost",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x5077",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ04RC4245",
          model: "1035 DI",
          id: "0x5078",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x507e",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP14AB2431",
          model: "45",
          id: "0x507f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x5081",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ07",
          model: "241 R",
          id: "0x5082",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x5085",
        vehicle: {
          make: "EICHER",
          regNo: "RJ34RB6540",
          model: "380 Super Power",
          id: "0x5084",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d9eb",
          },
        },
      },
      {
        id: "0x508e",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ06",
          model: "5105",
          id: "0x508c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x5096",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RD8698",
          model: "275 DI XP Plus",
          id: "0x5095",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x509e",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ34RB3022",
          model: "735 FE",
          id: "0x509f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x50ac",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ17RA4227",
          model: "241 DI MAHA SHAKTI",
          id: "0x50ad",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x50b0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ07_1",
          model: "595 DI TURBO",
          id: "0x50b1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9aa",
          },
        },
      },
      {
        id: "0x50b6",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ05RA1921",
          model: "45",
          id: "0x50b7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x50bb",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ10",
          model: "1035 DI",
          id: "0x50bc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x50c7",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ10MASSY",
          model: "241 DI Tonner",
          id: "0x50c8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d95a",
          },
        },
      },
      {
        id: "0x50cc",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "NA",
          model: "5042 D",
          id: "0x50cd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d945",
          },
        },
      },
      {
        id: "0x50d2",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ30RA1705",
          model: "5042 D",
          id: "0x50d1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d945",
          },
        },
      },
      {
        id: "0x50d6",
        vehicle: {
          make: "EICHER",
          regNo: "RJ17RB6770",
          model: "480",
          id: "0x50d7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dab3",
          },
        },
      },
      {
        id: "0x50da",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ25RB3876",
          model: "245 DI",
          id: "0x50db",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d9a9",
          },
        },
      },
      {
        id: "0x50e6",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ17RB4238",
          model: "45 Classic Supermaxx",
          id: "0x50e7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da6c",
          },
        },
      },
      {
        id: "0x50ef",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RA8202",
          model: "1035 DI Super Plus",
          id: "0x50f0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1db55",
          },
        },
      },
      {
        id: "0x50f1",
        vehicle: {
          make: "EICHER",
          regNo: "RJ07EICHER",
          model: "380",
          id: "0x50f2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x50f8",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ43RA4616",
          model: "841 XM",
          id: "0x50f9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dc04",
          },
        },
      },
      {
        id: "0x50ff",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ",
          model: "241 DI Tonner",
          id: "0x5100",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d95a",
          },
        },
      },
      {
        id: "0x5106",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ09",
          model: "735 FE",
          id: "0x5107",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x510e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ51RA5595",
          model: "275 DI TU",
          id: "0x5110",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x5115",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RA3783",
          model: "275 DI TU",
          id: "0x5114",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x511a",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJ09RD3356",
          model: "439 DS Super Saver",
          id: "0x511b",
          tempMake: "POWERTRAC",
          tempModel: "439 Plus Powerhouse",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d95e",
          },
        },
      },
      {
        id: "0x5124",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ05RB3776",
          model: "241 DI Tonner",
          id: "0x5126",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d95a",
          },
        },
      },
      {
        id: "0x5128",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ06RB1674",
          model: "241 DI MAHA SHAKTI",
          id: "0x5129",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x5134",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJSWARAJ",
          model: "855 FE",
          id: "0x5135",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0x5139",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RB3202",
          model: "1035 DI Super Plus",
          id: "0x513a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1db55",
          },
        },
      },
      {
        id: "0x513f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ33",
          model: "575 DI",
          id: "0x513e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x5146",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ07RE4886",
          model: "1035 DI MAHA SHAKTI",
          id: "0x5147",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x514b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ22",
          model: "265 DI",
          id: "0x5149",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x5657",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ25RB4380",
          model: "1035 DI",
          id: "0x5658",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x565c",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ17RB2304",
          model: "841 XM",
          id: "0x565d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dc04",
          },
        },
      },
      {
        id: "0x5662",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RA9654",
          model: "475 DI",
          id: "0x5663",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x5667",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RB6213",
          model: "241 R",
          id: "0x5668",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x5672",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ20RB4720",
          model: "42 DI Sikander",
          id: "0x5670",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1da34",
          },
        },
      },
      {
        id: "0x5679",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ22RC",
          model: "724 FE",
          id: "0x567a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d961",
          },
        },
      },
      {
        id: "0x567e",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ16RB",
          model: "5036 D",
          id: "0x567f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dade",
          },
        },
      },
      {
        id: "0x5685",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RA6826",
          model: "241 R",
          id: "0x5684",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x568a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RA6559",
          model: "1035 DI",
          id: "0x5689",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x568e",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ28RC6687",
          model: "45 Potato Smart",
          id: "0x568f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc17",
          },
        },
      },
      {
        id: "0x5694",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ05RC4193",
          model: "45",
          id: "0x5695",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x569a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ24RA6310",
          model: "265 DI",
          id: "0x569b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x56a4",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ16NA",
          model: "255 DI Power plus",
          id: "0x56a5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dadd",
          },
        },
      },
      {
        id: "0x56ab",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ08",
          model: "855 FE",
          id: "0x56ac",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0x56b2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MAGAN1",
          model: "575 DI",
          id: "0x56b1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x56b5",
        vehicle: {
          make: "SONALIKA",
          regNo: "MAGAN2",
          model: "DI 35",
          id: "0x56b6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x56b9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MAGAN3",
          model: "265 DI",
          id: "0x56ba",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x56be",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ02RC7837",
          model: "60",
          id: "0x56bf",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d9c2",
          },
        },
      },
      {
        id: "0x56c3",
        vehicle: {
          make: "EICHER",
          regNo: "RJ25RB5558",
          model: "380",
          id: "0x56c4",
          tempMake: "EICHER",
          tempModel: "380",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x56ca",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJMASEEY241",
          model: "241 R",
          id: "0x56cb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x56d7",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ07JD5105",
          model: "5105",
          id: "0x56d8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x56e8",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ01",
          model: "265 DI",
          id: "0x56e9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x56ee",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ06RA",
          model: "735 FE",
          id: "0x56ed",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x56f3",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ10RA4988",
          model: "735 FE",
          id: "0x56f4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x56f9",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ34RA4802",
          model: "45",
          id: "0x56fa",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x5700",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ07RD0878",
          model: "585 DI Sarpanch",
          id: "0x5701",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dae5",
          },
        },
      },
      {
        id: "0x570a",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ34RA5017",
          model: "724 XM",
          id: "0x570b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1da20",
          },
        },
      },
      {
        id: "0x570e",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ08R",
          model: "735 FE",
          id: "0x570d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x5712",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ29RA8586",
          model: "1035 DI Tonner",
          id: "0x5713",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0x571e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ04RB4242",
          model: "575 DI",
          id: "0x571f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x5724",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ04RB6251",
          model: "275 DI TU",
          id: "0x5725",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x5729",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ39RA1778",
          model: "275 DI TU",
          id: "0x572a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x5730",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJFT35",
          model: "Champion 35 All Rounder",
          id: "0x572f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d916",
          },
        },
      },
      {
        id: "0x5736",
        vehicle: {
          make: "EICHER",
          regNo: "RJ14RA6810",
          model: "380",
          id: "0x5737",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x573b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ17",
          model: "241 DI MAHA SHAKTI",
          id: "0x573c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x5741",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ04RA8486",
          model: "Champion 39",
          id: "0x5742",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0x5746",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ13RD2153",
          model: "1035 DI Super Plus",
          id: "0x5748",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1db55",
          },
        },
      },
      {
        id: "0x5750",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ24RA8054",
          model: "CHAMPION XP 41",
          id: "0x5752",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d994",
          },
        },
      },
      {
        id: "0x5755",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ39RA2096",
          model: "DI 745 III",
          id: "0x5757",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x575d",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ16RB2377",
          model: "834 XM",
          id: "0x575e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d909",
          },
        },
      },
      {
        id: "0x5763",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ08RA",
          model: "475 DI",
          id: "0x5764",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x5768",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ29RB5276",
          model: "5105",
          id: "0x5769",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x5770",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ11RA8886",
          model: "45",
          id: "0x5771",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x5780",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJMAHINDRA475",
          model: "475 DI XP Plus",
          id: "0x5781",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x5786",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ43RA2434",
          model: "1035 DI Tonner",
          id: "0x5785",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0x578b",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ34RB6760",
          model: "5105",
          id: "0x5789",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x5790",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ16RB3261",
          model: "855 FE",
          id: "0x5791",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0x5795",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJMM475",
          model: "475 DI",
          id: "0x5796",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x579a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ22MF245",
          model: "245 DI",
          id: "0x579b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d9a9",
          },
        },
      },
      {
        id: "0x57a1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "BARMER",
          model: "YUVO 275 DI",
          id: "0x57a2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da91",
          },
        },
      },
      {
        id: "0x57a7",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ745",
          model: "DI 745 III",
          id: "0x57a8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x57b0",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ51RA4608",
          model: "Champion 39",
          id: "0x57b1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0x57b5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJMM475DI",
          model: "475 DI",
          id: "0x57b6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x57ba",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ46841XM",
          model: "841 XM",
          id: "0x57bb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dc04",
          },
        },
      },
      {
        id: "0x57bd",
        vehicle: {
          make: "MAHINDRA",
          regNo: "BHILWARA",
          model: "415 DI",
          id: "0x57be",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0x57c4",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ05RB5015",
          model: "241 R",
          id: "0x57c2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x57cb",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ50RA1986",
          model: "1035 DI Tonner",
          id: "0x57cc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0x57d0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ20RA8063",
          model: "575 DI",
          id: "0x57d2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x57d9",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ32RA6949",
          model: "42 DI Sikander",
          id: "0x57da",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1da34",
          },
        },
      },
      {
        id: "0x57e0",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJFT45",
          model: "45",
          id: "0x57df",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x57e4",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ10RC4064",
          model: "45",
          id: "0x57e3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x57e9",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ21RE125",
          model: "241 DI Tonner",
          id: "0x57ea",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d95a",
          },
        },
      },
      {
        id: "0x57ed",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RA7382",
          model: "1035 DI Tonner",
          id: "0x57ee",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0x57f3",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJMADSY1035",
          model: "1035 DI",
          id: "0x57f4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x57f8",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RC5056",
          model: "475 DI",
          id: "0x57f9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x57fc",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RB0916",
          model: "275 DI TU",
          id: "0x57fe",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x580b",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ47RA3355",
          model: "60 Valuemaxx",
          id: "0x580a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x5813",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06RC9615",
          model: "275 DI XP Plus",
          id: "0x5814",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x5819",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ22RB6549",
          model: "50 EPI Supermaxx",
          id: "0x581a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d99a",
          },
        },
      },
      {
        id: "0x581e",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RA8042",
          model: "1035 DI Dost",
          id: "0x581f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc1f",
          },
        },
      },
      {
        id: "0x5823",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "BANSWARA1035DI",
          model: "1035 DI MAHA SHAKTI",
          id: "0x5825",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x5829",
        vehicle: {
          make: "KUBOTA",
          regNo: "RJ16KUBOTA",
          model: "MU4501 4WD",
          id: "0x5828",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b4",
          },
          vehicleModel: {
            id: "0x1dab7",
          },
        },
      },
      {
        id: "0x5831",
        vehicle: {
          make: "SWARAJ",
          regNo: "SW735FEE",
          model: "735 FE",
          id: "0x582f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x5835",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJSONALIKA35",
          model: "DI 35",
          id: "0x5836",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x583a",
        vehicle: {
          make: "EICHER",
          regNo: "RJEICHER242",
          model: "242",
          id: "0x583b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1da24",
          },
        },
      },
      {
        id: "0x5847",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ25",
          model: "744 FE",
          id: "0x5848",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x584e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM475",
          model: "475 DI",
          id: "0x584c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x5853",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MHINDRA475",
          model: "475 DI",
          id: "0x5854",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x5857",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ14RE1490",
          model: "241 R",
          id: "0x5859",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x5861",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ475",
          model: "475 DI",
          id: "0x5862",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x5866",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ35RB2604",
          model: "5105",
          id: "0x5867",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x586d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MHINDRA275",
          model: "275 DI XP Plus",
          id: "0x586e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x5872",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MHINDRA275XP",
          model: "275 DI XP Plus",
          id: "0x5873",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x587a",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FT45SUPER",
          model: "45 Classic Supermaxx",
          id: "0x5879",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da6c",
          },
        },
      },
      {
        id: "0x587f",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP66A4140",
          model: "MM+ 39 DI",
          id: "0x587e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d8dc",
          },
        },
      },
      {
        id: "0x5887",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP35AA3774",
          model: "1035 DI MAHA SHAKTI",
          id: "0x5888",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x588c",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ08FARMTRAC",
          model: "60",
          id: "0x588d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d9c2",
          },
        },
      },
      {
        id: "0x5891",
        vehicle: {
          make: "POWERTRAC",
          regNo: "PT439",
          model: "439 DS Super Saver",
          id: "0x5892",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d95e",
          },
        },
      },
      {
        id: "0x589a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP21AA1427",
          model: "265 DI",
          id: "0x5898",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x589e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM475XP",
          model: "275 DI XP Plus",
          id: "0x589f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x58a3",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM275XP",
          model: "275 DI XP Plus",
          id: "0x58a4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x58ab",
        vehicle: {
          make: "SWARAJ",
          regNo: "SWARJ855",
          model: "855 FE",
          id: "0x58ac",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0x58af",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASSEY241",
          model: "241 DI Tonner",
          id: "0x58b1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d95a",
          },
        },
      },
      {
        id: "0x58b6",
        vehicle: {
          make: "EICHER",
          regNo: "MP35AA2153",
          model: "333",
          id: "0x58b8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbe3",
          },
        },
      },
      {
        id: "0x58bc",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ27RC0887",
          model: "45 Classic",
          id: "0x58bd",
          tempMake: "FARMTRAC",
          tempModel: "45 Epi Pro",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d8cc",
          },
        },
      },
      {
        id: "0x58bf",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "NEW3230",
          model: "3230 TX",
          id: "0x58c0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1d962",
          },
        },
      },
      {
        id: "0x58c7",
        vehicle: {
          make: "EICHER",
          regNo: "MP43ZB9550",
          model: "551 Prima G3",
          id: "0x58c8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbfc",
          },
        },
      },
      {
        id: "0x58cb",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP43AC3863",
          model: "DI 740 III S3",
          id: "0x58cc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1dbf9",
          },
        },
      },
      {
        id: "0x58d0",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MPMASSEY7235",
          model: "7235 DI",
          id: "0x58d2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da12",
          },
        },
      },
      {
        id: "0x58ed",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ22RA9798",
          model: "475 DI",
          id: "0x58eb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x58f3",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP13AD9652",
          model: "DI 35",
          id: "0x58f4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x58f7",
        vehicle: {
          make: "EICHER",
          regNo: "MPEICHER380",
          model: "380",
          id: "0x58f8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x58fc",
        vehicle: {
          make: "SONALIKA",
          regNo: "MPSONALIKA35",
          model: "DI 35",
          id: "0x58fd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x5904",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "JD5042",
          model: "5042 D",
          id: "0x5903",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d945",
          },
        },
      },
      {
        id: "0x590a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP43AC4201",
          model: "275 DI XP Plus",
          id: "0x5908",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x590e",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP21AA4137",
          model: "1035 DI MAHA SHAKTI",
          id: "0x590f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x5912",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ23RD0469",
          model: "CHAMPION 35",
          id: "0x5911",
          tempMake: "FARMTRAC",
          tempModel: "Champion 39",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da1a",
          },
        },
      },
      {
        id: "0x591c",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP11AC4603",
          model: "DI 35",
          id: "0x591d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x591f",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP11SONAILKA745",
          model: "DI 745 III",
          id: "0x5920",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x5925",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP21AA1458",
          model: "275 DI TU",
          id: "0x5927",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x592e",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ17SWARAJ",
          model: "742 XT",
          id: "0x592f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d943",
          },
        },
      },
      {
        id: "0x5933",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ17MESSY",
          model: "241 DI PLANETARY PLUS",
          id: "0x5934",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da9f",
          },
        },
      },
      {
        id: "0x594b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP21AA5402",
          model: "241 DI MAHA SHAKTI",
          id: "0x594c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x5953",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RB5482",
          model: "241 R",
          id: "0x5951",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 di tonner",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x5955",
        vehicle: {
          make: "EICHER",
          regNo: "MP54AA2689",
          model: "333",
          id: "0x5956",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbe3",
          },
        },
      },
      {
        id: "0x595a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MPMASSEY245",
          model: "245 DI",
          id: "0x595b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d9a9",
          },
        },
      },
      {
        id: "0x5961",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MPFARMTRAC35",
          model: "Champion 35 Haulage Master",
          id: "0x5962",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da87",
          },
        },
      },
      {
        id: "0x5967",
        vehicle: {
          make: "EICHER",
          regNo: "MPEICHER485",
          model: "485 Super Plus",
          id: "0x5968",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dba7",
          },
        },
      },
      {
        id: "0x596d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC1935",
          model: "JIVO 245 DI",
          id: "0x596b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc14",
          },
        },
      },
      {
        id: "0x5971",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP21AA3672",
          model: "1035 DI MAHA SHAKTI",
          id: "0x5973",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x5976",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP14AG1563",
          model: "475 DI",
          id: "0x5978",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x597a",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP54A8075",
          model: "825 XM",
          id: "0x597b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbf8",
          },
        },
      },
      {
        id: "0x5981",
        vehicle: {
          make: "EICHER",
          regNo: "MP43AA7107",
          model: "380",
          id: "0x5982",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x5988",
        vehicle: {
          make: "SONALIKA",
          regNo: "MPSONALIKA750",
          model: "DI 750 III RX SIKANDER",
          id: "0x5989",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1daf4",
          },
        },
      },
      {
        id: "0x5995",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP21AB0547",
          model: "1035 DI MAHA SHAKTI",
          id: "0x5993",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x599a",
        vehicle: {
          make: "SONALIKA",
          regNo: "MPSONALIKA42",
          model: "42 DI Sikander",
          id: "0x599b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1da34",
          },
        },
      },
      {
        id: "0x599f",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MPFARMTAC45",
          model: "45",
          id: "0x59a0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x59a4",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MPMASSEY1035",
          model: "1035 DI",
          id: "0x59a5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x59ab",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP54A1502",
          model: "DI 35",
          id: "0x59ac",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x59b2",
        vehicle: {
          make: "SWARAJ",
          regNo: "MPSWARAJ735",
          model: "735 FE",
          id: "0x59b3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x59b7",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MPMASSEY7250",
          model: "7250",
          id: "0x59b6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8cb",
          },
        },
      },
      {
        id: "0x59bc",
        vehicle: {
          make: "KUBOTA",
          regNo: "KUBOTA",
          model: "MU4501 2WD",
          id: "0x59bd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b4",
          },
          vehicleModel: {
            id: "0x1d9b7",
          },
        },
      },
      {
        id: "0x59c1",
        vehicle: {
          make: "ESCORTS",
          regNo: "MP54AA2214",
          model: "Steeltrac",
          id: "0x59c2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b8",
          },
          vehicleModel: {
            id: "0x1da62",
          },
        },
      },
      {
        id: "0x59c7",
        vehicle: {
          make: "EICHER",
          regNo: "MP43AA7024",
          model: "485 Super Plus",
          id: "0x59c8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dba7",
          },
        },
      },
      {
        id: "0x59cc",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MPMAHINDRA575",
          model: "575 DI XP Plus",
          id: "0x59ce",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x5f50",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ17735FE",
          model: "735 FE",
          id: "0x5f4e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x5f53",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MAHINDRA",
          model: "YUVO 275 DI",
          id: "0x5f52",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da91",
          },
        },
      },
      {
        id: "0x5f56",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19AC1488",
          model: "415 DI",
          id: "0x5f54",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0x5f58",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP17AB7465",
          model: "7250",
          id: "0x5f59",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8cb",
          },
        },
      },
      {
        id: "0x5f5b",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FT60",
          model: "60 Valuemaxx",
          id: "0x5f5c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x5f60",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MPMAHINDRA575DI",
          model: "575 DI SP Plus",
          id: "0x5f5f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbde",
          },
        },
      },
      {
        id: "0x5f62",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "MPNEWHOLLAND3600",
          model: "3600-2 Tx  Super",
          id: "0x5f63",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1dbaf",
          },
        },
      },
      {
        id: "0x5f67",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP17AC0259",
          model: "7250",
          id: "0x5f68",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8cb",
          },
        },
      },
      {
        id: "0x5f6a",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "MPNEWHOLLAND",
          model: "3600 Tx Super Heritage Edition",
          id: "0x5f6b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1db08",
          },
        },
      },
      {
        id: "0x64e9",
        vehicle: {
          make: "SWARAJ",
          regNo: "R",
          model: "735 FE",
          id: "0x64ea",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x64f1",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJT",
          model: "735 FE",
          id: "0x64f2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x64f7",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ51RA1672",
          model: "834 XM",
          id: "0x64f8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d909",
          },
        },
      },
      {
        id: "0x64fe",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJ28",
          model: "439 Plus Powerhouse",
          id: "0x64ff",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1da17",
          },
        },
      },
      {
        id: "0x6503",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ51RA1684",
          model: "834 XM",
          id: "0x6504",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d909",
          },
        },
      },
      {
        id: "0x650a",
        vehicle: {
          make: "EICHER",
          regNo: "MPEICHER551",
          model: "551 Prima G3",
          id: "0x650b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbfc",
          },
        },
      },
      {
        id: "0x6510",
        vehicle: {
          make: "SWARAJ",
          regNo: "MPSWA735",
          model: "735 FE",
          id: "0x650e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x6515",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "JD5036D",
          model: "5036 D",
          id: "0x6516",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dade",
          },
        },
      },
      {
        id: "0x6517",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ34RB1103",
          model: "5039 D",
          id: "0x6519",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d906",
          },
        },
      },
      {
        id: "0x651a",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "JD5036",
          model: "5036 D",
          id: "0x651b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dade",
          },
        },
      },
      {
        id: "0x651f",
        vehicle: {
          make: "FORCE",
          regNo: "RJ02",
          model: "ORCHARD DELUXE",
          id: "0x271f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a9",
          },
          vehicleModel: {
            id: "0x1db8d",
          },
        },
      },
      {
        id: "0x6805",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ02R",
          model: "475 DI XP Plus",
          id: "0x6803",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x680b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP17AB7038",
          model: "585 DI Sarpanch",
          id: "0x680d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dae5",
          },
        },
      },
      {
        id: "0x6813",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ51RA1487",
          model: "45",
          id: "0x6814",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x6818",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP43AB2806",
          model: "4455 BT",
          id: "0x6819",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1dba4",
          },
        },
      },
      {
        id: "0x681b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP17AA4928",
          model: "275 DI SP Plus",
          id: "0x681c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f8",
          },
        },
      },
      {
        id: "0x6822",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASSEY1035",
          model: "1035 DI Tonner",
          id: "0x6823",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0x6825",
        vehicle: {
          make: "EICHER",
          regNo: "RJ25EICHER",
          model: "380",
          id: "0x6826",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x6830",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RA",
          model: "1035 DI",
          id: "0x6831",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x683c",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJB",
          model: "1035 DI Dost",
          id: "0x683d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc1f",
          },
        },
      },
      {
        id: "0x6844",
        vehicle: {
          make: "SWARAJ",
          regNo: "SWARAJ855",
          model: "855 FE",
          id: "0x6845",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0x684b",
        vehicle: {
          make: "VST",
          regNo: "RJ25VST",
          model: "MT 270 - VIRAAT 4WD",
          id: "0x684d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b1",
          },
          vehicleModel: {
            id: "0x1d97a",
          },
        },
      },
      {
        id: "0x6852",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RB548",
          model: "241 R",
          id: "0x6850",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x6855",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ06SWARAJ",
          model: "735 FE",
          id: "0x6856",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x685c",
        vehicle: {
          make: "ESCORTS",
          regNo: "MPPTEURO",
          model: "PT Euro47",
          id: "0x685d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0x6862",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MAHINDRAARJUN605",
          model: "Arjun Novo 605 DI-MS",
          id: "0x6860",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1daa2",
          },
        },
      },
      {
        id: "0x686b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RB4404",
          model: "475 DI",
          id: "0x686c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x6873",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASSEY245",
          model: "245 DI Planetary Plus",
          id: "0x6875",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da93",
          },
        },
      },
      {
        id: "0x6879",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RB4167",
          model: "475 DI",
          id: "0x687a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x6881",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ10RB8408",
          model: "DI 35",
          id: "0x6882",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x6883",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP19AB8924",
          model: "735 FE",
          id: "0x6884",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x688a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ33575",
          model: "575 DI",
          id: "0x6889",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x6890",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MPMAHINDRA475",
          model: "475 DI",
          id: "0x6891",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x6899",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34",
          model: "1035 DI",
          id: "0x689a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x68a0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MHINDRA475XP",
          model: "475 DI XP Plus MS",
          id: "0x68a1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8fc",
          },
        },
      },
      {
        id: "0x68a6",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ29",
          model: "1035 DI",
          id: "0x68a7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x68ac",
        vehicle: {
          make: "EICHER",
          regNo: "MPEICHER333",
          model: "333",
          id: "0x68ad",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbe3",
          },
        },
      },
      {
        id: "0x68b3",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ10RB3646",
          model: "744 XT",
          id: "0x68b1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x68b5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM07475",
          model: "475 DI",
          id: "0x68b6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x68bf",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASSE1035",
          model: "1035 DI",
          id: "0x68c0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x68c5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25275",
          model: "275 DI TU",
          id: "0x68c6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x68cb",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP19AC0433",
          model: "241 DI MAHA SHAKTI",
          id: "0x68cc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x68d1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP013457",
          model: "275 DI TU SP Plus",
          id: "0x68d2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x68d6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06RB8852",
          model: "475 DI",
          id: "0x68d7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x68dc",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ475DI",
          model: "475 DI XP Plus",
          id: "0x68da",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x68e0",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP19AB8547",
          model: "744 XT",
          id: "0x68e1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x68e2",
        vehicle: {
          make: "POWERTRAC",
          regNo: "POWERTRACK",
          model: "445",
          id: "0x68e3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1dbaa",
          },
        },
      },
      {
        id: "0x68e7",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP18AA9277",
          model: "1035 DI MAHA SHAKTI",
          id: "0x68e9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x68f2",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP17AB22100",
          model: "855 FE",
          id: "0x68f3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0x68f6",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FARM60",
          model: "60 Valuemaxx",
          id: "0x68f7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x68fa",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MPJOHN5042D",
          model: "5042 D",
          id: "0x68fb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d945",
          },
        },
      },
      {
        id: "0x6900",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RN",
          model: "241 R",
          id: "0x6902",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x6907",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJH",
          model: "1035 DI",
          id: "0x6908",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x690c",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP20AB4459",
          model: "5310 Trem IV-4wd",
          id: "0x690d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d934",
          },
        },
      },
      {
        id: "0x6911",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MHINDRA575",
          model: "575 DI",
          id: "0x690f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x6918",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJARJUN",
          model: "Arjun Novo 605 Di-ps",
          id: "0x691a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d91e",
          },
        },
      },
      {
        id: "0x691f",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP17AB1349",
          model: "DI 60 RX",
          id: "0x6920",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1da08",
          },
        },
      },
      {
        id: "0x6925",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM275",
          model: "275 DI TU",
          id: "0x6926",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x692a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP21AA2523",
          model: "275 DI TU SP Plus",
          id: "0x6929",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x692c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP20AA3126",
          model: "275 DI TU",
          id: "0x692d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x6930",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RB5527",
          model: "415 DI",
          id: "0x6931",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0x6933",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RB5256",
          model: "415 DI",
          id: "0x6935",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0x6939",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RB6196",
          model: "585 DI XP Plus",
          id: "0x693a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0x693e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RB4906",
          model: "575 DI",
          id: "0x693f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x6942",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RB7652",
          model: "585 DI XP Plus",
          id: "0x6943",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0x6945",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RB5266",
          model: "575 DI",
          id: "0x6946",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x6948",
        vehicle: {
          make: "MAHINDRA",
          regNo: "JJ",
          model: "475 DI",
          id: "0x6949",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x694b",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP20AC1091",
          model: "DI 35",
          id: "0x694c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x6952",
        vehicle: {
          make: "EICHER",
          regNo: "MP17AB0553",
          model: "485",
          id: "0x6953",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x695d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ585",
          model: "585 DI Power Plus BP",
          id: "0x695e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d932",
          },
        },
      },
      {
        id: "0x6962",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP17AA3315",
          model: "735 XM",
          id: "0x6963",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1daba",
          },
        },
      },
      {
        id: "0x6966",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RB0619",
          model: "265 DI",
          id: "0x6968",
          tempMake: "MAHINDRA",
          tempModel: "265 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x6969",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ18RB7821",
          model: "60 EPI Supermaxx",
          id: "0x696b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dbf1",
          },
        },
      },
      {
        id: "0x6975",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "JD5042D",
          model: "5042 D",
          id: "0x6974",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d945",
          },
        },
      },
      {
        id: "0x697b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASSEY2015",
          model: "241 DI MAHAAN",
          id: "0x6979",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da7c",
          },
        },
      },
      {
        id: "0x698e",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ10RC6832",
          model: "855 FE",
          id: "0x698f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0x6992",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ28RB8379",
          model: "45",
          id: "0x6991",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x6998",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ44RA0780",
          model: "475 DI",
          id: "0x6999",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x699b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ29A",
          model: "475 DI XP Plus MS",
          id: "0x699c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8fc",
          },
        },
      },
      {
        id: "0x69a2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ29T",
          model: "475 DI",
          id: "0x69a3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x69a7",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ1LAL",
          model: "1035 DI",
          id: "0x69a8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x69ac",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASSY245",
          model: "245 DI",
          id: "0x69ad",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d9a9",
          },
        },
      },
      {
        id: "0x69b5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RC0675",
          model: "415 DI",
          id: "0x69b6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0x69b8",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RB8047",
          model: "585 DI XP Plus",
          id: "0x69b9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0x69bc",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ22RC0439",
          model: "275 DI XP Plus",
          id: "0x69bd",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x69c8",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "MPNH5500",
          model: "5500 Turbo Super 2WD",
          id: "0x69c9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1da18",
          },
        },
      },
      {
        id: "0x69d7",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ14",
          model: "475 DI",
          id: "0x69d8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x69dc",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJA",
          model: "Yuvraj 215 NXT",
          id: "0x69dd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d964",
          },
        },
      },
      {
        id: "0x69e4",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RA8648",
          model: "1030 DI MAHA SHAKTI",
          id: "0x69e3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dabe",
          },
        },
      },
      {
        id: "0x69ea",
        vehicle: {
          make: "EICHER",
          regNo: "RJ51EICHER",
          model: "380",
          id: "0x69eb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x69f0",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ14B",
          model: "5305",
          id: "0x69ee",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1da78",
          },
        },
      },
      {
        id: "0x69f4",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJQ14",
          model: "841 XM",
          id: "0x69f5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dc04",
          },
        },
      },
      {
        id: "0x69f9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19AC3558",
          model: "575 DI SP Plus",
          id: "0x69fa",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbde",
          },
        },
      },
      {
        id: "0x69fd",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM255",
          model: "255 DI Power plus",
          id: "0x69fe",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dadd",
          },
        },
      },
      {
        id: "0x6a01",
        vehicle: {
          make: "ESCORTS",
          regNo: "MP17AB9434",
          model: "PT Euro47",
          id: "0x6a00",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0x6a0f",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ11RA5378",
          model: "241 R",
          id: "0x6a10",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x6a15",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ23",
          model: "265 DI",
          id: "0x6a16",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x6a1a",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ10RC",
          model: "5105",
          id: "0x6a1b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x6a1f",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MPNUMBER",
          model: "1035 DI MAHA SHAKTI",
          id: "0x6a20",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x6a26",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FTCHAMP",
          model: "Champion 42",
          id: "0x6a27",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dbfb",
          },
        },
      },
      {
        id: "0x6a2b",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ21RA",
          model: "DI 745 III",
          id: "0x6a2c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x6a32",
        vehicle: {
          make: "SONALIKA",
          regNo: "SONALIKA42",
          model: "DI 42 RX",
          id: "0x6a33",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d939",
          },
        },
      },
      {
        id: "0x6a38",
        vehicle: {
          make: "EICHER",
          regNo: "MEICHER485",
          model: "485",
          id: "0x6a39",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x6a3f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11",
          model: "475 DI",
          id: "0x6a3d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x6a44",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ11RA8247",
          model: "241 R",
          id: "0x6a45",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x6a49",
        vehicle: {
          make: "EICHER",
          regNo: "RJ10RC7766",
          model: "485",
          id: "0x6a4a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x6a4c",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP16AC1385",
          model: "735 FE",
          id: "0x6a4d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x6a4f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MAHINDRAB275",
          model: "275 DI ECO",
          id: "0x6a50",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d983",
          },
        },
      },
      {
        id: "0x6a5d",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ34A",
          model: "45 Classic Supermaxx",
          id: "0x6a5e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da6c",
          },
        },
      },
      {
        id: "0x6a62",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ08RB9011",
          model: "CHAMPION XP 41",
          id: "0x6a63",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d994",
          },
        },
      },
      {
        id: "0x6a65",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP19AB6537",
          model: "241 DI MAHA SHAKTI",
          id: "0x6a66",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x6a69",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "LALS",
          model: "241 R",
          id: "0x6a67",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x6a74",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ10RA",
          model: "744 FE",
          id: "0x6a75",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x6a7d",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ35RA5852",
          model: "1035 DI",
          id: "0x6a7c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x6a82",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM265",
          model: "265 DI XP Plus",
          id: "0x6a83",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da2f",
          },
        },
      },
      {
        id: "0x6a86",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ06RD2241",
          model: "5050 D",
          id: "0x6a88",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9e2",
          },
        },
      },
      {
        id: "0x6a8d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RD0194",
          model: "575 DI XP Plus",
          id: "0x6a8b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x6a91",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RA8936",
          model: "275 DI TU",
          id: "0x6a92",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x6a9a",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FT41",
          model: "CHAMPION XP 41",
          id: "0x6a9c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d994",
          },
        },
      },
      {
        id: "0x6aa2",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP17ZC0541",
          model: "439 RDX",
          id: "0x6aa3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d952",
          },
        },
      },
      {
        id: "0x6aa7",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "NAVAILABLE",
          model: "5105",
          id: "0x6aa8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x6aae",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ05",
          model: "1035 DI",
          id: "0x6aaf",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x6ab3",
        vehicle: {
          make: "ESCORTS",
          regNo: "MP53AA6367",
          model: "PT Euro47",
          id: "0x6ab4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0x6ab6",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ23RA",
          model: "Champion Plus",
          id: "0x6ab7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db71",
          },
        },
      },
      {
        id: "0x6abd",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ23RD",
          model: "CHAMPION XP 41",
          id: "0x6abe",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d994",
          },
        },
      },
      {
        id: "0x6ac5",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ23RB",
          model: "CHAMPION XP 41",
          id: "0x6ac6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d994",
          },
        },
      },
      {
        id: "0x6aca",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ21RJ2195",
          model: "275 DI XP Plus",
          id: "0x272c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x6acb",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ03RB2369",
          model: "834 XM",
          id: "0x6ad2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d909",
          },
        },
      },
      {
        id: "0x6acf",
        vehicle: {
          make: "EICHER",
          regNo: "RJ35RB1347",
          model: "380",
          id: "0x6ad0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x6ae1",
        vehicle: {
          make: "EICHER",
          regNo: "MP19AB9541",
          model: "548",
          id: "0x6ae0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d942",
          },
        },
      },
      {
        id: "0x6ae5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RB0618",
          model: "275 DI TU SP Plus",
          id: "0x6ae6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x6aeb",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ02RD5226",
          model: "475 DI XP Plus MS",
          id: "0x6aec",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8fc",
          },
        },
      },
      {
        id: "0x6aef",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "DES",
          model: "1035 DI",
          id: "0x6af0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x6af4",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06475",
          model: "475 DI",
          id: "0x6af5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x6b02",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ39RA4076",
          model: "415 DI",
          id: "0x6b03",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0x6b05",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ46RA6486",
          model: "275 DI XP Plus",
          id: "0x6b00",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x6b07",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJ47RA3215",
          model: "Euro 50",
          id: "0x6b08",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db48",
          },
        },
      },
      {
        id: "0x6b11",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RD2069",
          model: "475 DI",
          id: "0x6b12",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x6b16",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ02RC6884",
          model: "60",
          id: "0x6b14",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d9c2",
          },
        },
      },
      {
        id: "0x6b1c",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ02RF0742",
          model: "5105",
          id: "0x6b1b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x6b1d",
        vehicle: {
          make: "FARMTRAC",
          regNo: "HR29U3985",
          model: "60",
          id: "0x6b19",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d9c2",
          },
        },
      },
      {
        id: "0x6b2c",
        vehicle: {
          make: "EICHER",
          regNo: "RJ25RB9980",
          model: "242",
          id: "0x6b2d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1da24",
          },
        },
      },
      {
        id: "0x6b2f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RA9015",
          model: "585 DI Power Plus BP",
          id: "0x6b30",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d932",
          },
        },
      },
      {
        id: "0x6b3d",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ23RC5230",
          model: "60",
          id: "0x6b3e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d9c2",
          },
        },
      },
      {
        id: "0x6b3f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06RD2306",
          model: "475 DI XP Plus",
          id: "0x6b40",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x6b42",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ03RB4582",
          model: "735 FE",
          id: "0x6b43",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x6b44",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ03RB4289",
          model: "735 FE",
          id: "0x6b47",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x6b46",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ35RB2253",
          model: "275 DI XP Plus",
          id: "0x6b41",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x6b56",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ46RB8810",
          model: "733 FE",
          id: "0x6b5b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1daa9",
          },
        },
      },
      {
        id: "0x6b58",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ12RB1196",
          model: "735 FE",
          id: "0x6b59",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x6b5c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH48CK1447",
          model: "275 DI XP Plus",
          id: "0x6b5d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x6b5f",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ22RB9022",
          model: "735 FE",
          id: "0x6b60",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x6b63",
        vehicle: {
          make: "ESCORTS",
          regNo: "RJ51RA7835",
          model: "439 Plus",
          id: "0x6b55",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1da66",
          },
        },
      },
      {
        id: "0x6b72",
        vehicle: {
          make: "SWARAJ",
          regNo: "HR26EK1927",
          model: "735 FE",
          id: "0x6b73",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x6b74",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ40RA7154",
          model: "265 DI",
          id: "0x6b6e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x6b84",
        vehicle: {
          make: "EICHER",
          regNo: "MEICHER380",
          model: "380",
          id: "0x6b85",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x6b89",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "DAS",
          model: "241 R",
          id: "0x6b8a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x6b90",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MPMAHINDRA585",
          model: "585 DI Power Plus BP",
          id: "0x6b8f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d932",
          },
        },
      },
      {
        id: "0x6b94",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "DEN",
          model: "5036 D",
          id: "0x6b96",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dade",
          },
        },
      },
      {
        id: "0x6b9d",
        vehicle: {
          make: "SWARAJ",
          regNo: "MPSWARAJ960",
          model: "960 FE",
          id: "0x6b9e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d7",
          },
        },
      },
      {
        id: "0x6ba2",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RA9420",
          model: "1035 DI",
          id: "0x6ba3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x6ba9",
        vehicle: {
          make: "EICHER",
          regNo: "MP19EICHER",
          model: "333",
          id: "0x6baa",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbe3",
          },
        },
      },
      {
        id: "0x6bae",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RA9152",
          model: "275 DI TU SP Plus",
          id: "0x6bad",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x6bb4",
        vehicle: {
          make: "FARMTRAC",
          regNo: "DSR",
          model: "45",
          id: "0x6bb2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x6bbb",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ25DI42",
          model: "DI 42 RX",
          id: "0x6bbc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d939",
          },
        },
      },
      {
        id: "0x6bbf",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FT452018",
          model: "45 Classic Supermaxx",
          id: "0x6bc0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da6c",
          },
        },
      },
      {
        id: "0x6bc5",
        vehicle: {
          make: "SONALIKA",
          regNo: "SONALIK45",
          model: "DI- 45 RX",
          id: "0x6bc6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db5f",
          },
        },
      },
      {
        id: "0x6bca",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ10C",
          model: "60 Powermaxx T20",
          id: "0x6bcb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db75",
          },
        },
      },
      {
        id: "0x6bd2",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP17AA6185",
          model: "735 XM",
          id: "0x6bd3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1daba",
          },
        },
      },
      {
        id: "0x6bda",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RA4317",
          model: "265 DI XP Plus",
          id: "0x6bdb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da2f",
          },
        },
      },
      {
        id: "0x6be1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10TA",
          model: "265 DI XP Plus",
          id: "0x6be2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da2f",
          },
        },
      },
      {
        id: "0x6be5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10TR",
          model: "265 DI",
          id: "0x6be7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x6bea",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "DS",
          model: "245 DI",
          id: "0x6beb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d9a9",
          },
        },
      },
      {
        id: "0x6bee",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ10RE",
          model: "Sikander DI 35",
          id: "0x6bef",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d9ed",
          },
        },
      },
      {
        id: "0x6bf5",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ10RB6740",
          model: "855 FE",
          id: "0x6bf6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0x6bfa",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP70A4582",
          model: "DI 740 III S3",
          id: "0x6bfb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1dbf9",
          },
        },
      },
      {
        id: "0x6bff",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ275",
          model: "275 DI TU",
          id: "0x6c00",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x6c0e",
        vehicle: {
          make: "EICHER",
          regNo: "MP17EICHER",
          model: "333",
          id: "0x6c0c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbe3",
          },
        },
      },
      {
        id: "0x6c12",
        vehicle: {
          make: "EICHER",
          regNo: "RJ10RC4616",
          model: "380",
          id: "0x6c13",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x6c17",
        vehicle: {
          make: "EICHER",
          regNo: "RJ10RC4619",
          model: "485",
          id: "0x6c18",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x6c1c",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ10RY",
          model: "744 FE",
          id: "0x6c1d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x6c21",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASSEY2412013",
          model: "241 DI MAHA SHAKTI",
          id: "0x6c22",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x6c25",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19AB5990",
          model: "295 DI SUPER TURBO",
          id: "0x6c27",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbee",
          },
        },
      },
      {
        id: "0x6c33",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM4752018",
          model: "475 DI",
          id: "0x6c34",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x6c38",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "DSS",
          model: "5105",
          id: "0x6c39",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x6c3e",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MPJD5042",
          model: "5042 D",
          id: "0x6c3c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d945",
          },
        },
      },
      {
        id: "0x6c42",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ10RS",
          model: "45 Classic",
          id: "0x6c43",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d8cc",
          },
        },
      },
      {
        id: "0x6c4c",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "RJ10RG",
          model: "3630-TX Super",
          id: "0x6c4a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1db68",
          },
        },
      },
      {
        id: "0x6c50",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "RJ43RB4665",
          model: "3037 TX",
          id: "0x6c51",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1db5e",
          },
        },
      },
      {
        id: "0x6c55",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MPPOWER50",
          model: "Euro 50",
          id: "0x6c56",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db48",
          },
        },
      },
      {
        id: "0x6c5a",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "NH3230",
          model: "3230 TX",
          id: "0x6c5b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1d962",
          },
        },
      },
      {
        id: "0x6c60",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ28RC5218",
          model: "45",
          id: "0x6c5f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x6c65",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ10RD0877",
          model: "5305",
          id: "0x6c63",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1da78",
          },
        },
      },
      {
        id: "0x6c6e",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MPMASSEY241",
          model: "241 DI MAHA SHAKTI",
          id: "0x6c6f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x6c73",
        vehicle: {
          make: "SONALIKA",
          regNo: "RD",
          model: "DI 745 III",
          id: "0x6c74",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x6c77",
        vehicle: {
          make: "EICHER",
          regNo: "DR",
          model: "380",
          id: "0x6c79",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x6c7e",
        vehicle: {
          make: "SWARAJ",
          regNo: "DM",
          model: "735 FE",
          id: "0x6c7c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x6c82",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "NH",
          model: "1035 DI",
          id: "0x6c83",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x6c86",
        vehicle: {
          make: "MAHINDRA",
          regNo: "LX",
          model: "265 DI XP Plus",
          id: "0x6c88",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da2f",
          },
        },
      },
      {
        id: "0x6c93",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ51RB0789",
          model: "475 DI",
          id: "0x6c94",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x6c96",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RB2303",
          model: "1035 DI",
          id: "0x6c97",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x6c9c",
        vehicle: {
          make: "EICHER",
          regNo: "AVAILABLEN",
          model: "368",
          id: "0x6c9d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db32",
          },
        },
      },
      {
        id: "0x6ca2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10R",
          model: "475 DI",
          id: "0x6ca3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x6cab",
        vehicle: {
          make: "SWARAJ",
          regNo: "SWRAJ855",
          model: "855 XM",
          id: "0x6cac",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1da9b",
          },
        },
      },
      {
        id: "0x6cb1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ23RC3458",
          model: "Yuvraj 215 NXT",
          id: "0x6cb0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d964",
          },
        },
      },
      {
        id: "0x6cb3",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ251035",
          model: "1035 DI",
          id: "0x6cb4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x6cba",
        vehicle: {
          make: "KUBOTA",
          regNo: "RJ1043111",
          model: "MU4501 4WD",
          id: "0x6cbb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b4",
          },
          vehicleModel: {
            id: "0x1dab7",
          },
        },
      },
      {
        id: "0x6cc1",
        vehicle: {
          make: "EICHER",
          regNo: "MP20AB1913",
          model: "380",
          id: "0x6cc2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x6cc9",
        vehicle: {
          make: "EICHER",
          regNo: "MP19AB8747",
          model: "380",
          id: "0x6cca",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x6cce",
        vehicle: {
          make: "EICHER",
          regNo: "MP19AB9834",
          model: "380",
          id: "0x6ccf",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x6cd3",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJJD",
          model: "5042 D",
          id: "0x6cd4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d945",
          },
        },
      },
      {
        id: "0x6cdb",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ10CH",
          model: "735 FE",
          id: "0x6cdc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x6cdf",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP43AB9677",
          model: "DI 35",
          id: "0x6cdd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x6ce5",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ10RC0973",
          model: "60 EPI T20",
          id: "0x6ce6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d971",
          },
        },
      },
      {
        id: "0x6cec",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MPFARMTRAC45",
          model: "45 Classic Supermaxx",
          id: "0x6ced",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da6c",
          },
        },
      },
      {
        id: "0x6cee",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ10HC",
          model: "960 FE",
          id: "0x6cef",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d7",
          },
        },
      },
      {
        id: "0x6cf7",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RB1628",
          model: "475 DI",
          id: "0x6cf8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x6cfd",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RA9012",
          model: "265 DI XP Plus",
          id: "0x6cfe",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da2f",
          },
        },
      },
      {
        id: "0x6d02",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ11RB124",
          model: "241 R",
          id: "0x6d03",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x6d07",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP43AA7201",
          model: "575 DI",
          id: "0x6d08",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x6d10",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ17RB9233",
          model: "241 R",
          id: "0x6d12",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x6d17",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJF45",
          model: "45 Potato Smart",
          id: "0x6d15",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc17",
          },
        },
      },
      {
        id: "0x6d1b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ10S",
          model: "241 DI MAHA SHAKTI",
          id: "0x6d1c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x6d20",
        vehicle: {
          make: "EICHER",
          regNo: "RJ18RC0846",
          model: "548",
          id: "0x6d21",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d942",
          },
        },
      },
      {
        id: "0x6d24",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ11RD241",
          model: "241 R",
          id: "0x6d25",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x6d2a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ1035",
          model: "1035 DI",
          id: "0x6d2b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x6d35",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "JD5310",
          model: "5310",
          id: "0x6d36",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9c8",
          },
        },
      },
      {
        id: "0x6d39",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ7785",
          model: "265 DI XP Plus",
          id: "0x6d3a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da2f",
          },
        },
      },
      {
        id: "0x6d40",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MPYUVO575",
          model: "Yuvo 575 DI 4WD",
          id: "0x6d3f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da74",
          },
        },
      },
      {
        id: "0x6d44",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10457",
          model: "475 DI",
          id: "0x6d45",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x6d49",
        vehicle: {
          make: "EICHER",
          regNo: "MP21AA4367",
          model: "380",
          id: "0x6d4a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x6d4d",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MPMASSEY",
          model: "7250",
          id: "0x6d4e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8cb",
          },
        },
      },
      {
        id: "0x6d53",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASSEY7250",
          model: "7250",
          id: "0x6d54",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8cb",
          },
        },
      },
      {
        id: "0x6d57",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RG475",
          model: "475 DI",
          id: "0x6d58",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x6d5c",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ10RG744",
          model: "744 FE",
          id: "0x6d5d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x6d5f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP48AA8926",
          model: "575 DI XP Plus",
          id: "0x6d60",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x6d6d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MPMAHINDRA275",
          model: "275 DI ECO",
          id: "0x6d6e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d983",
          },
        },
      },
      {
        id: "0x6d78",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19AC5659",
          model: "YUVO 575 DI",
          id: "0x6d77",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8ea",
          },
        },
      },
      {
        id: "0x6d7b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19AB8429",
          model: "295 DI SUPER TURBO",
          id: "0x6d7c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbee",
          },
        },
      },
      {
        id: "0x6d82",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP19AB6057",
          model: "1035 DI MAHA SHAKTI",
          id: "0x6d80",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x6d8b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11BON",
          model: "475 DI",
          id: "0x6d8c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x6d90",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ07RE9669",
          model: "241 DI MAHA SHAKTI",
          id: "0x6d91",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x6d95",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "JD50422016",
          model: "5042 D",
          id: "0x6d96",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d945",
          },
        },
      },
      {
        id: "0x6d9b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ1035TONNER",
          model: "1035 DI Tonner",
          id: "0x6d9c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0x6d9f",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ29TA",
          model: "1035 DI MAHA SHAKTI",
          id: "0x6da0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x6da9",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP20",
          model: "960 FE",
          id: "0x6daa",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d7",
          },
        },
      },
      {
        id: "0x6daf",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ275DI",
          model: "275 DI XP Plus",
          id: "0x6db0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x6db5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP17AB5154",
          model: "275 DI TU",
          id: "0x6db3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x6db9",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP2023",
          model: "DI 42 RX",
          id: "0x6dba",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d939",
          },
        },
      },
      {
        id: "0x6dbe",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ475DIXP",
          model: "475 DI XP Plus",
          id: "0x6dbd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x6dc2",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ22RB8846",
          model: "Sikander DI 35",
          id: "0x6dc3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d9ed",
          },
        },
      },
      {
        id: "0x6dc8",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASSEY2022",
          model: "1035 DI",
          id: "0x6dc7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x6dcd",
        vehicle: {
          make: "SWARAJ",
          regNo: "SWRJ855",
          model: "855 XM",
          id: "0x6dce",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1da9b",
          },
        },
      },
      {
        id: "0x6dd2",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "JOHN5036D",
          model: "5036 D",
          id: "0x6dd3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dade",
          },
        },
      },
      {
        id: "0x6dd7",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP20AB6919",
          model: "475 DI XP Plus",
          id: "0x6dd8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x6dd9",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP17AA5876",
          model: "DI 42 RX",
          id: "0x6dda",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d939",
          },
        },
      },
      {
        id: "0x6ddf",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP17MAHINDRA",
          model: "245 DI Orchard",
          id: "0x6de0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d998",
          },
        },
      },
      {
        id: "0x6de4",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ05RB8030",
          model: "245 DI",
          id: "0x6de5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d9a9",
          },
        },
      },
      {
        id: "0x6de8",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RB0649",
          model: "265 DI XP Plus",
          id: "0x6dea",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da2f",
          },
        },
      },
      {
        id: "0x6dee",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ10AA",
          model: "855 FE 4WD",
          id: "0x6def",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1daa0",
          },
        },
      },
      {
        id: "0x6df3",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RC0266",
          model: "585 DI Power Plus BP",
          id: "0x6df4",
          tempMake: "MAHINDRA",
          tempModel: "585 DI Power Plus BP",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d932",
          },
        },
      },
      {
        id: "0x6df8",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ10RR",
          model: "1035 DI",
          id: "0x6df7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x6dfe",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ10EE",
          model: "45 Powermaxx",
          id: "0x6dfc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db1c",
          },
        },
      },
      {
        id: "0x6e02",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP20AB9369",
          model: "241 DI MAHA SHAKTI",
          id: "0x6e03",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x6e06",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ3",
          model: "1035 DI",
          id: "0x6e08",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x6e0b",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "5036JD",
          model: "5036 D",
          id: "0x6e0c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dade",
          },
        },
      },
      {
        id: "0x6e10",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJVEER",
          model: "45",
          id: "0x6e12",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x6e16",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ44",
          model: "475 DI",
          id: "0x6e15",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x6e1b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJSD",
          model: "475 DI",
          id: "0x6e1c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x6e20",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP14275",
          model: "275 DI TU",
          id: "0x6e21",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x6e25",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "ROSHAN",
          model: "241 R",
          id: "0x6e26",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x6e3b",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "5036DJD",
          model: "5036 D",
          id: "0x6e39",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dade",
          },
        },
      },
      {
        id: "0x6e3e",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ10RC3647",
          model: "60 Powermaxx T20",
          id: "0x6e3f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db75",
          },
        },
      },
      {
        id: "0x6e43",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RAGHVEER",
          model: "475 DI",
          id: "0x6e44",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x6e54",
        vehicle: {
          make: "MAHINDRA",
          regNo: "NBON",
          model: "275 DI XP Plus",
          id: "0x6e53",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x6e5a",
        vehicle: {
          make: "EICHER",
          regNo: "MPEICHER368",
          model: "368",
          id: "0x6e5b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db32",
          },
        },
      },
      {
        id: "0x6e5f",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP20DI241",
          model: "241 DI PLANETARY PLUS",
          id: "0x6e60",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da9f",
          },
        },
      },
      {
        id: "0x6e68",
        vehicle: {
          make: "SONALIKA",
          regNo: "SONALIK35",
          model: "DI 35 Rx",
          id: "0x6e69",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db4c",
          },
        },
      },
      {
        id: "0x6e6e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MPMAHINDRA57",
          model: "575 DI",
          id: "0x6e6c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x6e72",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "DSRA",
          model: "1035 DI",
          id: "0x6e73",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x6e7a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP7250DI",
          model: "7250",
          id: "0x6e7c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8cb",
          },
        },
      },
      {
        id: "0x8e01",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP20FARM45",
          model: "45 Classic",
          id: "0x8e03",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d8cc",
          },
        },
      },
      {
        id: "0x8e06",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP20475DI",
          model: "475 DI",
          id: "0x8e08",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x8e0b",
        vehicle: {
          make: "EICHER",
          regNo: "MPECHER333",
          model: "333",
          id: "0x8e0c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbe3",
          },
        },
      },
      {
        id: "0x8e11",
        vehicle: {
          make: "SWARAJ",
          regNo: "MPSWRAJ834",
          model: "834 XM",
          id: "0x8e12",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d909",
          },
        },
      },
      {
        id: "0x8e15",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ02RG0946",
          model: "45 Classic",
          id: "0x8e17",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d8cc",
          },
        },
      },
      {
        id: "0x8e18",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ02RE3211",
          model: "60 Valuemaxx",
          id: "0x8e1a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x8e1b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ41RA5150",
          model: "241 DI MAHA SHAKTI",
          id: "0x8e1d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x8e1e",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ02RE9436",
          model: "60 Valuemaxx",
          id: "0x8e20",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x8e22",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "BROSN",
          model: "241 R",
          id: "0x8e23",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x8e2f",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ02RF7755",
          model: "CHAMPION 35",
          id: "0x8e36",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da1a",
          },
        },
      },
      {
        id: "0x8e32",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ03RB5796",
          model: "733 FE",
          id: "0x8e4c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1daa9",
          },
        },
      },
      {
        id: "0x8e38",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ06RC8800",
          model: "735 FE",
          id: "0x8e44",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x8e39",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ21RK1429",
          model: "YUVO TECH Plus 275 DI",
          id: "0x8e3e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc23",
          },
        },
      },
      {
        id: "0x8e3f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ14RE2424",
          model: "275 DI XP Plus",
          id: "0x8e49",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x8e43",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ03RA9867",
          model: "275 DI XP Plus",
          id: "0x8e37",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x8e45",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ43RB3580",
          model: "841 XM",
          id: "0x8e3c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dc04",
          },
        },
      },
      {
        id: "0x8e47",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ05RB5021",
          model: "1035 DI",
          id: "0x8e40",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x8e4a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RD7369",
          model: "Yuvo 275 di",
          id: "0x8e48",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da91",
          },
        },
      },
      {
        id: "0x8e4b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ27RC0763",
          model: "275 DI XP Plus",
          id: "0x8e3d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x8e6b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ44RR",
          model: "475 DI",
          id: "0x8e6c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x8e6e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ44AA",
          model: "475 DI",
          id: "0x8e6f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x8e70",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ4419",
          model: "255 DI Power plus",
          id: "0x8e72",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dadd",
          },
        },
      },
      {
        id: "0x8e76",
        vehicle: {
          make: "MAHINDRA",
          regNo: "2021475",
          model: "475 DI XP Plus MS",
          id: "0x8e77",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x8e80",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RC0937",
          model: "475 DI",
          id: "0x8e81",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x8e85",
        vehicle: {
          make: "MAHINDRA",
          regNo: "KOTADI",
          model: "475 DI",
          id: "0x8e86",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x8e8e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP20575DI",
          model: "575 DI",
          id: "0x8e8f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x8e91",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ07475",
          model: "475 DI",
          id: "0x8e92",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x8e94",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASSEY2412020",
          model: "241 DI MAHA SHAKTI",
          id: "0x8e95",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x8e9c",
        vehicle: {
          make: "ESCORTS",
          regNo: "MP17AB7020",
          model: "PT Euro47",
          id: "0x8e9d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0x8ea3",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ44RA1457",
          model: "744 FE",
          id: "0x8ea2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x8ea7",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP45AA6943",
          model: "475 DI",
          id: "0x8ea8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x8eb0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP20275DIXPPLUS",
          model: "275 DI XP Plus",
          id: "0x8eb2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x8eb4",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ07241",
          model: "241 DI MAHA SHAKTI",
          id: "0x8eb5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x8ebc",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP20DI575",
          model: "575 DI",
          id: "0x8ebd",
          tempMake: "MAHINDRA",
          tempModel: "445 DI Arjun",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x8ec1",
        vehicle: {
          make: "EICHER",
          regNo: "MPEI380",
          model: "380",
          id: "0x8ec2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x8ec5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RAM",
          model: "275 DI TU SP Plus",
          id: "0x8ec6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x8ecb",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP20241",
          model: "241 DI Tonner",
          id: "0x8ecc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d95a",
          },
        },
      },
      {
        id: "0x8ed1",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP20241ID",
          model: "241 DI Tonner",
          id: "0x8ed0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d95a",
          },
        },
      },
      {
        id: "0x8ed3",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ44RA2780",
          model: "DI 35 Rx",
          id: "0x8ed4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db4c",
          },
        },
      },
      {
        id: "0x8ed9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ51475",
          model: "475 DI XP Plus",
          id: "0x8eda",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x8edd",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "2412017",
          model: "241 DI Tonner",
          id: "0x8ede",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x8ee3",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ51FT60",
          model: "60 Valuemaxx",
          id: "0x8ee4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x8ee8",
        vehicle: {
          make: "EICHER",
          regNo: "MP380",
          model: "380",
          id: "0x8eea",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x8eef",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP1035DI",
          model: "1035 DI",
          id: "0x8eed",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x8ef2",
        vehicle: {
          make: "EICHER",
          regNo: "RJ06RD0580",
          model: "380",
          id: "0x8ef0",
          tempMake: "EICHER",
          tempModel: "380",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x8ef8",
        vehicle: {
          make: "MAHINDRA",
          regNo: "575DIXPPLUS",
          model: "575 DI XP Plus",
          id: "0x8ef9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x8efb",
        vehicle: {
          make: "MAHINDRA",
          regNo: "YUVO575DI",
          model: "YUVO TECH Plus 575",
          id: "0x8efc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d941",
          },
        },
      },
      {
        id: "0x8f03",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ103516",
          model: "1035 DI",
          id: "0x8f04",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x8f26",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP20AA4889",
          model: "744 FE",
          id: "0x8f27",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x8f2a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP20AA1140",
          model: "475 DI",
          id: "0x8f29",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x8f2c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "5752014",
          model: "575 DI",
          id: "0x8f2d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x8f31",
        vehicle: {
          make: "ESCORTS",
          regNo: "RJ02RF7264",
          model: "60",
          id: "0x8f34",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d9c2",
          },
        },
      },
      {
        id: "0x8f35",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RB2945",
          model: "275 DI XP Plus",
          id: "0x8f37",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x8f43",
        vehicle: {
          make: "EICHER",
          regNo: "RJ380",
          model: "380",
          id: "0x8f44",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x8f48",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ10SR",
          model: "DI 750III",
          id: "0x8f49",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db72",
          },
        },
      },
      {
        id: "0x8f4f",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ49",
          model: "744 XM",
          id: "0x8f50",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d966",
          },
        },
      },
      {
        id: "0x8f54",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19AB7716",
          model: "265 DI",
          id: "0x8f55",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x8f59",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ10SO",
          model: "DI 50 DLX",
          id: "0x8f58",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d903",
          },
        },
      },
      {
        id: "0x8f5f",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ5105",
          model: "5105",
          id: "0x8f60",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x8f65",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10KS",
          model: "575 DI",
          id: "0x8f66",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x8f6a",
        vehicle: {
          make: "EICHER",
          regNo: "MP17AC0354",
          model: "485 Super Plus",
          id: "0x8f6b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dba7",
          },
        },
      },
      {
        id: "0x8f6f",
        vehicle: {
          make: "SOLIS",
          regNo: "SOLIC",
          model: "4215 E",
          id: "0x8f70",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b2",
          },
          vehicleModel: {
            id: "0x1db22",
          },
        },
      },
      {
        id: "0x8f74",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP17AB1487",
          model: "855 FE",
          id: "0x8f75",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0x8f79",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ49RA5548",
          model: "60 EPI Supermaxx",
          id: "0x8f7a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dbf1",
          },
        },
      },
      {
        id: "0x8f8f",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ10CP",
          model: "Champion Plus",
          id: "0x8f90",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db71",
          },
        },
      },
      {
        id: "0x8f94",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RB9717",
          model: "585 DI Power Plus BP",
          id: "0x8f95",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d932",
          },
        },
      },
      {
        id: "0x8f98",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10MM",
          model: "575 DI",
          id: "0x8f99",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x8f9e",
        vehicle: {
          make: "KUBOTA",
          regNo: "RJ31RB9113",
          model: "MU5501 2WD",
          id: "0x8f9f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b4",
          },
          vehicleModel: {
            id: "0x1dba5",
          },
        },
      },
      {
        id: "0x8fa4",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ19",
          model: "275 DI TU",
          id: "0x8fa2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x8faa",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "RJ10RC5847",
          model: "3600-2TX",
          id: "0x8fab",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1d8d2",
          },
        },
      },
      {
        id: "0x8fb7",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJDES",
          model: "1035 DI",
          id: "0x8fb8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x8fbf",
        vehicle: {
          make: "MAHINDRA",
          regNo: "265",
          model: "265 DI XP Plus",
          id: "0x8fbe",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x8fc5",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ311035",
          model: "1035 DI",
          id: "0x8fc6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x8fca",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ25RB0298",
          model: "241 R",
          id: "0x8fcb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x8fd9",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ26RB1764",
          model: "241 DI MAHA SHAKTI",
          id: "0x8fda",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x8fe5",
        vehicle: {
          make: "SONALIKA",
          regNo: "MPSONALIKA50",
          model: "DI 50 Rx",
          id: "0x8fe6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d93a",
          },
        },
      },
      {
        id: "0x8fea",
        vehicle: {
          make: "SONALIKA",
          regNo: "MPDI42",
          model: "DI 42 RX",
          id: "0x8fe9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d939",
          },
        },
      },
      {
        id: "0x8ff1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ275DITU",
          model: "275 DI TU",
          id: "0x8ff2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x8ff6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17585",
          model: "585 DI XP Plus",
          id: "0x8ff7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0x8ffa",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10585",
          model: "585 DI Power Plus BP",
          id: "0x8ff8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d932",
          },
        },
      },
      {
        id: "0x9003",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ08FT60",
          model: "60 PowerMaxx",
          id: "0x9004",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dbcf",
          },
        },
      },
      {
        id: "0x9009",
        vehicle: {
          make: "KUBOTA",
          regNo: "KUBOTA55",
          model: "MU5501 2WD",
          id: "0x9007",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b4",
          },
          vehicleModel: {
            id: "0x1dba5",
          },
        },
      },
      {
        id: "0x900d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ575DI",
          model: "575 DI XP Plus",
          id: "0x900e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x9014",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "1035MASSEY",
          model: "1035 DI MAHA SHAKTI",
          id: "0x9012",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x9017",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ0739",
          model: "1035 DI MAHA SHAKTI",
          id: "0x9019",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x901d",
        vehicle: {
          make: "EICHER",
          regNo: "MPEICHE548",
          model: "548",
          id: "0x901e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d942",
          },
        },
      },
      {
        id: "0x9023",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ07FT45",
          model: "45 Super Smart",
          id: "0x9024",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d9f6",
          },
        },
      },
      {
        id: "0x9028",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ07RE3471",
          model: "475 DI",
          id: "0x9029",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x9035",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM585",
          model: "585 DI Sarpanch",
          id: "0x9036",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dae5",
          },
        },
      },
      {
        id: "0x9039",
        vehicle: {
          make: "ESCORTS",
          regNo: "MP54A8348",
          model: "PT Euro47",
          id: "0x9038",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0x903f",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MPPOWER4455",
          model: "4455 BT",
          id: "0x9040",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1dba4",
          },
        },
      },
      {
        id: "0x9044",
        vehicle: {
          make: "MAHINDRA",
          regNo: "SODHI",
          model: "275 DI TU SP Plus",
          id: "0x9045",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x9049",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ44RA0860",
          model: "1035 DI MAHA SHAKTI",
          id: "0x904a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x904e",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASSEY2011",
          model: "1035 DI",
          id: "0x904f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x9052",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP14241",
          model: "241 R",
          id: "0x9053",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x9059",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10DI475",
          model: "475 DI",
          id: "0x905a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x905f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ575DIXP",
          model: "575 DI XP Plus",
          id: "0x9060",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x9067",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RB0398",
          model: "475 DI",
          id: "0x9068",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x906c",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ17RA4582",
          model: "1035 DI MAHA SHAKTI",
          id: "0x906d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x9073",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "RJNEW",
          model: "3600-2 Tx  Super",
          id: "0x9075",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1dbaf",
          },
        },
      },
      {
        id: "0x9078",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ08RC1061",
          model: "60 PowerMaxx",
          id: "0x907a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dbcf",
          },
        },
      },
      {
        id: "0x9080",
        vehicle: {
          make: "POWERTRAC",
          regNo: "POWERTRACK42",
          model: "Euro 42 Plus PowerHouse",
          id: "0x9081",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db0d",
          },
        },
      },
      {
        id: "0x9085",
        vehicle: {
          make: "SWARAJ",
          regNo: "SWRAJ744",
          model: "744 FE",
          id: "0x9086",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x908a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MPARJUN605",
          model: "Arjun Ultra 1 605 Di",
          id: "0x908b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbf6",
          },
        },
      },
      {
        id: "0x9092",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASSEY2017",
          model: "1035 DI",
          id: "0x9093",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x9098",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MPFARMTRAC",
          model: "45 Classic Supermaxx",
          id: "0x9099",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da6c",
          },
        },
      },
      {
        id: "0x909e",
        vehicle: {
          make: "EICHER",
          regNo: "RJ18EI485",
          model: "485",
          id: "0x909d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x90a2",
        vehicle: {
          make: "ESCORTS",
          regNo: "MPPOWER39",
          model: "PT Euro47",
          id: "0x90a3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0x90a9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MHINDRA265",
          model: "Yuvo 265 DI",
          id: "0x90aa",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da1e",
          },
        },
      },
      {
        id: "0x90b1",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ19RJ1620",
          model: "DI 745 III",
          id: "0x90af",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x90b5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM575",
          model: "575 DI",
          id: "0x90b6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x90ba",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ18RB8390",
          model: "CHAMPION XP 41",
          id: "0x90bb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d994",
          },
        },
      },
      {
        id: "0x90bf",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ18475",
          model: "475 DI",
          id: "0x90c0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x90c6",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ18RB9769",
          model: "DI 745 III",
          id: "0x90c5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x90ca",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJ23439",
          model: "439 DS Super Saver",
          id: "0x90cb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d95e",
          },
        },
      },
      {
        id: "0x90ea",
        vehicle: {
          make: "FARMTRAC",
          regNo: "GURJ",
          model: "Champion XP 41 Plus",
          id: "0x90ec",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d953",
          },
        },
      },
      {
        id: "0x90f0",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ19RG5614",
          model: "DI 740 III S3",
          id: "0x90f1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1dbf9",
          },
        },
      },
      {
        id: "0x90f4",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ1035DI",
          model: "1035 DI MAHA SHAKTI",
          id: "0x90f6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x912e",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ60EP",
          model: "60 EPI Supermaxx",
          id: "0x9130",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dbf1",
          },
        },
      },
      {
        id: "0x9135",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ47DO1035",
          model: "1035 DI Dost",
          id: "0x9136",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc1f",
          },
        },
      },
      {
        id: "0x913a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP54A3783",
          model: "275 DI TU SP Plus",
          id: "0x913b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x913f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP21AA8786",
          model: "275 DI TU SP Plus",
          id: "0x9140",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x9146",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ37RA8750",
          model: "475 DI",
          id: "0x9144",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x9148",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ07RF0219",
          model: "575 DI",
          id: "0x9149",
          tempMake: "MAHINDRA",
          tempModel: "575 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x914b",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ27RC1348",
          model: "733 FE",
          id: "0x914c",
          tempMake: "SWARAJ",
          tempModel: "733 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1daa9",
          },
        },
      },
      {
        id: "0x914e",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ30RB2031",
          model: "735 FE",
          id: "0x914f",
          tempMake: "SWARAJ",
          tempModel: "735 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x9151",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ23RD1963",
          model: "241 DI MAHA SHAKTI",
          id: "0x9152",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 4WD",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x9155",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP36AA9306",
          model: "265 DI",
          id: "0x9153",
          tempMake: "MAHINDRA",
          tempModel: "265 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x9157",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP15AD1649",
          model: "DI 42 RX",
          id: "0x9158",
          tempMake: "SONALIKA",
          tempModel: "DI 42 RX",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d939",
          },
        },
      },
      {
        id: "0x915a",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP15AD2163",
          model: "DI 35",
          id: "0x915b",
          tempMake: "SONALIKA",
          tempModel: "DI 35",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x915d",
        vehicle: {
          make: "EICHER",
          regNo: "RJ02RG3606",
          model: "242",
          id: "0x915e",
          tempMake: "EICHER",
          tempModel: "242",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1da24",
          },
        },
      },
      {
        id: "0x915f",
        vehicle: {
          make: "EICHER",
          regNo: "RJ35RB0442",
          model: "380",
          id: "0x9160",
          tempMake: "EICHER",
          tempModel: "380 Super Power",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x9163",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ37RB1117",
          model: "5039 D",
          id: "0x9164",
          tempMake: "JOHN_DEERE",
          tempModel: "5039 D",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d906",
          },
        },
      },
      {
        id: "0x9167",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ27RC2427",
          model: "475 DI",
          id: "0x9165",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x9169",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ16RB8847",
          model: "275 DI XP Plus",
          id: "0x916a",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x916e",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJFT35ALL",
          model: "Champion 35 All Rounder",
          id: "0x916f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d916",
          },
        },
      },
      {
        id: "0x9173",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ075210",
          model: "5210",
          id: "0x9174",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1da33",
          },
        },
      },
      {
        id: "0x9177",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ30RB1254",
          model: "275 DI XP Plus",
          id: "0x9175",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x9179",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06RD3869",
          model: "275 DI XP Plus",
          id: "0x917a",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x917d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ21RK8368",
          model: "475 DI",
          id: "0x917e",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x9185",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10MM585",
          model: "585 DI Power Plus BP",
          id: "0x9186",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d932",
          },
        },
      },
      {
        id: "0x918a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ51RA7579",
          model: "475 DI",
          id: "0x918b",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus MS",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x918e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ14RE5214",
          model: "475 DI",
          id: "0x918f",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus MS",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x9190",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ43RB2930",
          model: "733 FE",
          id: "0x9192",
          tempMake: "SWARAJ",
          tempModel: "733 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1daa9",
          },
        },
      },
      {
        id: "0x9194",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ06RD4606",
          model: "744 XT",
          id: "0x9195",
          tempMake: "SWARAJ",
          tempModel: "744 XM",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x9196",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RC2431",
          model: "1035 DI",
          id: "0x9198",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI Super Plus",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x919a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ17RC2886",
          model: "241 DI MAHA SHAKTI",
          id: "0x919b",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI MAHAAN",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x919d",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ26RB8013",
          model: "1035 DI MAHA SHAKTI",
          id: "0x919e",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x91a0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ22RC2321",
          model: "275 DI XP Plus",
          id: "0x91a1",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x91a3",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ35RA6736",
          model: "575 DI",
          id: "0x91a2",
          tempMake: "MAHINDRA",
          tempModel: "575 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x91a6",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ39RA5164",
          model: "1035 DI",
          id: "0x91a7",
          tempMake: "MAHINDRA",
          tempModel: "575 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x91b8",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ50RA0294",
          model: "475 DI",
          id: "0x91b9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x91c0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP265DI",
          model: "265 DI",
          id: "0x91c1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x91e2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ33RA5562",
          model: "275 DI XP Plus",
          id: "0x91e0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x91f9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MPMAHI575",
          model: "575 DI",
          id: "0x91fa",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x9201",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FRAM60",
          model: "60 Valuemaxx",
          id: "0x9202",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x9207",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ745SI",
          model: "745 DI III Sikander",
          id: "0x9208",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d957",
          },
        },
      },
      {
        id: "0x920c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ275B",
          model: "275 DI TU SP Plus",
          id: "0x920d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x9211",
        vehicle: {
          make: "EICHER",
          regNo: "RJ21RG8324",
          model: "333",
          id: "0x9212",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbe3",
          },
        },
      },
      {
        id: "0x9216",
        vehicle: {
          make: "SONALIKA",
          regNo: "MPSONA740",
          model: "DI 740 III S3",
          id: "0x9217",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1dbf9",
          },
        },
      },
      {
        id: "0x921e",
        vehicle: {
          make: "EICHER",
          regNo: "MPEICH485",
          model: "485",
          id: "0x921f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x9221",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ10SO50",
          model: "DI 50 SIKANDER",
          id: "0x9222",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db59",
          },
        },
      },
      {
        id: "0x9227",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RB0711",
          model: "YUVO TECH Plus 275 DI",
          id: "0x9225",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc23",
          },
        },
      },
      {
        id: "0x922b",
        vehicle: {
          make: "EICHER",
          regNo: "MP22485",
          model: "485",
          id: "0x922c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x922d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RB5204",
          model: "475 DI",
          id: "0x922f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x9235",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RAJ",
          model: "1035 DI",
          id: "0x9236",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x923b",
        vehicle: {
          make: "EICHER",
          regNo: "MP204852017",
          model: "485",
          id: "0x923c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x9246",
        vehicle: {
          make: "MAHINDRA",
          regNo: "LAX",
          model: "275 DI TU SP Plus",
          id: "0x9247",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x924d",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ49SW744",
          model: "744 XT",
          id: "0x924e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x9259",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP18405",
          model: "YUVO TECH Plus 405 DI",
          id: "0x925b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dae8",
          },
        },
      },
      {
        id: "0x926d",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FT602020",
          model: "60 Valuemaxx",
          id: "0x926e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x9272",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ10RB7356",
          model: "60 Valuemaxx",
          id: "0x9274",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x927a",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ05RC6392",
          model: "45 Classic Supermaxx",
          id: "0x9278",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da6c",
          },
        },
      },
      {
        id: "0x9282",
        vehicle: {
          make: "ESCORTS",
          regNo: "MP10AC6253",
          model: "PT Euro47",
          id: "0x9283",
          tempMake: "ESCORTS",
          tempModel: "PT Euro47",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0x9284",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP11AE1947",
          model: "575 DI",
          id: "0x9285",
          tempMake: "MAHINDRA",
          tempModel: "575 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x9288",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP13AE0483",
          model: "Euro 47",
          id: "0x9289",
          tempMake: "ESCORTS",
          tempModel: "PT Euro47",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0x928e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP14AD8517",
          model: "275 DI TU",
          id: "0x928f",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x929a",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "MP46A9950",
          model: "3630 TX Plus",
          id: "0x929b",
          tempMake: "NEW_HOLLAND",
          tempModel: "3630-TX Super",
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1dab6",
          },
        },
      },
      {
        id: "0x929f",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP54AA1446",
          model: "DI 35",
          id: "0x92a0",
          tempMake: "SONALIKA",
          tempModel: "DI 35",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x92a5",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ18RA9616",
          model: "DI 745 III",
          id: "0x92a7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x92a9",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP45AC2605",
          model: "439 RDX",
          id: "0x92aa",
          tempMake: "POWERTRAC",
          tempModel: "439 DS Super Saver",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d952",
          },
        },
      },
      {
        id: "0x92b6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP20AC0757",
          model: "YUVO TECH Plus 275 DI",
          id: "0x92b7",
          tempMake: "SWARAJ",
          tempModel: "717",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc23",
          },
        },
      },
      {
        id: "0x92c2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP14AB0255",
          model: "275 DI TU",
          id: "0x92c3",
          tempMake: "JOHN_DEERE",
          tempModel: "5038 D",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x92d6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP21AA3818",
          model: "275 DI TU SP Plus",
          id: "0x92d7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x92e1",
        vehicle: {
          make: "ESCORTS",
          regNo: "MP54A9430",
          model: "PT Euro47",
          id: "0x92e2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0x92e9",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MH21BQ2506",
          model: "Atom 26",
          id: "0x92ea",
          tempMake: "FARMTRAC",
          tempModel: "Atom 26",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d958",
          },
        },
      },
      {
        id: "0x92ec",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH17CM9302",
          model: "575 DI SP Plus",
          id: "0x92ed",
          tempMake: "MAHINDRA",
          tempModel: "575 DI SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbde",
          },
        },
      },
      {
        id: "0x92f0",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH13DY7586",
          model: "724 XM Orchard NT",
          id: "0x92f2",
          tempMake: "SWARAJ",
          tempModel: "724 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d9c9",
          },
        },
      },
      {
        id: "0x92f4",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ18745",
          model: "DI 745 III",
          id: "0x92f5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x92f6",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19EA3651",
          model: "742 XT",
          id: "0x92f8",
          tempMake: "SWARAJ",
          tempModel: "742 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d943",
          },
        },
      },
      {
        id: "0x92fb",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH21BV7131",
          model: "742 XT",
          id: "0x92fc",
          tempMake: "SWARAJ",
          tempModel: "742 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d943",
          },
        },
      },
      {
        id: "0x92ff",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ18RB0753",
          model: "1035 DI MAHA SHAKTI",
          id: "0x9300",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x9304",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH22AW4030",
          model: "744 XM",
          id: "0x9305",
          tempMake: "SWARAJ",
          tempModel: "744 XM Potato Expert",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d966",
          },
        },
      },
      {
        id: "0x9307",
        vehicle: {
          make: "SONALIKA",
          regNo: "MH23BC2926",
          model: "DI 745 III",
          id: "0x9308",
          tempMake: "SONALIKA",
          tempModel: "DI 745 III",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x930a",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19DV2084",
          model: "742 XT",
          id: "0x930b",
          tempMake: "SWARAJ",
          tempModel: "742 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d943",
          },
        },
      },
      {
        id: "0x930d",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH16CV0224",
          model: "724 XM",
          id: "0x930c",
          tempMake: "SWARAJ",
          tempModel: "724 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1da20",
          },
        },
      },
      {
        id: "0x9314",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH25AW0375",
          model: "575 DI",
          id: "0x9315",
          tempMake: "MAHINDRA",
          tempModel: "575 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x931a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ18DI475",
          model: "475 DI",
          id: "0x931c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x931e",
        vehicle: {
          make: "SONALIKA",
          regNo: "MH27DE0169",
          model: "DI 47 RX",
          id: "0x931f",
          tempMake: "SONALIKA",
          tempModel: "RX 47 DLX",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db76",
          },
        },
      },
      {
        id: "0x9327",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RA6908",
          model: "1035 DI",
          id: "0x9325",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x9329",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ18XP41",
          model: "CHAMPION XP 41",
          id: "0x932a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d994",
          },
        },
      },
      {
        id: "0x9333",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ11RA6819",
          model: "1035 DI",
          id: "0x9334",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x9336",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ18MF1035",
          model: "1035 DI",
          id: "0x9337",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x9343",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ10DI241",
          model: "241 DI MAHA SHAKTI",
          id: "0x9344",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x934b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "M475",
          model: "475 DI",
          id: "0x934a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x9357",
        vehicle: {
          make: "EICHER",
          regNo: "RJ10EI548",
          model: "548",
          id: "0x9355",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d942",
          },
        },
      },
      {
        id: "0x9359",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RB3258",
          model: "275 DI TU",
          id: "0x935a",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x935f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RB8375",
          model: "475 DI",
          id: "0x935d",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x9361",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ28RD1187",
          model: "241 DI MAHA SHAKTI",
          id: "0x9362",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI MAHA SHAKTI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x9364",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ11735",
          model: "735 FE",
          id: "0x9365",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x9369",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH36AG4801",
          model: "475 DI XP Plus",
          id: "0x936a",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus MS",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x936d",
        vehicle: {
          make: "EICHER",
          regNo: "MH39AJ0223",
          model: "485",
          id: "0x936b",
          tempMake: "EICHER",
          tempModel: "485 Super Plus",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x9371",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH41BE6617",
          model: "575 DI XP Plus",
          id: "0x9372",
          tempMake: "MAHINDRA",
          tempModel: "575 DI SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x9378",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH44Z4922",
          model: "Arjun 555 DI",
          id: "0x9379",
          tempMake: "MAHINDRA",
          tempModel: "555 DI Powerplus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbe5",
          },
        },
      },
      {
        id: "0x937e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH40CA9049",
          model: "575 DI XP Plus",
          id: "0x937f",
          tempMake: "MAHINDRA",
          tempModel: "575 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x9381",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RB1997",
          model: "265 DI XP Plus",
          id: "0x9382",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da2f",
          },
        },
      },
      {
        id: "0x938a",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ04RD4197",
          model: "MM 35 DI",
          id: "0x938b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d94f",
          },
        },
      },
      {
        id: "0x938f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "4752015",
          model: "475 DI",
          id: "0x9390",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x9394",
        vehicle: {
          make: "EICHER",
          regNo: "MPEICH380",
          model: "380",
          id: "0x9395",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x9399",
        vehicle: {
          make: "ACE",
          regNo: "RJ11RB4644",
          model: "DI-350+",
          id: "0x939a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ae",
          },
          vehicleModel: {
            id: "0x1dc0b",
          },
        },
      },
      {
        id: "0x939e",
        vehicle: {
          make: "EICHER",
          regNo: "MOEICH485",
          model: "485",
          id: "0x939f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x93b4",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RB1047",
          model: "475 DI",
          id: "0x93b5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x93b9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10MM575",
          model: "575 DI",
          id: "0x93ba",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x93bf",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ17RB9664",
          model: "241 R",
          id: "0x93c0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x93c4",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ10SW744",
          model: "744 FE",
          id: "0x93c5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x93c9",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASSEY2018",
          model: "1035 DI",
          id: "0x93ca",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x93ce",
        vehicle: {
          make: "EICHER",
          regNo: "RJ18RC1178",
          model: "485",
          id: "0x93cf",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x93d3",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ18DI745",
          model: "745 DI III Sikander",
          id: "0x93d4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d957",
          },
        },
      },
      {
        id: "0x93d8",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ18DI7452",
          model: "DI 745 III",
          id: "0x93d9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x93dd",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ18DI35",
          model: "DI 35",
          id: "0x93de",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x93e2",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ25JD",
          model: "5042 D",
          id: "0x93e3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d945",
          },
        },
      },
      {
        id: "0x93e7",
        vehicle: {
          make: "POWERTRAC",
          regNo: "POWERTRACK2020",
          model: "445",
          id: "0x93e8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1dbaa",
          },
        },
      },
      {
        id: "0x93ed",
        vehicle: {
          make: "MAHINDRA",
          regNo: "ROP",
          model: "275 DI TU SP Plus",
          id: "0x93eb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x93fd",
        vehicle: {
          make: "ESCORTS",
          regNo: "MP21AA9668",
          model: "PT Euro47",
          id: "0x93fe",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0x9403",
        vehicle: {
          make: "ESCORTS",
          regNo: "MP21AA8022",
          model: "PT Euro47",
          id: "0x9401",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0x9408",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ241DI",
          model: "241 R",
          id: "0x940a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x940d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ275DIT",
          model: "275 DI TU",
          id: "0x940e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x9412",
        vehicle: {
          make: "EICHER",
          regNo: "RJ18EICHER",
          model: "380 Super Power",
          id: "0x9414",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d9eb",
          },
        },
      },
      {
        id: "0x9418",
        vehicle: {
          make: "EICHER",
          regNo: "RJ18EI380",
          model: "380",
          id: "0x9419",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x941c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RA6573",
          model: "275 DI TU SP Plus",
          id: "0x941a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x9422",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RAJESH",
          model: "YUVO TECH Plus 275 DI",
          id: "0x9423",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc23",
          },
        },
      },
      {
        id: "0x942d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "DIPA",
          model: "275 DI TU SP Plus",
          id: "0x942e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x9434",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10M575",
          model: "575 DI",
          id: "0x9436",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x943d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10MM555",
          model: "555 DI Powerplus",
          id: "0x943e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d901",
          },
        },
      },
      {
        id: "0x9441",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ10FRAM45",
          model: "45",
          id: "0x9442",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x9446",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RB5383",
          model: "575 DI",
          id: "0x9445",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x9448",
        vehicle: {
          make: "MAHINDRA",
          regNo: "DIPL",
          model: "265 DI XP Plus",
          id: "0x9449",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da2f",
          },
        },
      },
      {
        id: "0x9451",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MAS2412020",
          model: "241 R",
          id: "0x9450",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x9457",
        vehicle: {
          make: "EICHER",
          regNo: "RUP",
          model: "380",
          id: "0x9456",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x9465",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASSEY2013",
          model: "241 DI MAHA SHAKTI",
          id: "0x9466",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x946a",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJFT",
          model: "Champion 39",
          id: "0x946b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0x946e",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ17RB6983",
          model: "744 FE",
          id: "0x946f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x9474",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ753",
          model: "735 FE",
          id: "0x9475",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x9479",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ24112",
          model: "241 R",
          id: "0x947a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x947e",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ24113",
          model: "241 DI MAHA SHAKTI",
          id: "0x947f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x9483",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP54AA1266",
          model: "Arjun Novo 605 Di-ps",
          id: "0x9484",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d91e",
          },
        },
      },
      {
        id: "0x94c2",
        vehicle: {
          make: "EICHER",
          regNo: "RJ10RB6171",
          model: "485",
          id: "0x94c1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x94cb",
        vehicle: {
          make: "MAHINDRA",
          regNo: "2014MM",
          model: "475 DI",
          id: "0x94cc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x94cf",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10MN575",
          model: "575 DI",
          id: "0x94ce",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x94d8",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP19AC2906",
          model: "DI 50 Rx",
          id: "0x94d9",
          tempMake: "SONALIKA",
          tempModel: "DI 50 Rx",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d93a",
          },
        },
      },
      {
        id: "0x94e0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "575MM",
          model: "575 DI",
          id: "0x94e1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x94e3",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MPDI265",
          model: "265 DI",
          id: "0x94e4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x94e9",
        vehicle: {
          make: "FARMTRAC",
          regNo: "DIPI",
          model: "45",
          id: "0x94e7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x94f5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RB5073",
          model: "475 DI",
          id: "0x94f7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x94fb",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ10RC1351",
          model: "241 DI MAHA SHAKTI",
          id: "0x94fc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x9501",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ10RB3187",
          model: "241 DI MAHA SHAKTI",
          id: "0x9500",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x9519",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34JAIN",
          model: "475 DI",
          id: "0x9518",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x951e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RB1844",
          model: "275 DI XP Plus",
          id: "0x951f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x9521",
        vehicle: {
          make: "FARMTRAC",
          regNo: "60FT",
          model: "60 Valuemaxx",
          id: "0x9522",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x952a",
        vehicle: {
          make: "EICHER",
          regNo: "MPEICHE485",
          model: "485",
          id: "0x952b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x952e",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ05RC3791",
          model: "241 DI MAHA SHAKTI",
          id: "0x952f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x9536",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP54A2623",
          model: "575 DI",
          id: "0x9537",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x953a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ10DI241R",
          model: "241 DI DYNATRACK",
          id: "0x953b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d9b3",
          },
        },
      },
      {
        id: "0x9543",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ10FR60T20",
          model: "60 EPI T20",
          id: "0x9544",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d971",
          },
        },
      },
      {
        id: "0x9549",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "MPHOLLAND3230",
          model: "3230 NX",
          id: "0x954a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1d9f1",
          },
        },
      },
      {
        id: "0x954e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10575",
          model: "575 DI",
          id: "0x954f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x9557",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ09RD6825",
          model: "42 DI Sikander",
          id: "0x9558",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1da34",
          },
        },
      },
      {
        id: "0x955d",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJPT",
          model: "445 PLUS",
          id: "0x955e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1da3a",
          },
        },
      },
      {
        id: "0x956e",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP54A7134",
          model: "241 DI Tonner",
          id: "0x956f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d95a",
          },
        },
      },
      {
        id: "0x9ae9",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJDI35",
          model: "Sikander DI 35",
          id: "0x9aea",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d9ed",
          },
        },
      },
      {
        id: "0x9aee",
        vehicle: {
          make: "MAHINDRA",
          regNo: "275MM",
          model: "275 DI XP Plus",
          id: "0x9af0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x9af4",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM2008",
          model: "475 DI",
          id: "0x9af5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x9afb",
        vehicle: {
          make: "FARMTRAC",
          regNo: "VALUMAX45",
          model: "45",
          id: "0x9afa",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x9aff",
        vehicle: {
          make: "SONALIKA",
          regNo: "DI42",
          model: "42 DI Sikander",
          id: "0x9b00",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1da34",
          },
        },
      },
      {
        id: "0x9b03",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ23VALUMAX45",
          model: "45",
          id: "0x9b05",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x9b09",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ23RC3847",
          model: "241 DI MAHA SHAKTI",
          id: "0x9b0a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x9b11",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19AC2686",
          model: "YUVO 575 DI",
          id: "0x9b10",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8ea",
          },
        },
      },
      {
        id: "0x9b15",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "1035MASSY",
          model: "1035 DI",
          id: "0x9b16",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x9b35",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ17RD1680",
          model: "Champion 39",
          id: "0x9b36",
          tempMake: "FARMTRAC",
          tempModel: "Champion XP 41 Plus",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0x9b51",
        vehicle: {
          make: "MAHINDRA",
          regNo: "575PS",
          model: "575 DI",
          id: "0x9b4f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x9b59",
        vehicle: {
          make: "MAHINDRA",
          regNo: "265DI",
          model: "265 DI POWER PLUS",
          id: "0x9b5a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da5d",
          },
        },
      },
      {
        id: "0x9b61",
        vehicle: {
          make: "EICHER",
          regNo: "EICHER333",
          model: "333",
          id: "0x9b5f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbe3",
          },
        },
      },
      {
        id: "0x9b64",
        vehicle: {
          make: "MAHINDRA",
          regNo: "575",
          model: "575 DI",
          id: "0x9b66",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x9b6a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "275XP",
          model: "275 DI XP Plus",
          id: "0x9b6b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x9b90",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FT45RJ",
          model: "45 Classic",
          id: "0x9b91",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d8cc",
          },
        },
      },
      {
        id: "0x9ba1",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MF241",
          model: "241 DI MAHA SHAKTI",
          id: "0x9ba2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x9ba7",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ02RD2217",
          model: "265 DI",
          id: "0x9ba8",
          tempMake: "MAHINDRA",
          tempModel: "265 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x9bb8",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ20RA8604",
          model: "DI 35",
          id: "0x9bb6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x9bbb",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ34RA6208",
          model: "45",
          id: "0x9bbd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x9bc7",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ20RB0907",
          model: "744 FE",
          id: "0x9bc8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x9bcd",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP20AB1040",
          model: "5310",
          id: "0x9bce",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9c8",
          },
        },
      },
      {
        id: "0x9bd0",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ241PS",
          model: "241 R",
          id: "0x9bd1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x9bd3",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34MESI",
          model: "1035 DI",
          id: "0x9bd4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x9be6",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ342019",
          model: "1035 DI",
          id: "0x9be7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x9bee",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ31RA8353",
          model: "575 DI",
          id: "0x9bef",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x9bf3",
        vehicle: {
          make: "SONALIKA",
          regNo: "DI35",
          model: "DI 35",
          id: "0x9bf4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x9c1c",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH21BQ4603",
          model: "744 XT",
          id: "0x9c1a",
          tempMake: "SWARAJ",
          tempModel: "744 XM Potato Expert",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x9c30",
        vehicle: {
          make: "SONALIKA",
          regNo: "MH29BV1943",
          model: "DI 745 III",
          id: "0x9c31",
          tempMake: "SONALIKA",
          tempModel: "DI 750 III DLX",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x9c3c",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP20AB8765",
          model: "55",
          id: "0x9c3d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db86",
          },
        },
      },
      {
        id: "0x9c3f",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MH34BF1769",
          model: "241 DI PLANETARY PLUS",
          id: "0x9c40",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI Tonner",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da9f",
          },
        },
      },
      {
        id: "0x9c43",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP21AA5026",
          model: "DI 35 Rx",
          id: "0x9c42",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db4c",
          },
        },
      },
      {
        id: "0x9c54",
        vehicle: {
          make: "MAHINDRA",
          regNo: "265MAHINDRA20",
          model: "265 DI POWER PLUS",
          id: "0x9c55",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da5d",
          },
        },
      },
      {
        id: "0x9c58",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP54A3677",
          model: "5039 C",
          id: "0x9c59",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dbdf",
          },
        },
      },
      {
        id: "0x9c5e",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP54A2544",
          model: "DI 35",
          id: "0x9c5f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x9c6a",
        vehicle: {
          make: "EICHER",
          regNo: "MP42AC3717",
          model: "242",
          id: "0x9c6b",
          tempMake: "EICHER",
          tempModel: "242",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1da24",
          },
        },
      },
      {
        id: "0x9c6f",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP22AB8597",
          model: "CHAMPION 35",
          id: "0x9c6d",
          tempMake: "FARMTRAC",
          tempModel: "CHAMPION 35",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da1a",
          },
        },
      },
      {
        id: "0x9c71",
        vehicle: {
          make: "SONALIKA",
          regNo: "MH22AW1709",
          model: "DI 47 RX",
          id: "0x9c72",
          tempMake: "SONALIKA",
          tempModel: "DI 47 DLX",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db76",
          },
        },
      },
      {
        id: "0x9c75",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP37ZB1374",
          model: "DI 734 (S1)",
          id: "0x9c73",
          tempMake: "SONALIKA",
          tempModel: "DI 734 (S1)",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1dbd1",
          },
        },
      },
      {
        id: "0x9c77",
        vehicle: {
          make: "MAHINDRA",
          regNo: "475MM",
          model: "475 DI",
          id: "0x9c78",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x9c7d",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP38AC2299",
          model: "735 FE",
          id: "0x9c7e",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x9c81",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP11AD3706",
          model: "5045 D",
          id: "0x9c82",
          tempMake: "JOHN_DEERE",
          tempModel: "5045 D",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dc0f",
          },
        },
      },
      {
        id: "0x9c84",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ29RB7334",
          model: "241 DI MAHA SHAKTI",
          id: "0x9c85",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI MAHAAN",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x9c87",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ27RC1288",
          model: "735 FE",
          id: "0x9c88",
          tempMake: "SWARAJ",
          tempModel: "735 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x9c8d",
        vehicle: {
          make: "EICHER",
          regNo: "MH38V9355",
          model: "485",
          id: "0x9c8e",
          tempMake: "EICHER",
          tempModel: "485",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x9c8f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC2427",
          model: "475 DI",
          id: "0x9c90",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x9c96",
        vehicle: {
          make: "SONALIKA",
          regNo: "MH30BL2641",
          model: "DI 745 III",
          id: "0x9c97",
          tempMake: "SONALIKA",
          tempModel: "DI 745 III",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x9c99",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MH37AD0813",
          model: "5045 D",
          id: "0x9c9a",
          tempMake: "JOHN_DEERE",
          tempModel: "5045 D",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dc0f",
          },
        },
      },
      {
        id: "0x9c9c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "SHAMLA",
          model: "475 DI",
          id: "0x9c9d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x9ca1",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ10RB2509",
          model: "5050 D",
          id: "0x9ca2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9e2",
          },
        },
      },
      {
        id: "0x9ca5",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "KHARI",
          model: "1035 DI",
          id: "0x9ca4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x9cb1",
        vehicle: {
          make: "SWARAJ",
          regNo: "735",
          model: "735 FE",
          id: "0x9cb2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x9cb6",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ241",
          model: "241 DI MAHA SHAKTI",
          id: "0x9cb7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x9cbe",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19ZC0210",
          model: "275 DI TU XP Plus",
          id: "0x9cbf",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db3e",
          },
        },
      },
      {
        id: "0x9cc9",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ10FRAM60",
          model: "60 EPI T20",
          id: "0x9cca",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d971",
          },
        },
      },
      {
        id: "0x9cd2",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MH28BK8660",
          model: "Champion Plus",
          id: "0x9cd0",
          tempMake: "FARMTRAC",
          tempModel: "Champion 42",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db71",
          },
        },
      },
      {
        id: "0x9cd5",
        vehicle: {
          make: "EICHER",
          regNo: "MH28BQ2771",
          model: "485",
          id: "0x9cd4",
          tempMake: "EICHER",
          tempModel: "485",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x9cf0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RD1366",
          model: "275 DI XP Plus",
          id: "0x9cf1",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x9cf3",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ30RB1927",
          model: "475 DI XP Plus MS",
          id: "0x9cf4",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8fc",
          },
        },
      },
      {
        id: "0x9d00",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ27RC2163",
          model: "DI 35",
          id: "0x9d01",
          tempMake: "SONALIKA",
          tempModel: "DI 35 Rx",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x9d03",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RA8108",
          model: "1035 DI",
          id: "0x9d04",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x9d06",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ06RC6809",
          model: "DI 745 III Rx PP",
          id: "0x9d07",
          tempMake: "SONALIKA",
          tempModel: "DI 745 III",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1da9c",
          },
        },
      },
      {
        id: "0x9d13",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ34RA6063",
          model: "45",
          id: "0x9d15",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x9d5b",
        vehicle: {
          make: "EICHER",
          regNo: "MP19AD2991",
          model: "551",
          id: "0x9d5c",
          tempMake: "EICHER",
          tempModel: "551",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1daac",
          },
        },
      },
      {
        id: "0x9d60",
        vehicle: {
          make: "EICHER",
          regNo: "MP12ZA9301",
          model: "551",
          id: "0x9d5f",
          tempMake: "EICHER",
          tempModel: "551",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1daac",
          },
        },
      },
      {
        id: "0x9da7",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP46AA2533",
          model: "575 DI XP Plus",
          id: "0x9da8",
          tempMake: "MAHINDRA",
          tempModel: "575 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x9da9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP45AC5257",
          model: "415 DI SP Plus",
          id: "0x9daa",
          tempMake: "MAHINDRA",
          tempModel: "415 DI SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d908",
          },
        },
      },
      {
        id: "0x9dad",
        vehicle: {
          make: "KUBOTA",
          regNo: "KUBOTA5501",
          model: "MU5501 2WD",
          id: "0x9dae",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b4",
          },
          vehicleModel: {
            id: "0x1dba5",
          },
        },
      },
      {
        id: "0x9e0b",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RARU",
          model: "45",
          id: "0x9e0d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x9e14",
        vehicle: {
          make: "FARMTRAC",
          regNo: "T20PAWERMAX60",
          model: "60 EPI T20",
          id: "0x9e15",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d971",
          },
        },
      },
      {
        id: "0x9e19",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ34RB3612",
          model: "60 Valuemaxx",
          id: "0x9e1a",
          tempMake: "FARMTRAC",
          tempModel: "60 Powermaxx 8+2",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x9e1d",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ43RB3579",
          model: "735 FE",
          id: "0x9e1c",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x9e21",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC8707",
          model: "475 DI XP Plus",
          id: "0x9e22",
          tempMake: "MAHINDRA",
          tempModel: "415 DI XP PLUS",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x9e24",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ17RC3839",
          model: "1035 DI",
          id: "0x9e25",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI Super Plus",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x9e27",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ10352017",
          model: "1035 DI",
          id: "0x9e26",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x9e2a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RD1574",
          model: "585 DI XP Plus",
          id: "0x9e2b",
          tempMake: "MAHINDRA",
          tempModel: "585 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0x9e2c",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ12RB2197",
          model: "241 DI MAHA SHAKTI",
          id: "0x9e2d",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI MAHAAN",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x9e30",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ30RB2027",
          model: "475 DI XP Plus MS",
          id: "0x9e31",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8fc",
          },
        },
      },
      {
        id: "0x9e35",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ03RB4690",
          model: "744 XT",
          id: "0x9e36",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x9e38",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ11BO",
          model: "1035 DI",
          id: "0x9e39",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x9e3e",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJR",
          model: "241 R",
          id: "0x9e3c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x9e42",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ1145",
          model: "45",
          id: "0x9e43",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x9e47",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FT60D",
          model: "60",
          id: "0x9e46",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d9c2",
          },
        },
      },
      {
        id: "0x9e4c",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ4120",
          model: "241 R",
          id: "0x9e4d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x9e50",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "5038",
          model: "5038 D",
          id: "0x9e51",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x9e56",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ10JD5050",
          model: "5050 D",
          id: "0x9e57",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9e2",
          },
        },
      },
      {
        id: "0x9e5b",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ06FE",
          model: "735 FE",
          id: "0x9e5c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x9e7a",
        vehicle: {
          make: "POWERTRAC",
          regNo: "EURO50",
          model: "Euro 50",
          id: "0x9e7b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db48",
          },
        },
      },
      {
        id: "0x9e7f",
        vehicle: {
          make: "SWARAJ",
          regNo: "744SWARAJ",
          model: "744 FE",
          id: "0x9e80",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x9ea7",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ43RA3671",
          model: "60",
          id: "0x9ea8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d9c2",
          },
        },
      },
      {
        id: "0x9eac",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ1241",
          model: "241 R",
          id: "0x9ead",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x9eb1",
        vehicle: {
          make: "EICHER",
          regNo: "485",
          model: "485",
          id: "0x9eb2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x9eb5",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ241M",
          model: "241 R",
          id: "0x9eb6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x9ebb",
        vehicle: {
          make: "EICHER",
          regNo: "RJE380",
          model: "380",
          id: "0x9ebc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x9ebf",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ10CHAPIONV",
          model: "Champion Plus",
          id: "0x9ec0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db71",
          },
        },
      },
      {
        id: "0x9ec5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RB4130",
          model: "265 DI XP Plus",
          id: "0x9ec6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da2f",
          },
        },
      },
      {
        id: "0x9eda",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJGAG",
          model: "275 DI TU SP Plus",
          id: "0x9edb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x9ee8",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ24",
          model: "275 DI TU SP Plus",
          id: "0x9ee9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x9ef0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJGN",
          model: "275 DI TU SP Plus",
          id: "0x9ef1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x9ef8",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJGG",
          model: "275 DI TU SP Plus",
          id: "0x9ef9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x9efd",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJFFT",
          model: "45",
          id: "0x9efe",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x9f08",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ115",
          model: "241 R",
          id: "0x9f09",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x9f10",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ103",
          model: "1035 DI",
          id: "0x9f11",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x9f24",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ07RC8298",
          model: "575 DI",
          id: "0x9f25",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x9f29",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RB4579",
          model: "575 DI",
          id: "0x9f2a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x9f34",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06RA5934",
          model: "475 DI",
          id: "0x9f35",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x9f46",
        vehicle: {
          make: "SWARAJ",
          regNo: "SWRJ744XT",
          model: "744 XT",
          id: "0x9f47",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x9f4e",
        vehicle: {
          make: "EICHER",
          regNo: "NAE242",
          model: "242",
          id: "0x9f4f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1da24",
          },
        },
      },
      {
        id: "0x9f56",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP19AB3698",
          model: "735 FE",
          id: "0x9f57",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x9f59",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP19AB9049",
          model: "735 FE",
          id: "0x9f5a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x9f5b",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP855MC3377",
          model: "855 XM",
          id: "0x9f5c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1da9b",
          },
        },
      },
      {
        id: "0x9f68",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19295DI",
          model: "295 DI SUPER TURBO",
          id: "0x9f69",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbee",
          },
        },
      },
      {
        id: "0x9f6d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19YUVO275DI",
          model: "YUVO 275 DI",
          id: "0x9f6e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da91",
          },
        },
      },
      {
        id: "0x9f7a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ10MESSY1035",
          model: "1035 DI",
          id: "0x9f7c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x9f80",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FRAMTRAC60SM",
          model: "60 Supermaxx",
          id: "0x9f81",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dbcd",
          },
        },
      },
      {
        id: "0x9f85",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FRAMTRAC45SM",
          model: "45 Classic Supermaxx",
          id: "0x9f86",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da6c",
          },
        },
      },
      {
        id: "0x9fa4",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "36002",
          model: "3600-2 TX All Rounder Plus",
          id: "0x9fa6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x9fa9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ575",
          model: "575 DI XP Plus",
          id: "0x9fab",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x9faf",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP54A0339",
          model: "265 DI",
          id: "0x9fb0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x9fb6",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP21DI734",
          model: "DI 734 Power Plus",
          id: "0x9fb7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d984",
          },
        },
      },
      {
        id: "0x9fb9",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP21MESSY2014241",
          model: "241 DI MAHA SHAKTI",
          id: "0x9fba",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x9fbc",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP21AA2469",
          model: "DI 35",
          id: "0x9fbd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x9fbf",
        vehicle: {
          make: "EICHER",
          regNo: "MP19AB8034",
          model: "333",
          id: "0x9fc0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbe3",
          },
        },
      },
      {
        id: "0x9fc4",
        vehicle: {
          make: "ESCORTS",
          regNo: "MP17439PLUS",
          model: "PT Euro47",
          id: "0x9fc5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0x9fc9",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ013",
          model: "1035 DI",
          id: "0x9fca",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x9fe3",
        vehicle: {
          make: "SONALIKA",
          regNo: "SONALIKARX472022",
          model: "47 RX Sikander",
          id: "0x9fe4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d929",
          },
        },
      },
      {
        id: "0x9fec",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ44RA2589",
          model: "1035 DI",
          id: "0x9fed",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x9ff4",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RA5718",
          model: "275 DI TU SP Plus",
          id: "0x9ff5",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x9ff9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RB6737",
          model: "275 DI TU SP Plus",
          id: "0x9ffa",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x9ffb",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ104752019",
          model: "475 DI",
          id: "0x9ffc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xa008",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ05RB2797",
          model: "241 R",
          id: "0xa009",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0xa015",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ20RA9192",
          model: "575 DI",
          id: "0xa013",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0xa019",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH26BC7853",
          model: "855 FE",
          id: "0xa01a",
          tempMake: "SWARAJ",
          tempModel: "855 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0xa01c",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MH13DT3642",
          model: "5210",
          id: "0xa01d",
          tempMake: "JOHN_DEERE",
          tempModel: "5210 GearPro",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1da33",
          },
        },
      },
      {
        id: "0xa01f",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19EA4191",
          model: "744 XT",
          id: "0xa020",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0xa022",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH42BE7933",
          model: "575 DI",
          id: "0xa023",
          tempMake: "MAHINDRA",
          tempModel: "575 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0xa024",
        vehicle: {
          make: "EICHER",
          regNo: "MH18BX0992",
          model: "485",
          id: "0xa025",
          tempMake: "EICHER",
          tempModel: "485",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0xa027",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH21BV2534",
          model: "724 XM",
          id: "0xa028",
          tempMake: "SWARAJ",
          tempModel: "724 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1da20",
          },
        },
      },
      {
        id: "0xa02a",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ28RB2105",
          model: "60 Supermaxx",
          id: "0xa02b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dbcd",
          },
        },
      },
      {
        id: "0xa031",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ475DITU",
          model: "475 DI",
          id: "0xa02f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xa035",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06M475",
          model: "475 DI",
          id: "0xa036",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xa03f",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ23RC4872",
          model: "42 DI Sikander",
          id: "0xa05d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1da34",
          },
        },
      },
      {
        id: "0xa046",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ43RA0972",
          model: "744 FE",
          id: "0xa065",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0xa047",
        vehicle: {
          make: "ESCORTS",
          regNo: "RJ51RA7912",
          model: "45 Classic",
          id: "0xa076",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d8cc",
          },
        },
      },
      {
        id: "0xa04b",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ22RB9142",
          model: "CHAMPION 35",
          id: "0xa071",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da1a",
          },
        },
      },
      {
        id: "0xa056",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ14RA8297",
          model: "241 DI MAHA SHAKTI",
          id: "0xa051",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xa057",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RC6509",
          model: "265 DI",
          id: "0xa04f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0xa058",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ28RC6178",
          model: "241 DI MAHA SHAKTI",
          id: "0xa075",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xa05a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ15RA5867",
          model: "241 DI MAHA SHAKTI",
          id: "0xa042",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xa05b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ26RB0608",
          model: "241 DI MAHA SHAKTI",
          id: "0xa060",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xa05c",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ02RD2734",
          model: "5038 D",
          id: "0xa067",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d91c",
          },
        },
      },
      {
        id: "0xa061",
        vehicle: {
          make: "MAHINDRA",
          regNo: "HR38X5123",
          model: "275 DI XP Plus",
          id: "0xa07c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa063",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ51RA7874",
          model: "45 Classic",
          id: "0xa084",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d8cc",
          },
        },
      },
      {
        id: "0xa068",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RA6790",
          model: "275 DI XP Plus",
          id: "0xa040",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa06b",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ17RC8968",
          model: "45 Classic",
          id: "0xa03e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d8cc",
          },
        },
      },
      {
        id: "0xa06d",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ02RA1503",
          model: "241 DI MAHA SHAKTI",
          id: "0xa083",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xa06e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ24RA9371",
          model: "275 DI XP Plus",
          id: "0xa064",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa06f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP39AB8259",
          model: "585 DI XP Plus",
          id: "0xa05e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0xa070",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ05RD2152",
          model: "CHAMPION 35",
          id: "0xa080",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da1a",
          },
        },
      },
      {
        id: "0xa073",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ23RC1236",
          model: "241 DI MAHA SHAKTI",
          id: "0xa04d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xa078",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ50RA0007",
          model: "60 Valuemaxx",
          id: "0xa07f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0xa07b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ02RE7796",
          model: "241 DI MAHA SHAKTI",
          id: "0xa049",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xa07d",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ02RF5653",
          model: "241 DI MAHA SHAKTI",
          id: "0xa04e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xa081",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ01RA4337",
          model: "275 DI XP Plus",
          id: "0xa048",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa082",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ23RC4303",
          model: "585 DI XP Plus",
          id: "0xa050",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0xa08d",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ18RC4783",
          model: "DI 35",
          id: "0xa10b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0xa08f",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP46AA1761",
          model: "Euro 47",
          id: "0xa10d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0xa092",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP51AB2076",
          model: "439 RDX",
          id: "0xa0bf",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d952",
          },
        },
      },
      {
        id: "0xa097",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH33V6631",
          model: "475 DI XP Plus",
          id: "0xa0ce",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0xa099",
        vehicle: {
          make: "ESCORTS",
          regNo: "RJ18RA9288",
          model: "60 Valuemaxx",
          id: "0xa103",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0xa09b",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ03RB2725",
          model: "45 Classic",
          id: "0xa0b4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d8cc",
          },
        },
      },
      {
        id: "0xa0a0",
        vehicle: {
          make: "SONALIKA",
          regNo: "MH29BV6742",
          model: "DI 745 DLX",
          id: "0xa100",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1da83",
          },
        },
      },
      {
        id: "0xa0a1",
        vehicle: {
          make: "SONALIKA",
          regNo: "MH20FY6770",
          model: "DI 745 DLX",
          id: "0xa09d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1da83",
          },
        },
      },
      {
        id: "0xa0a4",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06RC5618",
          model: "575 DI",
          id: "0xa0e9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0xa0a9",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ35RB2306",
          model: "1035 DI",
          id: "0xa0bc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xa0aa",
        vehicle: {
          make: "ESCORTS",
          regNo: "RJ12RA9587",
          model: "CHAMPION 35",
          id: "0xa0dd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da1a",
          },
        },
      },
      {
        id: "0xa0ad",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC1558",
          model: "575 DI",
          id: "0xa0f1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0xa0b1",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP51AB2562",
          model: "Champion 39",
          id: "0xa0d0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0xa0b2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ26RB3373",
          model: "475 DI XP Plus",
          id: "0xa10f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0xa0b3",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP51AB1485",
          model: "439 RDX",
          id: "0xa0b6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d952",
          },
        },
      },
      {
        id: "0xa0b5",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP11AE7963",
          model: "Champion 39",
          id: "0xa0af",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0xa0ba",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ03RB2191",
          model: "CHAMPION 35",
          id: "0xa104",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da1a",
          },
        },
      },
      {
        id: "0xa0bb",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ46RB3584",
          model: "275 DI XP Plus",
          id: "0xa0f5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa0c0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH21BV3417",
          model: "475 DI XP Plus",
          id: "0xa0c4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0xa0c6",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP45AC5421",
          model: "439 RDX",
          id: "0xa0c7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d952",
          },
        },
      },
      {
        id: "0xa0c8",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ03RB0674",
          model: "Champion XP 41 Plus",
          id: "0xa105",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d953",
          },
        },
      },
      {
        id: "0xa0cd",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP36AA7173",
          model: "Champion 39",
          id: "0xa0d9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0xa0cf",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ22RC0105",
          model: "CHAMPION 35",
          id: "0xa0a6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da1a",
          },
        },
      },
      {
        id: "0xa0d7",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MH24AW6557",
          model: "Euro 55",
          id: "0xa0fd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db15",
          },
        },
      },
      {
        id: "0xa0d8",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP04AJ1791",
          model: "DI 50 Rx",
          id: "0xa0e7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d93a",
          },
        },
      },
      {
        id: "0xa0db",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ03RB0286",
          model: "265 DI",
          id: "0xa10e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0xa0de",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ43RA6916",
          model: "265 DI",
          id: "0xa0cc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0xa0e0",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP15AD0465",
          model: "Euro 47",
          id: "0xa0b8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0xa0e4",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "RJ18RC0884",
          model: "3032 Nx",
          id: "0xa098",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1d9a3",
          },
        },
      },
      {
        id: "0xa0ea",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP20AC1333",
          model: "735 FE",
          id: "0xa095",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xa0ee",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP38AC6707",
          model: "DI 50 SIKANDER",
          id: "0xa0f6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db59",
          },
        },
      },
      {
        id: "0xa0f2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ46RA2970",
          model: "275 DI XP Plus",
          id: "0xa0d2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa0f3",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19EA4729",
          model: "744 FE",
          id: "0xa0d6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0xa0f7",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP20AB4418",
          model: "585 DI XP Plus",
          id: "0xa108",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0xa0f8",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP11AE8098",
          model: "439 RDX",
          id: "0xa0df",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d952",
          },
        },
      },
      {
        id: "0xa0f9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ23RC2101",
          model: "475 DI XP Plus",
          id: "0xa093",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0xa0fa",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP22AB9544",
          model: "RX 55 DLX",
          id: "0xa0fb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db2f",
          },
        },
      },
      {
        id: "0xa0fe",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP16AC6872",
          model: "275 DI XP Plus",
          id: "0xa0c3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa101",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ12RB0054",
          model: "241 DI MAHA SHAKTI",
          id: "0xa0b7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xa102",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC3414",
          model: "575 DI",
          id: "0xa0d1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0xa107",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ02RE3361",
          model: "60 Valuemaxx",
          id: "0xa08e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0xa10a",
        vehicle: {
          make: "DEUTZ_FAHR",
          regNo: "MP12AC6104",
          model: "3042 E",
          id: "0xa0a2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a2",
          },
          vehicleModel: {
            id: "0x1da96",
          },
        },
      },
      {
        id: "0xa10c",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ12RB1249",
          model: "241 DI MAHA SHAKTI",
          id: "0xa0f4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xa110",
        vehicle: {
          make: "VST",
          regNo: "MH12SL5632",
          model: "MT 270 - VIRAAT 4WD",
          id: "0xa0ff",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b1",
          },
          vehicleModel: {
            id: "0x1d97a",
          },
        },
      },
      {
        id: "0xa112",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ19RJ1773",
          model: "YUVO TECH Plus 275 DI",
          id: "0xa0bd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc23",
          },
        },
      },
      {
        id: "0xa25e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RA915",
          model: "275 DI TU SP Plus",
          id: "0xa25f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0xa263",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RA5031",
          model: "275 DI TU SP Plus",
          id: "0xa264",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0xa2d8",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ26RA8391",
          model: "735 FE",
          id: "0xa2d9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xa2e9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ12RB1146",
          model: "275 DI XP Plus",
          id: "0xa31d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa2f1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH19CU7419",
          model: "585 DI Sarpanch",
          id: "0xa2fa",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dae5",
          },
        },
      },
      {
        id: "0xa2f6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP38AC8284",
          model: "275 DI XP Plus",
          id: "0xa2ed",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa2f8",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP38AC8898",
          model: "275 DI XP Plus",
          id: "0xa30d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa2fe",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP10AC5984",
          model: "575 DI XP Plus",
          id: "0xa2f7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0xa300",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ48RA6552",
          model: "DI 35",
          id: "0xa32b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0xa301",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP40AD0533",
          model: "275 DI XP Plus",
          id: "0xa335",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa305",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ17RD0377",
          model: "733 FE",
          id: "0xa2f9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1daa9",
          },
        },
      },
      {
        id: "0xa306",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP05AJ7157",
          model: "DI 50 Rx",
          id: "0xa31a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d93a",
          },
        },
      },
      {
        id: "0xa308",
        vehicle: {
          make: "MAHINDRA",
          regNo: "Rj08RC2760",
          model: "475 DI XP Plus",
          id: "0xa2ee",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0xa309",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ09RD0400",
          model: "5105",
          id: "0xa2ec",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0xa30b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP46AA2786",
          model: "YUVO 275 DI",
          id: "0xa344",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da91",
          },
        },
      },
      {
        id: "0xa315",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC6299",
          model: "575 DI XP Plus",
          id: "0xa304",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0xa316",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ21RK2496",
          model: "275 DI XP Plus",
          id: "0xa310",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa318",
        vehicle: {
          make: "EICHER",
          regNo: "MP22AB6907",
          model: "380",
          id: "0xa358",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0xa319",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ04RC5434",
          model: "275 DI XP Plus",
          id: "0xa30f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa320",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP20AB7251",
          model: "DI 35 Rx",
          id: "0xa314",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db4c",
          },
        },
      },
      {
        id: "0xa327",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP51ZA3511",
          model: "275 DI SP Plus",
          id: "0xa354",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f8",
          },
        },
      },
      {
        id: "0xa329",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP22AB9602",
          model: "415 DI XP PLUS",
          id: "0xa2f3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9e8",
          },
        },
      },
      {
        id: "0xa32e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP36ZA6017",
          model: "415 DI XP PLUS",
          id: "0xa322",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9e8",
          },
        },
      },
      {
        id: "0xa331",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ26RC3703",
          model: "475 DI XP Plus",
          id: "0xa321",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0xa333",
        vehicle: {
          make: "EICHER",
          regNo: "MP70ZA3370",
          model: "380",
          id: "0xa356",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0xa334",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ05RC8252",
          model: "275 DI XP Plus",
          id: "0xa323",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa336",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP41AD2317",
          model: "5105",
          id: "0xa313",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0xa337",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RC9077",
          model: "275 DI XP Plus",
          id: "0xa31e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa33a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ51RA9175",
          model: "475 DI XP Plus",
          id: "0xa311",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0xa33e",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP51AB3365",
          model: "DI 35 Rx",
          id: "0xa324",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db4c",
          },
        },
      },
      {
        id: "0xa341",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH21BQ2474",
          model: "575 DI SP Plus",
          id: "0xa33c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbde",
          },
        },
      },
      {
        id: "0xa342",
        vehicle: {
          make: "ESCORTS",
          regNo: "MH41BH4319",
          model: "PT Euro47",
          id: "0xa332",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0xa347",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MH11DH0297",
          model: "5210",
          id: "0xa343",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1da33",
          },
        },
      },
      {
        id: "0xa34a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ04RC7664",
          model: "275 DI XP Plus",
          id: "0xa2ea",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa34b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ26RC3606",
          model: "275 DI XP Plus",
          id: "0xa325",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa34c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ14RE4276",
          model: "275 DI XP Plus",
          id: "0xa32a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa34d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC5996",
          model: "415 DI XP PLUS",
          id: "0xa348",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9e8",
          },
        },
      },
      {
        id: "0xa34e",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ13RD3580",
          model: "DI 35",
          id: "0xa30a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0xa351",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH18BR8752",
          model: "744 XT",
          id: "0xa31c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0xa352",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH13DY4683",
          model: "744 XT",
          id: "0xa353",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0xa35a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC5809",
          model: "275 DI XP Plus",
          id: "0xa317",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa35e",
        vehicle: {
          make: "EICHER",
          regNo: "MP38AD0535",
          model: "368",
          id: "0xa2f2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db32",
          },
        },
      },
      {
        id: "0xa35f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH29BV3809",
          model: "575 DI XP Plus",
          id: "0xa2eb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0xa361",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06RC4987",
          model: "475 DI",
          id: "0xa38a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xa364",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ07RE4453",
          model: "275 DI XP Plus",
          id: "0xa37f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa365",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ02RA2057",
          model: "1035 DI",
          id: "0xa360",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xa367",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ08RB9561",
          model: "575 DI",
          id: "0xa368",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0xa369",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ30RA9800",
          model: "275 DI XP Plus",
          id: "0xa36a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa36c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ02RE8785",
          model: "265 DI",
          id: "0xa36f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0xa36e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ40RA6087",
          model: "585 DI XP Plus",
          id: "0xa382",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0xa370",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ02RF9119",
          model: "5105",
          id: "0xa37b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0xa371",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ02RB5512",
          model: "5310",
          id: "0xa37c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9c8",
          },
        },
      },
      {
        id: "0xa372",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ02RF3925",
          model: "275 DI XP Plus",
          id: "0xa37a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa373",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ07RE0960",
          model: "275 DI XP Plus",
          id: "0xa36d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xa376",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "RJ02RD1537",
          model: "3630",
          id: "0xa378",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1dab6",
          },
        },
      },
      {
        id: "0xa37d",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ08RB1622",
          model: "855 FE",
          id: "0xa37e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0xa381",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP13AD5826",
          model: "575 DI XP Plus",
          id: "0xa374",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0xa385",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH29V0750",
          model: "475 DI",
          id: "0xa363",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xa390",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "5310JD",
          model: "5310 4WD",
          id: "0xa391",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d8f3",
          },
        },
      },
      {
        id: "0xa3d8",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "5050E",
          model: "5050 E",
          id: "0xa3d9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d8d6",
          },
        },
      },
      {
        id: "0xa48a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ475TRIVENI",
          model: "475 DI",
          id: "0xa48b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xa48e",
        vehicle: {
          make: "SONALIKA",
          regNo: "DI42SWM",
          model: "42 DI Sikander",
          id: "0xa48f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1da34",
          },
        },
      },
      {
        id: "0xa497",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH13DY5518",
          model: "JIVO 245 DI",
          id: "0xa498",
          tempMake: "MAHINDRA",
          tempModel: "JIVO 245 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc14",
          },
        },
      },
      {
        id: "0xa49b",
        vehicle: {
          make: "SONALIKA",
          regNo: "MH17CR4612",
          model: "GT 22",
          id: "0xa499",
          tempMake: "SONALIKA",
          tempModel: "GT 22",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db69",
          },
        },
      },
      {
        id: "0xa49d",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MH28AZ8693",
          model: "Euro 45",
          id: "0xa49c",
          tempMake: "FARMTRAC",
          tempModel: "45 Classic",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d9bd",
          },
        },
      },
      {
        id: "0xa4a1",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19EA0189",
          model: "744 XT",
          id: "0xa49f",
          tempMake: "SWARAJ",
          tempModel: "744 XM",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0xa4a3",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH14KN3728",
          model: "JIVO 245 DI",
          id: "0xa4a4",
          tempMake: "MAHINDRA",
          tempModel: "JIVO 245 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc14",
          },
        },
      },
      {
        id: "0xa4a6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RC2679",
          model: "475 DI",
          id: "0xa4a5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xa4aa",
        vehicle: {
          make: "SONALIKA",
          regNo: "SONALIKA745",
          model: "DI 745 III MAHARAJA",
          id: "0xa4ab",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1dc11",
          },
        },
      },
      {
        id: "0xa4b4",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ51RA6104",
          model: "245 DI Planetary Plus",
          id: "0xa4b5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da93",
          },
        },
      },
      {
        id: "0xa4b8",
        vehicle: {
          make: "EICHER",
          regNo: "MP19AB8175",
          model: "368",
          id: "0xa4ba",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db32",
          },
        },
      },
      {
        id: "0xa4bb",
        vehicle: {
          make: "POWERTRAC",
          regNo: "POWERTRAC434",
          model: "434 Plus",
          id: "0xa4bd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1da8c",
          },
        },
      },
      {
        id: "0xa4ca",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19EA2597",
          model: "744 XT",
          id: "0xa4cb",
          tempMake: "SWARAJ",
          tempModel: "744 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0xa4df",
        vehicle: {
          make: "SONALIKA",
          regNo: "MH16CQ8691",
          model: "DI 745 III",
          id: "0xa4e0",
          tempMake: "SONALIKA",
          tempModel: "DI 745 DLX",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0xa4e2",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH20GE7517",
          model: "744 FE",
          id: "0xa4e3",
          tempMake: "SWARAJ",
          tempModel: "744 FE 4WD",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0xa4f7",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH16CQ6334",
          model: "575 DI",
          id: "0xa4f8",
          tempMake: "MAHINDRA",
          tempModel: "YUVO 575 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0xa51e",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ744",
          model: "744 XT",
          id: "0xa51f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0xa555",
        vehicle: {
          make: "SONALIKA",
          regNo: "MPSONALI740",
          model: "DI 740 III S3",
          id: "0xa556",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1dbf9",
          },
        },
      },
      {
        id: "0xa562",
        vehicle: {
          make: "SWARAJ",
          regNo: "SWRJ2009",
          model: "735 FE",
          id: "0xa564",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xa58e",
        vehicle: {
          make: "ESCORTS",
          regNo: "MP17AB1660",
          model: "PT Euro47",
          id: "0xa58f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0xa59d",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MPMASS1035",
          model: "1035 DI Tonner",
          id: "0xa59e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0xa66d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM255DI",
          model: "255 DI Power plus",
          id: "0xa66c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dadd",
          },
        },
      },
      {
        id: "0xa671",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34DD",
          model: "1035 DI",
          id: "0xa672",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xa688",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ10RC4367",
          model: "45 Classic Supermaxx",
          id: "0xa689",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da6c",
          },
        },
      },
      {
        id: "0xa690",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ52RA3826",
          model: "241 DI MAHA SHAKTI",
          id: "0xa691",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI DYNATRACK",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xa693",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "5105JD",
          model: "5105",
          id: "0xa694",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0xa699",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ23RB6376",
          model: "475 DI",
          id: "0xa697",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xa69d",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJ10POWERTRA",
          model: "Euro 50",
          id: "0xa69e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db48",
          },
        },
      },
      {
        id: "0xa6a8",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RB1094",
          model: "Arjun Novo 605 DI-MS",
          id: "0xa6a9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1daa2",
          },
        },
      },
      {
        id: "0xa6b0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MPMAHINDRA395",
          model: "395 DI Turbo",
          id: "0xa6af",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db4b",
          },
        },
      },
      {
        id: "0xa6d9",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJPT439",
          model: "439 RDX",
          id: "0xa6da",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d952",
          },
        },
      },
      {
        id: "0xa6dd",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "1035",
          model: "1035 DI MAHA SHAKTI",
          id: "0xa6df",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0xa6e3",
        vehicle: {
          make: "MAHINDRA",
          regNo: "5752020",
          model: "575 DI",
          id: "0xa6e4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0xa6e8",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ51EB0095",
          model: "475 DI XP Plus",
          id: "0xa6e9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0xa6ee",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MMSARPANCH",
          model: "475 DI",
          id: "0xa6ec",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xa6f2",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ2412021",
          model: "241 DI MAHA SHAKTI",
          id: "0xa6f3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xa712",
        vehicle: {
          make: "SWARAJ",
          regNo: "MPSWARAJ855",
          model: "855 FE",
          id: "0xa713",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0xa718",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP54AA1502",
          model: "DI 35",
          id: "0xa716",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0xa736",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MAHINDRA1",
          model: "1035 DI",
          id: "0xa737",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xa747",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ23RB8109",
          model: "241 DI MAHA SHAKTI",
          id: "0xa748",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xa78a",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ10735FE",
          model: "735 FE",
          id: "0xa78b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xa7b6",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FT412019",
          model: "CHAMPION XP 41",
          id: "0xa7b7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d994",
          },
        },
      },
      {
        id: "0xa7eb",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ475BWM",
          model: "475 DI XP Plus",
          id: "0xa7ec",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0xa7f0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP21AA6989",
          model: "265 DI",
          id: "0xa7f1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0xa7f7",
        vehicle: {
          make: "KUBOTA",
          regNo: "RJKUBOTA",
          model: "MU4501 2WD",
          id: "0xa7f8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b4",
          },
          vehicleModel: {
            id: "0x1d9b7",
          },
        },
      },
      {
        id: "0xa7fc",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP21AB3094",
          model: "439 DS Super Saver",
          id: "0xa7fb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d95e",
          },
        },
      },
      {
        id: "0xa7ff",
        vehicle: {
          make: "MAHINDRA",
          regNo: "415MM",
          model: "415 DI",
          id: "0xa800",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0xa806",
        vehicle: {
          make: "SONALIKA",
          regNo: "MPSO740",
          model: "DI 740 III S3",
          id: "0xa807",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1dbf9",
          },
        },
      },
      {
        id: "0xa80b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MPMA1035",
          model: "1035 DI Tonner",
          id: "0xa80c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0xa810",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP54ZA2662",
          model: "7250",
          id: "0xa811",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8cb",
          },
        },
      },
      {
        id: "0xa843",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MPFARMTR45",
          model: "45 Classic Supermaxx",
          id: "0xa841",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da6c",
          },
        },
      },
      {
        id: "0xa84e",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "20151035",
          model: "1035 DI",
          id: "0xa84f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0xa852",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ265",
          model: "265 DI",
          id: "0xa854",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0xa861",
        vehicle: {
          make: "SONALIKA",
          regNo: "SONALIKA422020",
          model: "DI 42 RX",
          id: "0xa862",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d939",
          },
        },
      },
      {
        id: "0xa869",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP18AB4304",
          model: "439 DS Super Saver",
          id: "0xa86a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d95e",
          },
        },
      },
      {
        id: "0xa86e",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ11RB2247",
          model: "855 FE",
          id: "0xa86f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0xa874",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ11RA5907",
          model: "735 FE",
          id: "0xa872",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xa878",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJSW241",
          model: "241 R",
          id: "0xa879",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0xa899",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ23RB9937",
          model: "DI 35",
          id: "0xa89a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0xa8ac",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ735TRIVENI",
          model: "735 FE",
          id: "0xa8ad",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xa8b9",
        vehicle: {
          make: "EICHER",
          regNo: "EICHER380",
          model: "380",
          id: "0xa8b8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0xa8c3",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ10RB0534",
          model: "241 DI MAHA SHAKTI",
          id: "0xa8c4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xa8c8",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ25RB4155",
          model: "1035 DI",
          id: "0xa8c9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xa8d2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM1",
          model: "275 DI TU SP Plus",
          id: "0xa8d3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0xa8d7",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM2",
          model: "275 DI TU SP Plus",
          id: "0xa8d8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0xa8e5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM75",
          model: "475 DI",
          id: "0xa8e6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xa910",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ33RA2154",
          model: "241 DI MAHA SHAKTI",
          id: "0xa911",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xa918",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ275SWM",
          model: "275 DI TU",
          id: "0xa916",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0xa93a",
        vehicle: {
          make: "SWARAJ",
          regNo: "SWDES",
          model: "735 FE",
          id: "0xa93b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xa93c",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ34SWRAJ",
          model: "735 FE",
          id: "0xa93e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xa944",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ31RC1944",
          model: "45 Ultramaxx - 4WD",
          id: "0xa946",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1daf0",
          },
        },
      },
      {
        id: "0xa948",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP19AC0691",
          model: "1035 DI Tonner",
          id: "0xa949",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0xa94f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ5852020",
          model: "585 DI XP Plus",
          id: "0xa94d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0xa954",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ02RF2903",
          model: "1035 DI",
          id: "0xa956",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xa959",
        vehicle: {
          make: "SWARAJ",
          regNo: "744XT",
          model: "744 XT",
          id: "0xa95a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0xa964",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RB0722",
          model: "265 DI",
          id: "0xa965",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0xa994",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RA13",
          model: "1035 DI",
          id: "0xa995",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xa9b5",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP17AC4538",
          model: "5105",
          id: "0xa9b4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0xa9bd",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP35AA2788",
          model: "1035 DI MAHA SHAKTI",
          id: "0xa9be",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0xa9c3",
        vehicle: {
          make: "EICHER",
          regNo: "MP21ECH333",
          model: "333",
          id: "0xa9c4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbe3",
          },
        },
      },
      {
        id: "0xa9ea",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP216786",
          model: "YUVO 415 DI",
          id: "0xa9eb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d92c",
          },
        },
      },
      {
        id: "0xa9ee",
        vehicle: {
          make: "EICHER",
          regNo: "MH37AD1546",
          model: "548",
          id: "0xa9ec",
          tempMake: "EICHER",
          tempModel: "548",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d942",
          },
        },
      },
      {
        id: "0xaa07",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH12UF5781",
          model: "JIVO 245 DI",
          id: "0xaa08",
          tempMake: "MAHINDRA",
          tempModel: "JIVO 245 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc14",
          },
        },
      },
      {
        id: "0xaa0b",
        vehicle: {
          make: "POWERTRAC",
          regNo: "EUR50",
          model: "Euro 50",
          id: "0xaa09",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db48",
          },
        },
      },
      {
        id: "0xaa7c",
        vehicle: {
          make: "SONALIKA",
          regNo: "MPSONALIKA734",
          model: "DI 734 (S1)",
          id: "0xaa7d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1dbd1",
          },
        },
      },
      {
        id: "0xaae3",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ39RA4006",
          model: "241 R",
          id: "0xaae4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0xab0c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06RB0344",
          model: "265 DI",
          id: "0xab0d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0xab13",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJPT439BHIL",
          model: "439 RDX",
          id: "0xab14",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d952",
          },
        },
      },
      {
        id: "0xab1b",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJ09RD1909",
          model: "439 DS Super Saver",
          id: "0xab1c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d95e",
          },
        },
      },
      {
        id: "0xab30",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RB0278",
          model: "275 DI TU SP Plus",
          id: "0xab31",
          tempMake: "MAHINDRA",
          tempModel: "275 di tu",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0xab37",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ105",
          model: "1035 DI",
          id: "0xab38",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xab43",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RB7655",
          model: "585 DI Power Plus BP",
          id: "0xab41",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d932",
          },
        },
      },
      {
        id: "0xab46",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJEURO45",
          model: "Euro 45",
          id: "0xab48",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d9bd",
          },
        },
      },
      {
        id: "0xab6d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ02RD0869",
          model: "475 DI",
          id: "0xab6e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xab77",
        vehicle: {
          make: "POWERTRAC",
          regNo: "PT39",
          model: "439 DS Super Saver",
          id: "0xab78",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d95e",
          },
        },
      },
      {
        id: "0xab7c",
        vehicle: {
          make: "SWARAJ",
          regNo: "SWRAJ735FE",
          model: "735 FE",
          id: "0xab7b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xab82",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ475YUVO",
          model: "YUVO 475 DI",
          id: "0xab83",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8ce",
          },
        },
      },
      {
        id: "0xabc1",
        vehicle: {
          make: "EICHER",
          regNo: "MP38AC8915",
          model: "485",
          id: "0xabc2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0xabda",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJYUVO575",
          model: "YUVO 575 DI",
          id: "0xabdb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8ea",
          },
        },
      },
      {
        id: "0xabde",
        vehicle: {
          make: "EICHER",
          regNo: "RJ10RC6231",
          model: "485",
          id: "0xabe0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0xac18",
        vehicle: {
          make: "KUBOTA",
          regNo: "KUBOT5501",
          model: "MU5501",
          id: "0xac19",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b4",
          },
          vehicleModel: {
            id: "0x1dbc5",
          },
        },
      },
      {
        id: "0xac1d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP14",
          model: "475 DI",
          id: "0xac1e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xac84",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ575DIXPPLUS",
          model: "575 DI XP Plus",
          id: "0xac85",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0xac88",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19AC9170",
          model: "275 DI XP Plus",
          id: "0xac89",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xac92",
        vehicle: {
          make: "EICHER",
          regNo: "MP19380EICHER",
          model: "380",
          id: "0xac93",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0xaca1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MPYUVO275DI",
          model: "YUVO 275 DI",
          id: "0xaca2",
          tempMake: "DEUTZ_FAHR",
          tempModel: "3042 E",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da91",
          },
        },
      },
      {
        id: "0xacb4",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP19AC8127",
          model: "735 FE",
          id: "0xacb2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xacea",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ2012",
          model: "1035 DI",
          id: "0xaceb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xacef",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "241RJ",
          model: "241 R",
          id: "0xacf0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0xacff",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RB7889",
          model: "YUVO 275 DI",
          id: "0xad00",
          tempMake: "MAHINDRA",
          tempModel: "YUVO 275 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da91",
          },
        },
      },
      {
        id: "0xad1a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ265DI",
          model: "265 DI POWER PLUS",
          id: "0xad1b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da5d",
          },
        },
      },
      {
        id: "0xad24",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ475SWM",
          model: "475 DI",
          id: "0xad25",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xadcd",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RB1821",
          model: "1035 DI",
          id: "0xadce",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xadd5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "M275DINESH",
          model: "275 DI TU SP Plus",
          id: "0xadd7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0xadff",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ25LAX",
          model: "1035 DI Tonner",
          id: "0xae00",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0xae11",
        vehicle: {
          make: "SWARAJ",
          regNo: "744XT2020",
          model: "744 XT",
          id: "0xae13",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0xae1d",
        vehicle: {
          make: "EICHER",
          regNo: "RJ18RB1795",
          model: "380 Super Power",
          id: "0xae1b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d9eb",
          },
        },
      },
      {
        id: "0xae24",
        vehicle: {
          make: "MAHINDRA",
          regNo: "575DI2019",
          model: "575 DI",
          id: "0xae25",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0xae2e",
        vehicle: {
          make: "SWARAJ",
          regNo: "855SWARAJ2015",
          model: "855 FE",
          id: "0xae2f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0xaf07",
        vehicle: {
          make: "SONALIKA",
          regNo: "SONALIKA50",
          model: "RX 750 III DLX",
          id: "0xaf08",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d96e",
          },
        },
      },
      {
        id: "0xaf27",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP21AA6786",
          model: "YUVO 415 DI",
          id: "0xaf28",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d92c",
          },
        },
      },
      {
        id: "0xaf37",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP21AA9836",
          model: "555 DI Powerplus",
          id: "0xaf38",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d901",
          },
        },
      },
      {
        id: "0xaf53",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP54A2181",
          model: "DI 35 Rx",
          id: "0xaf54",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db4c",
          },
        },
      },
      {
        id: "0xaf83",
        vehicle: {
          make: "MAHINDRA",
          regNo: "275MM2020",
          model: "275 DI XP Plus",
          id: "0xaf84",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xb06e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "YOVU475",
          model: "YUVO 475 DI",
          id: "0xb06f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8ce",
          },
        },
      },
      {
        id: "0xb072",
        vehicle: {
          make: "KUBOTA",
          regNo: "MU5501",
          model: "MU5501 2WD",
          id: "0xb073",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b4",
          },
          vehicleModel: {
            id: "0x1dba5",
          },
        },
      },
      {
        id: "0xb07c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "575DI2010",
          model: "575 DI",
          id: "0xb07a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0xb0b3",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MF1035DI",
          model: "1035 DI MAHA SHAKTI",
          id: "0xb0b4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0xb0ba",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FT45VMAX",
          model: "45",
          id: "0xb0b8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0xb0bd",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "1035DI",
          model: "1035 DI MAHA SHAKTI",
          id: "0xb0bf",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0xb0c3",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "45JD",
          model: "5045 D",
          id: "0xb0c4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dc0f",
          },
        },
      },
      {
        id: "0xb9a7",
        vehicle: {
          make: "SWARAJ",
          regNo: "SWARAJ735FEE",
          model: "735 FE",
          id: "0xb9a8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xba37",
        vehicle: {
          make: "EICHER",
          regNo: "MPEICHER333N",
          model: "333",
          id: "0xba38",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbe3",
          },
        },
      },
      {
        id: "0xba63",
        vehicle: {
          make: "SWARAJ",
          regNo: "735XT",
          model: "735 XT",
          id: "0xba62",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d973",
          },
        },
      },
      {
        id: "0xbab1",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ052013",
          model: "241 DI MAHA SHAKTI",
          id: "0xbab2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xbac8",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "241MF2012",
          model: "241 DI MAHA SHAKTI",
          id: "0xbac9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xbe40",
        vehicle: {
          make: "FARMTRAC",
          regNo: "60SUPER",
          model: "60 supermax",
          id: "0xbe41",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db37",
          },
        },
      },
      {
        id: "0xbe45",
        vehicle: {
          make: "ESCORTS",
          regNo: "MPPOWERDS439",
          model: "PT Euro47",
          id: "0xbe46",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0xbe48",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASS241",
          model: "241 di maha shakti",
          id: "0xbe49",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xbe4b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RA810",
          model: "1035 DI",
          id: "0xbe4c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xbe67",
        vehicle: {
          make: "SONALIKA",
          regNo: "SODI35",
          model: "Sikander DI 35",
          id: "0xbe68",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d9ed",
          },
        },
      },
      {
        id: "0xbedc",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "B241DI",
          model: "241 R",
          id: "0xbedd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0xbf4a",
        vehicle: {
          make: "EICHER",
          regNo: "RJ4RA6810",
          model: "380",
          id: "0xbf49",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0xc060",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP20AB8173",
          model: "Arjun 555 DI",
          id: "0xc061",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbe5",
          },
        },
      },
      {
        id: "0xc080",
        vehicle: {
          make: "EICHER",
          regNo: "2017EICHR368",
          model: "368",
          id: "0xc081",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db32",
          },
        },
      },
      {
        id: "0xc098",
        vehicle: {
          make: "MAHINDRA",
          regNo: "275DI2016",
          model: "275 DI TU",
          id: "0xc099",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0xc0d4",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP52AA1555",
          model: "735 FE",
          id: "0xc0d5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xc0f3",
        vehicle: {
          make: "EICHER",
          regNo: "MP20EICHER2017",
          model: "380",
          id: "0xc0f5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0xc11f",
        vehicle: {
          make: "EICHER",
          regNo: "MP14AD2077",
          model: "380",
          id: "0xc120",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0xc125",
        vehicle: {
          make: "MAHINDRA",
          regNo: "475DI2011",
          model: "475 DI",
          id: "0xc124",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xc13f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "415MAHINDRA",
          model: "415 DI",
          id: "0xc140",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0xc175",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10DI475YUVO",
          model: "YUVO 475 DI",
          id: "0xc176",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8ce",
          },
        },
      },
      {
        id: "0xc1ad",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FT60EPI",
          model: "60 EPI Supermaxx",
          id: "0xc1ab",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dbf1",
          },
        },
      },
      {
        id: "0xc22d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "275DI2104",
          model: "275 DI TU",
          id: "0xc22e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0xc23b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "475DI2014",
          model: "475 DI",
          id: "0xc23c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xc283",
        vehicle: {
          make: "MAHINDRA",
          regNo: "575DI2022",
          model: "575 DI XP Plus",
          id: "0xc281",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0xc287",
        vehicle: {
          make: "SWARAJ",
          regNo: "SWARJ735",
          model: "735 FE",
          id: "0xc288",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xc29f",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ51RA4192",
          model: "1035 DI",
          id: "0xc29d",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI Tonner",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xc2eb",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ09RD3933",
          model: "CHAMPION XP 41",
          id: "0xc2ec",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d994",
          },
        },
      },
      {
        id: "0xc2f1",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ51RA6561",
          model: "45 Classic",
          id: "0xc2ef",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d8cc",
          },
        },
      },
      {
        id: "0xc2f5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ275BWM",
          model: "275 DI XP Plus",
          id: "0xc2f6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xc2fa",
        vehicle: {
          make: "EICHER",
          regNo: "380SWM",
          model: "380",
          id: "0xc2fb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0xc308",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "5039D2021",
          model: "5039 D",
          id: "0xc309",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d906",
          },
        },
      },
      {
        id: "0xc3c1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19AB2686",
          model: "YUVO 575 DI",
          id: "0xc3c2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8ea",
          },
        },
      },
      {
        id: "0xc3ec",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ11DESU",
          model: "735 FE",
          id: "0xc3ed",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xc491",
        vehicle: {
          make: "EICHER",
          regNo: "MP19ECHR485",
          model: "485",
          id: "0xc492",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0xc4d7",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP19JD5036",
          model: "5036 C",
          id: "0xc4d8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1db3a",
          },
        },
      },
      {
        id: "0xc4f6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "475DESU",
          model: "475 DI",
          id: "0xc4f7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xc54e",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FARM41",
          model: "CHAMPION XP 41",
          id: "0xc54f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d994",
          },
        },
      },
      {
        id: "0xc56e",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ21MASSY",
          model: "1035 DI Tonner",
          id: "0xc56f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0xc581",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ19RJ4227",
          model: "475 DI XP Plus MS",
          id: "0xc582",
          tempMake: "MAHINDRA",
          tempModel: "475 di xp plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8fc",
          },
        },
      },
      {
        id: "0xc63a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RB1528",
          model: "265 DI",
          id: "0xc63b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0xc651",
        vehicle: {
          make: "MAHINDRA",
          regNo: "575DI",
          model: "575 DI",
          id: "0xc652",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0xc684",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "241DI",
          model: "241 R",
          id: "0xc685",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0xc687",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ11RB1511",
          model: "241 r",
          id: "0xc686",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI Tonner",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0xc6f0",
        vehicle: {
          make: "SWARAJ",
          regNo: "744FE",
          model: "744 FE",
          id: "0xc6f1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0xc744",
        vehicle: {
          make: "MAHINDRA",
          regNo: "XP475",
          model: "475 DI XP Plus",
          id: "0xc742",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0xc77f",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "JD5310B",
          model: "5310",
          id: "0xc780",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9c8",
          },
        },
      },
      {
        id: "0xc7dd",
        vehicle: {
          make: "POWERTRAC",
          regNo: "2021EURO55",
          model: "Euro 55 Next",
          id: "0xc7de",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db1b",
          },
        },
      },
      {
        id: "0xc863",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ17RC1133",
          model: "50 EPI Supermaxx",
          id: "0xc864",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d99a",
          },
        },
      },
      {
        id: "0xc871",
        vehicle: {
          make: "EICHER",
          regNo: "MP19AB7992",
          model: "380",
          id: "0xc872",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0xc882",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "1035DI2018",
          model: "1035 DI",
          id: "0xc883",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xc895",
        vehicle: {
          make: "SONALIKA",
          regNo: "MM60SONALIKA2014",
          model: "DI 60 MM SUPER",
          id: "0xc896",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1dc15",
          },
        },
      },
      {
        id: "0xc91e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "47512",
          model: "475 DI",
          id: "0xc91f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0xc948",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP54AA0269",
          model: "Champion 42",
          id: "0xc946",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dbfb",
          },
        },
      },
      {
        id: "0xc9f8",
        vehicle: {
          make: "ESCORTS",
          regNo: "MP54AA1712",
          model: "PT Euro47",
          id: "0xc9f9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0xca06",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ23RC5301",
          model: "275 DI TU",
          id: "0xca07",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0xca0b",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP15AB6951",
          model: "434",
          id: "0xca0c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1da8c",
          },
        },
      },
      {
        id: "0xca0e",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FT6013",
          model: "60 Valuemaxx",
          id: "0xca0f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0xca38",
        vehicle: {
          make: "MAHINDRA",
          regNo: "475XP2020",
          model: "475 DI XP Plus",
          id: "0xca39",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0xcab6",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FT6DESU",
          model: "60",
          id: "0xcab4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d9c2",
          },
        },
      },
      {
        id: "0xcaba",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MAS241",
          model: "241 R",
          id: "0xcabb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0xcac8",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ735FE",
          model: "735 FE",
          id: "0xcac9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xcafb",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FT45",
          model: "45",
          id: "0xcafc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0xcb1a",
        vehicle: {
          make: "SWARAJ",
          regNo: "742SWARAJ2022",
          model: "742 XT",
          id: "0xcb1b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d943",
          },
        },
      },
      {
        id: "0xcb55",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ07RB1810",
          model: "475 DI",
          id: "0xcb54",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xcb58",
        vehicle: {
          make: "KUBOTA",
          regNo: "RJ10RC4311",
          model: "MU4501 4WD",
          id: "0xcb5a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b4",
          },
          vehicleModel: {
            id: "0x1dab7",
          },
        },
      },
      {
        id: "0xcb78",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ211539",
          model: "265 DI",
          id: "0xcb79",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0xcb8d",
        vehicle: {
          make: "SONALIKA",
          regNo: "SONALIKA35DI2014",
          model: "DI 35",
          id: "0xcb8f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0xcb98",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "3630NH2017",
          model: "3630 Tx Special Edition",
          id: "0xcb99",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1da8a",
          },
        },
      },
      {
        id: "0xcb9f",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP54AA0118",
          model: "CHAMPION XP 41",
          id: "0xcba0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d994",
          },
        },
      },
      {
        id: "0xcbe8",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ46RB8428",
          model: "1035 DI",
          id: "0xcbea",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 di",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xcbec",
        vehicle: {
          make: "EICHER",
          regNo: "RJ05RC8071",
          model: "380",
          id: "0xcbed",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0xcbf0",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RB623",
          model: "241 R",
          id: "0xcbf2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0xcbf6",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RB542",
          model: "241 R",
          id: "0xcbf7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0xcc09",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "5310JD21",
          model: "5310",
          id: "0xcc0b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9c8",
          },
        },
      },
      {
        id: "0xcc2e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "TIGER",
          model: "275 DI XP Plus",
          id: "0xcc2d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xcc37",
        vehicle: {
          make: "FARMTRAC",
          regNo: "45FARM",
          model: "45",
          id: "0xcc38",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0xcc7a",
        vehicle: {
          make: "SWARAJ",
          regNo: "SWRAJ733",
          model: "733 FE",
          id: "0xcc79",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1daa9",
          },
        },
      },
      {
        id: "0xcca4",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "181035",
          model: "1035 DI Tonner",
          id: "0xcca5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0xcdaf",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASSE2013",
          model: "1035 DI Tonner",
          id: "0xcdb0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0xce5b",
        vehicle: {
          make: "FARMTRAC",
          regNo: "SUPERMAX60",
          model: "60 supermax",
          id: "0xce5c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db37",
          },
        },
      },
      {
        id: "0xcf4a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25585",
          model: "585 DI Power Plus BP",
          id: "0xcf49",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d932",
          },
        },
      },
      {
        id: "0xcf6e",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "JD36D",
          model: "5036 D",
          id: "0xcf6f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dade",
          },
        },
      },
      {
        id: "0xcf93",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ34RA5568",
          model: "735 FE",
          id: "0xcf94",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xd00a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RA9619",
          model: "275 DI XP Plus",
          id: "0xd00b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xd023",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RB6232",
          model: "475 DI",
          id: "0xd024",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xd0c5",
        vehicle: {
          make: "EICHER",
          regNo: "EICHER485",
          model: "485",
          id: "0xd0c6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0xd13d",
        vehicle: {
          make: "EICHER",
          regNo: "MP368EICHER",
          model: "368",
          id: "0xd13f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db32",
          },
        },
      },
      {
        id: "0xd149",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RA6784",
          model: "575 di",
          id: "0xd14a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0xd174",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ20FT60",
          model: "60 supermax",
          id: "0xd172",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db37",
          },
        },
      },
      {
        id: "0xd1b4",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "19M1035",
          model: "1035 DI Tonner",
          id: "0xd1b5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0xd2a2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ275DIXP",
          model: "275 DI XP Plus",
          id: "0xd2a3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xd2ba",
        vehicle: {
          make: "EICHER",
          regNo: "MP17AB4824",
          model: "485",
          id: "0xd2b8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0xd2bc",
        vehicle: {
          make: "SWARAJ",
          regNo: "744FEE",
          model: "744 FE",
          id: "0xd2bd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0xd2c1",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "5055E",
          model: "5055 E",
          id: "0xd2c2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dac6",
          },
        },
      },
      {
        id: "0xd3fd",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RAJ241",
          model: "241 DI MAHA SHAKTI",
          id: "0xd3fe",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xd426",
        vehicle: {
          make: "MAHINDRA",
          regNo: "575M12",
          model: "575 DI",
          id: "0xd425",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0xd48a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ17RB3595",
          model: "245 DI",
          id: "0xd48b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d9a9",
          },
        },
      },
      {
        id: "0xd52a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ275BHIL",
          model: "275 DI XP Plus",
          id: "0xd52b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xd5b3",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RB9043",
          model: "415 di",
          id: "0xd5b5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0xd631",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ241TO",
          model: "241 R",
          id: "0xd62f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0xd73f",
        vehicle: {
          make: "EICHER",
          regNo: "MP380EICHER",
          model: "380",
          id: "0xd740",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0xd76a",
        vehicle: {
          make: "SWARAJ",
          regNo: "744FEEE",
          model: "744 FE",
          id: "0xd76b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0xd7cd",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34R2303",
          model: "1035 DI",
          id: "0xd7ce",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xd7d3",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MPFARMTRAC39",
          model: "champion 39",
          id: "0xd7d1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0xd800",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MESSY1035",
          model: "1035 DI Tonner",
          id: "0xd801",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0xd81d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "M2016",
          model: "275 DI XP Plus",
          id: "0xd81e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xd822",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ23RB3254",
          model: "475 DI",
          id: "0xd823",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xd975",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RB2544",
          model: "475 DI",
          id: "0xd974",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xd9c3",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MMM275",
          model: "275 DI XP Plus",
          id: "0xd9c4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xda14",
        vehicle: {
          make: "MAHINDRA",
          regNo: "575M14",
          model: "575 DI",
          id: "0xda15",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0xda85",
        vehicle: {
          make: "EICHER",
          regNo: "MP17EICHER380",
          model: "380",
          id: "0xda87",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0xdab4",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ07RD2502",
          model: "1035 DI",
          id: "0xdab5",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xdbad",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP17MM265",
          model: "265 DI",
          id: "0xdbae",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0xdbf9",
        vehicle: {
          make: "KUBOTA",
          regNo: "RJ4501",
          model: "MU4501 2WD",
          id: "0xdbfa",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b4",
          },
          vehicleModel: {
            id: "0x1d9b7",
          },
        },
      },
      {
        id: "0xdc01",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ02RD4501",
          model: "241 R",
          id: "0xdc02",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0xdc2c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "YUVO575DI2017",
          model: "YUVO 575 DI",
          id: "0xdc2a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8ea",
          },
        },
      },
      {
        id: "0xdc2e",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP6055FT2017",
          model: "6055 Classic",
          id: "0xdc2f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db4f",
          },
        },
      },
      {
        id: "0xdc31",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM415DI2016",
          model: "415 DI",
          id: "0xdc32",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0xdc54",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP54A9197",
          model: "834 XM",
          id: "0xdc56",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d909",
          },
        },
      },
      {
        id: "0xdc7b",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ11FTT45",
          model: "45",
          id: "0xdc7c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0xdc81",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM585B",
          model: "585 DI XP Plus",
          id: "0xdc82",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0xdc86",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ29245",
          model: "245 DI",
          id: "0xdc87",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d9a9",
          },
        },
      },
      {
        id: "0xde46",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ29RB3944",
          model: "60",
          id: "0xde47",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d9c2",
          },
        },
      },
      {
        id: "0xde4c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ12RA6097",
          model: "275 DI TU",
          id: "0xde4d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0xde4e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "M605ARJUNULTRA",
          model: "Arjun Ultra 1 605 Di",
          id: "0xde4f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbf6",
          },
        },
      },
      {
        id: "0xde61",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RA9659",
          model: "275 DI XP Plus",
          id: "0xde62",
          tempMake: "MAHINDRA",
          tempModel: "275 di tu",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xde64",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ241TONNER",
          model: "241 DI Tonner",
          id: "0xde65",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d95a",
          },
        },
      },
      {
        id: "0xdf56",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP54SWARAJ834",
          model: "834 XM",
          id: "0xdf55",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d909",
          },
        },
      },
      {
        id: "0xdf63",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP21AQ2523",
          model: "275 DI TU",
          id: "0xdf64",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0xdfcf",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ05RC2156",
          model: "241 DI PLANETARY PLUS",
          id: "0xdfd0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da9f",
          },
        },
      },
      {
        id: "0xdfd4",
        vehicle: {
          make: "MAHINDRA",
          regNo: "LM275",
          model: "275 DI XP Plus",
          id: "0xdfd5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xe041",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ11RB2815",
          model: "735 FE",
          id: "0xe042",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xe050",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP54MASSEY",
          model: "1035 DI Dost",
          id: "0xe051",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc1f",
          },
        },
      },
      {
        id: "0xe07f",
        vehicle: {
          make: "EICHER",
          regNo: "RJ380R",
          model: "380",
          id: "0xe07e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0xe083",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ475T",
          model: "475 DI XP Plus",
          id: "0xe084",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0xe0c1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ475DISI",
          model: "475 DI",
          id: "0xe0c2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xe0c9",
        vehicle: {
          make: "SWARAJ",
          regNo: "735FEEM19",
          model: "735 FE",
          id: "0xe0ca",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xe0ce",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ07RE3262",
          model: "735 FE",
          id: "0xe0cf",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xe0e2",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ51RA1056",
          model: "45",
          id: "0xe0e3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0xe103",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP54265DI",
          model: "265 DI",
          id: "0xe104",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0xe127",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ11RB1148",
          model: "241 R",
          id: "0xe128",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0xe137",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ28JD",
          model: "5105",
          id: "0xe138",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0xe27b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RB7538",
          model: "275 DI TU",
          id: "0xe27c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0xe289",
        vehicle: {
          make: "SONALIKA",
          regNo: "SONALIKA35",
          model: "Sikander DI 35",
          id: "0xe28a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d9ed",
          },
        },
      },
      {
        id: "0xe2b1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "575MM16",
          model: "575 DI",
          id: "0xe2b2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0xe2c4",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ25RA3835",
          model: "1035 DI",
          id: "0xe2c5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xe35b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "241M20",
          model: "241 di maha shakti",
          id: "0xe35c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xe3c5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC6822",
          model: "275 DI XP Plus",
          id: "0xe3c4",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xe402",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ17RC7914",
          model: "1035 DI",
          id: "0xe403",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xe46b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MM10",
          model: "1035 DI",
          id: "0xe469",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xe4c5",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP21MASSEY241",
          model: "241 DI MAHA SHAKTI",
          id: "0xe4c6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xe4db",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RA8975",
          model: "1035 di",
          id: "0xe4d9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xe52f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP14AD6913",
          model: "475 DI XP Plus",
          id: "0xe530",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0xe5fd",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ51RA5280",
          model: "415 DI",
          id: "0xe5fe",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0xe66a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19MH275DIXP",
          model: "275 DI TU XP Plus",
          id: "0xe66b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db3e",
          },
        },
      },
      {
        id: "0xe697",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP54AA0775",
          model: "5105",
          id: "0xe698",
          tempMake: "JOHN_DEERE",
          tempModel: "5105",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0xe6cf",
        vehicle: {
          make: "MAHINDRA",
          regNo: "275YUVO",
          model: "YUVO TECH Plus 275 DI",
          id: "0xe6d0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc23",
          },
        },
      },
      {
        id: "0xe6e6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP18MM415",
          model: "415 di xp plus",
          id: "0xe6e7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9e8",
          },
        },
      },
      {
        id: "0xe6fa",
        vehicle: {
          make: "EICHER",
          regNo: "EICHER2012",
          model: "333",
          id: "0xe6fb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbe3",
          },
        },
      },
      {
        id: "0xe701",
        vehicle: {
          make: "EICHER",
          regNo: "2017EICHER",
          model: "380",
          id: "0xe702",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0xe70a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MM245",
          model: "245 DI",
          id: "0xe70b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d9a9",
          },
        },
      },
      {
        id: "0xe715",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ275DISWM",
          model: "275 DI TU",
          id: "0xe716",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0xe771",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ14RC2899",
          model: "275 DI ECO",
          id: "0xe772",
          tempMake: "MAHINDRA",
          tempModel: "275 di tu",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d983",
          },
        },
      },
      {
        id: "0xe9cd",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MF241BWM",
          model: "241 R",
          id: "0xe9ce",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0xe9de",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ475DISWM",
          model: "475 DI",
          id: "0xe9df",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xe9fb",
        vehicle: {
          make: "POWERTRAC",
          regNo: "EURO60",
          model: "Euro 60",
          id: "0xe9fc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1dc2b",
          },
        },
      },
      {
        id: "0xea01",
        vehicle: {
          make: "POWERTRAC",
          regNo: "POWERTRAC439PLUS",
          model: "439 Plus",
          id: "0xe9ff",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1da66",
          },
        },
      },
      {
        id: "0xea14",
        vehicle: {
          make: "EICHER",
          regNo: "MP19EICHER2017MH",
          model: "368",
          id: "0xea12",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db32",
          },
        },
      },
      {
        id: "0xea94",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ30RA7240",
          model: "475 DI",
          id: "0xea95",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xeb02",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ11RA8860",
          model: "DI 35",
          id: "0xeb04",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0xeb1b",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP21FARMTRAC",
          model: "45 Classic Supermaxx",
          id: "0xeb19",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da6c",
          },
        },
      },
      {
        id: "0xeb42",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP54A9575",
          model: "Champion Plus",
          id: "0xeb43",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db71",
          },
        },
      },
      {
        id: "0xecf2",
        vehicle: {
          make: "EICHER",
          regNo: "MP54AAEICHER380",
          model: "380",
          id: "0xecf3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0xed81",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ42RA3899",
          model: "475 DI XP Plus",
          id: "0xed82",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0xed8d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "475MHDIXPPLUS",
          model: "475 di xp plus",
          id: "0xed8e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0xed91",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ03RB5054",
          model: "275 DI XP Plus",
          id: "0xed8f",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xed9a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ12RB2119",
          model: "275 di xp plus",
          id: "0xed9b",
          tempMake: "MAHINDRA",
          tempModel: "275 di xp plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xedab",
        vehicle: {
          make: "SONALIKA",
          regNo: "SONALIKADIRX35",
          model: "DI 35",
          id: "0xedac",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0xedb7",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ12RA9428",
          model: "265 DI",
          id: "0xedb8",
          tempMake: "MAHINDRA",
          tempModel: "265 DI POWER PLUS",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0xedc9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ12RB0855",
          model: "475 DI",
          id: "0xedc7",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xedd3",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP54AA1035MAHASKATI",
          model: "1035 DI MAHA SHAKTI",
          id: "0xedd4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0xee14",
        vehicle: {
          make: "SONALIKA",
          regNo: "MH18BX4434",
          model: "42 DI Sikander",
          id: "0xee16",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1da34",
          },
        },
      },
      {
        id: "0xee2b",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP54AAFARMTRAC2020",
          model: "Champion 42",
          id: "0xee29",
          tempMake: "FARMTRAC",
          tempModel: "champion 39",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dbfb",
          },
        },
      },
      {
        id: "0xee2f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP15AC6665",
          model: "275 DI TU",
          id: "0xee30",
          tempMake: "MAHINDRA",
          tempModel: "275 DI SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0xee3b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP20AA5893",
          model: "275 DI TU",
          id: "0xee3c",
          tempMake: "MAHINDRA",
          tempModel: "275 DI SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0xee41",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP15AB9503",
          model: "265 DI",
          id: "0xee42",
          tempMake: "MAHINDRA",
          tempModel: "265 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0xee4e",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP54A3247",
          model: "834 XM",
          id: "0xee4f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d909",
          },
        },
      },
      {
        id: "0xee5b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP18AB7983",
          model: "275 DI XP Plus",
          id: "0xee5d",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xee6a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP18ZA5643",
          model: "275 DI XP Plus",
          id: "0xee6b",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xef34",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ48RA8701",
          model: "60 PowerMaxx 4WD",
          id: "0xef35",
          tempMake: "FARMTRAC",
          tempModel: "60 PowerMaxx 4WD",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d956",
          },
        },
      },
      {
        id: "0xef5e",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ07RF5223",
          model: "45 Powermaxx",
          id: "0xef5f",
          tempMake: "FARMTRAC",
          tempModel: "45 Classic",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db1c",
          },
        },
      },
      {
        id: "0xefad",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ20RB5792",
          model: "744 XT",
          id: "0xefab",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0xefd1",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RC1428",
          model: "1035 DI MAHA SHAKTI",
          id: "0xefd2",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI MAHA SHAKTI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0xf0be",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RD2313",
          model: "575 DI XP Plus",
          id: "0xf0bf",
          tempMake: "MAHINDRA",
          tempModel: "575 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0xf0c1",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ27RC2522",
          model: "DI 35",
          id: "0xf0c2",
          tempMake: "SONALIKA",
          tempModel: "di 35",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0xf0c3",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "RJ21RK4541",
          model: "3032 Nx",
          id: "0xf0c4",
          tempMake: "NEW_HOLLAND",
          tempModel: "3032 Nx",
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1d9a3",
          },
        },
      },
      {
        id: "0xf0c7",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ36RA4951",
          model: "1035 DI",
          id: "0xf0c8",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 di",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xf0ca",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ52RA3966",
          model: "241 4WD",
          id: "0xf0cb",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI Tonner",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d9ab",
          },
        },
      },
      {
        id: "0xf0cc",
        vehicle: {
          make: "SWARAJ",
          regNo: "855SAWARAJ",
          model: "855 XM",
          id: "0xf0cd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1da9b",
          },
        },
      },
      {
        id: "0xf0d2",
        vehicle: {
          make: "EICHER",
          regNo: "MP45AC5814",
          model: "368",
          id: "0xf0d3",
          tempMake: "EICHER",
          tempModel: "368",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db32",
          },
        },
      },
      {
        id: "0xf0d4",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP10ZA3659",
          model: "475 DI XP Plus",
          id: "0xf0d5",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0xf0d8",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP15ZC0513",
          model: "1035 DI MAHA SHAKTI",
          id: "0xf0d7",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0xf0f5",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ23RC6100",
          model: "45 Classic",
          id: "0xf0f6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d8cc",
          },
        },
      },
      {
        id: "0xf0fb",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP08ZB7432",
          model: "735 FE",
          id: "0xf0fc",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xf121",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MM012",
          model: "275 DI XP Plus",
          id: "0xf122",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xf12b",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP45AC5149",
          model: "di 35",
          id: "0xf12c",
          tempMake: "SONALIKA",
          tempModel: "DI 35",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0xf131",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP08ZB0968",
          model: "744 XT",
          id: "0xf132",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0xf138",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP32ZA3661",
          model: "265 DI XP Plus",
          id: "0xf139",
          tempMake: "MAHINDRA",
          tempModel: "265 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da2f",
          },
        },
      },
      {
        id: "0xf146",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP33ZA8909",
          model: "265 DI",
          id: "0xf147",
          tempMake: "MAHINDRA",
          tempModel: "265 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0xf14a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ44RA1858",
          model: "475 DI",
          id: "0xf14b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xf181",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "5038JD",
          model: "5038 D",
          id: "0xf182",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d91c",
          },
        },
      },
      {
        id: "0xf1c6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP12ZB3402",
          model: "575 DI XP Plus",
          id: "0xf1c7",
          tempMake: "MAHINDRA",
          tempModel: "575 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0xf1cb",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP36AB1461",
          model: "575 DI XP Plus",
          id: "0xf1cc",
          tempMake: "MAHINDRA",
          tempModel: "575 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0xf1ce",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP51ZA4018",
          model: "439 DS Super Saver",
          id: "0xf1cf",
          tempMake: "POWERTRAC",
          tempModel: "439 Plus",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d95e",
          },
        },
      },
      {
        id: "0xf1dc",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP51ZA8177",
          model: "439 DS Super Saver",
          id: "0xf1dd",
          tempMake: "POWERTRAC",
          tempModel: "439 DS Super Saver",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d95e",
          },
        },
      },
      {
        id: "0xf1e1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP16ZA8918",
          model: "275 DI TU XP Plus",
          id: "0xf1df",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db3e",
          },
        },
      },
      {
        id: "0xf1ed",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "1035DESU",
          model: "1035 di",
          id: "0xf1ee",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xf281",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MPMASSEY241DI",
          model: "241 DI MAHA SHAKTI",
          id: "0xf282",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xf2a6",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FTD",
          model: "60",
          id: "0xf2a4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d9c2",
          },
        },
      },
      {
        id: "0xf390",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FT60DE",
          model: "60 Valuemaxx",
          id: "0xf391",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0xf3ab",
        vehicle: {
          make: "MAHINDRA",
          regNo: "VGY",
          model: "275 DI XP Plus",
          id: "0xf3ac",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xf48f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RB1369",
          model: "475 DI",
          id: "0xf490",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xf4be",
        vehicle: {
          make: "MAHINDRA",
          regNo: "585",
          model: "585 di xp plus",
          id: "0xf4bf",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0xf506",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19ZB5579",
          model: "475 DI XP Plus",
          id: "0xf507",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0xf55e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19ZC0210MH",
          model: "275 DI TU XP Plus",
          id: "0xf55f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db3e",
          },
        },
      },
      {
        id: "0xf579",
        vehicle: {
          make: "FARMTRAC",
          regNo: "2016FARMTRAC45",
          model: "45 Classic",
          id: "0xf57a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d8cc",
          },
        },
      },
      {
        id: "0xf589",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ10RC4189",
          model: "Champion XP 41 Plus",
          id: "0xf58a",
          tempMake: "FARMTRAC",
          tempModel: "Champion XP 41 Plus",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d953",
          },
        },
      },
      {
        id: "0xf6ca",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP18AB5584",
          model: "275 DI TU XP Plus",
          id: "0xf6cb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db3e",
          },
        },
      },
      {
        id: "0xf6ed",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP54ZA1035MASSEY",
          model: "1035 DI",
          id: "0xf6ef",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xf78d",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "1035M18",
          model: "1035 DI Tonner",
          id: "0xf78e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0xf790",
        vehicle: {
          make: "POWERTRAC",
          regNo: "POWEATRACK",
          model: "439 ds super saver",
          id: "0xf791",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d95e",
          },
        },
      },
      {
        id: "0xf7b9",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ09RE5351",
          model: "1035 DI",
          id: "0xf7b8",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xf7bb",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RC1892",
          model: "1035 DI",
          id: "0xf7bc",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xf7bf",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ30RB1764",
          model: "1035 DI",
          id: "0xf7be",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xf7c0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RD0024",
          model: "275 DI XP Plus",
          id: "0xf7c1",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xf7c4",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ22RC0789",
          model: "265 DI",
          id: "0xf7c5",
          tempMake: "MAHINDRA",
          tempModel: "265 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0xf7c7",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ43RB1858",
          model: "735 FE",
          id: "0xf7c8",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xf7cb",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ51RA7783",
          model: "475 DI",
          id: "0xf7cd",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0xf80d",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ01RB5664",
          model: "5310",
          id: "0xf80e",
          tempMake: "JOHN_DEERE",
          tempModel: "5310",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9c8",
          },
        },
      },
      {
        id: "0xf81f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH25AS8694",
          model: "Arjun 555 DI",
          id: "0xf820",
          tempMake: "MAHINDRA",
          tempModel: "arjun 555 di",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbe5",
          },
        },
      },
      {
        id: "0xf823",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19DV9590",
          model: "744 XT",
          id: "0xf821",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0xf825",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH12UW1631",
          model: "744 FE",
          id: "0xf824",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0xf828",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH18BX2126",
          model: "744 XT",
          id: "0xf829",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0xf82b",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH29BV6618",
          model: "744 FE",
          id: "0xf82c",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0xf82d",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MH41BH8275",
          model: "5045 D",
          id: "0xf82f",
          tempMake: "JOHN_DEERE",
          tempModel: "5045 d",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dc0f",
          },
        },
      },
      {
        id: "0xf876",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "1035M14",
          model: "1035 DI Tonner",
          id: "0xf877",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0xf87d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH29BV7395",
          model: "YUVO TECH Plus 585",
          id: "0xf87e",
          tempMake: "MAHINDRA",
          tempModel: "YUVO TECH Plus 585",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db3f",
          },
        },
      },
      {
        id: "0xf880",
        vehicle: {
          make: "KUBOTA",
          regNo: "MH44Z0652",
          model: "MU5501 2WD",
          id: "0xf881",
          tempMake: "KUBOTA",
          tempModel: "MU5501 2WD",
          vehicleBrand: {
            id: "0x1d8b4",
          },
          vehicleModel: {
            id: "0x1dba5",
          },
        },
      },
      {
        id: "0xf883",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "MH23BC9561",
          model: "3600-2 TX All Rounder plus 4WD",
          id: "0xf884",
          tempMake: "NEW_HOLLAND",
          tempModel: "3600-2 TX All Rounder Plus",
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1d9cc",
          },
        },
      },
      {
        id: "0xf886",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "1035M13",
          model: "1035 DI",
          id: "0xf887",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0xf888",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH29BV7210",
          model: "575 di",
          id: "0xf889",
          tempMake: "MAHINDRA",
          tempModel: "575 di",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0xf88f",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH16CY9584",
          model: "744 XT",
          id: "0xf88d",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0xfabd",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP20SWARAJ735",
          model: "735 FE",
          id: "0xfabe",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xfae0",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ21RK8108",
          model: "841 XM",
          id: "0xfae1",
          tempMake: "SWARAJ",
          tempModel: "841 XM",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dc04",
          },
        },
      },
      {
        id: "0xfaf8",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ42RA4531",
          model: "245 DI",
          id: "0xfaf9",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "245 DI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d9a9",
          },
        },
      },
      {
        id: "0xfb09",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ20RB6261",
          model: "241 DI MAHA SHAKTI",
          id: "0xfb0a",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI MAHAAN",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0xfb2d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "575XP",
          model: "575 DI XP Plus",
          id: "0xfb2e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0xfc99",
        vehicle: {
          make: "SWARAJ",
          regNo: "SWRAJ35",
          model: "735 FE",
          id: "0xfc9a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0xfd02",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ28RD1503",
          model: "241 R",
          id: "0xfd03",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 di maha shakti",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0xfdfb",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ33RA3842",
          model: "575 DI",
          id: "0xfdfc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0xfe28",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ18RC5561",
          model: "275 DI XP Plus",
          id: "0xfe29",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xfe2a",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ03RB4165",
          model: "CHAMPION 35",
          id: "0xfe2b",
          tempMake: "FARMTRAC",
          tempModel: "champion 35",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da1a",
          },
        },
      },
      {
        id: "0xfe37",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ19RH3166",
          model: "275 DI XP Plus",
          id: "0xfe38",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0xfe40",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ241D",
          model: "241 R",
          id: "0xfe41",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0xfe43",
        vehicle: {
          make: "EICHER",
          regNo: "RJ27RB7232",
          model: "380",
          id: "0xfe44",
          tempMake: "EICHER",
          tempModel: "380",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x1049b",
        vehicle: {
          make: "EICHER",
          regNo: "EICER",
          model: "380",
          id: "0x1049c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x104bc",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ11RB3409",
          model: "241 R",
          id: "0x104ba",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x10d77",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ20RB5702",
          model: "744 XT",
          id: "0x10d78",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x10dbd",
        vehicle: {
          make: "SONALIKA",
          regNo: "SONALIKA50DI",
          model: "50 RX SIKANDER",
          id: "0x10dbe",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1daa5",
          },
        },
      },
      {
        id: "0x113ce",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ07RC7493",
          model: "744 FE",
          id: "0x113cf",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x113d1",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP33ZB1164",
          model: "DI 50 Rx",
          id: "0x113d2",
          tempMake: "SONALIKA",
          tempModel: "DI 50 Rx",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d93a",
          },
        },
      },
      {
        id: "0x113ed",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP15AD2231",
          model: "5105",
          id: "0x113ee",
          tempMake: "JOHN_DEERE",
          tempModel: "5105",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x1144a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "0RJ10RC0266",
          model: "585 di power plus bp",
          id: "0x1144b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d932",
          },
        },
      },
      {
        id: "0x11458",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ02RF3875",
          model: "60 supermax",
          id: "0x11459",
          tempMake: "FARMTRAC",
          tempModel: "60",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db37",
          },
        },
      },
      {
        id: "0x1145b",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP51AB0443",
          model: "DI 35 Rx",
          id: "0x1145c",
          tempMake: "SONALIKA",
          tempModel: "DI 35",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db4c",
          },
        },
      },
      {
        id: "0x1146d",
        vehicle: {
          make: "EICHER",
          regNo: "MP07ZE8125",
          model: "485",
          id: "0x1146e",
          tempMake: "EICHER",
          tempModel: "485",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x11470",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ02RF5302",
          model: "241 r",
          id: "0x11472",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI DYNATRACK",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x1149d",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ02RE7773",
          model: "60 Valuemaxx",
          id: "0x1149e",
          tempMake: "FARMTRAC",
          tempModel: "60",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x114a8",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ02RR9590",
          model: "241 R",
          id: "0x114aa",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x114ad",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH18BX2765",
          model: "742 XT",
          id: "0x114ae",
          tempMake: "SWARAJ",
          tempModel: "742 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d943",
          },
        },
      },
      {
        id: "0x114d3",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ02RF0565",
          model: "241 R",
          id: "0x114d5",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI DYNATRACK",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x1151c",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ02RE8579",
          model: "1035 DI Dost",
          id: "0x1151d",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc1f",
          },
        },
      },
      {
        id: "0x11539",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ02RF9266",
          model: "241 R",
          id: "0x1153a",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 di tonner",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x11572",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ02RE8352",
          model: "5036 D",
          id: "0x11573",
          tempMake: "JOHN_DEERE",
          tempModel: "5105",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dade",
          },
        },
      },
      {
        id: "0x1167c",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RA4364",
          model: "1035 di",
          id: "0x1167d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x11681",
        vehicle: {
          make: "MAHINDRA",
          regNo: "475",
          model: "475 DI XP Plus",
          id: "0x11682",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x118a7",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19EA5447",
          model: "744 XT",
          id: "0x118a8",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x1191b",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ46RB8119",
          model: "DI 35",
          id: "0x1191c",
          tempMake: "SONALIKA",
          tempModel: "DI 35",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x1191e",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ57RA0094",
          model: "724 XM",
          id: "0x1191f",
          tempMake: "SWARAJ",
          tempModel: "724 XM",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1da20",
          },
        },
      },
      {
        id: "0x1193c",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ02RF9590",
          model: "241 R",
          id: "0x1193d",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI Tonner",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x11968",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ23RC9590",
          model: "5105",
          id: "0x11969",
          tempMake: "JOHN_DEERE",
          tempModel: "5105",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x1196b",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ06RD4651",
          model: "5105",
          id: "0x1196c",
          tempMake: "JOHN_DEERE",
          tempModel: "5105",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x11972",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ12RB1724",
          model: "275 DI XP Plus",
          id: "0x11974",
          tempMake: "MAHINDRA",
          tempModel: "275 di xp plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x11998",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP18AB8401",
          model: "Champion 39",
          id: "0x11996",
          tempMake: "FARMTRAC",
          tempModel: "Champion 39",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0x11a04",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP18AB7969",
          model: "275 DI TU",
          id: "0x11a02",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x11a08",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP52AA4868",
          model: "DI 35 Rx",
          id: "0x11a09",
          tempMake: "SONALIKA",
          tempModel: "DI 35 Rx",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db4c",
          },
        },
      },
      {
        id: "0x11a10",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP51AB3362",
          model: "DI 35 Rx",
          id: "0x11a11",
          tempMake: "SONALIKA",
          tempModel: "DI 50 Rx",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db4c",
          },
        },
      },
      {
        id: "0x11a13",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP51ZA4632",
          model: "275 DI SP Plus",
          id: "0x11a14",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f8",
          },
        },
      },
      {
        id: "0x11a17",
        vehicle: {
          make: "EICHER",
          regNo: "MP04AJ2449",
          model: "485",
          id: "0x11a15",
          tempMake: "EICHER",
          tempModel: "485 super plus",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x11a18",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ02RE9590",
          model: "241 r",
          id: "0x11a1a",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI Tonner",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x11a2d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP21AA3955",
          model: "275 di tu",
          id: "0x11a2e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x11b76",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP15ZB0804",
          model: "45 Powermaxx",
          id: "0x11b74",
          tempMake: "FARMTRAC",
          tempModel: "45",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db1c",
          },
        },
      },
      {
        id: "0x11b79",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH18BX1353",
          model: "742 XT",
          id: "0x11b7b",
          tempMake: "SWARAJ",
          tempModel: "742 xt",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d943",
          },
        },
      },
      {
        id: "0x11b91",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ26RC6034",
          model: "Champion Plus",
          id: "0x11b92",
          tempMake: "FARMTRAC",
          tempModel: "Champion XP 41 Plus",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db71",
          },
        },
      },
      {
        id: "0x11b96",
        vehicle: {
          make: "KUBOTA",
          regNo: "MH44S4112",
          model: "MU5501",
          id: "0x11b98",
          tempMake: "KUBOTA",
          tempModel: "MU5501",
          vehicleBrand: {
            id: "0x1d8b4",
          },
          vehicleModel: {
            id: "0x1dbc5",
          },
        },
      },
      {
        id: "0x11bc8",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "MH17CR6641",
          model: "3600-2TX",
          id: "0x11bc9",
          tempMake: "NEW_HOLLAND",
          tempModel: "3600-2 Tx  Super",
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1d8d2",
          },
        },
      },
      {
        id: "0x11bcd",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH14HK5262",
          model: "475 di",
          id: "0x11bcf",
          tempMake: "MAHINDRA",
          tempModel: "475 di",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x11bda",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH21BV2286",
          model: "724 XM",
          id: "0x11bdb",
          tempMake: "SWARAJ",
          tempModel: "724 XM ORCHARD",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1da20",
          },
        },
      },
      {
        id: "0x11c13",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19AC7598",
          model: "YUVO 275 DI",
          id: "0x11c14",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da91",
          },
        },
      },
      {
        id: "0x11c4a",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ20RB5184",
          model: "di 50 sikander",
          id: "0x11c4b",
          tempMake: "SONALIKA",
          tempModel: "DI 35 Rx",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db59",
          },
        },
      },
      {
        id: "0x11c52",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ28RD0763",
          model: "CHAMPION 35",
          id: "0x11c53",
          tempMake: "FARMTRAC",
          tempModel: "champion 35",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da1a",
          },
        },
      },
      {
        id: "0x11c6c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ08RC3943",
          model: "275 DI XP Plus",
          id: "0x11c6d",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x11c73",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ08RC4334",
          model: "241 DI MAHA SHAKTI",
          id: "0x11c72",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI DYNATRACK",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x11c83",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ28RD1235",
          model: "CHAMPION 35",
          id: "0x11c84",
          tempMake: "FARMTRAC",
          tempModel: "CHAMPION 35",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da1a",
          },
        },
      },
      {
        id: "0x11c90",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ34RB0477",
          model: "735 FE",
          id: "0x11c91",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x11cdd",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP54AAMASSEY1035",
          model: "1035 DI MAHA SHAKTI",
          id: "0x11cdf",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x11d10",
        vehicle: {
          make: "EICHER",
          regNo: "MP54AA2018",
          model: "380",
          id: "0x11d0e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x11e53",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ34RB5316",
          model: "735 FE",
          id: "0x11e54",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x11e68",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ34RA9737",
          model: "735 FE",
          id: "0x11e69",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x11f46",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP21AA4984",
          model: "1035 DI MAHA SHAKTI",
          id: "0x11f47",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x11f61",
        vehicle: {
          make: "MAHINDRA",
          regNo: "575M16",
          model: "575 DI",
          id: "0x11f62",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x11f68",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "MP35AB0502",
          model: "3037 TX",
          id: "0x11f66",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1db5e",
          },
        },
      },
      {
        id: "0x1201a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ02RG1597",
          model: "475 DI XP Plus",
          id: "0x1201b",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x12104",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "JD5050D",
          model: "5050 D",
          id: "0x12106",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9e2",
          },
        },
      },
      {
        id: "0x12149",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RB0837",
          model: "1035 DI",
          id: "0x1214a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x12181",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ05RB9702",
          model: "241 R",
          id: "0x12182",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x1218a",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "JHANGAGA",
          model: "5105",
          id: "0x1218b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x1219c",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASI",
          model: "1035 DI",
          id: "0x1219d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x121a1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RC8002",
          model: "575 DI XP Plus",
          id: "0x121a2",
          tempMake: "MAHINDRA",
          tempModel: "575 di xp plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x121eb",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP19AC9834",
          model: "5050 D",
          id: "0x121ec",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9e2",
          },
        },
      },
      {
        id: "0x12332",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP19AB6487",
          model: "1035 DI MAHA SHAKTI",
          id: "0x12333",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x125a2",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP19AASONALIKA35",
          model: "DI 35",
          id: "0x125a3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x125ac",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP19AC5181",
          model: "1035 DI Dost",
          id: "0x125ad",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc1f",
          },
        },
      },
      {
        id: "0x1283b",
        vehicle: {
          make: "EICHER",
          regNo: "MP19AC8318",
          model: "330",
          id: "0x1283c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dc2a",
          },
        },
      },
      {
        id: "0x1283f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19AC4573",
          model: "415 di",
          id: "0x1283d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0x12896",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RC2989",
          model: "275 di xp plus",
          id: "0x12897",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1289b",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ19RF5128",
          model: "841 XM",
          id: "0x1289c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dc04",
          },
        },
      },
      {
        id: "0x128b0",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ01RB3715",
          model: "45",
          id: "0x128b1",
          tempMake: "FARMTRAC",
          tempModel: "45 Classic",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x12983",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ30RB1851",
          model: "275 DI XP Plus",
          id: "0x12984",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1298e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP51ZA5182",
          model: "265 DI",
          id: "0x12992",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x12990",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ02RG2514",
          model: "5105",
          id: "0x129a0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x12994",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ02RF5925",
          model: "585 DI XP Plus",
          id: "0x1298f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0x12996",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP41ZB0875",
          model: "45 Classic",
          id: "0x1298d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d8cc",
          },
        },
      },
      {
        id: "0x12997",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP20AC0857",
          model: "YUVO 275 DI",
          id: "0x129a3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da91",
          },
        },
      },
      {
        id: "0x12999",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH15HU2107",
          model: "744 FE",
          id: "0x1298c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x1299b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP14AB0256",
          model: "275 DI XP Plus",
          id: "0x129a6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1299c",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RB0491",
          model: "1035 DI",
          id: "0x12995",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x1299d",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP36AA3960",
          model: "5036 C",
          id: "0x129a9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1db3a",
          },
        },
      },
      {
        id: "0x1299e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ40RA2508",
          model: "475 DI",
          id: "0x1298a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x129a7",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ02RG0676",
          model: "5039 C",
          id: "0x129a5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dbdf",
          },
        },
      },
      {
        id: "0x129ad",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP65AA2946",
          model: "5045 D 4WD",
          id: "0x129ae",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d8dd",
          },
        },
      },
      {
        id: "0x129e8",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "MP35AANEW3037",
          model: "3037 TX Super",
          id: "0x129e7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1d90f",
          },
        },
      },
      {
        id: "0x13225",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "JD5042DD",
          model: "5042 D PowerPro",
          id: "0x13226",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9a4",
          },
        },
      },
      {
        id: "0x13247",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RA9394",
          model: "1035 di",
          id: "0x13248",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x132b5",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "RJ10RB9950",
          model: "3600-2 Tx  Super",
          id: "0x132b6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1dbaf",
          },
        },
      },
      {
        id: "0x132db",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJ04RC8763",
          model: "439 RDX",
          id: "0x132dc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d952",
          },
        },
      },
      {
        id: "0x132f5",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ11RB4654",
          model: "735 FE",
          id: "0x132f6",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x13325",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC5218",
          model: "275 DI XP Plus",
          id: "0x13326",
          tempMake: "MAHINDRA",
          tempModel: "275 di xp plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x13373",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ19RC4116",
          model: "45",
          id: "0x13374",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x133dc",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ17RC9935",
          model: "1035 DI",
          id: "0x133dd",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x133f4",
        vehicle: {
          make: "EICHER",
          regNo: "MP19AC0489",
          model: "380",
          id: "0x133f3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x13418",
        vehicle: {
          make: "EICHER",
          regNo: "MP19AC0229",
          model: "368",
          id: "0x13419",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db32",
          },
        },
      },
      {
        id: "0x13422",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ13RD4064",
          model: "DI 50 Rx",
          id: "0x13424",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d93a",
          },
        },
      },
      {
        id: "0x13433",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "RJ28RD1450",
          model: "3032 Nx",
          id: "0x13434",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1d9a3",
          },
        },
      },
      {
        id: "0x134ab",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ19RG5947",
          model: "45",
          id: "0x134ac",
          tempMake: "FARMTRAC",
          tempModel: "45",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x134c1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ21RK8272",
          model: "475 DI XP Plus",
          id: "0x134c2",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus MS",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x13527",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ05RB5205",
          model: "475 DI",
          id: "0x13526",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x135fd",
        vehicle: {
          make: "SWARAJ",
          regNo: "744XT20",
          model: "744 XT",
          id: "0x135fe",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x136a7",
        vehicle: {
          make: "KUBOTA",
          regNo: "MP34AA4133",
          model: "MU5501 2WD",
          id: "0x136a8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b4",
          },
          vehicleModel: {
            id: "0x1dba5",
          },
        },
      },
      {
        id: "0x13cd3",
        vehicle: {
          make: "FARMTRAC",
          regNo: "FT45SUPERMAX",
          model: "45",
          id: "0x13cd4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x13cda",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RB8215",
          model: "415 DI",
          id: "0x13cd8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0x13cde",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19AB6070",
          model: "275 di tu",
          id: "0x13cdf",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x13ced",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP17AB9455",
          model: "275 DI TU",
          id: "0x13cee",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x13cff",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP19AC2377",
          model: "241 DI Tonner",
          id: "0x13d01",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d95a",
          },
        },
      },
      {
        id: "0x13d04",
        vehicle: {
          make: "EICHER",
          regNo: "MP17AB6903",
          model: "380",
          id: "0x13d05",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x13d4a",
        vehicle: {
          make: "EICHER",
          regNo: "RJ02RG0016",
          model: "380",
          id: "0x13d4c",
          tempMake: "EICHER",
          tempModel: "380",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x13dbc",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ19RE8312",
          model: "DI 60 RX",
          id: "0x13dbd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1da08",
          },
        },
      },
      {
        id: "0x13dea",
        vehicle: {
          make: "FARMTRAC",
          regNo: "UA08J3324",
          model: "45",
          id: "0x13deb",
          tempMake: "FARMTRAC",
          tempModel: "45",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x13dff",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ19RE6104",
          model: "DI 740 III S3",
          id: "0x13e00",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1dbf9",
          },
        },
      },
      {
        id: "0x13e09",
        vehicle: {
          make: "SONALIKA",
          regNo: "SONA740",
          model: "DI 740 III S3",
          id: "0x13e0a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1dbf9",
          },
        },
      },
      {
        id: "0x13e29",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ28RA8136",
          model: "241 di maha shakti",
          id: "0x13e2a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x13e36",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ28RD0797",
          model: "MM 35 DI",
          id: "0x13e37",
          tempMake: "SONALIKA",
          tempModel: "di 35",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d94f",
          },
        },
      },
      {
        id: "0x13e3a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ32RA9239",
          model: "TAFE 30 DI Orchard Plus",
          id: "0x13e3b",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "TAFE 30 DI Orchard Plus",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dbad",
          },
        },
      },
      {
        id: "0x13e3e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ02RE5540",
          model: "475 DI",
          id: "0x13e3f",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x13e41",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ08RB5643",
          model: "575 di",
          id: "0x13e42",
          tempMake: "MAHINDRA",
          tempModel: "575 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x13e48",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ20RB5422",
          model: "241 di maha shakti",
          id: "0x13e49",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 di tonner",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x13e4d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ18RC3964",
          model: "475 DI XP Plus",
          id: "0x13e4e",
          tempMake: "MAHINDRA",
          tempModel: "475 di xp plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x13e4f",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RC2978",
          model: "241 DI MAHA SHAKTI",
          id: "0x13e50",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI MAHAAN",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x13e53",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ22RB1684",
          model: "265 di",
          id: "0x13e54",
          tempMake: "MAHINDRA",
          tempModel: "265 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x13e56",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ49RA5154",
          model: "744 FE",
          id: "0x13e57",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x13e5d",
        vehicle: {
          make: "EICHER",
          regNo: "RJ27RB9319",
          model: "380",
          id: "0x13e5e",
          tempMake: "EICHER",
          tempModel: "380",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x13e60",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ16RB0108",
          model: "275 DI TU",
          id: "0x13e61",
          tempMake: "MAHINDRA",
          tempModel: "275 di tu",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x13e63",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ07RF4569",
          model: "841 XM",
          id: "0x13e64",
          tempMake: "SWARAJ",
          tempModel: "841 XM",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dc04",
          },
        },
      },
      {
        id: "0x13e79",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ24RA8352",
          model: "241 di maha shakti",
          id: "0x13e7b",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 di mahaan",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x13e82",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP19AC0526",
          model: "DI 734 Power Plus",
          id: "0x13e83",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d984",
          },
        },
      },
      {
        id: "0x13e84",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ10RC1365",
          model: "241 DI MAHA SHAKTI",
          id: "0x13e85",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI Tonner",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x13e8a",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ24RA6792",
          model: "744 FE",
          id: "0x13e8b",
          tempMake: "SWARAJ",
          tempModel: "744 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x13f49",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ04RC2144",
          model: "241 DI MAHA SHAKTI",
          id: "0x13f4a",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI DYNATRACK",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x13fa8",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ22RC1743",
          model: "475 DI XP Plus",
          id: "0x13fa7",
          tempMake: "MAHINDRA",
          tempModel: "475 di xp plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x13ff6",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP19AC8414",
          model: "735 FE",
          id: "0x13ff7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x14055",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ30RA9907",
          model: "275 di xp plus",
          id: "0x14056",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1405a",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJ04RB8069",
          model: "434 Plus",
          id: "0x14059",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1da8c",
          },
        },
      },
      {
        id: "0x14066",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ28RB6763",
          model: "DI 740 III S3",
          id: "0x14067",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1dbf9",
          },
        },
      },
      {
        id: "0x14089",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ03RB4630",
          model: "735 FE",
          id: "0x1408a",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x140ae",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RB2190",
          model: "475 DI",
          id: "0x140af",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x140b5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RA9504",
          model: "275 DI SP Plus",
          id: "0x140b6",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f8",
          },
        },
      },
      {
        id: "0x140e0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RB8452",
          model: "585 DI Power Plus BP",
          id: "0x140e2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d932",
          },
        },
      },
      {
        id: "0x14138",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ19RG9317",
          model: "1035 di",
          id: "0x14139",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x14146",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ43RA3331",
          model: "265 DI",
          id: "0x14147",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x14172",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP54AA0121",
          model: "Champion Plus",
          id: "0x14173",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db71",
          },
        },
      },
      {
        id: "0x14177",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ21RF4582",
          model: "575 DI",
          id: "0x14176",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x14188",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ19RD1188",
          model: "265 DI",
          id: "0x1418a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x14209",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP54A1806",
          model: "834 XM",
          id: "0x1420a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d909",
          },
        },
      },
      {
        id: "0x14225",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ07RE3278",
          model: "744 XT",
          id: "0x14226",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x14307",
        vehicle: {
          make: "SWARAJ",
          regNo: "735FEE",
          model: "735 FE",
          id: "0x14308",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x1430d",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "245DI",
          model: "245 DI Planetary Plus",
          id: "0x1430b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da93",
          },
        },
      },
      {
        id: "0x14312",
        vehicle: {
          make: "EICHER",
          regNo: "RJ06RD0639",
          model: "380",
          id: "0x14310",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x14316",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ43RA0418",
          model: "1035 DI",
          id: "0x14317",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x1431b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RA8669",
          model: "275 DI XP Plus",
          id: "0x1431c",
          tempMake: "MAHINDRA",
          tempModel: "275 di tu",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1434f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ43RB2070",
          model: "YUVO 275 DI",
          id: "0x14350",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da91",
          },
        },
      },
      {
        id: "0x1439f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RA869",
          model: "275 DI XP Plus",
          id: "0x1439e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x143ac",
        vehicle: {
          make: "EICHER",
          regNo: "MP21AA4006",
          model: "380",
          id: "0x143ad",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x143b3",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ19RE1770",
          model: "DI 745 III",
          id: "0x143b4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x143b8",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP21AA2008",
          model: "DI 35 Rx",
          id: "0x143b9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db4c",
          },
        },
      },
      {
        id: "0x144aa",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ28RB0416",
          model: "5042 D",
          id: "0x144ab",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d945",
          },
        },
      },
      {
        id: "0x145bb",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MASSEY103522",
          model: "1035 DI Tonner",
          id: "0x145bc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0x14662",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ15RB2143",
          model: "241 di tonner",
          id: "0x14664",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d95a",
          },
        },
      },
      {
        id: "0x1490e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ40RA3233",
          model: "275 DI TU",
          id: "0x1490f",
          tempMake: "MAHINDRA",
          tempModel: "265 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x149d7",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06RD4087",
          model: "475 DI XP Plus",
          id: "0x149d8",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus MS",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x149dc",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ13RE6003",
          model: "265 DI",
          id: "0x149dd",
          tempMake: "MAHINDRA",
          tempModel: "265 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x149e5",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ04RC5438",
          model: "735 FE",
          id: "0x149e6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x14b9f",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ25RA9676",
          model: "855 FE",
          id: "0x14b9e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0x14bc1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ29RB4794",
          model: "475 DI",
          id: "0x14bc2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x14da4",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ44RA2696",
          model: "1035 DI Tonner",
          id: "0x14da5",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 di",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d978",
          },
        },
      },
      {
        id: "0x14dcb",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RA4575",
          model: "575 DI",
          id: "0x14dcc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x14df6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RB5396",
          model: "265 DI",
          id: "0x14df7",
          tempMake: "MAHINDRA",
          tempModel: "265 di",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x14eb4",
        vehicle: {
          make: "ESCORTS",
          regNo: "HR28A4746",
          model: "JOSH 335",
          id: "0x14eb5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b8",
          },
          vehicleModel: {
            id: "0x1d915",
          },
        },
      },
      {
        id: "0x14efc",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJ27RB9948",
          model: "439 DS Super Saver",
          id: "0x14efd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d95e",
          },
        },
      },
      {
        id: "0x14f49",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ21RF4587",
          model: "475 DI",
          id: "0x14f4a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x14fa9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RB9016",
          model: "475 DI",
          id: "0x14faa",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x14fda",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ43RA1793",
          model: "575 DI",
          id: "0x14fdc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x15016",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RA6094",
          model: "575 DI",
          id: "0x15017",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x151c7",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ08RC0746",
          model: "60 supermax",
          id: "0x151c8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db37",
          },
        },
      },
      {
        id: "0x15200",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RB3533",
          model: "275 DI XP Plus",
          id: "0x151ff",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x15236",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ43RA5047",
          model: "475 DI",
          id: "0x15237",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x15247",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ15RA5798",
          model: "60 Supermaxx",
          id: "0x15248",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dbcd",
          },
        },
      },
      {
        id: "0x1525c",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJ43RA5332",
          model: "euro 50",
          id: "0x1525d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db48",
          },
        },
      },
      {
        id: "0x1527d",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ08RB5833",
          model: "60 Valuemaxx",
          id: "0x1527b",
          tempMake: "FARMTRAC",
          tempModel: "60",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x15344",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ43RA2407",
          model: "241 DI Tonner",
          id: "0x15345",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d95a",
          },
        },
      },
      {
        id: "0x153ae",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ19RD7927",
          model: "DI 35 Rx",
          id: "0x153ad",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db4c",
          },
        },
      },
      {
        id: "0x153c9",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "JD5105M22",
          model: "5105",
          id: "0x153c7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x153cd",
        vehicle: {
          make: "MAHINDRA",
          regNo: "585MM",
          model: "585 DI XP Plus",
          id: "0x153ce",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0x153d0",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ12RB8918",
          model: "1035 DI MAHA SHAKTI",
          id: "0x153d1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x153d9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ27RA4317",
          model: "275 DI XP Plus",
          id: "0x153da",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x153df",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ19RF0091",
          model: "841 XM",
          id: "0x153e0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dc04",
          },
        },
      },
      {
        id: "0x15437",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ19RE2124",
          model: "DI 35",
          id: "0x15438",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x1566d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ27RA5374",
          model: "275 di xp plus",
          id: "0x1566e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x15691",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ43RA5225",
          model: "475 DI",
          id: "0x15692",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x156b4",
        vehicle: {
          make: "EICHER",
          regNo: "RJ39RA1389",
          model: "333",
          id: "0x156b5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbe3",
          },
        },
      },
      {
        id: "0x156d3",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ27RA9846",
          model: "275 DI SP Plus",
          id: "0x156d4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f8",
          },
        },
      },
      {
        id: "0x1574a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ28RB2332",
          model: "241 DI MAHA SHAKTI",
          id: "0x1574b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x157f4",
        vehicle: {
          make: "EICHER",
          regNo: "RJ27RB9945",
          model: "380",
          id: "0x157f5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x15b5c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJRA2882",
          model: "475 DI",
          id: "0x15b5d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x15b66",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJ43RA4689",
          model: "Euro 50",
          id: "0x15b67",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db48",
          },
        },
      },
      {
        id: "0x15b6c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ15RA2882",
          model: "475 DI",
          id: "0x15b6a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x15b8a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ07RD7500",
          model: "1035 DI",
          id: "0x15b89",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x15bca",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ09RC3489",
          model: "735 XT",
          id: "0x15bcb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d973",
          },
        },
      },
      {
        id: "0x15bea",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ22RB7012",
          model: "275 DI TU",
          id: "0x15beb",
          tempMake: "MAHINDRA",
          tempModel: "275 di tu",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x15c42",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ08RC1845",
          model: "275 DI XP Plus",
          id: "0x15c43",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x15c45",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ15RA9292",
          model: "841 XM",
          id: "0x15c46",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dc04",
          },
        },
      },
      {
        id: "0x15cdb",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ12RA6735",
          model: "45",
          id: "0x15cdc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x15d06",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ15RA6515",
          model: "275 DI XP Plus",
          id: "0x15d07",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x15d70",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RA1805",
          model: "1035 DI MAHA SHAKTI",
          id: "0x15d71",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x15e9e",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ37RB0778",
          model: "733 FE",
          id: "0x15e9f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1daa9",
          },
        },
      },
      {
        id: "0x15f04",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RB1320",
          model: "1035 di",
          id: "0x15f05",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x15f63",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ12RA2580",
          model: "1035 DI MAHA SHAKTI",
          id: "0x15f64",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x15fc9",
        vehicle: {
          make: "EICHER",
          regNo: "RJ15RB3798",
          model: "380",
          id: "0x15fc7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x1602e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RB7545",
          model: "415 DI",
          id: "0x1602f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0x16093",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ21RK8829",
          model: "475 DI XP Plus MS",
          id: "0x16091",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8fc",
          },
        },
      },
      {
        id: "0x16094",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH24BL9259",
          model: "Arjun 555 DI",
          id: "0x16095",
          tempMake: "MAHINDRA",
          tempModel: "575 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbe5",
          },
        },
      },
      {
        id: "0x16097",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ19RE2824",
          model: "241 DI PLANETARY PLUS",
          id: "0x16099",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da9f",
          },
        },
      },
      {
        id: "0x160a2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ02RD9376",
          model: "275 DI XP Plus",
          id: "0x160a3",
          tempMake: "MAHINDRA",
          tempModel: "275 di tu",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x160f5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC9352",
          model: "585 di xp plus",
          id: "0x160f3",
          tempMake: "MAHINDRA",
          tempModel: "585 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0x160fd",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RD1978",
          model: "575 DI XP Plus",
          id: "0x160fe",
          tempMake: "MAHINDRA",
          tempModel: "575 di xp plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x16134",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ03RB5089",
          model: "475 DI XP Plus MS",
          id: "0x16135",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8fc",
          },
        },
      },
      {
        id: "0x161b0",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ12RB0460",
          model: "champion 39",
          id: "0x161af",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0x161b1",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ12RA0458",
          model: "Champion 39",
          id: "0x161b3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0x161f7",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ43RB0741",
          model: "735 FE",
          id: "0x161f8",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x161fb",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ28RD0882",
          model: "742 XT",
          id: "0x161f9",
          tempMake: "SWARAJ",
          tempModel: "742 xt",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d943",
          },
        },
      },
      {
        id: "0x161ff",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ12RB0458",
          model: "Champion 39",
          id: "0x16200",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0x16206",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP52AA4970",
          model: "735 FE",
          id: "0x16207",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x16222",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ08RC3566",
          model: "275 DI XP Plus",
          id: "0x16223",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1622a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC9778",
          model: "275 DI XP Plus",
          id: "0x1622b",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x16232",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH24BR1948",
          model: "Arjun 555 DI",
          id: "0x16233",
          tempMake: "MAHINDRA",
          tempModel: "arjun 555 di",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbe5",
          },
        },
      },
      {
        id: "0x16235",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH24BL7578",
          model: "744 XT",
          id: "0x16236",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x1624b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RB4213",
          model: "275 DI TU",
          id: "0x16249",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x1624d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP06ZA8810",
          model: "575 DI XP Plus",
          id: "0x1624e",
          tempMake: "MAHINDRA",
          tempModel: "Arjun 555 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x16252",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ43RA0275",
          model: "241 di maha shakti",
          id: "0x16251",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x16256",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP19ZB0862",
          model: "733 FE",
          id: "0x16257",
          tempMake: "SWARAJ",
          tempModel: "733 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1daa9",
          },
        },
      },
      {
        id: "0x1625f",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ06RD5449",
          model: "DI 734 Power Plus",
          id: "0x16260",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d984",
          },
        },
      },
      {
        id: "0x16288",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP35ZA5247",
          model: "415 DI XP PLUS",
          id: "0x16289",
          tempMake: "MAHINDRA",
          tempModel: "415 DI XP PLUS",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9e8",
          },
        },
      },
      {
        id: "0x16322",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ12RB1850",
          model: "1035 DI MAHA SHAKTI",
          id: "0x16323",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1030 DI MAHA SHAKTI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x16354",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP40ZB1473",
          model: "275 DI XP Plus",
          id: "0x16355",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x163e8",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RA9368",
          model: "575 di",
          id: "0x163e9",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x16450",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP37CA3502",
          model: "585 di xp plus",
          id: "0x16451",
          tempMake: "MAHINDRA",
          tempModel: "585 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0x164a6",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH10DG5817",
          model: "724 XM",
          id: "0x164a7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1da20",
          },
        },
      },
      {
        id: "0x164c8",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH13DM1434",
          model: "724 XM",
          id: "0x164c9",
          tempMake: "SWARAJ",
          tempModel: "724 XM ORCHARD",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1da20",
          },
        },
      },
      {
        id: "0x164d1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH27DL0179",
          model: "575 DI",
          id: "0x164cf",
          tempMake: "MAHINDRA",
          tempModel: "575 di",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x164db",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP07AB8332",
          model: "275 DI TU XP Plus",
          id: "0x164dd",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db3e",
          },
        },
      },
      {
        id: "0x164e5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH38V9592",
          model: "575 DI SP Plus",
          id: "0x164e3",
          tempMake: "MAHINDRA",
          tempModel: "575 di sp plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbde",
          },
        },
      },
      {
        id: "0x164eb",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP14AE2142",
          model: "475 DI XP Plus",
          id: "0x164ec",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus MS",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x164ef",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP32ZA2872",
          model: "265 DI",
          id: "0x164f0",
          tempMake: "MAHINDRA",
          tempModel: "265 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x164ff",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH15JD4063",
          model: "575 DI SP Plus",
          id: "0x16500",
          tempMake: "MAHINDRA",
          tempModel: "575 DI SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbde",
          },
        },
      },
      {
        id: "0x16512",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP15AC5929",
          model: "735 FE",
          id: "0x16513",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x16531",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP06AC8624",
          model: "744 XT",
          id: "0x16532",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x16789",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ12RA3799",
          model: "Champion Plus",
          id: "0x1678a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db71",
          },
        },
      },
      {
        id: "0x1686c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06RC4672",
          model: "415 DI",
          id: "0x1686d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0x16b03",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RB6623",
          model: "275 DI TU",
          id: "0x16b04",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x16b08",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RB5112",
          model: "475 DI",
          id: "0x16b09",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x16b4a",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ51RA1906",
          model: "DI 745 III",
          id: "0x16b48",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x16b58",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RD2074",
          model: "475 DI",
          id: "0x16b56",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x16c1a",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ13RE5686",
          model: "45",
          id: "0x16c18",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x16c1c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP48ZB0668",
          model: "575 DI XP Plus",
          id: "0x16c1d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x16c20",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ19RH0326",
          model: "DI 740 III S3",
          id: "0x16c1e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1dbf9",
          },
        },
      },
      {
        id: "0x16c22",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RE3653",
          model: "265 DI",
          id: "0x16c23",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x16c25",
        vehicle: {
          make: "EICHER",
          regNo: "MP54AA2691",
          model: "333",
          id: "0x16c26",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbe3",
          },
        },
      },
      {
        id: "0x16c28",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ07RD0455",
          model: "744 FE",
          id: "0x16c29",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x16c2b",
        vehicle: {
          make: "EICHER",
          regNo: "RJ35RB3467",
          model: "485",
          id: "0x16c2c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x16c51",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP18ZA7143",
          model: "5105",
          id: "0x16c52",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x16c54",
        vehicle: {
          make: "EICHER",
          regNo: "MP69ZA9193",
          model: "485",
          id: "0x16c55",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x16c63",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ26RC4607",
          model: "475 DI XP Plus",
          id: "0x16c65",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x16c6c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RD2495",
          model: "475 DI XP Plus",
          id: "0x16c6d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x16c71",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC8709",
          model: "585 di xp plus",
          id: "0x16c72",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0x16c7d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RD2820",
          model: "585 DI XP Plus",
          id: "0x16c7f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0x16c82",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ20RB6398",
          model: "DI 35",
          id: "0x16c83",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x16c88",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RC9344",
          model: "475 DI XP Plus",
          id: "0x16c89",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x16cb4",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH14KF9227",
          model: "JIVO 245 DI",
          id: "0x16cb2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc14",
          },
        },
      },
      {
        id: "0x16cbf",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH28AZ3447",
          model: "475 DI",
          id: "0x16cc0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x16cc2",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH17BX2479",
          model: "744 FE",
          id: "0x16cc3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x16cc5",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "MH29BP9975",
          model: "3600-2TX",
          id: "0x16cc6",
          tempMake: "NEW_HOLLAND",
          tempModel: "3600-2 Tx  Super",
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1d8d2",
          },
        },
      },
      {
        id: "0x16cc7",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MH25AS4946",
          model: "5305",
          id: "0x16cc8",
          tempMake: "JOHN_DEERE",
          tempModel: "5305",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1da78",
          },
        },
      },
      {
        id: "0x16ccb",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ12RB1136",
          model: "275 DI XP Plus",
          id: "0x16ccc",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x16cce",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ27RC2530",
          model: "DI 35",
          id: "0x16ccf",
          tempMake: "SONALIKA",
          tempModel: "DI 35",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x16cd1",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ46RB8069",
          model: "735 FE",
          id: "0x16cd2",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x16ce4",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP51ZA7804",
          model: "275 DI SP Plus",
          id: "0x16ce5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f8",
          },
        },
      },
      {
        id: "0x16ce7",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP51ZA6621",
          model: "434 Plus",
          id: "0x16ce8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1da8c",
          },
        },
      },
      {
        id: "0x16cf3",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP51AB2909",
          model: "439 ds super saver",
          id: "0x16cf4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d95e",
          },
        },
      },
      {
        id: "0x16cf6",
        vehicle: {
          make: "EICHER",
          regNo: "MP54AA4039",
          model: "333",
          id: "0x16cf7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbe3",
          },
        },
      },
      {
        id: "0x16d34",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ07RF1418",
          model: "575 DI XP Plus",
          id: "0x16d33",
          tempMake: "MAHINDRA",
          tempModel: "575 di xp plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x16d36",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ07RC8004",
          model: "di 745 iii",
          id: "0x16d38",
          tempMake: "SONALIKA",
          tempModel: "di 745 iii",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x16d3e",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "MP41AD1236",
          model: "3600-2 Tx  Super",
          id: "0x16d3f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1dbaf",
          },
        },
      },
      {
        id: "0x16d42",
        vehicle: {
          make: "KUBOTA",
          regNo: "MP46ZA4626",
          model: "A211N-OP",
          id: "0x16d40",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b4",
          },
          vehicleModel: {
            id: "0x1dbfe",
          },
        },
      },
      {
        id: "0x16d43",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP22ZA7845",
          model: "585 DI XP Plus",
          id: "0x16d44",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0x16d50",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP42ZA7598",
          model: "DI 50 SIKANDER",
          id: "0x16d52",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db59",
          },
        },
      },
      {
        id: "0x16d6e",
        vehicle: {
          make: "EICHER",
          regNo: "MP46AA2224",
          model: "485",
          id: "0x16d6f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x16d79",
        vehicle: {
          make: "EICHER",
          regNo: "MP28ZB1218",
          model: "485",
          id: "0x16d7a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x16d84",
        vehicle: {
          make: "EICHER",
          regNo: "MP54ZA3305",
          model: "485",
          id: "0x16d85",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x16d90",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP15AD3462",
          model: "Champion 39",
          id: "0x16d8e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0x16d92",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP11AE5068",
          model: "275 DI XP Plus",
          id: "0x16d93",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x16d95",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP65ZA5597",
          model: "5105",
          id: "0x16d96",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x16dcd",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP28AD7308",
          model: "415 DI XP PLUS",
          id: "0x16dce",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9e8",
          },
        },
      },
      {
        id: "0x16ddc",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP18ZA8260",
          model: "5105",
          id: "0x16ddd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x16e96",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MH37V6448",
          model: "5050 D",
          id: "0x16e97",
          tempMake: "JOHN_DEERE",
          tempModel: "5050 D",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9e2",
          },
        },
      },
      {
        id: "0x16e9a",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH44Z0882",
          model: "744 XT",
          id: "0x16e98",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x16e9b",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "MP10AC5957",
          model: "3230 TX",
          id: "0x16e9d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1d962",
          },
        },
      },
      {
        id: "0x16e9f",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP46ZB7174",
          model: "735 FE",
          id: "0x16ea0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x16ea2",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP53ZA6481",
          model: "1035 DI MAHA SHAKTI",
          id: "0x16ea3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x16ea7",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP33ZB1659",
          model: "735 FE",
          id: "0x16ea8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x16f20",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ14RD6155",
          model: "241 R",
          id: "0x16f21",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI Tonner",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x16f41",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RD4773",
          model: "475 DI XP Plus",
          id: "0x16f42",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x1711e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RA5929",
          model: "475 DI",
          id: "0x1711f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x1712d",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ42RA4925",
          model: "45 Powermaxx",
          id: "0x1712c",
          tempMake: "FARMTRAC",
          tempModel: "45",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db1c",
          },
        },
      },
      {
        id: "0x17139",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "RJ46RB8590",
          model: "3230 TX",
          id: "0x17138",
          tempMake: "NEW_HOLLAND",
          tempModel: "3230 NX",
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1d962",
          },
        },
      },
      {
        id: "0x1714a",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ22RC1827",
          model: "CHAMPION 35",
          id: "0x17148",
          tempMake: "FARMTRAC",
          tempModel: "CHAMPION XP 41",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da1a",
          },
        },
      },
      {
        id: "0x1714b",
        vehicle: {
          make: "EICHER",
          regNo: "RJ13RE3504",
          model: "368",
          id: "0x1714c",
          tempMake: "EICHER",
          tempModel: "368",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db32",
          },
        },
      },
      {
        id: "0x17173",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06RD2444",
          model: "475 DI XP Plus",
          id: "0x17174",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x1717d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06RD2442",
          model: "475 DI XP Plus",
          id: "0x1717b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x1735e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ19RF0670",
          model: "575 di",
          id: "0x1735f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x1736b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ06RS2324",
          model: "241 DI DYNATRACK",
          id: "0x1736c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d9b3",
          },
        },
      },
      {
        id: "0x17397",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ25RB5652",
          model: "241 R",
          id: "0x17398",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x173ae",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ25RB2742",
          model: "1035 di",
          id: "0x173af",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x173b4",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ01RB6013",
          model: "MM 35 DI",
          id: "0x173b5",
          tempMake: "SONALIKA",
          tempModel: "mm 35 di",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d94f",
          },
        },
      },
      {
        id: "0x173de",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "RJ07RF6153",
          model: "3230 TX",
          id: "0x173df",
          tempMake: "NEW_HOLLAND",
          tempModel: "3230 TX Super",
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1d962",
          },
        },
      },
      {
        id: "0x173e5",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ09RD8485",
          model: "DI 35",
          id: "0x173e6",
          tempMake: "SONALIKA",
          tempModel: "DI 35",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x173ee",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RD8127",
          model: "275 DI XP Plus",
          id: "0x173f0",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x173fe",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RD8694",
          model: "275 DI XP Plus",
          id: "0x173ff",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1743b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RB5478",
          model: "241 r",
          id: "0x1743c",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI Tonner",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x17449",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ23RD3255",
          model: "Champion XP 41 Plus",
          id: "0x1744a",
          tempMake: "FARMTRAC",
          tempModel: "CHAMPION 35",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d953",
          },
        },
      },
      {
        id: "0x17473",
        vehicle: {
          make: "SONALIKA",
          regNo: "SONALIKA45",
          model: "745 RX III Sikander",
          id: "0x17471",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d8df",
          },
        },
      },
      {
        id: "0x17479",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "24MASSEY",
          model: "241 DI Tonner",
          id: "0x1747a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d95a",
          },
        },
      },
      {
        id: "0x17480",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ51RA3465",
          model: "241 DI DYNATRACK",
          id: "0x17481",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d9b3",
          },
        },
      },
      {
        id: "0x1748a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ51RD6793",
          model: "241 DI DYNATRACK",
          id: "0x1748b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d9b3",
          },
        },
      },
      {
        id: "0x174af",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ51AR6792",
          model: "475 DI XP Plus",
          id: "0x174b0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x174bc",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ51RB4231",
          model: "475 DI XP Plus",
          id: "0x174bd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x174d5",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ51RA8860",
          model: "735 FE",
          id: "0x174d4",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x17516",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP43ZB8928",
          model: "DI 42 RX",
          id: "0x17517",
          tempMake: "SONALIKA",
          tempModel: "DI 42 RX",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d939",
          },
        },
      },
      {
        id: "0x1753f",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP43ZC3618",
          model: "DI 734 Power Plus",
          id: "0x1753e",
          tempMake: "SONALIKA",
          tempModel: "DI 734 (S1)",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d984",
          },
        },
      },
      {
        id: "0x17541",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP45ZB1814",
          model: "Euro 42 Plus PowerHouse",
          id: "0x17542",
          tempMake: "POWERTRAC",
          tempModel: "Euro 42 PLUS",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db0d",
          },
        },
      },
      {
        id: "0x175cf",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ14RC5862",
          model: "1035 DI",
          id: "0x175d0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x175e0",
        vehicle: {
          make: "KUBOTA",
          regNo: "RJ25KUBOTA",
          model: "MU4501 2WD",
          id: "0x175e1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b4",
          },
          vehicleModel: {
            id: "0x1d9b7",
          },
        },
      },
      {
        id: "0x17620",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ03RB5769",
          model: "275 DI XP Plus",
          id: "0x17621",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x17623",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ25RC4601",
          model: "CHAMPION 35",
          id: "0x17624",
          tempMake: "FARMTRAC",
          tempModel: "CHAMPION 35",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da1a",
          },
        },
      },
      {
        id: "0x17626",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ39RA1125",
          model: "DI 35",
          id: "0x17627",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x176b2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ39RA4226",
          model: "275 DI XP Plus",
          id: "0x176b3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x17709",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ09RB4578",
          model: "241 DI DYNATRACK",
          id: "0x1770a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d9b3",
          },
        },
      },
      {
        id: "0x17753",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ27RC1359",
          model: "733 fe",
          id: "0x17754",
          tempMake: "SWARAJ",
          tempModel: "733 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1daa9",
          },
        },
      },
      {
        id: "0x17756",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RB7093",
          model: "241 DI MAHA SHAKTI",
          id: "0x17757",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 di tonner",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x17765",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ27RB9173",
          model: "DI 35",
          id: "0x17766",
          tempMake: "SONALIKA",
          tempModel: "di 35",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x1777b",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ25RB6139",
          model: "735 FE",
          id: "0x1777c",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x177bd",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP17AC1565",
          model: "Euro 60",
          id: "0x177be",
          tempMake: "POWERTRAC",
          tempModel: "Euro 60",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1dc2b",
          },
        },
      },
      {
        id: "0x177c9",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP68A4659",
          model: "Euro 50",
          id: "0x177ca",
          tempMake: "POWERTRAC",
          tempModel: "Euro 50",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db48",
          },
        },
      },
      {
        id: "0x177cd",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ12RB1897",
          model: "DI 740 III S3",
          id: "0x177cb",
          tempMake: "SONALIKA",
          tempModel: "DI 740 III S3",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1dbf9",
          },
        },
      },
      {
        id: "0x1789c",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ03RB2361",
          model: "MM 35 DI",
          id: "0x1789d",
          tempMake: "SONALIKA",
          tempModel: "MM 35 DI",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d94f",
          },
        },
      },
      {
        id: "0x178b0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ21RH1715",
          model: "YUVO 275 DI",
          id: "0x178b1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da91",
          },
        },
      },
      {
        id: "0x178b5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09BS4567",
          model: "275 DI XP Plus",
          id: "0x178b6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x178c4",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ44RA3100",
          model: "475 DI",
          id: "0x178c5",
          tempMake: "MAHINDRA",
          tempModel: "475 DI SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x17a3d",
        vehicle: {
          make: "EICHER",
          regNo: "RJ06RC8093",
          model: "380",
          id: "0x17a3b",
          tempMake: "EICHER",
          tempModel: "380",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x17ac0",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ06RC8301",
          model: "735 FE",
          id: "0x17ac1",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x17b68",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP54A3470",
          model: "DI 35 Rx",
          id: "0x17b69",
          tempMake: "SONALIKA",
          tempModel: "DI 35",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db4c",
          },
        },
      },
      {
        id: "0x17b75",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP54ZA4154",
          model: "Euro 47",
          id: "0x17b76",
          tempMake: "POWERTRAC",
          tempModel: "Euro 47",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db87",
          },
        },
      },
      {
        id: "0x17b86",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06RC2224",
          model: "Yuvo 575 DI 4WD",
          id: "0x17b84",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da74",
          },
        },
      },
      {
        id: "0x17bf9",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ31RC3973",
          model: "Tiger 50",
          id: "0x17bfa",
          tempMake: "SONALIKA",
          tempModel: "di 50 sikander",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d9ce",
          },
        },
      },
      {
        id: "0x17d38",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ119853",
          model: "475 DI SP Plus",
          id: "0x17d36",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db54",
          },
        },
      },
      {
        id: "0x17d3b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RB8818",
          model: "415 DI",
          id: "0x17d39",
          tempMake: "MAHINDRA",
          tempModel: "415 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0x17d3e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RA9853",
          model: "475 DI",
          id: "0x17d3f",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x17d5f",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ17RC8067",
          model: "1035 DI MAHA SHAKTI",
          id: "0x17d60",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x17d63",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJ11RB4991",
          model: "439 DS Super Saver",
          id: "0x17d61",
          tempMake: "POWERTRAC",
          tempModel: "439 Plus",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d95e",
          },
        },
      },
      {
        id: "0x17d66",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ18RB2946",
          model: "275 DI TU",
          id: "0x17d64",
          tempMake: "MAHINDRA",
          tempModel: "275 di tu",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x17d68",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ23RD0564",
          model: "60 PowerMaxx",
          id: "0x17d69",
          tempMake: "FARMTRAC",
          tempModel: "60",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dbcf",
          },
        },
      },
      {
        id: "0x17d6b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ23RC2291",
          model: "275 di tu",
          id: "0x17d6c",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x17d70",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ11RA9729",
          model: "1035 DI",
          id: "0x17d71",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x17d76",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ06AS4902",
          model: "DI 745 III",
          id: "0x17d77",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x17d7b",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ06AD4523",
          model: "45 powermaxx",
          id: "0x17d7c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db1c",
          },
        },
      },
      {
        id: "0x17eb1",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ11RB2978",
          model: "735 FE",
          id: "0x17eb2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x17eee",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ46RB2922",
          model: "Champion Plus",
          id: "0x17eef",
          tempMake: "FARMTRAC",
          tempModel: "CHAMPION 35",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db71",
          },
        },
      },
      {
        id: "0x17ef5",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ18RB9206",
          model: "DI 745 III",
          id: "0x17ef6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db1e",
          },
        },
      },
      {
        id: "0x17ef8",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP65ZA2362",
          model: "DI 734 (S1)",
          id: "0x17ef9",
          tempMake: "SONALIKA",
          tempModel: "DI 734 (S1)",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1dbd1",
          },
        },
      },
      {
        id: "0x17f00",
        vehicle: {
          make: "EICHER",
          regNo: "MP65ZA2865",
          model: "333",
          id: "0x17f01",
          tempMake: "EICHER",
          tempModel: "333",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbe3",
          },
        },
      },
      {
        id: "0x17f88",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RB8155",
          model: "475 DI",
          id: "0x17f89",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x17fa8",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06BP4564",
          model: "475 DI XP Plus",
          id: "0x17faa",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x17feb",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ11RB3152",
          model: "735 FE",
          id: "0x17fea",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x18013",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ09RC5948",
          model: "745 RX III Sikander",
          id: "0x18012",
          tempMake: "SONALIKA",
          tempModel: "DI 745 III MAHARAJA",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d8df",
          },
        },
      },
      {
        id: "0x18014",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ07RF0234",
          model: "735 FE",
          id: "0x18015",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x1801a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ07RE7207",
          model: "265 DI XP Plus",
          id: "0x1801b",
          tempMake: "MAHINDRA",
          tempModel: "265 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da2f",
          },
        },
      },
      {
        id: "0x181fd",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ43RB3829",
          model: "744 XT",
          id: "0x181fc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x18216",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "RJ43RA6797",
          model: "3630 TX Plus",
          id: "0x18217",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1dab6",
          },
        },
      },
      {
        id: "0x183b8",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP40AD0563",
          model: "DI 35",
          id: "0x183b9",
          tempMake: "SONALIKA",
          tempModel: "DI 35",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x18606",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP20ZE8596",
          model: "735 FE",
          id: "0x18607",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x186fc",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ21CK4858",
          model: "275 DI XP Plus",
          id: "0x186fd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x18703",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ08RC2553",
          model: "60 Valuemaxx",
          id: "0x18701",
          tempMake: "FARMTRAC",
          tempModel: "60",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x187f6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RC6030",
          model: "475 DI XP Plus",
          id: "0x187f7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x188d6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ19RG1388",
          model: "YUVO 275 DI",
          id: "0x188d7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da91",
          },
        },
      },
      {
        id: "0x189f2",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ12RA9585",
          model: "champion 39",
          id: "0x189f3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0x18a9e",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ11RB3029",
          model: "241 R",
          id: "0x18a9f",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 di tonner",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x18ae2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ51RA4581",
          model: "475 DI",
          id: "0x18ae3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x18c59",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ07RF2827",
          model: "744 XT",
          id: "0x18c5a",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x18c97",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ12RA6539",
          model: "1035 DI MAHA SHAKTI",
          id: "0x18c98",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x18e8c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ12RA4901",
          model: "475 di",
          id: "0x18e8e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x18eb0",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ12RA9773",
          model: "Champion 39",
          id: "0x18eb1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0x18eb5",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ12RA6905",
          model: "241 DI MAHA SHAKTI",
          id: "0x18eb6",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x18ed2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ27RB1653",
          model: "475 DI",
          id: "0x18ed3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x18efb",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ27RB2141",
          model: "5041 C",
          id: "0x18efc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1da7a",
          },
        },
      },
      {
        id: "0x18f12",
        vehicle: {
          make: "ACE",
          regNo: "RJ12RA2310",
          model: "DI-450+",
          id: "0x18f13",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ae",
          },
          vehicleModel: {
            id: "0x1d951",
          },
        },
      },
      {
        id: "0x18f18",
        vehicle: {
          make: "ACE",
          regNo: "RJ12RB1748",
          model: "DI-350+",
          id: "0x18f19",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ae",
          },
          vehicleModel: {
            id: "0x1dc0b",
          },
        },
      },
      {
        id: "0x18f2e",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ27RC1924",
          model: "Champion 35 All Rounder",
          id: "0x18f2f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d916",
          },
        },
      },
      {
        id: "0x18f35",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ12RA5918",
          model: "475 di",
          id: "0x18f33",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x18f6d",
        vehicle: {
          make: "ACE",
          regNo: "RJ12RB1662",
          model: "DI-854 NG",
          id: "0x18f6e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ae",
          },
          vehicleModel: {
            id: "0x1da25",
          },
        },
      },
      {
        id: "0x18fa4",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ01RB2456",
          model: "YUVO 475 DI",
          id: "0x18fa5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8ce",
          },
        },
      },
      {
        id: "0x19000",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RC2903",
          model: "475 DI SP Plus",
          id: "0x18ffe",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db54",
          },
        },
      },
      {
        id: "0x19004",
        vehicle: {
          make: "EICHER",
          regNo: "RJ12RA0259",
          model: "380",
          id: "0x19005",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x1900b",
        vehicle: {
          make: "EICHER",
          regNo: "RJ12RB1590",
          model: "380",
          id: "0x1900c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x19023",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ12RA4663",
          model: "1035 di",
          id: "0x19024",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x19029",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ27RB7258",
          model: "275 di tu",
          id: "0x1902a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x19042",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RA8732",
          model: "1035 DI MAHA SHAKTI",
          id: "0x19043",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x190e2",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ11RB2010",
          model: "735 FE",
          id: "0x190e3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x19103",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RB3894",
          model: "275 DI XP Plus",
          id: "0x19104",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x19135",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ25RA9994",
          model: "1035 di",
          id: "0x19136",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x19198",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ25RC6927",
          model: "744 FE",
          id: "0x19199",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x191a4",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ12RA9080",
          model: "Champion 39",
          id: "0x191a5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0x191a9",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ27RB2058",
          model: "Champion XP 37",
          id: "0x191aa",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da51",
          },
        },
      },
      {
        id: "0x191fb",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ13RE5592",
          model: "585 di xp plus",
          id: "0x191f9",
          tempMake: "MAHINDRA",
          tempModel: "585 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0x191fc",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ49RB7538",
          model: "575 DI XP Plus",
          id: "0x191fd",
          tempMake: "MAHINDRA",
          tempModel: "575 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x19209",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ39RA5194",
          model: "275 DI XP Plus",
          id: "0x1920a",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1920c",
        vehicle: {
          make: "EICHER",
          regNo: "MP48AA9865",
          model: "485",
          id: "0x1920d",
          tempMake: "EICHER",
          tempModel: "485",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x1920f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP35ZA7402",
          model: "275 DI XP Plus",
          id: "0x19210",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x19212",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP21AB0637",
          model: "5105",
          id: "0x19213",
          tempMake: "JOHN_DEERE",
          tempModel: "5105",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x1921e",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ23RD2819",
          model: "Champion Plus",
          id: "0x1921f",
          tempMake: "FARMTRAC",
          tempModel: "CHAMPION 35",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db71",
          },
        },
      },
      {
        id: "0x19235",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RB4949",
          model: "275 DI XP Plus",
          id: "0x19236",
          tempMake: "MAHINDRA",
          tempModel: "265 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x19279",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RD3073",
          model: "475 DI XP Plus",
          id: "0x1927a",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x1927d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC5258",
          model: "275 DI XP Plus",
          id: "0x1927c",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1927f",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ51RA9728",
          model: "735 FE",
          id: "0x19280",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x19282",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "MP12AD0507",
          model: "3600-2 TX All Rounder Plus",
          id: "0x19283",
          tempMake: "NEW_HOLLAND",
          tempModel: "3600-2tx",
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1da94",
          },
        },
      },
      {
        id: "0x1928a",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP11ZB6818",
          model: "45 Powermaxx",
          id: "0x19289",
          tempMake: "FARMTRAC",
          tempModel: "45",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db1c",
          },
        },
      },
      {
        id: "0x1928d",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP54AA3051",
          model: "5036 D",
          id: "0x1928e",
          tempMake: "JOHN_DEERE",
          tempModel: "5036 D",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dade",
          },
        },
      },
      {
        id: "0x192bb",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "MP54AA2746",
          model: "3630 TX Super Plus+ 4 WD",
          id: "0x192bc",
          tempMake: "NEW_HOLLAND",
          tempModel: "3037 TX Super",
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1da00",
          },
        },
      },
      {
        id: "0x192c6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP11AE6997",
          model: "585 di xp plus",
          id: "0x192c8",
          tempMake: "MAHINDRA",
          tempModel: "585 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0x192ca",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP38ZA5754",
          model: "575 DI XP Plus",
          id: "0x192cb",
          tempMake: "MAHINDRA",
          tempModel: "575 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x192cd",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP50ZA9943",
          model: "Euro 50",
          id: "0x192ce",
          tempMake: "POWERTRAC",
          tempModel: "Euro 50",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db48",
          },
        },
      },
      {
        id: "0x192cf",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP38AC9749",
          model: "575 di xp plus",
          id: "0x192d1",
          tempMake: "MAHINDRA",
          tempModel: "575 di xp plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x192dc",
        vehicle: {
          make: "EICHER",
          regNo: "MP19AD3113",
          model: "380",
          id: "0x192dd",
          tempMake: "EICHER",
          tempModel: "380",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x19355",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ08RC1954",
          model: "735 FE",
          id: "0x19356",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x19358",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ30RB1959",
          model: "735 FE",
          id: "0x19359",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x1935b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ26RC6553",
          model: "475 DI XP Plus",
          id: "0x1935c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x19360",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH24BL4971",
          model: "744 FE",
          id: "0x19361",
          tempMake: "SWARAJ",
          tempModel: "744 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x19364",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ47RA4585",
          model: "241 DI Tonner",
          id: "0x19363",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d95a",
          },
        },
      },
      {
        id: "0x19369",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ02RC0302",
          model: "45",
          id: "0x1936a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x1939b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RA8154",
          model: "1035 DI",
          id: "0x1939c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x193cb",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "MP19ZC4652",
          model: "1035 DI Dost",
          id: "0x193cc",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc1f",
          },
        },
      },
      {
        id: "0x193ce",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "MP10AC2883",
          model: "3600-2tx",
          id: "0x193cf",
          tempMake: "NEW_HOLLAND",
          tempModel: "3600-2tx",
          vehicleBrand: {
            id: "0x1d8c0",
          },
          vehicleModel: {
            id: "0x1d8d2",
          },
        },
      },
      {
        id: "0x193d2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP50AA1007",
          model: "YUVO 415 DI",
          id: "0x193d0",
          tempMake: "MAHINDRA",
          tempModel: "YUVO 415 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d92c",
          },
        },
      },
      {
        id: "0x193eb",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP66ZA4015",
          model: "5036 D",
          id: "0x193ec",
          tempMake: "JOHN_DEERE",
          tempModel: "5036 D",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dade",
          },
        },
      },
      {
        id: "0x193ed",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP33AC1746",
          model: "415 DI",
          id: "0x193ee",
          tempMake: "MAHINDRA",
          tempModel: "415 di",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da37",
          },
        },
      },
      {
        id: "0x193f1",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP33AD0389",
          model: "5036 D",
          id: "0x193f2",
          tempMake: "MAHINDRA",
          tempModel: "Yuvo 575 DI 4WD",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dade",
          },
        },
      },
      {
        id: "0x193f3",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP18AB5550",
          model: "DI 35 Rx",
          id: "0x193f4",
          tempMake: "SONALIKA",
          tempModel: "DI 35 Rx",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db4c",
          },
        },
      },
      {
        id: "0x19411",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC8719",
          model: "275 DI XP Plus",
          id: "0x19412",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x19417",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ16RB9809",
          model: "735 FE",
          id: "0x19418",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x19424",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RD0182",
          model: "275 DI XP Plus",
          id: "0x19422",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1942c",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ04RB2300",
          model: "DI 35 Rx",
          id: "0x1942a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db4c",
          },
        },
      },
      {
        id: "0x19529",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RB1566",
          model: "265 DI",
          id: "0x19527",
          tempMake: "MAHINDRA",
          tempModel: "265 DI POWER PLUS",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x1952b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ22RB3509",
          model: "265 DI",
          id: "0x1952c",
          tempMake: "MAHINDRA",
          tempModel: "265 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x19537",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ15RA7496",
          model: "265 DI",
          id: "0x19538",
          tempMake: "MAHINDRA",
          tempModel: "265 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8e5",
          },
        },
      },
      {
        id: "0x19539",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ43RA5046",
          model: "585 di power plus bp",
          id: "0x1953a",
          tempMake: "MAHINDRA",
          tempModel: "585 di power plus bp",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d932",
          },
        },
      },
      {
        id: "0x1953d",
        vehicle: {
          make: "EICHER",
          regNo: "RJ31RC4209",
          model: "241",
          id: "0x1953c",
          tempMake: "EICHER",
          tempModel: "241",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dac5",
          },
        },
      },
      {
        id: "0x1953f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RC1995",
          model: "475 DI XP Plus",
          id: "0x19541",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x19545",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RC2815",
          model: "241 DI MAHA SHAKTI",
          id: "0x19546",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI Tonner",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x19549",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ33RA2734",
          model: "275 DI TU",
          id: "0x1954b",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x1954d",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ31RA7495",
          model: "45",
          id: "0x1954e",
          tempMake: "FARMTRAC",
          tempModel: "45",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1da0f",
          },
        },
      },
      {
        id: "0x19562",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH39AJ0984",
          model: "744 XT",
          id: "0x19563",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x19565",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH26BX7845",
          model: "Arjun Novo 605 DI-MS",
          id: "0x19566",
          tempMake: "MAHINDRA",
          tempModel: "Arjun Novo 605 DI-MS",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1daa2",
          },
        },
      },
      {
        id: "0x19568",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH26BX9605",
          model: "855 FE",
          id: "0x19569",
          tempMake: "SWARAJ",
          tempModel: "855 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0x19591",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP18ZB5640",
          model: "575 DI XP Plus",
          id: "0x19592",
          tempMake: "MAHINDRA",
          tempModel: "575 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x19593",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP33ZB3890",
          model: "735 FE",
          id: "0x19594",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x19598",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP33ZB2278",
          model: "735 FE",
          id: "0x19596",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x1959a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP21ZA5307",
          model: "275 DI XP Plus",
          id: "0x1959b",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x195a6",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP08ZA0961",
          model: "742 XT",
          id: "0x195a7",
          tempMake: "SWARAJ",
          tempModel: "742 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d943",
          },
        },
      },
      {
        id: "0x195aa",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP33AD2856",
          model: "744 XT",
          id: "0x195ac",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x195ad",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP20AC1247",
          model: "275 DI XP Plus",
          id: "0x195ae",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x195b1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP18AB8131",
          model: "275 DI XP Plus",
          id: "0x195b2",
          tempMake: "MAHINDRA",
          tempModel: "275 di tu",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x195b3",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP08AD5350",
          model: "275 DI XP Plus",
          id: "0x195b4",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x195b7",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP28AD7325",
          model: "744 XT",
          id: "0x195b8",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x195ba",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP15AD2413",
          model: "585 di xp plus",
          id: "0x195bb",
          tempMake: "MAHINDRA",
          tempModel: "585 DI Power Plus BP",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db60",
          },
        },
      },
      {
        id: "0x195bd",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP54AA2594",
          model: "265 di xp plus",
          id: "0x195be",
          tempMake: "MAHINDRA",
          tempModel: "265 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da2f",
          },
        },
      },
      {
        id: "0x195c0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP22AB9625",
          model: "275 DI XP Plus",
          id: "0x195c1",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x195c2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP54AA2013",
          model: "YUVO TECH Plus 415 DI",
          id: "0x195c3",
          tempMake: "MAHINDRA",
          tempModel: "yuvo tech plus 475",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db12",
          },
        },
      },
      {
        id: "0x195c6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP33AC2780",
          model: "585 DI Power Plus BP",
          id: "0x195c7",
          tempMake: "MAHINDRA",
          tempModel: "585 DI Power Plus BP",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d932",
          },
        },
      },
      {
        id: "0x196dc",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ21RG8502",
          model: "275 DI TU",
          id: "0x196da",
          tempMake: "MAHINDRA",
          tempModel: "275 di tu",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x196df",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ04RC1082",
          model: "CHAMPION XP 41",
          id: "0x196e0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d994",
          },
        },
      },
      {
        id: "0x19721",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ27RC0949",
          model: "275 di xp plus",
          id: "0x1971f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x19746",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ23RC4955",
          model: "60 Valuemaxx",
          id: "0x19747",
          tempMake: "FARMTRAC",
          tempModel: "60 PowerMaxx",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x197df",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RB2857",
          model: "1035 di",
          id: "0x197e0",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x197e4",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ12RA8120",
          model: "champion 39",
          id: "0x197e5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0x1991e",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RB3753",
          model: "241 R",
          id: "0x19920",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI Tonner",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x19945",
        vehicle: {
          make: "SOLIS",
          regNo: "RJ03RB2892",
          model: "5015 E",
          id: "0x19946",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b2",
          },
          vehicleModel: {
            id: "0x1db8e",
          },
        },
      },
      {
        id: "0x1997b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ03RA8133",
          model: "241 di maha shakti",
          id: "0x19979",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x1997f",
        vehicle: {
          make: "EICHER",
          regNo: "RJ03RA4956",
          model: "333",
          id: "0x19980",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dbe3",
          },
        },
      },
      {
        id: "0x19984",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ03RA9890",
          model: "Champion 39",
          id: "0x19985",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0x1998b",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ03RA6021",
          model: "5038 D",
          id: "0x1998c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d91c",
          },
        },
      },
      {
        id: "0x19995",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ03RA8032",
          model: "60 Valuemaxx",
          id: "0x19996",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dc07",
          },
        },
      },
      {
        id: "0x199bd",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ03RA9414",
          model: "475 DI",
          id: "0x199be",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x19a42",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJRC3228",
          model: "475 DI",
          id: "0x19a43",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x19a48",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ12RB1784",
          model: "275 DI XP Plus",
          id: "0x19a49",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x19a4b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ12RB1893",
          model: "241 DI MAHA SHAKTI",
          id: "0x19a4c",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI DYNATRACK",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x19a4e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ12RB1920",
          model: "275 DI XP Plus",
          id: "0x19a4f",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x19a50",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ10RD0058",
          model: "744 XT",
          id: "0x19a52",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x19a53",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ03RB5210",
          model: "735 FE",
          id: "0x19a54",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x19a5c",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP07AB1461",
          model: "Champion Plus",
          id: "0x19a5d",
          tempMake: "FARMTRAC",
          tempModel: "champion 39",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db71",
          },
        },
      },
      {
        id: "0x19abb",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ12RA5513",
          model: "Hero 37",
          id: "0x19abc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d9f5",
          },
        },
      },
      {
        id: "0x19add",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ20RB5385",
          model: "744 XT",
          id: "0x19ade",
          tempMake: "SWARAJ",
          tempModel: "744 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x19ae9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ08RB6209",
          model: "475 DI",
          id: "0x19aea",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x19b57",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RB0959",
          model: "275 DI TU SP Plus",
          id: "0x19b55",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db2c",
          },
        },
      },
      {
        id: "0x19b92",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP44ZA4854",
          model: "735 FE",
          id: "0x19b93",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x19b98",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP19ZB1023",
          model: "265 DI XP Plus",
          id: "0x19b99",
          tempMake: "MAHINDRA",
          tempModel: "265 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da2f",
          },
        },
      },
      {
        id: "0x19bac",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH25AW0390",
          model: "855 FE",
          id: "0x19bad",
          tempMake: "SWARAJ",
          tempModel: "855 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0x19baf",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH13DY7015",
          model: "855 FE",
          id: "0x19bb0",
          tempMake: "SWARAJ",
          tempModel: "855 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0x19bb3",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ51RB0937",
          model: "735 FE",
          id: "0x19bb5",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x19be7",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ03RB0804",
          model: "60 EPI Supermaxx",
          id: "0x19be8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dbf1",
          },
        },
      },
      {
        id: "0x19bee",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP33AD0399",
          model: "5036 D",
          id: "0x19bef",
          tempMake: "JOHN_DEERE",
          tempModel: "5036 D",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dade",
          },
        },
      },
      {
        id: "0x19bfc",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH44Z5706",
          model: "Arjun 555 DI",
          id: "0x19bfd",
          tempMake: "MAHINDRA",
          tempModel: "arjun 555 di",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbe5",
          },
        },
      },
      {
        id: "0x19bff",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH18BX6075",
          model: "ARJUN NOVO 605 DI i-4WD",
          id: "0x19c00",
          tempMake: "MAHINDRA",
          tempModel: "Arjun Novo 605 DI-MS",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1daa2",
          },
        },
      },
      {
        id: "0x19c02",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH12UW5784",
          model: "575 di",
          id: "0x19c03",
          tempMake: "MAHINDRA",
          tempModel: "575 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x19c05",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MH13DY7852",
          model: "Euro 55",
          id: "0x19c06",
          tempMake: "POWERTRAC",
          tempModel: "Euro 55",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db15",
          },
        },
      },
      {
        id: "0x19c07",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MH25AL9566",
          model: "5310",
          id: "0x19c08",
          tempMake: "JOHN_DEERE",
          tempModel: "5310",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9c8",
          },
        },
      },
      {
        id: "0x19c0c",
        vehicle: {
          make: "EICHER",
          regNo: "MH50U0028",
          model: "557",
          id: "0x19c0a",
          tempMake: "EICHER",
          tempModel: "557",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db2e",
          },
        },
      },
      {
        id: "0x19c7d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RC2045",
          model: "475 DI XP Plus",
          id: "0x19c7e",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x19d42",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ06RC9878",
          model: "1035 DI",
          id: "0x19d40",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 di",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x19d59",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP08AD4819",
          model: "Champion 39",
          id: "0x19d5a",
          tempMake: "FARMTRAC",
          tempModel: "Champion 39",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0x19d5d",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP04AJ3086",
          model: "DI 50 Rx",
          id: "0x19d5e",
          tempMake: "SONALIKA",
          tempModel: "DI 50 Rx",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d93a",
          },
        },
      },
      {
        id: "0x19d62",
        vehicle: {
          make: "EICHER",
          regNo: "MP08AD5820",
          model: "485",
          id: "0x19d63",
          tempMake: "EICHER",
          tempModel: "485",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x19ded",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ50RA3581",
          model: "Sikander DI 35",
          id: "0x19def",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d9ed",
          },
        },
      },
      {
        id: "0x19e56",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ27RB6627",
          model: "YUVO 575 DI",
          id: "0x19e57",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8ea",
          },
        },
      },
      {
        id: "0x19e9a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RD2827",
          model: "275 DI XP Plus",
          id: "0x19e9b",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x19ec3",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ44RA4669",
          model: "275 DI XP Plus",
          id: "0x19ec1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x19f08",
        vehicle: {
          make: "EICHER",
          regNo: "RJ35RB0919",
          model: "485",
          id: "0x19f09",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x19f5d",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ27RC0495",
          model: "DI 35",
          id: "0x19f5e",
          tempMake: "SONALIKA",
          tempModel: "di 35",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x19f60",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ27RC1397",
          model: "475 DI XP Plus",
          id: "0x19f61",
          tempMake: "MAHINDRA",
          tempModel: "475 di xp plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x19ffc",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RD9253",
          model: "275 DI XP Plus",
          id: "0x19ffd",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1a01a",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP36ZC9950",
          model: "434 DS Super Saver",
          id: "0x1a01b",
          tempMake: "POWERTRAC",
          tempModel: "434 Plus",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1db4d",
          },
        },
      },
      {
        id: "0x1a0ea",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP36ZA8232",
          model: "439 RDX",
          id: "0x1a0eb",
          tempMake: "POWERTRAC",
          tempModel: "439 Plus",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d952",
          },
        },
      },
      {
        id: "0x1a275",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP16AD9427",
          model: "YUVO TECH Plus 275 DI",
          id: "0x1a276",
          tempMake: "MAHINDRA",
          tempModel: "YUVO TECH Plus 275 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc23",
          },
        },
      },
      {
        id: "0x1a280",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP70A9245",
          model: "275 DI XP Plus",
          id: "0x1a281",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1a283",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP44AB9555",
          model: "Champion 42",
          id: "0x1a284",
          tempMake: "FARMTRAC",
          tempModel: "Champion 42",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dbfb",
          },
        },
      },
      {
        id: "0x1a2ae",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ07RE9156",
          model: "5310",
          id: "0x1a2ac",
          tempMake: "JOHN_DEERE",
          tempModel: "5310",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9c8",
          },
        },
      },
      {
        id: "0x1a2af",
        vehicle: {
          make: "EICHER",
          regNo: "RJ32RB0576",
          model: "380",
          id: "0x1a2b1",
          tempMake: "EICHER",
          tempModel: "380 super power",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x1a2b2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RC2853",
          model: "475 DI",
          id: "0x1a2b3",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x1a2bb",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ46RB4822",
          model: "1035 DI",
          id: "0x1a2b9",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 di",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x1a2cc",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ46RA2844",
          model: "275 DI TU",
          id: "0x1a2cb",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x1a2d2",
        vehicle: {
          make: "EICHER",
          regNo: "RJ13RD7156",
          model: "241",
          id: "0x1a2d3",
          tempMake: "EICHER",
          tempModel: "241",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1dac5",
          },
        },
      },
      {
        id: "0x1a2da",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ49RA5488",
          model: "DI 35",
          id: "0x1a2db",
          tempMake: "SONALIKA",
          tempModel: "DI 35",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x1a2e9",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ31RC5238",
          model: "5036 D",
          id: "0x1a2e8",
          tempMake: "JOHN_DEERE",
          tempModel: "5036 d",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1dade",
          },
        },
      },
      {
        id: "0x1a338",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ12RB0516",
          model: "Champion 39",
          id: "0x1a339",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1dacf",
          },
        },
      },
      {
        id: "0x1a534",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ27RC1594",
          model: "735 FE",
          id: "0x1a533",
          tempMake: "SWARAJ",
          tempModel: "735 fe",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x1a53a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC7814",
          model: "275 DI XP Plus",
          id: "0x1a53b",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1a53c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RD1328",
          model: "575 DI XP Plus",
          id: "0x1a53d",
          tempMake: "MAHINDRA",
          tempModel: "575 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x1a591",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP05ZA9184",
          model: "50 EPI PowerMaxx",
          id: "0x1a592",
          tempMake: "FARMTRAC",
          tempModel: "50 Powermaxx T20",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d8f1",
          },
        },
      },
      {
        id: "0x1a594",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP70ZA3610",
          model: "575 DI XP Plus",
          id: "0x1a595",
          tempMake: "MAHINDRA",
          tempModel: "575 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db43",
          },
        },
      },
      {
        id: "0x1a597",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP70ZA3602",
          model: "275 DI XP Plus",
          id: "0x1a598",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1a59a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP48ZC0119",
          model: "415 DI XP PLUS",
          id: "0x1a59b",
          tempMake: "MAHINDRA",
          tempModel: "415 DI XP PLUS",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9e8",
          },
        },
      },
      {
        id: "0x1a5ca",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH30BL4561",
          model: "585 di sarpanch",
          id: "0x1a5cb",
          tempMake: "MAHINDRA",
          tempModel: "585 di power plus bp",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dae5",
          },
        },
      },
      {
        id: "0x1af58",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ27RB1341",
          model: "CHAMPION XP 41",
          id: "0x1af56",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d994",
          },
        },
      },
      {
        id: "0x1af59",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ18RB0336",
          model: "275 DI TU",
          id: "0x1af5a",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x1b07f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ27RB3007",
          model: "275 DI TU",
          id: "0x1b080",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x1b0b5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ27RB2101",
          model: "275 DI TU",
          id: "0x1b0b3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x1b0bb",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ27RC0752",
          model: "45 Powermaxx",
          id: "0x1b0bc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db1c",
          },
        },
      },
      {
        id: "0x1b0c1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ27RB1914",
          model: "475 DI",
          id: "0x1b0c2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x1b0c9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ27RB1506",
          model: "575 DI",
          id: "0x1b0ca",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x1b139",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ12RB0143",
          model: "5105",
          id: "0x1b13a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d911",
          },
        },
      },
      {
        id: "0x1b1a5",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ12RB0234",
          model: "735 fe",
          id: "0x1b1a3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x1b252",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH13DY0686",
          model: "963 FE",
          id: "0x1b254",
          tempMake: "SWARAJ",
          tempModel: "963 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1db18",
          },
        },
      },
      {
        id: "0x1b25d",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MP07AB4161",
          model: "Champion Plus",
          id: "0x1b25e",
          tempMake: "FARMTRAC",
          tempModel: "Champion 39",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db71",
          },
        },
      },
      {
        id: "0x1b261",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH13DY2302",
          model: "724 XM",
          id: "0x1b262",
          tempMake: "SWARAJ",
          tempModel: "724 XM ORCHARD",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1da20",
          },
        },
      },
      {
        id: "0x1b28f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH14JR2775",
          model: "575 di",
          id: "0x1b290",
          tempMake: "MAHINDRA",
          tempModel: "575 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x1b302",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ30RB1606",
          model: "275 DI XP Plus",
          id: "0x1b303",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1b321",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP08AD4417",
          model: "439 RDX",
          id: "0x1b31f",
          tempMake: "POWERTRAC",
          tempModel: "439 Plus",
          vehicleBrand: {
            id: "0x1d8a4",
          },
          vehicleModel: {
            id: "0x1d952",
          },
        },
      },
      {
        id: "0x1b333",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RB1085",
          model: "1035 DI",
          id: "0x1b334",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x1b33a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RB0690",
          model: "1035 di",
          id: "0x1b33b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x1b3b1",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ12RA2508",
          model: "1035 DI",
          id: "0x1b3b2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x1b3ee",
        vehicle: {
          make: "SWARAJ",
          regNo: "R25RC6927",
          model: "744 FE",
          id: "0x1b3ef",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x1b3fe",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ26RC0092",
          model: "1035 DI",
          id: "0x1b3ff",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 di",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x1b4fb",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RA8644",
          model: "1035 DI MAHA SHAKTI",
          id: "0x1b4fc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1dc13",
          },
        },
      },
      {
        id: "0x1b546",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ51RB0463",
          model: "1035 DI",
          id: "0x1b547",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x1b57d",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP51ZA4626",
          model: "5050 D",
          id: "0x1b57c",
          tempMake: "JOHN_DEERE",
          tempModel: "5050 D",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9e2",
          },
        },
      },
      {
        id: "0x1b580",
        vehicle: {
          make: "EICHER",
          regNo: "MP08ZA9742",
          model: "548",
          id: "0x1b581",
          tempMake: "EICHER",
          tempModel: "548",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d942",
          },
        },
      },
      {
        id: "0x1b589",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP31AB5852",
          model: "DI 35",
          id: "0x1b58a",
          tempMake: "SONALIKA",
          tempModel: "DI 35 Rx",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x1b58e",
        vehicle: {
          make: "EICHER",
          regNo: "RJ11RB2027",
          model: "380",
          id: "0x1b58c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x1b593",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ11RB4191",
          model: "241 R",
          id: "0x1b594",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d8fd",
          },
        },
      },
      {
        id: "0x1b5cb",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ21RK5583",
          model: "1035 DI",
          id: "0x1b5cc",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 di",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da07",
          },
        },
      },
      {
        id: "0x1b5d9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ07RF5998",
          model: "475 DI XP Plus",
          id: "0x1b5da",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x1b5e5",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ13RE3797",
          model: "744 XT",
          id: "0x1b5e6",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x1b7df",
        vehicle: {
          make: "MAHINDRA",
          regNo: "43517589",
          model: "275 DI XP Plus",
          id: "0x1b7dd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1b91c",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ15RB2777",
          model: "45 Classic",
          id: "0x1b91a",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d8cc",
          },
        },
      },
      {
        id: "0x1b922",
        vehicle: {
          make: "EICHER",
          regNo: "RJ12RB0091",
          model: "380",
          id: "0x1b923",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x1ba6a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ51RB0965",
          model: "275 DI XP Plus",
          id: "0x1ba6c",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1bba2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ41RA5466",
          model: "275 DI TU XP Plus",
          id: "0x1bba3",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db3e",
          },
        },
      },
      {
        id: "0x1bbae",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ41RA5453",
          model: "275 DI XP Plus",
          id: "0x1bbaf",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1bbd6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ16RB7470",
          model: "275 DI TU XP Plus",
          id: "0x1bbd7",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1db3e",
          },
        },
      },
      {
        id: "0x1bd53",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "51621363",
          model: "3032 Nx",
          id: "0x1bd55",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1bdf7",
        vehicle: {
          make: "KUBOTA",
          regNo: "RJ50RA6518",
          model: "MU 5502 2wd",
          id: "0x1bdf8",
          tempMake: "KUBOTA",
          tempModel: "MU 5502 2wd",
          vehicleBrand: {
            id: "0x1d8b4",
          },
          vehicleModel: {
            id: "0x1db8c",
          },
        },
      },
      {
        id: "0x1be3e",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ17RC2960",
          model: "241 DI DYNATRACK",
          id: "0x1be3f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1d9b3",
          },
        },
      },
      {
        id: "0x1be9c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RB8493",
          model: "475 DI",
          id: "0x1be9e",
          tempMake: "MAHINDRA",
          tempModel: "475 di",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x1c039",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH22AW1450",
          model: "Arjun 555 DI",
          id: "0x1c03a",
          tempMake: "MAHINDRA",
          tempModel: "Arjun 555 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbe5",
          },
        },
      },
      {
        id: "0x1c03d",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MH28BQ1944",
          model: "45 Powermaxx",
          id: "0x1c03e",
          tempMake: "FARMTRAC",
          tempModel: "45",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1db1c",
          },
        },
      },
      {
        id: "0x1c13c",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ27RC1603",
          model: "Champion 35 All Rounder",
          id: "0x1c13d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d916",
          },
        },
      },
      {
        id: "0x1c16f",
        vehicle: {
          make: "SONALIKA",
          regNo: "TESTING1",
          model: "di 35",
          id: "0x1c170",
          tempMake: "SONALIKA",
          tempModel: "DI 35",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x1c28a",
        vehicle: {
          make: "EICHER",
          regNo: "RJ12RA7023",
          model: "380",
          id: "0x1c28b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1db50",
          },
        },
      },
      {
        id: "0x1c3e6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RB9138",
          model: "475 DI",
          id: "0x1c3e4",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x1c7f2",
        vehicle: {
          make: "SWARAJ",
          regNo: "MHCD2387",
          model: "843 XM",
          id: "0x1c7f3",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d91b",
          },
        },
      },
      {
        id: "0x1c80c",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH34CD2390",
          model: "742 XT",
          id: "0x1c80d",
          tempMake: "SWARAJ",
          tempModel: "742 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d943",
          },
        },
      },
      {
        id: "0x1c839",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH15JD9836",
          model: "475 DI",
          id: "0x1c838",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x1c852",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH15JD8753",
          model: "JIVO 245 DI",
          id: "0x1c853",
          tempMake: "MAHINDRA",
          tempModel: "JIVO 245 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc14",
          },
        },
      },
      {
        id: "0x1c87a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ39RA3513",
          model: "475 DI",
          id: "0x1c87c",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x1c88d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RE0056",
          model: "275 DI XP Plus",
          id: "0x1c88b",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1c8a9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC7030",
          model: "275 DI XP Plus",
          id: "0x1c8a7",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1c8ac",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ42RA4810",
          model: "275 DI XP Plus",
          id: "0x1c8ab",
          tempMake: "MAHINDRA",
          tempModel: "275 di xp plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1c8ae",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ34RB2787",
          model: "60",
          id: "0x1c8af",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d9c2",
          },
        },
      },
      {
        id: "0x1c8b2",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06RD4144",
          model: "475 DI XP Plus",
          id: "0x1c8b3",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x1c8f6",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19DV3310",
          model: "744 XT",
          id: "0x1c8f7",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x1c959",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RC0854",
          model: "475 DI XP Plus",
          id: "0x1c958",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x1c972",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19DV7894",
          model: "744 XT",
          id: "0x1c970",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x1c988",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19EA1626",
          model: "744 fe",
          id: "0x1c989",
          tempMake: "SWARAJ",
          tempModel: "744 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x1c9a3",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH39AJ3716",
          model: "744 FE",
          id: "0x1c9a4",
          tempMake: "SWARAJ",
          tempModel: "744 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d96f",
          },
        },
      },
      {
        id: "0x1c9a6",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19EA3019",
          model: "744 XT",
          id: "0x1c9a7",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x1c9b1",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH14KS2014",
          model: "744 xt",
          id: "0x1c9b2",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x1c9cb",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH13EC1860",
          model: "855 FE",
          id: "0x1c9cc",
          tempMake: "SWARAJ",
          tempModel: "855 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8f6",
          },
        },
      },
      {
        id: "0x1c9e0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH24BL3991",
          model: "JIVO 245 DI",
          id: "0x1c9e1",
          tempMake: "MAHINDRA",
          tempModel: "JIVO 245 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc14",
          },
        },
      },
      {
        id: "0x1c9ff",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ03RB4886",
          model: "DI 35",
          id: "0x1ca00",
          tempMake: "SONALIKA",
          tempModel: "DI 35 Rx",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x1ca1d",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ17RC6828",
          model: "735 FE",
          id: "0x1ca1e",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x1ca29",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ46RB5937",
          model: "735 FE",
          id: "0x1ca2a",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x1ca47",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ27RC1131",
          model: "275 DI XP Plus",
          id: "0x1ca48",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1ca52",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RD0385",
          model: "275 DI XP Plus",
          id: "0x1ca53",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1ca6f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ04RD1650",
          model: "275 DI XP Plus",
          id: "0x1ca70",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1ca72",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RD2394",
          model: "415 DI XP PLUS",
          id: "0x1ca73",
          tempMake: "MAHINDRA",
          tempModel: "415 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9e8",
          },
        },
      },
      {
        id: "0x1cb24",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP14ZC2964",
          model: "475 DI XP Plus",
          id: "0x1cb25",
          tempMake: "MAHINDRA",
          tempModel: "475 DI SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d907",
          },
        },
      },
      {
        id: "0x1cb2d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP14AD7552",
          model: "275 DI XP Plus",
          id: "0x1cb2e",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1cb33",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP45AC2875",
          model: "275 DI TU",
          id: "0x1cb34",
          tempMake: "MAHINDRA",
          tempModel: "275 di xp plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x1cb36",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RA8630",
          model: "475 DI",
          id: "0x1cb37",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x1cbb1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP54ZA1942",
          model: "275 DI XP Plus",
          id: "0x1cbb2",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1cbb6",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ08RC3746",
          model: "744 XT",
          id: "0x1cbb7",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x1cbba",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP65AA4038",
          model: "YUVO 275 DI",
          id: "0x1cbb8",
          tempMake: "MAHINDRA",
          tempModel: "YUVO TECH Plus 275 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da91",
          },
        },
      },
      {
        id: "0x1cbc8",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP54AA4014",
          model: "265 DI XP Plus",
          id: "0x1cbc9",
          tempMake: "MAHINDRA",
          tempModel: "265 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da2f",
          },
        },
      },
      {
        id: "0x1cbd0",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH40CH2404",
          model: "585 DI Sarpanch",
          id: "0x1cbd1",
          tempMake: "MAHINDRA",
          tempModel: "585 DI Power Plus BP",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dae5",
          },
        },
      },
      {
        id: "0x1cbd3",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19DV5853",
          model: "742 XT",
          id: "0x1cbd4",
          tempMake: "SWARAJ",
          tempModel: "742 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d943",
          },
        },
      },
      {
        id: "0x1cbd6",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19EA7889",
          model: "742 XT",
          id: "0x1cbd7",
          tempMake: "SWARAJ",
          tempModel: "742 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d943",
          },
        },
      },
      {
        id: "0x1cbd9",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH39AJ4467",
          model: "744 XT",
          id: "0x1cbd8",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x1cc35",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH34CD2387",
          model: "843 XM",
          id: "0x1cc36",
          tempMake: "SWARAJ",
          tempModel: "843 XM",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d91b",
          },
        },
      },
      {
        id: "0x1cc3d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP20AB9910",
          model: "275 DI XP Plus",
          id: "0x1cc3f",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1cc48",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP52AA4763",
          model: "YUVO TECH Plus 275 DI",
          id: "0x1cc46",
          tempMake: "MAHINDRA",
          tempModel: "YUVO TECH Plus 275 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc23",
          },
        },
      },
      {
        id: "0x1cc58",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP52ZA1821",
          model: "275 DI XP Plus",
          id: "0x1cc59",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1cc5b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP20ZC6286",
          model: "265 DI XP Plus",
          id: "0x1cc5c",
          tempMake: "MAHINDRA",
          tempModel: "265 di xp plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1da2f",
          },
        },
      },
      {
        id: "0x1cd11",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP28AD8461",
          model: "415 DI SP Plus",
          id: "0x1cd12",
          tempMake: "MAHINDRA",
          tempModel: "415 di sp plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d908",
          },
        },
      },
      {
        id: "0x1cd1f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP38AD1014",
          model: "275 DI XP Plus",
          id: "0x1cd20",
          tempMake: "MAHINDRA",
          tempModel: "275 di xp plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1cd37",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP28AD8375",
          model: "275 DI XP Plus",
          id: "0x1cd39",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1cd43",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP70A8945",
          model: "275 DI TU",
          id: "0x1cd44",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dbb6",
          },
        },
      },
      {
        id: "0x1cd4e",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP27DA4419",
          model: "742 XT",
          id: "0x1cd4f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d943",
          },
        },
      },
      {
        id: "0x1d020",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ19RG0782",
          model: "DI 35",
          id: "0x1d01f",
          tempMake: "SONALIKA",
          tempModel: "DI 35",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x1d02b",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ05RD3299",
          model: "241 di maha shakti",
          id: "0x1d02c",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 di tonner",
          vehicleBrand: {
            id: "0x1d8b7",
          },
          vehicleModel: {
            id: "0x1da0c",
          },
        },
      },
      {
        id: "0x1d02e",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ27RB8589",
          model: "MM+ 39 DI",
          id: "0x1d02f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d8dc",
          },
        },
      },
      {
        id: "0x1d037",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ01RB5937",
          model: "42 DI Sikander",
          id: "0x1d038",
          tempMake: "SONALIKA",
          tempModel: "DI 42 RX",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1da34",
          },
        },
      },
      {
        id: "0x1d03d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ30RB2029",
          model: "275 DI XP Plus",
          id: "0x1d03b",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1d03f",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ46RB7689",
          model: "735 FE",
          id: "0x1d040",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1dbdb",
          },
        },
      },
      {
        id: "0x1d042",
        vehicle: {
          make: "SONALIKA",
          regNo: "MP39ZA6617",
          model: "DI 50 SIKANDER",
          id: "0x1d043",
          tempMake: "SONALIKA",
          tempModel: "DI 50 Rx",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1db59",
          },
        },
      },
      {
        id: "0x1d049",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP50AA6104",
          model: "5050 D",
          id: "0x1d04a",
          tempMake: "JOHN_DEERE",
          tempModel: "5050 D",
          vehicleBrand: {
            id: "0x1d8ad",
          },
          vehicleModel: {
            id: "0x1d9e2",
          },
        },
      },
      {
        id: "0x1d04d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP18ZA7124",
          model: "YUVO TECH Plus 275 DI",
          id: "0x1d04e",
          tempMake: "MAHINDRA",
          tempModel: "YUVO TECH Plus 275 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc23",
          },
        },
      },
      {
        id: "0x1d081",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH27AD4419",
          model: "742 XT",
          id: "0x1d07f",
          tempMake: "SWARAJ",
          tempModel: "742 xt",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d943",
          },
        },
      },
      {
        id: "0x1d1cc",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH29CB0734",
          model: "744 XT",
          id: "0x1d1cd",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x1d1cf",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MH29BV7314",
          model: "50 EPI PowerMaxx",
          id: "0x1d1d0",
          tempMake: "FARMTRAC",
          tempModel: "50 smart",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d8f1",
          },
        },
      },
      {
        id: "0x1d1dc",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ03RB5825",
          model: "DI 35",
          id: "0x1d1dd",
          tempMake: "SONALIKA",
          tempModel: "DI 35",
          vehicleBrand: {
            id: "0x1d8a6",
          },
          vehicleModel: {
            id: "0x1d905",
          },
        },
      },
      {
        id: "0x1d1e1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ03RB5060",
          model: "275 DI XP Plus",
          id: "0x1d1e2",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1d3bc",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RB4375",
          model: "475 DI",
          id: "0x1d3bd",
          tempMake: null,
          tempModel: null,
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9bc",
          },
        },
      },
      {
        id: "0x1d5bb",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19DV0850",
          model: "744 XT",
          id: "0x1d5bc",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x1d5ce",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH41BH6432",
          model: "JIVO 245 DI",
          id: "0x1d5cf",
          tempMake: "MAHINDRA",
          tempModel: "JIVO 245 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc14",
          },
        },
      },
      {
        id: "0x1d5de",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH16DC8049",
          model: "275 DI XP Plus",
          id: "0x1d5dc",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1d5e4",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH16DC8608",
          model: "575 di",
          id: "0x1d5e5",
          tempMake: "MAHINDRA",
          tempModel: "575 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d9d0",
          },
        },
      },
      {
        id: "0x1d600",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH14KB1324",
          model: "JIVO 245 DI",
          id: "0x1d5fe",
          tempMake: "MAHINDRA",
          tempModel: "JIVO 245 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc14",
          },
        },
      },
      {
        id: "0x1d611",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH13EC1827",
          model: "JIVO 245 DI",
          id: "0x1d612",
          tempMake: "MAHINDRA",
          tempModel: "JIVO 245 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc14",
          },
        },
      },
      {
        id: "0x1d61e",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19EA5403",
          model: "744 XT",
          id: "0x1d61f",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: {
            id: "0x1d8aa",
          },
          vehicleModel: {
            id: "0x1d8d3",
          },
        },
      },
      {
        id: "0x1d62c",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MH24AW9813",
          model: "60",
          id: "0x1d62a",
          tempMake: "FARMTRAC",
          tempModel: "60",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d9c2",
          },
        },
      },
      {
        id: "0x1d634",
        vehicle: {
          make: "EICHER",
          regNo: "MH28BQ1820",
          model: "485",
          id: "0x1d632",
          tempMake: "EICHER",
          tempModel: "485",
          vehicleBrand: {
            id: "0x1d8a8",
          },
          vehicleModel: {
            id: "0x1d927",
          },
        },
      },
      {
        id: "0x1d637",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH15HY0852",
          model: "JIVO 245 DI",
          id: "0x1d639",
          tempMake: "MAHINDRA",
          tempModel: "JIVO 245 DI",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1dc14",
          },
        },
      },
      {
        id: "0x1d67c",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ05RC1842",
          model: "60",
          id: "0x1d67d",
          tempMake: "FARMTRAC",
          tempModel: "60",
          vehicleBrand: {
            id: "0x1d8a3",
          },
          vehicleModel: {
            id: "0x1d9c2",
          },
        },
      },
      {
        id: "0x1d869",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ06RD6175",
          model: "275 DI XP Plus",
          id: "0x1d867",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU SP Plus",
          vehicleBrand: {
            id: "0x1d8bf",
          },
          vehicleModel: {
            id: "0x1d8f7",
          },
        },
      },
      {
        id: "0x1dd09",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH44Z1836",
          model: "585 DI Sarpanch",
          id: "0x1dd0a",
          tempMake: "MAHINDRA",
          tempModel: "585 di power plus bp",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1dd0c",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MH28BK0433",
          model: "Euro 50",
          id: "0x1dd0d",
          tempMake: "POWERTRAC",
          tempModel: "Euro 50",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1dd0f",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MH18BX1893",
          model: "45",
          id: "0x1dd10",
          tempMake: "FARMTRAC",
          tempModel: "45",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1dd11",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH11DA3076",
          model: "855 FE",
          id: "0x1dd13",
          tempMake: "SWARAJ",
          tempModel: "855 xm",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1dd1e",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MH17CM8339",
          model: "45",
          id: "0x1dd1f",
          tempMake: "FARMTRAC",
          tempModel: "45 Classic",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1de13",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RD7555",
          model: "275 DI XP Plus",
          id: "0x1de15",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1de17",
        vehicle: {
          make: "EICHER",
          regNo: "RJ35RB0359",
          model: "380",
          id: "0x1de18",
          tempMake: "EICHER",
          tempModel: "380",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1de23",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RE0219",
          model: "275 DI XP Plus",
          id: "0x1de24",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1de40",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP70A9663",
          model: "275 DI XP Plus",
          id: "0x1de41",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1de82",
        vehicle: {
          make: "EICHER",
          regNo: "MP70A9379",
          model: "380",
          id: "0x1de80",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1df47",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RC9372",
          model: "575 DI XP Plus",
          id: "0x1df46",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI MAHAAN",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1df6c",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ28RC9254",
          model: "241 DI MAHA SHAKTI",
          id: "0x1df6d",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI MAHA SHAKTI",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1df7a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ28RD1369",
          model: "585 DI XP Plus",
          id: "0x1df79",
          tempMake: "MAHINDRA",
          tempModel: "585 DI XP Plus",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1df82",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ06RD1657",
          model: "DI 745 III",
          id: "0x1df83",
          tempMake: "SONALIKA",
          tempModel: "DI 745 DLX",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1df85",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ30RB0511",
          model: "415 DI XP PLUS",
          id: "0x1df86",
          tempMake: "MAHINDRA",
          tempModel: "415 DI XP PLUS",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1dfcd",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH35AR8192",
          model: "742 XT",
          id: "0x1dfce",
          tempMake: "SWARAJ",
          tempModel: "742 XT",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1e052",
        vehicle: {
          make: "FORCE",
          regNo: "TEATING1",
          model: "ABHIMAN",
          id: "0x1e053",
          tempMake: "ACE",
          tempModel: "DI-550 NG",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1e055",
        vehicle: {
          make: "HINDUSTAN",
          regNo: "TESTING2",
          model: "60",
          id: "0x1c181",
          tempMake: "HINDUSTAN",
          tempModel: "60",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1e071",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH30BL3931",
          model: "JIVO 245 DI",
          id: "0x1e072",
          tempMake: "MAHINDRA",
          tempModel: "JIVO 245 DI",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1e083",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH12QM1346",
          model: "724 XM",
          id: "0x1e084",
          tempMake: "SWARAJ",
          tempModel: "724 XM",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1e13c",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ22RB6064",
          model: "834 XM",
          id: "0x1e13d",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1e198",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ22RC0438",
          model: "275 DI TU SP Plus",
          id: "0x1e199",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1e1a9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ01RB5841",
          model: "275 DI XP Plus",
          id: "0x1e1aa",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1e1d2",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP50ZA7628",
          model: "Euro 50",
          id: "0x1e1d3",
          tempMake: "ESCORT",
          tempModel: "PT Euro47",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1e35e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ10RC2111",
          model: "475 DI XP Plus",
          id: "0x1e360",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1e366",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH37AD4104",
          model: "735 FE",
          id: "0x1e367",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1e568",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RB7114",
          model: "575 DI XP Plus",
          id: "0x1e569",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1e652",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ35RB3464",
          model: "275 di xp plus",
          id: "0x1e653",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1e8b6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ07RD8423",
          model: "YUVO 275 DI",
          id: "0x1e8b7",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1eeb7",
        vehicle: {
          make: "NEW_HOLLAND",
          regNo: "RJ24RA7078",
          model: "3600-2 Tx  Super",
          id: "0x1eeb8",
          tempMake: "NEW_HOLLAND",
          tempModel: "3600-2TX",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1eefd",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MH50L9760",
          model: "50 EPI PowerMaxx",
          id: "0x1eefe",
          tempMake: "FARMTRAC",
          tempModel: "50 Smart",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x1f04c",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ27RC3017",
          model: "475 DI XP Plus MS",
          id: "0x1f04a",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus MS",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2063b",
        vehicle: {
          make: "ACE",
          regNo: "TESTING3",
          model: "DI-550 NG",
          id: "0x2063c",
          tempMake: "EICHER",
          tempModel: "241",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2077d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ32RB0355",
          model: "475 DI XP Plus",
          id: "0x2077e",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus MS",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x20962",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RC3130",
          model: "1035 DI MAHA SHAKTI",
          id: "0x20963",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2096b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ30RB1581",
          model: "275 DI XP Plus",
          id: "0x2096c",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2096e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ30RB1292",
          model: "275 DI XP Plus",
          id: "0x2096f",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU XP Plus",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x20973",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ12RB2946",
          model: "241 DI MAHA SHAKTI",
          id: "0x20974",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 di tonner",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x20979",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ30RB1130",
          model: "1035 DI MAHA SHAKTI",
          id: "0x2097a",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI MAHA SHAKTI",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2097e",
        vehicle: {
          make: "EICHER",
          regNo: "RJ35RB1266",
          model: "368",
          id: "0x2097f",
          tempMake: "EICHER",
          tempModel: "368",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x20982",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ06RD6350",
          model: "DI 35",
          id: "0x20983",
          tempMake: "SONALIKA",
          tempModel: "DI 35",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x20987",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ51RB1225",
          model: "241 DI MAHA SHAKTI",
          id: "0x20986",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 di dynatrack",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2098a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RE5534",
          model: "475 DI XP Plus",
          id: "0x20989",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus MS",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2098b",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "RJ18RC3612",
          model: "5105",
          id: "0x2098d",
          tempMake: "JOHN_DEERE",
          tempModel: "5105",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2098e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ21RK8834",
          model: "275 DI XP Plus",
          id: "0x2098f",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU XP Plus",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x20993",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ07RF6827",
          model: "475 DI XP Plus",
          id: "0x20995",
          tempMake: "MAHINDRA",
          tempModel: "475 DI XP Plus MS",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x20998",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ05RD5133",
          model: "241 DI MAHA SHAKTI",
          id: "0x20996",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 di tonner",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x20999",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJ25RC7050",
          model: "434 Plus",
          id: "0x2099b",
          tempMake: "POWERTRAC",
          tempModel: "434 DS Super Saver",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2099d",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ52RA4314",
          model: "241 DI MAHA SHAKTI",
          id: "0x2099e",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 di dynatrack",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x209a6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ48RA5353",
          model: "575 DI",
          id: "0x209a7",
          tempMake: "MAHINDRA",
          tempModel: "575 DI",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x209ac",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ17RC8736",
          model: "275 DI XP Plus",
          id: "0x209ad",
          tempMake: "MAHINDRA",
          tempModel: "275 di xp plus",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x209af",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ04RC5887",
          model: "275 di tu",
          id: "0x209b1",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x209b5",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP51ZA4238",
          model: "275 DI SP Plus",
          id: "0x209b6",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x209b8",
        vehicle: {
          make: "POWERTRAC",
          regNo: "MP50AA5754",
          model: "Euro 50",
          id: "0x209b9",
          tempMake: "ESCORTS",
          tempModel: "PT Euro47",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x209bb",
        vehicle: {
          make: "EICHER",
          regNo: "MP11ZB4036",
          model: "485",
          id: "0x209bc",
          tempMake: "EICHER",
          tempModel: "485",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x209c7",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH11CW4316",
          model: "Arjun 555 DI",
          id: "0x209c9",
          tempMake: "MAHINDRA",
          tempModel: "arjun 555 di",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x209cb",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19EA8112",
          model: "744 XT",
          id: "0x209cc",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x209ce",
        vehicle: {
          make: "KUBOTA",
          regNo: "MH29BV6704",
          model: "MU5501 2WD",
          id: "0x209cf",
          tempMake: "KUBOTA",
          tempModel: "MU 5502 2wd",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x209d3",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH29BV5989",
          model: "575 di",
          id: "0x209d4",
          tempMake: "MAHINDRA",
          tempModel: "575 DI",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x209d6",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH19EA0793",
          model: "744 XT",
          id: "0x209d7",
          tempMake: "SWARAJ",
          tempModel: "744 XT",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x209d9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH19CZ9154",
          model: "575 DI",
          id: "0x209da",
          tempMake: "MAHINDRA",
          tempModel: "575 DI",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x209de",
        vehicle: {
          make: "SWARAJ",
          regNo: "MH22AW4323",
          model: "855 FE",
          id: "0x209df",
          tempMake: "SWARAJ",
          tempModel: "855 FE",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x20d1c",
        vehicle: {
          make: "KUBOTA",
          regNo: "MH11DH2594",
          model: "MU5501",
          id: "0x20d1d",
          tempMake: "KUBOTA",
          tempModel: "MU5501 2WD",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x20d1e",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH11DH5910",
          model: "575 di",
          id: "0x20d1f",
          tempMake: "MAHINDRA",
          tempModel: "575 DI",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x20d26",
        vehicle: {
          make: "FARMTRAC",
          regNo: "MH41BE9848",
          model: "45",
          id: "0x20d27",
          tempMake: "FARMTRAC",
          tempModel: "45 Classic",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x20d28",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MH13DY1134",
          model: "5310",
          id: "0x20d2a",
          tempMake: "JOHN_DEERE",
          tempModel: "5310",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x20d3d",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ40RA4011",
          model: "265 DI",
          id: "0x20d3e",
          tempMake: "MAHINDRA",
          tempModel: "265 DI",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21097",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ12RA9282",
          model: "1035 DI MAHA SHAKTI",
          id: "0x21096",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI MAHA SHAKTI",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x210a3",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ03RB5482",
          model: "275 DI XP Plus",
          id: "0x210a2",
          tempMake: "MAHINDRA",
          tempModel: "275 DI XP Plus",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2122c",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ27RB7848",
          model: "735 FE",
          id: "0x2122d",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21247",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RE0054",
          model: "575 DI XP Plus",
          id: "0x21248",
          tempMake: "MAHINDRA",
          tempModel: "575 DI XP Plus",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2124b",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ06RD5564",
          model: "735 XT",
          id: "0x2124d",
          tempMake: "SWARAJ",
          tempModel: "735 XT",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21253",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MH25AW2446",
          model: "Arjun Novo 605 DI-MS",
          id: "0x21254",
          tempMake: "MAHINDRA",
          tempModel: "Arjun Novo 605 DI-MS",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21262",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP51AB3332",
          model: "742 XT",
          id: "0x21260",
          tempMake: "SWARAJ",
          tempModel: "724 FE",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21264",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP52ZA4718",
          model: "735 FE",
          id: "0x21265",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21267",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP52ZA2881",
          model: "735 FE",
          id: "0x21268",
          tempMake: "SWARAJ",
          tempModel: "733 FE",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2126a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "MP54ZA2754",
          model: "415 DI XP PLUS",
          id: "0x2126b",
          tempMake: "MAHINDRA",
          tempModel: "415 DI XP PLUS",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2129f",
        vehicle: {
          make: "MAHINDRA",
          regNo: "TS18H3757",
          model: "475 DI XP Plus",
          id: "0x212a0",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x212ab",
        vehicle: {
          make: "MAHINDRA",
          regNo: "TS18H3892",
          model: "475 DI XP Plus",
          id: "0x212ac",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x212fb",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "MP28ZB3609",
          model: "5045 D",
          id: "0x212fc",
          tempMake: "JOHN_DEERE",
          tempModel: "5045 d",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21341",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ29RC0463",
          model: "475 DI XP Plus",
          id: "0x21342",
          tempMake: "MAHINDRA",
          tempModel: "475 di",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2136c",
        vehicle: {
          make: "EICHER",
          regNo: "RJ27RC2599",
          model: "380",
          id: "0x2136d",
          tempMake: "EICHER",
          tempModel: "380 Super Power",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21373",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ30RB1956",
          model: "735 FE",
          id: "0x21374",
          tempMake: "SWARAJ",
          tempModel: "735 FE",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21abd",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ05RC1094",
          model: "1035 DI",
          id: "0x21abc",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21b96",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RB2291",
          model: "241 DI MAHA SHAKTI",
          id: "0x21b97",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 DI MAHA SHAKTI",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21cd1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ25RC1881",
          model: "475 DI",
          id: "0x21cd2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21eed",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RA7735",
          model: "275 DI XP Plus",
          id: "0x21eee",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21ef4",
        vehicle: {
          make: "JOHN_DEERE",
          regNo: "JON51",
          model: "5105",
          id: "0x21ef5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21efe",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ11RA9861",
          model: "475 DI XP Plus",
          id: "0x21f00",
          tempMake: "MAHINDRA",
          tempModel: "475 DI",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21f3a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RB1992",
          model: "1035 DI",
          id: "0x21f3b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21f7a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RB4233",
          model: "475 DI XP Plus",
          id: "0x21f7b",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21f84",
        vehicle: {
          make: "SWARAJ",
          regNo: "RJ09RE3703",
          model: "733 FE",
          id: "0x21f85",
          tempMake: "SWARAJ",
          tempModel: "733 FE",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x21f94",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ34RA5797",
          model: "275 DI TU",
          id: "0x21f95",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x22042",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RC0612",
          model: "1035 DI MAHA SHAKTI",
          id: "0x22043",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI MAHA SHAKTI",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2208b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ22RC0568",
          model: "475 DI XP Plus",
          id: "0x2208c",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x220a1",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ30RA5439",
          model: "475 di",
          id: "0x2209f",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x220b0",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ22RA6590",
          model: "45",
          id: "0x220b2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x220d9",
        vehicle: {
          make: "SONALIKA",
          regNo: "RJ745SO",
          model: "DI 745 III",
          id: "0x220da",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2219e",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP11AE4658",
          model: "855 FE",
          id: "0x2219f",
          tempMake: "SWARAJ",
          tempModel: "855 FE 4WD",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x221a6",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RD8138",
          model: "475 DI",
          id: "0x221a7",
          tempMake: "MAHINDRA",
          tempModel: "475 di",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x22215",
        vehicle: {
          make: "EICHER",
          regNo: "MP45ZA9485",
          model: "485",
          id: "0x22216",
          tempMake: "EICHER",
          tempModel: "485",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x22217",
        vehicle: {
          make: "SWARAJ",
          regNo: "MP14ZA8465",
          model: "735 FE",
          id: "0x22218",
          tempMake: "SWARAJ",
          tempModel: "735 fe",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2224b",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ22RC0276",
          model: "275 DI XP Plus",
          id: "0x22249",
          tempMake: "MAHINDRA",
          tempModel: "275 di sp plus",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2225a",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ15RB5001",
          model: "241 DI Tonner",
          id: "0x2225b",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "241 di tonner",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x22279",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ10RB8326",
          model: "1035 DI Tonner",
          id: "0x2227a",
          tempMake: "MASSEY_FERGUSON",
          tempModel: "1035 DI",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x22557",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ34RB4043",
          model: "1035 di",
          id: "0x22556",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x2259a",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ09RE3742",
          model: "275 DI XP Plus",
          id: "0x22599",
          tempMake: "MAHINDRA",
          tempModel: "275 DI TU XP Plus",
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x225a7",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ23RB9294",
          model: "275 DI TU",
          id: "0x225a8",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x225b9",
        vehicle: {
          make: "MAHINDRA",
          regNo: "RJ23RD1726",
          model: "275 DI XP Plus",
          id: "0x225bb",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x225be",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ27RC1542",
          model: "1035 DI MAHA SHAKTI",
          id: "0x225bc",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x225c1",
        vehicle: {
          make: "EICHER",
          regNo: "RJ31RC2036",
          model: "485",
          id: "0x225c2",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x225e3",
        vehicle: {
          make: "FARMTRAC",
          regNo: "RJ05RC0175",
          model: "45 Classic",
          id: "0x225e1",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x22698",
        vehicle: {
          make: "MASSEY_FERGUSON",
          regNo: "RJ26RC6663",
          model: "245 DI",
          id: "0x22699",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
      {
        id: "0x226b4",
        vehicle: {
          make: "POWERTRAC",
          regNo: "RJ13RE0269",
          model: "Euro 50",
          id: "0x226b5",
          tempMake: null,
          tempModel: null,
          vehicleBrand: null,
          vehicleModel: null,
        },
      },
    ],
  },
  extensions: {
    touched_uids: 23209,
    tracing: {
      version: 1,
      startTime: "2024-01-25T05:45:07.286921347Z",
      endTime: "2024-01-25T05:45:07.454401788Z",
      duration: 167480594,
      execution: {
        resolvers: [
          {
            path: ["queryLead"],
            parentType: "Query",
            fieldName: "queryLead",
            returnType: "[Lead]",
            startOffset: 148259,
            duration: 167181290,
            dgraph: [
              {
                label: "query",
                startOffset: 259121,
                duration: 167065120,
              },
            ],
          },
        ],
      },
    },
  },
};

const result = response?.data?.queryLead?.filter(
  (item) => !item?.vehicle?.vehicleBrand
);


// const items = [];
// leads?.map((item) => {
//   if (!item.tempNewMakeId) {
//     console.log();
//     items.push({
//       filter: {
//         regNo: {
//           eq: item?.regNo,
//         },
//       },
//       set: {
//         vehicleBrand: {
//           id: item.newMakeId,
//         },
//         vehicleModel: {
//           id: item?.newModelId,
//         },
//       },
//     });
//   } else {
//     items?.push({
//       filter: {
//         regNo: {
//           eq: item?.regNo,
//         },
//       },
//       set: {
//         vehicleBrand: {
//           id: item?.newMakeId,
//         },
//         vehicleModel: {
//           id: item?.newModelId,
//         },
//         tempVehicleBrand: {
//           id: item?.tempNewMakeId,
//         },
//         tempVehicleModel: {
//           id: item?.tempNewModelId,
//         },
//       },
//     });
//   }
// });

fs.writeFile("leads.json", JSON.stringify(result), (err) => {
  // Checking for errors
  if (err) throw err;

  console.log("Done writing"); // Success
});
console.log(result);
