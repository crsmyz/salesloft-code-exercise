import { API_ENDPOINTS } from "../../../constants/apiEndpoints"

export async function fetchPageData(setPeopleData, setActivitiesData) {
    const errorHandler = (error) => {
      throw error;
    };
    const peopleData = await fetch(API_ENDPOINTS.peopleEndPoint)
      .then(response => response.json(), errorHandler);
    setPeopleData([peopleData]);
    const upcomingActivitiesData = await fetch(peopleData.upcoming_activities._href)
      .then(response => response.json(), errorHandler);
    const activitiesData = await fetch(peopleData.activities._href)
      .then(response => response.json(), errorHandler);
      setActivitiesData([{upcomingActivitiesData, activitiesData}]);
}
