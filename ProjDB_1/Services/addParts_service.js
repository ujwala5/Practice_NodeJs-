const db = require('../database/db.js');

const addParts = async (bodydata) => {
    let makeId = bodydata.MakeId;
    let partNo = bodydata.PartNo;
    let pDiscription = bodydata.PDiscription;
    let uom = bodydata.UOM;
    let ol = bodydata.OL;
    let minL = bodydata.MinL;
    let location = bodydata.Location;
    let created_by = bodydata.created_by;
    let updated_by = bodydata.updated_by;
    let location_id = bodydata.location_id;

    try {
        let query = "INSERT INTO Tb_Parts(MakeId, PartNo, PDiscription, UOM, OL, MinL, Location, created_by, updated_by,location_id) VALUES ('" + makeId + "','" + partNo + "','" + pDiscription + "','" + uom + "','" + ol + "','" + minL + "','" + location + "','" + created_by + "','" + updated_by + "','" + location_id + "')";
        let result = await db.query(query)
            .then(([rows, field]) => {
                return rows;
            });
        return result;

    } catch (err) {
        console.log("error ==>", err);
    }
};

const getPartsData = async () => {
    try {

        let query = "SELECT * FROM Tb_Parts";
        let result = await db.query(query)
            .then(([row, field]) => {
                return row;
            });
        return result;

    } catch (error) {
        console.log("error => ", error.message);
    }
};

const getPartsById = async (bodyData) => {
    try {
        PId = bodyData.PId;
        let query = "SELECT * FROM Tb_Parts WHERE PId = '" + PId + "'";
        let result = await db.query(query)
            .then(([rows, field]) => {
                return rows;
            });
        return result;
    } catch (error) {
        console.log("error", error.message);
    }
};

const modifyParts = async (bodyData) => {
    let PId = bodyData.PId;
    let PartsNo = bodyData.PartNo;
    let Location = bodyData.Location;
    let location_id = bodyData.location_id;
    try {
        let query = "UPDATE Tb_Parts SET PartNo = '" + PartsNo + "',Location='" + Location + "',location_id='" + location_id + "'WHERE PId = '" + PId + "'";
        let result = await db.query(query)
            .then(([rows, field]) => {
                return rows;
            });
        return rows;
    } catch (error) {
        console.log("error", error);
    }
};

const delPartsById = async (bodyData) => {
    try {

        let PId = bodyData.PId;
        let query = "DELETE FROM Tb_Parts WHERE PId = '" + PId + "'";
        let result = await db.query(query)
            .then(([rows, field]) => {
                return rows;
            });

        return result;
    } catch (error) {
        console.log("error =>", error.message);
    }
};

module.exports = {
    addParts,
    getPartsData,
    getPartsById,
    modifyParts,
    delPartsById
};