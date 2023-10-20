import fs from "fs";
const bikeSpec = [
  {
    id: "1",
    bike_id: "1",
    clutch: "Wet multi-disc, manual",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "2",
    bike_id: "2",
    clutch: "--",
    gear_box: "1 Down 4 Up ",
    transmission: "5 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "3",
    bike_id: "3",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "4",
    bike_id: "4",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "5",
    bike_id: "5",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "6",
    bike_id: "6",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "7",
    bike_id: "7",
    clutch: "Wet multi-disc, manual",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "8",
    bike_id: "8",
    clutch: "Wet, Multi Plate ",
    gear_box: "1 Down 4 Up ",
    transmission: "5 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "9",
    bike_id: "9",
    clutch: "Wet multiplate ",
    gear_box: "1 Down 4 Up ",
    transmission: "5 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "10",
    bike_id: "10",
    clutch: "Multi-plate, Wet type",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "11",
    bike_id: "11",
    clutch: "PASC™ antihopping clutch, mechanically operated",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-05-23 13:25:33",
  },
  {
    id: "12",
    bike_id: "12",
    clutch: "Assist & Slipper",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "13",
    bike_id: "13",
    clutch: "Wet Multi-Disc",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "14",
    bike_id: "14",
    clutch: "Wet Multi-Disc",
    gear_box: "6-Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "15",
    bike_id: "15",
    clutch:
      "Hydraulically controlled slipper and self-servo wet multiplate clutch. Self bleeding master cylinder.",
    gear_box: "6-Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "16",
    bike_id: "16",
    clutch: null,
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-05-23 12:42:43",
  },
  {
    id: "17",
    bike_id: "17",
    clutch:
      "Hydraulically controlled slipper and self-servo wet multiplate clutch. Self bleeding master cylinder",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "18",
    bike_id: "18",
    clutch: "Multiplate Wet Clutch",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "19",
    bike_id: "19",
    clutch: "",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "20",
    bike_id: "20",
    clutch: "Automatic ",
    gear_box: "Automatic ",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "21",
    bike_id: "21",
    clutch: "Anti-hopping Clutch",
    gear_box: "6-Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "22",
    bike_id: "22",
    clutch: "Wet clutch with an anti-hopping function, hydraulic activation",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "23",
    bike_id: "23",
    clutch: "Wet, multi-plate torque assist clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "24",
    bike_id: "24",
    clutch: "Wet, multi-plate torque assist clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "25",
    bike_id: "25",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: null,
    updated_at: "2023-02-27 15:50:41",
  },
  {
    id: "26",
    bike_id: "26",
    clutch: "Multiplate Wet clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "27",
    bike_id: "27",
    clutch: "Wet Multiplate",
    gear_box: "1 Down 4 Up",
    transmission: "5 Speed Manual",
    created_at: null,
    updated_at: "2023-04-10 11:42:18",
  },
  {
    id: "28",
    bike_id: "28",
    clutch: "Tubular steel, with twin cradles",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "29",
    bike_id: "29",
    clutch: "Wet, multi-plate torque assist clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "30",
    bike_id: "30",
    clutch: "Automatic",
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "31",
    bike_id: "31",
    clutch: "Dry, Centrifugal Automatic",
    gear_box: "V-Belt Automatic",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "32",
    bike_id: "32",
    clutch: "Wet, multiple-disc",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "33",
    bike_id: "33",
    clutch: "Wet, Multiple Disc",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-04-10 14:34:14",
  },
  {
    id: "34",
    bike_id: "34",
    clutch: "Wet, Multi-Plate, Torque assist clutch",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "35",
    bike_id: "35",
    clutch: "Dry Automatic Centrifugal Clutch",
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "36",
    bike_id: "36",
    clutch: "Dry, Centrifugal",
    gear_box: "Variomatic Drive",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "37",
    bike_id: "37",
    clutch: "Wet Multi-plate",
    gear_box: "4 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-04-11 16:40:10",
  },
  {
    id: "38",
    bike_id: "38",
    clutch: "Wet Multiplate",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "39",
    bike_id: "39",
    clutch: "Wet Multi Plate",
    gear_box: "4 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-04-11 11:09:49",
  },
  {
    id: "40",
    bike_id: "40",
    clutch: "",
    gear_box: "4 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "41",
    bike_id: "41",
    clutch: "--",
    gear_box: "--",
    transmission: " Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "42",
    bike_id: "42",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "43",
    bike_id: "43",
    clutch: "Wet, MultiPlate ",
    gear_box: "1 Down 4 Up ",
    transmission: "5 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "44",
    bike_id: "44",
    clutch: "Multi Plate Wet Clutch",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-04-13 15:43:26",
  },
  {
    id: "45",
    bike_id: "45",
    clutch: "Wet, multi-plate torque assist clutch",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "46",
    bike_id: "46",
    clutch: "Wet Multi Plate",
    gear_box: "5 Speed Constant Mesh",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "47",
    bike_id: "47",
    clutch: "Multiplate Wet Clutch",
    gear_box: "5 Gears",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-03-08 16:17:00",
  },
  {
    id: "48",
    bike_id: "48",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "49",
    bike_id: "49",
    clutch: "Multi-disc clutch in oil bath",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "50",
    bike_id: "50",
    clutch: "Mechanically operated multi disc wet clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "51",
    bike_id: "51",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "52",
    bike_id: "52",
    clutch: "Wet Multiplate ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "53",
    bike_id: "53",
    clutch: "Wet Multiplate ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "54",
    bike_id: "54",
    clutch: "Assist & Slipper Clutch",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "55",
    bike_id: "55",
    clutch: "Wet-Multiple-disc  ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "56",
    bike_id: "56",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "57",
    bike_id: "57",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "58",
    bike_id: "58",
    clutch: "Wet Multiplate Clutch ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "59",
    bike_id: "59",
    clutch: "Wet, multi-plate, slip-assisted ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "60",
    bike_id: "60",
    clutch: "Wet, multi-plate, slip",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "61",
    bike_id: "61",
    clutch: "Wet, multi-plate, slip",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "62",
    bike_id: "62",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "63",
    bike_id: "63",
    clutch: "Wet, Multi-Plate",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "64",
    bike_id: "64",
    clutch:
      "Multiplate clutch in oil bath, anti-hopping clutch, with self-reinforcement",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "65",
    bike_id: "65",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "66",
    bike_id: "66",
    clutch: "Multi-plate",
    gear_box: "4 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-04-13 13:14:27",
  },
  {
    id: "67",
    bike_id: "67",
    clutch: "",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "68",
    bike_id: "68",
    clutch: "",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "69",
    bike_id: "69",
    clutch: "",
    gear_box: "5 speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "70",
    bike_id: "70",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "71",
    bike_id: "71",
    clutch: "Hydraulic, wet, multi-plate, slip and assist",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "72",
    bike_id: "72",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "73",
    bike_id: "73",
    clutch: null,
    gear_box: "5-Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-05-23 12:58:46",
  },
  {
    id: "74",
    bike_id: "74",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: null,
    updated_at: "2023-05-23 12:46:29",
  },
  {
    id: "75",
    bike_id: "75",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: null,
    updated_at: "2023-05-23 12:55:42",
  },
  {
    id: "76",
    bike_id: "76",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: null,
    updated_at: "2023-04-28 15:33:25",
  },
  {
    id: "77",
    bike_id: "77",
    clutch: "Wet, Multi-plate",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-04-10 12:03:28",
  },
  {
    id: "78",
    bike_id: "78",
    clutch: "Automatic Centrifugal Clutch",
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "79",
    bike_id: "79",
    clutch: "Assist and Slipper Clutch ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "80",
    bike_id: "80",
    clutch:
      "Slipper and self servo wet multiplate clutch with hydraulic control",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "81",
    bike_id: "81",
    clutch: "(DCT) Hydraulic, wet, multi-plate with oil pressure",
    gear_box: "7 Speed",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "82",
    bike_id: "82",
    clutch: "Multiple-Disc Wet Clutch (anti hopping), Mechanically Operated",
    gear_box: "6-Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "83",
    bike_id: "83",
    clutch: "Wet Multi Plate",
    gear_box: "5 Speed Constant Mesh",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "84",
    bike_id: "84",
    clutch: "Dry - Centrifugal Clutch ",
    gear_box: "Automatic ",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "85",
    bike_id: "85",
    clutch: "Anti-hopping Clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "86",
    bike_id: "86",
    clutch: "Wet Multi Plate",
    gear_box: "4 Speeed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-04-11 10:55:42",
  },
  {
    id: "87",
    bike_id: "87",
    clutch: "Wet Multi Plate",
    gear_box: "4 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-04-11 11:41:50",
  },
  {
    id: "88",
    bike_id: "88",
    clutch: "",
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "89",
    bike_id: "89",
    clutch: "",
    gear_box: "V-belt automatic",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "90",
    bike_id: "90",
    clutch: "Multiplate Wet Clutch",
    gear_box: "4 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "91",
    bike_id: "91",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "92",
    bike_id: "92",
    clutch: "Wet Multiplate ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "93",
    bike_id: "93",
    clutch:
      "Hydraulically controlled slipper and self-servo wet multiplate clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "94",
    bike_id: "94",
    clutch: "Wet multi plates",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "95",
    bike_id: "95",
    clutch: "Automatic ",
    gear_box: "Automatic ",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "96",
    bike_id: "96",
    clutch:
      "Light action, wet, multiplate clutch with hydraulic control. Self-servo action on drive, slipper action on over-run",
    gear_box: "6-Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "97",
    bike_id: "97",
    clutch: "PASC Slipper Clutch, Mechanically Operated",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "98",
    bike_id: "98",
    clutch: "Wet multi-disc, manual",
    gear_box: "6 speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "99",
    bike_id: "99",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "100",
    bike_id: "100",
    clutch: "Wet,multiple disc",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "101",
    bike_id: "101",
    clutch: "Multiplate Wet Clutch",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "102",
    bike_id: "102",
    clutch: "Wet Multidisc ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "103",
    bike_id: "103",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "104",
    bike_id: "104",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "105",
    bike_id: "105",
    clutch: "--",
    gear_box: "--",
    transmission: " Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "106",
    bike_id: "106",
    clutch: "PASC Slipper Clutch, Mechanically Operated",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "107",
    bike_id: "107",
    clutch: "Wet, multi-disc",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "108",
    bike_id: "108",
    clutch: "Wet, multi-plate assist clutch ",
    gear_box: "1 Down 4 Up ",
    transmission: "5 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "109",
    bike_id: "109",
    clutch: "Wet, multi-plate hydraulically operated, torque assist",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "110",
    bike_id: "110",
    clutch: "Wet, MultiPlate ",
    gear_box: "1 Down 4 Up ",
    transmission: "5 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "111",
    bike_id: "111",
    clutch: "",
    gear_box: "5-speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "112",
    bike_id: "112",
    clutch: "--",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "113",
    bike_id: "113",
    clutch: "Wet, multi-plate",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-04-10 11:35:25",
  },
  {
    id: "114",
    bike_id: "114",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "115",
    bike_id: "115",
    clutch: "Multiplate Wet Clutch",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "116",
    bike_id: "116",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "117",
    bike_id: "117",
    clutch: "Wet, Multiplate with Assist & Slipper Clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "118",
    bike_id: "118",
    clutch: "Wet multi plate- slipper clutch with 5 plate",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "119",
    bike_id: "119",
    clutch: "Wet, Multi-Disc",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "120",
    bike_id: "120",
    clutch: "Self Ventilating Dry - Centrifugal Clutch",
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "121",
    bike_id: "121",
    clutch: "Wet, multiple-disc",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-04-10 14:28:24",
  },
  {
    id: "122",
    bike_id: "122",
    clutch: "Self Ventilating Dry - Centrifugal Clutch",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "123",
    bike_id: "123",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "124",
    bike_id: "124",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "125",
    bike_id: "125",
    clutch: "Slipper and self-servo wet multiplate clutch, hydraulic control",
    gear_box: "6-Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "126",
    bike_id: "126",
    clutch: "Dry, Centrifugal ",
    gear_box: "Automatic ",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "127",
    bike_id: "127",
    clutch:
      "Hydraulically controlled slipper and self-servo wet multiplate clutch",
    gear_box: "6 speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "128",
    bike_id: "128",
    clutch: "Slipper Clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "129",
    bike_id: "129",
    clutch: "Wet, multiple-disc ",
    gear_box: "All 4 Up ",
    transmission: "4 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "130",
    bike_id: "130",
    clutch: "--",
    gear_box: "--",
    transmission: " Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "131",
    bike_id: "131",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "132",
    bike_id: "132",
    clutch: "Wet Multiplate ",
    gear_box: "1 Down 4 Up ",
    transmission: "5 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "133",
    bike_id: "133",
    clutch: "Automatic ",
    gear_box: "Automatic ",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "134",
    bike_id: "134",
    clutch:
      "Slipper and self-servo multiplate wet clutch with hydraulic control",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "135",
    bike_id: "135",
    clutch: "Wet Multiplate ",
    gear_box: "1 Down 4 Up ",
    transmission: "5 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "136",
    bike_id: "136",
    clutch: "Wet Multiplate Clutch ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "137",
    bike_id: "137",
    clutch: "Dry, Centrifugal",
    gear_box: "V-Belt Automatic",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "138",
    bike_id: "138",
    clutch: "PASC™ antihopping clutch, mechanically operated",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "139",
    bike_id: "139",
    clutch: "Wet multi-disc clutch, mechanically actuated",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "140",
    bike_id: "140",
    clutch: "Wet multi-disc clutch, mechanically actuated",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "141",
    bike_id: "141",
    clutch: "Hydraulic Clutch",
    gear_box: "5-speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "142",
    bike_id: "142",
    clutch: "",
    gear_box: "5-Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "143",
    bike_id: "143",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "144",
    bike_id: "144",
    clutch: "Wet multi plate - 7 plate design, RT slipper clutch ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "145",
    bike_id: "145",
    clutch: "Wet, multi-plate, slip &assist",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "146",
    bike_id: "146",
    clutch: "Automatic",
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "147",
    bike_id: "147",
    clutch: "",
    gear_box: "",
    transmission: "",
    created_at: null,
    updated_at: null,
  },
  {
    id: "148",
    bike_id: "148",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "149",
    bike_id: "149",
    clutch: "Wet Multi-Disc, Manual",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "150",
    bike_id: "150",
    clutch:
      "Slipper And Self-servo Wet Multiplate Clutch With Hydraulic Control",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "151",
    bike_id: "151",
    clutch: "Wet multi-disc, manual",
    gear_box: "6 speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "152",
    bike_id: "152",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "153",
    bike_id: "153",
    clutch: "Wet Multidisc ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "154",
    bike_id: "154",
    clutch: "Automatic",
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "155",
    bike_id: "155",
    clutch: "Dry, Centrifugal",
    gear_box: "Variomatic Drive",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "156",
    bike_id: "156",
    clutch:
      "Multiplate wet clutch with hydraulic control, self-servo action on drive, slipper action on over-run",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "157",
    bike_id: "157",
    clutch: "Centrifugal dry clutch",
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "158",
    bike_id: "158",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "159",
    bike_id: "159",
    clutch: "Wet multi-plate",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "160",
    bike_id: "160",
    clutch: "Wet, Multiple-disc",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "161",
    bike_id: "161",
    clutch: "Wet, Multi-Plate",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "162",
    bike_id: "162",
    clutch: "Wet, multi-plate",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "163",
    bike_id: "163",
    clutch: "Wet, Multi-Plate",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "164",
    bike_id: "164",
    clutch: "Anti-hopping Clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "165",
    bike_id: "165",
    clutch: "Wet Multiplate Clutch ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "166",
    bike_id: "166",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "167",
    bike_id: "167",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "168",
    bike_id: "168",
    clutch: "",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "169",
    bike_id: "169",
    clutch: "",
    gear_box: "6-Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "170",
    bike_id: "170",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "171",
    bike_id: "171",
    clutch: "",
    gear_box: "6-Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "172",
    bike_id: "172",
    clutch: "",
    gear_box: "6-speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "173",
    bike_id: "173",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "174",
    bike_id: "174",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "175",
    bike_id: "175",
    clutch: "Hydraulically actuated w/ assist-and-slip functions ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "176",
    bike_id: "176",
    clutch: "Wet Multiplate, Assist ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "177",
    bike_id: "177",
    clutch: "Wet Multiplate & Assist ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "178",
    bike_id: "178",
    clutch: "Wet, Multiplate, Assist ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "179",
    bike_id: "179",
    clutch: "Mechanical, 8 plate wet, assist & slip, 1090N",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "180",
    bike_id: "180",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "181",
    bike_id: "181",
    clutch: "Wet, Multiplate ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "182",
    bike_id: "182",
    clutch: "",
    gear_box: "6-speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "183",
    bike_id: "183",
    clutch: "",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "184",
    bike_id: "184",
    clutch: "Wet, Multi Plate",
    gear_box: "4 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "185",
    bike_id: "185",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "186",
    bike_id: "186",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "187",
    bike_id: "187",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "188",
    bike_id: "188",
    clutch: "",
    gear_box: "",
    transmission: "",
    created_at: null,
    updated_at: null,
  },
  {
    id: "189",
    bike_id: "189",
    clutch:
      "Multiplate clutch in oil bath, anti-hopping clutch, with self-reinforcement",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "190",
    bike_id: "190",
    clutch: "Multiplate Wet Clutch",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "191",
    bike_id: "191",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "192",
    bike_id: "192",
    clutch: "Wet Multiplate Clutch ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "193",
    bike_id: "193",
    clutch: "Multi Plate Wet Clutch",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "194",
    bike_id: "194",
    clutch: "Wet multiplate ",
    gear_box: "All 4 Down ",
    transmission: "4 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "195",
    bike_id: "195",
    clutch: "Wet, Multiple - Disc",
    gear_box: "4 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "196",
    bike_id: "196",
    clutch: "Single-disk dry clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "197",
    bike_id: "197",
    clutch: null,
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-04-08 15:10:20",
  },
  {
    id: "198",
    bike_id: "198",
    clutch: "Wet Multiplate",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-04-10 12:48:03",
  },
  {
    id: "199",
    bike_id: "199",
    clutch: "Wet, multi-disc",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "200",
    bike_id: "200",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "201",
    bike_id: "201",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "202",
    bike_id: "202",
    clutch: "Wet Multiplate Clutch ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "203",
    bike_id: "203",
    clutch: "Centrifugal Wet Clutch",
    gear_box: "Single Speed Gear Box",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "204",
    bike_id: "204",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "205",
    bike_id: "205",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "206",
    bike_id: "206",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "207",
    bike_id: "207",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "208",
    bike_id: "208",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "209",
    bike_id: "209",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "210",
    bike_id: "210",
    clutch: "Wet, multi-plate, slip",
    gear_box: "6 speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "211",
    bike_id: "211",
    clutch: "Centrifugal Wet Clutch",
    gear_box: "Single Speed Gear Box",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "212",
    bike_id: "212",
    clutch: "Multi-plate, wet type",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "213",
    bike_id: "213",
    clutch: "WET, MULTI-PLATE",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-04-10 12:22:10",
  },
  {
    id: "214",
    bike_id: "214",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "215",
    bike_id: "215",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "216",
    bike_id: "216",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "217",
    bike_id: "217",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "218",
    bike_id: "218",
    clutch: "",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "219",
    bike_id: "219",
    clutch: "Automatic ",
    gear_box: "Automatic ",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "220",
    bike_id: "220",
    clutch: "Automatic ",
    gear_box: "Automatic ",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "221",
    bike_id: "221",
    clutch: "",
    gear_box: "",
    transmission: "",
    created_at: null,
    updated_at: null,
  },
  {
    id: "222",
    bike_id: "222",
    clutch: "",
    gear_box: "",
    transmission: "",
    created_at: null,
    updated_at: null,
  },
  {
    id: "223",
    bike_id: "223",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: null,
    updated_at: "2023-04-28 15:41:51",
  },
  {
    id: "224",
    bike_id: "224",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: null,
    updated_at: "2023-04-28 15:47:36",
  },
  {
    id: "225",
    bike_id: "225",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "226",
    bike_id: "226",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "227",
    bike_id: "227",
    clutch: "Automatic",
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "228",
    bike_id: "228",
    clutch: "Automatic",
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "229",
    bike_id: "229",
    clutch: "Multiplate Wet Clutch",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "230",
    bike_id: "230",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "231",
    bike_id: "231",
    clutch: "Wet, multiplate clutch with diaphragm spring with assist slipper",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "232",
    bike_id: "232",
    clutch: "Multiplate wet clutch with mechanical slipper system",
    gear_box: "6 speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "233",
    bike_id: "233",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "234",
    bike_id: "234",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "235",
    bike_id: "235",
    clutch: "Multiplate Wet Clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "236",
    bike_id: "236",
    clutch: "Multiplate Wet Clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "237",
    bike_id: "237",
    clutch: "Wet, Multi Plate",
    gear_box: "6-Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "238",
    bike_id: "238",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "239",
    bike_id: "239",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "240",
    bike_id: "240",
    clutch: "Wet, Multi Disc ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "241",
    bike_id: "241",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "242",
    bike_id: "242",
    clutch: "Wet Multi Disc, Manual",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "243",
    bike_id: "243",
    clutch: "Wet, Multi Disc",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "244",
    bike_id: "244",
    clutch: "Single dry plate clutch, hydraulically operated ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "245",
    bike_id: "245",
    clutch: "Single dry plate clutch, hydraulically operated",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "246",
    bike_id: "246",
    clutch: "Single dry plate clutch, hydraulically operated",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "247",
    bike_id: "247",
    clutch: "Wet clutch with an anti-hopping function ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "248",
    bike_id: "248",
    clutch: "Wet clutch with an anti-hopping function ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "249",
    bike_id: "249",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "250",
    bike_id: "250",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "251",
    bike_id: "251",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "252",
    bike_id: "252",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "253",
    bike_id: "253",
    clutch: "Automatic ",
    gear_box: "Automatic ",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "254",
    bike_id: "254",
    clutch: "Automatic",
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "255",
    bike_id: "255",
    clutch: "Wet clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "256",
    bike_id: "256",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "257",
    bike_id: "257",
    clutch: "Wet, Multiple Disc",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "258",
    bike_id: "258",
    clutch: "Multidisc wet clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "259",
    bike_id: "259",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "260",
    bike_id: "260",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "261",
    bike_id: "261",
    clutch: "Wet Clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "262",
    bike_id: "262",
    clutch: "Multi Plate Wet Clutch",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "263",
    bike_id: "263",
    clutch: "Multidisc wet clutch",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "264",
    bike_id: "264",
    clutch: "Multiplate Wet Clutch",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "265",
    bike_id: "265",
    clutch: "Multiplate Wet Clutch",
    gear_box: "4 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "266",
    bike_id: "266",
    clutch: "V-Matic",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "267",
    bike_id: "267",
    clutch: "Wet, multi-plate",
    gear_box: "6 speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "268",
    bike_id: "268",
    clutch: "Wet Multiplate ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "269",
    bike_id: "269",
    clutch: "",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "270",
    bike_id: "270",
    clutch: "",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "271",
    bike_id: "271",
    clutch: "Assist & Slipper Clutch ",
    gear_box: "1 Down 4 Up ",
    transmission: "5 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "272",
    bike_id: "272",
    clutch: "Multi plate wet clutch with slipper system",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "273",
    bike_id: "273",
    clutch: "Wet, multi-plate type",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "274",
    bike_id: "274",
    clutch: "Wet, multi-plate type",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "275",
    bike_id: "275",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "276",
    bike_id: "276",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "277",
    bike_id: "277",
    clutch: "Wet, Multi Plate",
    gear_box: "4 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "278",
    bike_id: "278",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "279",
    bike_id: "279",
    clutch: "Wet multiplate (6 plate)",
    gear_box: "5-speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-04-10 12:58:26",
  },
  {
    id: "280",
    bike_id: "280",
    clutch: "",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "281",
    bike_id: "281",
    clutch: "",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "282",
    bike_id: "282",
    clutch: "Wet, Multiplate with Assist & Slipper Clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "283",
    bike_id: "283",
    clutch: "Multiplate Wet Clutch",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "284",
    bike_id: "284",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "285",
    bike_id: "285",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "286",
    bike_id: "286",
    clutch: "Multi plate wet clutch with mechanical slipper system",
    gear_box: "6 speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "287",
    bike_id: "287",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "288",
    bike_id: "288",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "289",
    bike_id: "289",
    clutch: "Wet multi plate",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-04-10 12:38:45",
  },
  {
    id: "290",
    bike_id: "290",
    clutch: "Wet multi plate",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-04-10 12:29:29",
  },
  {
    id: "291",
    bike_id: "291",
    clutch: "Wet, Multi Disc",
    gear_box: "",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "292",
    bike_id: "292",
    clutch: "Wet, Multi-Plate",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "293",
    bike_id: "293",
    clutch: "Wet, Multi Plate",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "294",
    bike_id: "294",
    clutch: "Wet, Multi-Plate",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "295",
    bike_id: "295",
    clutch: "Wet, Multi Plate",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "296",
    bike_id: "296",
    clutch: "Self ventilating dry - centrifugal clutch",
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "297",
    bike_id: "297",
    clutch: "Automatic",
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "298",
    bike_id: "298",
    clutch: "Automatic",
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "299",
    bike_id: "299",
    clutch: "Automatic ",
    gear_box: "Automatic ",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "300",
    bike_id: "300",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "301",
    bike_id: "301",
    clutch: "A & S Clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "302",
    bike_id: "302",
    clutch: "A & S Clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "303",
    bike_id: "303",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "304",
    bike_id: "304",
    clutch: "multi-plate anti-hopping wet clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "305",
    bike_id: "305",
    clutch: "Wet Multi Plate ",
    gear_box: "All 4 Up ",
    transmission: "4 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "306",
    bike_id: "306",
    clutch: "Multi-plate wet clutch with mechanical slip system",
    gear_box: "6 speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "307",
    bike_id: "307",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "308",
    bike_id: "308",
    clutch: "Multiple Wet Clutch",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "309",
    bike_id: "309",
    clutch: "Automatic ",
    gear_box: "Automatic ",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "310",
    bike_id: "310",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "311",
    bike_id: "311",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "312",
    bike_id: "312",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "313",
    bike_id: "313",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "314",
    bike_id: "314",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "315",
    bike_id: "315",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "316",
    bike_id: "316",
    clutch: "",
    gear_box: "",
    transmission: "",
    created_at: null,
    updated_at: null,
  },
  {
    id: "317",
    bike_id: "317",
    clutch: "",
    gear_box: "",
    transmission: "",
    created_at: null,
    updated_at: null,
  },
  {
    id: "318",
    bike_id: "318",
    clutch: "",
    gear_box: "",
    transmission: "",
    created_at: null,
    updated_at: null,
  },
  {
    id: "319",
    bike_id: "319",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: null,
    updated_at: "2023-06-22 15:11:53",
  },
  {
    id: "320",
    bike_id: "320",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "321",
    bike_id: "321",
    clutch: "Wet multi-disc, manual",
    gear_box: "6-Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "322",
    bike_id: "322",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "323",
    bike_id: "323",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "324",
    bike_id: "324",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "325",
    bike_id: "325",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "326",
    bike_id: "326",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "327",
    bike_id: "327",
    clutch: "--",
    gear_box: "--",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "328",
    bike_id: "328",
    clutch: "--",
    gear_box: "--",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "329",
    bike_id: "329",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "330",
    bike_id: "330",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "331",
    bike_id: "331",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "332",
    bike_id: "332",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "333",
    bike_id: "333",
    clutch: null,
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-04-08 14:59:57",
  },
  {
    id: "334",
    bike_id: "334",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "335",
    bike_id: "335",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "336",
    bike_id: "336",
    clutch: "--",
    gear_box: "--",
    transmission: "--",
    created_at: null,
    updated_at: null,
  },
  {
    id: "337",
    bike_id: "337",
    clutch: "",
    gear_box: "5-Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "338",
    bike_id: "338",
    clutch: "Multiplate Wet Clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "339",
    bike_id: "339",
    clutch: "--",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-03-08 17:41:57",
  },
  {
    id: "340",
    bike_id: "340",
    clutch: "Wet multi-plate",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "341",
    bike_id: "341",
    clutch: "--",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: "2023-02-17 15:35:12",
  },
  {
    id: "342",
    bike_id: "342",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "343",
    bike_id: "343",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "344",
    bike_id: "344",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "345",
    bike_id: "345",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "346",
    bike_id: "346",
    clutch: "--",
    gear_box: "--",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "347",
    bike_id: "347",
    clutch: "--",
    gear_box: "--",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "348",
    bike_id: "348",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "349",
    bike_id: "349",
    clutch: "Wet, Multi Disc ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "350",
    bike_id: "350",
    clutch: "Wet Multi-Disc ",
    gear_box: "1 Down 5 Up ",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "351",
    bike_id: "351",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "352",
    bike_id: "352",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "353",
    bike_id: "353",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "354",
    bike_id: "354",
    clutch: "",
    gear_box: "",
    transmission: "Automatic",
    created_at: null,
    updated_at: null,
  },
  {
    id: "355",
    bike_id: "355",
    clutch: "",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "356",
    bike_id: "356",
    clutch: "Centrifugal Clutch",
    gear_box: "4 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "357",
    bike_id: "357",
    clutch: "Wet, Multiple Disc",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "358",
    bike_id: "358",
    clutch: "--",
    gear_box: "--",
    transmission: "6 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "359",
    bike_id: "359",
    clutch: "--",
    gear_box: "--",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "360",
    bike_id: "360",
    clutch: "",
    gear_box: "",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "361",
    bike_id: "361",
    clutch: "Wet multiplate",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "362",
    bike_id: "362",
    clutch: "Multiplate Wet Clutch",
    gear_box: "6 speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "363",
    bike_id: "363",
    clutch: "Wet multiplate",
    gear_box: "6 speed",
    transmission: "Manual",
    created_at: null,
    updated_at: null,
  },
  {
    id: "364",
    bike_id: "364",
    clutch: "Wet multiplate ",
    gear_box: "--",
    transmission: "5 Speed Manual ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "365",
    bike_id: "365",
    clutch: "Automatic ",
    gear_box: "Automatic ",
    transmission: " Automatic ",
    created_at: null,
    updated_at: null,
  },
  {
    id: "366",
    bike_id: "512",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: null,
    updated_at: null,
  },
  {
    id: "367",
    bike_id: "517",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "N/A",
    created_at: null,
    updated_at: "2023-02-22 12:54:08",
  },
  {
    id: "368",
    bike_id: "518",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "N/A",
    created_at: null,
    updated_at: "2023-02-22 12:59:04",
  },
  {
    id: "369",
    bike_id: "519",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "N/A",
    created_at: null,
    updated_at: "2023-02-22 13:07:03",
  },
  {
    id: "370",
    bike_id: "520",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "N/A",
    created_at: null,
    updated_at: "2023-02-22 13:12:51",
  },
  {
    id: "371",
    bike_id: "521",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "N/A",
    created_at: null,
    updated_at: "2023-02-22 13:17:58",
  },
  {
    id: "372",
    bike_id: "522",
    clutch: "Wet multi plate RT slipper clutch",
    gear_box: "5 speed gear box",
    transmission: "N/A",
    created_at: "2023-02-13 13:42:33",
    updated_at: "2023-02-14 11:17:45",
  },
  {
    id: "373",
    bike_id: "522",
    clutch: "Wet multi plate RT slipper clutch",
    gear_box: "5 speed gear box",
    transmission: null,
    created_at: "2023-02-13 15:05:18",
    updated_at: "2023-02-13 15:05:18",
  },
  {
    id: "374",
    bike_id: "523",
    clutch: "Wet multi plate - 7 plate design, RT slipper clutch",
    gear_box: "6 speed",
    transmission: "N/A",
    created_at: "2023-02-14 11:48:42",
    updated_at: "2023-02-14 13:52:47",
  },
  {
    id: "375",
    bike_id: "524",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "N/A",
    created_at: "2023-02-14 17:13:49",
    updated_at: "2023-02-14 17:24:15",
  },
  {
    id: "376",
    bike_id: "525",
    clutch: "Multiplate Wet Type",
    gear_box: "4-speed Constant Mesh",
    transmission: "Manual",
    created_at: "2023-02-14 17:33:42",
    updated_at: "2023-04-11 12:01:19",
  },
  {
    id: "381",
    bike_id: "530",
    clutch: "N/A",
    gear_box: "6 Speed",
    transmission: "Automatic",
    created_at: "2023-02-16 16:48:29",
    updated_at: "2023-02-17 15:30:04",
  },
  {
    id: "382",
    bike_id: "531",
    clutch: null,
    gear_box: "5 Speed",
    transmission: "manual",
    created_at: "2023-02-16 17:01:37",
    updated_at: "2023-05-23 12:28:33",
  },
  {
    id: "385",
    bike_id: "534",
    clutch: "Wet, Multi-Plate",
    gear_box: "6speed",
    transmission: "Automatic",
    created_at: "2023-02-17 10:08:59",
    updated_at: "2023-02-17 15:14:01",
  },
  {
    id: "386",
    bike_id: "535",
    clutch: "Wet, Multi-Plate",
    gear_box: "6speed",
    transmission: "Automatic",
    created_at: "2023-02-17 10:11:31",
    updated_at: "2023-02-17 15:07:05",
  },
  {
    id: "387",
    bike_id: "536",
    clutch: null,
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-02-17 10:14:09",
    updated_at: "2023-05-23 12:36:25",
  },
  {
    id: "388",
    bike_id: "537",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-17 14:38:15",
    updated_at: "2023-02-17 14:38:15",
  },
  {
    id: "389",
    bike_id: "538",
    clutch: "Wet, Multi-Plate",
    gear_box: "6speed",
    transmission: "manual",
    created_at: "2023-02-17 16:52:15",
    updated_at: "2023-02-17 17:00:15",
  },
  {
    id: "390",
    bike_id: "539",
    clutch: "N/A",
    gear_box: "5 Speed",
    transmission: "Automa",
    created_at: "2023-02-20 09:59:48",
    updated_at: "2023-02-20 10:03:00",
  },
  {
    id: "391",
    bike_id: "540",
    clutch: "N/A",
    gear_box: "6 Speed",
    transmission: "Automatic",
    created_at: "2023-02-20 10:09:48",
    updated_at: "2023-02-20 10:13:56",
  },
  {
    id: "392",
    bike_id: "541",
    clutch: "N/A",
    gear_box: "6 Speed",
    transmission: "Automatic",
    created_at: "2023-02-20 10:32:58",
    updated_at: "2023-02-20 10:38:21",
  },
  {
    id: "393",
    bike_id: "542",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: null,
    created_at: "2023-02-20 10:46:06",
    updated_at: "2023-02-20 10:50:53",
  },
  {
    id: "394",
    bike_id: "543",
    clutch: "N/A",
    gear_box: "4 Speed Hypershift",
    transmission: "Manual",
    created_at: "2023-02-20 10:59:02",
    updated_at: "2023-02-20 11:17:44",
  },
  {
    id: "395",
    bike_id: "544",
    clutch: "N/A",
    gear_box: "4 Up 1 Down",
    transmission: "Manual",
    created_at: "2023-02-20 11:02:24",
    updated_at: "2023-02-20 11:51:06",
  },
  {
    id: "396",
    bike_id: "545",
    clutch: null,
    gear_box: null,
    transmission: "Clutchless Single Speed",
    created_at: "2023-02-20 11:22:20",
    updated_at: "2023-05-29 17:36:46",
  },
  {
    id: "397",
    bike_id: "546",
    clutch: null,
    gear_box: null,
    transmission: "Clutchless Single Speed",
    created_at: "2023-02-20 11:28:46",
    updated_at: "2023-05-29 17:33:23",
  },
  {
    id: "398",
    bike_id: "547",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "N/A",
    created_at: "2023-02-20 11:40:05",
    updated_at: "2023-02-20 11:42:15",
  },
  {
    id: "399",
    bike_id: "548",
    clutch: "N/A",
    gear_box: "6speed",
    transmission: "manual",
    created_at: "2023-02-20 11:54:19",
    updated_at: "2023-02-20 12:00:42",
  },
  {
    id: "400",
    bike_id: "549",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "N/A",
    created_at: "2023-02-20 12:07:07",
    updated_at: "2023-02-20 12:11:49",
  },
  {
    id: "401",
    bike_id: "550",
    clutch: null,
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: "2023-02-20 12:15:50",
    updated_at: "2023-05-23 12:32:08",
  },
  {
    id: "402",
    bike_id: "551",
    clutch: "N/A",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-02-20 12:35:27",
    updated_at: "2023-02-20 12:40:25",
  },
  {
    id: "403",
    bike_id: "552",
    clutch: "Wet Multiplate",
    gear_box: "N/A",
    transmission: "N/A",
    created_at: "2023-02-20 14:55:46",
    updated_at: "2023-02-20 15:00:34",
  },
  {
    id: "404",
    bike_id: "553",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "N/A",
    created_at: "2023-02-20 15:03:38",
    updated_at: "2023-02-20 15:07:57",
  },
  {
    id: "405",
    bike_id: "554",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-20 15:16:57",
    updated_at: "2023-02-20 15:22:41",
  },
  {
    id: "406",
    bike_id: "555",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-20 15:26:35",
    updated_at: "2023-02-20 15:31:35",
  },
  {
    id: "407",
    bike_id: "556",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-20 15:33:23",
    updated_at: "2023-02-20 15:37:40",
  },
  {
    id: "408",
    bike_id: "557",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-20 15:39:26",
    updated_at: "2023-02-20 15:44:22",
  },
  {
    id: "409",
    bike_id: "558",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-20 15:46:42",
    updated_at: "2023-02-20 16:01:39",
  },
  {
    id: "410",
    bike_id: "559",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-20 16:03:18",
    updated_at: "2023-02-20 16:08:17",
  },
  {
    id: "411",
    bike_id: "560",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-20 16:13:06",
    updated_at: "2023-02-20 16:18:04",
  },
  {
    id: "412",
    bike_id: "561",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-20 16:19:38",
    updated_at: "2023-02-20 16:22:59",
  },
  {
    id: "413",
    bike_id: "562",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-20 16:24:49",
    updated_at: "2023-02-20 16:35:03",
  },
  {
    id: "414",
    bike_id: "563",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-20 16:41:55",
    updated_at: "2023-02-20 16:48:01",
  },
  {
    id: "415",
    bike_id: "564",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Clutchless direct drive",
    created_at: "2023-02-20 17:15:41",
    updated_at: "2023-02-20 17:23:06",
  },
  {
    id: "416",
    bike_id: "565",
    clutch: "Clutchless direct drive",
    gear_box: null,
    transmission: null,
    created_at: "2023-02-20 17:25:11",
    updated_at: "2023-02-27 16:31:10",
  },
  {
    id: "417",
    bike_id: "566",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Clutchless direct drive",
    created_at: "2023-02-20 17:43:19",
    updated_at: "2023-02-20 17:51:41",
  },
  {
    id: "418",
    bike_id: "567",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Clutchless direct drive",
    created_at: "2023-02-21 09:48:52",
    updated_at: "2023-02-21 09:54:59",
  },
  {
    id: "419",
    bike_id: "568",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Clutchless direct drive",
    created_at: "2023-02-21 09:57:06",
    updated_at: "2023-02-21 10:02:55",
  },
  {
    id: "420",
    bike_id: "569",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Clutchless direct drive",
    created_at: "2023-02-21 10:05:05",
    updated_at: "2023-02-21 10:10:58",
  },
  {
    id: "421",
    bike_id: "570",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Clutchless direct drive",
    created_at: "2023-02-21 10:13:34",
    updated_at: "2023-02-21 10:19:29",
  },
  {
    id: "422",
    bike_id: "571",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Clutchless direct drive",
    created_at: "2023-02-21 10:22:59",
    updated_at: "2023-02-21 10:33:14",
  },
  {
    id: "423",
    bike_id: "572",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Clutchless direct drive",
    created_at: "2023-02-21 10:36:36",
    updated_at: "2023-02-21 10:42:12",
  },
  {
    id: "424",
    bike_id: "573",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "FLO drive belt",
    created_at: "2023-02-21 11:56:53",
    updated_at: "2023-02-21 12:05:37",
  },
  {
    id: "425",
    bike_id: "574",
    clutch: "N/A",
    gear_box: "21",
    transmission: "Automatic",
    created_at: "2023-02-21 12:15:13",
    updated_at: "2023-02-21 12:20:56",
  },
  {
    id: "426",
    bike_id: "575",
    clutch: "N/A",
    gear_box: "21",
    transmission: "Automatic",
    created_at: "2023-02-21 12:22:25",
    updated_at: "2023-02-21 12:26:54",
  },
  {
    id: "427",
    bike_id: "576",
    clutch: "N/A",
    gear_box: "7",
    transmission: "Automatic",
    created_at: "2023-02-21 12:28:13",
    updated_at: "2023-02-21 12:38:19",
  },
  {
    id: "428",
    bike_id: "577",
    clutch: "N/A",
    gear_box: "7",
    transmission: "Automatic",
    created_at: "2023-02-21 12:29:23",
    updated_at: "2023-02-21 12:44:14",
  },
  {
    id: "429",
    bike_id: "578",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-21 12:30:40",
    updated_at: "2023-02-21 12:47:42",
  },
  {
    id: "430",
    bike_id: "579",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-21 13:02:26",
    updated_at: "2023-02-21 13:31:30",
  },
  {
    id: "431",
    bike_id: "580",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-21 13:05:08",
    updated_at: "2023-02-21 14:21:13",
  },
  {
    id: "432",
    bike_id: "581",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-21 13:08:10",
    updated_at: "2023-02-21 14:25:43",
  },
  {
    id: "433",
    bike_id: "582",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-21 13:20:11",
    updated_at: "2023-02-21 16:49:23",
  },
  {
    id: "434",
    bike_id: "583",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-21 13:26:37",
    updated_at: "2023-02-22 09:56:33",
  },
  {
    id: "435",
    bike_id: "584",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-21 13:53:26",
    updated_at: "2023-02-22 10:04:01",
  },
  {
    id: "436",
    bike_id: "585",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "N/A",
    created_at: "2023-02-22 10:25:56",
    updated_at: "2023-02-22 10:31:05",
  },
  {
    id: "437",
    bike_id: "586",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "N/A",
    created_at: "2023-02-22 10:35:06",
    updated_at: "2023-02-22 10:39:07",
  },
  {
    id: "438",
    bike_id: "587",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-22 10:50:06",
    updated_at: "2023-02-22 10:53:52",
  },
  {
    id: "439",
    bike_id: "588",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-22 10:59:24",
    updated_at: "2023-02-22 11:04:17",
  },
  {
    id: "440",
    bike_id: "589",
    clutch: "N/A",
    gear_box: "N/A",
    transmission:
      "Gates poly chain GT Carbon  belt with stretch-free carbon-fiber tensiles cords",
    created_at: "2023-02-22 11:23:53",
    updated_at: "2023-02-22 11:28:36",
  },
  {
    id: "441",
    bike_id: "590",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "N/A",
    created_at: "2023-02-22 11:38:05",
    updated_at: "2023-02-22 11:48:09",
  },
  {
    id: "442",
    bike_id: "591",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-22 11:40:33",
    updated_at: "2023-02-22 11:47:00",
  },
  {
    id: "443",
    bike_id: "592",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-22 12:10:59",
    updated_at: "2023-02-22 12:16:02",
  },
  {
    id: "444",
    bike_id: "593",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "N/A",
    created_at: "2023-02-22 12:13:14",
    updated_at: "2023-02-22 12:27:01",
  },
  {
    id: "445",
    bike_id: "594",
    clutch: "N/A",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-02-22 12:20:40",
    updated_at: "2023-02-22 12:24:32",
  },
  {
    id: "446",
    bike_id: "595",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-22 12:28:50",
    updated_at: "2023-02-22 12:34:52",
  },
  {
    id: "447",
    bike_id: "596",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-22 12:42:51",
    updated_at: "2023-02-22 12:49:07",
  },
  {
    id: "448",
    bike_id: "597",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-22 13:21:51",
    updated_at: "2023-02-22 13:26:28",
  },
  {
    id: "449",
    bike_id: "598",
    clutch: "N/A",
    gear_box: "3 Forward & 1 Reverse",
    transmission: "Automatic",
    created_at: "2023-02-22 14:22:47",
    updated_at: "2023-02-22 14:30:37",
  },
  {
    id: "450",
    bike_id: "599",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-22 14:33:00",
    updated_at: "2023-02-22 14:36:37",
  },
  {
    id: "451",
    bike_id: "600",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-22 14:38:16",
    updated_at: "2023-02-22 14:42:57",
  },
  {
    id: "452",
    bike_id: "601",
    clutch: "N/A",
    gear_box: "3 Forward & 1 Reverse",
    transmission: "Automatic",
    created_at: "2023-02-22 14:50:12",
    updated_at: "2023-02-22 15:13:42",
  },
  {
    id: "453",
    bike_id: "602",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-22 14:52:44",
    updated_at: "2023-02-22 15:21:08",
  },
  {
    id: "454",
    bike_id: "603",
    clutch: "N/A",
    gear_box: "N/A",
    transmission: "Automatic",
    created_at: "2023-02-22 15:29:38",
    updated_at: "2023-02-22 16:39:05",
  },
  {
    id: "455",
    bike_id: "604",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-22 16:54:22",
    updated_at: "2023-03-11 12:50:41",
  },
  {
    id: "456",
    bike_id: "605",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-22 17:08:17",
    updated_at: "2023-03-11 12:56:24",
  },
  {
    id: "457",
    bike_id: "606",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-22 17:14:01",
    updated_at: "2023-02-22 17:19:24",
  },
  {
    id: "458",
    bike_id: "607",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-22 17:36:35",
    updated_at: "2023-02-22 17:36:35",
  },
  {
    id: "459",
    bike_id: "608",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-22 17:43:46",
    updated_at: "2023-02-22 17:48:00",
  },
  {
    id: "460",
    bike_id: "609",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 10:09:53",
    updated_at: "2023-02-23 10:18:39",
  },
  {
    id: "461",
    bike_id: "610",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 10:10:58",
    updated_at: "2023-02-23 10:22:27",
  },
  {
    id: "462",
    bike_id: "611",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 10:27:37",
    updated_at: "2023-02-23 10:32:52",
  },
  {
    id: "463",
    bike_id: "612",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 10:34:59",
    updated_at: "2023-02-23 10:43:04",
  },
  {
    id: "464",
    bike_id: "613",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 10:46:32",
    updated_at: "2023-02-23 10:51:16",
  },
  {
    id: "465",
    bike_id: "614",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 10:53:32",
    updated_at: "2023-02-23 10:58:30",
  },
  {
    id: "466",
    bike_id: "615",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 10:59:44",
    updated_at: "2023-02-23 11:04:46",
  },
  {
    id: "467",
    bike_id: "616",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 11:19:00",
    updated_at: "2023-02-23 11:23:46",
  },
  {
    id: "468",
    bike_id: "617",
    clutch: null,
    gear_box: null,
    transmission: "Direct Drive System",
    created_at: "2023-02-23 11:22:15",
    updated_at: "2023-02-23 11:41:16",
  },
  {
    id: "469",
    bike_id: "618",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 11:26:00",
    updated_at: "2023-02-23 11:30:21",
  },
  {
    id: "470",
    bike_id: "619",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 11:40:42",
    updated_at: "2023-02-23 11:47:31",
  },
  {
    id: "471",
    bike_id: "620",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 11:48:55",
    updated_at: "2023-02-23 11:53:25",
  },
  {
    id: "472",
    bike_id: "621",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-23 12:02:20",
    updated_at: "2023-02-23 12:02:20",
  },
  {
    id: "473",
    bike_id: "622",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-23 12:18:33",
    updated_at: "2023-02-23 12:18:33",
  },
  {
    id: "474",
    bike_id: "623",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-23 12:26:24",
    updated_at: "2023-02-23 12:26:24",
  },
  {
    id: "475",
    bike_id: "624",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-23 12:30:35",
    updated_at: "2023-02-23 12:30:35",
  },
  {
    id: "476",
    bike_id: "625",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-23 12:34:22",
    updated_at: "2023-02-23 12:34:22",
  },
  {
    id: "477",
    bike_id: "626",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-23 12:45:26",
    updated_at: "2023-02-23 12:45:26",
  },
  {
    id: "478",
    bike_id: "627",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-23 12:51:18",
    updated_at: "2023-02-23 12:51:18",
  },
  {
    id: "479",
    bike_id: "628",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-23 12:56:44",
    updated_at: "2023-02-23 12:56:44",
  },
  {
    id: "480",
    bike_id: "629",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-23 13:03:38",
    updated_at: "2023-02-23 13:03:38",
  },
  {
    id: "481",
    bike_id: "630",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-23 13:12:36",
    updated_at: "2023-02-23 13:12:36",
  },
  {
    id: "482",
    bike_id: "631",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-23 13:16:38",
    updated_at: "2023-02-23 13:16:38",
  },
  {
    id: "483",
    bike_id: "632",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-23 13:22:48",
    updated_at: "2023-02-23 13:22:48",
  },
  {
    id: "484",
    bike_id: "633",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-23 13:27:06",
    updated_at: "2023-02-23 13:27:06",
  },
  {
    id: "485",
    bike_id: "634",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-23 14:30:16",
    updated_at: "2023-02-23 14:30:16",
  },
  {
    id: "486",
    bike_id: "635",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-23 14:43:28",
    updated_at: "2023-02-23 14:43:28",
  },
  {
    id: "487",
    bike_id: "636",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 15:03:00",
    updated_at: "2023-02-23 15:11:53",
  },
  {
    id: "488",
    bike_id: "637",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 15:04:45",
    updated_at: "2023-02-23 15:15:15",
  },
  {
    id: "489",
    bike_id: "638",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 15:06:16",
    updated_at: "2023-02-23 15:18:20",
  },
  {
    id: "490",
    bike_id: "639",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 15:07:51",
    updated_at: "2023-02-23 15:20:57",
  },
  {
    id: "491",
    bike_id: "640",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 15:37:07",
    updated_at: "2023-02-23 15:42:43",
  },
  {
    id: "492",
    bike_id: "641",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 15:55:21",
    updated_at: "2023-02-23 16:01:18",
  },
  {
    id: "493",
    bike_id: "642",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 16:07:09",
    updated_at: "2023-02-23 16:12:38",
  },
  {
    id: "494",
    bike_id: "643",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 16:14:52",
    updated_at: "2023-02-23 16:29:54",
  },
  {
    id: "495",
    bike_id: "644",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 16:36:20",
    updated_at: "2023-02-23 16:42:34",
  },
  {
    id: "496",
    bike_id: "645",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-23 16:45:34",
    updated_at: "2023-02-23 16:52:02",
  },
  {
    id: "497",
    bike_id: "646",
    clutch: "Wet, Multi-Plate",
    gear_box: "6speed",
    transmission: "Manual",
    created_at: "2023-02-24 10:42:05",
    updated_at: "2023-02-24 11:49:52",
  },
  {
    id: "498",
    bike_id: "647",
    clutch: "Wet, Multi-Plate",
    gear_box: "6speed",
    transmission: "Manual",
    created_at: "2023-02-24 10:47:11",
    updated_at: "2023-02-24 11:55:41",
  },
  {
    id: "499",
    bike_id: "648",
    clutch: "Wet, Multi-Plate",
    gear_box: "6speed",
    transmission: "Manual",
    created_at: "2023-02-24 10:49:48",
    updated_at: "2023-02-24 12:00:29",
  },
  {
    id: "500",
    bike_id: "649",
    clutch: "Wet, Multi-Plate",
    gear_box: "6speed",
    transmission: "Manual",
    created_at: "2023-02-24 10:51:34",
    updated_at: "2023-02-24 12:05:38",
  },
  {
    id: "501",
    bike_id: "650",
    clutch: "Wet, Multi-Plate",
    gear_box: "6speed",
    transmission: "Manual",
    created_at: "2023-02-24 10:53:41",
    updated_at: "2023-02-24 12:11:24",
  },
  {
    id: "502",
    bike_id: "651",
    clutch: "Wet, Multi-Plate",
    gear_box: "6speed",
    transmission: "Manual",
    created_at: "2023-02-24 10:59:35",
    updated_at: "2023-02-24 12:18:27",
  },
  {
    id: "503",
    bike_id: "652",
    clutch: "Wet, Multi-Plate",
    gear_box: "6speed",
    transmission: "Manual",
    created_at: "2023-02-24 11:01:57",
    updated_at: "2023-02-24 12:24:58",
  },
  {
    id: "504",
    bike_id: "653",
    clutch: "Wet, Multi-Plate",
    gear_box: "6speed",
    transmission: "Manual",
    created_at: "2023-02-24 11:03:34",
    updated_at: "2023-02-24 12:45:21",
  },
  {
    id: "505",
    bike_id: "654",
    clutch: "Assist & Slip, Multi-Plate",
    gear_box: "6speed",
    transmission: "Manaul",
    created_at: "2023-02-24 11:09:44",
    updated_at: "2023-02-24 12:52:40",
  },
  {
    id: "506",
    bike_id: "655",
    clutch: "Assist & Slip, Multi-Plate",
    gear_box: "6speed",
    transmission: "Manual",
    created_at: "2023-02-24 11:21:44",
    updated_at: "2023-02-24 12:57:56",
  },
  {
    id: "507",
    bike_id: "656",
    clutch: "Assist & Slip, Multi-Plate",
    gear_box: "6speed",
    transmission: "Manual",
    created_at: "2023-02-24 11:25:55",
    updated_at: "2023-02-24 13:03:09",
  },
  {
    id: "508",
    bike_id: "657",
    clutch: "Assist & Slip, Multi-Plate",
    gear_box: "6speed",
    transmission: "Manual",
    created_at: "2023-02-24 11:28:27",
    updated_at: "2023-02-24 13:12:13",
  },
  {
    id: "509",
    bike_id: "658",
    clutch: "Wet, Multi-Plate",
    gear_box: "6speed",
    transmission: "Manual",
    created_at: "2023-02-24 11:31:23",
    updated_at: "2023-02-24 13:17:18",
  },
  {
    id: "510",
    bike_id: "659",
    clutch: "Wet, Multi-Plate",
    gear_box: "6speed",
    transmission: "Manual",
    created_at: "2023-02-24 11:33:27",
    updated_at: "2023-02-24 13:21:50",
  },
  {
    id: "511",
    bike_id: "660",
    clutch: "Wet, Multi-Plate",
    gear_box: "6speed",
    transmission: "Manual",
    created_at: "2023-02-24 11:36:02",
    updated_at: "2023-02-24 13:25:55",
  },
  {
    id: "512",
    bike_id: "661",
    clutch: "Wet, Multi-Plate",
    gear_box: "6speed",
    transmission: "Manual",
    created_at: "2023-02-24 11:39:08",
    updated_at: "2023-02-24 13:29:55",
  },
  {
    id: "513",
    bike_id: "662",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-24 14:36:25",
    updated_at: "2023-02-24 14:36:25",
  },
  {
    id: "514",
    bike_id: "663",
    clutch: null,
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: "2023-02-24 14:45:38",
    updated_at: "2023-02-24 14:55:28",
  },
  {
    id: "515",
    bike_id: "664",
    clutch: null,
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-02-24 14:49:41",
    updated_at: "2023-02-24 14:59:01",
  },
  {
    id: "516",
    bike_id: "665",
    clutch: null,
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-02-24 14:52:14",
    updated_at: "2023-02-24 15:01:49",
  },
  {
    id: "517",
    bike_id: "666",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-24 15:07:31",
    updated_at: "2023-02-24 15:07:31",
  },
  {
    id: "518",
    bike_id: "667",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-24 15:21:33",
    updated_at: "2023-02-24 15:21:33",
  },
  {
    id: "519",
    bike_id: "668",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-24 15:24:44",
    updated_at: "2023-02-24 15:24:44",
  },
  {
    id: "520",
    bike_id: "669",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-24 15:27:43",
    updated_at: "2023-02-24 15:27:43",
  },
  {
    id: "521",
    bike_id: "670",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-24 15:30:52",
    updated_at: "2023-02-24 15:30:52",
  },
  {
    id: "522",
    bike_id: "671",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-24 15:37:14",
    updated_at: "2023-02-24 15:37:14",
  },
  {
    id: "523",
    bike_id: "672",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-25 10:48:38",
    updated_at: "2023-02-25 10:48:38",
  },
  {
    id: "524",
    bike_id: "673",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-25 11:32:18",
    updated_at: "2023-02-25 11:38:45",
  },
  {
    id: "525",
    bike_id: "674",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-25 11:33:34",
    updated_at: "2023-02-25 11:40:52",
  },
  {
    id: "526",
    bike_id: "675",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-25 11:58:34",
    updated_at: "2023-02-25 12:06:17",
  },
  {
    id: "527",
    bike_id: "676",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-25 12:00:06",
    updated_at: "2023-02-25 12:13:04",
  },
  {
    id: "528",
    bike_id: "677",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-25 12:00:49",
    updated_at: "2023-02-25 12:18:19",
  },
  {
    id: "529",
    bike_id: "678",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-25 14:38:41",
    updated_at: "2023-02-25 14:44:52",
  },
  {
    id: "530",
    bike_id: "679",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-25 14:39:43",
    updated_at: "2023-02-25 14:47:56",
  },
  {
    id: "531",
    bike_id: "680",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-25 14:41:00",
    updated_at: "2023-02-25 14:52:58",
  },
  {
    id: "532",
    bike_id: "681",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-25 14:42:19",
    updated_at: "2023-02-25 14:56:09",
  },
  {
    id: "533",
    bike_id: "682",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-25 16:02:11",
    updated_at: "2023-02-25 16:13:24",
  },
  {
    id: "534",
    bike_id: "683",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-25 16:03:46",
    updated_at: "2023-02-25 16:16:02",
  },
  {
    id: "535",
    bike_id: "684",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-25 16:05:04",
    updated_at: "2023-02-25 16:19:07",
  },
  {
    id: "536",
    bike_id: "685",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-25 16:06:09",
    updated_at: "2023-02-25 16:22:14",
  },
  {
    id: "537",
    bike_id: "686",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-25 16:07:13",
    updated_at: "2023-02-25 16:25:07",
  },
  {
    id: "538",
    bike_id: "687",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-25 16:08:05",
    updated_at: "2023-02-25 16:08:05",
  },
  {
    id: "539",
    bike_id: "688",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-25 16:09:05",
    updated_at: "2023-02-25 16:30:40",
  },
  {
    id: "540",
    bike_id: "689",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-25 16:10:19",
    updated_at: "2023-02-25 16:34:09",
  },
  {
    id: "541",
    bike_id: "690",
    clutch: "Wet, multi-plate type",
    gear_box: "6-speed",
    transmission: "Manual",
    created_at: "2023-02-28 10:20:14",
    updated_at: "2023-02-28 11:19:52",
  },
  {
    id: "542",
    bike_id: "691",
    clutch: null,
    gear_box: "6 Speed",
    transmission: null,
    created_at: "2023-02-28 10:23:02",
    updated_at: "2023-02-28 11:23:03",
  },
  {
    id: "543",
    bike_id: "692",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-02-28 10:25:07",
    updated_at: "2023-02-28 10:25:07",
  },
  {
    id: "544",
    bike_id: "693",
    clutch: "Wet Clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-02-28 10:29:09",
    updated_at: "2023-02-28 11:37:57",
  },
  {
    id: "545",
    bike_id: "694",
    clutch: "Wet, Multi-Plate",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-02-28 10:31:58",
    updated_at: "2023-02-28 11:42:34",
  },
  {
    id: "546",
    bike_id: "695",
    clutch: "Slipper clutch",
    gear_box: "6-Speed",
    transmission: "manual",
    created_at: "2023-02-28 10:36:31",
    updated_at: "2023-05-23 12:39:22",
  },
  {
    id: "547",
    bike_id: "696",
    clutch: "Wet multi-disc clutch, mechanically actuated",
    gear_box: "6-Speed",
    transmission: "Manual",
    created_at: "2023-02-28 10:40:31",
    updated_at: "2023-02-28 11:59:54",
  },
  {
    id: "548",
    bike_id: "697",
    clutch: "Wet Clutch",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: "2023-02-28 10:43:57",
    updated_at: "2023-02-28 12:04:34",
  },
  {
    id: "549",
    bike_id: "698",
    clutch: "Wet Clutch",
    gear_box: null,
    transmission: "Manual",
    created_at: "2023-02-28 10:45:52",
    updated_at: "2023-02-28 12:07:58",
  },
  {
    id: "550",
    bike_id: "699",
    clutch: "Wet Clutch",
    gear_box: "5-speed",
    transmission: "Manual",
    created_at: "2023-02-28 10:47:55",
    updated_at: "2023-02-28 12:11:33",
  },
  {
    id: "551",
    bike_id: "700",
    clutch: "Wet Clutch",
    gear_box: "5-speed",
    transmission: "Manual",
    created_at: "2023-02-28 10:53:40",
    updated_at: "2023-02-28 12:14:54",
  },
  {
    id: "552",
    bike_id: "701",
    clutch: "Wet Multiplate",
    gear_box: null,
    transmission: "Manual",
    created_at: "2023-02-28 11:00:53",
    updated_at: "2023-02-28 12:35:08",
  },
  {
    id: "553",
    bike_id: "702",
    clutch: null,
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-02-28 11:12:53",
    updated_at: "2023-02-28 11:47:46",
  },
  {
    id: "555",
    bike_id: "704",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-28 13:11:01",
    updated_at: "2023-02-28 13:24:35",
  },
  {
    id: "556",
    bike_id: "705",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-02-28 13:12:20",
    updated_at: "2023-02-28 13:31:02",
  },
  {
    id: "557",
    bike_id: "706",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-01 10:06:46",
    updated_at: "2023-03-01 10:06:46",
  },
  {
    id: "558",
    bike_id: "707",
    clutch: null,
    gear_box: null,
    transmission: "Front & Reverse",
    created_at: "2023-03-01 10:11:08",
    updated_at: "2023-03-01 11:18:26",
  },
  {
    id: "559",
    bike_id: "708",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-01 10:14:55",
    updated_at: "2023-03-01 10:14:55",
  },
  {
    id: "560",
    bike_id: "709",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-01 10:23:31",
    updated_at: "2023-03-01 10:59:05",
  },
  {
    id: "561",
    bike_id: "710",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-01 10:36:55",
    updated_at: "2023-03-01 10:51:39",
  },
  {
    id: "562",
    bike_id: "711",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-01 10:41:13",
    updated_at: "2023-03-01 10:44:25",
  },
  {
    id: "563",
    bike_id: "712",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-01 11:25:25",
    updated_at: "2023-03-01 11:33:23",
  },
  {
    id: "564",
    bike_id: "713",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-01 11:45:06",
    updated_at: "2023-03-01 11:50:51",
  },
  {
    id: "565",
    bike_id: "714",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-01 12:09:07",
    updated_at: "2023-03-01 12:09:07",
  },
  {
    id: "566",
    bike_id: "715",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-01 12:24:21",
    updated_at: "2023-03-01 12:33:37",
  },
  {
    id: "567",
    bike_id: "716",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-01 12:27:53",
    updated_at: "2023-03-01 12:43:00",
  },
  {
    id: "568",
    bike_id: "717",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-01 12:45:53",
    updated_at: "2023-03-01 12:57:54",
  },
  {
    id: "569",
    bike_id: "718",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-01 13:04:40",
    updated_at: "2023-03-01 13:09:21",
  },
  {
    id: "570",
    bike_id: "719",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-01 13:11:40",
    updated_at: "2023-03-01 13:14:28",
  },
  {
    id: "571",
    bike_id: "720",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-01 13:22:55",
    updated_at: "2023-03-01 13:26:33",
  },
  {
    id: "572",
    bike_id: "721",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-01 13:28:47",
    updated_at: "2023-03-01 14:34:09",
  },
  {
    id: "573",
    bike_id: "722",
    clutch: "Automatic",
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-02 14:36:23",
    updated_at: "2023-03-02 14:48:11",
  },
  {
    id: "574",
    bike_id: "723",
    clutch: "Wet Multi-Disc, Slipper & Assist",
    gear_box: "6 speed",
    transmission: "chain Drive",
    created_at: "2023-03-02 15:48:10",
    updated_at: "2023-03-02 15:59:07",
  },
  {
    id: "575",
    bike_id: "724",
    clutch: "Wet Multi Disc, Slipper Clutch",
    gear_box: "6speed",
    transmission: "Chain drive",
    created_at: "2023-03-02 15:53:14",
    updated_at: "2023-03-02 16:04:41",
  },
  {
    id: "576",
    bike_id: "725",
    clutch: null,
    gear_box: "6-speed gearbox",
    transmission: "Chain Drive",
    created_at: "2023-03-02 16:07:13",
    updated_at: "2023-03-02 16:10:25",
  },
  {
    id: "577",
    bike_id: "726",
    clutch: "PASC (TM) slipper clutch, hydraulically operated",
    gear_box: null,
    transmission: null,
    created_at: "2023-03-02 16:16:18",
    updated_at: "2023-03-02 16:19:46",
  },
  {
    id: "578",
    bike_id: "727",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-02 16:22:51",
    updated_at: "2023-03-02 16:22:51",
  },
  {
    id: "579",
    bike_id: "728",
    clutch: "Hydraulically controlled sliper and self-servo wet multiplate",
    gear_box: "6 speed",
    transmission: "Manual",
    created_at: "2023-03-03 10:37:22",
    updated_at: "2023-03-03 11:55:58",
  },
  {
    id: "580",
    bike_id: "729",
    clutch: null,
    gear_box: "6 speed",
    transmission: "Manual",
    created_at: "2023-03-03 10:40:06",
    updated_at: "2023-03-03 11:09:46",
  },
  {
    id: "581",
    bike_id: "730",
    clutch: null,
    gear_box: null,
    transmission: "V-belt automatic",
    created_at: "2023-03-03 10:44:45",
    updated_at: "2023-03-03 11:30:06",
  },
  {
    id: "582",
    bike_id: "731",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-03 10:47:25",
    updated_at: "2023-03-03 10:47:25",
  },
  {
    id: "583",
    bike_id: "732",
    clutch:
      "Slipper and self-servo multiplate  wet clutch with hydrualic control",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-03-03 10:53:10",
    updated_at: "2023-03-03 11:49:27",
  },
  {
    id: "584",
    bike_id: "733",
    clutch: "Slipper Clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-03-03 10:58:41",
    updated_at: "2023-03-03 11:55:33",
  },
  {
    id: "585",
    bike_id: "734",
    clutch: "Automatic centrifugal dry clutch",
    gear_box: "Automatic CVT",
    transmission: "Automatic",
    created_at: "2023-03-03 12:26:33",
    updated_at: "2023-03-03 12:30:53",
  },
  {
    id: "586",
    bike_id: "735",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-03 12:41:43",
    updated_at: "2023-03-03 12:47:26",
  },
  {
    id: "587",
    bike_id: "736",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-06 10:09:45",
    updated_at: "2023-03-06 10:09:45",
  },
  {
    id: "588",
    bike_id: "737",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-06 10:19:49",
    updated_at: "2023-03-06 10:19:49",
  },
  {
    id: "589",
    bike_id: "738",
    clutch: "Wet multi plate",
    gear_box: null,
    transmission: null,
    created_at: "2023-03-06 10:29:02",
    updated_at: "2023-03-06 10:36:15",
  },
  {
    id: "590",
    bike_id: "739",
    clutch: null,
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-03-06 10:46:54",
    updated_at: "2023-03-06 10:58:58",
  },
  {
    id: "591",
    bike_id: "740",
    clutch: "Wet clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-03-06 11:01:51",
    updated_at: "2023-03-06 11:09:59",
  },
  {
    id: "592",
    bike_id: "741",
    clutch: "Wet Multiplate",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-03-06 11:17:18",
    updated_at: "2023-03-06 11:40:14",
  },
  {
    id: "593",
    bike_id: "742",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-06 12:04:48",
    updated_at: "2023-03-06 12:04:48",
  },
  {
    id: "594",
    bike_id: "743",
    clutch: "Wet, multiple-disc",
    gear_box: "Constant mesh, 6-speed",
    transmission: "Manual",
    created_at: "2023-03-06 12:20:27",
    updated_at: "2023-03-06 12:36:59",
  },
  {
    id: "595",
    bike_id: "744",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-06 12:46:10",
    updated_at: "2023-03-06 12:53:27",
  },
  {
    id: "596",
    bike_id: "745",
    clutch: "Multi-disc in Oil Bath/ Slipper",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-03-06 13:00:45",
    updated_at: "2023-03-06 13:09:35",
  },
  {
    id: "597",
    bike_id: "746",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-06 13:18:00",
    updated_at: "2023-03-06 13:18:00",
  },
  {
    id: "598",
    bike_id: "747",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-06 14:22:16",
    updated_at: "2023-03-06 14:27:17",
  },
  {
    id: "599",
    bike_id: "748",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-06 14:34:54",
    updated_at: "2023-03-06 14:34:54",
  },
  {
    id: "600",
    bike_id: "749",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-06 14:48:31",
    updated_at: "2023-03-06 14:48:31",
  },
  {
    id: "601",
    bike_id: "750",
    clutch: "Wet, Multi-Plate",
    gear_box: "5 Speed",
    transmission: "manual",
    created_at: "2023-03-08 14:47:04",
    updated_at: "2023-03-08 14:58:26",
  },
  {
    id: "602",
    bike_id: "751",
    clutch: null,
    gear_box: "4 Speed",
    transmission: "Manual",
    created_at: "2023-03-08 15:01:10",
    updated_at: "2023-05-29 17:53:31",
  },
  {
    id: "603",
    bike_id: "752",
    clutch: null,
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-03-08 15:19:09",
    updated_at: "2023-03-08 15:24:19",
  },
  {
    id: "604",
    bike_id: "753",
    clutch: null,
    gear_box: "Constant mesh 5 speed",
    transmission: "Manual",
    created_at: "2023-03-08 15:31:23",
    updated_at: "2023-03-08 15:40:45",
  },
  {
    id: "605",
    bike_id: "754",
    clutch: null,
    gear_box: "6 Speed",
    transmission: "manual",
    created_at: "2023-03-08 16:19:42",
    updated_at: "2023-03-08 16:24:06",
  },
  {
    id: "606",
    bike_id: "755",
    clutch: "Wet multiplate",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-03-08 16:26:32",
    updated_at: "2023-03-08 16:42:52",
  },
  {
    id: "607",
    bike_id: "756",
    clutch: null,
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: "2023-03-08 16:46:15",
    updated_at: "2023-03-08 16:53:26",
  },
  {
    id: "608",
    bike_id: "757",
    clutch: "Wet multiple, Assisted slipper clutch",
    gear_box: "6 speed",
    transmission: "Manual",
    created_at: "2023-03-08 16:57:25",
    updated_at: "2023-03-08 17:05:11",
  },
  {
    id: "609",
    bike_id: "758",
    clutch: "Assist and Slipper Clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-03-08 17:08:28",
    updated_at: "2023-03-08 17:15:33",
  },
  {
    id: "610",
    bike_id: "759",
    clutch: null,
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: "2023-03-08 17:20:11",
    updated_at: "2023-03-08 17:26:06",
  },
  {
    id: "611",
    bike_id: "760",
    clutch: null,
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: "2023-03-09 10:02:48",
    updated_at: "2023-03-09 10:09:21",
  },
  {
    id: "612",
    bike_id: "761",
    clutch: null,
    gear_box: "Six-speed",
    transmission: "Manual",
    created_at: "2023-03-09 10:14:23",
    updated_at: "2023-03-09 10:23:39",
  },
  {
    id: "613",
    bike_id: "762",
    clutch: null,
    gear_box: "Five-speed",
    transmission: "Manual",
    created_at: "2023-03-09 10:35:17",
    updated_at: "2023-03-09 10:41:55",
  },
  {
    id: "614",
    bike_id: "763",
    clutch: "PASC (TM) slipper clutch, hydraulically actuated",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-03-09 10:57:01",
    updated_at: "2023-03-09 11:04:39",
  },
  {
    id: "615",
    bike_id: "764",
    clutch: "Automatic",
    gear_box: null,
    transmission: null,
    created_at: "2023-03-09 11:46:21",
    updated_at: "2023-03-09 12:16:48",
  },
  {
    id: "616",
    bike_id: "765",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-10 16:44:01",
    updated_at: "2023-03-10 17:09:04",
  },
  {
    id: "617",
    bike_id: "766",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-10 16:45:39",
    updated_at: "2023-03-10 17:17:24",
  },
  {
    id: "618",
    bike_id: "767",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-10 16:49:19",
    updated_at: "2023-03-10 17:23:58",
  },
  {
    id: "619",
    bike_id: "768",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-10 16:52:37",
    updated_at: "2023-03-10 17:30:52",
  },
  {
    id: "620",
    bike_id: "769",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-10 16:54:11",
    updated_at: "2023-03-10 17:37:37",
  },
  {
    id: "621",
    bike_id: "770",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-11 12:03:51",
    updated_at: "2023-03-11 12:03:51",
  },
  {
    id: "622",
    bike_id: "771",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-11 12:15:38",
    updated_at: "2023-03-11 12:15:38",
  },
  {
    id: "623",
    bike_id: "772",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-11 16:52:21",
    updated_at: "2023-03-11 16:58:26",
  },
  {
    id: "624",
    bike_id: "773",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-13 10:18:11",
    updated_at: "2023-03-13 10:18:11",
  },
  {
    id: "625",
    bike_id: "774",
    clutch: null,
    gear_box: null,
    transmission: "Manual",
    created_at: "2023-03-14 10:07:25",
    updated_at: "2023-03-14 11:20:19",
  },
  {
    id: "626",
    bike_id: "775",
    clutch: "Wet Multiple Disc",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-03-14 11:30:15",
    updated_at: "2023-03-14 12:27:16",
  },
  {
    id: "627",
    bike_id: "776",
    clutch: "Wet multi-plate",
    gear_box: "6-speed",
    transmission: null,
    created_at: "2023-03-14 14:51:01",
    updated_at: "2023-03-14 16:04:50",
  },
  {
    id: "628",
    bike_id: "777",
    clutch: "Dry Centrifugal Automatic Clutch",
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: "2023-03-14 16:28:26",
    updated_at: "2023-03-14 16:34:26",
  },
  {
    id: "629",
    bike_id: "778",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-14 17:04:59",
    updated_at: "2023-03-14 17:04:59",
  },
  {
    id: "630",
    bike_id: "779",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-14 17:15:30",
    updated_at: "2023-03-14 17:52:54",
  },
  {
    id: "631",
    bike_id: "780",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-15 10:23:50",
    updated_at: "2023-03-15 12:25:11",
  },
  {
    id: "632",
    bike_id: "781",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-15 12:35:31",
    updated_at: "2023-03-15 12:40:53",
  },
  {
    id: "633",
    bike_id: "782",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-15 12:49:14",
    updated_at: "2023-03-15 12:56:16",
  },
  {
    id: "634",
    bike_id: "783",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-15 13:10:46",
    updated_at: "2023-03-15 13:18:48",
  },
  {
    id: "635",
    bike_id: "784",
    clutch: "Automatic Dry Centrifugal Clutch with Vibration Dampers",
    gear_box: "Automatic Twist & Go",
    transmission: "Automatic",
    created_at: "2023-03-15 14:35:58",
    updated_at: "2023-03-15 15:07:27",
  },
  {
    id: "636",
    bike_id: "785",
    clutch: "Slipper Clutch",
    gear_box: "6 speed",
    transmission: "Manual",
    created_at: "2023-03-15 17:09:42",
    updated_at: "2023-03-15 17:17:28",
  },
  {
    id: "637",
    bike_id: "786",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-15 17:30:08",
    updated_at: "2023-03-15 17:30:08",
  },
  {
    id: "638",
    bike_id: "787",
    clutch: null,
    gear_box: "6-speed",
    transmission: "Manual",
    created_at: "2023-03-16 11:17:27",
    updated_at: "2023-03-16 13:28:00",
  },
  {
    id: "639",
    bike_id: "788",
    clutch: null,
    gear_box: null,
    transmission: "CVT",
    created_at: "2023-03-16 13:14:26",
    updated_at: "2023-03-16 13:20:08",
  },
  {
    id: "640",
    bike_id: "789",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-16 17:44:45",
    updated_at: "2023-03-16 17:44:45",
  },
  {
    id: "641",
    bike_id: "790",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-17 14:53:01",
    updated_at: "2023-03-17 15:00:54",
  },
  {
    id: "642",
    bike_id: "791",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-17 15:06:05",
    updated_at: "2023-03-17 15:06:05",
  },
  {
    id: "643",
    bike_id: "792",
    clutch: "Automatic, Centrifugal, Dry Type",
    gear_box: null,
    transmission: "CVT",
    created_at: "2023-03-17 15:19:12",
    updated_at: "2023-03-17 15:26:53",
  },
  {
    id: "644",
    bike_id: "793",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-17 16:01:57",
    updated_at: "2023-03-17 16:10:13",
  },
  {
    id: "645",
    bike_id: "794",
    clutch:
      "Hydraulically controlled slipper and self-servo wet multiplate clutch",
    gear_box: "6 speed with Ducati Quick Shift up/down",
    transmission: "Manual",
    created_at: "2023-03-20 15:13:07",
    updated_at: "2023-03-20 15:22:52",
  },
  {
    id: "646",
    bike_id: "795",
    clutch: "Wet multi-plate",
    gear_box: "6-speed",
    transmission: "Manual",
    created_at: "2023-03-22 14:50:30",
    updated_at: "2023-03-22 15:06:13",
  },
  {
    id: "647",
    bike_id: "796",
    clutch: "Multi discs servo-assist and slipper wet clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-03-22 15:09:45",
    updated_at: "2023-03-22 15:17:29",
  },
  {
    id: "648",
    bike_id: "797",
    clutch: "Wet, Multi-Plate",
    gear_box: "6-Speed",
    transmission: "Manual",
    created_at: "2023-03-22 15:29:04",
    updated_at: "2023-03-22 15:45:22",
  },
  {
    id: "649",
    bike_id: "798",
    clutch: null,
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: "2023-03-22 15:52:18",
    updated_at: "2023-03-22 15:58:34",
  },
  {
    id: "650",
    bike_id: "799",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-22 16:19:05",
    updated_at: "2023-03-22 16:19:05",
  },
  {
    id: "651",
    bike_id: "800",
    clutch: "Slipper clutch, wet multi plate",
    gear_box: "6-speed",
    transmission: "Manual",
    created_at: "2023-03-22 16:26:55",
    updated_at: "2023-03-22 16:36:34",
  },
  {
    id: "652",
    bike_id: "801",
    clutch: "Wet multi-disc clutch, mechanically actuated",
    gear_box: "6-speed",
    transmission: "Manual",
    created_at: "2023-03-22 16:45:26",
    updated_at: "2023-03-22 16:53:44",
  },
  {
    id: "653",
    bike_id: "802",
    clutch: null,
    gear_box: null,
    transmission: "Manual",
    created_at: "2023-03-22 17:01:19",
    updated_at: "2023-03-22 17:22:43",
  },
  {
    id: "654",
    bike_id: "803",
    clutch: "Multi Plate Wet Clutch",
    gear_box: "5-Speed",
    transmission: "Manual",
    created_at: "2023-03-22 17:29:11",
    updated_at: "2023-03-22 17:47:31",
  },
  {
    id: "655",
    bike_id: "804",
    clutch: "Automatic centrifugal clutch; dry type",
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: "2023-03-23 12:07:21",
    updated_at: "2023-03-23 12:20:55",
  },
  {
    id: "656",
    bike_id: "805",
    clutch: "RT Slipper Clutch, 7-Plate Design Wet Multi Plate",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-03-23 12:26:33",
    updated_at: "2023-03-23 12:34:32",
  },
  {
    id: "657",
    bike_id: "806",
    clutch: "Wet multiplate with assist and slipper functions",
    gear_box: "6-speed constant mesh",
    transmission: "Manual",
    created_at: "2023-03-23 14:56:46",
    updated_at: "2023-03-23 15:07:46",
  },
  {
    id: "658",
    bike_id: "807",
    clutch: "Wet Multiplate",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-03-23 15:22:32",
    updated_at: "2023-03-23 15:30:44",
  },
  {
    id: "659",
    bike_id: "808",
    clutch: null,
    gear_box: "5-speed",
    transmission: "manual",
    created_at: "2023-03-23 16:20:33",
    updated_at: "2023-03-23 16:43:56",
  },
  {
    id: "660",
    bike_id: "809",
    clutch: null,
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: "2023-03-23 16:48:34",
    updated_at: "2023-03-23 16:55:24",
  },
  {
    id: "661",
    bike_id: "810",
    clutch: "PASC™ anti-hopping clutch mechanically operated",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-03-23 16:58:05",
    updated_at: "2023-03-23 17:06:20",
  },
  {
    id: "662",
    bike_id: "811",
    clutch: "PASC™ antihopping clutch, mechanically operated",
    gear_box: "6-speed",
    transmission: "Manual",
    created_at: "2023-03-23 17:13:45",
    updated_at: "2023-03-23 17:23:37",
  },
  {
    id: "663",
    bike_id: "812",
    clutch: "Wet Multi-Disc",
    gear_box: "6-Speed",
    transmission: "Manual",
    created_at: "2023-03-23 17:27:19",
    updated_at: "2023-03-23 17:36:26",
  },
  {
    id: "664",
    bike_id: "813",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-24 16:48:01",
    updated_at: "2023-03-24 16:55:41",
  },
  {
    id: "665",
    bike_id: "814",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-24 17:05:55",
    updated_at: "2023-03-24 17:19:01",
  },
  {
    id: "666",
    bike_id: "815",
    clutch: null,
    gear_box: "5-speed constant mesh",
    transmission: "Manual",
    created_at: "2023-03-24 17:44:02",
    updated_at: "2023-03-24 17:52:55",
  },
  {
    id: "667",
    bike_id: "816",
    clutch: "Cable operated PASC Slipper clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-03-27 15:47:19",
    updated_at: "2023-03-27 15:54:07",
  },
  {
    id: "668",
    bike_id: "817",
    clutch: null,
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-03-27 16:11:30",
    updated_at: "2023-03-27 16:23:47",
  },
  {
    id: "669",
    bike_id: "818",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-27 16:30:27",
    updated_at: "2023-03-27 16:40:24",
  },
  {
    id: "670",
    bike_id: "819",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-27 16:48:14",
    updated_at: "2023-03-27 16:48:14",
  },
  {
    id: "671",
    bike_id: "820",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-27 17:06:34",
    updated_at: "2023-03-27 17:06:34",
  },
  {
    id: "672",
    bike_id: "821",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-27 17:13:07",
    updated_at: "2023-03-27 17:13:07",
  },
  {
    id: "673",
    bike_id: "822",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-28 10:32:45",
    updated_at: "2023-03-28 10:40:22",
  },
  {
    id: "674",
    bike_id: "823",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-28 10:42:16",
    updated_at: "2023-03-28 10:42:16",
  },
  {
    id: "675",
    bike_id: "824",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-28 11:45:35",
    updated_at: "2023-03-28 11:45:35",
  },
  {
    id: "676",
    bike_id: "825",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-03-28 12:03:09",
    updated_at: "2023-03-28 12:03:09",
  },
  {
    id: "677",
    bike_id: "826",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-28 12:24:34",
    updated_at: "2023-03-28 12:28:28",
  },
  {
    id: "678",
    bike_id: "827",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-03-28 13:08:24",
    updated_at: "2023-03-28 13:20:19",
  },
  {
    id: "679",
    bike_id: "828",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-04-03 16:21:50",
    updated_at: "2023-04-03 16:50:41",
  },
  {
    id: "680",
    bike_id: "829",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-04-03 17:10:44",
    updated_at: "2023-04-03 17:29:08",
  },
  {
    id: "681",
    bike_id: "830",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-04-03 17:40:27",
    updated_at: "2023-04-03 17:48:14",
  },
  {
    id: "682",
    bike_id: "831",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-04-04 11:03:21",
    updated_at: "2023-04-04 11:09:37",
  },
  {
    id: "683",
    bike_id: "832",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-04-04 11:10:50",
    updated_at: "2023-04-04 11:22:07",
  },
  {
    id: "684",
    bike_id: "833",
    clutch: "Dry, Centrifugal",
    gear_box: "Variomatic Drive",
    transmission: "Automatic",
    created_at: "2023-04-04 11:35:27",
    updated_at: "2023-04-04 11:43:37",
  },
  {
    id: "685",
    bike_id: "834",
    clutch: null,
    gear_box: "4 Speed",
    transmission: "Manual",
    created_at: "2023-04-04 11:53:09",
    updated_at: "2023-04-04 12:06:01",
  },
  {
    id: "686",
    bike_id: "835",
    clutch: null,
    gear_box: "4 Speed",
    transmission: "Manual",
    created_at: "2023-04-04 12:18:14",
    updated_at: "2023-04-04 12:31:31",
  },
  {
    id: "687",
    bike_id: "836",
    clutch: null,
    gear_box: "4 Speed",
    transmission: "Manual",
    created_at: "2023-04-04 12:37:16",
    updated_at: "2023-04-04 12:44:08",
  },
  {
    id: "688",
    bike_id: "837",
    clutch: "PASC (TM) slipper clutch, hydraulically actuated",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-04-04 14:46:20",
    updated_at: "2023-04-04 14:53:08",
  },
  {
    id: "689",
    bike_id: "838",
    clutch: "Multiplate wet clutch",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-04-04 15:02:53",
    updated_at: "2023-04-04 15:11:30",
  },
  {
    id: "690",
    bike_id: "839",
    clutch: null,
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-04-04 15:17:39",
    updated_at: "2023-04-04 15:25:18",
  },
  {
    id: "691",
    bike_id: "840",
    clutch: null,
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-04-04 15:33:12",
    updated_at: "2023-04-04 15:39:39",
  },
  {
    id: "692",
    bike_id: "841",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-04-04 15:53:22",
    updated_at: "2023-04-04 15:53:22",
  },
  {
    id: "693",
    bike_id: "842",
    clutch: "Wet, Multi-Plate",
    gear_box: "6-Speed",
    transmission: "Manual",
    created_at: "2023-04-04 16:45:40",
    updated_at: "2023-04-04 16:57:26",
  },
  {
    id: "694",
    bike_id: "843",
    clutch: "Wet, Multi-plate",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-04-04 17:03:15",
    updated_at: "2023-04-04 17:13:06",
  },
  {
    id: "695",
    bike_id: "844",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-04-04 17:43:49",
    updated_at: "2023-04-04 17:43:49",
  },
  {
    id: "696",
    bike_id: "845",
    clutch: "Wet Multiplate",
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: "2023-04-11 12:33:59",
    updated_at: "2023-04-11 12:41:38",
  },
  {
    id: "697",
    bike_id: "846",
    clutch: null,
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-04-12 12:43:33",
    updated_at: "2023-04-12 13:17:02",
  },
  {
    id: "698",
    bike_id: "847",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-04-12 13:28:22",
    updated_at: "2023-04-12 13:28:22",
  },
  {
    id: "699",
    bike_id: "848",
    clutch: "RT Slipper Clutch, 7-Plate Design Wet Multi Plate",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-04-12 14:42:36",
    updated_at: "2023-04-12 14:52:52",
  },
  {
    id: "700",
    bike_id: "849",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-04-20 11:50:37",
    updated_at: "2023-04-20 11:50:37",
  },
  {
    id: "701",
    bike_id: "850",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-04-20 13:07:28",
    updated_at: "2023-04-20 13:07:28",
  },
  {
    id: "702",
    bike_id: "851",
    clutch: null,
    gear_box: "4 Speed",
    transmission: "Manual",
    created_at: "2023-04-20 13:29:52",
    updated_at: "2023-04-20 15:18:38",
  },
  {
    id: "703",
    bike_id: "852",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-04-25 09:59:16",
    updated_at: "2023-04-25 10:03:28",
  },
  {
    id: "704",
    bike_id: "853",
    clutch: "Wet, Multiple Disc",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-04-25 10:06:52",
    updated_at: "2023-04-25 10:15:13",
  },
  {
    id: "705",
    bike_id: "854",
    clutch: "Wet, Multiple Disc",
    gear_box: "6 Speed, Constant Mesh",
    transmission: "Manual",
    created_at: "2023-04-25 10:17:53",
    updated_at: "2023-04-25 10:29:53",
  },
  {
    id: "706",
    bike_id: "855",
    clutch: null,
    gear_box: "CVT",
    transmission: "Automatic",
    created_at: "2023-04-25 12:31:27",
    updated_at: "2023-04-25 12:54:52",
  },
  {
    id: "707",
    bike_id: "856",
    clutch: null,
    gear_box: "5 Speed",
    transmission: "Manual",
    created_at: "2023-05-02 09:56:26",
    updated_at: "2023-05-02 10:31:50",
  },
  {
    id: "708",
    bike_id: "857",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-05-02 11:09:07",
    updated_at: "2023-05-02 11:40:26",
  },
  {
    id: "709",
    bike_id: "858",
    clutch: null,
    gear_box: "4 Speed",
    transmission: "Automatic",
    created_at: "2023-05-02 11:56:42",
    updated_at: "2023-05-02 12:12:36",
  },
  {
    id: "710",
    bike_id: "859",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-02 13:11:07",
    updated_at: "2023-05-02 13:11:07",
  },
  {
    id: "711",
    bike_id: "860",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-02 14:38:25",
    updated_at: "2023-05-02 14:38:25",
  },
  {
    id: "712",
    bike_id: "861",
    clutch: null,
    gear_box: "6-Speed",
    transmission: "Manual",
    created_at: "2023-05-02 16:18:37",
    updated_at: "2023-05-02 16:25:12",
  },
  {
    id: "713",
    bike_id: "862",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-05-05 10:22:36",
    updated_at: "2023-05-05 10:26:22",
  },
  {
    id: "714",
    bike_id: "863",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-05 10:30:47",
    updated_at: "2023-05-05 10:30:47",
  },
  {
    id: "715",
    bike_id: "864",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-05 10:45:18",
    updated_at: "2023-05-05 10:45:18",
  },
  {
    id: "717",
    bike_id: "866",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-05 12:59:39",
    updated_at: "2023-05-05 12:59:39",
  },
  {
    id: "718",
    bike_id: "867",
    clutch: null,
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-05-17 10:59:42",
    updated_at: "2023-05-17 11:09:04",
  },
  {
    id: "719",
    bike_id: "868",
    clutch: "Multiplate Wet Clutch with Coil Spring (Assist & Slipper)",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-05-18 11:53:22",
    updated_at: "2023-05-18 12:03:17",
  },
  {
    id: "720",
    bike_id: "869",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-05-22 13:09:29",
    updated_at: "2023-05-22 13:15:16",
  },
  {
    id: "721",
    bike_id: "870",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-05-22 13:17:37",
    updated_at: "2023-05-22 13:23:16",
  },
  {
    id: "722",
    bike_id: "871",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-05-23 16:49:51",
    updated_at: "2023-05-23 17:01:00",
  },
  {
    id: "723",
    bike_id: "872",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-05-23 16:51:37",
    updated_at: "2023-05-23 17:06:26",
  },
  {
    id: "724",
    bike_id: "873",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-05-23 16:53:05",
    updated_at: "2023-05-23 17:12:42",
  },
  {
    id: "725",
    bike_id: "874",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-05-23 16:54:15",
    updated_at: "2023-05-23 17:29:37",
  },
  {
    id: "726",
    bike_id: "875",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-05-23 16:55:14",
    updated_at: "2023-05-23 17:37:25",
  },
  {
    id: "727",
    bike_id: "876",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-23 17:41:13",
    updated_at: "2023-05-23 17:41:13",
  },
  {
    id: "728",
    bike_id: "877",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-23 17:43:09",
    updated_at: "2023-05-23 17:43:09",
  },
  {
    id: "729",
    bike_id: "878",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-23 17:45:00",
    updated_at: "2023-05-23 17:45:00",
  },
  {
    id: "730",
    bike_id: "879",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-23 17:46:10",
    updated_at: "2023-05-23 17:46:10",
  },
  {
    id: "731",
    bike_id: "880",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-23 17:47:29",
    updated_at: "2023-05-23 17:47:29",
  },
  {
    id: "732",
    bike_id: "881",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-05-25 10:05:09",
    updated_at: "2023-05-25 10:07:47",
  },
  {
    id: "733",
    bike_id: "882",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-25 10:10:02",
    updated_at: "2023-05-25 10:10:02",
  },
  {
    id: "734",
    bike_id: "883",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-25 10:31:10",
    updated_at: "2023-05-25 10:31:10",
  },
  {
    id: "735",
    bike_id: "884",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-25 10:39:40",
    updated_at: "2023-05-25 10:39:40",
  },
  {
    id: "736",
    bike_id: "885",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-25 10:47:01",
    updated_at: "2023-05-25 10:47:01",
  },
  {
    id: "737",
    bike_id: "886",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-25 12:07:03",
    updated_at: "2023-05-25 12:07:03",
  },
  {
    id: "738",
    bike_id: "887",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-25 12:30:50",
    updated_at: "2023-05-25 12:30:50",
  },
  {
    id: "739",
    bike_id: "888",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-25 12:36:39",
    updated_at: "2023-05-25 12:36:39",
  },
  {
    id: "740",
    bike_id: "889",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-05-25 12:44:41",
    updated_at: "2023-05-25 12:44:41",
  },
  {
    id: "741",
    bike_id: "890",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-06-05 16:42:47",
    updated_at: "2023-06-05 16:42:47",
  },
  {
    id: "742",
    bike_id: "891",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-06-05 17:22:45",
    updated_at: "2023-06-05 17:22:45",
  },
  {
    id: "743",
    bike_id: "892",
    clutch: null,
    gear_box: null,
    transmission: "Automatic",
    created_at: "2023-06-05 17:26:10",
    updated_at: "2023-06-07 12:52:32",
  },
  {
    id: "744",
    bike_id: "893",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-06-19 10:17:52",
    updated_at: "2023-06-19 10:17:52",
  },
  {
    id: "745",
    bike_id: "894",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-06-19 14:35:03",
    updated_at: "2023-06-19 14:35:03",
  },
  {
    id: "746",
    bike_id: "895",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-06-19 15:02:04",
    updated_at: "2023-06-19 15:02:04",
  },
  {
    id: "747",
    bike_id: "896",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-06-19 15:20:33",
    updated_at: "2023-06-19 15:20:33",
  },
  {
    id: "748",
    bike_id: "897",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-06-20 15:07:31",
    updated_at: "2023-06-20 15:07:31",
  },
  {
    id: "749",
    bike_id: "898",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-06-20 16:11:24",
    updated_at: "2023-06-20 16:11:24",
  },
  {
    id: "750",
    bike_id: "899",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-06-20 16:58:35",
    updated_at: "2023-06-20 16:58:35",
  },
  {
    id: "751",
    bike_id: "900",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-06-20 17:14:08",
    updated_at: "2023-06-20 17:14:08",
  },
  {
    id: "752",
    bike_id: "901",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-06-20 17:23:44",
    updated_at: "2023-06-20 17:23:44",
  },
  {
    id: "753",
    bike_id: "902",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-06-20 17:32:58",
    updated_at: "2023-06-20 17:32:58",
  },
  {
    id: "754",
    bike_id: "903",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-06-20 17:45:03",
    updated_at: "2023-06-20 17:45:03",
  },
  {
    id: "755",
    bike_id: "904",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-06-20 17:52:46",
    updated_at: "2023-06-20 17:52:46",
  },
  {
    id: "756",
    bike_id: "905",
    clutch: null,
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-07-05 11:49:16",
    updated_at: "2023-07-05 12:09:52",
  },
  {
    id: "757",
    bike_id: "906",
    clutch: "Wet, multi-plate, slip",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-07-10 12:40:57",
    updated_at: "2023-07-10 12:55:56",
  },
  {
    id: "758",
    bike_id: "907",
    clutch: "Wet, multi-plate, slip",
    gear_box: "6 Speed",
    transmission: "Manual",
    created_at: "2023-07-10 13:06:38",
    updated_at: "2023-07-10 13:14:03",
  },
  {
    id: "759",
    bike_id: "908",
    clutch: null,
    gear_box: "1-speed",
    transmission: null,
    created_at: "2023-07-18 10:20:23",
    updated_at: "2023-07-18 11:21:06",
  },
  {
    id: "760",
    bike_id: "909",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-07-18 10:49:08",
    updated_at: "2023-07-18 10:49:08",
  },
  {
    id: "761",
    bike_id: "910",
    clutch: null,
    gear_box: null,
    transmission: null,
    created_at: "2023-08-03 10:49:46",
    updated_at: "2023-08-03 10:49:46",
  },
];

const strapiVariant = [
  {
    id: 1335,
    attributes: {
      variant_id: "555",
    },
  },
  {
    id: 834,
    attributes: {
      variant_id: "19",
    },
  },
  {
    id: 861,
    attributes: {
      variant_id: "74",
    },
  },
  {
    id: 1639,
    attributes: {
      variant_id: "1148",
    },
  },
  {
    id: 1556,
    attributes: {
      variant_id: "1086",
    },
  },
  {
    id: 1374,
    attributes: {
      variant_id: "581",
    },
  },
  {
    id: 841,
    attributes: {
      variant_id: "55",
    },
  },
  {
    id: 1739,
    attributes: {
      variant_id: "1265",
    },
  },
  {
    id: 921,
    attributes: {
      variant_id: "112",
    },
  },
  {
    id: 851,
    attributes: {
      variant_id: "82",
    },
  },
  {
    id: 1544,
    attributes: {
      variant_id: "1039",
    },
  },
  {
    id: 842,
    attributes: {
      variant_id: "46",
    },
  },
  {
    id: 1643,
    attributes: {
      variant_id: "1170",
    },
  },
  {
    id: 1520,
    attributes: {
      variant_id: "1037",
    },
  },
  {
    id: 1629,
    attributes: {
      variant_id: "1135",
    },
  },
  {
    id: 1672,
    attributes: {
      variant_id: "1187",
    },
  },
  {
    id: 1822,
    attributes: {
      variant_id: "1361",
    },
  },
  {
    id: 829,
    attributes: {
      variant_id: "32",
    },
  },
  {
    id: 1772,
    attributes: {
      variant_id: "1307",
    },
  },
  {
    id: 895,
    attributes: {
      variant_id: "53",
    },
  },
  {
    id: 902,
    attributes: {
      variant_id: "93",
    },
  },
  {
    id: 1543,
    attributes: {
      variant_id: "1050",
    },
  },
  {
    id: 1514,
    attributes: {
      variant_id: "1036",
    },
  },
  {
    id: 1594,
    attributes: {
      variant_id: "1090",
    },
  },
  {
    id: 1007,
    attributes: {
      variant_id: "206",
    },
  },
  {
    id: 1352,
    attributes: {
      variant_id: "542",
    },
  },
  {
    id: 1662,
    attributes: {
      variant_id: null,
    },
  },
  {
    id: 813,
    attributes: {
      variant_id: "4",
    },
  },
  {
    id: 1147,
    attributes: {
      variant_id: "377",
    },
  },
  {
    id: 1626,
    attributes: {
      variant_id: "1127",
    },
  },
  {
    id: 1723,
    attributes: {
      variant_id: "1253",
    },
  },
  {
    id: 1765,
    attributes: {
      variant_id: "1293",
    },
  },
  {
    id: 874,
    attributes: {
      variant_id: "54",
    },
  },
  {
    id: 1534,
    attributes: {
      variant_id: "1043",
    },
  },
  {
    id: 1828,
    attributes: {
      variant_id: "1351",
    },
  },
  {
    id: 983,
    attributes: {
      variant_id: "170",
    },
  },
  {
    id: 822,
    attributes: {
      variant_id: "29",
    },
  },
  {
    id: 1548,
    attributes: {
      variant_id: "1081",
    },
  },
  {
    id: 957,
    attributes: {
      variant_id: "153",
    },
  },
  {
    id: 1175,
    attributes: {
      variant_id: "353",
    },
  },
  {
    id: 1080,
    attributes: {
      variant_id: "279",
    },
  },
  {
    id: 927,
    attributes: {
      variant_id: "115",
    },
  },
  {
    id: 1250,
    attributes: {
      variant_id: "433",
    },
  },
  {
    id: 948,
    attributes: {
      variant_id: "134",
    },
  },
  {
    id: 916,
    attributes: {
      variant_id: "111",
    },
  },
  {
    id: 1187,
    attributes: {
      variant_id: "392",
    },
  },
  {
    id: 993,
    attributes: {
      variant_id: "190",
    },
  },
  {
    id: 1324,
    attributes: {
      variant_id: "537",
    },
  },
  {
    id: 1153,
    attributes: {
      variant_id: "359",
    },
  },
  {
    id: 1062,
    attributes: {
      variant_id: "225",
    },
  },
  {
    id: 987,
    attributes: {
      variant_id: "175",
    },
  },
  {
    id: 975,
    attributes: {
      variant_id: "160",
    },
  },
  {
    id: 978,
    attributes: {
      variant_id: "166",
    },
  },
  {
    id: 1525,
    attributes: {
      variant_id: "1057",
    },
  },
  {
    id: 1030,
    attributes: {
      variant_id: "242",
    },
  },
  {
    id: 1049,
    attributes: {
      variant_id: "229",
    },
  },
  {
    id: 1048,
    attributes: {
      variant_id: "221",
    },
  },
  {
    id: 1022,
    attributes: {
      variant_id: "223",
    },
  },
  {
    id: 1070,
    attributes: {
      variant_id: "257",
    },
  },
  {
    id: 1059,
    attributes: {
      variant_id: "231",
    },
  },
  {
    id: 1128,
    attributes: {
      variant_id: "335",
    },
  },
  {
    id: 1095,
    attributes: {
      variant_id: "282",
    },
  },
  {
    id: 1108,
    attributes: {
      variant_id: "306",
    },
  },
  {
    id: 1076,
    attributes: {
      variant_id: "272",
    },
  },
  {
    id: 1079,
    attributes: {
      variant_id: "277",
    },
  },
  {
    id: 1103,
    attributes: {
      variant_id: "302",
    },
  },
  {
    id: 1650,
    attributes: {
      variant_id: "1161",
    },
  },
  {
    id: 1131,
    attributes: {
      variant_id: "333",
    },
  },
  {
    id: 1208,
    attributes: {
      variant_id: "400",
    },
  },
  {
    id: 1200,
    attributes: {
      variant_id: "411",
    },
  },
  {
    id: 1170,
    attributes: {
      variant_id: null,
    },
  },
  {
    id: 1036,
    attributes: {
      variant_id: "228",
    },
  },
  {
    id: 1204,
    attributes: {
      variant_id: "366",
    },
  },
  {
    id: 1176,
    attributes: {
      variant_id: "384",
    },
  },
  {
    id: 1219,
    attributes: {
      variant_id: "432",
    },
  },
  {
    id: 1256,
    attributes: {
      variant_id: "469",
    },
  },
  {
    id: 1655,
    attributes: {
      variant_id: "1165",
    },
  },
  {
    id: 1230,
    attributes: {
      variant_id: "419",
    },
  },
  {
    id: 941,
    attributes: {
      variant_id: "144",
    },
  },
  {
    id: 1248,
    attributes: {
      variant_id: "426",
    },
  },
  {
    id: 1222,
    attributes: {
      variant_id: "437",
    },
  },
  {
    id: 1231,
    attributes: {
      variant_id: "449",
    },
  },
  {
    id: 1300,
    attributes: {
      variant_id: "493",
    },
  },
  {
    id: 1308,
    attributes: {
      variant_id: "517",
    },
  },
  {
    id: 1236,
    attributes: {
      variant_id: "451",
    },
  },
  {
    id: 1361,
    attributes: {
      variant_id: "570",
    },
  },
  {
    id: 1220,
    attributes: {
      variant_id: "440",
    },
  },
  {
    id: 1282,
    attributes: {
      variant_id: "491",
    },
  },
  {
    id: 1299,
    attributes: {
      variant_id: "485",
    },
  },
  {
    id: 1337,
    attributes: {
      variant_id: "546",
    },
  },
  {
    id: 1373,
    attributes: {
      variant_id: "578",
    },
  },
  {
    id: 1355,
    attributes: {
      variant_id: "564",
    },
  },
  {
    id: 1395,
    attributes: {
      variant_id: "559",
    },
  },
  {
    id: 1364,
    attributes: {
      variant_id: "563",
    },
  },
  {
    id: 1148,
    attributes: {
      variant_id: "374",
    },
  },
  {
    id: 1353,
    attributes: {
      variant_id: "557",
    },
  },
  {
    id: 1346,
    attributes: {
      variant_id: "560",
    },
  },
  {
    id: 1389,
    attributes: {
      variant_id: "600",
    },
  },
  {
    id: 1381,
    attributes: {
      variant_id: "594",
    },
  },
  {
    id: 1391,
    attributes: {
      variant_id: "598",
    },
  },
  {
    id: 1317,
    attributes: {
      variant_id: "520",
    },
  },
  {
    id: 1378,
    attributes: {
      variant_id: "579",
    },
  },
  {
    id: 1580,
    attributes: {
      variant_id: "1075",
    },
  },
  {
    id: 1522,
    attributes: {
      variant_id: "1055",
    },
  },
  {
    id: 1570,
    attributes: {
      variant_id: "1096",
    },
  },
  {
    id: 1604,
    attributes: {
      variant_id: "1125",
    },
  },
  {
    id: 1598,
    attributes: {
      variant_id: "1093",
    },
  },
  {
    id: 1644,
    attributes: {
      variant_id: "1168",
    },
  },
  {
    id: 1549,
    attributes: {
      variant_id: "1071",
    },
  },
  {
    id: 1553,
    attributes: {
      variant_id: "1073",
    },
  },
  {
    id: 1648,
    attributes: {
      variant_id: "1171",
    },
  },
  {
    id: 1665,
    attributes: {
      variant_id: "1185",
    },
  },
  {
    id: 1587,
    attributes: {
      variant_id: "1083",
    },
  },
  {
    id: 1567,
    attributes: {
      variant_id: "411",
    },
  },
  {
    id: 1683,
    attributes: {
      variant_id: "1172",
    },
  },
  {
    id: 1614,
    attributes: {
      variant_id: "1146",
    },
  },
  {
    id: 1642,
    attributes: {
      variant_id: "1145",
    },
  },
  {
    id: 1653,
    attributes: {
      variant_id: "1167",
    },
  },
  {
    id: 1624,
    attributes: {
      variant_id: "1142",
    },
  },
  {
    id: 1700,
    attributes: {
      variant_id: "1202",
    },
  },
  {
    id: 1690,
    attributes: {
      variant_id: null,
    },
  },
  {
    id: 1671,
    attributes: {
      variant_id: "573",
    },
  },
  {
    id: 1668,
    attributes: {
      variant_id: "1177",
    },
  },
  {
    id: 1749,
    attributes: {
      variant_id: "1323",
    },
  },
  {
    id: 1712,
    attributes: {
      variant_id: "1217",
    },
  },
  {
    id: 1682,
    attributes: {
      variant_id: null,
    },
  },
  {
    id: 1716,
    attributes: {
      variant_id: "1236",
    },
  },
  {
    id: 1680,
    attributes: {
      variant_id: "1179",
    },
  },
  {
    id: 1684,
    attributes: {
      variant_id: "1216",
    },
  },
  {
    id: 1719,
    attributes: {
      variant_id: "1231",
    },
  },
  {
    id: 1694,
    attributes: {
      variant_id: "250",
    },
  },
  {
    id: 1747,
    attributes: {
      variant_id: "1282",
    },
  },
  {
    id: 1770,
    attributes: {
      variant_id: "1274",
    },
  },
  {
    id: 1804,
    attributes: {
      variant_id: "1230",
    },
  },
  {
    id: 1750,
    attributes: {
      variant_id: "1304",
    },
  },
  {
    id: 1743,
    attributes: {
      variant_id: "1279",
    },
  },
  {
    id: 1799,
    attributes: {
      variant_id: "1241",
    },
  },
  {
    id: 1781,
    attributes: {
      variant_id: "1299",
    },
  },
  {
    id: 1818,
    attributes: {
      variant_id: "62",
    },
  },
  {
    id: 1901,
    attributes: {
      variant_id: "1421",
    },
  },
  {
    id: 1891,
    attributes: {
      variant_id: "1343",
    },
  },
  {
    id: 1870,
    attributes: {
      variant_id: "1391",
    },
  },
  {
    id: 1827,
    attributes: {
      variant_id: "1359",
    },
  },
  {
    id: 1876,
    attributes: {
      variant_id: "1407",
    },
  },
  {
    id: 1849,
    attributes: {
      variant_id: "1402",
    },
  },
  {
    id: 1879,
    attributes: {
      variant_id: "1388",
    },
  },
  {
    id: 1948,
    attributes: {
      variant_id: "1477",
    },
  },
  {
    id: 1927,
    attributes: {
      variant_id: "1457",
    },
  },
  {
    id: 1920,
    attributes: {
      variant_id: "1436",
    },
  },
  {
    id: 1935,
    attributes: {
      variant_id: "1447",
    },
  },
  {
    id: 1938,
    attributes: {
      variant_id: "1452",
    },
  },
  {
    id: 1173,
    attributes: {
      variant_id: "381",
    },
  },
  {
    id: 1305,
    attributes: {
      variant_id: "510",
    },
  },
  {
    id: 1228,
    attributes: {
      variant_id: "434",
    },
  },
  {
    id: 1102,
    attributes: {
      variant_id: "300",
    },
  },
  {
    id: 1377,
    attributes: {
      variant_id: "580",
    },
  },
  {
    id: 826,
    attributes: {
      variant_id: "23",
    },
  },
  {
    id: 992,
    attributes: {
      variant_id: "169",
    },
  },
  {
    id: 1674,
    attributes: {
      variant_id: "1193",
    },
  },
  {
    id: 1531,
    attributes: {
      variant_id: "1053",
    },
  },
  {
    id: 847,
    attributes: {
      variant_id: "70",
    },
  },
  {
    id: 1092,
    attributes: {
      variant_id: "298",
    },
  },
  {
    id: 1536,
    attributes: {
      variant_id: "1084",
    },
  },
  {
    id: 1595,
    attributes: {
      variant_id: "1104",
    },
  },
  {
    id: 1545,
    attributes: {
      variant_id: "1052",
    },
  },
  {
    id: 866,
    attributes: {
      variant_id: "81",
    },
  },
  {
    id: 1271,
    attributes: {
      variant_id: "481",
    },
  },
  {
    id: 1151,
    attributes: {
      variant_id: "343",
    },
  },
  {
    id: 1227,
    attributes: {
      variant_id: "436",
    },
  },
  {
    id: 1362,
    attributes: {
      variant_id: "562",
    },
  },
  {
    id: 1542,
    attributes: {
      variant_id: "1028",
    },
  },
  {
    id: 964,
    attributes: {
      variant_id: "156",
    },
  },
  {
    id: 887,
    attributes: {
      variant_id: "20",
    },
  },
  {
    id: 1165,
    attributes: {
      variant_id: "348",
    },
  },
  {
    id: 1663,
    attributes: {
      variant_id: "1189",
    },
  },
  {
    id: 905,
    attributes: {
      variant_id: "98",
    },
  },
  {
    id: 849,
    attributes: {
      variant_id: "69",
    },
  },
  {
    id: 1370,
    attributes: {
      variant_id: "588",
    },
  },
  {
    id: 1678,
    attributes: {
      variant_id: "1205",
    },
  },
  {
    id: 1382,
    attributes: {
      variant_id: "601",
    },
  },
  {
    id: 1203,
    attributes: {
      variant_id: "368",
    },
  },
  {
    id: 1673,
    attributes: {
      variant_id: "1181",
    },
  },
  {
    id: 990,
    attributes: {
      variant_id: "191",
    },
  },
  {
    id: 1247,
    attributes: {
      variant_id: "428",
    },
  },
  {
    id: 1733,
    attributes: {
      variant_id: "1285",
    },
  },
  {
    id: 1893,
    attributes: {
      variant_id: "1429",
    },
  },
  {
    id: 1711,
    attributes: {
      variant_id: null,
    },
  },
  {
    id: 1807,
    attributes: {
      variant_id: "1229",
    },
  },
  {
    id: 1659,
    attributes: {
      variant_id: null,
    },
  },
  {
    id: 1873,
    attributes: {
      variant_id: "1389",
    },
  },
  {
    id: 819,
    attributes: {
      variant_id: "6",
    },
  },
  {
    id: 1695,
    attributes: {
      variant_id: "1201",
    },
  },
  {
    id: 1401,
    attributes: {
      variant_id: "615",
    },
  },
  {
    id: 876,
    attributes: {
      variant_id: "45",
    },
  },
  {
    id: 1751,
    attributes: {
      variant_id: "1314",
    },
  },
  {
    id: 1831,
    attributes: {
      variant_id: "1331",
    },
  },
  {
    id: 1194,
    attributes: {
      variant_id: "404",
    },
  },
  {
    id: 1527,
    attributes: {
      variant_id: "1044",
    },
  },
  {
    id: 1552,
    attributes: {
      variant_id: "1100",
    },
  },
  {
    id: 1090,
    attributes: {
      variant_id: "287",
    },
  },
  {
    id: 1627,
    attributes: {
      variant_id: "1141",
    },
  },
  {
    id: 1769,
    attributes: {
      variant_id: "1244",
    },
  },
  {
    id: 906,
    attributes: {
      variant_id: "84",
    },
  },
  {
    id: 1761,
    attributes: {
      variant_id: "1313",
    },
  },
  {
    id: 1303,
    attributes: {
      variant_id: "516",
    },
  },
  {
    id: 1023,
    attributes: {
      variant_id: "214",
    },
  },
  {
    id: 1396,
    attributes: {
      variant_id: "584",
    },
  },
  {
    id: 1589,
    attributes: {
      variant_id: "1109",
    },
  },
  {
    id: 1115,
    attributes: {
      variant_id: "316",
    },
  },
  {
    id: 1871,
    attributes: {
      variant_id: "1355",
    },
  },
  {
    id: 1806,
    attributes: {
      variant_id: "1261",
    },
  },
  {
    id: 1122,
    attributes: {
      variant_id: "325",
    },
  },
  {
    id: 1127,
    attributes: {
      variant_id: "326",
    },
  },
  {
    id: 1098,
    attributes: {
      variant_id: "288",
    },
  },
  {
    id: 1397,
    attributes: {
      variant_id: "575",
    },
  },
  {
    id: 1877,
    attributes: {
      variant_id: "1397",
    },
  },
  {
    id: 960,
    attributes: {
      variant_id: "154",
    },
  },
  {
    id: 1390,
    attributes: {
      variant_id: "606",
    },
  },
  {
    id: 1225,
    attributes: {
      variant_id: "420",
    },
  },
  {
    id: 1850,
    attributes: {
      variant_id: "1369",
    },
  },
  {
    id: 1606,
    attributes: {
      variant_id: "1122",
    },
  },
  {
    id: 853,
    attributes: {
      variant_id: "75",
    },
  },
  {
    id: 919,
    attributes: {
      variant_id: "113",
    },
  },
  {
    id: 1089,
    attributes: {
      variant_id: "276",
    },
  },
  {
    id: 1561,
    attributes: {
      variant_id: "1059",
    },
  },
  {
    id: 1129,
    attributes: {
      variant_id: "339",
    },
  },
  {
    id: 1161,
    attributes: {
      variant_id: "344",
    },
  },
  {
    id: 1913,
    attributes: {
      variant_id: "1431",
    },
  },
  {
    id: 1327,
    attributes: {
      variant_id: "531",
    },
  },
  {
    id: 1302,
    attributes: {
      variant_id: "509",
    },
  },
  {
    id: 850,
    attributes: {
      variant_id: "76",
    },
  },
  {
    id: 1184,
    attributes: {
      variant_id: "393",
    },
  },
  {
    id: 1554,
    attributes: {
      variant_id: "1060",
    },
  },
  {
    id: 856,
    attributes: {
      variant_id: "87",
    },
  },
  {
    id: 951,
    attributes: {
      variant_id: "118",
    },
  },
  {
    id: 1888,
    attributes: {
      variant_id: "1404",
    },
  },
  {
    id: 920,
    attributes: {
      variant_id: "126",
    },
  },
  {
    id: 869,
    attributes: {
      variant_id: "89",
    },
  },
  {
    id: 904,
    attributes: {
      variant_id: "96",
    },
  },
  {
    id: 1345,
    attributes: {
      variant_id: "534",
    },
  },
  {
    id: 1582,
    attributes: {
      variant_id: "1098",
    },
  },
  {
    id: 1521,
    attributes: {
      variant_id: "1032",
    },
  },
  {
    id: 1802,
    attributes: {
      variant_id: "1321",
    },
  },
  {
    id: 1116,
    attributes: {
      variant_id: "321",
    },
  },
  {
    id: 1699,
    attributes: {
      variant_id: "1222",
    },
  },
  {
    id: 862,
    attributes: {
      variant_id: "57",
    },
  },
  {
    id: 867,
    attributes: {
      variant_id: "58",
    },
  },
  {
    id: 1405,
    attributes: {
      variant_id: "611",
    },
  },
  {
    id: 936,
    attributes: {
      variant_id: "136",
    },
  },
  {
    id: 1118,
    attributes: {
      variant_id: "314",
    },
  },
  {
    id: 1326,
    attributes: {
      variant_id: "536",
    },
  },
  {
    id: 1146,
    attributes: {
      variant_id: "345",
    },
  },
  {
    id: 1880,
    attributes: {
      variant_id: "1381",
    },
  },
  {
    id: 1336,
    attributes: {
      variant_id: "551",
    },
  },
  {
    id: 1564,
    attributes: {
      variant_id: "1099",
    },
  },
  {
    id: 1947,
    attributes: {
      variant_id: "1464",
    },
  },
  {
    id: 981,
    attributes: {
      variant_id: "172",
    },
  },
  {
    id: 1881,
    attributes: {
      variant_id: "1364",
    },
  },
  {
    id: 1260,
    attributes: {
      variant_id: "454",
    },
  },
  {
    id: 1112,
    attributes: {
      variant_id: "273",
    },
  },
  {
    id: 1724,
    attributes: {
      variant_id: "1252",
    },
  },
  {
    id: 1708,
    attributes: {
      variant_id: "1219",
    },
  },
  {
    id: 1763,
    attributes: {
      variant_id: "1289",
    },
  },
  {
    id: 1905,
    attributes: {
      variant_id: "1420",
    },
  },
  {
    id: 1593,
    attributes: {
      variant_id: "1117",
    },
  },
  {
    id: 1005,
    attributes: {
      variant_id: "200",
    },
  },
  {
    id: 857,
    attributes: {
      variant_id: "36",
    },
  },
  {
    id: 1874,
    attributes: {
      variant_id: "1403",
    },
  },
  {
    id: 1130,
    attributes: {
      variant_id: "331",
    },
  },
  {
    id: 1562,
    attributes: {
      variant_id: "1056",
    },
  },
  {
    id: 1172,
    attributes: {
      variant_id: "338",
    },
  },
  {
    id: 1689,
    attributes: {
      variant_id: "1220",
    },
  },
  {
    id: 1113,
    attributes: {
      variant_id: "322",
    },
  },
  {
    id: 1742,
    attributes: {
      variant_id: "1246",
    },
  },
  {
    id: 1867,
    attributes: {
      variant_id: "1416",
    },
  },
  {
    id: 1853,
    attributes: {
      variant_id: "1392",
    },
  },
  {
    id: 1622,
    attributes: {
      variant_id: "1140",
    },
  },
  {
    id: 1249,
    attributes: {
      variant_id: "452",
    },
  },
  {
    id: 1094,
    attributes: {
      variant_id: "295",
    },
  },
  {
    id: 1634,
    attributes: {
      variant_id: "1158",
    },
  },
  {
    id: 929,
    attributes: {
      variant_id: "131",
    },
  },
  {
    id: 1911,
    attributes: {
      variant_id: "1442",
    },
  },
  {
    id: 1805,
    attributes: {
      variant_id: "1328",
    },
  },
  {
    id: 1801,
    attributes: {
      variant_id: "1232",
    },
  },
  {
    id: 1026,
    attributes: {
      variant_id: "236",
    },
  },
  {
    id: 1909,
    attributes: {
      variant_id: "1387",
    },
  },
  {
    id: 1808,
    attributes: {
      variant_id: "1320",
    },
  },
  {
    id: 1826,
    attributes: {
      variant_id: "1373",
    },
  },
  {
    id: 1841,
    attributes: {
      variant_id: "1339",
    },
  },
  {
    id: 1784,
    attributes: {
      variant_id: "1322",
    },
  },
  {
    id: 1547,
    attributes: {
      variant_id: "1091",
    },
  },
  {
    id: 1319,
    attributes: {
      variant_id: "518",
    },
  },
  {
    id: 1757,
    attributes: {
      variant_id: "1288",
    },
  },
  {
    id: 1946,
    attributes: {
      variant_id: "1475",
    },
  },
  {
    id: 1907,
    attributes: {
      variant_id: "1422",
    },
  },
  {
    id: 1725,
    attributes: {
      variant_id: "1256",
    },
  },
  {
    id: 1517,
    attributes: {
      variant_id: "1047",
    },
  },
  {
    id: 1898,
    attributes: {
      variant_id: "1411",
    },
  },
  {
    id: 828,
    attributes: {
      variant_id: "48",
    },
  },
  {
    id: 821,
    attributes: {
      variant_id: "72",
    },
  },
  {
    id: 1066,
    attributes: {
      variant_id: "267",
    },
  },
  {
    id: 1354,
    attributes: {
      variant_id: "553",
    },
  },
  {
    id: 1623,
    attributes: {
      variant_id: "1128",
    },
  },
  {
    id: 817,
    attributes: {
      variant_id: "2",
    },
  },
  {
    id: 858,
    attributes: {
      variant_id: "78",
    },
  },
  {
    id: 1720,
    attributes: {
      variant_id: "1233",
    },
  },
  {
    id: 1793,
    attributes: {
      variant_id: "1278",
    },
  },
  {
    id: 1738,
    attributes: {
      variant_id: "1270",
    },
  },
  {
    id: 1890,
    attributes: {
      variant_id: "1412",
    },
  },
  {
    id: 1330,
    attributes: {
      variant_id: "547",
    },
  },
  {
    id: 859,
    attributes: {
      variant_id: "68",
    },
  },
  {
    id: 835,
    attributes: {
      variant_id: "38",
    },
  },
  {
    id: 1617,
    attributes: {
      variant_id: "1139",
    },
  },
  {
    id: 898,
    attributes: {
      variant_id: "43",
    },
  },
  {
    id: 1722,
    attributes: {
      variant_id: "1238",
    },
  },
  {
    id: 823,
    attributes: {
      variant_id: "40",
    },
  },
  {
    id: 1321,
    attributes: {
      variant_id: "529",
    },
  },
  {
    id: 1574,
    attributes: {
      variant_id: "1101",
    },
  },
  {
    id: 833,
    attributes: {
      variant_id: "28",
    },
  },
  {
    id: 1670,
    attributes: {
      variant_id: "1190",
    },
  },
  {
    id: 854,
    attributes: {
      variant_id: "77",
    },
  },
  {
    id: 1576,
    attributes: {
      variant_id: "1108",
    },
  },
  {
    id: 1813,
    attributes: {
      variant_id: "1333",
    },
  },
  {
    id: 1538,
    attributes: {
      variant_id: "1058",
    },
  },
  {
    id: 1821,
    attributes: {
      variant_id: "1382",
    },
  },
  {
    id: 1955,
    attributes: {
      variant_id: "1454",
    },
  },
  {
    id: 877,
    attributes: {
      variant_id: "30",
    },
  },
  {
    id: 860,
    attributes: {
      variant_id: "62",
    },
  },
  {
    id: 1100,
    attributes: {
      variant_id: "299",
    },
  },
  {
    id: 965,
    attributes: {
      variant_id: "155",
    },
  },
  {
    id: 1854,
    attributes: {
      variant_id: "1379",
    },
  },
  {
    id: 1908,
    attributes: {
      variant_id: "1430",
    },
  },
  {
    id: 1546,
    attributes: {
      variant_id: "1041",
    },
  },
  {
    id: 903,
    attributes: {
      variant_id: "91",
    },
  },
  {
    id: 1957,
    attributes: {
      variant_id: "1473",
    },
  },
  {
    id: 1243,
    attributes: {
      variant_id: "460",
    },
  },
  {
    id: 871,
    attributes: {
      variant_id: "67",
    },
  },
  {
    id: 886,
    attributes: {
      variant_id: "11",
    },
  },
  {
    id: 1339,
    attributes: {
      variant_id: "533",
    },
  },
  {
    id: 879,
    attributes: {
      variant_id: "7",
    },
  },
  {
    id: 1550,
    attributes: {
      variant_id: "1082",
    },
  },
  {
    id: 1043,
    attributes: {
      variant_id: "258",
    },
  },
  {
    id: 1816,
    attributes: {
      variant_id: "1338",
    },
  },
  {
    id: 1213,
    attributes: {
      variant_id: "418",
    },
  },
  {
    id: 925,
    attributes: {
      variant_id: "120",
    },
  },
  {
    id: 1824,
    attributes: {
      variant_id: "1372",
    },
  },
  {
    id: 1252,
    attributes: {
      variant_id: "446",
    },
  },
  {
    id: 1541,
    attributes: {
      variant_id: "1042",
    },
  },
  {
    id: 1235,
    attributes: {
      variant_id: "455",
    },
  },
  {
    id: 1669,
    attributes: {
      variant_id: "1173",
    },
  },
  {
    id: 832,
    attributes: {
      variant_id: "42",
    },
  },
  {
    id: 1726,
    attributes: {
      variant_id: "1267",
    },
  },
  {
    id: 863,
    attributes: {
      variant_id: "83",
    },
  },
  {
    id: 878,
    attributes: {
      variant_id: "35",
    },
  },
  {
    id: 838,
    attributes: {
      variant_id: "60",
    },
  },
  {
    id: 880,
    attributes: {
      variant_id: "8",
    },
  },
  {
    id: 1532,
    attributes: {
      variant_id: "1027",
    },
  },
  {
    id: 935,
    attributes: {
      variant_id: "132",
    },
  },
  {
    id: 846,
    attributes: {
      variant_id: "27",
    },
  },
  {
    id: 899,
    attributes: {
      variant_id: "90",
    },
  },
  {
    id: 1940,
    attributes: {
      variant_id: "1478",
    },
  },
  {
    id: 1212,
    attributes: {
      variant_id: "394",
    },
  },
  {
    id: 910,
    attributes: {
      variant_id: "101",
    },
  },
  {
    id: 953,
    attributes: {
      variant_id: "179",
    },
  },
  {
    id: 1942,
    attributes: {
      variant_id: "1456",
    },
  },
  {
    id: 1590,
    attributes: {
      variant_id: "1115",
    },
  },
  {
    id: 966,
    attributes: {
      variant_id: "165",
    },
  },
  {
    id: 1610,
    attributes: {
      variant_id: "1113",
    },
  },
  {
    id: 1945,
    attributes: {
      variant_id: "1467",
    },
  },
  {
    id: 1919,
    attributes: {
      variant_id: "1450",
    },
  },
  {
    id: 1619,
    attributes: {
      variant_id: "1130",
    },
  },
  {
    id: 893,
    attributes: {
      variant_id: "103",
    },
  },
  {
    id: 1825,
    attributes: {
      variant_id: "1368",
    },
  },
  {
    id: 1931,
    attributes: {
      variant_id: "1468",
    },
  },
  {
    id: 1298,
    attributes: {
      variant_id: "501",
    },
  },
  {
    id: 1216,
    attributes: {
      variant_id: "427",
    },
  },
  {
    id: 1586,
    attributes: {
      variant_id: "1077",
    },
  },
  {
    id: 888,
    attributes: {
      variant_id: "51",
    },
  },
  {
    id: 1640,
    attributes: {
      variant_id: "1159",
    },
  },
  {
    id: 1223,
    attributes: {
      variant_id: "445",
    },
  },
  {
    id: 1285,
    attributes: {
      variant_id: "496",
    },
  },
  {
    id: 1097,
    attributes: {
      variant_id: "297",
    },
  },
  {
    id: 1859,
    attributes: {
      variant_id: "1330",
    },
  },
  {
    id: 994,
    attributes: {
      variant_id: "185",
    },
  },
  {
    id: 844,
    attributes: {
      variant_id: "3",
    },
  },
  {
    id: 1278,
    attributes: {
      variant_id: "504",
    },
  },
  {
    id: 1210,
    attributes: {
      variant_id: "397",
    },
  },
  {
    id: 924,
    attributes: {
      variant_id: "130",
    },
  },
  {
    id: 1329,
    attributes: {
      variant_id: "549",
    },
  },
  {
    id: 1398,
    attributes: {
      variant_id: "583",
    },
  },
  {
    id: 884,
    attributes: {
      variant_id: "14",
    },
  },
  {
    id: 1266,
    attributes: {
      variant_id: "477",
    },
  },
  {
    id: 1715,
    attributes: {
      variant_id: "1247",
    },
  },
  {
    id: 1107,
    attributes: {
      variant_id: "307",
    },
  },
  {
    id: 1921,
    attributes: {
      variant_id: "1451",
    },
  },
  {
    id: 1837,
    attributes: {
      variant_id: "1353",
    },
  },
  {
    id: 1003,
    attributes: {
      variant_id: "193",
    },
  },
  {
    id: 1618,
    attributes: {
      variant_id: "1133",
    },
  },
  {
    id: 1343,
    attributes: {
      variant_id: "550",
    },
  },
  {
    id: 1064,
    attributes: {
      variant_id: "265",
    },
  },
  {
    id: 1322,
    attributes: {
      variant_id: "519",
    },
  },
  {
    id: 1646,
    attributes: {
      variant_id: "1151",
    },
  },
  {
    id: 1795,
    attributes: {
      variant_id: "1301",
    },
  },
  {
    id: 1783,
    attributes: {
      variant_id: "1303",
    },
  },
  {
    id: 1917,
    attributes: {
      variant_id: "1448",
    },
  },
  {
    id: 1535,
    attributes: {
      variant_id: "1045",
    },
  },
  {
    id: 922,
    attributes: {
      variant_id: "108",
    },
  },
  {
    id: 942,
    attributes: {
      variant_id: "119",
    },
  },
  {
    id: 1786,
    attributes: {
      variant_id: "1311",
    },
  },
  {
    id: 900,
    attributes: {
      variant_id: "100",
    },
  },
  {
    id: 1015,
    attributes: {
      variant_id: "219",
    },
  },
  {
    id: 1636,
    attributes: {
      variant_id: "1154",
    },
  },
  {
    id: 1868,
    attributes: {
      variant_id: "1390",
    },
  },
  {
    id: 1922,
    attributes: {
      variant_id: "1433",
    },
  },
  {
    id: 1365,
    attributes: {
      variant_id: "556",
    },
  },
  {
    id: 1215,
    attributes: {
      variant_id: "422",
    },
  },
  {
    id: 971,
    attributes: {
      variant_id: "163",
    },
  },
  {
    id: 937,
    attributes: {
      variant_id: "138",
    },
  },
  {
    id: 1645,
    attributes: {
      variant_id: "1155",
    },
  },
  {
    id: 956,
    attributes: {
      variant_id: "180",
    },
  },
  {
    id: 1835,
    attributes: {
      variant_id: "1350",
    },
  },
  {
    id: 1889,
    attributes: {
      variant_id: "1405",
    },
  },
  {
    id: 946,
    attributes: {
      variant_id: "110",
    },
  },
  {
    id: 890,
    attributes: {
      variant_id: "21",
    },
  },
  {
    id: 913,
    attributes: {
      variant_id: "106",
    },
  },
  {
    id: 1551,
    attributes: {
      variant_id: "1072",
    },
  },
  {
    id: 1163,
    attributes: {
      variant_id: "379",
    },
  },
  {
    id: 1254,
    attributes: {
      variant_id: "430",
    },
  },
  {
    id: 930,
    attributes: {
      variant_id: "116",
    },
  },
  {
    id: 926,
    attributes: {
      variant_id: "117",
    },
  },
  {
    id: 1928,
    attributes: {
      variant_id: "1440",
    },
  },
  {
    id: 955,
    attributes: {
      variant_id: "187",
    },
  },
  {
    id: 830,
    attributes: {
      variant_id: "41",
    },
  },
  {
    id: 1518,
    attributes: {
      variant_id: "1029",
    },
  },
  {
    id: 1717,
    attributes: {
      variant_id: "1271",
    },
  },
  {
    id: 962,
    attributes: {
      variant_id: "157",
    },
  },
  {
    id: 897,
    attributes: {
      variant_id: "37",
    },
  },
  {
    id: 959,
    attributes: {
      variant_id: "152",
    },
  },
  {
    id: 1120,
    attributes: {
      variant_id: "323",
    },
  },
  {
    id: 1196,
    attributes: {
      variant_id: "414",
    },
  },
  {
    id: 914,
    attributes: {
      variant_id: "122",
    },
  },
  {
    id: 1949,
    attributes: {
      variant_id: "1461",
    },
  },
  {
    id: 1034,
    attributes: {
      variant_id: "227",
    },
  },
  {
    id: 1839,
    attributes: {
      variant_id: "1346",
    },
  },
  {
    id: 928,
    attributes: {
      variant_id: "114",
    },
  },
  {
    id: 923,
    attributes: {
      variant_id: "137",
    },
  },
  {
    id: 1164,
    attributes: {
      variant_id: "365",
    },
  },
  {
    id: 1032,
    attributes: {
      variant_id: "230",
    },
  },
  {
    id: 932,
    attributes: {
      variant_id: "150",
    },
  },
  {
    id: 901,
    attributes: {
      variant_id: "104",
    },
  },
  {
    id: 1137,
    attributes: {
      variant_id: "320",
    },
  },
  {
    id: 934,
    attributes: {
      variant_id: "141",
    },
  },
  {
    id: 958,
    attributes: {
      variant_id: "151",
    },
  },
  {
    id: 889,
    attributes: {
      variant_id: "52",
    },
  },
  {
    id: 931,
    attributes: {
      variant_id: "146",
    },
  },
  {
    id: 1209,
    attributes: {
      variant_id: "401",
    },
  },
  {
    id: 1581,
    attributes: {
      variant_id: "1079",
    },
  },
  {
    id: 1331,
    attributes: {
      variant_id: "521",
    },
  },
  {
    id: 1033,
    attributes: {
      variant_id: "218",
    },
  },
  {
    id: 1000,
    attributes: {
      variant_id: "183",
    },
  },
  {
    id: 997,
    attributes: {
      variant_id: "192",
    },
  },
  {
    id: 988,
    attributes: {
      variant_id: "173",
    },
  },
  {
    id: 1055,
    attributes: {
      variant_id: "241",
    },
  },
  {
    id: 1649,
    attributes: {
      variant_id: "1156",
    },
  },
  {
    id: 1069,
    attributes: {
      variant_id: "259",
    },
  },
  {
    id: 1039,
    attributes: {
      variant_id: "250",
    },
  },
  {
    id: 1925,
    attributes: {
      variant_id: "1438",
    },
  },
  {
    id: 1001,
    attributes: {
      variant_id: "207",
    },
  },
  {
    id: 950,
    attributes: {
      variant_id: "147",
    },
  },
  {
    id: 1348,
    attributes: {
      variant_id: "566",
    },
  },
  {
    id: 1571,
    attributes: {
      variant_id: "1070",
    },
  },
  {
    id: 976,
    attributes: {
      variant_id: "201",
    },
  },
  {
    id: 1829,
    attributes: {
      variant_id: "1341",
    },
  },
  {
    id: 1065,
    attributes: {
      variant_id: "270",
    },
  },
  {
    id: 1050,
    attributes: {
      variant_id: "213",
    },
  },
  {
    id: 1872,
    attributes: {
      variant_id: "1384",
    },
  },
  {
    id: 1025,
    attributes: {
      variant_id: "222",
    },
  },
  {
    id: 1315,
    attributes: {
      variant_id: "530",
    },
  },
  {
    id: 1051,
    attributes: {
      variant_id: "234",
    },
  },
  {
    id: 1071,
    attributes: {
      variant_id: "263",
    },
  },
  {
    id: 1045,
    attributes: {
      variant_id: "232",
    },
  },
  {
    id: 1037,
    attributes: {
      variant_id: "256",
    },
  },
  {
    id: 1063,
    attributes: {
      variant_id: "253",
    },
  },
  {
    id: 1369,
    attributes: {
      variant_id: "582",
    },
  },
  {
    id: 1052,
    attributes: {
      variant_id: "245",
    },
  },
  {
    id: 963,
    attributes: {
      variant_id: "158",
    },
  },
  {
    id: 1044,
    attributes: {
      variant_id: "251",
    },
  },
  {
    id: 977,
    attributes: {
      variant_id: "161",
    },
  },
  {
    id: 1020,
    attributes: {
      variant_id: "216",
    },
  },
  {
    id: 980,
    attributes: {
      variant_id: "159",
    },
  },
  {
    id: 1047,
    attributes: {
      variant_id: "220",
    },
  },
  {
    id: 1748,
    attributes: {
      variant_id: "1292",
    },
  },
  {
    id: 1086,
    attributes: {
      variant_id: "286",
    },
  },
  {
    id: 1141,
    attributes: {
      variant_id: "317",
    },
  },
  {
    id: 1031,
    attributes: {
      variant_id: "238",
    },
  },
  {
    id: 1093,
    attributes: {
      variant_id: "292",
    },
  },
  {
    id: 1764,
    attributes: {
      variant_id: "1284",
    },
  },
  {
    id: 947,
    attributes: {
      variant_id: "140",
    },
  },
  {
    id: 1035,
    attributes: {
      variant_id: "244",
    },
  },
  {
    id: 1110,
    attributes: {
      variant_id: "301",
    },
  },
  {
    id: 1101,
    attributes: {
      variant_id: "303",
    },
  },
  {
    id: 1269,
    attributes: {
      variant_id: "475",
    },
  },
  {
    id: 1185,
    attributes: {
      variant_id: "396",
    },
  },
  {
    id: 940,
    attributes: {
      variant_id: "139",
    },
  },
  {
    id: 1192,
    attributes: {
      variant_id: "413",
    },
  },
  {
    id: 1154,
    attributes: {
      variant_id: "361",
    },
  },
  {
    id: 984,
    attributes: {
      variant_id: "194",
    },
  },
  {
    id: 1197,
    attributes: {
      variant_id: "406",
    },
  },
  {
    id: 1255,
    attributes: {
      variant_id: "443",
    },
  },
  {
    id: 1067,
    attributes: {
      variant_id: "266",
    },
  },
  {
    id: 1347,
    attributes: {
      variant_id: "568",
    },
  },
  {
    id: 973,
    attributes: {
      variant_id: "167",
    },
  },
  {
    id: 1168,
    attributes: {
      variant_id: "373",
    },
  },
  {
    id: 1024,
    attributes: {
      variant_id: "212",
    },
  },
  {
    id: 1111,
    attributes: {
      variant_id: "268",
    },
  },
  {
    id: 1058,
    attributes: {
      variant_id: "215",
    },
  },
  {
    id: 1046,
    attributes: {
      variant_id: "226",
    },
  },
  {
    id: 1133,
    attributes: {
      variant_id: "347",
    },
  },
  {
    id: 1088,
    attributes: {
      variant_id: "291",
    },
  },
  {
    id: 1411,
    attributes: {
      variant_id: "618",
    },
  },
  {
    id: 1075,
    attributes: {
      variant_id: "274",
    },
  },
  {
    id: 1084,
    attributes: {
      variant_id: "285",
    },
  },
  {
    id: 1261,
    attributes: {
      variant_id: "468",
    },
  },
  {
    id: 1073,
    attributes: {
      variant_id: "264",
    },
  },
  {
    id: 1056,
    attributes: {
      variant_id: "246",
    },
  },
  {
    id: 1057,
    attributes: {
      variant_id: "247",
    },
  },
  {
    id: 1040,
    attributes: {
      variant_id: "237",
    },
  },
  {
    id: 1099,
    attributes: {
      variant_id: "289",
    },
  },
  {
    id: 1752,
    attributes: {
      variant_id: "1277",
    },
  },
  {
    id: 1087,
    attributes: {
      variant_id: "280",
    },
  },
  {
    id: 1238,
    attributes: {
      variant_id: "457",
    },
  },
  {
    id: 1138,
    attributes: {
      variant_id: "342",
    },
  },
  {
    id: 1004,
    attributes: {
      variant_id: "186",
    },
  },
  {
    id: 1190,
    attributes: {
      variant_id: "407",
    },
  },
  {
    id: 1150,
    attributes: {
      variant_id: "378",
    },
  },
  {
    id: 1144,
    attributes: {
      variant_id: "358",
    },
  },
  {
    id: 1082,
    attributes: {
      variant_id: "281",
    },
  },
  {
    id: 1753,
    attributes: {
      variant_id: "1297",
    },
  },
  {
    id: 1214,
    attributes: {
      variant_id: "424",
    },
  },
  {
    id: 985,
    attributes: {
      variant_id: "181",
    },
  },
  {
    id: 1296,
    attributes: {
      variant_id: "482",
    },
  },
  {
    id: 1179,
    attributes: {
      variant_id: "336",
    },
  },
  {
    id: 1139,
    attributes: {
      variant_id: "329",
    },
  },
  {
    id: 1513,
    attributes: {
      variant_id: "1048",
    },
  },
  {
    id: 1171,
    attributes: {
      variant_id: "383",
    },
  },
  {
    id: 1083,
    attributes: {
      variant_id: "278",
    },
  },
  {
    id: 1906,
    attributes: {
      variant_id: "1386",
    },
  },
  {
    id: 1140,
    attributes: {
      variant_id: "330",
    },
  },
  {
    id: 1017,
    attributes: {
      variant_id: "239",
    },
  },
  {
    id: 1054,
    attributes: {
      variant_id: "249",
    },
  },
  {
    id: 1277,
    attributes: {
      variant_id: "500",
    },
  },
  {
    id: 1155,
    attributes: {
      variant_id: "334",
    },
  },
  {
    id: 1268,
    attributes: {
      variant_id: "479",
    },
  },
  {
    id: 1142,
    attributes: {
      variant_id: "363",
    },
  },
  {
    id: 1078,
    attributes: {
      variant_id: "269",
    },
  },
  {
    id: 1882,
    attributes: {
      variant_id: "1376",
    },
  },
  {
    id: 1198,
    attributes: {
      variant_id: "402",
    },
  },
  {
    id: 1251,
    attributes: {
      variant_id: "462",
    },
  },
  {
    id: 1188,
    attributes: {
      variant_id: "403",
    },
  },
  {
    id: 1180,
    attributes: {
      variant_id: "386",
    },
  },
  {
    id: 1241,
    attributes: {
      variant_id: "463",
    },
  },
  {
    id: 1125,
    attributes: {
      variant_id: "364",
    },
  },
  {
    id: 1091,
    attributes: {
      variant_id: "293",
    },
  },
  {
    id: 1106,
    attributes: {
      variant_id: "294",
    },
  },
  {
    id: 824,
    attributes: {
      variant_id: "24",
    },
  },
  {
    id: 1159,
    attributes: {
      variant_id: "370",
    },
  },
  {
    id: 1104,
    attributes: {
      variant_id: "304",
    },
  },
  {
    id: 1145,
    attributes: {
      variant_id: "362",
    },
  },
  {
    id: 1189,
    attributes: {
      variant_id: "405",
    },
  },
  {
    id: 939,
    attributes: {
      variant_id: "128",
    },
  },
  {
    id: 1158,
    attributes: {
      variant_id: "337",
    },
  },
  {
    id: 1174,
    attributes: {
      variant_id: "356",
    },
  },
  {
    id: 1072,
    attributes: {
      variant_id: "260",
    },
  },
  {
    id: 1698,
    attributes: {
      variant_id: "1212",
    },
  },
  {
    id: 1233,
    attributes: {
      variant_id: "423",
    },
  },
  {
    id: 1149,
    attributes: {
      variant_id: "376",
    },
  },
  {
    id: 1294,
    attributes: {
      variant_id: "486",
    },
  },
  {
    id: 1221,
    attributes: {
      variant_id: "431",
    },
  },
  {
    id: 1169,
    attributes: {
      variant_id: "371",
    },
  },
  {
    id: 1178,
    attributes: {
      variant_id: "382",
    },
  },
  {
    id: 1201,
    attributes: {
      variant_id: "412",
    },
  },
  {
    id: 1182,
    attributes: {
      variant_id: "391",
    },
  },
  {
    id: 1264,
    attributes: {
      variant_id: "425",
    },
  },
  {
    id: 972,
    attributes: {
      variant_id: "205",
    },
  },
  {
    id: 1028,
    attributes: {
      variant_id: "233",
    },
  },
  {
    id: 1181,
    attributes: {
      variant_id: "389",
    },
  },
  {
    id: 1263,
    attributes: {
      variant_id: "435",
    },
  },
  {
    id: 1253,
    attributes: {
      variant_id: "421",
    },
  },
  {
    id: 1245,
    attributes: {
      variant_id: "442",
    },
  },
  {
    id: 1375,
    attributes: {
      variant_id: "589",
    },
  },
  {
    id: 1240,
    attributes: {
      variant_id: "444",
    },
  },
  {
    id: 1258,
    attributes: {
      variant_id: "470",
    },
  },
  {
    id: 1376,
    attributes: {
      variant_id: "572",
    },
  },
  {
    id: 1313,
    attributes: {
      variant_id: "526",
    },
  },
  {
    id: 1136,
    attributes: {
      variant_id: "349",
    },
  },
  {
    id: 1310,
    attributes: {
      variant_id: "507",
    },
  },
  {
    id: 1224,
    attributes: {
      variant_id: "438",
    },
  },
  {
    id: 1306,
    attributes: {
      variant_id: "513",
    },
  },
  {
    id: 1002,
    attributes: {
      variant_id: "189",
    },
  },
  {
    id: 1366,
    attributes: {
      variant_id: "554",
    },
  },
  {
    id: 825,
    attributes: {
      variant_id: "39",
    },
  },
  {
    id: 831,
    attributes: {
      variant_id: "31",
    },
  },
  {
    id: 892,
    attributes: {
      variant_id: "22",
    },
  },
  {
    id: 1152,
    attributes: {
      variant_id: "372",
    },
  },
  {
    id: 1794,
    attributes: {
      variant_id: "1242",
    },
  },
  {
    id: 1573,
    attributes: {
      variant_id: "1040",
    },
  },
  {
    id: 1042,
    attributes: {
      variant_id: "255",
    },
  },
  {
    id: 1297,
    attributes: {
      variant_id: "488",
    },
  },
  {
    id: 1350,
    attributes: {
      variant_id: "565",
    },
  },
  {
    id: 1360,
    attributes: {
      variant_id: "567",
    },
  },
  {
    id: 1274,
    attributes: {
      variant_id: "476",
    },
  },
  {
    id: 1311,
    attributes: {
      variant_id: "514",
    },
  },
  {
    id: 1292,
    attributes: {
      variant_id: "483",
    },
  },
  {
    id: 1357,
    attributes: {
      variant_id: "592",
    },
  },
  {
    id: 1016,
    attributes: {
      variant_id: "209",
    },
  },
  {
    id: 1847,
    attributes: {
      variant_id: "1367",
    },
  },
  {
    id: 1226,
    attributes: {
      variant_id: "439",
    },
  },
  {
    id: 1344,
    attributes: {
      variant_id: "535",
    },
  },
  {
    id: 1288,
    attributes: {
      variant_id: "498",
    },
  },
  {
    id: 1207,
    attributes: {
      variant_id: "399",
    },
  },
  {
    id: 1386,
    attributes: {
      variant_id: "607",
    },
  },
  {
    id: 1316,
    attributes: {
      variant_id: "532",
    },
  },
  {
    id: 1559,
    attributes: {
      variant_id: "1054",
    },
  },
  {
    id: 944,
    attributes: {
      variant_id: "142",
    },
  },
  {
    id: 1812,
    attributes: {
      variant_id: "1258",
    },
  },
  {
    id: 1323,
    attributes: {
      variant_id: "523",
    },
  },
  {
    id: 1280,
    attributes: {
      variant_id: "484",
    },
  },
  {
    id: 1393,
    attributes: {
      variant_id: "558",
    },
  },
  {
    id: 1232,
    attributes: {
      variant_id: "453",
    },
  },
  {
    id: 1217,
    attributes: {
      variant_id: "417",
    },
  },
  {
    id: 1392,
    attributes: {
      variant_id: "573",
    },
  },
  {
    id: 1273,
    attributes: {
      variant_id: "478",
    },
  },
  {
    id: 1276,
    attributes: {
      variant_id: "464",
    },
  },
  {
    id: 1012,
    attributes: {
      variant_id: "143",
    },
  },
  {
    id: 1183,
    attributes: {
      variant_id: "388",
    },
  },
  {
    id: 1372,
    attributes: {
      variant_id: "577",
    },
  },
  {
    id: 1307,
    attributes: {
      variant_id: "515",
    },
  },
  {
    id: 1406,
    attributes: {
      variant_id: "610",
    },
  },
  {
    id: 1318,
    attributes: {
      variant_id: "524",
    },
  },
  {
    id: 1585,
    attributes: {
      variant_id: "1089",
    },
  },
  {
    id: 1591,
    attributes: {
      variant_id: "1110",
    },
  },
  {
    id: 1578,
    attributes: {
      variant_id: "1092",
    },
  },
  {
    id: 996,
    attributes: {
      variant_id: "184",
    },
  },
  {
    id: 1356,
    attributes: {
      variant_id: "590",
    },
  },
  {
    id: 1528,
    attributes: {
      variant_id: "1063",
    },
  },
  {
    id: 1605,
    attributes: {
      variant_id: "1126",
    },
  },
  {
    id: 1616,
    attributes: {
      variant_id: "1131",
    },
  },
  {
    id: 1588,
    attributes: {
      variant_id: "1106",
    },
  },
  {
    id: 1660,
    attributes: {
      variant_id: null,
    },
  },
  {
    id: 1631,
    attributes: {
      variant_id: "1150",
    },
  },
  {
    id: 1705,
    attributes: {
      variant_id: "1209",
    },
  },
  {
    id: 1558,
    attributes: {
      variant_id: "1066",
    },
  },
  {
    id: 1408,
    attributes: {
      variant_id: "608",
    },
  },
  {
    id: 1320,
    attributes: {
      variant_id: "525",
    },
  },
  {
    id: 1539,
    attributes: {
      variant_id: "1051",
    },
  },
  {
    id: 1569,
    attributes: {
      variant_id: "1076",
    },
  },
  {
    id: 1609,
    attributes: {
      variant_id: "1124",
    },
  },
  {
    id: 1013,
    attributes: {
      variant_id: "235",
    },
  },
  {
    id: 1410,
    attributes: {
      variant_id: "614",
    },
  },
  {
    id: 917,
    attributes: {
      variant_id: "107",
    },
  },
  {
    id: 1407,
    attributes: {
      variant_id: "609",
    },
  },
  {
    id: 1530,
    attributes: {
      variant_id: "1038",
    },
  },
  {
    id: 1328,
    attributes: {
      variant_id: "544",
    },
  },
  {
    id: 1358,
    attributes: {
      variant_id: "569",
    },
  },
  {
    id: 1412,
    attributes: {
      variant_id: "617",
    },
  },
  {
    id: 1601,
    attributes: {
      variant_id: "1116",
    },
  },
  {
    id: 1533,
    attributes: {
      variant_id: "1030",
    },
  },
  {
    id: 1575,
    attributes: {
      variant_id: "1105",
    },
  },
  {
    id: 1367,
    attributes: {
      variant_id: "585",
    },
  },
  {
    id: 1537,
    attributes: {
      variant_id: "1064",
    },
  },
  {
    id: 1579,
    attributes: {
      variant_id: "1097",
    },
  },
  {
    id: 1555,
    attributes: {
      variant_id: "1087",
    },
  },
  {
    id: 1651,
    attributes: {
      variant_id: null,
    },
  },
  {
    id: 1676,
    attributes: {
      variant_id: "1218",
    },
  },
  {
    id: 1709,
    attributes: {
      variant_id: "1223",
    },
  },
  {
    id: 1661,
    attributes: {
      variant_id: null,
    },
  },
  {
    id: 952,
    attributes: {
      variant_id: "148",
    },
  },
  {
    id: 1394,
    attributes: {
      variant_id: "545",
    },
  },
  {
    id: 1363,
    attributes: {
      variant_id: "593",
    },
  },
  {
    id: 1607,
    attributes: {
      variant_id: "1120",
    },
  },
  {
    id: 1379,
    attributes: {
      variant_id: "561",
    },
  },
  {
    id: 1568,
    attributes: {
      variant_id: "1069",
    },
  },
  {
    id: 1523,
    attributes: {
      variant_id: "1074",
    },
  },
  {
    id: 1529,
    attributes: {
      variant_id: "1033",
    },
  },
  {
    id: 1602,
    attributes: {
      variant_id: "1121",
    },
  },
  {
    id: 820,
    attributes: {
      variant_id: "15",
    },
  },
  {
    id: 852,
    attributes: {
      variant_id: "85",
    },
  },
  {
    id: 1560,
    attributes: {
      variant_id: "1049",
    },
  },
  {
    id: 1557,
    attributes: {
      variant_id: "1085",
    },
  },
  {
    id: 1524,
    attributes: {
      variant_id: "1065",
    },
  },
  {
    id: 1608,
    attributes: {
      variant_id: "1112",
    },
  },
  {
    id: 1704,
    attributes: {
      variant_id: "1198",
    },
  },
  {
    id: 1637,
    attributes: {
      variant_id: "1169",
    },
  },
  {
    id: 1628,
    attributes: {
      variant_id: "1157",
    },
  },
  {
    id: 1515,
    attributes: {
      variant_id: "1026",
    },
  },
  {
    id: 1677,
    attributes: {
      variant_id: "1210",
    },
  },
  {
    id: 1592,
    attributes: {
      variant_id: "1061",
    },
  },
  {
    id: 1658,
    attributes: {
      variant_id: "1178",
    },
  },
  {
    id: 1519,
    attributes: {
      variant_id: "1025",
    },
  },
  {
    id: 1693,
    attributes: {
      variant_id: "1214",
    },
  },
  {
    id: 1797,
    attributes: {
      variant_id: "1240",
    },
  },
  {
    id: 1632,
    attributes: {
      variant_id: "1166",
    },
  },
  {
    id: 1399,
    attributes: {
      variant_id: "587",
    },
  },
  {
    id: 1563,
    attributes: {
      variant_id: "1080",
    },
  },
  {
    id: 1667,
    attributes: {
      variant_id: "1136",
    },
  },
  {
    id: 1657,
    attributes: {
      variant_id: null,
    },
  },
  {
    id: 1338,
    attributes: {
      variant_id: "552",
    },
  },
  {
    id: 1775,
    attributes: {
      variant_id: "1290",
    },
  },
  {
    id: 1811,
    attributes: {
      variant_id: "1239",
    },
  },
  {
    id: 1701,
    attributes: {
      variant_id: null,
    },
  },
  {
    id: 1654,
    attributes: {
      variant_id: "1194",
    },
  },
  {
    id: 1597,
    attributes: {
      variant_id: "1102",
    },
  },
  {
    id: 1721,
    attributes: {
      variant_id: "1235",
    },
  },
  {
    id: 1540,
    attributes: {
      variant_id: "1046",
    },
  },
  {
    id: 1710,
    attributes: {
      variant_id: "1200",
    },
  },
  {
    id: 1681,
    attributes: {
      variant_id: null,
    },
  },
  {
    id: 1666,
    attributes: {
      variant_id: "1191",
    },
  },
  {
    id: 1729,
    attributes: {
      variant_id: "1262",
    },
  },
  {
    id: 1599,
    attributes: {
      variant_id: "1111",
    },
  },
  {
    id: 1756,
    attributes: {
      variant_id: "1254",
    },
  },
  {
    id: 1600,
    attributes: {
      variant_id: "1095",
    },
  },
  {
    id: 1703,
    attributes: {
      variant_id: "1199",
    },
  },
  {
    id: 1755,
    attributes: {
      variant_id: "1294",
    },
  },
  {
    id: 1809,
    attributes: {
      variant_id: "1249",
    },
  },
  {
    id: 1787,
    attributes: {
      variant_id: "1327",
    },
  },
  {
    id: 1727,
    attributes: {
      variant_id: "1281",
    },
  },
  {
    id: 1647,
    attributes: {
      variant_id: "1143",
    },
  },
  {
    id: 1596,
    attributes: {
      variant_id: "1107",
    },
  },
  {
    id: 1702,
    attributes: {
      variant_id: "1215",
    },
  },
  {
    id: 1692,
    attributes: {
      variant_id: "1203",
    },
  },
  {
    id: 1803,
    attributes: {
      variant_id: "1243",
    },
  },
  {
    id: 1638,
    attributes: {
      variant_id: "1164",
    },
  },
  {
    id: 1734,
    attributes: {
      variant_id: "1272",
    },
  },
  {
    id: 1741,
    attributes: {
      variant_id: "1273",
    },
  },
  {
    id: 1675,
    attributes: {
      variant_id: "536",
    },
  },
  {
    id: 1611,
    attributes: {
      variant_id: "1118",
    },
  },
  {
    id: 1707,
    attributes: {
      variant_id: "1182",
    },
  },
  {
    id: 1732,
    attributes: {
      variant_id: null,
    },
  },
  {
    id: 1630,
    attributes: {
      variant_id: "1163",
    },
  },
  {
    id: 1744,
    attributes: {
      variant_id: "1280",
    },
  },
  {
    id: 836,
    attributes: {
      variant_id: "25",
    },
  },
  {
    id: 1740,
    attributes: {
      variant_id: "1237",
    },
  },
  {
    id: 1788,
    attributes: {
      variant_id: "1318",
    },
  },
  {
    id: 1687,
    attributes: {
      variant_id: "1196",
    },
  },
  {
    id: 1785,
    attributes: {
      variant_id: "1316",
    },
  },
  {
    id: 1845,
    attributes: {
      variant_id: "1401",
    },
  },
  {
    id: 1706,
    attributes: {
      variant_id: "1225",
    },
  },
  {
    id: 1851,
    attributes: {
      variant_id: "1377",
    },
  },
  {
    id: 1745,
    attributes: {
      variant_id: "1234",
    },
  },
  {
    id: 1714,
    attributes: {
      variant_id: "1228",
    },
  },
  {
    id: 1796,
    attributes: {
      variant_id: "1325",
    },
  },
  {
    id: 1679,
    attributes: {
      variant_id: "1192",
    },
  },
  {
    id: 1762,
    attributes: {
      variant_id: "1306",
    },
  },
  {
    id: 1635,
    attributes: {
      variant_id: "1147",
    },
  },
  {
    id: 1771,
    attributes: {
      variant_id: "1291",
    },
  },
  {
    id: 1685,
    attributes: {
      variant_id: "1186",
    },
  },
  {
    id: 1691,
    attributes: {
      variant_id: null,
    },
  },
  {
    id: 1737,
    attributes: {
      variant_id: "1266",
    },
  },
  {
    id: 908,
    attributes: {
      variant_id: "92",
    },
  },
  {
    id: 1696,
    attributes: {
      variant_id: "1227",
    },
  },
  {
    id: 1119,
    attributes: {
      variant_id: "315",
    },
  },
  {
    id: 1340,
    attributes: {
      variant_id: "541",
    },
  },
  {
    id: 1697,
    attributes: {
      variant_id: "1221",
    },
  },
  {
    id: 1915,
    attributes: {
      variant_id: "1434",
    },
  },
  {
    id: 1688,
    attributes: {
      variant_id: "1204",
    },
  },
  {
    id: 1759,
    attributes: {
      variant_id: "1302",
    },
  },
  {
    id: 1864,
    attributes: {
      variant_id: "1415",
    },
  },
  {
    id: 1819,
    attributes: {
      variant_id: "1356",
    },
  },
  {
    id: 1105,
    attributes: {
      variant_id: "305",
    },
  },
  {
    id: 1952,
    attributes: {
      variant_id: "1476",
    },
  },
  {
    id: 1730,
    attributes: {
      variant_id: "1257",
    },
  },
  {
    id: 1866,
    attributes: {
      variant_id: "1406",
    },
  },
  {
    id: 1780,
    attributes: {
      variant_id: "1283",
    },
  },
  {
    id: 1778,
    attributes: {
      variant_id: "1286",
    },
  },
  {
    id: 1865,
    attributes: {
      variant_id: "1400",
    },
  },
  {
    id: 1773,
    attributes: {
      variant_id: "1300",
    },
  },
  {
    id: 1848,
    attributes: {
      variant_id: "1362",
    },
  },
  {
    id: 1800,
    attributes: {
      variant_id: "1298",
    },
  },
  {
    id: 1855,
    attributes: {
      variant_id: "1358",
    },
  },
  {
    id: 1359,
    attributes: {
      variant_id: "571",
    },
  },
  {
    id: 1728,
    attributes: {
      variant_id: "1251",
    },
  },
  {
    id: 1894,
    attributes: {
      variant_id: "1425",
    },
  },
  {
    id: 1820,
    attributes: {
      variant_id: "1357",
    },
  },
  {
    id: 1768,
    attributes: {
      variant_id: "1317",
    },
  },
  {
    id: 1259,
    attributes: {
      variant_id: "461",
    },
  },
  {
    id: 1939,
    attributes: {
      variant_id: "1466",
    },
  },
  {
    id: 1735,
    attributes: {
      variant_id: "1260",
    },
  },
  {
    id: 1914,
    attributes: {
      variant_id: "1444",
    },
  },
  {
    id: 1068,
    attributes: {
      variant_id: "261",
    },
  },
  {
    id: 1857,
    attributes: {
      variant_id: "1393",
    },
  },
  {
    id: 1887,
    attributes: {
      variant_id: "1428",
    },
  },
  {
    id: 1923,
    attributes: {
      variant_id: "1443",
    },
  },
  {
    id: 1861,
    attributes: {
      variant_id: "1383",
    },
  },
  {
    id: 1774,
    attributes: {
      variant_id: "1295",
    },
  },
  {
    id: 1875,
    attributes: {
      variant_id: "1410",
    },
  },
  {
    id: 1833,
    attributes: {
      variant_id: "1344",
    },
  },
  {
    id: 1736,
    attributes: {
      variant_id: "1275",
    },
  },
  {
    id: 1237,
    attributes: {
      variant_id: "458",
    },
  },
  {
    id: 1009,
    attributes: {
      variant_id: "197",
    },
  },
  {
    id: 1234,
    attributes: {
      variant_id: "459",
    },
  },
  {
    id: 1779,
    attributes: {
      variant_id: "1245",
    },
  },
  {
    id: 1843,
    attributes: {
      variant_id: "1396",
    },
  },
  {
    id: 1941,
    attributes: {
      variant_id: "1474",
    },
  },
  {
    id: 1351,
    attributes: {
      variant_id: "591",
    },
  },
  {
    id: 1844,
    attributes: {
      variant_id: "1395",
    },
  },
  {
    id: 1943,
    attributes: {
      variant_id: "1453",
    },
  },
  {
    id: 1918,
    attributes: {
      variant_id: "1439",
    },
  },
  {
    id: 999,
    attributes: {
      variant_id: "145",
    },
  },
  {
    id: 1842,
    attributes: {
      variant_id: "1394",
    },
  },
  {
    id: 1403,
    attributes: {
      variant_id: "613",
    },
  },
  {
    id: 1954,
    attributes: {
      variant_id: "1449",
    },
  },
  {
    id: 1869,
    attributes: {
      variant_id: "1375",
    },
  },
  {
    id: 1956,
    attributes: {
      variant_id: "1465",
    },
  },
  {
    id: 1314,
    attributes: {
      variant_id: "527",
    },
  },
  {
    id: 1798,
    attributes: {
      variant_id: "1326",
    },
  },
  {
    id: 1958,
    attributes: {
      variant_id: "1460",
    },
  },
  {
    id: 1932,
    attributes: {
      variant_id: "1470",
    },
  },
  {
    id: 1895,
    attributes: {
      variant_id: "1426",
    },
  },
  {
    id: 1896,
    attributes: {
      variant_id: "1427",
    },
  },
  {
    id: 1884,
    attributes: {
      variant_id: "1399",
    },
  },
  {
    id: 1834,
    attributes: {
      variant_id: "1348",
    },
  },
  {
    id: 1885,
    attributes: {
      variant_id: "1417",
    },
  },
  {
    id: 1878,
    attributes: {
      variant_id: "1409",
    },
  },
  {
    id: 1186,
    attributes: {
      variant_id: "390",
    },
  },
  {
    id: 1897,
    attributes: {
      variant_id: "1419",
    },
  },
  {
    id: 1218,
    attributes: {
      variant_id: "416",
    },
  },
  {
    id: 1244,
    attributes: {
      variant_id: "466",
    },
  },
  {
    id: 1937,
    attributes: {
      variant_id: "1462",
    },
  },
  {
    id: 1262,
    attributes: {
      variant_id: "473",
    },
  },
  {
    id: 1934,
    attributes: {
      variant_id: "1463",
    },
  },
  {
    id: 818,
    attributes: {
      variant_id: "12",
    },
  },
  {
    id: 1830,
    attributes: {
      variant_id: "1352",
    },
  },
  {
    id: 1191,
    attributes: {
      variant_id: "409",
    },
  },
  {
    id: 1902,
    attributes: {
      variant_id: "1366",
    },
  },
  {
    id: 1926,
    attributes: {
      variant_id: "1458",
    },
  },
  {
    id: 974,
    attributes: {
      variant_id: "188",
    },
  },
  {
    id: 1011,
    attributes: {
      variant_id: "133",
    },
  },
  {
    id: 1625,
    attributes: {
      variant_id: "1129",
    },
  },
  {
    id: 1206,
    attributes: {
      variant_id: "398",
    },
  },
  {
    id: 945,
    attributes: {
      variant_id: "121",
    },
  },
  {
    id: 1862,
    attributes: {
      variant_id: "1340",
    },
  },
  {
    id: 882,
    attributes: {
      variant_id: "26",
    },
  },
  {
    id: 1380,
    attributes: {
      variant_id: "595",
    },
  },
  {
    id: 1836,
    attributes: {
      variant_id: "1347",
    },
  },
  {
    id: 1789,
    attributes: {
      variant_id: "1250",
    },
  },
  {
    id: 1583,
    attributes: {
      variant_id: "1068",
    },
  },
  {
    id: 1246,
    attributes: {
      variant_id: "450",
    },
  },
  {
    id: 1014,
    attributes: {
      variant_id: "217",
    },
  },
  {
    id: 1929,
    attributes: {
      variant_id: "1459",
    },
  },
  {
    id: 1731,
    attributes: {
      variant_id: "1264",
    },
  },
  {
    id: 1916,
    attributes: {
      variant_id: "1441",
    },
  },
  {
    id: 1910,
    attributes: {
      variant_id: "1370",
    },
  },
  {
    id: 1286,
    attributes: {
      variant_id: "471",
    },
  },
  {
    id: 1027,
    attributes: {
      variant_id: "208",
    },
  },
  {
    id: 1904,
    attributes: {
      variant_id: "1413",
    },
  },
  {
    id: 1860,
    attributes: {
      variant_id: "1385",
    },
  },
  {
    id: 1060,
    attributes: {
      variant_id: "240",
    },
  },
  {
    id: 1387,
    attributes: {
      variant_id: "602",
    },
  },
  {
    id: 1114,
    attributes: {
      variant_id: "313",
    },
  },
  {
    id: 837,
    attributes: {
      variant_id: "16",
    },
  },
  {
    id: 1109,
    attributes: {
      variant_id: "312",
    },
  },
  {
    id: 1792,
    attributes: {
      variant_id: "1259",
    },
  },
  {
    id: 1930,
    attributes: {
      variant_id: "1455",
    },
  },
  {
    id: 875,
    attributes: {
      variant_id: "80",
    },
  },
  {
    id: 1166,
    attributes: {
      variant_id: "380",
    },
  },
  {
    id: 1388,
    attributes: {
      variant_id: "597",
    },
  },
  {
    id: 1018,
    attributes: {
      variant_id: "211",
    },
  },
  {
    id: 1289,
    attributes: {
      variant_id: "503",
    },
  },
  {
    id: 1899,
    attributes: {
      variant_id: "1418",
    },
  },
  {
    id: 1404,
    attributes: {
      variant_id: "616",
    },
  },
  {
    id: 1612,
    attributes: {
      variant_id: "1103",
    },
  },
  {
    id: 1029,
    attributes: {
      variant_id: "243",
    },
  },
  {
    id: 1823,
    attributes: {
      variant_id: "1365",
    },
  },
  {
    id: 1096,
    attributes: {
      variant_id: "296",
    },
  },
  {
    id: 1383,
    attributes: {
      variant_id: "603",
    },
  },
  {
    id: 1077,
    attributes: {
      variant_id: "275",
    },
  },
  {
    id: 1281,
    attributes: {
      variant_id: "502",
    },
  },
  {
    id: 1205,
    attributes: {
      variant_id: "367",
    },
  },
  {
    id: 915,
    attributes: {
      variant_id: "125",
    },
  },
  {
    id: 1766,
    attributes: {
      variant_id: "1309",
    },
  },
  {
    id: 1810,
    attributes: {
      variant_id: "1312",
    },
  },
  {
    id: 848,
    attributes: {
      variant_id: "61",
    },
  },
  {
    id: 1157,
    attributes: {
      variant_id: "375",
    },
  },
  {
    id: 967,
    attributes: {
      variant_id: "178",
    },
  },
  {
    id: 896,
    attributes: {
      variant_id: "47",
    },
  },
  {
    id: 1126,
    attributes: {
      variant_id: "346",
    },
  },
  {
    id: 1341,
    attributes: {
      variant_id: "538",
    },
  },
  {
    id: 840,
    attributes: {
      variant_id: "64",
    },
  },
  {
    id: 1584,
    attributes: {
      variant_id: "1067",
    },
  },
  {
    id: 1664,
    attributes: {
      variant_id: "1188",
    },
  },
  {
    id: 1325,
    attributes: {
      variant_id: "543",
    },
  },
  {
    id: 1603,
    attributes: {
      variant_id: "1123",
    },
  },
  {
    id: 933,
    attributes: {
      variant_id: "127",
    },
  },
  {
    id: 970,
    attributes: {
      variant_id: "176",
    },
  },
  {
    id: 870,
    attributes: {
      variant_id: "59",
    },
  },
  {
    id: 1291,
    attributes: {
      variant_id: "508",
    },
  },
  {
    id: 1265,
    attributes: {
      variant_id: "465",
    },
  },
  {
    id: 1006,
    attributes: {
      variant_id: "202",
    },
  },
  {
    id: 1856,
    attributes: {
      variant_id: "1378",
    },
  },
  {
    id: 868,
    attributes: {
      variant_id: "56",
    },
  },
  {
    id: 1526,
    attributes: {
      variant_id: "1062",
    },
  },
  {
    id: 1242,
    attributes: {
      variant_id: "448",
    },
  },
  {
    id: 1202,
    attributes: {
      variant_id: "352",
    },
  },
  {
    id: 1283,
    attributes: {
      variant_id: "505",
    },
  },
  {
    id: 961,
    attributes: {
      variant_id: "164",
    },
  },
  {
    id: 1275,
    attributes: {
      variant_id: "447",
    },
  },
  {
    id: 1817,
    attributes: {
      variant_id: "1329",
    },
  },
  {
    id: 1123,
    attributes: {
      variant_id: "319",
    },
  },
  {
    id: 938,
    attributes: {
      variant_id: "129",
    },
  },
  {
    id: 1912,
    attributes: {
      variant_id: "1437",
    },
  },
  {
    id: 839,
    attributes: {
      variant_id: "73",
    },
  },
  {
    id: 1883,
    attributes: {
      variant_id: "1363",
    },
  },
  {
    id: 1656,
    attributes: {
      variant_id: "1149",
    },
  },
  {
    id: 943,
    attributes: {
      variant_id: "135",
    },
  },
  {
    id: 1863,
    attributes: {
      variant_id: "1345",
    },
  },
  {
    id: 1143,
    attributes: {
      variant_id: "340",
    },
  },
  {
    id: 1349,
    attributes: {
      variant_id: "522",
    },
  },
  {
    id: 1301,
    attributes: {
      variant_id: "506",
    },
  },
  {
    id: 864,
    attributes: {
      variant_id: "88",
    },
  },
  {
    id: 989,
    attributes: {
      variant_id: "171",
    },
  },
  {
    id: 1776,
    attributes: {
      variant_id: "1268",
    },
  },
  {
    id: 1332,
    attributes: {
      variant_id: "539",
    },
  },
  {
    id: 1577,
    attributes: {
      variant_id: "1114",
    },
  },
  {
    id: 1953,
    attributes: {
      variant_id: "1446",
    },
  },
  {
    id: 1565,
    attributes: {
      variant_id: "1119",
    },
  },
  {
    id: 1124,
    attributes: {
      variant_id: "355",
    },
  },
  {
    id: 1767,
    attributes: {
      variant_id: "1310",
    },
  },
  {
    id: 1293,
    attributes: {
      variant_id: "492",
    },
  },
  {
    id: 1852,
    attributes: {
      variant_id: "1354",
    },
  },
  {
    id: 995,
    attributes: {
      variant_id: "204",
    },
  },
  {
    id: 1924,
    attributes: {
      variant_id: "1432",
    },
  },
  {
    id: 1641,
    attributes: {
      variant_id: "1137",
    },
  },
  {
    id: 1933,
    attributes: {
      variant_id: "1435",
    },
  },
  {
    id: 1400,
    attributes: {
      variant_id: "576",
    },
  },
  {
    id: 1900,
    attributes: {
      variant_id: "1342",
    },
  },
  {
    id: 815,
    attributes: {
      variant_id: "1",
    },
  },
  {
    id: 918,
    attributes: {
      variant_id: "109",
    },
  },
  {
    id: 1385,
    attributes: {
      variant_id: "596",
    },
  },
  {
    id: 1713,
    attributes: {
      variant_id: "1263",
    },
  },
  {
    id: 1782,
    attributes: {
      variant_id: "1324",
    },
  },
  {
    id: 1342,
    attributes: {
      variant_id: "540",
    },
  },
  {
    id: 1858,
    attributes: {
      variant_id: "1380",
    },
  },
  {
    id: 1621,
    attributes: {
      variant_id: "1144",
    },
  },
  {
    id: 1613,
    attributes: {
      variant_id: "1132",
    },
  },
  {
    id: 1287,
    attributes: {
      variant_id: "494",
    },
  },
  {
    id: 1652,
    attributes: {
      variant_id: "1152",
    },
  },
  {
    id: 1886,
    attributes: {
      variant_id: "1371",
    },
  },
  {
    id: 1791,
    attributes: {
      variant_id: "1255",
    },
  },
  {
    id: 982,
    attributes: {
      variant_id: "177",
    },
  },
  {
    id: 1903,
    attributes: {
      variant_id: "1408",
    },
  },
  {
    id: 1944,
    attributes: {
      variant_id: "1445",
    },
  },
  {
    id: 1117,
    attributes: {
      variant_id: "324",
    },
  },
  {
    id: 1790,
    attributes: {
      variant_id: "1319",
    },
  },
  {
    id: 1686,
    attributes: {
      variant_id: "1176",
    },
  },
  {
    id: 1384,
    attributes: {
      variant_id: "599",
    },
  },
  {
    id: 1304,
    attributes: {
      variant_id: "511",
    },
  },
  {
    id: 881,
    attributes: {
      variant_id: "17",
    },
  },
  {
    id: 891,
    attributes: {
      variant_id: "50",
    },
  },
  {
    id: 1160,
    attributes: {
      variant_id: "327",
    },
  },
  {
    id: 1892,
    attributes: {
      variant_id: "1414",
    },
  },
  {
    id: 1156,
    attributes: {
      variant_id: "387",
    },
  },
  {
    id: 1010,
    attributes: {
      variant_id: "182",
    },
  },
  {
    id: 1832,
    attributes: {
      variant_id: "1360",
    },
  },
  {
    id: 1279,
    attributes: {
      variant_id: "499",
    },
  },
  {
    id: 1758,
    attributes: {
      variant_id: "1308",
    },
  },
  {
    id: 1840,
    attributes: {
      variant_id: "1332",
    },
  },
  {
    id: 1846,
    attributes: {
      variant_id: "1398",
    },
  },
  {
    id: 843,
    attributes: {
      variant_id: "49",
    },
  },
  {
    id: 827,
    attributes: {
      variant_id: "34",
    },
  },
  {
    id: 1199,
    attributes: {
      variant_id: "415",
    },
  },
  {
    id: 1950,
    attributes: {
      variant_id: "1472",
    },
  },
  {
    id: 1951,
    attributes: {
      variant_id: "1469",
    },
  },
  {
    id: 814,
    attributes: {
      variant_id: "18",
    },
  },
  {
    id: 1272,
    attributes: {
      variant_id: "467",
    },
  },
  {
    id: 1053,
    attributes: {
      variant_id: "262",
    },
  },
  {
    id: 1633,
    attributes: {
      variant_id: "1153",
    },
  },
  {
    id: 1121,
    attributes: {
      variant_id: "318",
    },
  },
  {
    id: 909,
    attributes: {
      variant_id: "99",
    },
  },
  {
    id: 845,
    attributes: {
      variant_id: "33",
    },
  },
  {
    id: 1038,
    attributes: {
      variant_id: "254",
    },
  },
  {
    id: 816,
    attributes: {
      variant_id: "10",
    },
  },
  {
    id: 1257,
    attributes: {
      variant_id: "472",
    },
  },
  {
    id: 1516,
    attributes: {
      variant_id: "1031",
    },
  },
  {
    id: 1021,
    attributes: {
      variant_id: "224",
    },
  },
  {
    id: 1760,
    attributes: {
      variant_id: "1305",
    },
  },
  {
    id: 855,
    attributes: {
      variant_id: "79",
    },
  },
  {
    id: 865,
    attributes: {
      variant_id: "86",
    },
  },
  {
    id: 873,
    attributes: {
      variant_id: "63",
    },
  },
  {
    id: 872,
    attributes: {
      variant_id: "71",
    },
  },
  {
    id: 912,
    attributes: {
      variant_id: "102",
    },
  },
  {
    id: 1936,
    attributes: {
      variant_id: "1471",
    },
  },
  {
    id: 911,
    attributes: {
      variant_id: "105",
    },
  },
  {
    id: 968,
    attributes: {
      variant_id: "174",
    },
  },
  {
    id: 885,
    attributes: {
      variant_id: "9",
    },
  },
  {
    id: 883,
    attributes: {
      variant_id: "5",
    },
  },
  {
    id: 1777,
    attributes: {
      variant_id: "1296",
    },
  },
  {
    id: 1193,
    attributes: {
      variant_id: "408",
    },
  },
  {
    id: 1135,
    attributes: {
      variant_id: "332",
    },
  },
  {
    id: 1333,
    attributes: {
      variant_id: "528",
    },
  },
  {
    id: 1239,
    attributes: {
      variant_id: "456",
    },
  },
  {
    id: 1409,
    attributes: {
      variant_id: "1024",
    },
  },
  {
    id: 1615,
    attributes: {
      variant_id: "1134",
    },
  },
  {
    id: 1132,
    attributes: {
      variant_id: "328",
    },
  },
  {
    id: 1162,
    attributes: {
      variant_id: "351",
    },
  },
  {
    id: 954,
    attributes: {
      variant_id: "198",
    },
  },
  {
    id: 1620,
    attributes: {
      variant_id: "1138",
    },
  },
  {
    id: 1134,
    attributes: {
      variant_id: "350",
    },
  },
  {
    id: 1061,
    attributes: {
      variant_id: "248",
    },
  },
  {
    id: 1295,
    attributes: {
      variant_id: "487",
    },
  },
  {
    id: 1402,
    attributes: {
      variant_id: "612",
    },
  },
  {
    id: 1195,
    attributes: {
      variant_id: "410",
    },
  },
  {
    id: 986,
    attributes: {
      variant_id: "168",
    },
  },
  {
    id: 998,
    attributes: {
      variant_id: "199",
    },
  },
  {
    id: 1572,
    attributes: {
      variant_id: "1094",
    },
  },
  {
    id: 1229,
    attributes: {
      variant_id: "441",
    },
  },
  {
    id: 1815,
    attributes: {
      variant_id: "1337",
    },
  },
  {
    id: 969,
    attributes: {
      variant_id: "162",
    },
  },
  {
    id: 1838,
    attributes: {
      variant_id: "1334",
    },
  },
  {
    id: 1019,
    attributes: {
      variant_id: "210",
    },
  },
  {
    id: 1167,
    attributes: {
      variant_id: "385",
    },
  },
  {
    id: 1312,
    attributes: {
      variant_id: "429",
    },
  },
  {
    id: 1267,
    attributes: {
      variant_id: "480",
    },
  },
  {
    id: 1309,
    attributes: {
      variant_id: "512",
    },
  },
  {
    id: 949,
    attributes: {
      variant_id: "149",
    },
  },
  {
    id: 1074,
    attributes: {
      variant_id: "271",
    },
  },
  {
    id: 979,
    attributes: {
      variant_id: "196",
    },
  },
  {
    id: 1211,
    attributes: {
      variant_id: "395",
    },
  },
  {
    id: 894,
    attributes: {
      variant_id: "44",
    },
  },
  {
    id: 1371,
    attributes: {
      variant_id: "574",
    },
  },
  {
    id: 1754,
    attributes: {
      variant_id: "1315",
    },
  },
  {
    id: 1041,
    attributes: {
      variant_id: "252",
    },
  },
  {
    id: 1081,
    attributes: {
      variant_id: "284",
    },
  },
  {
    id: 1270,
    attributes: {
      variant_id: "474",
    },
  },
  {
    id: 1718,
    attributes: {
      variant_id: "1248",
    },
  },
  {
    id: 1746,
    attributes: {
      variant_id: "1276",
    },
  },
  {
    id: 1008,
    attributes: {
      variant_id: "203",
    },
  },
  {
    id: 907,
    attributes: {
      variant_id: "97",
    },
  },
  {
    id: 1814,
    attributes: {
      variant_id: "1336",
    },
  },
  {
    id: 1368,
    attributes: {
      variant_id: "586",
    },
  },
  {
    id: 1290,
    attributes: {
      variant_id: "497",
    },
  },
  {
    id: 1334,
    attributes: {
      variant_id: "548",
    },
  },
  {
    id: 1085,
    attributes: {
      variant_id: "283",
    },
  },
  {
    id: 1284,
    attributes: {
      variant_id: "495",
    },
  },
  {
    id: 991,
    attributes: {
      variant_id: "195",
    },
  },
  {
    id: 1566,
    attributes: {
      variant_id: "1078",
    },
  },
  {
    id: 1177,
    attributes: {
      variant_id: "357",
    },
  },
];
const arr = [];
const engine = bikeSpec.map((item) => {
  const filter = strapiVariant.filter(
    (i) => i.attributes.variant_id == item.bike_id
  );

  if (filter.length) {
    const body = {
      id: filter[0].id,
      clutchandgear: {
        gear_box: item.gear_box,
        transmission: item.transmission,
        clutch: item.clutch,
      },
    };
    arr.push(body);
  }
});

fs.writeFile("users.json", JSON.stringify(arr), (err) => {
  // Checking for errors
  if (err) throw err;

  console.log("Done writing"); // Success
});
