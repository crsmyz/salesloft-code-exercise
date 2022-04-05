// null represents extra panels in the columns
// the API responses seem a bit wonky as their shape requires some data massaging to work with the grid component
export async function fetchPageData(API_ENDPOINT, setColumn1Data, setColumn2Data, setColumn3Data) {
      const peopleData = await fetch(API_ENDPOINT)
        .then(response => response.json(), errorHandler);
      setColumn1Data([peopleData, null, null, null]);
      const upcomingActivitiesData = await fetch(peopleData.upcoming_activities._href)
        .then(response => response.json(), errorHandler);
      const activitiesData = await fetch(peopleData.activities._href)
        .then(response => response.json(), errorHandler);
      setColumn2Data([{upcomingActivitiesData, activitiesData}]);
      // simulates a third API Call filling up the third column
      setColumn3Data([null, null, null, null]);     
}

const errorHandler = (error) => {
  throw error;
};