import AirtablePlus from 'airtable-plus'

export default async function handler(req, res) {
  const eventsTable = new AirtablePlus({
    baseID: process.env.AIRTABLE_BASE_ID,
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: 'Events'
  })

  const events = await eventsTable.read({
    filterByFormula: "AND({Status} = 'Approved', {Coordinates} != '')"
  })

  const eventsInfo = events.map(event => {
    const lat = +event.fields['Coordinates'].split(', ')[0]
    const lng = +event.fields['Coordinates'].split(', ')[1]

    return {
      id: event.id,
      name: event.fields['Name'],
      location: event.fields['Event location'],
      slug: event.fields['Slug'],
      lat: Math.round(lat * 100) / 100,
      lng: Math.round(lng * 100) / 100,
      format: event.fields['Event format']
    }
  })

  return res.status(200).json(eventsInfo)
}
