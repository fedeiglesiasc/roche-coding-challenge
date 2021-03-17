module.exports.data = async (event, context) => {
  const data = [
    {
      patientId: "5cc17bd0a75e3173228f1684",
      practitionerId: "2588ac7f57fd9b49",
      name: "Wilson",
      surname: "Wade",
      fullname: "Wilson Wade",
      dateOfBirth: "2005-11-13T04:11:36+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 13,
        ideal: {
          from: 65,
          to: 103,
        },
        high: 247,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 85,
          date: "2015-06-12T00:49:50+00:00",
        },
        {
          glucose: 77,
          date: "2015-06-12T07:09:03+00:00",
        },
        {
          glucose: 58,
          date: "2015-06-12T11:23:15+00:00",
        },
        {
          glucose: 110,
          date: "2015-06-12T16:00:58+00:00",
        },
        {
          glucose: 97,
          date: "2015-06-12T19:35:01+00:00",
        },
        {
          glucose: 142,
          date: "2015-06-12T21:15:50+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0a5283537f6c20a4a",
      practitionerId: "a7e46537714eca83",
      name: "Bridges",
      surname: "Odom",
      fullname: "Bridges Odom",
      dateOfBirth: "1995-12-05T10:16:50+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 30,
        ideal: {
          from: 75,
          to: 95,
        },
        high: 248,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 133,
          date: "2015-07-26T00:04:42+00:00",
        },
        {
          glucose: 112,
          date: "2015-07-26T07:40:31+00:00",
        },
        {
          glucose: 98,
          date: "2015-07-26T11:59:22+00:00",
        },
        {
          glucose: 64,
          date: "2015-07-26T13:37:18+00:00",
        },
        {
          glucose: 52,
          date: "2015-07-26T15:14:56+00:00",
        },
        {
          glucose: 129,
          date: "2015-07-26T18:11:53+00:00",
        },
        {
          glucose: 36,
          date: "2015-07-26T22:08:19+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0cfa5d13313ff7592",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Cross",
      surname: "Witt",
      fullname: "Cross Witt",
      dateOfBirth: "1986-04-26T01:47:47+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 27,
        ideal: {
          from: 74,
          to: 115,
        },
        high: 244,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 0,
          date: "2014-04-09T00:38:09+00:00",
        },
        {
          glucose: 3,
          date: "2014-04-09T11:17:08+00:00",
        },
        {
          glucose: 57,
          date: "2014-04-09T13:25:15+00:00",
        },
        {
          glucose: 21,
          date: "2014-04-09T14:19:36+00:00",
        },
        {
          glucose: 3,
          date: "2014-04-09T18:31:37+00:00",
        },
        {
          glucose: 74,
          date: "2014-04-09T21:31:22+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd046e28872b47a1ade",
      practitionerId: "a65e5ee7e8abae6d",
      name: "Simone",
      surname: "Yates",
      fullname: "Simone Yates",
      dateOfBirth: "2005-12-03T08:31:10+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 21,
        ideal: {
          from: 90,
          to: 116,
        },
        high: 245,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 137,
          date: "2014-07-12T00:30:31+00:00",
        },
        {
          glucose: 91,
          date: "2014-07-12T06:00:45+00:00",
        },
        {
          glucose: 133,
          date: "2014-07-12T11:37:48+00:00",
        },
        {
          glucose: 103,
          date: "2014-07-12T12:11:38+00:00",
        },
        {
          glucose: 155,
          date: "2014-07-12T14:34:48+00:00",
        },
        {
          glucose: 0,
          date: "2014-07-12T18:28:30+00:00",
        },
        {
          glucose: 12,
          date: "2014-07-12T21:50:41+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd080dc2d8b64ffc7fc",
      practitionerId: "eb6f5c176b7ddc6d",
      name: "Hernandez",
      surname: "Burris",
      fullname: "Hernandez Burris",
      dateOfBirth: "2006-12-31T15:29:59+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 47,
        ideal: {
          from: 63,
          to: 94,
        },
        high: 241,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 56,
          date: "2015-03-25T00:23:37+00:00",
        },
        {
          glucose: 56,
          date: "2015-03-25T11:26:57+00:00",
        },
        {
          glucose: 0,
          date: "2015-03-25T13:04:13+00:00",
        },
        {
          glucose: 24,
          date: "2015-03-25T14:00:05+00:00",
        },
        {
          glucose: 132,
          date: "2015-03-25T18:40:59+00:00",
        },
        {
          glucose: 87,
          date: "2015-03-25T21:48:10+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0248b8dd4f6f49f5b",
      practitionerId: "38e8ee68526258f2",
      name: "Velez",
      surname: "Simmons",
      fullname: "Velez Simmons",
      dateOfBirth: "1999-06-06T06:42:58+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 10,
        ideal: {
          from: 80,
          to: 94,
        },
        high: 247,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 57,
          date: "2018-01-19T00:19:04+00:00",
        },
        {
          glucose: 62,
          date: "2018-01-19T06:53:15+00:00",
        },
        {
          glucose: 105,
          date: "2018-01-19T09:11:00+00:00",
        },
        {
          glucose: 115,
          date: "2018-01-19T13:54:00+00:00",
        },
        {
          glucose: 13,
          date: "2018-01-19T16:10:42+00:00",
        },
        {
          glucose: 22,
          date: "2018-01-19T19:51:30+00:00",
        },
        {
          glucose: 0,
          date: "2018-01-19T21:42:04+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0cc3059980c3add72",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Lilly",
      surname: "Patrick",
      fullname: "Lilly Patrick",
      dateOfBirth: "1992-12-02T09:26:10+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 48,
        ideal: {
          from: 88,
          to: 113,
        },
        high: 249,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 120,
          date: "2017-10-25T00:52:18+00:00",
        },
        {
          glucose: 71,
          date: "2017-10-25T08:26:51+00:00",
        },
        {
          glucose: 33,
          date: "2017-10-25T09:58:47+00:00",
        },
        {
          glucose: 31,
          date: "2017-10-25T12:43:03+00:00",
        },
        {
          glucose: 112,
          date: "2017-10-25T18:14:15+00:00",
        },
        {
          glucose: 64,
          date: "2017-10-25T21:13:15+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0567a2f5d488978f1",
      practitionerId: "eb6f5c176b7ddc6d",
      name: "Lilian",
      surname: "Carpenter",
      fullname: "Lilian Carpenter",
      dateOfBirth: "1983-05-25T15:38:02+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 25,
        ideal: {
          from: 81,
          to: 117,
        },
        high: 249,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 49,
          date: "2018-10-25T00:52:18+00:00",
        },
        {
          glucose: 5,
          date: "2018-10-25T08:07:12+00:00",
        },
        {
          glucose: 146,
          date: "2018-10-25T09:27:54+00:00",
        },
        {
          glucose: 63,
          date: "2018-10-25T13:28:00+00:00",
        },
        {
          glucose: 58,
          date: "2018-10-25T16:40:55+00:00",
        },
        {
          glucose: 127,
          date: "2018-10-25T19:12:56+00:00",
        },
        {
          glucose: 84,
          date: "2018-10-25T22:42:06+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd05815eddb9fdd0eb4",
      practitionerId: "a7e46537714eca83",
      name: "Hayes",
      surname: "Herring",
      fullname: "Hayes Herring",
      dateOfBirth: "2003-10-03T21:19:11+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 46,
        ideal: {
          from: 65,
          to: 96,
        },
        high: 243,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 88,
          date: "2017-09-18T00:51:03+00:00",
        },
        {
          glucose: 42,
          date: "2017-09-18T09:17:36+00:00",
        },
        {
          glucose: 77,
          date: "2017-09-18T12:19:08+00:00",
        },
        {
          glucose: 147,
          date: "2017-09-18T14:04:32+00:00",
        },
        {
          glucose: 18,
          date: "2017-09-18T18:48:47+00:00",
        },
        {
          glucose: 73,
          date: "2017-09-18T21:04:08+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd06f6fd466623f65b7",
      practitionerId: "2588ac7f57fd9b49",
      name: "Wallace",
      surname: "Robinson",
      fullname: "Wallace Robinson",
      dateOfBirth: "1986-02-28T00:30:35+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 30,
        ideal: {
          from: 89,
          to: 99,
        },
        high: 243,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 13,
          date: "2017-05-20T00:37:11+00:00",
        },
        {
          glucose: 21,
          date: "2017-05-20T07:28:00+00:00",
        },
        {
          glucose: 99,
          date: "2017-05-20T11:26:20+00:00",
        },
        {
          glucose: 37,
          date: "2017-05-20T13:14:20+00:00",
        },
        {
          glucose: 38,
          date: "2017-05-20T15:12:58+00:00",
        },
        {
          glucose: 63,
          date: "2017-05-20T19:30:02+00:00",
        },
        {
          glucose: 119,
          date: "2017-05-20T22:07:59+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0364b01d3c70dcab2",
      practitionerId: "2588ac7f57fd9b49",
      name: "Ware",
      surname: "Gay",
      fullname: "Ware Gay",
      dateOfBirth: "2005-01-17T15:27:32+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 30,
        ideal: {
          from: 71,
          to: 97,
        },
        high: 250,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 50,
          date: "2016-05-01T00:58:25+00:00",
        },
        {
          glucose: 15,
          date: "2016-05-01T09:41:15+00:00",
        },
        {
          glucose: 88,
          date: "2016-05-01T12:48:14+00:00",
        },
        {
          glucose: 54,
          date: "2016-05-01T16:56:50+00:00",
        },
        {
          glucose: 109,
          date: "2016-05-01T18:33:34+00:00",
        },
        {
          glucose: 83,
          date: "2016-05-01T21:14:08+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0a5f6b710d887a210",
      practitionerId: "a7e46537714eca83",
      name: "Etta",
      surname: "Collins",
      fullname: "Etta Collins",
      dateOfBirth: "2001-02-23T13:02:35+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 47,
        ideal: {
          from: 82,
          to: 105,
        },
        high: 245,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 153,
          date: "2014-10-23T00:08:54+00:00",
        },
        {
          glucose: 60,
          date: "2014-10-23T07:52:34+00:00",
        },
        {
          glucose: 140,
          date: "2014-10-23T09:45:07+00:00",
        },
        {
          glucose: 141,
          date: "2014-10-23T12:30:30+00:00",
        },
        {
          glucose: 34,
          date: "2014-10-23T16:13:30+00:00",
        },
        {
          glucose: 83,
          date: "2014-10-23T19:34:13+00:00",
        },
        {
          glucose: 47,
          date: "2014-10-23T21:20:13+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0fab94816616066f3",
      practitionerId: "eb6f5c176b7ddc6d",
      name: "Ratliff",
      surname: "Mcknight",
      fullname: "Ratliff Mcknight",
      dateOfBirth: "1990-11-01T21:35:19+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 21,
        ideal: {
          from: 74,
          to: 92,
        },
        high: 250,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 138,
          date: "2019-07-04T00:37:46+00:00",
        },
        {
          glucose: 7,
          date: "2019-07-04T08:31:57+00:00",
        },
        {
          glucose: 101,
          date: "2019-07-04T11:58:05+00:00",
        },
        {
          glucose: 92,
          date: "2019-07-04T13:46:52+00:00",
        },
        {
          glucose: 57,
          date: "2019-07-04T19:28:29+00:00",
        },
        {
          glucose: 147,
          date: "2019-07-04T22:21:55+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0f52fac6822926d6e",
      practitionerId: "eb6f5c176b7ddc6d",
      name: "Schmidt",
      surname: "Bullock",
      fullname: "Schmidt Bullock",
      dateOfBirth: "1988-04-10T08:24:58+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 19,
        ideal: {
          from: 71,
          to: 116,
        },
        high: 246,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 31,
          date: "2017-01-19T00:41:16+00:00",
        },
        {
          glucose: 1,
          date: "2017-01-19T08:35:02+00:00",
        },
        {
          glucose: 4,
          date: "2017-01-19T10:42:21+00:00",
        },
        {
          glucose: 110,
          date: "2017-01-19T12:20:14+00:00",
        },
        {
          glucose: 31,
          date: "2017-01-19T16:02:24+00:00",
        },
        {
          glucose: 14,
          date: "2017-01-19T18:46:12+00:00",
        },
        {
          glucose: 43,
          date: "2017-01-19T21:22:43+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0e1cd4ee19d9114ff",
      practitionerId: "eb6f5c176b7ddc6d",
      name: "Nadine",
      surname: "Ward",
      fullname: "Nadine Ward",
      dateOfBirth: "1989-08-01T20:26:46+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 38,
        ideal: {
          from: 69,
          to: 101,
        },
        high: 250,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 68,
          date: "2018-04-18T08:44:52+00:00",
        },
        {
          glucose: 78,
          date: "2018-04-18T09:52:30+00:00",
        },
        {
          glucose: 94,
          date: "2018-04-18T13:47:54+00:00",
        },
        {
          glucose: 136,
          date: "2018-04-18T15:56:24+00:00",
        },
        {
          glucose: 65,
          date: "2018-04-18T18:14:14+00:00",
        },
        {
          glucose: 147,
          date: "2018-04-18T22:31:28+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0f0c9ad7d1533783a",
      practitionerId: "38e8ee68526258f2",
      name: "Morrow",
      surname: "Greene",
      fullname: "Morrow Greene",
      dateOfBirth: "1986-09-20T21:23:21+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 32,
        ideal: {
          from: 68,
          to: 111,
        },
        high: 241,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 125,
          date: "2017-05-13T00:16:13+00:00",
        },
        {
          glucose: 21,
          date: "2017-05-13T08:44:46+00:00",
        },
        {
          glucose: 41,
          date: "2017-05-13T09:13:16+00:00",
        },
        {
          glucose: 130,
          date: "2017-05-13T12:30:36+00:00",
        },
        {
          glucose: 6,
          date: "2017-05-13T16:27:15+00:00",
        },
        {
          glucose: 0,
          date: "2017-05-13T19:38:13+00:00",
        },
        {
          glucose: 71,
          date: "2017-05-13T22:32:21+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0494751b8177064ec",
      practitionerId: "38e8ee68526258f2",
      name: "Christa",
      surname: "Nicholson",
      fullname: "Christa Nicholson",
      dateOfBirth: "2001-01-29T00:59:34+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 56,
        ideal: {
          from: 71,
          to: 110,
        },
        high: 240,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 115,
          date: "2018-05-26T00:23:38+00:00",
        },
        {
          glucose: 124,
          date: "2018-05-26T06:15:54+00:00",
        },
        {
          glucose: 10,
          date: "2018-05-26T09:15:45+00:00",
        },
        {
          glucose: 63,
          date: "2018-05-26T13:09:54+00:00",
        },
        {
          glucose: 128,
          date: "2018-05-26T14:00:07+00:00",
        },
        {
          glucose: 135,
          date: "2018-05-26T21:56:09+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd015222d82d8e38b37",
      practitionerId: "a7e46537714eca83",
      name: "Joy",
      surname: "Castillo",
      fullname: "Joy Castillo",
      dateOfBirth: "2011-05-10T15:40:58+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 28,
        ideal: {
          from: 84,
          to: 113,
        },
        high: 240,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 2,
          date: "2015-03-04T00:11:03+00:00",
        },
        {
          glucose: 145,
          date: "2015-03-04T07:57:09+00:00",
        },
        {
          glucose: 52,
          date: "2015-03-04T10:01:11+00:00",
        },
        {
          glucose: 7,
          date: "2015-03-04T12:04:15+00:00",
        },
        {
          glucose: 113,
          date: "2015-03-04T14:31:12+00:00",
        },
        {
          glucose: 159,
          date: "2015-03-04T19:32:59+00:00",
        },
        {
          glucose: 143,
          date: "2015-03-04T22:41:08+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd09537b3c930a52c71",
      practitionerId: "0d1c3d11d4ae1a66",
      name: "Patricia",
      surname: "Sullivan",
      fullname: "Patricia Sullivan",
      dateOfBirth: "2010-06-18T20:21:06+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 31,
        ideal: {
          from: 81,
          to: 112,
        },
        high: 243,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 6,
          date: "2014-01-14T00:22:19+00:00",
        },
        {
          glucose: 3,
          date: "2014-01-14T06:59:53+00:00",
        },
        {
          glucose: 30,
          date: "2014-01-14T09:26:01+00:00",
        },
        {
          glucose: 92,
          date: "2014-01-14T12:39:03+00:00",
        },
        {
          glucose: 20,
          date: "2014-01-14T16:43:33+00:00",
        },
        {
          glucose: 41,
          date: "2014-01-14T22:27:39+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0c46e5dd0445d215c",
      practitionerId: "38e8ee68526258f2",
      name: "Vonda",
      surname: "Andrews",
      fullname: "Vonda Andrews",
      dateOfBirth: "2010-02-12T15:33:20+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 49,
        ideal: {
          from: 79,
          to: 93,
        },
        high: 247,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 152,
          date: "2014-06-07T00:16:06+00:00",
        },
        {
          glucose: 152,
          date: "2014-06-07T07:23:38+00:00",
        },
        {
          glucose: 6,
          date: "2014-06-07T10:45:10+00:00",
        },
        {
          glucose: 100,
          date: "2014-06-07T12:26:15+00:00",
        },
        {
          glucose: 33,
          date: "2014-06-07T14:13:11+00:00",
        },
        {
          glucose: 25,
          date: "2014-06-07T19:41:08+00:00",
        },
        {
          glucose: 116,
          date: "2014-06-07T21:43:06+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0ba83482618628096",
      practitionerId: "a65e5ee7e8abae6d",
      name: "Noemi",
      surname: "Morgan",
      fullname: "Noemi Morgan",
      dateOfBirth: "2006-07-24T00:03:50+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 42,
        ideal: {
          from: 85,
          to: 94,
        },
        high: 249,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 115,
          date: "2014-03-14T00:50:38+00:00",
        },
        {
          glucose: 24,
          date: "2014-03-14T07:18:41+00:00",
        },
        {
          glucose: 58,
          date: "2014-03-14T09:41:42+00:00",
        },
        {
          glucose: 43,
          date: "2014-03-14T12:25:11+00:00",
        },
        {
          glucose: 100,
          date: "2014-03-14T14:55:15+00:00",
        },
        {
          glucose: 9,
          date: "2014-03-14T18:54:33+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd011ebd1268d1fe1d9",
      practitionerId: "38e8ee68526258f2",
      name: "Evangeline",
      surname: "Arnold",
      fullname: "Evangeline Arnold",
      dateOfBirth: "1986-10-09T09:24:15+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 47,
        ideal: {
          from: 78,
          to: 118,
        },
        high: 246,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 52,
          date: "2016-02-27T00:58:43+00:00",
        },
        {
          glucose: 105,
          date: "2016-02-27T08:48:28+00:00",
        },
        {
          glucose: 141,
          date: "2016-02-27T10:04:11+00:00",
        },
        {
          glucose: 51,
          date: "2016-02-27T12:00:07+00:00",
        },
        {
          glucose: 108,
          date: "2016-02-27T14:17:14+00:00",
        },
        {
          glucose: 60,
          date: "2016-02-27T18:13:52+00:00",
        },
        {
          glucose: 13,
          date: "2016-02-27T21:18:28+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0a32086709bc5ff28",
      practitionerId: "a7e46537714eca83",
      name: "Deanna",
      surname: "Bird",
      fullname: "Deanna Bird",
      dateOfBirth: "1997-08-09T21:20:32+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 53,
        ideal: {
          from: 86,
          to: 93,
        },
        high: 246,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 131,
          date: "2015-09-04T06:09:53+00:00",
        },
        {
          glucose: 39,
          date: "2015-09-04T11:55:39+00:00",
        },
        {
          glucose: 64,
          date: "2015-09-04T13:18:54+00:00",
        },
        {
          glucose: 147,
          date: "2015-09-04T15:58:00+00:00",
        },
        {
          glucose: 135,
          date: "2015-09-04T18:59:35+00:00",
        },
        {
          glucose: 17,
          date: "2015-09-04T22:56:59+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd00765890bd87581e3",
      practitionerId: "a7e46537714eca83",
      name: "Yolanda",
      surname: "Sawyer",
      fullname: "Yolanda Sawyer",
      dateOfBirth: "1989-09-08T06:55:37+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 58,
        ideal: {
          from: 64,
          to: 111,
        },
        high: 243,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 82,
          date: "2018-02-16T00:54:34+00:00",
        },
        {
          glucose: 85,
          date: "2018-02-16T06:30:40+00:00",
        },
        {
          glucose: 84,
          date: "2018-02-16T11:13:02+00:00",
        },
        {
          glucose: 21,
          date: "2018-02-16T12:08:22+00:00",
        },
        {
          glucose: 81,
          date: "2018-02-16T16:41:24+00:00",
        },
        {
          glucose: 99,
          date: "2018-02-16T18:05:37+00:00",
        },
        {
          glucose: 116,
          date: "2018-02-16T21:03:05+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd03d13010bd5a3c693",
      practitionerId: "0d1c3d11d4ae1a66",
      name: "Kelsey",
      surname: "Gardner",
      fullname: "Kelsey Gardner",
      dateOfBirth: "2005-07-08T22:13:33+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 57,
        ideal: {
          from: 86,
          to: 119,
        },
        high: 240,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 136,
          date: "2015-04-09T00:39:05+00:00",
        },
        {
          glucose: 81,
          date: "2015-04-09T07:28:14+00:00",
        },
        {
          glucose: 26,
          date: "2015-04-09T10:30:32+00:00",
        },
        {
          glucose: 90,
          date: "2015-04-09T14:39:03+00:00",
        },
        {
          glucose: 119,
          date: "2015-04-09T19:10:22+00:00",
        },
        {
          glucose: 46,
          date: "2015-04-09T21:30:56+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0a6466f6f86ff27f3",
      practitionerId: "eb6f5c176b7ddc6d",
      name: "Jeanne",
      surname: "Holloway",
      fullname: "Jeanne Holloway",
      dateOfBirth: "1998-10-17T09:22:11+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 40,
        ideal: {
          from: 84,
          to: 91,
        },
        high: 249,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 14,
          date: "2017-11-20T00:28:13+00:00",
        },
        {
          glucose: 61,
          date: "2017-11-20T06:39:12+00:00",
        },
        {
          glucose: 142,
          date: "2017-11-20T10:17:24+00:00",
        },
        {
          glucose: 44,
          date: "2017-11-20T12:54:15+00:00",
        },
        {
          glucose: 52,
          date: "2017-11-20T14:44:49+00:00",
        },
        {
          glucose: 134,
          date: "2017-11-20T19:32:45+00:00",
        },
        {
          glucose: 155,
          date: "2017-11-20T21:59:59+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd051293280061e152b",
      practitionerId: "0d1c3d11d4ae1a66",
      name: "Blackburn",
      surname: "Dickson",
      fullname: "Blackburn Dickson",
      dateOfBirth: "2011-01-02T19:17:23+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 33,
        ideal: {
          from: 87,
          to: 109,
        },
        high: 244,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 109,
          date: "2017-12-12T00:44:18+00:00",
        },
        {
          glucose: 140,
          date: "2017-12-12T06:40:23+00:00",
        },
        {
          glucose: 43,
          date: "2017-12-12T09:17:38+00:00",
        },
        {
          glucose: 17,
          date: "2017-12-12T12:24:25+00:00",
        },
        {
          glucose: 72,
          date: "2017-12-12T18:03:38+00:00",
        },
        {
          glucose: 38,
          date: "2017-12-12T21:41:09+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd09f548179d531d6f5",
      practitionerId: "38e8ee68526258f2",
      name: "Marisa",
      surname: "Emerson",
      fullname: "Marisa Emerson",
      dateOfBirth: "2000-05-20T20:56:25+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 26,
        ideal: {
          from: 84,
          to: 104,
        },
        high: 247,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 8,
          date: "2014-07-14T00:00:01+00:00",
        },
        {
          glucose: 142,
          date: "2014-07-14T08:31:18+00:00",
        },
        {
          glucose: 9,
          date: "2014-07-14T10:40:47+00:00",
        },
        {
          glucose: 65,
          date: "2014-07-14T13:00:01+00:00",
        },
        {
          glucose: 85,
          date: "2014-07-14T15:33:45+00:00",
        },
        {
          glucose: 44,
          date: "2014-07-14T19:32:55+00:00",
        },
        {
          glucose: 26,
          date: "2014-07-14T22:58:22+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0d9b8a8d1d6a27f80",
      practitionerId: "a65e5ee7e8abae6d",
      name: "Tracey",
      surname: "Hardin",
      fullname: "Tracey Hardin",
      dateOfBirth: "1999-09-12T13:48:10+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 54,
        ideal: {
          from: 76,
          to: 105,
        },
        high: 240,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 31,
          date: "2014-02-02T00:53:07+00:00",
        },
        {
          glucose: 34,
          date: "2014-02-02T06:34:37+00:00",
        },
        {
          glucose: 117,
          date: "2014-02-02T10:32:39+00:00",
        },
        {
          glucose: 83,
          date: "2014-02-02T12:05:18+00:00",
        },
        {
          glucose: 99,
          date: "2014-02-02T16:35:48+00:00",
        },
        {
          glucose: 36,
          date: "2014-02-02T22:32:52+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0fda398da6b81c6a5",
      practitionerId: "a65e5ee7e8abae6d",
      name: "Gladys",
      surname: "Garcia",
      fullname: "Gladys Garcia",
      dateOfBirth: "1991-02-24T20:49:29+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 32,
        ideal: {
          from: 70,
          to: 99,
        },
        high: 241,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 101,
          date: "2015-02-09T00:13:26+00:00",
        },
        {
          glucose: 138,
          date: "2015-02-09T06:00:48+00:00",
        },
        {
          glucose: 70,
          date: "2015-02-09T11:06:58+00:00",
        },
        {
          glucose: 137,
          date: "2015-02-09T12:18:30+00:00",
        },
        {
          glucose: 13,
          date: "2015-02-09T15:56:28+00:00",
        },
        {
          glucose: 63,
          date: "2015-02-09T18:01:28+00:00",
        },
        {
          glucose: 23,
          date: "2015-02-09T21:46:08+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0b822ffcbf1afb918",
      practitionerId: "2588ac7f57fd9b49",
      name: "Elena",
      surname: "Holden",
      fullname: "Elena Holden",
      dateOfBirth: "1980-03-19T13:00:51+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 54,
        ideal: {
          from: 66,
          to: 94,
        },
        high: 248,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 95,
          date: "2019-11-25T00:51:09+00:00",
        },
        {
          glucose: 119,
          date: "2019-11-25T06:39:24+00:00",
        },
        {
          glucose: 7,
          date: "2019-11-25T09:34:16+00:00",
        },
        {
          glucose: 132,
          date: "2019-11-25T13:05:37+00:00",
        },
        {
          glucose: 60,
          date: "2019-11-25T18:17:03+00:00",
        },
        {
          glucose: 140,
          date: "2019-11-25T21:05:51+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0f94b673c43ed7162",
      practitionerId: "4b7a0f1066140e03",
      name: "Merritt",
      surname: "Wood",
      fullname: "Merritt Wood",
      dateOfBirth: "1997-04-19T01:24:28+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 25,
        ideal: {
          from: 75,
          to: 106,
        },
        high: 247,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 25,
          date: "2018-08-08T00:17:50+00:00",
        },
        {
          glucose: 58,
          date: "2018-08-08T08:34:25+00:00",
        },
        {
          glucose: 26,
          date: "2018-08-08T09:43:02+00:00",
        },
        {
          glucose: 6,
          date: "2018-08-08T13:59:56+00:00",
        },
        {
          glucose: 76,
          date: "2018-08-08T15:50:41+00:00",
        },
        {
          glucose: 63,
          date: "2018-08-08T18:25:33+00:00",
        },
        {
          glucose: 83,
          date: "2018-08-08T22:28:23+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd043010368793c1485",
      practitionerId: "a7e46537714eca83",
      name: "Beryl",
      surname: "Larson",
      fullname: "Beryl Larson",
      dateOfBirth: "2005-05-15T14:38:06+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 33,
        ideal: {
          from: 90,
          to: 91,
        },
        high: 242,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 40,
          date: "2014-06-03T00:25:10+00:00",
        },
        {
          glucose: 93,
          date: "2014-06-03T06:53:43+00:00",
        },
        {
          glucose: 120,
          date: "2014-06-03T10:03:27+00:00",
        },
        {
          glucose: 109,
          date: "2014-06-03T12:35:32+00:00",
        },
        {
          glucose: 82,
          date: "2014-06-03T14:40:59+00:00",
        },
        {
          glucose: 90,
          date: "2014-06-03T19:37:33+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd023d115991d476e68",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Mcmillan",
      surname: "Robles",
      fullname: "Mcmillan Robles",
      dateOfBirth: "1984-07-13T05:06:16+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 12,
        ideal: {
          from: 61,
          to: 108,
        },
        high: 240,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 138,
          date: "2017-03-06T00:41:03+00:00",
        },
        {
          glucose: 115,
          date: "2017-03-06T08:02:11+00:00",
        },
        {
          glucose: 9,
          date: "2017-03-06T11:09:13+00:00",
        },
        {
          glucose: 62,
          date: "2017-03-06T13:37:31+00:00",
        },
        {
          glucose: 54,
          date: "2017-03-06T15:53:42+00:00",
        },
        {
          glucose: 128,
          date: "2017-03-06T19:26:30+00:00",
        },
        {
          glucose: 79,
          date: "2017-03-06T22:24:22+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0850cc658ce68b4b2",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Farrell",
      surname: "Byers",
      fullname: "Farrell Byers",
      dateOfBirth: "1996-11-01T19:15:33+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 19,
        ideal: {
          from: 85,
          to: 91,
        },
        high: 249,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 59,
          date: "2019-03-03T00:12:31+00:00",
        },
        {
          glucose: 37,
          date: "2019-03-03T07:32:36+00:00",
        },
        {
          glucose: 121,
          date: "2019-03-03T10:53:49+00:00",
        },
        {
          glucose: 68,
          date: "2019-03-03T12:13:49+00:00",
        },
        {
          glucose: 51,
          date: "2019-03-03T19:32:12+00:00",
        },
        {
          glucose: 87,
          date: "2019-03-03T22:57:48+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd039c61cc726baadc6",
      practitionerId: "a65e5ee7e8abae6d",
      name: "Shirley",
      surname: "Alford",
      fullname: "Shirley Alford",
      dateOfBirth: "1985-09-10T16:42:29+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 24,
        ideal: {
          from: 72,
          to: 109,
        },
        high: 245,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 30,
          date: "2015-02-05T00:01:03+00:00",
        },
        {
          glucose: 68,
          date: "2015-02-05T08:50:04+00:00",
        },
        {
          glucose: 133,
          date: "2015-02-05T10:54:39+00:00",
        },
        {
          glucose: 81,
          date: "2015-02-05T12:08:34+00:00",
        },
        {
          glucose: 28,
          date: "2015-02-05T15:35:19+00:00",
        },
        {
          glucose: 159,
          date: "2015-02-05T19:39:47+00:00",
        },
        {
          glucose: 34,
          date: "2015-02-05T21:07:51+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd037668f0946dd5a8f",
      practitionerId: "0d1c3d11d4ae1a66",
      name: "Robbins",
      surname: "Callahan",
      fullname: "Robbins Callahan",
      dateOfBirth: "1986-01-05T21:38:10+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 18,
        ideal: {
          from: 66,
          to: 102,
        },
        high: 245,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 85,
          date: "2019-01-19T00:22:30+00:00",
        },
        {
          glucose: 156,
          date: "2019-01-19T07:15:42+00:00",
        },
        {
          glucose: 149,
          date: "2019-01-19T11:18:42+00:00",
        },
        {
          glucose: 39,
          date: "2019-01-19T12:23:35+00:00",
        },
        {
          glucose: 145,
          date: "2019-01-19T18:21:57+00:00",
        },
        {
          glucose: 16,
          date: "2019-01-19T21:17:18+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd02fe71c0d6e55a5ab",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Sellers",
      surname: "Horn",
      fullname: "Sellers Horn",
      dateOfBirth: "2005-10-09T10:05:24+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 19,
        ideal: {
          from: 83,
          to: 98,
        },
        high: 245,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 133,
          date: "2017-08-02T00:57:48+00:00",
        },
        {
          glucose: 53,
          date: "2017-08-02T08:28:17+00:00",
        },
        {
          glucose: 103,
          date: "2017-08-02T11:35:53+00:00",
        },
        {
          glucose: 116,
          date: "2017-08-02T13:40:09+00:00",
        },
        {
          glucose: 147,
          date: "2017-08-02T15:54:45+00:00",
        },
        {
          glucose: 140,
          date: "2017-08-02T19:17:56+00:00",
        },
        {
          glucose: 76,
          date: "2017-08-02T22:55:18+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd019b901a4c6bc1367",
      practitionerId: "38e8ee68526258f2",
      name: "Freeman",
      surname: "Daniels",
      fullname: "Freeman Daniels",
      dateOfBirth: "1990-11-27T14:24:22+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 22,
        ideal: {
          from: 68,
          to: 105,
        },
        high: 247,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 70,
          date: "2014-03-26T00:17:03+00:00",
        },
        {
          glucose: 138,
          date: "2014-03-26T07:20:17+00:00",
        },
        {
          glucose: 135,
          date: "2014-03-26T09:05:32+00:00",
        },
        {
          glucose: 48,
          date: "2014-03-26T13:56:54+00:00",
        },
        {
          glucose: 56,
          date: "2014-03-26T16:20:03+00:00",
        },
        {
          glucose: 116,
          date: "2014-03-26T22:54:38+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0d18dd769c669912a",
      practitionerId: "2588ac7f57fd9b49",
      name: "Cecelia",
      surname: "Hale",
      fullname: "Cecelia Hale",
      dateOfBirth: "1993-06-11T03:40:08+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 21,
        ideal: {
          from: 88,
          to: 109,
        },
        high: 240,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 83,
          date: "2018-06-08T00:36:39+00:00",
        },
        {
          glucose: 6,
          date: "2018-06-08T07:52:01+00:00",
        },
        {
          glucose: 59,
          date: "2018-06-08T10:39:25+00:00",
        },
        {
          glucose: 119,
          date: "2018-06-08T12:17:14+00:00",
        },
        {
          glucose: 134,
          date: "2018-06-08T16:20:01+00:00",
        },
        {
          glucose: 100,
          date: "2018-06-08T19:44:39+00:00",
        },
        {
          glucose: 153,
          date: "2018-06-08T21:28:53+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd080620262afeef73e",
      practitionerId: "a65e5ee7e8abae6d",
      name: "Navarro",
      surname: "Hooper",
      fullname: "Navarro Hooper",
      dateOfBirth: "2002-08-30T08:36:15+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 25,
        ideal: {
          from: 68,
          to: 111,
        },
        high: 248,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 63,
          date: "2018-06-23T00:21:51+00:00",
        },
        {
          glucose: 59,
          date: "2018-06-23T06:03:11+00:00",
        },
        {
          glucose: 143,
          date: "2018-06-23T10:36:21+00:00",
        },
        {
          glucose: 57,
          date: "2018-06-23T12:36:33+00:00",
        },
        {
          glucose: 151,
          date: "2018-06-23T16:16:05+00:00",
        },
        {
          glucose: 95,
          date: "2018-06-23T22:49:02+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd04bae6d45724a3866",
      practitionerId: "a7e46537714eca83",
      name: "Summers",
      surname: "Mueller",
      fullname: "Summers Mueller",
      dateOfBirth: "1990-04-06T12:22:13+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 38,
        ideal: {
          from: 62,
          to: 96,
        },
        high: 250,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 71,
          date: "2016-03-07T00:26:06+00:00",
        },
        {
          glucose: 24,
          date: "2016-03-07T08:28:27+00:00",
        },
        {
          glucose: 122,
          date: "2016-03-07T11:00:04+00:00",
        },
        {
          glucose: 47,
          date: "2016-03-07T13:37:49+00:00",
        },
        {
          glucose: 21,
          date: "2016-03-07T15:48:06+00:00",
        },
        {
          glucose: 97,
          date: "2016-03-07T18:35:44+00:00",
        },
        {
          glucose: 111,
          date: "2016-03-07T21:28:48+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0cf4e10418a7a9ef4",
      practitionerId: "a7e46537714eca83",
      name: "Renee",
      surname: "Weiss",
      fullname: "Renee Weiss",
      dateOfBirth: "1982-09-03T08:16:48+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 22,
        ideal: {
          from: 85,
          to: 112,
        },
        high: 244,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 97,
          date: "2017-04-21T00:02:32+00:00",
        },
        {
          glucose: 9,
          date: "2017-04-21T07:07:35+00:00",
        },
        {
          glucose: 12,
          date: "2017-04-21T09:51:15+00:00",
        },
        {
          glucose: 136,
          date: "2017-04-21T12:20:09+00:00",
        },
        {
          glucose: 31,
          date: "2017-04-21T15:11:27+00:00",
        },
        {
          glucose: 5,
          date: "2017-04-21T19:52:01+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd03e6569fa8d51a7a9",
      practitionerId: "0d1c3d11d4ae1a66",
      name: "Jean",
      surname: "Evans",
      fullname: "Jean Evans",
      dateOfBirth: "1981-02-14T22:15:19+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 27,
        ideal: {
          from: 88,
          to: 101,
        },
        high: 245,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 114,
          date: "2019-06-17T00:58:30+00:00",
        },
        {
          glucose: 113,
          date: "2019-06-17T06:37:00+00:00",
        },
        {
          glucose: 77,
          date: "2019-06-17T09:59:07+00:00",
        },
        {
          glucose: 159,
          date: "2019-06-17T13:57:24+00:00",
        },
        {
          glucose: 26,
          date: "2019-06-17T16:17:42+00:00",
        },
        {
          glucose: 129,
          date: "2019-06-17T18:35:44+00:00",
        },
        {
          glucose: 159,
          date: "2019-06-17T22:16:04+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd006e4e8f718465ab7",
      practitionerId: "38e8ee68526258f2",
      name: "Chris",
      surname: "Shaw",
      fullname: "Chris Shaw",
      dateOfBirth: "2008-01-14T13:11:58+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 46,
        ideal: {
          from: 76,
          to: 110,
        },
        high: 250,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 27,
          date: "2017-05-17T00:05:33+00:00",
        },
        {
          glucose: 154,
          date: "2017-05-17T06:49:32+00:00",
        },
        {
          glucose: 127,
          date: "2017-05-17T10:45:49+00:00",
        },
        {
          glucose: 130,
          date: "2017-05-17T14:09:48+00:00",
        },
        {
          glucose: 93,
          date: "2017-05-17T19:22:16+00:00",
        },
        {
          glucose: 1,
          date: "2017-05-17T21:15:25+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0c011b1ed0ba1900f",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Robertson",
      surname: "Cunningham",
      fullname: "Robertson Cunningham",
      dateOfBirth: "1981-09-04T20:27:16+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 23,
        ideal: {
          from: 72,
          to: 95,
        },
        high: 245,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 75,
          date: "2014-09-10T00:57:32+00:00",
        },
        {
          glucose: 154,
          date: "2014-09-10T06:00:59+00:00",
        },
        {
          glucose: 69,
          date: "2014-09-10T10:15:34+00:00",
        },
        {
          glucose: 86,
          date: "2014-09-10T13:19:39+00:00",
        },
        {
          glucose: 144,
          date: "2014-09-10T16:54:36+00:00",
        },
        {
          glucose: 8,
          date: "2014-09-10T19:39:10+00:00",
        },
        {
          glucose: 89,
          date: "2014-09-10T22:52:17+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0fdb4b04214684c54",
      practitionerId: "0d1c3d11d4ae1a66",
      name: "Hall",
      surname: "Middleton",
      fullname: "Hall Middleton",
      dateOfBirth: "1991-04-16T09:21:50+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 32,
        ideal: {
          from: 75,
          to: 99,
        },
        high: 249,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 75,
          date: "2018-07-27T00:37:23+00:00",
        },
        {
          glucose: 156,
          date: "2018-07-27T06:13:11+00:00",
        },
        {
          glucose: 15,
          date: "2018-07-27T11:03:37+00:00",
        },
        {
          glucose: 18,
          date: "2018-07-27T12:55:08+00:00",
        },
        {
          glucose: 114,
          date: "2018-07-27T14:03:38+00:00",
        },
        {
          glucose: 136,
          date: "2018-07-27T22:13:38+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0e0630d1cb9b48618",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Conrad",
      surname: "English",
      fullname: "Conrad English",
      dateOfBirth: "1986-10-08T07:28:14+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 17,
        ideal: {
          from: 72,
          to: 105,
        },
        high: 242,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 8,
          date: "2014-11-02T00:03:27+00:00",
        },
        {
          glucose: 26,
          date: "2014-11-02T06:54:25+00:00",
        },
        {
          glucose: 134,
          date: "2014-11-02T10:05:00+00:00",
        },
        {
          glucose: 27,
          date: "2014-11-02T13:11:02+00:00",
        },
        {
          glucose: 59,
          date: "2014-11-02T16:38:21+00:00",
        },
        {
          glucose: 43,
          date: "2014-11-02T18:20:44+00:00",
        },
        {
          glucose: 16,
          date: "2014-11-02T22:55:09+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0ec1916222394148a",
      practitionerId: "38e8ee68526258f2",
      name: "Leola",
      surname: "Poole",
      fullname: "Leola Poole",
      dateOfBirth: "2007-11-02T22:41:51+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 55,
        ideal: {
          from: 61,
          to: 92,
        },
        high: 250,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 43,
          date: "2019-11-16T00:46:18+00:00",
        },
        {
          glucose: 98,
          date: "2019-11-16T11:26:30+00:00",
        },
        {
          glucose: 37,
          date: "2019-11-16T13:56:22+00:00",
        },
        {
          glucose: 108,
          date: "2019-11-16T15:16:24+00:00",
        },
        {
          glucose: 25,
          date: "2019-11-16T19:00:16+00:00",
        },
        {
          glucose: 1,
          date: "2019-11-16T21:16:23+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd02d77de7f3b07521c",
      practitionerId: "4b7a0f1066140e03",
      name: "Rosalinda",
      surname: "Monroe",
      fullname: "Rosalinda Monroe",
      dateOfBirth: "2001-08-18T13:18:47+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 19,
        ideal: {
          from: 61,
          to: 106,
        },
        high: 241,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 60,
          date: "2014-10-23T00:27:20+00:00",
        },
        {
          glucose: 95,
          date: "2014-10-23T07:06:34+00:00",
        },
        {
          glucose: 19,
          date: "2014-10-23T11:04:58+00:00",
        },
        {
          glucose: 110,
          date: "2014-10-23T12:06:24+00:00",
        },
        {
          glucose: 110,
          date: "2014-10-23T16:15:38+00:00",
        },
        {
          glucose: 78,
          date: "2014-10-23T19:39:07+00:00",
        },
        {
          glucose: 132,
          date: "2014-10-23T21:35:34+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0db576b9510c8f9fa",
      practitionerId: "2588ac7f57fd9b49",
      name: "Kinney",
      surname: "Anderson",
      fullname: "Kinney Anderson",
      dateOfBirth: "2000-03-01T05:50:49+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 11,
        ideal: {
          from: 75,
          to: 109,
        },
        high: 244,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 133,
          date: "2015-09-13T00:42:01+00:00",
        },
        {
          glucose: 107,
          date: "2015-09-13T08:58:36+00:00",
        },
        {
          glucose: 44,
          date: "2015-09-13T09:27:41+00:00",
        },
        {
          glucose: 120,
          date: "2015-09-13T12:56:22+00:00",
        },
        {
          glucose: 72,
          date: "2015-09-13T14:04:45+00:00",
        },
        {
          glucose: 63,
          date: "2015-09-13T18:01:07+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0fb21fb8c6b1e9c93",
      practitionerId: "0d1c3d11d4ae1a66",
      name: "Karen",
      surname: "Mcneil",
      fullname: "Karen Mcneil",
      dateOfBirth: "2003-11-23T17:37:53+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 31,
        ideal: {
          from: 67,
          to: 110,
        },
        high: 244,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 89,
          date: "2018-11-23T00:54:11+00:00",
        },
        {
          glucose: 81,
          date: "2018-11-23T08:45:41+00:00",
        },
        {
          glucose: 131,
          date: "2018-11-23T09:36:19+00:00",
        },
        {
          glucose: 114,
          date: "2018-11-23T13:00:50+00:00",
        },
        {
          glucose: 50,
          date: "2018-11-23T14:27:20+00:00",
        },
        {
          glucose: 97,
          date: "2018-11-23T19:37:52+00:00",
        },
        {
          glucose: 106,
          date: "2018-11-23T21:31:08+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0c5c9e967c4df7634",
      practitionerId: "0d1c3d11d4ae1a66",
      name: "Terra",
      surname: "Ramirez",
      fullname: "Terra Ramirez",
      dateOfBirth: "1996-02-07T01:08:17+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 20,
        ideal: {
          from: 76,
          to: 119,
        },
        high: 242,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 148,
          date: "2018-11-07T00:06:06+00:00",
        },
        {
          glucose: 124,
          date: "2018-11-07T07:14:31+00:00",
        },
        {
          glucose: 99,
          date: "2018-11-07T10:04:17+00:00",
        },
        {
          glucose: 133,
          date: "2018-11-07T13:17:21+00:00",
        },
        {
          glucose: 28,
          date: "2018-11-07T18:16:43+00:00",
        },
        {
          glucose: 83,
          date: "2018-11-07T21:56:08+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0cbdfeb41f7ead46e",
      practitionerId: "0d1c3d11d4ae1a66",
      name: "Wheeler",
      surname: "Rojas",
      fullname: "Wheeler Rojas",
      dateOfBirth: "2008-04-07T01:10:25+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 11,
        ideal: {
          from: 71,
          to: 100,
        },
        high: 243,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 36,
          date: "2018-06-13T00:37:49+00:00",
        },
        {
          glucose: 154,
          date: "2018-06-13T07:19:12+00:00",
        },
        {
          glucose: 105,
          date: "2018-06-13T11:11:48+00:00",
        },
        {
          glucose: 58,
          date: "2018-06-13T12:04:28+00:00",
        },
        {
          glucose: 51,
          date: "2018-06-13T14:59:05+00:00",
        },
        {
          glucose: 119,
          date: "2018-06-13T19:39:34+00:00",
        },
        {
          glucose: 143,
          date: "2018-06-13T21:44:30+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd097a8ef6ef7ee2f51",
      practitionerId: "38e8ee68526258f2",
      name: "Gail",
      surname: "Bowman",
      fullname: "Gail Bowman",
      dateOfBirth: "1999-05-02T04:05:02+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 10,
        ideal: {
          from: 67,
          to: 102,
        },
        high: 248,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 101,
          date: "2018-10-05T00:24:31+00:00",
        },
        {
          glucose: 12,
          date: "2018-10-05T06:57:05+00:00",
        },
        {
          glucose: 34,
          date: "2018-10-05T13:24:31+00:00",
        },
        {
          glucose: 93,
          date: "2018-10-05T14:09:59+00:00",
        },
        {
          glucose: 78,
          date: "2018-10-05T19:17:58+00:00",
        },
        {
          glucose: 29,
          date: "2018-10-05T21:14:09+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0b36dfe09d53e50cb",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Lott",
      surname: "Gonzales",
      fullname: "Lott Gonzales",
      dateOfBirth: "1985-03-22T01:31:38+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 46,
        ideal: {
          from: 70,
          to: 93,
        },
        high: 244,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 7,
          date: "2014-10-01T00:42:06+00:00",
        },
        {
          glucose: 22,
          date: "2014-10-01T08:52:30+00:00",
        },
        {
          glucose: 1,
          date: "2014-10-01T09:23:18+00:00",
        },
        {
          glucose: 160,
          date: "2014-10-01T13:34:38+00:00",
        },
        {
          glucose: 109,
          date: "2014-10-01T15:14:03+00:00",
        },
        {
          glucose: 105,
          date: "2014-10-01T18:44:43+00:00",
        },
        {
          glucose: 42,
          date: "2014-10-01T21:36:26+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd06ae14bc6916bc2d6",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Morse",
      surname: "Fleming",
      fullname: "Morse Fleming",
      dateOfBirth: "1989-04-07T07:03:31+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 52,
        ideal: {
          from: 70,
          to: 106,
        },
        high: 247,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 142,
          date: "2018-02-20T00:07:19+00:00",
        },
        {
          glucose: 18,
          date: "2018-02-20T06:24:38+00:00",
        },
        {
          glucose: 71,
          date: "2018-02-20T11:11:48+00:00",
        },
        {
          glucose: 36,
          date: "2018-02-20T12:29:14+00:00",
        },
        {
          glucose: 76,
          date: "2018-02-20T16:45:31+00:00",
        },
        {
          glucose: 52,
          date: "2018-02-20T19:10:05+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0355b625512ff326a",
      practitionerId: "2588ac7f57fd9b49",
      name: "Kelley",
      surname: "Chambers",
      fullname: "Kelley Chambers",
      dateOfBirth: "2009-09-08T08:29:06+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 50,
        ideal: {
          from: 67,
          to: 108,
        },
        high: 250,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 97,
          date: "2019-08-18T00:29:01+00:00",
        },
        {
          glucose: 55,
          date: "2019-08-18T08:07:47+00:00",
        },
        {
          glucose: 121,
          date: "2019-08-18T11:24:33+00:00",
        },
        {
          glucose: 72,
          date: "2019-08-18T13:29:44+00:00",
        },
        {
          glucose: 8,
          date: "2019-08-18T15:27:34+00:00",
        },
        {
          glucose: 73,
          date: "2019-08-18T19:30:20+00:00",
        },
        {
          glucose: 90,
          date: "2019-08-18T21:25:08+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd09760a1d931f7666e",
      practitionerId: "38e8ee68526258f2",
      name: "Letitia",
      surname: "Hicks",
      fullname: "Letitia Hicks",
      dateOfBirth: "1999-04-13T22:03:19+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 53,
        ideal: {
          from: 78,
          to: 100,
        },
        high: 244,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 98,
          date: "2019-01-15T00:36:33+00:00",
        },
        {
          glucose: 160,
          date: "2019-01-15T06:24:20+00:00",
        },
        {
          glucose: 96,
          date: "2019-01-15T11:56:38+00:00",
        },
        {
          glucose: 4,
          date: "2019-01-15T12:49:00+00:00",
        },
        {
          glucose: 107,
          date: "2019-01-15T18:16:07+00:00",
        },
        {
          glucose: 153,
          date: "2019-01-15T21:54:33+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd08bad8c473bcc9c6c",
      practitionerId: "a65e5ee7e8abae6d",
      name: "Mindy",
      surname: "Berger",
      fullname: "Mindy Berger",
      dateOfBirth: "2000-10-01T22:32:12+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 52,
        ideal: {
          from: 63,
          to: 101,
        },
        high: 249,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 76,
          date: "2018-03-14T00:17:09+00:00",
        },
        {
          glucose: 57,
          date: "2018-03-14T08:58:34+00:00",
        },
        {
          glucose: 21,
          date: "2018-03-14T10:42:56+00:00",
        },
        {
          glucose: 98,
          date: "2018-03-14T13:18:39+00:00",
        },
        {
          glucose: 137,
          date: "2018-03-14T14:35:53+00:00",
        },
        {
          glucose: 112,
          date: "2018-03-14T19:17:46+00:00",
        },
        {
          glucose: 30,
          date: "2018-03-14T21:42:37+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd05270caddfcca0dad",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Kent",
      surname: "Sweet",
      fullname: "Kent Sweet",
      dateOfBirth: "1993-03-06T12:29:20+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 58,
        ideal: {
          from: 68,
          to: 113,
        },
        high: 248,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 64,
          date: "2019-08-24T00:46:01+00:00",
        },
        {
          glucose: 138,
          date: "2019-08-24T06:05:56+00:00",
        },
        {
          glucose: 47,
          date: "2019-08-24T12:41:45+00:00",
        },
        {
          glucose: 116,
          date: "2019-08-24T14:58:04+00:00",
        },
        {
          glucose: 139,
          date: "2019-08-24T19:54:44+00:00",
        },
        {
          glucose: 76,
          date: "2019-08-24T21:02:33+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0abd974d0f4e823b5",
      practitionerId: "2588ac7f57fd9b49",
      name: "Conway",
      surname: "Brown",
      fullname: "Conway Brown",
      dateOfBirth: "1985-11-18T07:53:54+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 34,
        ideal: {
          from: 84,
          to: 106,
        },
        high: 241,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 53,
          date: "2017-05-25T00:24:44+00:00",
        },
        {
          glucose: 15,
          date: "2017-05-25T06:35:34+00:00",
        },
        {
          glucose: 73,
          date: "2017-05-25T09:01:26+00:00",
        },
        {
          glucose: 15,
          date: "2017-05-25T13:58:56+00:00",
        },
        {
          glucose: 100,
          date: "2017-05-25T16:51:29+00:00",
        },
        {
          glucose: 25,
          date: "2017-05-25T19:33:16+00:00",
        },
        {
          glucose: 12,
          date: "2017-05-25T22:57:48+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd096a199e8126cb82d",
      practitionerId: "4b7a0f1066140e03",
      name: "Ella",
      surname: "Mitchell",
      fullname: "Ella Mitchell",
      dateOfBirth: "1990-12-21T05:47:44+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 34,
        ideal: {
          from: 84,
          to: 113,
        },
        high: 244,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 0,
          date: "2019-04-26T08:24:27+00:00",
        },
        {
          glucose: 109,
          date: "2019-04-26T10:33:24+00:00",
        },
        {
          glucose: 54,
          date: "2019-04-26T12:06:20+00:00",
        },
        {
          glucose: 33,
          date: "2019-04-26T16:44:59+00:00",
        },
        {
          glucose: 137,
          date: "2019-04-26T18:23:22+00:00",
        },
        {
          glucose: 17,
          date: "2019-04-26T22:39:13+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd03f0c82f8b5531542",
      practitionerId: "2588ac7f57fd9b49",
      name: "Tasha",
      surname: "Everett",
      fullname: "Tasha Everett",
      dateOfBirth: "1990-05-16T00:33:40+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 36,
        ideal: {
          from: 61,
          to: 94,
        },
        high: 250,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 156,
          date: "2017-11-13T00:25:29+00:00",
        },
        {
          glucose: 129,
          date: "2017-11-13T07:52:57+00:00",
        },
        {
          glucose: 87,
          date: "2017-11-13T09:02:47+00:00",
        },
        {
          glucose: 110,
          date: "2017-11-13T13:20:01+00:00",
        },
        {
          glucose: 147,
          date: "2017-11-13T15:54:20+00:00",
        },
        {
          glucose: 63,
          date: "2017-11-13T18:31:47+00:00",
        },
        {
          glucose: 62,
          date: "2017-11-13T22:10:35+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd01efe782ac1dbb0e3",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Bates",
      surname: "Dudley",
      fullname: "Bates Dudley",
      dateOfBirth: "2009-04-07T17:22:39+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 19,
        ideal: {
          from: 85,
          to: 97,
        },
        high: 241,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 94,
          date: "2016-02-24T00:34:40+00:00",
        },
        {
          glucose: 147,
          date: "2016-02-24T06:51:51+00:00",
        },
        {
          glucose: 140,
          date: "2016-02-24T11:33:31+00:00",
        },
        {
          glucose: 83,
          date: "2016-02-24T16:27:20+00:00",
        },
        {
          glucose: 118,
          date: "2016-02-24T19:22:55+00:00",
        },
        {
          glucose: 17,
          date: "2016-02-24T21:37:08+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0fdfc30035181aab4",
      practitionerId: "eb6f5c176b7ddc6d",
      name: "Alisa",
      surname: "Christian",
      fullname: "Alisa Christian",
      dateOfBirth: "1992-03-08T01:14:19+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 47,
        ideal: {
          from: 69,
          to: 94,
        },
        high: 240,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 128,
          date: "2016-09-28T00:21:14+00:00",
        },
        {
          glucose: 86,
          date: "2016-09-28T07:17:08+00:00",
        },
        {
          glucose: 22,
          date: "2016-09-28T09:40:54+00:00",
        },
        {
          glucose: 39,
          date: "2016-09-28T13:00:17+00:00",
        },
        {
          glucose: 134,
          date: "2016-09-28T15:47:42+00:00",
        },
        {
          glucose: 52,
          date: "2016-09-28T19:31:35+00:00",
        },
        {
          glucose: 120,
          date: "2016-09-28T22:26:06+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0383e4a7afdb21be0",
      practitionerId: "38e8ee68526258f2",
      name: "Cooley",
      surname: "Coffey",
      fullname: "Cooley Coffey",
      dateOfBirth: "2002-03-20T13:55:16+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 37,
        ideal: {
          from: 86,
          to: 101,
        },
        high: 245,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 149,
          date: "2016-09-28T06:24:15+00:00",
        },
        {
          glucose: 140,
          date: "2016-09-28T09:19:35+00:00",
        },
        {
          glucose: 96,
          date: "2016-09-28T13:42:04+00:00",
        },
        {
          glucose: 81,
          date: "2016-09-28T15:35:45+00:00",
        },
        {
          glucose: 64,
          date: "2016-09-28T19:39:59+00:00",
        },
        {
          glucose: 36,
          date: "2016-09-28T22:10:15+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd08dcacf8b4412f560",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Jeri",
      surname: "Taylor",
      fullname: "Jeri Taylor",
      dateOfBirth: "2004-04-23T04:03:00+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 55,
        ideal: {
          from: 72,
          to: 104,
        },
        high: 245,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 111,
          date: "2019-12-23T00:02:21+00:00",
        },
        {
          glucose: 40,
          date: "2019-12-23T07:22:47+00:00",
        },
        {
          glucose: 99,
          date: "2019-12-23T11:23:04+00:00",
        },
        {
          glucose: 3,
          date: "2019-12-23T13:35:03+00:00",
        },
        {
          glucose: 74,
          date: "2019-12-23T15:51:09+00:00",
        },
        {
          glucose: 118,
          date: "2019-12-23T19:06:52+00:00",
        },
        {
          glucose: 85,
          date: "2019-12-23T21:33:47+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd00c5cc85a322ceb45",
      practitionerId: "38e8ee68526258f2",
      name: "Hudson",
      surname: "Burch",
      fullname: "Hudson Burch",
      dateOfBirth: "1992-12-04T05:28:11+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 23,
        ideal: {
          from: 86,
          to: 106,
        },
        high: 250,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 67,
          date: "2018-02-06T00:05:50+00:00",
        },
        {
          glucose: 20,
          date: "2018-02-06T06:33:47+00:00",
        },
        {
          glucose: 141,
          date: "2018-02-06T09:30:26+00:00",
        },
        {
          glucose: 13,
          date: "2018-02-06T12:22:43+00:00",
        },
        {
          glucose: 6,
          date: "2018-02-06T16:03:20+00:00",
        },
        {
          glucose: 73,
          date: "2018-02-06T18:38:47+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd008303bad86bd4a9f",
      practitionerId: "2588ac7f57fd9b49",
      name: "Maryanne",
      surname: "Barr",
      fullname: "Maryanne Barr",
      dateOfBirth: "1999-01-20T20:36:08+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 48,
        ideal: {
          from: 81,
          to: 96,
        },
        high: 250,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 36,
          date: "2017-04-22T00:14:42+00:00",
        },
        {
          glucose: 80,
          date: "2017-04-22T06:15:16+00:00",
        },
        {
          glucose: 24,
          date: "2017-04-22T10:35:38+00:00",
        },
        {
          glucose: 81,
          date: "2017-04-22T12:19:31+00:00",
        },
        {
          glucose: 122,
          date: "2017-04-22T15:06:38+00:00",
        },
        {
          glucose: 86,
          date: "2017-04-22T19:09:02+00:00",
        },
        {
          glucose: 147,
          date: "2017-04-22T21:18:07+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd083f6f4cbf673b4cc",
      practitionerId: "a7e46537714eca83",
      name: "Flowers",
      surname: "Mcgowan",
      fullname: "Flowers Mcgowan",
      dateOfBirth: "1987-06-25T09:11:41+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 59,
        ideal: {
          from: 68,
          to: 97,
        },
        high: 248,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 100,
          date: "2018-01-19T00:27:53+00:00",
        },
        {
          glucose: 12,
          date: "2018-01-19T06:58:06+00:00",
        },
        {
          glucose: 153,
          date: "2018-01-19T10:52:31+00:00",
        },
        {
          glucose: 49,
          date: "2018-01-19T13:35:06+00:00",
        },
        {
          glucose: 23,
          date: "2018-01-19T14:58:47+00:00",
        },
        {
          glucose: 156,
          date: "2018-01-19T19:14:47+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0a6c596a765d0341c",
      practitionerId: "2588ac7f57fd9b49",
      name: "Leticia",
      surname: "Hunt",
      fullname: "Leticia Hunt",
      dateOfBirth: "2002-03-20T21:30:05+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 49,
        ideal: {
          from: 83,
          to: 100,
        },
        high: 240,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 15,
          date: "2016-03-03T00:47:30+00:00",
        },
        {
          glucose: 69,
          date: "2016-03-03T06:49:31+00:00",
        },
        {
          glucose: 49,
          date: "2016-03-03T10:24:44+00:00",
        },
        {
          glucose: 60,
          date: "2016-03-03T13:21:24+00:00",
        },
        {
          glucose: 72,
          date: "2016-03-03T15:36:57+00:00",
        },
        {
          glucose: 85,
          date: "2016-03-03T19:18:35+00:00",
        },
        {
          glucose: 95,
          date: "2016-03-03T22:01:16+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd09c1a311e2362684f",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Wolfe",
      surname: "Suarez",
      fullname: "Wolfe Suarez",
      dateOfBirth: "2001-07-24T21:53:39+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 38,
        ideal: {
          from: 82,
          to: 94,
        },
        high: 244,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 26,
          date: "2019-02-15T00:35:29+00:00",
        },
        {
          glucose: 87,
          date: "2019-02-15T06:19:01+00:00",
        },
        {
          glucose: 63,
          date: "2019-02-15T11:09:27+00:00",
        },
        {
          glucose: 98,
          date: "2019-02-15T12:00:15+00:00",
        },
        {
          glucose: 38,
          date: "2019-02-15T15:03:06+00:00",
        },
        {
          glucose: 143,
          date: "2019-02-15T22:01:49+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd03a901df4892e4d17",
      practitionerId: "2588ac7f57fd9b49",
      name: "Meredith",
      surname: "Wynn",
      fullname: "Meredith Wynn",
      dateOfBirth: "1999-01-31T15:30:16+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 19,
        ideal: {
          from: 62,
          to: 105,
        },
        high: 247,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 14,
          date: "2019-01-15T00:08:51+00:00",
        },
        {
          glucose: 30,
          date: "2019-01-15T07:43:23+00:00",
        },
        {
          glucose: 2,
          date: "2019-01-15T11:25:08+00:00",
        },
        {
          glucose: 11,
          date: "2019-01-15T13:38:36+00:00",
        },
        {
          glucose: 6,
          date: "2019-01-15T15:50:51+00:00",
        },
        {
          glucose: 136,
          date: "2019-01-15T19:49:04+00:00",
        },
        {
          glucose: 36,
          date: "2019-01-15T21:10:14+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd03e9bc2583613a829",
      practitionerId: "0d1c3d11d4ae1a66",
      name: "Kasey",
      surname: "Armstrong",
      fullname: "Kasey Armstrong",
      dateOfBirth: "2004-05-04T05:46:14+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 39,
        ideal: {
          from: 79,
          to: 97,
        },
        high: 244,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 106,
          date: "2019-10-13T00:27:20+00:00",
        },
        {
          glucose: 59,
          date: "2019-10-13T07:47:33+00:00",
        },
        {
          glucose: 13,
          date: "2019-10-13T10:37:52+00:00",
        },
        {
          glucose: 153,
          date: "2019-10-13T13:25:31+00:00",
        },
        {
          glucose: 134,
          date: "2019-10-13T19:58:29+00:00",
        },
        {
          glucose: 152,
          date: "2019-10-13T21:14:34+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd04720dce14f262f6e",
      practitionerId: "a65e5ee7e8abae6d",
      name: "Sheena",
      surname: "Stafford",
      fullname: "Sheena Stafford",
      dateOfBirth: "1980-06-21T17:50:48+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 32,
        ideal: {
          from: 63,
          to: 113,
        },
        high: 241,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 55,
          date: "2018-05-06T00:58:29+00:00",
        },
        {
          glucose: 2,
          date: "2018-05-06T08:38:52+00:00",
        },
        {
          glucose: 101,
          date: "2018-05-06T09:41:43+00:00",
        },
        {
          glucose: 109,
          date: "2018-05-06T12:28:36+00:00",
        },
        {
          glucose: 106,
          date: "2018-05-06T14:54:21+00:00",
        },
        {
          glucose: 68,
          date: "2018-05-06T18:41:59+00:00",
        },
        {
          glucose: 93,
          date: "2018-05-06T22:37:36+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd00fa0a884ab8e92f4",
      practitionerId: "a65e5ee7e8abae6d",
      name: "Geneva",
      surname: "Stark",
      fullname: "Geneva Stark",
      dateOfBirth: "1991-08-26T08:51:25+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 21,
        ideal: {
          from: 68,
          to: 91,
        },
        high: 249,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 74,
          date: "2016-10-22T00:31:41+00:00",
        },
        {
          glucose: 48,
          date: "2016-10-22T06:40:41+00:00",
        },
        {
          glucose: 14,
          date: "2016-10-22T11:42:32+00:00",
        },
        {
          glucose: 146,
          date: "2016-10-22T14:33:20+00:00",
        },
        {
          glucose: 93,
          date: "2016-10-22T18:28:18+00:00",
        },
        {
          glucose: 111,
          date: "2016-10-22T22:34:27+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0ba45adc1f8b63df5",
      practitionerId: "eb6f5c176b7ddc6d",
      name: "Catherine",
      surname: "Rivera",
      fullname: "Catherine Rivera",
      dateOfBirth: "1990-10-14T05:31:16+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 42,
        ideal: {
          from: 83,
          to: 94,
        },
        high: 249,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 96,
          date: "2019-01-05T00:03:03+00:00",
        },
        {
          glucose: 65,
          date: "2019-01-05T08:34:44+00:00",
        },
        {
          glucose: 37,
          date: "2019-01-05T09:04:48+00:00",
        },
        {
          glucose: 4,
          date: "2019-01-05T13:10:37+00:00",
        },
        {
          glucose: 133,
          date: "2019-01-05T15:48:48+00:00",
        },
        {
          glucose: 39,
          date: "2019-01-05T19:34:13+00:00",
        },
        {
          glucose: 7,
          date: "2019-01-05T21:37:44+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd09f8c4a2b6c9ff1be",
      practitionerId: "a65e5ee7e8abae6d",
      name: "Nicholson",
      surname: "Fuller",
      fullname: "Nicholson Fuller",
      dateOfBirth: "2007-08-09T23:55:49+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 48,
        ideal: {
          from: 73,
          to: 106,
        },
        high: 243,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 69,
          date: "2018-11-23T00:05:51+00:00",
        },
        {
          glucose: 84,
          date: "2018-11-23T07:18:23+00:00",
        },
        {
          glucose: 21,
          date: "2018-11-23T10:21:19+00:00",
        },
        {
          glucose: 88,
          date: "2018-11-23T16:54:06+00:00",
        },
        {
          glucose: 37,
          date: "2018-11-23T18:50:59+00:00",
        },
        {
          glucose: 106,
          date: "2018-11-23T21:54:09+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0b507a5eb54d2a225",
      practitionerId: "a7e46537714eca83",
      name: "Crawford",
      surname: "Freeman",
      fullname: "Crawford Freeman",
      dateOfBirth: "2003-01-01T19:53:57+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 50,
        ideal: {
          from: 62,
          to: 103,
        },
        high: 241,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 98,
          date: "2015-06-19T00:50:32+00:00",
        },
        {
          glucose: 148,
          date: "2015-06-19T08:20:01+00:00",
        },
        {
          glucose: 127,
          date: "2015-06-19T09:37:16+00:00",
        },
        {
          glucose: 77,
          date: "2015-06-19T12:51:39+00:00",
        },
        {
          glucose: 12,
          date: "2015-06-19T16:58:49+00:00",
        },
        {
          glucose: 27,
          date: "2015-06-19T19:31:01+00:00",
        },
        {
          glucose: 26,
          date: "2015-06-19T22:46:17+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0ff765a3196abd14e",
      practitionerId: "0d1c3d11d4ae1a66",
      name: "Susanne",
      surname: "Kramer",
      fullname: "Susanne Kramer",
      dateOfBirth: "2001-04-06T03:55:47+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 36,
        ideal: {
          from: 75,
          to: 114,
        },
        high: 247,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 102,
          date: "2017-03-10T00:52:58+00:00",
        },
        {
          glucose: 87,
          date: "2017-03-10T06:10:43+00:00",
        },
        {
          glucose: 68,
          date: "2017-03-10T10:40:45+00:00",
        },
        {
          glucose: 19,
          date: "2017-03-10T12:08:34+00:00",
        },
        {
          glucose: 138,
          date: "2017-03-10T16:52:14+00:00",
        },
        {
          glucose: 21,
          date: "2017-03-10T21:05:44+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd014c4f6917bdf4ac6",
      practitionerId: "a7e46537714eca83",
      name: "Lillie",
      surname: "Greer",
      fullname: "Lillie Greer",
      dateOfBirth: "2000-06-27T12:18:17+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 34,
        ideal: {
          from: 82,
          to: 110,
        },
        high: 250,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 131,
          date: "2019-08-18T00:16:09+00:00",
        },
        {
          glucose: 116,
          date: "2019-08-18T07:01:33+00:00",
        },
        {
          glucose: 71,
          date: "2019-08-18T09:00:39+00:00",
        },
        {
          glucose: 137,
          date: "2019-08-18T12:20:38+00:00",
        },
        {
          glucose: 31,
          date: "2019-08-18T16:54:47+00:00",
        },
        {
          glucose: 44,
          date: "2019-08-18T19:42:53+00:00",
        },
        {
          glucose: 11,
          date: "2019-08-18T21:18:02+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd083a41d30449bbd74",
      practitionerId: "eb6f5c176b7ddc6d",
      name: "Carroll",
      surname: "Vaughan",
      fullname: "Carroll Vaughan",
      dateOfBirth: "1993-12-12T11:52:11+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 36,
        ideal: {
          from: 64,
          to: 91,
        },
        high: 241,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 76,
          date: "2014-07-20T00:15:56+00:00",
        },
        {
          glucose: 110,
          date: "2014-07-20T07:59:12+00:00",
        },
        {
          glucose: 129,
          date: "2014-07-20T12:08:34+00:00",
        },
        {
          glucose: 151,
          date: "2014-07-20T14:29:06+00:00",
        },
        {
          glucose: 146,
          date: "2014-07-20T18:53:28+00:00",
        },
        {
          glucose: 145,
          date: "2014-07-20T21:55:50+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd08f6c1a2cfb93a2dd",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Charity",
      surname: "Perkins",
      fullname: "Charity Perkins",
      dateOfBirth: "1999-01-16T23:40:05+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 60,
        ideal: {
          from: 85,
          to: 102,
        },
        high: 250,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 89,
          date: "2016-03-01T00:23:30+00:00",
        },
        {
          glucose: 78,
          date: "2016-03-01T08:31:48+00:00",
        },
        {
          glucose: 160,
          date: "2016-03-01T09:59:12+00:00",
        },
        {
          glucose: 67,
          date: "2016-03-01T13:58:34+00:00",
        },
        {
          glucose: 63,
          date: "2016-03-01T14:32:51+00:00",
        },
        {
          glucose: 66,
          date: "2016-03-01T18:38:50+00:00",
        },
        {
          glucose: 134,
          date: "2016-03-01T21:47:01+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0febad41113131dec",
      practitionerId: "a65e5ee7e8abae6d",
      name: "Felecia",
      surname: "Shelton",
      fullname: "Felecia Shelton",
      dateOfBirth: "1982-08-24T23:00:05+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 60,
        ideal: {
          from: 73,
          to: 99,
        },
        high: 247,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 16,
          date: "2019-04-15T00:27:31+00:00",
        },
        {
          glucose: 6,
          date: "2019-04-15T07:47:06+00:00",
        },
        {
          glucose: 67,
          date: "2019-04-15T10:48:23+00:00",
        },
        {
          glucose: 70,
          date: "2019-04-15T13:57:34+00:00",
        },
        {
          glucose: 160,
          date: "2019-04-15T14:45:34+00:00",
        },
        {
          glucose: 142,
          date: "2019-04-15T22:56:52+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd05caa15b8677807d1",
      practitionerId: "eb6f5c176b7ddc6d",
      name: "Ethel",
      surname: "Fernandez",
      fullname: "Ethel Fernandez",
      dateOfBirth: "2004-09-29T00:05:09+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 50,
        ideal: {
          from: 84,
          to: 101,
        },
        high: 241,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 11,
          date: "2019-07-08T00:44:47+00:00",
        },
        {
          glucose: 151,
          date: "2019-07-08T06:48:56+00:00",
        },
        {
          glucose: 62,
          date: "2019-07-08T10:10:13+00:00",
        },
        {
          glucose: 99,
          date: "2019-07-08T13:52:27+00:00",
        },
        {
          glucose: 76,
          date: "2019-07-08T15:56:18+00:00",
        },
        {
          glucose: 128,
          date: "2019-07-08T18:22:51+00:00",
        },
        {
          glucose: 65,
          date: "2019-07-08T21:15:34+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0c25c4511d3c29962",
      practitionerId: "a7e46537714eca83",
      name: "Hazel",
      surname: "Peck",
      fullname: "Hazel Peck",
      dateOfBirth: "2003-08-01T09:47:45+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 50,
        ideal: {
          from: 81,
          to: 103,
        },
        high: 246,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 130,
          date: "2015-02-05T00:09:33+00:00",
        },
        {
          glucose: 147,
          date: "2015-02-05T06:17:44+00:00",
        },
        {
          glucose: 5,
          date: "2015-02-05T11:09:59+00:00",
        },
        {
          glucose: 35,
          date: "2015-02-05T13:28:12+00:00",
        },
        {
          glucose: 51,
          date: "2015-02-05T15:47:51+00:00",
        },
        {
          glucose: 131,
          date: "2015-02-05T19:57:07+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd06135b2b0fa7bb5a3",
      practitionerId: "0d1c3d11d4ae1a66",
      name: "Robinson",
      surname: "Meyers",
      fullname: "Robinson Meyers",
      dateOfBirth: "1999-01-23T03:54:43+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 36,
        ideal: {
          from: 70,
          to: 115,
        },
        high: 245,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 29,
          date: "2014-06-23T00:23:20+00:00",
        },
        {
          glucose: 9,
          date: "2014-06-23T08:03:11+00:00",
        },
        {
          glucose: 35,
          date: "2014-06-23T09:13:22+00:00",
        },
        {
          glucose: 116,
          date: "2014-06-23T13:14:02+00:00",
        },
        {
          glucose: 159,
          date: "2014-06-23T16:52:42+00:00",
        },
        {
          glucose: 100,
          date: "2014-06-23T18:39:08+00:00",
        },
        {
          glucose: 64,
          date: "2014-06-23T21:59:43+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0f3fe6611bdf6bfb7",
      practitionerId: "0d1c3d11d4ae1a66",
      name: "Dejesus",
      surname: "Talley",
      fullname: "Dejesus Talley",
      dateOfBirth: "1986-06-08T09:30:59+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 12,
        ideal: {
          from: 86,
          to: 116,
        },
        high: 249,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 142,
          date: "2017-11-01T06:38:20+00:00",
        },
        {
          glucose: 143,
          date: "2017-11-01T11:57:16+00:00",
        },
        {
          glucose: 97,
          date: "2017-11-01T13:08:04+00:00",
        },
        {
          glucose: 79,
          date: "2017-11-01T16:44:57+00:00",
        },
        {
          glucose: 68,
          date: "2017-11-01T19:55:09+00:00",
        },
        {
          glucose: 102,
          date: "2017-11-01T22:14:46+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd07a9e9da33cc63733",
      practitionerId: "eb6f5c176b7ddc6d",
      name: "Golden",
      surname: "Barrett",
      fullname: "Golden Barrett",
      dateOfBirth: "1988-01-04T19:32:39+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 47,
        ideal: {
          from: 84,
          to: 120,
        },
        high: 244,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 140,
          date: "2016-04-02T00:34:39+00:00",
        },
        {
          glucose: 69,
          date: "2016-04-02T07:06:18+00:00",
        },
        {
          glucose: 84,
          date: "2016-04-02T10:59:51+00:00",
        },
        {
          glucose: 85,
          date: "2016-04-02T12:32:46+00:00",
        },
        {
          glucose: 79,
          date: "2016-04-02T16:49:24+00:00",
        },
        {
          glucose: 65,
          date: "2016-04-02T19:35:14+00:00",
        },
        {
          glucose: 27,
          date: "2016-04-02T21:49:30+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd00007b9f4747a84ef",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Lucinda",
      surname: "Turner",
      fullname: "Lucinda Turner",
      dateOfBirth: "2001-02-13T08:51:18+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 35,
        ideal: {
          from: 63,
          to: 114,
        },
        high: 245,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 19,
          date: "2018-09-16T00:55:30+00:00",
        },
        {
          glucose: 85,
          date: "2018-09-16T08:29:38+00:00",
        },
        {
          glucose: 57,
          date: "2018-09-16T10:15:46+00:00",
        },
        {
          glucose: 49,
          date: "2018-09-16T12:01:26+00:00",
        },
        {
          glucose: 28,
          date: "2018-09-16T19:41:21+00:00",
        },
        {
          glucose: 95,
          date: "2018-09-16T22:33:13+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0bde5c9586bc3a571",
      practitionerId: "4b7a0f1066140e03",
      name: "Goodwin",
      surname: "Ford",
      fullname: "Goodwin Ford",
      dateOfBirth: "1990-09-05T17:03:51+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 37,
        ideal: {
          from: 68,
          to: 102,
        },
        high: 250,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 16,
          date: "2015-09-20T00:24:24+00:00",
        },
        {
          glucose: 125,
          date: "2015-09-20T06:56:15+00:00",
        },
        {
          glucose: 106,
          date: "2015-09-20T10:17:36+00:00",
        },
        {
          glucose: 23,
          date: "2015-09-20T12:56:11+00:00",
        },
        {
          glucose: 47,
          date: "2015-09-20T14:42:42+00:00",
        },
        {
          glucose: 127,
          date: "2015-09-20T19:03:03+00:00",
        },
        {
          glucose: 85,
          date: "2015-09-20T22:05:16+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd04ce3cb0619cebaa0",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Araceli",
      surname: "Park",
      fullname: "Araceli Park",
      dateOfBirth: "2011-01-23T23:37:25+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 15,
        ideal: {
          from: 66,
          to: 102,
        },
        high: 247,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 26,
          date: "2019-02-27T00:54:39+00:00",
        },
        {
          glucose: 14,
          date: "2019-02-27T10:44:01+00:00",
        },
        {
          glucose: 105,
          date: "2019-02-27T12:18:55+00:00",
        },
        {
          glucose: 87,
          date: "2019-02-27T16:41:33+00:00",
        },
        {
          glucose: 68,
          date: "2019-02-27T19:33:10+00:00",
        },
        {
          glucose: 55,
          date: "2019-02-27T22:50:17+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0b851aca584efcb9b",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Alice",
      surname: "Hines",
      fullname: "Alice Hines",
      dateOfBirth: "1983-03-26T10:43:26+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 12,
        ideal: {
          from: 64,
          to: 108,
        },
        high: 242,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 3,
          date: "2019-04-09T00:40:23+00:00",
        },
        {
          glucose: 85,
          date: "2019-04-09T06:56:05+00:00",
        },
        {
          glucose: 41,
          date: "2019-04-09T10:19:15+00:00",
        },
        {
          glucose: 121,
          date: "2019-04-09T13:54:44+00:00",
        },
        {
          glucose: 56,
          date: "2019-04-09T16:59:25+00:00",
        },
        {
          glucose: 66,
          date: "2019-04-09T19:19:27+00:00",
        },
        {
          glucose: 51,
          date: "2019-04-09T21:58:03+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd035d2d6011b1f8b64",
      practitionerId: "a65e5ee7e8abae6d",
      name: "Sims",
      surname: "Blankenship",
      fullname: "Sims Blankenship",
      dateOfBirth: "1990-05-20T12:35:07+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 14,
        ideal: {
          from: 69,
          to: 95,
        },
        high: 241,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 153,
          date: "2018-10-05T00:08:58+00:00",
        },
        {
          glucose: 123,
          date: "2018-10-05T08:17:26+00:00",
        },
        {
          glucose: 129,
          date: "2018-10-05T10:47:19+00:00",
        },
        {
          glucose: 29,
          date: "2018-10-05T13:37:07+00:00",
        },
        {
          glucose: 124,
          date: "2018-10-05T19:13:32+00:00",
        },
        {
          glucose: 49,
          date: "2018-10-05T22:06:35+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0c6edccf5a1efcf09",
      practitionerId: "2588ac7f57fd9b49",
      name: "Mara",
      surname: "Sexton",
      fullname: "Mara Sexton",
      dateOfBirth: "2001-07-12T01:26:23+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 21,
        ideal: {
          from: 70,
          to: 101,
        },
        high: 245,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 54,
          date: "2016-05-28T00:38:14+00:00",
        },
        {
          glucose: 112,
          date: "2016-05-28T06:22:41+00:00",
        },
        {
          glucose: 4,
          date: "2016-05-28T11:27:12+00:00",
        },
        {
          glucose: 30,
          date: "2016-05-28T12:57:38+00:00",
        },
        {
          glucose: 107,
          date: "2016-05-28T15:19:46+00:00",
        },
        {
          glucose: 145,
          date: "2016-05-28T18:22:03+00:00",
        },
        {
          glucose: 58,
          date: "2016-05-28T22:14:17+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd05844ff5c8b6164fb",
      practitionerId: "b980e8d1fc31b5aa",
      name: "Snyder",
      surname: "Ware",
      fullname: "Snyder Ware",
      dateOfBirth: "1987-05-27T18:15:50+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 34,
        ideal: {
          from: 80,
          to: 95,
        },
        high: 241,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 29,
          date: "2015-04-20T06:04:19+00:00",
        },
        {
          glucose: 26,
          date: "2015-04-20T09:44:48+00:00",
        },
        {
          glucose: 150,
          date: "2015-04-20T12:11:06+00:00",
        },
        {
          glucose: 88,
          date: "2015-04-20T16:54:40+00:00",
        },
        {
          glucose: 70,
          date: "2015-04-20T19:54:41+00:00",
        },
        {
          glucose: 112,
          date: "2015-04-20T22:16:11+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0c46bc5142605224f",
      practitionerId: "a7e46537714eca83",
      name: "Margo",
      surname: "Williamson",
      fullname: "Margo Williamson",
      dateOfBirth: "2004-03-06T15:54:24+00:00",
      diabetesType: "DIABETES_TYPE2",
      ranges: {
        low: 28,
        ideal: {
          from: 74,
          to: 107,
        },
        high: 242,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 100,
          date: "2018-02-20T00:43:25+00:00",
        },
        {
          glucose: 154,
          date: "2018-02-20T07:33:48+00:00",
        },
        {
          glucose: 118,
          date: "2018-02-20T10:30:19+00:00",
        },
        {
          glucose: 4,
          date: "2018-02-20T12:54:33+00:00",
        },
        {
          glucose: 54,
          date: "2018-02-20T16:39:31+00:00",
        },
        {
          glucose: 13,
          date: "2018-02-20T18:22:21+00:00",
        },
        {
          glucose: 8,
          date: "2018-02-20T22:48:17+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd014908214bdfa816b",
      practitionerId: "a7e46537714eca83",
      name: "Hutchinson",
      surname: "Paul",
      fullname: "Hutchinson Paul",
      dateOfBirth: "2005-04-13T15:14:32+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 39,
        ideal: {
          from: 62,
          to: 117,
        },
        high: 243,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 112,
          date: "2018-08-21T08:15:08+00:00",
        },
        {
          glucose: 122,
          date: "2018-08-21T10:30:49+00:00",
        },
        {
          glucose: 128,
          date: "2018-08-21T13:28:57+00:00",
        },
        {
          glucose: 126,
          date: "2018-08-21T16:40:52+00:00",
        },
        {
          glucose: 144,
          date: "2018-08-21T19:00:42+00:00",
        },
        {
          glucose: 78,
          date: "2018-08-21T22:20:07+00:00",
        },
      ],
    },
    {
      patientId: "5cc17bd0fbdcb5e647fa4dfe",
      practitionerId: "a7e46537714eca83",
      name: "Ana",
      surname: "Rocha",
      fullname: "Ana Rocha",
      dateOfBirth: "1995-04-17T16:56:58+00:00",
      diabetesType: "DIABETES_TYPE1",
      ranges: {
        low: 10,
        ideal: {
          from: 63,
          to: 119,
        },
        high: 246,
      },
      timeBlocks: {
        night: {
          from: "00:00",
          to: "06:00",
        },
        breakfast: {
          from: "06:00",
          to: "12:00",
        },
        lunch: {
          from: "12:00",
          to: "18:00",
        },
        dinner: {
          from: "18:00",
          to: "00:00",
        },
      },
      glucoseMesures: [
        {
          glucose: 139,
          date: "2018-07-15T00:17:09+00:00",
        },
        {
          glucose: 130,
          date: "2018-07-15T08:49:48+00:00",
        },
        {
          glucose: 61,
          date: "2018-07-15T11:27:33+00:00",
        },
        {
          glucose: 16,
          date: "2018-07-15T13:16:25+00:00",
        },
        {
          glucose: 40,
          date: "2018-07-15T16:06:53+00:00",
        },
        {
          glucose: 113,
          date: "2018-07-15T18:12:59+00:00",
        },
        {
          glucose: 104,
          date: "2018-07-15T22:46:35+00:00",
        },
      ],
    },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
