import Realm from 'realm';

import HistorySchema from '../schemas/HistorySchema';

export default function getRealm(){
    return Realm.open({
        schema: [HistorySchema],
    });
}