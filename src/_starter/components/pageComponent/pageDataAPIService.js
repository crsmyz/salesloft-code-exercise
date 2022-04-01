export function fetchPageData(setPeopleData) {
    return fetch("https://ui-offline-exercise.s3.amazonaws.com/data/people.json")
    .then(response => response.json())
    .then(
      (peopleData) => {
        setPeopleData(peopleData);
      },
      // throw error from api call
      (error) => {
        throw error;
      }
    )
}