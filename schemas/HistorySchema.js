export default class HistorySchema{
    static schema = {
        name: 'History',
        primaryKey: 'id',
        properties: {
            id: 'int',
            name: 'string',
            result: 'string'
        }
    }
}