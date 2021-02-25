const INITIAL_STATE = {
    "name": "Madrid",
    "lat": 45.4165,
    "lon": -8.7026,
    "timezone": "Etc/GMT+1",
    "timezone_offset": -3600,
    "current": {
      "dt": 1614251577,
      "sunrise": 1614237611,
      "sunset": 1614276952,
      "temp": 284.24,
      "feels_like": 277.16,
      "pressure": 1031,
      "humidity": 70,
      "dew_point": 278.98,
      "uvi": 1.97,
      "clouds": 64,
      "visibility": 10000,
      "wind_speed": 8.75,
      "wind_deg": 8,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ]
    },
    "hourly": [
      {
        "dt": 1614250800,
        "temp": 284.24,
        "feels_like": 277.16,
        "pressure": 1031,
        "humidity": 70,
        "dew_point": 278.98,
        "uvi": 1.97,
        "clouds": 64,
        "visibility": 10000,
        "wind_speed": 8.75,
        "wind_deg": 8,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.21
      },
      {
        "dt": 1614254400,
        "temp": 284.24,
        "feels_like": 277.41,
        "pressure": 1031,
        "humidity": 69,
        "dew_point": 278.78,
        "uvi": 2.46,
        "clouds": 60,
        "visibility": 10000,
        "wind_speed": 8.33,
        "wind_deg": 9,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.13
      },
      {
        "dt": 1614258000,
        "temp": 284.22,
        "feels_like": 277.6,
        "pressure": 1032,
        "humidity": 69,
        "dew_point": 278.76,
        "uvi": 2.59,
        "clouds": 14,
        "visibility": 10000,
        "wind_speed": 8.02,
        "wind_deg": 13,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614261600,
        "temp": 284.19,
        "feels_like": 278.02,
        "pressure": 1033,
        "humidity": 69,
        "dew_point": 278.73,
        "uvi": 2.17,
        "clouds": 21,
        "visibility": 10000,
        "wind_speed": 7.38,
        "wind_deg": 16,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614265200,
        "temp": 284.16,
        "feels_like": 277.9,
        "pressure": 1033,
        "humidity": 68,
        "dew_point": 278.49,
        "uvi": 1.44,
        "clouds": 13,
        "visibility": 10000,
        "wind_speed": 7.43,
        "wind_deg": 16,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614268800,
        "temp": 284.13,
        "feels_like": 278.03,
        "pressure": 1033,
        "humidity": 67,
        "dew_point": 278.41,
        "uvi": 0.74,
        "clouds": 9,
        "visibility": 10000,
        "wind_speed": 7.14,
        "wind_deg": 23,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614272400,
        "temp": 284.12,
        "feels_like": 278.39,
        "pressure": 1033,
        "humidity": 67,
        "dew_point": 278.24,
        "uvi": 0.23,
        "clouds": 7,
        "visibility": 10000,
        "wind_speed": 6.6,
        "wind_deg": 26,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614276000,
        "temp": 284.12,
        "feels_like": 278.19,
        "pressure": 1034,
        "humidity": 67,
        "dew_point": 278.37,
        "uvi": 0,
        "clouds": 6,
        "visibility": 10000,
        "wind_speed": 6.89,
        "wind_deg": 27,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614279600,
        "temp": 284.1,
        "feels_like": 278.27,
        "pressure": 1035,
        "humidity": 68,
        "dew_point": 278.51,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 6.8,
        "wind_deg": 35,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614283200,
        "temp": 284.1,
        "feels_like": 278.49,
        "pressure": 1035,
        "humidity": 68,
        "dew_point": 278.58,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 6.49,
        "wind_deg": 39,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614286800,
        "temp": 284.07,
        "feels_like": 278.4,
        "pressure": 1036,
        "humidity": 69,
        "dew_point": 278.65,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 6.63,
        "wind_deg": 44,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614290400,
        "temp": 284.03,
        "feels_like": 278.32,
        "pressure": 1036,
        "humidity": 69,
        "dew_point": 278.7,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 6.67,
        "wind_deg": 48,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614294000,
        "temp": 283.96,
        "feels_like": 278.22,
        "pressure": 1036,
        "humidity": 70,
        "dew_point": 278.75,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 6.75,
        "wind_deg": 55,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614297600,
        "temp": 283.89,
        "feels_like": 278.2,
        "pressure": 1035,
        "humidity": 70,
        "dew_point": 278.77,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 6.66,
        "wind_deg": 59,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614301200,
        "temp": 283.83,
        "feels_like": 278.23,
        "pressure": 1035,
        "humidity": 71,
        "dew_point": 278.87,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 6.58,
        "wind_deg": 59,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614304800,
        "temp": 283.77,
        "feels_like": 278.03,
        "pressure": 1035,
        "humidity": 71,
        "dew_point": 278.93,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 6.76,
        "wind_deg": 60,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614308400,
        "temp": 283.7,
        "feels_like": 277.93,
        "pressure": 1035,
        "humidity": 72,
        "dew_point": 278.95,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 6.84,
        "wind_deg": 63,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614312000,
        "temp": 283.63,
        "feels_like": 277.84,
        "pressure": 1034,
        "humidity": 73,
        "dew_point": 279.01,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 6.92,
        "wind_deg": 66,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614315600,
        "temp": 283.6,
        "feels_like": 277.58,
        "pressure": 1034,
        "humidity": 73,
        "dew_point": 279.01,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 7.24,
        "wind_deg": 67,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614319200,
        "temp": 283.6,
        "feels_like": 277.5,
        "pressure": 1034,
        "humidity": 73,
        "dew_point": 279.05,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 7.35,
        "wind_deg": 74,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614322800,
        "temp": 283.57,
        "feels_like": 277.32,
        "pressure": 1034,
        "humidity": 73,
        "dew_point": 279.08,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 7.56,
        "wind_deg": 77,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614326400,
        "temp": 283.57,
        "feels_like": 277.22,
        "pressure": 1034,
        "humidity": 73,
        "dew_point": 279.05,
        "uvi": 0.19,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 7.7,
        "wind_deg": 78,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614330000,
        "temp": 283.6,
        "feels_like": 277.25,
        "pressure": 1035,
        "humidity": 74,
        "dew_point": 279.17,
        "uvi": 0.69,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 7.77,
        "wind_deg": 78,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614333600,
        "temp": 283.62,
        "feels_like": 277.3,
        "pressure": 1035,
        "humidity": 74,
        "dew_point": 279.36,
        "uvi": 1.47,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 7.73,
        "wind_deg": 81,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614337200,
        "temp": 283.67,
        "feels_like": 277.53,
        "pressure": 1035,
        "humidity": 75,
        "dew_point": 279.56,
        "uvi": 2.36,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 7.54,
        "wind_deg": 84,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614340800,
        "temp": 283.77,
        "feels_like": 277.71,
        "pressure": 1036,
        "humidity": 76,
        "dew_point": 279.83,
        "uvi": 2.95,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 7.52,
        "wind_deg": 83,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614344400,
        "temp": 283.82,
        "feels_like": 277.86,
        "pressure": 1036,
        "humidity": 77,
        "dew_point": 280.02,
        "uvi": 3.01,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 7.45,
        "wind_deg": 83,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614348000,
        "temp": 283.82,
        "feels_like": 277.93,
        "pressure": 1035,
        "humidity": 76,
        "dew_point": 279.92,
        "uvi": 2.52,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 7.29,
        "wind_deg": 83,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614351600,
        "temp": 283.79,
        "feels_like": 278.09,
        "pressure": 1035,
        "humidity": 76,
        "dew_point": 279.75,
        "uvi": 1.67,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 7.01,
        "wind_deg": 79,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614355200,
        "temp": 283.76,
        "feels_like": 278.12,
        "pressure": 1035,
        "humidity": 75,
        "dew_point": 279.6,
        "uvi": 0.8,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 6.86,
        "wind_deg": 76,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614358800,
        "temp": 283.7,
        "feels_like": 277.95,
        "pressure": 1035,
        "humidity": 75,
        "dew_point": 279.5,
        "uvi": 0.24,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 6.99,
        "wind_deg": 73,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614362400,
        "temp": 283.64,
        "feels_like": 277.7,
        "pressure": 1035,
        "humidity": 75,
        "dew_point": 279.42,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 7.25,
        "wind_deg": 72,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614366000,
        "temp": 283.63,
        "feels_like": 277.24,
        "pressure": 1035,
        "humidity": 74,
        "dew_point": 279.27,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 7.83,
        "wind_deg": 73,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614369600,
        "temp": 283.62,
        "feels_like": 276.97,
        "pressure": 1036,
        "humidity": 73,
        "dew_point": 279.1,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 8.14,
        "wind_deg": 74,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614373200,
        "temp": 283.54,
        "feels_like": 276.78,
        "pressure": 1036,
        "humidity": 73,
        "dew_point": 279.05,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 8.27,
        "wind_deg": 74,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614376800,
        "temp": 283.43,
        "feels_like": 276.78,
        "pressure": 1037,
        "humidity": 74,
        "dew_point": 279.05,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 8.14,
        "wind_deg": 71,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614380400,
        "temp": 283.34,
        "feels_like": 276.62,
        "pressure": 1037,
        "humidity": 73,
        "dew_point": 278.88,
        "uvi": 0,
        "clouds": 5,
        "visibility": 10000,
        "wind_speed": 8.16,
        "wind_deg": 67,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614384000,
        "temp": 283.27,
        "feels_like": 276.35,
        "pressure": 1036,
        "humidity": 72,
        "dew_point": 278.55,
        "uvi": 0,
        "clouds": 8,
        "visibility": 10000,
        "wind_speed": 8.36,
        "wind_deg": 67,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614387600,
        "temp": 283.24,
        "feels_like": 276.03,
        "pressure": 1036,
        "humidity": 71,
        "dew_point": 278.23,
        "uvi": 0,
        "clouds": 7,
        "visibility": 10000,
        "wind_speed": 8.71,
        "wind_deg": 69,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614391200,
        "temp": 283.23,
        "feels_like": 275.91,
        "pressure": 1036,
        "humidity": 70,
        "dew_point": 278.15,
        "uvi": 0,
        "clouds": 18,
        "visibility": 10000,
        "wind_speed": 8.81,
        "wind_deg": 70,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614394800,
        "temp": 283.22,
        "feels_like": 275.94,
        "pressure": 1036,
        "humidity": 71,
        "dew_point": 278.21,
        "uvi": 0,
        "clouds": 28,
        "visibility": 10000,
        "wind_speed": 8.81,
        "wind_deg": 69,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614398400,
        "temp": 283.23,
        "feels_like": 275.81,
        "pressure": 1036,
        "humidity": 70,
        "dew_point": 278.09,
        "uvi": 0,
        "clouds": 42,
        "visibility": 10000,
        "wind_speed": 8.95,
        "wind_deg": 69,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614402000,
        "temp": 283.25,
        "feels_like": 275.75,
        "pressure": 1035,
        "humidity": 70,
        "dew_point": 278.1,
        "uvi": 0,
        "clouds": 45,
        "visibility": 10000,
        "wind_speed": 9.08,
        "wind_deg": 69,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614405600,
        "temp": 283.21,
        "feels_like": 275.76,
        "pressure": 1035,
        "humidity": 73,
        "dew_point": 278.67,
        "uvi": 0,
        "clouds": 40,
        "visibility": 10000,
        "wind_speed": 9.17,
        "wind_deg": 69,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614409200,
        "temp": 283.21,
        "feels_like": 275.74,
        "pressure": 1035,
        "humidity": 75,
        "dew_point": 279.01,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 9.31,
        "wind_deg": 66,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614412800,
        "temp": 283.27,
        "feels_like": 275.63,
        "pressure": 1035,
        "humidity": 76,
        "dew_point": 279.25,
        "uvi": 0.2,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 9.63,
        "wind_deg": 66,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614416400,
        "temp": 283.34,
        "feels_like": 275.6,
        "pressure": 1036,
        "humidity": 74,
        "dew_point": 279.02,
        "uvi": 0.69,
        "clouds": 11,
        "visibility": 10000,
        "wind_speed": 9.67,
        "wind_deg": 70,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1614420000,
        "temp": 283.37,
        "feels_like": 275.59,
        "pressure": 1036,
        "humidity": 73,
        "dew_point": 278.89,
        "uvi": 1.47,
        "clouds": 13,
        "visibility": 10000,
        "wind_speed": 9.68,
        "wind_deg": 75,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      }
    ],
    "daily": [
      {
        "dt": 1614254400,
        "sunrise": 1614237611,
        "sunset": 1614276952,
        "temp": {
          "day": 284.24,
          "min": 283.89,
          "max": 284.54,
          "night": 283.89,
          "eve": 284.12,
          "morn": 284.44
        },
        "feels_like": {
          "day": 277.41,
          "night": 278.2,
          "eve": 278.19,
          "morn": 276.96
        },
        "pressure": 1031,
        "humidity": 69,
        "dew_point": 278.78,
        "wind_speed": 8.33,
        "wind_deg": 9,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 60,
        "pop": 0.82,
        "rain": 1.19,
        "uvi": 2.59
      },
      {
        "dt": 1614340800,
        "sunrise": 1614323908,
        "sunset": 1614363436,
        "temp": {
          "day": 283.77,
          "min": 283.27,
          "max": 283.83,
          "night": 283.27,
          "eve": 283.64,
          "morn": 283.6
        },
        "feels_like": {
          "day": 277.71,
          "night": 276.35,
          "eve": 277.7,
          "morn": 277.5
        },
        "pressure": 1036,
        "humidity": 76,
        "dew_point": 279.83,
        "wind_speed": 7.52,
        "wind_deg": 83,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": 0,
        "pop": 0,
        "uvi": 3.01
      },
      {
        "dt": 1614427200,
        "sunrise": 1614410203,
        "sunset": 1614449919,
        "temp": {
          "day": 283.37,
          "min": 283.21,
          "max": 283.49,
          "night": 283.48,
          "eve": 283.47,
          "morn": 283.21
        },
        "feels_like": {
          "day": 275.71,
          "night": 275.18,
          "eve": 275.26,
          "morn": 275.76
        },
        "pressure": 1036,
        "humidity": 74,
        "dew_point": 279.11,
        "wind_speed": 9.57,
        "wind_deg": 76,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": 10,
        "pop": 0,
        "uvi": 2.98
      },
      {
        "dt": 1614513600,
        "sunrise": 1614496498,
        "sunset": 1614536402,
        "temp": {
          "day": 283.39,
          "min": 283.29,
          "max": 283.75,
          "night": 283.68,
          "eve": 283.43,
          "morn": 283.67
        },
        "feels_like": {
          "day": 274.29,
          "night": 276.11,
          "eve": 275.32,
          "morn": 275.08
        },
        "pressure": 1028,
        "humidity": 79,
        "dew_point": 280.01,
        "wind_speed": 11.92,
        "wind_deg": 77,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 59,
        "pop": 0.2,
        "rain": 0.18,
        "uvi": 3.04
      },
      {
        "dt": 1614600000,
        "sunrise": 1614582792,
        "sunset": 1614622885,
        "temp": {
          "day": 285.24,
          "min": 283.73,
          "max": 285.89,
          "night": 285.89,
          "eve": 285.24,
          "morn": 284.18
        },
        "feels_like": {
          "day": 281.24,
          "night": 281.45,
          "eve": 282.31,
          "morn": 277.63
        },
        "pressure": 1020,
        "humidity": 82,
        "dew_point": 282.41,
        "wind_speed": 5.45,
        "wind_deg": 121,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 99,
        "pop": 0.2,
        "rain": 0.12,
        "uvi": 2.07
      },
      {
        "dt": 1614686400,
        "sunrise": 1614669085,
        "sunset": 1614709367,
        "temp": {
          "day": 285.58,
          "min": 285.15,
          "max": 285.87,
          "night": 285.15,
          "eve": 285.53,
          "morn": 285.77
        },
        "feels_like": {
          "day": 280.03,
          "night": 282.31,
          "eve": 281.3,
          "morn": 281.89
        },
        "pressure": 1024,
        "humidity": 83,
        "dew_point": 282.84,
        "wind_speed": 7.85,
        "wind_deg": 211,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": 100,
        "pop": 0.07,
        "uvi": 3
      },
      {
        "dt": 1614772800,
        "sunrise": 1614755377,
        "sunset": 1614795850,
        "temp": {
          "day": 284.7,
          "min": 284.56,
          "max": 285.09,
          "night": 285.08,
          "eve": 284.56,
          "morn": 284.96
        },
        "feels_like": {
          "day": 283.57,
          "night": 281.63,
          "eve": 280.7,
          "morn": 283.75
        },
        "pressure": 1030,
        "humidity": 79,
        "dew_point": 281.25,
        "wind_speed": 0.96,
        "wind_deg": 60,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 100,
        "pop": 0.43,
        "rain": 0.53,
        "uvi": 3
      },
      {
        "dt": 1614859200,
        "sunrise": 1614841668,
        "sunset": 1614882331,
        "temp": {
          "day": 284.99,
          "min": 284.7,
          "max": 285.13,
          "night": 284.7,
          "eve": 285.1,
          "morn": 284.91
        },
        "feels_like": {
          "day": 281.79,
          "night": 281.6,
          "eve": 283.01,
          "morn": 280.64
        },
        "pressure": 1031,
        "humidity": 88,
        "dew_point": 283.18,
        "wind_speed": 4.6,
        "wind_deg": 96,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": 70,
        "pop": 0,
        "uvi": 3
      }
    ]
}

export default INITIAL_STATE;