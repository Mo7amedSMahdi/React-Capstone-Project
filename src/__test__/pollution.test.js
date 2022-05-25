import reducer, { dataRequested, dataReceived } from '../store/pollution';

describe('pollution reducer test', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      list: [],
      loading: false,
      lastFetch: null,
    });
  });

  test('should handle data requested', () => {
    const previousState = {
      list: [],
      loading: false,
      lastFetch: null,
    };
    expect(reducer(previousState, dataRequested())).toEqual({
      list: [],
      loading: true,
      lastFetch: null,
    });
  });

  test('should handle dataReceived', () => {
    const previousState = { list: [], loading: false, lastFetch: null };
    const obj = [
      {
        coord: {
          lon: 20,
          lat: 41,
        },
        list: [
          {
            main: {
              aqi: 'Poor',
            },
            components: {
              co: 195.27,
              no: 0.47,
              no2: 2.06,
              o3: 77.96,
              so2: 1.09,
              pm2_5: 25.28,
              pm10: 41.55,
              nh3: 1.93,
            },
            dt: 1653465600,
          },
        ],
        id: 'cc57332e-ed0b-4ab3-ad3c-9ebb5b811b16',
        country: 'Albania',
        map: 'https://raw.githubusercontent.com/djaiss/mapsicon/master/europe/al/1024.png',
      },
    ];
    expect(reducer(previousState, dataReceived(obj))).toEqual({
      lastFetch: Date.now(),
      list: [
        {
          coord: { lat: 41, lon: 20 },
          country: 'Albania',
          id: 'cc57332e-ed0b-4ab3-ad3c-9ebb5b811b16',
          list: [
            {
              components: { co: 195.27, nh3: 1.93, no: 0.47, no2: 2.06, o3: 77.96, pm10: 41.55, pm2_5: 25.28, so2: 1.09 },
              dt: 1653465600,
              main: { aqi: 'Poor' },
            },
          ],
          map: 'https://raw.githubusercontent.com/djaiss/mapsicon/master/europe/al/1024.png',
        },
      ],
      loading: false,
    });
  });
});
