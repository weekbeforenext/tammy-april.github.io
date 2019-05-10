import config from '../config'
/**
 * Load the attendees from the spreadsheet
 * Get the right values from it and assign.
 */
export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
    .get({
      spreadsheetId: config.spreadsheetId,
      range: "RSVP!A1:F2"
    })
    .then(
      response => {
        const data = response.result.values
        const attendees = data.map(attendee => ({
          firstname: attendee[0],
          lastname: attendee[1],
          fridaydinner: attendee[2],
          saturdayceremony: attendee[3],
          sundaybrunch: attendee[4]
        })) || [];
        callback({
          attendees
        })
      },
      response => {
        callback(false, response.result.error)
      }
    )
  })
}
