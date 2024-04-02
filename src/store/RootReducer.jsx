import { combineReducers } from "redux";
import alertReducer from "./alert/Alert";
import authenticationReducer from "./authentication/Authentication";
import dataListReducer from "./dataList/DataList"; 
import filterValueReducer from "./filterValue/FilterValue"; 
import paginationReducer from "./pagination/Pagination";
import parentFilterReducer from "./parentFilter/ParentFilter";
import permissionsReducer from "./permissions/Permissions";

const appReducer = combineReducers({
  alert: alertReducer,
  authentication: authenticationReducer,
  datalist: dataListReducer,
  filtervalue: filterValueReducer, 
  pagination: paginationReducer,
  parentfilter: parentFilterReducer,
  permissions: permissionsReducer,
});

export default appReducer;
