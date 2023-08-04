import Airtable, {FieldSet, Record} from 'airtable'
import {airTableApiKey, airTableWorkSpaceGuid} from '../application-constants'

const _airTableClient = new Airtable({apiKey: airTableApiKey}).base(airTableWorkSpaceGuid);

export const queryItem = <T>(tableName: string, query: string, mappingFunc: (items: [number, Record<FieldSet>][]) => T) : T => {
    const items: [number, Record<FieldSet>][] = []
    _airTableClient(tableName)
        .select({
            filterByFormula: query
        })
        .eachPage(pages => {
            for(const entry of pages.entries()){
                items.push(entry);
            }
        })
    return mappingFunc(items)
}

export const queryItems = <T>(tableName: string, query: string, mappingFunc: (items: [number, Record<FieldSet>][]) => T[]): T[] => {
    const items: [number, Record<FieldSet>][] = []
    _airTableClient(tableName)
        .select({
            filterByFormula: query
        })
        .eachPage(pages => {
            for(const entry of pages.entries()){
                items.push(entry);
            }
        })
    return mappingFunc(items)
}


