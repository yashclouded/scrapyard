import AirtablePlus from 'airtable-plus'

export default async function handler(req, res) {
  const eventsTable = new AirtablePlus({
    baseID: process.env.AIRTABLE_BASE_ID,
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: 'Event Signups'
  })

  const events = await eventsTable.read({
    filterByFormula: "AND({Status} = 'Approved', {Coordinates} != '')"
  })

  const eventsInfo = events.map(event => ({
    id: event.id,
    name: event.fields['Identifier'],
    location: event.fields['Event location'],
    slug: event.fields['Slug'],
    lat: event.fields['Coordinates'].split(', ')[0],
    lng: event.fields['Coordinates'].split(', ')[1],
    format: event.fields['Event format']
  }))

  return res.status(200).json(eventsInfo)
}
