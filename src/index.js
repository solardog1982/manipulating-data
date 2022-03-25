import { companiesData } from "./companies-data";
import { salesData } from "./sales-data";

const before = document.getElementById("before");
before.innerHTML = JSON.stringify(companiesData, null, 1);

function constructNewObject (e) {
    const obj = {
        CompanyName: e.fieldData.CompanyName,
        Id: e.fieldData.Id,
        StreedAddress: e.fieldData.StreetAddress,
        Zip: e.fieldData.Zip,
        cityState: `${e.fieldData.City}, ${e.fieldData.State}`,
        State: e.fieldData.State
    };
    return obj;
};

const filterData = function(e) {
return e.State === "TX";
};

const manipulatedData = companiesData
.map(constructNewObject) //construct the new object with just texas records
.filter(filterData); //only show texas records
// manipulatedData = manipulatedData.filter(filterData);


//functions are here
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData, null , 1 );

