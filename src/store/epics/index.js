import { combineEpics } from 'redux-observable';
import { loginUserEpic} from "@/store/epics/LoginEpic";

const epics = combineEpics(loginUserEpic);

export default epics