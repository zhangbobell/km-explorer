import { LIST_DIR } from './constants/ActionTypes';


export default {
    list(pid: string) {
        return {
            type: LIST_DIR,
            payload: pid
        }
    }
}