
export default {
    /**
     * Simple example.
     * Every monday at 1am.
     */

    getCarminConnectData: {
      task: async() => {
        
        const createEntry = async (activity) => {
          const details = await GCClient.getActivity({ activityId: activity.activityId });
          console.log(details)
          await strapi.db.query("api::activity.activity").create({
            data: {
              activityId: activity.activityId,
              activityName: activity.activityName,
              beginTimestamp: activity.beginTimestamp,
              activityType: activity.activityType,
              distance: activity.distance,
              duration: activity.duration,
              elapsedDuration:  activity.elapsedDuration,
              movingDuration: activity.movingDuration,
              elevationGain: activity.elevationGain,
              elevationLoss: activity.elevationLoss,
              minElevation: activity.minElevation,
              maxElevation: activity.minElevation,
              sportTypeId: activity.sportTypeId,
              averageSpeed: activity.averageSpeed * 3.6, //(m/s -> km/h)
              maxSpeed: activity.maxSpeed * 3.6, //(m/s -> km/h)
              startLatitude: activity.startLatitude,
              startLongitude: activity.startLongitude,
              endLatitude: activity.endLatitude,
              endLongitude: activity.endLongitude,
              details: details
            }
          })
        }

        const { GarminConnect } = require('garmin-connect');
        const GCClient = new GarminConnect({
            username: process.env.GARMIN_EMAIL,
            password: process.env.GARMIN_PWD
        });
        // Uses credentials from garmin.config.json or uses supplied params
        await GCClient.login();

        const actitivies = await GCClient.getActivities({
          //0,
          //5
        })

        const getExistingActivities = async () => {
          const existingActivityIds = []
          const strapiActivities = await strapi.db.query("api::activity.activity").findMany()
          
          strapiActivities.map((activity) => {
            existingActivityIds.push(activity.activityID)
          })
          return existingActivityIds
        }

        const exisitingActivities = await getExistingActivities()
        actitivies ? actitivies.map((activity) => {
          const isExisting = exisitingActivities.includes(activity.activityId)
          isExisting ? console.log(activity.activityId + " already exists") : createEntry(activity)
        })
        : console.log("no activities found")

        
        console.log(exisitingActivities)
      },
      options: {
        rule: "32 12 * * *",
      },
    },
  };